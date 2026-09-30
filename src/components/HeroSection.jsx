import React, { useState } from 'react';
import { Gamepad2, Laptop, ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2, AlertCircle, Sparkles, Code2, Video, Trophy } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function HeroSection({ onOpenContract, onOpenRedButton }) {
  const [chosenOption, setChosenOption] = useState('both');
  const [ps5Votes, setPs5Votes] = useState(2140);
  const [laptopVotes, setLaptopVotes] = useState(2890);
  const [voted, setVoted] = useState(false);

  const handleVote = (type) => {
    sounds.playThock();
    if (type === 'ps5') {
      setPs5Votes((v) => v + 1);
      setChosenOption('ps5');
      sounds.playSuccess();
    } else {
      setLaptopVotes((v) => v + 1);
      setChosenOption('laptop');
      sounds.playChaChing();
    }
    setVoted(true);
  };

  return (
    <div id="overview" className="relative pt-6 pb-12 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Challenge Tag badge */}
      <div className="flex justify-center mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-950/50 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span className="font-bold">THE OFFICIAL CARTERPCS CREATOR CHALLENGE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="text-neutral-300">VIRAL VIDEO EDITION</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
          HEY CARTER. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            I CODED AN ENTIRE APP
          </span>
          <br />
          <span className="text-3xl sm:text-5xl lg:text-6xl text-neutral-200">
            TO PROVE I DESERVE A PS5 OR A 32GB LAPTOP.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          I've been creating apps and making videos. Instead of leaving another comment in your TikToks, 
          <span className="text-cyan-300 font-semibold"> I built this interactive web experience </span> to challenge you: 
          if my apps and this video entertain you, bless me with a <strong className="text-white">PS5</strong> or a <strong className="text-purple-400">32GB RAM Laptop</strong>!
        </p>

        {/* 4 Creator Hustle Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8 font-mono text-left">
          <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
            <div className="text-[11px] text-cyan-400 font-semibold uppercase flex items-center gap-1">
              <Code2 className="w-3 h-3" /> Full-Stack App
            </div>
            <div className="text-lg font-black text-white mt-1">100% Hand-Coded</div>
            <div className="text-[10px] text-neutral-400">React & Web Audio API</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
            <div className="text-[11px] text-purple-400 font-semibold uppercase flex items-center gap-1">
              <Video className="w-3 h-3" /> Content Hustle
            </div>
            <div className="text-lg font-black text-white mt-1">Video Creator</div>
            <div className="text-[10px] text-neutral-400">Making apps & videos</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
            <div className="text-[11px] text-emerald-400 font-semibold uppercase flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Content Gold
            </div>
            <div className="text-lg font-black text-white mt-1">5M+ Views</div>
            <div className="text-[10px] text-neutral-400">Ready-made Shorts script</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
            <div className="text-[11px] text-amber-400 font-semibold uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> The Deal
            </div>
            <div className="text-lg font-black text-white mt-1">Win-Win</div>
            <div className="text-[10px] text-neutral-400">Clout for you, tech for me</div>
          </div>
        </div>
      </div>

      {/* The Two Upgrade Choices: PS5 vs 32GB RAM Laptop */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white flex items-center justify-center gap-2">
            <span>WHICH PRIZE SHOULD CARTER SEND?</span>
            <span className="text-xs font-mono uppercase bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
              INTERACTIVE POLL
            </span>
          </h2>
          <p className="text-xs text-neutral-400">
            Pick your favorite or let Carter decide on camera!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: PS5 */}
          <div 
            className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
              chosenOption === 'ps5'
                ? 'bg-gradient-to-b from-blue-950/70 to-neutral-900 border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
                THE CONSOLE BEAST
              </span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5">
              <Gamepad2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              The Sony PlayStation 5
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              For ultimate 4K 60FPS gaming, Spider-Man 2, and viral unboxing content.
            </p>

            <ul className="mt-5 space-y-2.5 text-xs text-neutral-300 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Next-gen graphics and instant gaming power</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>A dedicated viral unboxing video tagging @carterpcs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Liquid metal cooling already engineered by Sony</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Est. Cost for Carter: ~$499 (Tax write-off for content)</span>
              </li>
            </ul>

            <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Community Votes</span>
                <div className="text-lg font-black text-blue-400 font-mono">{ps5Votes.toLocaleString()} votes</div>
              </div>
              <button
                onClick={() => handleVote('ps5')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                <span>Vote PS5</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: 32GB RAM Laptop */}
          <div 
            className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
              chosenOption === 'laptop'
                ? 'bg-gradient-to-b from-purple-950/70 to-neutral-900 border-purple-500 shadow-2xl shadow-purple-500/20 scale-[1.02]'
                : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800">
                DEVELOPER POWERHOUSE
              </span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mb-5">
              <Laptop className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              The 32GB RAM Powerhouse Laptop
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              To build, compile, and render the next generation of games, apps, and creator tools.
            </p>

            <ul className="mt-5 space-y-2.5 text-xs text-neutral-300 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>32GB RAM for multitasking, video editing & heavy compilation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>I will build 5 more web apps dedicated to Carter's channel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Fast renders for YouTube Shorts and TikTok coding videos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Est. Cost: ~$799-$899 (The ultimate creator mentorship flex)</span>
              </li>
            </ul>

            <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Community Votes</span>
                <div className="text-lg font-black text-purple-400 font-mono">{laptopVotes.toLocaleString()} votes</div>
              </div>
              <button
                onClick={() => handleVote('laptop')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
              >
                <span>Vote 32GB Laptop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Big Action CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              sounds.playGavel();
              onOpenContract();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <ShieldCheck className="w-5 h-5 text-cyan-200" />
            <span>REVIEW & SIGN THE TECH CHALLENGE CONTRACT</span>
          </button>

          <button
            onClick={() => {
              sounds.playVineBoom();
              onOpenRedButton();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 border-2 border-red-500/70 hover:border-red-400 text-red-400 hover:text-red-300 font-black text-base flex items-center justify-center gap-3 shadow-lg shadow-red-950/60 transition-all hover:scale-105 active:scale-95"
          >
            <Zap className="w-5 h-5 text-red-500 animate-pulse" />
            <span>CARTER'S 1-CLICK DISPATCH BUTTON</span>
          </button>
        </div>
      </div>
    </div>
  );
}
