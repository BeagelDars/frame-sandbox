import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Download, Trash2, CheckCircle2, Award, Copy, Check, Stamp, AlertTriangle, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function TechContract({ userName = "The Creator", setUserName }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [isStamped, setIsStamped] = useState(false);
  const [selectedGrant, setSelectedGrant] = useState('32GB RAM Laptop (or PS5)');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#38bdf8'; // Cyan signature color
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e) => {
    sounds.playThock();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSigned(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    sounds.playThock();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
    setIsStamped(false);
  };

  const stampContract = () => {
    sounds.playGavel();
    setIsStamped(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copyContractText = () => {
    sounds.playChaChing();
    const contractText = `*** THE OFFICIAL CARTERPCS CREATOR CHALLENGE COVENANT (2026) ***
Parties: Carter Smith (@carterpcs) & ${userName}
Pledge: 1x Sony PS5 OR 1x 32GB RAM Laptop in exchange for 5M+ viral video views and creative developer hustle.
Status: SIGNED & RATIFIED BY CARTERPCS.`;
    navigator.clipboard.writeText(contractText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="contract" className="py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-cyan-300 text-xs font-mono mb-3">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>VIRAL CREATOR BET & TECH CHALLENGE COVENANT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          THE CARTERPCS TECH GRANT COVENANT
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-2">
          Carter, if you sign below, it becomes 100% digitally, morally, and internet-juridically binding.
        </p>
      </div>

      {/* The Certificate / Contract Container */}
      <div className="relative rounded-3xl bg-neutral-900/95 border-2 border-cyan-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden text-neutral-200 font-serif">
        {/* Decorative Top/Bottom Borders */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-sky-400 to-cyan-500" />

        {/* Certificate Header */}
        <div className="text-center pb-6 border-b border-neutral-800">
          <div className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">
            • COURT OF VIRAL TECH-TOK ENTERTAINMENT •
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-wider text-white mt-1 uppercase font-sans">
            Affidavit of Creator Recognition
          </h3>
          <p className="text-xs font-mono text-neutral-400 mt-1">
            Docket No. #CARTER-CHALLENGE-2026 • Jurisdiction: Monroe, MI & Global Internet
          </p>
        </div>

        {/* Contract Body Clauses */}
        <div className="my-6 space-y-4 text-xs sm:text-sm leading-relaxed text-neutral-300 font-sans">
          <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
            <span className="font-bold text-cyan-400 font-mono">SECTION 1: THE PARTIES</span>
            <p className="mt-1">
              This Indenture is entered into between <strong className="text-white">CARTER SMITH</strong> (alias <em>@carterpcs</em>, <strong>"The Tech Benefactor"</strong>), of the First Part, and <input
                type="text"
                value={userName}
                onChange={(e) => setUserName && setUserName(e.target.value)}
                placeholder="Your Name / YouTube Handle"
                className="bg-neutral-800 text-cyan-300 px-2 py-0.5 rounded border border-neutral-700 font-mono text-xs focus:outline-none focus:border-cyan-400 mx-1 inline-block"
              /> (<strong>"The Aspiring Creator"</strong>), of the Second Part.
            </p>
          </div>

          <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
            <span className="font-bold text-purple-400 font-mono">SECTION 2: THE COVENANT OF GIVING</span>
            <p className="mt-1">
              WHEREAS The Aspiring Creator has demonstrated authentic coding hustle by creating full-stack web applications and videos rather than leaving lazy comments; and WHEREAS The Tech Benefactor commands millions of viewers and loves high-engagement creator challenges:
            </p>
            <p className="mt-2 text-white font-semibold">
              The Tech Benefactor agrees to Amazon-dispatch or deliver:
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['32GB RAM Laptop (or PS5)', 'Sony PlayStation 5 Disc Edition', 'Both because Carter is a legend'].map((grant) => (
                <button
                  key={grant}
                  onClick={() => {
                    sounds.playThock();
                    setSelectedGrant(grant);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedGrant === grant
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  ✓ {grant}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
            <span className="font-bold text-emerald-400 font-mono">SECTION 3: WHAT CARTER RECEIVES (THE ROI)</span>
            <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-neutral-300 font-mono">
              <li>Full commercial video reaction rights for TikTok, YouTube Shorts, and Instagram Reels (5M+ views).</li>
              <li>A permanent plaque in the developer's source code honoring Carter as the #1 Tech Creator of All Time.</li>
              <li>A high-energy unboxing and reaction video tagging @carterpcs.</li>
              <li>Dedication of the creator's next 3 web applications to the CarterPCs community.</li>
            </ul>
          </div>
        </div>

        {/* Signature Area */}
        <div className="mt-8 pt-6 border-t border-neutral-800 font-sans">
          <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6">
            {/* Interactive Canvas Signature Box */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <span>CARTER'S OFFICIAL SIGNATURE:</span>
                  <span className="text-[10px] text-neutral-400 font-normal">
                    (Sign with mouse, trackpad, or finger)
                  </span>
                </label>
                {hasSigned && (
                  <button
                    onClick={clearSignature}
                    className="text-[11px] font-mono text-neutral-400 hover:text-red-400 flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              <div className="relative bg-neutral-950 border-2 border-dashed border-cyan-500/50 rounded-2xl overflow-hidden h-36">
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={144}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full cursor-crosshair touch-none"
                />

                {!hasSigned && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-neutral-600 text-xs font-mono">
                    ✍️ Draw Carter's signature here to ratify
                  </div>
                )}

                {/* Stamped Seal Overlay */}
                {isStamped && (
                  <div className="absolute right-4 top-2 rotate-[-12deg] pointer-events-none animate-bounce">
                    <div className="px-4 py-2 rounded-xl bg-cyan-600/90 border-4 border-cyan-300 text-white font-black text-sm uppercase tracking-widest shadow-2xl font-mono flex items-center gap-1.5">
                      <Stamp className="w-4 h-4" />
                      <span>APPROVED BY CARTER</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Signee: Carter Smith (@carterpcs)</span>
                <span>Date: {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions for Contract */}
            <div className="flex flex-col gap-2.5 sm:w-56 shrink-0">
              <button
                onClick={stampContract}
                disabled={!hasSigned}
                className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  hasSigned
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/40 hover:scale-105 active:scale-95'
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                <Stamp className="w-4 h-4" />
                <span>STAMP RATIFIED SEAL</span>
              </button>

              <button
                onClick={copyContractText}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY AGREEMENT'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
