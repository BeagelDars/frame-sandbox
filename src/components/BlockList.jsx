import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, 
  ChevronDown, 
  User, 
  Type, 
  Image as ImageIcon, 
  Link2, 
  LayoutGrid, 
  Quote as QuoteIcon, 
  HelpCircle, 
  Share2, 
  Minus,
  Palette,
  SlidersHorizontal,
  BarChart3,
  Tag,
  GitCommit,
  Clock,
  Mail,
  Sparkles,
  MousePointerClick,
  MessageSquare,
  CheckSquare,
  Eraser,
  RotateCcw
} from 'lucide-react';
import { BlockItem } from './BlockItem';
import { BLOCK_DEFINITIONS, createNewBlock } from '../constants/blockTypes';
import { THEMES, FONTS, WIDTHS } from './SiteRenderer';

export const BlockList = ({
  blocks,
  setBlocks,
  theme,
  setTheme,
  font,
  setFont,
  maxWidth,
  setMaxWidth,
  customTheme,
  setCustomTheme,
  onClearAll
}) => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showStyleSettings, setShowStyleSettings] = useState(false);
  const [styleTab, setStyleTab] = useState('presets'); // 'presets' | 'gradients' | 'custom'
  const [draggedIndex, setDraggedIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowAddMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddBlock = (type) => {
    const newBlock = createNewBlock(type);
    if (newBlock) {
      setBlocks([...blocks, newBlock]);
      setShowAddMenu(false);
    }
  };

  const handleUpdateBlock = (index, updated) => {
    const newBlocks = [...blocks];
    newBlocks[index] = updated;
    setBlocks(newBlocks);
  };

  const handleDeleteBlock = (index) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const handleDuplicateBlock = (index) => {
    const target = blocks[index];
    const duplicated = {
      ...JSON.parse(JSON.stringify(target)),
      id: Math.random().toString(36).substring(2, 9)
    };
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, duplicated);
    setBlocks(newBlocks);
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index - 1];
    newBlocks[index - 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
  };

  const handleMoveDown = (index) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index + 1];
    newBlocks[index + 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
  };

  // Drag and Drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newBlocks = [...blocks];
    const [movedItem] = newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(targetIndex, 0, movedItem);
    setBlocks(newBlocks);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const blockCategories = [
    {
      category: 'Writing & Structure',
      items: [
        { type: 'text', label: 'Text & Paragraph', icon: Type, desc: 'Heading & body text (Word-style)' },
        { type: 'button', label: 'Action Button', icon: MousePointerClick, desc: 'Standalone link button' },
        { type: 'callout', label: 'Callout Notice', icon: MessageSquare, desc: 'Highlighted message box' },
        { type: 'checklist', label: 'Checklist / Features', icon: CheckSquare, desc: 'Interactive check list' },
        { type: 'header', label: 'Profile Header', icon: User, desc: 'Avatar, name, role, bio' }
      ]
    },
    {
      category: 'Media & Interactive',
      items: [
        { type: 'photo', label: 'Photo (Device Upload)', icon: ImageIcon, desc: 'Image with caption & aspect' },
        { type: 'beforeAfter', label: 'Before & After Slider', icon: SlidersHorizontal, desc: 'Interactive image slider' },
        { type: 'countdown', label: 'Event Countdown', icon: Clock, desc: 'Live ticking launch timer' }
      ]
    },
    {
      category: 'Cards & Metrics',
      items: [
        { type: 'cards', label: 'Project Cards', icon: LayoutGrid, desc: 'Feature cards with photos' },
        { type: 'stats', label: 'Metrics & Stats', icon: BarChart3, desc: 'Key counter numbers' },
        { type: 'skills', label: 'Skills & Badges', icon: Tag, desc: 'Pill cloud of skills or tags' },
        { type: 'timeline', label: 'Timeline & Milestones', icon: GitCommit, desc: 'Roadmap & career history' },
        { type: 'quote', label: 'Quote / Highlight', icon: QuoteIcon, desc: 'Editorial quotation' }
      ]
    },
    {
      category: 'Links & Contact',
      items: [
        { type: 'links', label: 'Link Hub', icon: Link2, desc: 'Stack of link buttons' },
        { type: 'newsletter', label: 'Newsletter / Inquiries', icon: Mail, desc: 'Email subscription box' },
        { type: 'faq', label: 'FAQ / Accordion', icon: HelpCircle, desc: 'Expandable Q&A' },
        { type: 'social', label: 'Social & Contact', icon: Share2, desc: 'Email, X, GitHub pills' },
        { type: 'divider', label: 'Divider & Space', icon: Minus, desc: 'Visual separation' }
      ]
    }
  ];

  const solidThemes = Object.values(THEMES).filter(t => t.type === 'solid');
  const gradientThemes = Object.values(THEMES).filter(t => t.type === 'gradient');

  return (
    <div className="h-full flex flex-col bg-[#fafafa] border-r border-[#e5e5ea]">
      {/* Top Action Bar */}
      <div className="p-3 bg-[#ffffff] border-b border-[#e5e5ea] flex items-center justify-between space-x-2 select-none">
        {/* Add Block Button & Categorized Dropdown */}
        <div className="relative flex-1" ref={menuRef}>
          <button
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 bg-[#18181b] hover:bg-[#27272a] active:bg-[#09090b] text-[#ffffff] rounded-lg text-xs font-medium shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Block</span>
            <ChevronDown className="w-3 h-3 text-[#a1a1aa] ml-1" />
          </button>

          {showAddMenu && (
            <div className="absolute left-0 top-full mt-1.5 w-80 bg-[#ffffff] rounded-xl border border-[#e5e5ea] shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-96 overflow-y-auto">
              {blockCategories.map((cat, catIdx) => (
                <div key={catIdx} className="mb-2 last:mb-0">
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa]">
                    {cat.category}
                  </div>
                  <div className="grid grid-cols-1 gap-0.5 mt-0.5">
                    {cat.items.map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.type}
                          onClick={() => handleAddBlock(opt.type)}
                          className="w-full text-left p-1.5 hover:bg-[#f4f4f5] rounded-lg transition-colors flex items-center space-x-2.5 group"
                        >
                          <div className="w-6 h-6 rounded-md bg-[#f4f4f5] group-hover:bg-[#ffffff] border border-[#e4e4e7] flex items-center justify-center text-[#71717a] group-hover:text-[#18181b] transition-colors shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 truncate">
                            <div className="text-xs font-medium text-[#18181b]">{opt.label}</div>
                            <div className="text-[10.5px] text-[#71717a]">{opt.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Global Page Style Button */}
        <button
          onClick={() => setShowStyleSettings(!showStyleSettings)}
          className={`flex items-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
            showStyleSettings
              ? 'bg-[#f4f4f5] text-[#18181b] border-[#d4d4d8]'
              : 'bg-[#ffffff] text-[#52525b] hover:text-[#18181b] border-[#e5e5ea] hover:bg-[#f4f4f5]'
          }`}
          title="Page style & color settings"
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Styles</span>
        </button>

        {/* 1-Click Clear All Data Button */}
        <button
          onClick={onClearAll}
          className="flex items-center space-x-1 py-2 px-2.5 rounded-lg text-xs font-medium border border-[#e5e5ea] bg-[#ffffff] text-[#71717a] hover:text-[#b91c1c] hover:bg-[#fef2f2] hover:border-[#fecaca] transition-colors"
          title="Clear all default blocks to start empty"
        >
          <Eraser className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Clear All</span>
        </button>
      </div>

      {/* Style & Color Settings Drawer */}
      {showStyleSettings && (
        <div className="p-3.5 bg-[#ffffff] border-b border-[#e5e5ea] space-y-3.5 select-none animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
          {/* Palette Mode Tabs */}
          <div className="flex items-center space-x-1 bg-[#f4f4f5] p-0.5 rounded-lg border border-[#e5e5ea]">
            <button
              onClick={() => {
                setStyleTab('presets');
                if (customTheme?.enabled) setCustomTheme({ ...customTheme, enabled: false });
              }}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                styleTab === 'presets' && !customTheme?.enabled ? 'bg-[#ffffff] text-[#18181b] shadow-xs' : 'text-[#71717a]'
              }`}
            >
              Light Solids
            </button>
            <button
              onClick={() => {
                setStyleTab('gradients');
                if (customTheme?.enabled) setCustomTheme({ ...customTheme, enabled: false });
              }}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                styleTab === 'gradients' && !customTheme?.enabled ? 'bg-[#ffffff] text-[#18181b] shadow-xs' : 'text-[#71717a]'
              }`}
            >
              Soft Gradients
            </button>
            <button
              onClick={() => {
                setStyleTab('custom');
                setCustomTheme({ ...(customTheme || {}), enabled: true });
              }}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                customTheme?.enabled ? 'bg-[#ffffff] text-[#18181b] shadow-xs' : 'text-[#71717a]'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Solid Palettes */}
          {styleTab === 'presets' && !customTheme?.enabled && (
            <div>
              <label className="text-[11px] font-medium text-[#71717a] mb-1.5 block">Solid Colors</label>
              <div className="grid grid-cols-4 gap-1.5">
                {solidThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-1.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1 ${
                      theme === t.id
                        ? 'border-[#18181b] bg-[#f4f4f5] shadow-xs'
                        : 'border-[#e5e5ea] hover:border-[#d4d4d8] bg-[#ffffff]'
                    }`}
                  >
                    <div
                      style={{ backgroundColor: t.bg, borderColor: t.border }}
                      className="w-4 h-4 rounded-full border shadow-2xs"
                    />
                    <span className="text-[10px] font-medium text-[#18181b] truncate w-full">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Gradient Palettes */}
          {styleTab === 'gradients' && !customTheme?.enabled && (
            <div>
              <label className="text-[11px] font-medium text-[#71717a] mb-1.5 block">Subtle Gradients</label>
              <div className="grid grid-cols-2 gap-1.5">
                {gradientThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-2 rounded-lg border text-left transition-all flex items-center space-x-2 ${
                      theme === t.id
                        ? 'border-[#18181b] bg-[#f4f4f5] shadow-xs'
                        : 'border-[#e5e5ea] hover:border-[#d4d4d8] bg-[#ffffff]'
                    }`}
                  >
                    <div
                      style={{ background: t.bg, borderColor: t.border }}
                      className="w-6 h-6 rounded-md border shrink-0 shadow-2xs"
                    />
                    <span className="text-[11px] font-medium text-[#18181b] truncate">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Custom Color Editor */}
          {customTheme?.enabled && (
            <div className="space-y-2.5 p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a]">Custom Color Controls</span>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                  <span className="text-[11px] text-[#71717a]">Background</span>
                  <input
                    type="color"
                    value={customTheme.bg || '#ffffff'}
                    onChange={(e) => setCustomTheme({ ...customTheme, bg: e.target.value })}
                    className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                  <span className="text-[11px] text-[#71717a]">Text Color</span>
                  <input
                    type="color"
                    value={customTheme.text || '#171717'}
                    onChange={(e) => setCustomTheme({ ...customTheme, text: e.target.value })}
                    className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                  <span className="text-[11px] text-[#71717a]">Card Surface</span>
                  <input
                    type="color"
                    value={customTheme.cardBg || '#fafafa'}
                    onChange={(e) => setCustomTheme({ ...customTheme, cardBg: e.target.value })}
                    className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                  <span className="text-[11px] text-[#71717a]">Button Accent</span>
                  <input
                    type="color"
                    value={customTheme.buttonBg || '#171717'}
                    onChange={(e) => setCustomTheme({ ...customTheme, buttonBg: e.target.value, buttonHover: e.target.value })}
                    className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Typography & Width */}
          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#f0f0f2]">
            <div>
              <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Typography</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 text-xs text-[#18181b] focus:border-[#18181b] focus:outline-none"
              >
                {Object.values(FONTS).map((f) => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Page Width</label>
              <select
                value={maxWidth}
                onChange={(e) => setMaxWidth(e.target.value)}
                className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 text-xs text-[#18181b] focus:border-[#18181b] focus:outline-none"
              >
                {Object.values(WIDTHS).map((w) => (
                  <option key={w.id} value={w.id}>{w.name} ({w.maxWidth})</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Active Blocks List with Drag-and-Drop Reordering */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {blocks.length === 0 ? (
          <div className="h-64 border-2 border-dashed border-[#e5e5ea] rounded-xl flex flex-col items-center justify-center p-6 text-center">
            <div className="w-8 h-8 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[#a1a1aa] mb-2">
              <Plus className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium text-[#18181b] mb-1">Canvas is completely empty</p>
            <p className="text-[11px] text-[#71717a] max-w-xs mb-3">
              Click "+ Add Block" above to add buttons, word-style text, photos, or cards anywhere.
            </p>
          </div>
        ) : (
          blocks.map((block, index) => (
            <BlockItem
              key={block.id || index}
              block={block}
              index={index}
              totalBlocks={blocks.length}
              onUpdate={(updated) => handleUpdateBlock(index, updated)}
              onDelete={() => handleDeleteBlock(index)}
              onDuplicate={() => handleDuplicateBlock(index)}
              onMoveUp={() => handleMoveUp(index)}
              onMoveDown={() => handleMoveDown(index)}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
              isDragging={draggedIndex === index}
            />
          ))
        )}
      </div>
    </div>
  );
};
