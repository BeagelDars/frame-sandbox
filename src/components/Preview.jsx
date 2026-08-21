import React, { useState, useRef } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ExternalLink
} from 'lucide-react';
import { generateSiteHtml } from './SiteRenderer';

export const Preview = ({
  siteData,
  onOpenNewTab
}) => {
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef(null);

  const htmlContent = generateSiteHtml(siteData);

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      default:
        return '100%';
    }
  };

  const reloadIframe = () => {
    setIframeKey(k => k + 1);
  };

  return (
    <div className="h-full flex flex-col bg-[#f5f5f7]">
      {/* Top Preview Bar */}
      <div className="h-10 border-b border-[#e5e5ea] bg-[#ffffff] px-3 flex items-center justify-between select-none">
        {/* Left: Viewport Switcher */}
        <div className="flex items-center space-x-1 bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
          <button
            onClick={() => setViewport('desktop')}
            title="Desktop (100%)"
            className={`p-1 rounded transition-colors ${
              viewport === 'desktop' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a] hover:text-[#18181b]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            title="Tablet (768px)"
            className={`p-1 rounded transition-colors ${
              viewport === 'tablet' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a] hover:text-[#18181b]'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            title="Mobile (375px)"
            className={`p-1 rounded transition-colors ${
              viewport === 'mobile' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a] hover:text-[#18181b]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-1">
          <button
            onClick={reloadIframe}
            title="Reload Preview"
            className="p-1 text-[#71717a] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {onOpenNewTab && (
            <button
              onClick={onOpenNewTab}
              title="Open full page"
              className="p-1 text-[#71717a] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-3">
        <div
          style={{ width: getViewportWidth(), height: '100%' }}
          className={`transition-all duration-200 bg-[#ffffff] shadow-sm ${
            viewport !== 'desktop' ? 'border border-[#d4d4d8] rounded-lg overflow-hidden' : 'w-full h-full'
          }`}
        >
          <iframe
            key={iframeKey}
            ref={iframeRef}
            srcDoc={htmlContent}
            title="Live Preview"
            sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
            className="w-full h-full border-0 block bg-white"
          />
        </div>
      </div>
    </div>
  );
};
