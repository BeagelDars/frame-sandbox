import React, { useState, useRef, useEffect } from 'react';
import { 
  Share2, 
  Download, 
  Eraser, 
  ChevronDown
} from 'lucide-react';
import { STARTER_SITES } from '../constants/starterSites';

export const Header = ({
  title,
  setTitle,
  onSelectStarter,
  onClearAll,
  onExport,
  onShare,
  isSharing,
  isDirty
}) => {
  const [showStarters, setShowStarters] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowStarters(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-14 border-b border-[#e5e5ea] bg-[#ffffff] px-4 flex items-center justify-between select-none z-20">
      {/* Left: Branding & Title */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-md bg-[#18181b] flex items-center justify-center">
            <div className="w-2 h-2 rounded-[2px] bg-[#ffffff]"></div>
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#18181b] uppercase">
            Frame
          </span>
        </div>

        <div className="h-4 w-[1px] bg-[#e5e5ea]"></div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled Website"
          className="bg-transparent hover:bg-[#f4f4f5] focus:bg-[#ffffff] text-xs font-medium text-[#18181b] px-2 py-1 rounded border border-transparent focus:border-[#d4d4d8] focus:outline-none transition-colors max-w-[200px] truncate"
        />

        {isDirty && (
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#71717a]" title="Unsaved changes"></span>
        )}
      </div>

      {/* Center: Starter Templates */}
      <div className="flex items-center space-x-2">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowStarters(!showStarters)}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs text-[#52525b] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-md transition-colors font-medium"
          >
            <span>Templates</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#a1a1aa]" />
          </button>

          {showStarters && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-72 bg-[#ffffff] rounded-xl border border-[#e5e5ea] shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa]">
                Starter Sites
              </div>
              {STARTER_SITES.map((starter) => (
                <button
                  key={starter.id}
                  onClick={() => {
                    onSelectStarter(starter);
                    setShowStarters(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#f4f4f5] transition-colors group flex flex-col"
                >
                  <span className="text-xs font-medium text-[#18181b] group-hover:text-[#000000]">
                    {starter.name}
                  </span>
                  <span className="text-[11px] text-[#71717a] line-clamp-1">
                    {starter.description}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-1.5">
        {/* 1-Click Clear Canvas */}
        <button
          onClick={onClearAll}
          title="Clear all default blocks (start empty)"
          className="flex items-center space-x-1 px-2.5 py-1.5 text-xs text-[#71717a] hover:text-[#b91c1c] hover:bg-[#fef2f2] rounded-md transition-colors font-medium"
        >
          <Eraser className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Clear Canvas</span>
        </button>

        <button
          onClick={onExport}
          title="Download standalone HTML file"
          className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs text-[#52525b] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-md transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-[#71717a]" />
          <span className="hidden md:inline">Export</span>
        </button>

        {/* Share Button */}
        <button
          onClick={onShare}
          disabled={isSharing}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#18181b] hover:bg-[#27272a] active:bg-[#09090b] text-[#ffffff] text-xs font-medium rounded-md shadow-sm transition-all disabled:opacity-50"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{isSharing ? 'Publishing...' : 'Share'}</span>
        </button>
      </div>
    </header>
  );
};
