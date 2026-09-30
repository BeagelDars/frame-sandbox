import React, { useState, useEffect } from 'react';
import { ExternalLink, Youtube, Video, Code2, Sparkles, Plus, Trash2, Edit3, Check, Globe } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function ProjectShowcase({ userName, setUserName }) {
  const [userHandle, setUserHandle] = useState(() => localStorage.getItem('carter_user_handle') || '@CreatorDev');
  const [userVideoUrl, setUserVideoUrl] = useState(() => localStorage.getItem('carter_user_video') || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const [personalMessage, setPersonalMessage] = useState(
    () => localStorage.getItem('carter_personal_msg') || 
    "Yo Carter! I've been grinding making apps and coding videos every single week. I challenged myself to build this full-stack interactive experience to show what I can do. If you like the apps I create and this video does numbers, hook me up with a 32GB RAM laptop or a PS5 so I can level up my software development and video production. Let's make internet history!"
  );

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('carter_showcase_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 1,
        title: "Carter's Tech Tribunal (This App)",
        tag: "Interactive Web Experience",
        desc: "A full-featured satire app with Web Audio soundboard, HTML5 Canvas contract signing, rig roast simulator, and playable RAM catcher game.",
        tech: ["React 18", "Web Audio API", "HTML5 Canvas", "Tailwind CSS"],
        link: "#",
        badge: "🔥 Made for Carter"
      },
      {
        id: 2,
        title: "Frame — Minimalist Website Builder",
        tag: "Full-Stack Web App",
        desc: "A distraction-free, block-based visual website builder designed for creators to build and publish clean landing pages in seconds.",
        tech: ["React", "CodeMirror", "Vite", "Node.js"],
        link: "#",
        badge: "⭐ Production Ready"
      },
      {
        id: 3,
        title: "My Viral Coding & Tech Videos",
        tag: "Content & Tutorials",
        desc: "Short-form & long-form videos showcasing how I build games, web apps, and coding experiments from scratch with zero budget.",
        tech: ["YouTube Shorts", "TikTok", "Creative Coding"],
        link: userVideoUrl,
        badge: "🎬 Watch My Videos"
      }
    ];
  });

  const [newProject, setNewProject] = useState({ title: '', tag: '', desc: '', tech: '', link: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  useEffect(() => {
    localStorage.setItem('carter_user_handle', userHandle);
    localStorage.setItem('carter_user_video', userVideoUrl);
    localStorage.setItem('carter_personal_msg', personalMessage);
    localStorage.setItem('carter_showcase_projects', JSON.stringify(projects));
  }, [userHandle, userVideoUrl, personalMessage, projects]);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title) return;
    sounds.playChaChing();
    const item = {
      id: Date.now(),
      title: newProject.title,
      tag: newProject.tag || 'Web App',
      desc: newProject.desc || 'Custom built project by me.',
      tech: newProject.tech ? newProject.tech.split(',').map(s => s.trim()) : ['React', 'JavaScript'],
      link: newProject.link || '#',
      badge: '🚀 New Creation'
    };
    setProjects([item, ...projects]);
    setNewProject({ title: '', tag: '', desc: '', tech: '', link: '' });
    setIsAdding(false);
  };

  const handleDeleteProject = (id) => {
    sounds.playThock();
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div id="proof" className="py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-300 text-xs font-mono mb-2">
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span>EXHIBIT A: PROOF OF REAL CREATOR TALENT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          MY APPS & VIDEOS SHOWCASE
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto mt-1">
          I don't just want free tech. I BUILD real software and make real videos. Look at the software, interactive experiences, and content I've created:
        </p>
      </div>

      {/* Creator Profile & Message to Carter Card */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 mb-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 shrink-0">
              <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center text-xl font-black text-cyan-300">
                DEV
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{userName}</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded-full">
                  {userHandle}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                Aspiring Tech Creator & Developer • Building in Public
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playThock();
              setIsEditingProfile(!isEditingProfile);
            }}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-mono font-bold flex items-center gap-2 transition-all"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditingProfile ? 'Done Editing' : 'Customize My Info'}</span>
          </button>
        </div>

        {/* Edit Profile Form (collapsible) */}
        {isEditingProfile && (
          <div className="my-6 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-neutral-400 block mb-1">Your Name / Title:</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 text-white"
                />
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Your Social Handle (@YouTube / @TikTok):</label>
                <input
                  type="text"
                  value={userHandle}
                  onChange={(e) => setUserHandle(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-neutral-400 block mb-1">Your Featured Video / YouTube URL:</label>
              <input
                type="text"
                value={userVideoUrl}
                onChange={(e) => setUserVideoUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 text-white"
              />
            </div>
            <div>
              <label className="text-neutral-400 block mb-1">Direct Personal Note to Carter Smith:</label>
              <textarea
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                rows={3}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 text-white resize-none"
              />
            </div>
          </div>
        )}

        {/* Personal Note to Carter Box */}
        <div className="mt-6 bg-neutral-950/70 border border-neutral-800/80 rounded-2xl p-5">
          <div className="text-xs font-mono font-bold text-amber-400 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT PLEA TO CARTER SMITH:
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed font-sans italic">
            "{personalMessage}"
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={userVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playThock()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-mono text-xs font-bold transition-all shadow-md shadow-red-900/40"
            >
              <Youtube className="w-4 h-4" />
              <span>WATCH MY VIDEOS ON YOUTUBE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-white flex items-center gap-2">
          <span>CREATIONS & APPS PORTFOLIO</span>
          <span className="text-xs font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
            {projects.length} PROJECTS
          </span>
        </h3>

        <button
          onClick={() => {
            sounds.playThock();
            setIsAdding(!isAdding);
          }}
          className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Add Project Form */}
      {isAdding && (
        <form onSubmit={handleAddProject} className="bg-neutral-900 border border-cyan-500/50 rounded-2xl p-5 mb-6 space-y-3 font-mono text-xs">
          <h4 className="font-bold text-cyan-400">Add New Project / Video</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Project Name (e.g. 2D Physics Game)"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="bg-neutral-950 border border-neutral-700 rounded-lg p-2 text-white"
              required
            />
            <input
              type="text"
              placeholder="Tag / Category (e.g. Game Engine)"
              value={newProject.tag}
              onChange={(e) => setNewProject({ ...newProject, tag: e.target.value })}
              className="bg-neutral-950 border border-neutral-700 rounded-lg p-2 text-white"
            />
          </div>
          <textarea
            placeholder="Brief description of what you created and why it proves you have talent..."
            value={newProject.desc}
            onChange={(e) => setNewProject({ ...newProject, desc: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-2 text-white resize-none"
            rows={2}
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Tech Stack comma-separated (e.g. React, Three.js, Node)"
              value={newProject.tech}
              onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
              className="bg-neutral-950 border border-neutral-700 rounded-lg p-2 text-white"
            />
            <input
              type="text"
              placeholder="Link URL"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              className="bg-neutral-950 border border-neutral-700 rounded-lg p-2 text-white"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 bg-neutral-800 text-neutral-400 rounded-lg hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400"
            >
              Save Project
            </button>
          </div>
        </form>
      )}

      {/* Projects Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold">
                  {proj.badge}
                </span>
                {projects.length > 2 && (
                  <button
                    onClick={() => handleDeleteProject(proj.id)}
                    className="opacity-0 group-hover:opacity-100 text-neutral-500 hover:text-red-400 transition-opacity p-1"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {proj.title}
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {proj.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-neutral-950 text-neutral-300 px-2 py-0.5 rounded border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {proj.link && proj.link !== '#' && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <span>Open Demo / Video</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
