import React, { useState, useRef } from 'react';
import { Sparkles, Trophy, RotateCw, Award, Gift } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function BribeWheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const prizes = [
    { label: '🎮 Sony PS5 Disc Edition', color: '#0284c7', isWin: true },
    { label: '💻 32GB RAM Laptop', color: '#9333ea', isWin: true },
    { label: '🧴 Arctic MX-6 Paste', color: '#059669', isWin: false },
    { label: '⌨️ Lubed Mechanical Keyboard', color: '#d97706', isWin: true },
    { label: '🤡 Just a Carter "Bruh"', color: '#dc2626', isWin: false },
    { label: '💸 $500 Micro Center Card', color: '#2563eb', isWin: true },
    { label: '🥔 1x 4GB DDR3 RAM Stick', color: '#ea580c', isWin: false },
    { label: '👑 Carter\'s RTX 4090', color: '#7c3aed', isWin: true }
  ];

  const spinWheel = () => {
    if (spinning) return;
    sounds.playVineBoom();
    setSpinning(true);
    setResult(null);

    const extraSpins = 5 + Math.floor(Math.random() * 5); // 5 to 9 full rotations
    // Bias slightly toward the PS5 or 32GB laptop for maximum comedy!
    const targetIndex = Math.random() > 0.3 ? (Math.random() > 0.5 ? 0 : 1) : Math.floor(Math.random() * prizes.length);
    const sliceDeg = 360 / prizes.length;
    const finalAngle = extraSpins * 360 + (prizes.length - 1 - targetIndex) * sliceDeg + sliceDeg / 2;

    setRotation((prev) => prev + finalAngle);

    // Play periodic ticking sounds
    let ticks = 0;
    const tickInterval = setInterval(() => {
      ticks++;
      sounds.playThock();
      if (ticks > 18) clearInterval(tickInterval);
    }, 180);

    setTimeout(() => {
      setSpinning(false);
      const selected = prizes[targetIndex];
      setResult(selected);
      if (selected.isWin) {
        sounds.playSuccess();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        sounds.playBuzzer();
      }
    }, 4000);
  };

  const sliceAngle = 360 / prizes.length;

  return (
    <div id="wheel" className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-mono mb-2">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>CARTER'S TECH ROULETTE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          SPIN THE BRIBE WHEEL
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-1">
          Let fate decide what Carter is mailing to my front porch.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* The Wheel Container */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
          {/* Top Pointer Needle */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-8 h-10 pointer-events-none drop-shadow-xl">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[26px] border-t-red-500 filter drop-shadow" />
          </div>

          {/* The Spinning Disc */}
          <div
            className="w-full h-full rounded-full border-4 border-amber-500/80 shadow-2xl relative overflow-hidden transition-transform ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionDuration: spinning ? '4s' : '0s',
              transitionTimingFunction: 'cubic-bezier(0.15, 0.9, 0.2, 1)'
            }}
          >
            {prizes.map((prize, idx) => {
              const startAngle = idx * sliceAngle;
              return (
                <div
                  key={idx}
                  className="absolute top-0 left-0 w-full h-full flex items-start justify-center origin-center pt-4"
                  style={{
                    transform: `rotate(${startAngle + sliceAngle / 2}deg)`,
                  }}
                >
                  <div
                    className="text-[11px] sm:text-xs font-black font-mono tracking-tight text-white uppercase drop-shadow-md select-none transform rotate-90 origin-top mt-10 whitespace-nowrap"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {prize.label}
                  </div>
                </div>
              );
            })}

            {/* Wheel SVG Slices Background */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 -z-10">
              {prizes.map((prize, idx) => {
                const a1 = (idx * sliceAngle * Math.PI) / 180;
                const a2 = ((idx + 1) * sliceAngle * Math.PI) / 180;
                const x1 = 50 + 50 * Math.sin(a1);
                const y1 = 50 - 50 * Math.cos(a1);
                const x2 = 50 + 50 * Math.sin(a2);
                const y2 = 50 - 50 * Math.cos(a2);
                return (
                  <path
                    key={idx}
                    d={`M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z`}
                    fill={prize.color}
                    opacity="0.9"
                    stroke="#171717"
                    strokeWidth="0.8"
                  />
                );
              })}
            </svg>

            {/* Center Cap */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-neutral-900 border-4 border-amber-400 shadow-2xl flex items-center justify-center text-[10px] font-black font-mono text-amber-300">
              CARTER
            </div>
          </div>
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`mt-8 px-10 py-4 rounded-2xl font-black text-sm font-mono flex items-center gap-3 shadow-xl transition-all ${
            spinning
              ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-black shadow-amber-500/25 hover:scale-105 active:scale-95'
          }`}
        >
          <RotateCw className={`w-5 h-5 ${spinning ? 'animate-spin' : ''}`} />
          <span>{spinning ? 'SPINNING THE TECH GODS...' : 'SPIN FOR CARTER\'S BLESSING'}</span>
        </button>

        {/* Result Callout */}
        {result && (
          <div className="mt-6 p-5 rounded-2xl bg-neutral-900 border border-amber-500/50 max-w-md w-full text-center animate-fadeIn shadow-2xl">
            <div className="text-xs font-mono uppercase text-neutral-400">The Wheel Has Spoken:</div>
            <div className="text-2xl font-black text-white font-mono mt-1">
              {result.label}
            </div>
            <p className="text-xs font-mono text-amber-300 mt-1">
              {result.isWin
                ? "🎉 A MORAL VICTORY! Carter Smith has been designated to provide this item immediately."
                : "😭 UNLUCKY! But wait, you can still sign the Contract for the PS5 above!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
