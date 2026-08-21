import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { BlockList } from './components/BlockList';
import { Preview } from './components/Preview';
import { ShareModal } from './components/ShareModal';
import { StandaloneView } from './components/StandaloneView';
import { STARTER_SITES } from './constants/starterSites';
import { generateSiteHtml } from './components/SiteRenderer';
import { compressData, decompressData } from './utils/compress';

const STORAGE_KEY = 'frame_block_site_state_v4';

export function App() {
  // Check if we are on a shared route (/s/:id)
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname;
    if (path.startsWith('/s/')) {
      return { type: 'shared', id: path.replace('/s/', '') };
    }
    const hash = window.location.hash;
    if (hash.startsWith('#s=')) {
      return { type: 'shared', id: hash.replace('#s=', '') };
    }
    return { type: 'editor' };
  });

  // Default site state
  const defaultStarter = STARTER_SITES[0];

  const [title, setTitle] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).title || defaultStarter.title; } catch(e){}
    }
    return defaultStarter.title;
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).theme || defaultStarter.theme; } catch(e){}
    }
    return defaultStarter.theme || 'grad-morning';
  });

  const [customTheme, setCustomTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).customTheme || null; } catch(e){}
    }
    return {
      enabled: false,
      bg: '#ffffff',
      text: '#171717',
      cardBg: '#fafafa',
      border: '#e5e5e5',
      cardBorder: '#f0f0f0',
      buttonBg: '#171717',
      buttonText: '#ffffff',
      buttonHover: '#262626',
      linkHover: '#f4f4f5',
      muted: '#737373'
    };
  });

  const [font, setFont] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).font || defaultStarter.font; } catch(e){}
    }
    return defaultStarter.font || 'sans';
  });

  const [maxWidth, setMaxWidth] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).maxWidth || defaultStarter.maxWidth; } catch(e){}
    }
    return defaultStarter.maxWidth || 'compact';
  });

  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.blocks)) return parsed.blocks;
      } catch(e){}
    }
    return defaultStarter.blocks;
  });

  const [isSharing, setIsSharing] = useState(false);
  const [shareData, setShareData] = useState(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [splitRatio, setSplitRatio] = useState(48); // percentage
  const [toastMessage, setToastMessage] = useState(null);

  const isDraggingRef = useRef(false);

  // Show minimalist toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  // Autosave to localStorage
  useEffect(() => {
    if (currentRoute.type === 'editor') {
      const payload = { title, theme, customTheme, font, maxWidth, blocks };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setIsDirty(true);
      const timer = setTimeout(() => setIsDirty(false), 800);
      return () => clearTimeout(timer);
    }
  }, [title, theme, customTheme, font, maxWidth, blocks, currentRoute.type]);

  // 1-Click Clear All Data
  const handleClearAll = () => {
    setBlocks([]);
    setTitle('My Website');
    showToast('Canvas cleared — start from scratch');
  };

  // Handle Starter Site Selection
  const handleSelectStarter = (starter) => {
    setTitle(starter.title);
    setTheme(starter.theme || 'white');
    if (customTheme?.enabled) setCustomTheme({ ...customTheme, enabled: false });
    setFont(starter.font || 'sans');
    setMaxWidth(starter.maxWidth || 'medium');
    setBlocks(JSON.parse(JSON.stringify(starter.blocks)));
    showToast(`Loaded ${starter.name}`);
  };

  // Export HTML file
  const handleExport = () => {
    const siteData = { title, theme, customTheme, font, maxWidth, blocks };
    const htmlContent = generateSiteHtml(siteData);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'index').toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Exported index.html');
  };

  // Share / Publish site
  const handleShare = async () => {
    setIsSharing(true);
    const siteData = { title, theme, customTheme, font, maxWidth, blocks };
    try {
      const res = await fetch('/api/sandboxes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(siteData)
      });

      if (!res.ok) {
        throw new Error('Publish request failed');
      }

      const data = await res.json();
      setShareData({
        id: data.id,
        fullUrl: `${window.location.origin}/s/${data.id}`,
        title
      });
      setIsShareModalOpen(true);
    } catch (err) {
      console.warn('Backend unavailable, generating portable compressed link', err);
      const compressed = compressData(siteData);
      const hashId = `z_${compressed}`;
      setShareData({
        id: hashId,
        fullUrl: `${window.location.origin}/s/${hashId}`,
        title
      });
      setIsShareModalOpen(true);
    } finally {
      setIsSharing(false);
    }
  };

  // Fork shared project into editor
  const handleFork = (forkData) => {
    setTitle(`${forkData.title || 'Forked Website'} (Fork)`);
    setTheme(forkData.theme || 'white');
    if (forkData.customTheme) setCustomTheme(forkData.customTheme);
    setFont(forkData.font || 'sans');
    setMaxWidth(forkData.maxWidth || 'medium');
    setBlocks(forkData.blocks || []);
    window.history.pushState({}, '', '/');
    setCurrentRoute({ type: 'editor' });
    showToast('Website forked into builder');
  };

  // Open standalone live preview in new tab
  const handleOpenNewTab = () => {
    const siteData = { title, theme, customTheme, font, maxWidth, blocks };
    const htmlContent = generateSiteHtml(siteData);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  // Resizable Split Pane Drag Handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const handleMouseMove = (ev) => {
      if (!isDraggingRef.current) return;
      const totalWidth = window.innerWidth;
      const newRatio = Math.min(Math.max((ev.clientX / totalWidth) * 100, 25), 75);
      setSplitRatio(newRatio);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, []);

  // Keyboard Shortcuts (Ctrl+S / Cmd+S to Share)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleShare();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [title, theme, customTheme, font, maxWidth, blocks]);

  // Handle browser popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/s/')) {
        setCurrentRoute({ type: 'shared', id: path.replace('/s/', '') });
      } else {
        setCurrentRoute({ type: 'editor' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // If on shared route, render standalone page
  if (currentRoute.type === 'shared') {
    return <StandaloneView shareId={currentRoute.id} onFork={handleFork} />;
  }

  const siteData = { title, theme, customTheme, font, maxWidth, blocks };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#fafafa]">
      {/* Minimal Top Header */}
      <Header
        title={title}
        setTitle={setTitle}
        onSelectStarter={handleSelectStarter}
        onClearAll={handleClearAll}
        onExport={handleExport}
        onShare={handleShare}
        isSharing={isSharing}
        isDirty={isDirty}
      />

      {/* Main Split Layout */}
      <main className="flex-1 flex overflow-hidden relative">
        {/* Left: Visual Block Builder Panel */}
        <div style={{ width: `${splitRatio}%` }} className="h-full">
          <BlockList
            blocks={blocks}
            setBlocks={setBlocks}
            theme={theme}
            setTheme={setTheme}
            font={font}
            setFont={setFont}
            maxWidth={maxWidth}
            setMaxWidth={setMaxWidth}
            customTheme={customTheme}
            setCustomTheme={setCustomTheme}
            onClearAll={handleClearAll}
          />
        </div>

        {/* Subtle Draggable Divider */}
        <div
          onMouseDown={handleMouseDown}
          className="w-1 bg-[#e5e5ea] hover:bg-[#a1a1aa] transition-colors cursor-col-resize z-10 flex items-center justify-center group"
          title="Drag to resize panes"
        >
          <div className="w-0.5 h-6 bg-[#a1a1aa] rounded-full group-hover:bg-[#18181b] transition-colors" />
        </div>

        {/* Right: Live Real-Time Website Preview */}
        <div style={{ width: `${100 - splitRatio}%` }} className="h-full">
          <Preview
            siteData={siteData}
            onOpenNewTab={handleOpenNewTab}
          />
        </div>
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        shareId={shareData?.id}
        fullUrl={shareData?.fullUrl}
        title={shareData?.title}
      />

      {/* Minimal Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#18181b] text-[#ffffff] text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-[#27272a] animate-in fade-in slide-in-from-bottom-2 duration-150">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
