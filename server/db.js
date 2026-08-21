import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbFilePath = path.join(dataDir, 'sandboxes.json');

// In-memory cache + persistent file sync
let store = new Map();

const loadFromDisk = () => {
  try {
    if (fs.existsSync(dbFilePath)) {
      const raw = fs.readFileSync(dbFilePath, 'utf-8');
      const items = JSON.parse(raw);
      store = new Map(Object.entries(items));
    }
  } catch (err) {
    console.error('Failed to load db from disk, starting fresh:', err);
    store = new Map();
  }
};

const saveToDisk = () => {
  try {
    const obj = Object.fromEntries(store);
    fs.writeFileSync(dbFilePath, JSON.stringify(obj, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to persist db to disk:', err);
  }
};

// Initial load
loadFromDisk();

export const saveSandbox = ({ 
  id, 
  title = 'Untitled Website', 
  theme = 'white', 
  font = 'sans', 
  maxWidth = 'medium', 
  blocks = [],
  html = '', 
  css = '', 
  js = '' 
}) => {
  const item = {
    id,
    title: title || 'Untitled Website',
    theme,
    font,
    maxWidth,
    blocks,
    html,
    css,
    js,
    created_at: Date.now(),
    views: 0
  };
  store.set(id, item);
  saveToDisk();
  return item;
};

export const getSandbox = (id) => {
  const item = store.get(id);
  if (item) {
    item.views = (item.views || 0) + 1;
    saveToDisk();
  }
  return item || null;
};

export default { saveSandbox, getSandbox };
