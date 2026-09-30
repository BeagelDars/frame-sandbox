import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, Star, ThumbsUp, Flame, Play, Trophy, Code } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function CarterChallengeMatrix() {
  const [uiScore, setUiScore] = useState(10);
  const [codeHustle, setCodeHustle] = useState(10);
  const [soundboardVibe, setSoundboardVibe] = useState(10);
  const [shortsPotential, setShortsPotential] = useState(10);
  const [creativity, setCreativity] = useState(10);
  const [tested, setTested] = useState(false);

  // Total calculated score out of 100
  const totalScore = (
    (uiScore * 2) +
    (codeHustle * 2.5) +
    (soundboardVibe * 1.5) +
    (shortsPotential * 2.5) +
    (creativity * 1.5)
  ).toFixed(0);

  const getVerdict = () => {
    if (totalScore >= 90) {
      return {
        rating: 'CERTIFIED LEGENDARY (10/10)',
        message: '🔥 Carter has no choice. The software is too clean, the hustle is real, and the content is too good to ignore. The PS5 or 32GB Laptop is 100% earned.',
        color: 'text-emerald-400'
      };
    }
    if (totalScore >= 75) {
      return {
        rating: 'APPROVED & HIGH VALUE',
        message: '⚡ High-tier creator effort! Way better than 99.9% of viewer submissions.',
        color: 'text-cyan-400'
      };
    }
    return {
      rating: 'NEEDS MORE POLISH',
      message: 'Keep cooking! The hustle is recognized.',
      color: 'text-amber-400'
    };
  };

  const verdict = getVerdict();

  const handleTest = () => {
    sounds.playVineBoom();
    setTested(true);
    setTimeout(() => {
      sounds.playSuccess();
    }, 600);
  };

  return (
    <div id="benchmark" className="py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-cyan-300 text-xs font-mono mb-3">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>INTERACTIVE CARTER EVALUATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          THE CARTERPCS APP SCORECARD
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-2">
          Rate the apps and hustle. If the score passes 85%, Carter is officially challenged to send the PS5 or 32GB Laptop!
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Sliders Column */}
        <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              CREATOR METRICS (SLIDERS)
            </span>
            <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-bold">
              CARTER'S GRADING SCALE
            </span>
          </div>

          {/* Slider 1: UI & Aesthetics */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300 font-bold">Web Design & Animations</span>
              <span className="text-cyan-400 font-black">{uiScore} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={uiScore}
              onChange={(e) => {
                sounds.playThock();
                setUiScore(Number(e.target.value));
              }}
              className="w-full accent-cyan-400 bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>Mid</span>
              <span>Clean</span>
              <span>Masterpiece (10/10)</span>
            </div>
          </div>

          {/* Slider 2: Code Hustle */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300 font-bold">Coding Hustle (Full-Stack React & Web Audio)</span>
              <span className="text-purple-400 font-black">{codeHustle} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={codeHustle}
              onChange={(e) => {
                sounds.playThock();
                setCodeHustle(Number(e.target.value));
              }}
              className="w-full accent-purple-400 bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>Basic Script</span>
              <span>Impressive</span>
              <span>Legendary Effort (10/10)</span>
            </div>
          </div>

          {/* Slider 3: Soundboard & Meme Factor */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300 font-bold">Soundboard & Entertainment Value</span>
              <span className="text-amber-400 font-black">{soundboardVibe} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={soundboardVibe}
              onChange={(e) => {
                sounds.playThock();
                setSoundboardVibe(Number(e.target.value));
              }}
              className="w-full accent-amber-400 bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>Quiet</span>
              <span>Funny</span>
              <span>Pure Cinema (10/10)</span>
            </div>
          </div>

          {/* Slider 4: Shorts / TikTok Viral Potential */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300 font-bold">YouTube Shorts & TikTok Viral Potential</span>
              <span className="text-emerald-400 font-black">{shortsPotential} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={shortsPotential}
              onChange={(e) => {
                sounds.playThock();
                setShortsPotential(Number(e.target.value));
              }}
              className="w-full accent-emerald-400 bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>10k Views</span>
              <span>500k Views</span>
              <span>5 Million+ Views (10/10)</span>
            </div>
          </div>

          {/* Slider 5: Creativity & Boldness */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-300 font-bold">Creativity (Instead of spamming comments)</span>
              <span className="text-rose-400 font-black">{creativity} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={creativity}
              onChange={(e) => {
                sounds.playThock();
                setCreativity(Number(e.target.value));
              }}
              className="w-full accent-rose-400 bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
            />
          </div>

          <button
            onClick={handleTest}
            className="w-full py-3.5 rounded-xl font-mono text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-950/40 transition-all hover:scale-[1.01]"
          >
            <Sparkles className="w-4 h-4" />
            <span>CALCULATE CARTER'S OFFICIAL VERDICT</span>
          </button>
        </div>

        {/* Live Scorecard Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                TOTAL APP SCORE
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400">
                MAX 100 PTS
              </span>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-black font-mono text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text">
                  {totalScore}%
                </div>
                <div className={`text-xs font-mono font-bold mt-1 uppercase tracking-wider ${verdict.color}`}>
                  {verdict.rating}
                </div>
              </div>
            </div>

            <div className="w-full bg-neutral-950 h-3 rounded-full overflow-hidden border border-neutral-800">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 rounded-full"
                style={{ width: `${Math.min(100, totalScore)}%` }}
              />
            </div>
            <p className="text-[10px] font-mono text-neutral-500 text-center mt-2">
              Threshold to unlock the PS5 or 32GB Laptop: <strong>85.0%</strong>
            </p>
          </div>

          {/* Carter's Review Box */}
          <div className="bg-neutral-950 border-2 border-cyan-500/40 rounded-3xl p-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[2px] shrink-0">
                <div className="w-full h-full bg-neutral-900 rounded-[10px] flex items-center justify-center text-cyan-300 font-bold font-mono text-xs">
                  CPCS
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>CARTER'S REACTION</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </h4>
                <p className="text-[11px] font-mono text-neutral-400">
                  Creator Evaluation
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-200 leading-relaxed font-sans italic bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
              "{verdict.message}"
            </p>

            {tested && (
              <div className="mt-4 p-3.5 rounded-xl bg-neutral-900 border border-cyan-500/40 font-mono text-xs text-cyan-300 animate-fadeIn flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Score Verified! Carter has formally acknowledged this creation.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
