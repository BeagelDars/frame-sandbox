import React from 'react';
import { Heart, Terminal, Cpu, ArrowUp, Sparkles, Youtube } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Footer({ userName }) {
  const scrollToTop = () => {
    sounds.playThock();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-12 px-4 sm:px-6 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>CARTER'S TECH TRIBUNAL</span>
            <span className="text-[10px] text-cyan-400 bg-cyan-950 border border-cyan-800 px-1.5 py-0.2 rounded">
              PS5 / 32GB EDITION
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 mt-1 max-w-md font-sans">
            Created with passion, React, Web Audio, and zero thermal paste spillage by <strong className="text-neutral-300">{userName}</strong>.
            Dedicated to CarterPCs — the creator who made tech less of a snooze fest.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500 text-neutral-300 hover:text-white flex items-center gap-1.5 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Top of Page</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900 text-center text-[10px] text-neutral-600 font-sans">
        Satirical, fair-use interactive fan project. Not officially affiliated with Sony Interactive Entertainment, Microsoft, or Carter Smith LLC — unless Carter actually ships the PS5 or 32GB laptop, in which case this contract is 100% eternal.
      </div>
    </footer>
  );
}
