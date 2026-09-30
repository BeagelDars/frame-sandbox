import React, { useRef, useState, useEffect } from 'react';
import { Play, RotateCcw, Trophy, Award, Gamepad2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function RamCatcherGame() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return Number(localStorage.getItem('carter_game_highscore')) || 0;
  });
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const gameStateRef = useRef({
    playerX: 200,
    playerWidth: 70,
    playerHeight: 24,
    items: [],
    score: 0,
    active: false,
    keys: { left: false, right: false }
  });

  const goodItems = [
    { label: '🎮 PS5', points: 100, color: '#38bdf8' },
    { label: '💾 32GB', points: 50, color: '#a855f7' },
    { label: '🧴 PASTE', points: 25, color: '#10b981' },
    { label: '⌨️ THOCK', points: 35, color: '#f59e0b' }
  ];

  const badItems = [
    { label: '🐞 BUG', points: -30, color: '#ef4444' },
    { label: '💀 BSOD', points: -50, color: '#3b82f6' },
    { label: '🍝 CABLES', points: -25, color: '#f97316' },
    { label: '💬 BEGGAR', points: -20, color: '#ec4899' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        gameStateRef.current.keys.left = true;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        gameStateRef.current.keys.right = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        gameStateRef.current.keys.left = false;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        gameStateRef.current.keys.right = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const startGame = () => {
    sounds.playChaChing();
    const canvas = canvasRef.current;
    if (!canvas) return;

    gameStateRef.current = {
      playerX: canvas.width / 2 - 35,
      playerWidth: 70,
      playerHeight: 24,
      items: [],
      score: 0,
      active: true,
      keys: { left: false, right: false }
    };

    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setIsPlaying(true);
  };

  // Timer loop
  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  const endGame = () => {
    gameStateRef.current.active = false;
    setIsPlaying(false);
    setGameOver(true);
    const finalScore = gameStateRef.current.score;
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('carter_game_highscore', finalScore);
      confetti({ particleCount: 100, spread: 70 });
      sounds.playSuccess();
    } else {
      sounds.playVineBoom();
    }
  };

  // Game Animation Loop
  useEffect(() => {
    let animationId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let spawnTimer = 0;

    const gameLoop = () => {
      if (!gameStateRef.current.active) return;

      const state = gameStateRef.current;

      // Update Player position
      const speed = 7;
      if (state.keys.left && state.playerX > 0) {
        state.playerX -= speed;
      }
      if (state.keys.right && state.playerX < canvas.width - state.playerWidth) {
        state.playerX += speed;
      }

      // Spawn Items
      spawnTimer++;
      if (spawnTimer % 28 === 0) {
        const isGood = Math.random() > 0.4;
        const pool = isGood ? goodItems : badItems;
        const template = pool[Math.floor(Math.random() * pool.length)];

        state.items.push({
          x: Math.random() * (canvas.width - 60) + 10,
          y: -20,
          speed: 3 + Math.random() * 2.5,
          ...template
        });
      }

      // Update & check items
      for (let i = state.items.length - 1; i >= 0; i--) {
        const item = state.items[i];
        item.y += item.speed;

        // Collision with player
        const playerY = canvas.height - state.playerHeight - 10;
        if (
          item.y + 15 >= playerY &&
          item.y <= playerY + state.playerHeight &&
          item.x + 35 >= state.playerX &&
          item.x <= state.playerX + state.playerWidth
        ) {
          state.score += item.points;
          setScore(state.score);
          if (item.points > 0) {
            sounds.playCatch();
          } else {
            sounds.playBuzzer();
          }
          state.items.splice(i, 1);
          continue;
        }

        // Off bottom of screen
        if (item.y > canvas.height + 20) {
          state.items.splice(i, 1);
        }
      }

      // Render
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid / Background
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Player (RGB PC Case Basket)
      ctx.save();
      const grad = ctx.createLinearGradient(state.playerX, 0, state.playerX + state.playerWidth, 0);
      grad.addColorStop(0, '#06b6d4');
      grad.addColorStop(0.5, '#3b82f6');
      grad.addColorStop(1, '#a855f7');

      ctx.fillStyle = grad;
      ctx.shadowColor = '#06b6d4';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.roundRect(state.playerX, canvas.height - state.playerHeight - 10, state.playerWidth, state.playerHeight, 6);
      ctx.fill();

      // Case Label
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CARTER RIG', state.playerX + state.playerWidth / 2, canvas.height - state.playerHeight + 4);
      ctx.restore();

      // Draw Falling Items
      state.items.forEach((item) => {
        ctx.save();
        ctx.fillStyle = item.color;
        ctx.shadowColor = item.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.roundRect(item.x, item.y, 50, 22, 6);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, item.x + 25, item.y + 15);
        ctx.restore();
      });

      animationId = requestAnimationFrame(gameLoop);
    };

    if (isPlaying) {
      animationId = requestAnimationFrame(gameLoop);
    }

    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  return (
    <div id="game" className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-mono mb-2">
          <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>CARTER ARCADE MINIGAME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          ESCAPE THE FLOODGATES: 32GB RAM CATCHER
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-1">
          Catch the PS5s & 32GB sticks! Dodge 2GB potato RAM and comment spam!
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 shadow-2xl backdrop-blur-xl">
        {/* Game Stats Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-neutral-950 rounded-2xl border border-neutral-800 font-mono text-xs mb-4">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-neutral-500 uppercase">Score: </span>
              <span className="text-cyan-400 font-bold text-base">{score}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase">High: </span>
              <span className="text-amber-400 font-bold text-base">{highScore}</span>
            </div>
          </div>
          <div>
            <span className="text-neutral-500 uppercase">Time: </span>
            <span className={`font-bold text-base ${timeLeft <= 5 ? 'text-red-500 animate-ping' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[4/3] sm:aspect-[16/9] w-full max-h-[420px]">
          <canvas
            ref={canvasRef}
            width={600}
            height={380}
            className="w-full h-full block"
          />

          {/* Start Screen Overlay */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
              <Gamepad2 className="w-16 h-16 text-cyan-400 mb-3 animate-bounce" />
              <h3 className="text-2xl font-black text-white font-mono">
                CATCH THE TECH
              </h3>
              <p className="text-xs text-neutral-400 max-w-xs mt-1 font-mono">
                Use Arrow Keys / A & D to move your rig basket. Catch PS5s (+100) & 32GB RAM (+50). Avoid the code bugs!
              </p>
              <button
                onClick={startGame}
                className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-sm font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>START 30S CHALLENGE</span>
              </button>
            </div>
          )}

          {/* Game Over Screen */}
          {gameOver && (
            <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
              <Trophy className="w-14 h-14 text-amber-400 mb-2" />
              <div className="text-xs font-mono uppercase text-neutral-400">Challenge Complete</div>
              <h3 className="text-3xl font-black text-white font-mono mt-1">
                FINAL SCORE: {score}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mt-2 max-w-sm">
                {score >= 400
                  ? "🔥 LEGENDARY PERFORMANCE! Carter Smith has no legal defense left. The PS5/Laptop must be awarded!"
                  : "💀 Thermal Throttling! Your rig overheated. Carter is laughing in 240 FPS."}
              </p>
              <button
                onClick={startGame}
                className="mt-5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xs font-mono flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>PLAY AGAIN</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Touch Controls */}
        <div className="flex sm:hidden items-center justify-between mt-3 gap-3">
          <button
            onTouchStart={() => (gameStateRef.current.keys.left = true)}
            onTouchEnd={() => (gameStateRef.current.keys.left = false)}
            onMouseDown={() => (gameStateRef.current.keys.left = true)}
            onMouseUp={() => (gameStateRef.current.keys.left = false)}
            className="flex-1 py-3 bg-neutral-800 active:bg-cyan-600 rounded-xl flex items-center justify-center text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onTouchStart={() => (gameStateRef.current.keys.right = true)}
            onTouchEnd={() => (gameStateRef.current.keys.right = false)}
            onMouseDown={() => (gameStateRef.current.keys.right = true)}
            onMouseUp={() => (gameStateRef.current.keys.right = false)}
            className="flex-1 py-3 bg-neutral-800 active:bg-cyan-600 rounded-xl flex items-center justify-center text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
