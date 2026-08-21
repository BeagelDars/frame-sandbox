import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import { saveSandbox, getSandbox } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// API: Save Sandbox (supports both blocks and raw html)
app.post('/api/sandboxes', (req, res) => {
  try {
    const { 
      title = 'Untitled Website', 
      theme = 'white', 
      font = 'sans', 
      maxWidth = 'medium', 
      blocks = [],
      html = '',
      css = '',
      js = '' 
    } = req.body;
    
    // Generate clean 7-character alphanumeric identifier
    const id = nanoid(7).toLowerCase();
    
    saveSandbox({
      id,
      title: (title || 'Untitled Website').slice(0, 100),
      theme,
      font,
      maxWidth,
      blocks,
      html,
      css,
      js
    });

    const host = req.get('host');
    const protocol = req.protocol;
    
    res.json({
      success: true,
      id,
      url: `/s/${id}`,
      fullUrl: `${protocol}://${host}/s/${id}`
    });
  } catch (error) {
    console.error('Error saving sandbox:', error);
    res.status(500).json({ error: 'Failed to save sandbox' });
  }
});

// API: Get Sandbox by ID
app.get('/api/sandboxes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const sandbox = getSandbox(id);
    if (!sandbox) {
      return res.status(404).json({ error: 'Website not found' });
    }
    res.json(sandbox);
  } catch (error) {
    console.error('Error fetching sandbox:', error);
    res.status(500).json({ error: 'Failed to fetch sandbox' });
  }
});

// Serve frontend static build in production
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// For SPA routes (/s/:id or /), serve index.html if dist exists
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send(`API Server running on port ${PORT}. Client is running on Vite dev server.`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Frame Server running on http://localhost:${PORT}`);
});
