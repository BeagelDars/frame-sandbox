import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Copy, 
  Check, 
  Download, 
  Minus,
  Sparkles,
  Layout
} from 'lucide-react';
import { generateSiteHtml } from './SiteRenderer';
import { decompressData } from '../utils/compress';

export const StandaloneView = ({ shareId, onFork }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Check if ID is a compressed hash
    if (shareId && shareId.startsWith('z_')) {
      const decompressed = decompressData(shareId.slice(2));
      if (decompressed) {
        setData(decompressed);
        setLoading(false);
        return;
      }
    }

    // Fetch from API
    fetch(`/api/sandboxes/${shareId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Sandbox not found');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [shareId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!data) return;
    const content = data.blocks ? generateSiteHtml(data) : (data.html || '');
    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(data.title || 'website').toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#fafafa] font-mono text-xs text-[#71717a]">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#18181b] animate-pulse"></div>
          <span>Loading website...</span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fafafa] p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] flex items-center justify-center text-[#71717a] mb-4">
          <Layout className="w-5 h-5" />
        </div>
        <h2 className="text-base font-semibold text-[#18181b] mb-1">Website Not Found</h2>
        <p className="text-xs text-[#71717a] max-w-sm mb-6">
          The requested website link does not exist or may have expired.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-[#18181b] hover:bg-[#27272a] text-[#ffffff] text-xs font-medium rounded-md shadow-sm transition-colors"
        >
          Create Your Own Website
        </a>
      </div>
    );
  }

  const finalHtml = data.blocks ? generateSiteHtml(data) : (data.html || '');

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-white">
      {/* 100% Fullscreen Rendered Site */}
      <iframe
        srcDoc={finalHtml}
        title={data.title || 'Website'}
        sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
        className="w-full h-full border-0 block"
      />

      {/* Minimalist Floating Pill (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-50 select-none">
        {minimized ? (
          <button
            onClick={() => setMinimized(false)}
            title="Expand Frame Pill"
            className="h-8 px-3 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#18181b] border border-[#e5e5ea] shadow-md backdrop-blur-md text-[11px] font-mono flex items-center space-x-1.5 transition-all"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#18181b]"></div>
            <span>Frame</span>
          </button>
        ) : (
          <div className="bg-[#ffffff]/95 backdrop-blur-md border border-[#e5e5ea] rounded-full shadow-lg p-1.5 flex items-center space-x-1 text-xs text-[#18181b] animate-in fade-in slide-in-from-bottom-2 duration-150">
            <button
              onClick={() => onFork && onFork(data)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#18181b] hover:bg-[#27272a] text-[#ffffff] font-medium rounded-full transition-colors"
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Fork in Sandbox</span>
            </button>

            <button
              onClick={handleCopy}
              title="Copy share link"
              className="p-1.5 text-[#71717a] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-full transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#16a34a]" /> : <Copy className="w-3.5 h-3.5 text-[#71717a]" />}
            </button>

            <button
              onClick={handleDownload}
              title="Download HTML file"
              className="p-1.5 text-[#71717a] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-full transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#71717a]" />
            </button>

            <div className="h-3 w-[1px] bg-[#e5e5ea] mx-0.5"></div>

            <button
              onClick={() => setMinimized(true)}
              title="Minimize pill"
              className="p-1.5 text-[#a1a1aa] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-full transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
