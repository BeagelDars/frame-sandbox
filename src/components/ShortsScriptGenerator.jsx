import React, { useState } from 'react';
import { Terminal, Copy, Check, Video, Play, Pause, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function ShortsScriptGenerator({ userName = "This Developer" }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const scripts = [
    {
      id: 'challenge',
      title: 'The Bold Creator Challenge (45s Fast-Paced)',
      vibe: 'High-Energy & Viral',
      duration: '45 seconds',
      lines: [
        { speaker: 'CARTER (To Camera)', text: 'You guys know my comments are flooded with "Carter please give me a free PC" every single day.', action: '[Shake head, classic exasperated smile]' },
        { speaker: 'CARTER', text: 'I thought I had seen every trick in the book. But today... someone didn\'t just comment.', action: '[CUT TO SCREEN RECORDING OF THE APP]' },
        { speaker: 'CARTER', text: `This viewer literally built an entire interactive website called "Carter's Tech Tribunal" to challenge me to buy them a PS5 or a 32GB RAM laptop.`, action: '[SOUND: Vine Boom]' },
        { speaker: 'CARTER', text: `They said: "Carter, look at the apps and videos I've been creating. If my code is fire and this video goes viral, you have to buy me a PS5 or a 32GB laptop."`, action: '[Click Soundboard button]' },
        { speaker: 'CARTER', text: `Look at this! They built an interactive soundboard with my catchphrases, a playable arcade minigame, a roulette wheel, and an official contract for me to sign with my mouse!`, action: '[Show Contract Section]' },
        { speaker: 'CARTER (Punchline)', text: `Honestly? If you have the hustle to build an entire web app just to challenge me instead of leaving a lazy comment... you actually cooked. Should I send the PS5 or the 32GB laptop? Comment below right now!`, action: '[Point down to comments, cut out]' }
      ]
    },
    {
      id: 'app-showcase',
      title: 'The App Review Challenge',
      vibe: 'Fun & Engaging',
      duration: '40 seconds',
      lines: [
        { speaker: 'CARTER', text: 'A viewer challenged me to review the apps they\'ve been building, and if they impress me, I have to buy them a PS5 or a 32GB laptop.', action: '[Fast-paced intro]' },
        { speaker: 'CARTER', text: 'Look at the features on this site: full Web Audio soundboard, an interactive scorecard matrix, and an arcade game where you catch tech while dodging obstacles.', action: '[Spin the Bribe Wheel]' },
        { speaker: 'CARTER', text: 'They even drew up a mock contract that grants me 100% video reaction rights and dedicates their next 3 apps to our community.', action: '[SOUND: Court Gavel Slam]' },
        { speaker: 'CARTER', text: 'I gotta admit, the hustle is undeniably creative. Check out their portfolio in the description. What prize do we send them?', action: '[Smiles, cut out]' }
      ]
    },
    {
      id: 'wholesome',
      title: 'Supporting Real Creators Who Hustle',
      vibe: 'Wholesome & Inspiring',
      duration: '40 seconds',
      lines: [
        { speaker: 'CARTER', text: 'I always tell you guys on this channel: I\'m not a giveaway bank. But every once in a while, a creator does something that earns pure respect.', action: '[Warm, genuine intro]' },
        { speaker: 'CARTER', text: `${userName} has been grinding creating apps and making videos. Instead of begging, they built this incredible interactive experience from scratch to catch my attention.`, action: '[Scroll through Showcase]' },
        { speaker: 'CARTER', text: 'They put their coding skills on display, created real entertainment for this video, and proved they have genuine hustle.', action: '[SOUND: Fanfare]' },
        { speaker: 'CARTER', text: 'This is the kind of creator hustle I will always support. Check out their apps below, and yes... the tech is on the way.', action: '[Thumbs up, cut out]' }
      ]
    }
  ];

  const currentScript = scripts[activeTab];

  const getFullScriptText = () => {
    return currentScript.lines
      .map((l) => `${l.speaker}:\n"${l.text}"\n${l.action ? `${l.action}\n` : ''}`)
      .join('\n');
  };

  const handleCopy = () => {
    sounds.playChaChing();
    navigator.clipboard.writeText(getFullScriptText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="script" className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-cyan-300 text-xs font-mono mb-2">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>READY-TO-RECORD VIRAL SCRIPTS FOR CARTER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          READY-TO-RECORD TIKTOK & SHORTS SCRIPTS
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-1">
          Zero-effort content for Carter. Just click record, read the teleprompter, and print 5 million views.
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        {/* Script Selection Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-neutral-800">
          {scripts.map((script, idx) => (
            <button
              key={script.id}
              onClick={() => {
                sounds.playThock();
                setActiveTab(idx);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === idx
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {script.title}
            </button>
          ))}
        </div>

        {/* Script Metadata Bar */}
        <div className="flex items-center justify-between bg-neutral-950 p-3 rounded-xl border border-neutral-800 font-mono text-xs mb-6">
          <div className="flex items-center gap-4">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Duration: <strong className="text-white">{currentScript.duration}</strong>
            </span>
            <span className="text-neutral-400 hidden sm:inline">
              Vibe: <strong className="text-purple-400">{currentScript.vibe}</strong>
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-cyan-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED!' : 'COPY SCRIPT'}</span>
          </button>
        </div>

        {/* Teleprompter / Script Cards */}
        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 no-scrollbar">
          {currentScript.lines.map((line, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-4 transition-all hover:border-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {line.speaker}
                </span>
                {line.action && (
                  <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-700 text-amber-300 px-2 py-0.5 rounded font-semibold">
                    {line.action}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed font-medium">
                "{line.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
