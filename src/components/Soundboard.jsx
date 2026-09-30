import React, { useState } from 'react';
import { Volume2, Zap, AlertTriangle, Hammer, DollarSign, XCircle, Award, Keyboard } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Soundboard() {
  const [activeSound, setActiveSound] = useState(null);

  const soundButtons = [
    {
      id: 'vine-boom',
      label: 'Vine Boom',
      icon: Zap,
      action: () => sounds.playVineBoom(),
      color: 'from-amber-600 to-red-600',
      border: 'border-amber-500/50',
      quote: 'BOOM. Repercussions.'
    },
    {
      id: 'gavel',
      label: 'Court Gavel',
      icon: Hammer,
      action: () => sounds.playGavel(),
      color: 'from-purple-600 to-indigo-700',
      border: 'border-purple-500/50',
      quote: 'Order in the tech courtroom!'
    },
    {
      id: 'siren',
      label: 'Open The Floodgates',
      icon: AlertTriangle,
      action: () => sounds.playSiren(),
      color: 'from-red-600 to-rose-700',
      border: 'border-red-500/50',
      quote: 'STOP ASKING FOR FREE PCS!!'
    },
    {
      id: 'chaching',
      label: 'Cha-Ching ($$$)',
      icon: DollarSign,
      action: () => sounds.playChaChing(),
      color: 'from-emerald-600 to-teal-700',
      border: 'border-emerald-500/50',
      quote: 'Carter buys the 32GB RAM!'
    },
    {
      id: 'buzzer',
      label: 'Emotional Damage',
      icon: XCircle,
      action: () => sounds.playBuzzer(),
      color: 'from-rose-600 to-pink-700',
      border: 'border-rose-500/50',
      quote: 'Rejected: "Just build a $400 PC"'
    },
    {
      id: 'fanfare',
      label: 'PS5 Granted',
      icon: Award,
      action: () => sounds.playSuccess(),
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/50',
      quote: 'Jackpot! Sony package arriving!'
    },
    {
      id: 'thock',
      label: 'Thocky Switch',
      icon: Keyboard,
      action: () => sounds.playThock(),
      color: 'from-sky-600 to-cyan-700',
      border: 'border-sky-500/50',
      quote: 'Lubed holy pandas on brass plate'
    }
  ];

  const handlePlay = (btn) => {
    setActiveSound(btn.id);
    btn.action();
    setTimeout(() => setActiveSound(null), 400);
  };

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
            <Volume2 className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
              <span>CARTERPCS MEME SOUNDBOARD</span>
              <span className="text-[10px] bg-red-950 text-red-400 border border-red-800 px-1.5 py-0.2 rounded font-mono">
                INSTANT SFX
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Interactive sound effects for Carter to press while reacting on video
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {soundButtons.map((btn) => {
          const Icon = btn.icon;
          const isTriggered = activeSound === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => handlePlay(btn)}
              className={`relative overflow-hidden group p-3 rounded-xl border ${btn.border} bg-neutral-800/80 hover:bg-neutral-800 transition-all duration-150 text-left flex flex-col justify-between ${
                isTriggered ? 'scale-95 ring-2 ring-white/50 brightness-125' : 'hover:-translate-y-0.5'
              }`}
            >
              <div className={`absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br ${btn.color} opacity-20 rounded-full blur-md group-hover:opacity-40 transition-opacity`} />
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${btn.color} text-white shadow-sm`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono text-neutral-400 group-hover:text-white uppercase font-bold">
                  SFX
                </span>
              </div>
              <div>
                <div className="font-bold text-xs text-neutral-200 group-hover:text-white truncate">
                  {btn.label}
                </div>
                <div className="text-[10px] text-neutral-400 truncate font-mono mt-0.5">
                  {btn.quote}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
