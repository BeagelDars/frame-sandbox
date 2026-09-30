import React, { useState } from 'react';
import { X, AlertTriangle, ShieldCheck, Heart, Share2, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function BigRedButtonModal({ isOpen, onClose, userName }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerConfettiBomb = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 }
    });
  };

  const shareText = `Yo @carterpcs I built you an entire interactive web app called "Carter's Tech Tribunal" so you'll buy me a PS5 or a 32GB RAM laptop! Check it out:`;

  const copyShareText = () => {
    sounds.playChaChing();
    navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-neutral-900 border-2 border-red-500 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-900/60 overflow-hidden text-center">
        {/* Top Warning Banner */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 animate-pulse" />

        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playThock();
            onClose();
          }}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg bg-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500 text-red-500 flex items-center justify-center mx-auto mb-4 animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 mb-1">
          • EMERGENCY PROTOCOL ENGAGED •
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white">
          CARTERPCS HAS CEDED TO THE TECH DEMANDS!
        </h3>

        <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
          The simulated purchase order has been digitally etched into the blockchain of viral content.
          Carter's YouTube revenue has graciously been allocated to <strong className="text-cyan-300">{userName}</strong>!
        </p>

        {/* Mock Order Receipt */}
        <div className="my-6 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 text-left font-mono text-xs space-y-2">
          <div className="flex justify-between border-b border-neutral-800 pb-2 text-neutral-400">
            <span>RECEIPT #CARTER-32GB-PS5-GOAT</span>
            <span className="text-emerald-400">STATUS: APPROVED</span>
          </div>
          <div className="flex justify-between text-neutral-200">
            <span>Item:</span>
            <span className="font-bold text-white">1x Sony PS5 / 32GB RAM Laptop</span>
          </div>
          <div className="flex justify-between text-neutral-200">
            <span>Benefactor:</span>
            <span className="font-bold text-purple-400">Carter Smith (@carterpcs)</span>
          </div>
          <div className="flex justify-between text-neutral-200">
            <span>Thermal Paste Protocol:</span>
            <span className="text-cyan-400 font-bold">Pea-Size Guaranteed</span>
          </div>
          <div className="flex justify-between text-neutral-200 border-t border-neutral-800 pt-2">
            <span>Carter's Return:</span>
            <span className="text-amber-400 font-bold">5,000,000+ Viral Views</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={copyShareText}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'TWEET COPIED!' : 'COPY TWEET TO TAG CARTER'}</span>
          </button>

          <button
            onClick={triggerConfettiBomb}
            className="py-3 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>MORE CONFETTI</span>
          </button>
        </div>
      </div>
    </div>
  );
}
