import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  QrCode, 
  Code, 
  Globe 
} from 'lucide-react';
import QRCode from 'qrcode';

export const ShareModal = ({ isOpen, onClose, shareId, fullUrl, title }) => {
  const [copied, setCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [tab, setTab] = useState('link'); // 'link' | 'embed' | 'qr'
  const qrCanvasRef = useRef(null);

  const finalUrl = fullUrl || (typeof window !== 'undefined' ? `${window.location.origin}/s/${shareId}` : `/s/${shareId}`);
  const embedCode = `<iframe src="${finalUrl}" width="100%" height="500" frameborder="0"></iframe>`;

  useEffect(() => {
    if (showQR && qrCanvasRef.current && finalUrl) {
      QRCode.toCanvas(qrCanvasRef.current, finalUrl, {
        width: 160,
        margin: 1,
        color: {
          dark: '#18181b',
          light: '#ffffff'
        }
      }, (err) => {
        if (err) console.error(err);
      });
    }
  }, [showQR, finalUrl]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
      <div 
        className="bg-[#ffffff] rounded-xl border border-[#e5e5ea] shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#f0f0f2] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#18181b]">Website Published</h3>
            <p className="text-xs text-[#71717a] mt-0.5">Your unique sandbox link is live</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#a1a1aa] hover:text-[#18181b] hover:bg-[#f4f4f5] rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Main URL box */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#71717a]">
              Shareable URL
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-3 py-2 text-xs font-mono text-[#18181b] truncate select-all">
                {finalUrl}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 px-3 py-2 bg-[#18181b] hover:bg-[#27272a] active:bg-[#09090b] text-[#ffffff] rounded-md text-xs font-medium transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#52525b] hover:text-[#18181b] transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit live site</span>
              <ExternalLink className="w-3 h-3 text-[#a1a1aa]" />
            </a>

            <button
              onClick={() => setShowQR(!showQR)}
              className="inline-flex items-center space-x-1 text-xs text-[#71717a] hover:text-[#18181b] transition-colors"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>{showQR ? 'Hide QR' : 'Show QR'}</span>
            </button>
          </div>

          {/* QR Code Canvas */}
          {showQR && (
            <div className="p-4 bg-[#fafafa] border border-[#f0f0f2] rounded-lg flex flex-col items-center justify-center space-y-2">
              <canvas ref={qrCanvasRef} className="rounded" />
              <span className="text-[11px] text-[#71717a]">Scan with your mobile camera</span>
            </div>
          )}

          {/* Embed snippet toggle */}
          <div className="pt-2 border-t border-[#f0f0f2]">
            <details className="group">
              <summary className="text-xs text-[#71717a] hover:text-[#18181b] cursor-pointer flex items-center justify-between list-none">
                <span className="flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>Embed on another site</span>
                </span>
                <span className="text-[10px] text-[#a1a1aa] group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="mt-2 space-y-2">
                <textarea
                  readOnly
                  rows={2}
                  value={embedCode}
                  className="w-full bg-[#fafafa] border border-[#e5e5ea] rounded p-2 text-[11px] font-mono text-[#52525b] resize-none focus:outline-none select-all"
                />
                <button
                  onClick={handleCopyEmbed}
                  className="w-full py-1.5 text-xs text-[#52525b] hover:text-[#18181b] bg-[#f4f4f5] hover:bg-[#e4e4e7] rounded transition-colors"
                >
                  {embedCopied ? 'Embed code copied' : 'Copy embed snippet'}
                </button>
              </div>
            </details>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#fafafa] border-t border-[#f0f0f2] flex items-center justify-between text-[11px] text-[#a1a1aa]">
          <span>Unique ID: {shareId}</span>
          <button
            onClick={onClose}
            className="text-[#71717a] hover:text-[#18181b] font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
