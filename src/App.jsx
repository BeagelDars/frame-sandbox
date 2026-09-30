import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Soundboard from './components/Soundboard';
import TechContract from './components/TechContract';
import CarterChallengeMatrix from './components/CarterChallengeMatrix';
import BribeWheel from './components/BribeWheel';
import RamCatcherGame from './components/RamCatcherGame';
import ShortsScriptGenerator from './components/ShortsScriptGenerator';
import ProjectShowcase from './components/ProjectShowcase';
import BigRedButtonModal from './components/BigRedButtonModal';
import Footer from './components/Footer';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [soundMuted, setSoundMuted] = useState(false);
  const [theme, setTheme] = useState('cyber');
  const [userName, setUserName] = useState(() => localStorage.getItem('carter_user_name') || 'The Creator');
  const [isRedButtonOpen, setIsRedButtonOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('carter_user_name', userName);
  }, [userName]);

  const toggleSound = () => {
    const isMuted = sounds.toggleMute();
    setSoundMuted(isMuted);
  };

  const scrollToContract = () => {
    setActiveTab('contract');
    const el = document.getElementById('contract');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-neutral-950 text-white selection:bg-cyan-500 selection:text-black font-sans relative ${
      theme === 'cyber' ? 'theme-cyber' : ''
    }`}>
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundMuted={soundMuted}
        toggleSound={toggleSound}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <HeroSection
          onOpenContract={scrollToContract}
          onOpenRedButton={() => setIsRedButtonOpen(true)}
        />

        {/* Sticky/Prominent Soundboard for video reaction */}
        <section className="my-6">
          <Soundboard />
        </section>

        {/* Section 1: The Contract */}
        <TechContract
          userName={userName}
          setUserName={setUserName}
        />

        {/* Section 2: Carter's App Scorecard & Challenge Matrix */}
        <CarterChallengeMatrix />

        {/* Section 3: Bribe Wheel */}
        <BribeWheel />

        {/* Section 4: RAM & Tech Catcher Arcade Minigame */}
        <RamCatcherGame />

        {/* Section 5: Shorts & TikTok Script Generator */}
        <ShortsScriptGenerator
          userName={userName}
        />

        {/* Section 6: User's Real Apps & Videos Showcase */}
        <ProjectShowcase
          userName={userName}
          setUserName={setUserName}
        />
      </main>

      {/* Emergency Big Red Button Modal */}
      <BigRedButtonModal
        isOpen={isRedButtonOpen}
        onClose={() => setIsRedButtonOpen(false)}
        userName={userName}
      />

      {/* Footer */}
      <Footer userName={userName} />
    </div>
  );
}
