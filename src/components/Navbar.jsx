import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ShieldAlert, Cpu, Terminal, Flame, Trophy, CheckCircle, Code2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Navbar({ activeTab, setActiveTab, soundMuted, toggleSound, theme, setTheme }) {
  const [tickerIndex, setTickerIndex] = useState(0);

  const newsItems = [
    "🎮 THE CARTERPCS APP CHALLENGE: Built this entire interactive app to win a PS5 or 32GB Laptop!",
    "🔥 CREATOR SHOWCASE: Check out my full-stack web apps, games & coding videos",
    "⚡ THE PROPOSITION: 5,000,000+ viral views for Carter in exchange for next-gen creator tech",
    "🏆 RATE MY HUSTLE: Interactive Carter scorecard & meme soundboard ready to react on video",
    "📢 CARTER SMITH: The internet is watching — will you sign the Creator Tech Covenant?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % newsItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  const navLinks = [
    { id: 'overview', label: 'The Challenge', icon: Flame },
    { id: 'contract', label: 'The Covenant', icon: ShieldAlert },
    { id: 'benchmark', label: 'Rate My App', icon: Trophy },
    { id: 'wheel', label: 'Tech Roulette', icon: Sparkles },
    { id: 'game', label: 'Arcade Catcher', icon: Trophy },
    { id: 'script', label: 'Carter\'s Script', icon: Terminal },
    { id: 'proof', label: 'My Apps & Proof', icon: Code2 },
  ];

  const handleNavClick = (id) => {
    sounds.playThock();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/85 border-b border-neutral-800 text-white shadow-2xl transition-all duration-300">
      {/* Dynamic News Ticker */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 py-1 px-4 text-xs font-mono font-bold tracking-wider text-white flex items-center justify-between overflow-hidden shadow-inner">
        <div className="flex items-center gap-2 truncate">
          <span className="bg-black/80 text-cyan-300 px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-widest flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
            LIVE CHALLENGE
          </span>
          <span className="transition-all duration-500 truncate font-semibold">
            {newsItems[tickerIndex]}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-white/80 font-bold shrink-0">
          <span>TARGET: @CARTERPCS</span>
          <span>•</span>
          <span>VIRAL CONTENT READY</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-neutral-900 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                CARTER'S TECH TRIBUNAL
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 bg-cyan-950/80 border border-cyan-800 text-cyan-300 rounded font-semibold">
                CREATOR CHALLENGE
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono hidden sm:block">
              "Making Tech Less of a Snooze Fest" • The PS5 / 32GB Laptop Challenge
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-[1.02]'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              toggleSound();
              sounds.playThock();
            }}
            title={soundMuted ? "Unmute Audio FX" : "Mute Audio FX"}
            className={`p-2.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
              soundMuted
                ? 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-neutral-300'
                : 'bg-emerald-950/60 border-emerald-700/60 text-emerald-400 shadow-sm shadow-emerald-900/40 hover:bg-emerald-900/50'
            }`}
          >
            {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
            <span className="hidden sm:inline font-bold">
              {soundMuted ? 'MUTED' : 'SFX ON'}
            </span>
          </button>

          {/* Theme / RGB Mode */}
          <button
            onClick={() => {
              sounds.playThock();
              setTheme(theme === 'cyber' ? 'stealth' : 'cyber');
            }}
            className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              theme === 'cyber'
                ? 'bg-purple-950/60 border-purple-700 text-purple-300 shadow-sm shadow-purple-900/40'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
            title="Toggle RGB Glow"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">RGB MODE</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Scrollable Strip */}
      <div className="lg:hidden flex items-center gap-1 px-4 py-2 border-t border-neutral-900/80 overflow-x-auto no-scrollbar bg-neutral-950/90">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                isActive
                  ? 'bg-cyan-500 text-white'
                  : 'text-neutral-400 hover:text-white bg-neutral-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {link.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
