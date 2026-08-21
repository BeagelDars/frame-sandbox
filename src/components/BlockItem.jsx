import React, { useState, useRef } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  Trash2, 
  Copy, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Plus, 
  X,
  Type,
  Image as ImageIcon,
  Link2,
  LayoutGrid,
  Quote as QuoteIcon,
  HelpCircle,
  Share2,
  Minus,
  User,
  SlidersHorizontal,
  BarChart3,
  Tag,
  GitCommit,
  Clock,
  Mail,
  Upload,
  GripVertical,
  MousePointerClick,
  CheckSquare,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Palette
} from 'lucide-react';
import { nanoid } from 'nanoid';
import { processDeviceImage } from '../utils/imageUpload';

// Icon map for block types
const BLOCK_ICONS = {
  header: User,
  text: Type,
  button: MousePointerClick,
  callout: MessageSquare,
  checklist: CheckSquare,
  photo: ImageIcon,
  beforeAfter: SlidersHorizontal,
  stats: BarChart3,
  skills: Tag,
  timeline: GitCommit,
  countdown: Clock,
  newsletter: Mail,
  links: Link2,
  cards: LayoutGrid,
  quote: QuoteIcon,
  faq: HelpCircle,
  social: Share2,
  divider: Minus
};

export const BlockItem = ({
  block,
  index,
  totalBlocks,
  onUpdate,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showColorCustomizer, setShowColorCustomizer] = useState(false);

  const fileInputRef = useRef(null);
  const beforeFileInputRef = useRef(null);
  const afterFileInputRef = useRef(null);

  const IconComponent = BLOCK_ICONS[block.type] || Type;

  const updateField = (field, value) => {
    onUpdate({ ...block, [field]: value });
  };

  const handleDeviceImageUpload = async (file, field = 'url') => {
    if (!file) return;
    try {
      const dataUrl = await processDeviceImage(file);
      updateField(field, dataUrl);
    } catch (err) {
      console.error('Image upload failed', err);
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragEnd={onDragEnd}
      className={`bg-[#ffffff] border rounded-xl overflow-hidden shadow-sm transition-all ${
        isDragging ? 'opacity-40 scale-[0.98] border-dashed border-[#18181b]' : 'border-[#e5e5ea] hover:border-[#d4d4d8]'
      }`}
    >
      {/* Block Header Toolbar with Drag Handle */}
      <div className="h-11 px-3 bg-[#fafafa] border-b border-[#f0f0f2] flex items-center justify-between select-none">
        <div className="flex items-center space-x-2 flex-1">
          {/* Drag Handle */}
          <div
            className="cursor-grab active:cursor-grabbing p-1 text-[#a1a1aa] hover:text-[#18181b] rounded transition-colors"
            title="Drag to reorder anywhere"
          >
            <GripVertical className="w-4 h-4" />
          </div>

          {/* Toggle Expand / Title */}
          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 cursor-pointer flex-1"
          >
            <div className="w-6 h-6 rounded-md bg-[#f4f4f5] border border-[#e4e4e7] flex items-center justify-center text-[#71717a]">
              <IconComponent className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#18181b] capitalize">
              {block.type === 'header' ? 'Profile Header' : block.type === 'beforeAfter' ? 'Before & After' : block.type}
            </span>
            {block.type === 'button' && block.label && (
              <span className="text-[11px] text-[#a1a1aa] truncate max-w-[120px]">
                &bull; {block.label}
              </span>
            )}
            {block.type === 'header' && block.name && (
              <span className="text-[11px] text-[#a1a1aa] truncate max-w-[120px]">
                &bull; {block.name}
              </span>
            )}
            {block.type === 'text' && (block.heading || block.content) && (
              <span className="text-[11px] text-[#a1a1aa] truncate max-w-[120px]">
                &bull; {block.heading || block.content}
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-0.5">
          <button
            disabled={index === 0}
            onClick={onMoveUp}
            title="Move block up"
            className="p-1 text-[#71717a] hover:text-[#18181b] hover:bg-[#f0f0f2] rounded transition-colors disabled:opacity-30"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            disabled={index === totalBlocks - 1}
            onClick={onMoveDown}
            title="Move block down"
            className="p-1 text-[#71717a] hover:text-[#18181b] hover:bg-[#f0f0f2] rounded transition-colors disabled:opacity-30"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <div className="h-3 w-[1px] bg-[#e5e5ea] mx-1"></div>
          <button
            onClick={onDuplicate}
            title="Duplicate block"
            className="p-1 text-[#71717a] hover:text-[#18181b] hover:bg-[#f0f0f2] rounded transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onDelete}
            title="Delete block"
            className="p-1 text-[#a1a1aa] hover:text-[#b91c1c] hover:bg-[#fef2f2] rounded transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Block Body Editor */}
      {isExpanded && (
        <div className="p-4 space-y-3.5 text-xs text-[#18181b]">
          {/* STANDALONE INTERACTIVE BUTTON BLOCK */}
          {block.type === 'button' && (
            <>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Button Label</label>
                <input
                  type="text"
                  value={block.label || ''}
                  onChange={(e) => updateField('label', e.target.value)}
                  placeholder="Get in Touch"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none font-medium"
                />
              </div>

              {/* Action Behavior Selector */}
              <div className="p-3 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2.5">
                <label className="text-[11px] font-medium text-[#71717a] block">When Clicked, What Happens?</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'link', label: 'Open URL / Link' },
                    { id: 'copy', label: 'Copy Text to Clipboard' },
                    { id: 'modal', label: 'Show Popup Notice' },
                    { id: 'confetti', label: 'Celebrate Particle Burst' }
                  ].map((act) => (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => updateField('actionType', act.id)}
                      className={`py-1.5 px-2.5 rounded-md border text-left text-xs font-medium transition-colors ${
                        (block.actionType || 'link') === act.id
                          ? 'bg-[#18181b] text-[#ffffff] border-[#18181b]'
                          : 'bg-[#ffffff] text-[#52525b] border-[#e5e5ea] hover:bg-[#f4f4f5]'
                      }`}
                    >
                      {act.label}
                    </button>
                  ))}
                </div>

                {/* Conditional Inputs Based on Action */}
                {(block.actionType || 'link') === 'link' && (
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={block.url || ''}
                      onChange={(e) => updateField('url', e.target.value)}
                      placeholder="https://... or mailto:..."
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#18181b]"
                    />
                    <label className="flex items-center space-x-2 text-[11px] text-[#71717a] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={block.openNewTab !== false}
                        onChange={(e) => updateField('openNewTab', e.target.checked)}
                        className="rounded"
                      />
                      <span>Open link in new browser tab</span>
                    </label>
                  </div>
                )}

                {block.actionType === 'copy' && (
                  <div className="space-y-1 pt-1">
                    <label className="text-[10.5px] text-[#71717a]">Text to Copy (e.g. promo code, email address)</label>
                    <input
                      type="text"
                      value={block.copyText || ''}
                      onChange={(e) => updateField('copyText', e.target.value)}
                      placeholder="e.g. DISCOUNT2026 or hello@mywebsite.com"
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2.5 py-1.5 focus:outline-none focus:border-[#18181b]"
                    />
                  </div>
                )}

                {block.actionType === 'modal' && (
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={block.modalTitle || ''}
                      onChange={(e) => updateField('modalTitle', e.target.value)}
                      placeholder="Popup Title"
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2.5 py-1 text-xs focus:outline-none font-medium"
                    />
                    <textarea
                      rows={2}
                      value={block.modalContent || ''}
                      onChange={(e) => updateField('modalContent', e.target.value)}
                      placeholder="Popup message details..."
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2.5 py-1 text-xs focus:outline-none resize-none"
                    />
                  </div>
                )}
              </div>

              {/* Layout & Style */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Style</label>
                  <select
                    value={block.style || 'solid'}
                    onChange={(e) => updateField('style', e.target.value)}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 focus:border-[#18181b] focus:outline-none"
                  >
                    <option value="solid">Solid Dark</option>
                    <option value="outline">Border Outline</option>
                    <option value="soft">Soft Surface</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Size</label>
                  <select
                    value={block.size || 'medium'}
                    onChange={(e) => updateField('size', e.target.value)}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 focus:border-[#18181b] focus:outline-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Alignment</label>
                  <select
                    value={block.align || 'center'}
                    onChange={(e) => updateField('align', e.target.value)}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 focus:border-[#18181b] focus:outline-none"
                  >
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="full">Full Width</option>
                  </select>
                </div>
              </div>

              {/* Custom Colors for this specific button */}
              <div className="pt-2 border-t border-[#f0f0f2]">
                <button
                  type="button"
                  onClick={() => setShowColorCustomizer(!showColorCustomizer)}
                  className="flex items-center space-x-1.5 text-xs text-[#71717a] hover:text-[#18181b] transition-colors"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>{showColorCustomizer ? 'Hide Button Colors' : 'Customize Button Colors'}</span>
                </button>

                {showColorCustomizer && (
                  <div className="grid grid-cols-2 gap-2 mt-2 p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg">
                    <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                      <span className="text-[11px] text-[#71717a]">Button Color</span>
                      <input
                        type="color"
                        value={block.customBg || '#18181b'}
                        onChange={(e) => updateField('customBg', e.target.value)}
                        className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                      />
                    </div>
                    <div className="flex items-center justify-between bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1">
                      <span className="text-[11px] text-[#71717a]">Text Color</span>
                      <input
                        type="color"
                        value={block.customTextColor || '#ffffff'}
                        onChange={(e) => updateField('customTextColor', e.target.value)}
                        className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* CALLOUT BOX BLOCK */}
          {block.type === 'callout' && (
            <>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Callout Title</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Note / Announcement"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none font-medium"
                />
              </div>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Callout Content</label>
                <textarea
                  rows={2}
                  value={block.content || ''}
                  onChange={(e) => updateField('content', e.target.value)}
                  placeholder="Message or note details..."
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none resize-none"
                />
              </div>
            </>
          )}

          {/* CHECKLIST BLOCK */}
          {block.type === 'checklist' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Feature List"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="flex items-center space-x-2 p-2 bg-[#fafafa] border border-[#e5e5ea] rounded-lg">
                    <input
                      type="checkbox"
                      checked={item.checked || false}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], checked: e.target.checked };
                        updateField('items', updated);
                      }}
                      className="rounded border-[#d4d4d8] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={item.text || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], text: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Checklist point..."
                      className="flex-1 bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = block.items.filter((_, i) => i !== itemIdx);
                        updateField('items', updated);
                      }}
                      className="text-[#a1a1aa] hover:text-[#b91c1c] p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = { id: nanoid(4), text: 'New item', checked: true };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Checklist Point</span>
                </button>
              </div>
            </div>
          )}

          {/* TEXT & PARAGRAPH BLOCK */}
          {block.type === 'text' && (
            <>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Heading Title</label>
                <input
                  type="text"
                  value={block.heading || ''}
                  onChange={(e) => updateField('heading', e.target.value)}
                  placeholder="Section heading (optional)"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Body Text</label>
                <textarea
                  rows={3}
                  value={block.content || ''}
                  onChange={(e) => updateField('content', e.target.value)}
                  placeholder="Write your text just like in a Word file..."
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Format</label>
                  <div className="flex bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
                    {['standard', 'h1', 'lead'].map((s) => (
                      <button
                        key={s}
                        onClick={() => updateField('style', s)}
                        className={`flex-1 py-1 text-[11px] capitalize rounded transition-colors ${
                          block.style === s ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Text Alignment</label>
                  <div className="flex bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
                    <button
                      onClick={() => updateField('align', 'left')}
                      className={`flex-1 py-1 flex items-center justify-center rounded transition-colors ${
                        (block.align || 'left') === 'left' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      <AlignLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => updateField('align', 'center')}
                      className={`flex-1 py-1 flex items-center justify-center rounded transition-colors ${
                        block.align === 'center' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      <AlignCenter className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => updateField('align', 'right')}
                      className={`flex-1 py-1 flex items-center justify-center rounded transition-colors ${
                        block.align === 'right' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      <AlignRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* HEADER BLOCK */}
          {block.type === 'header' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Full Name</label>
                  <input
                    type="text"
                    value={block.name || ''}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Alex Rivera"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Initials / Badge</label>
                  <input
                    type="text"
                    maxLength={3}
                    value={block.initials || ''}
                    onChange={(e) => updateField('initials', e.target.value)}
                    placeholder="AR"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Headline / Role</label>
                <input
                  type="text"
                  value={block.headline || ''}
                  onChange={(e) => updateField('headline', e.target.value)}
                  placeholder="Software Designer & Writer"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Bio / Summary</label>
                <textarea
                  rows={2}
                  value={block.bio || ''}
                  onChange={(e) => updateField('bio', e.target.value)}
                  placeholder="Brief description about yourself or company"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none resize-none"
                />
              </div>

              {/* Avatar Device Upload */}
              <div className="p-3 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-medium text-[#71717a]">Avatar Photo (from device)</label>
                  {block.avatarUrl && (
                    <button
                      onClick={() => updateField('avatarUrl', '')}
                      className="text-[10px] text-[#a1a1aa] hover:text-[#b91c1c]"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  {block.avatarUrl ? (
                    <img src={block.avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-[#d4d4d8]" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#e4e4e7] flex items-center justify-center font-bold text-xs text-[#71717a]">
                      {block.initials || 'AR'}
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={(e) => handleDeviceImageUpload(e.target.files[0], 'avatarUrl')}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-1.5 px-3 bg-[#ffffff] hover:bg-[#f4f4f5] border border-[#e5e5ea] rounded-md text-xs font-medium text-[#18181b] flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#71717a]" />
                    <span>{block.avatarUrl ? 'Change Avatar Photo' : 'Upload Avatar from Device'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Alignment</label>
                  <div className="flex bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
                    <button
                      onClick={() => updateField('align', 'left')}
                      className={`flex-1 py-1 flex items-center justify-center rounded transition-colors ${
                        block.align === 'left' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      <AlignLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => updateField('align', 'center')}
                      className={`flex-1 py-1 flex items-center justify-center rounded transition-colors ${
                        block.align === 'center' ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      <AlignCenter className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* PHOTO BLOCK */}
          {block.type === 'photo' && (
            <>
              <div className="p-3 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2.5">
                <label className="text-[11px] font-medium text-[#71717a] block">Photo Source</label>
                {block.url && (
                  <div className="relative rounded-md overflow-hidden border border-[#e5e5ea] max-h-36 bg-black/5">
                    <img src={block.url} alt="Uploaded" className="w-full h-full object-cover" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => handleDeviceImageUpload(e.target.files[0], 'url')}
                />
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-2 px-3 bg-[#18181b] hover:bg-[#27272a] text-[#ffffff] rounded-md text-xs font-medium flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Photo from Device</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Caption (optional)</label>
                  <input
                    type="text"
                    value={block.caption || ''}
                    onChange={(e) => updateField('caption', e.target.value)}
                    placeholder="Photo caption"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Aspect Ratio</label>
                  <select
                    value={block.aspectRatio || '16/9'}
                    onChange={(e) => updateField('aspectRatio', e.target.value)}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  >
                    <option value="16/9">16:9 Landscape</option>
                    <option value="4/3">4:3 Standard</option>
                    <option value="1/1">1:1 Square</option>
                    <option value="auto">Natural Height</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* BEFORE & AFTER BLOCK */}
          {block.type === 'beforeAfter' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Design Comparison"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                  <span className="text-[10px] font-mono text-[#71717a] block">BEFORE PHOTO</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={beforeFileInputRef}
                    onChange={(e) => handleDeviceImageUpload(e.target.files[0], 'beforeUrl')}
                  />
                  <button
                    type="button"
                    onClick={() => beforeFileInputRef.current?.click()}
                    className="w-full py-1.5 bg-[#ffffff] hover:bg-[#f4f4f5] border border-[#e5e5ea] rounded text-[11px] font-medium flex items-center justify-center space-x-1 transition-colors"
                  >
                    <Upload className="w-3 h-3 text-[#71717a]" />
                    <span>Upload Before</span>
                  </button>
                  <input
                    type="text"
                    value={block.beforeLabel || ''}
                    onChange={(e) => updateField('beforeLabel', e.target.value)}
                    placeholder="Before Label"
                    className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none"
                  />
                </div>

                <div className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                  <span className="text-[10px] font-mono text-[#71717a] block">AFTER PHOTO</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={afterFileInputRef}
                    onChange={(e) => handleDeviceImageUpload(e.target.files[0], 'afterUrl')}
                  />
                  <button
                    type="button"
                    onClick={() => afterFileInputRef.current?.click()}
                    className="w-full py-1.5 bg-[#ffffff] hover:bg-[#f4f4f5] border border-[#e5e5ea] rounded text-[11px] font-medium flex items-center justify-center space-x-1 transition-colors"
                  >
                    <Upload className="w-3 h-3 text-[#71717a]" />
                    <span>Upload After</span>
                  </button>
                  <input
                    type="text"
                    value={block.afterLabel || ''}
                    onChange={(e) => updateField('afterLabel', e.target.value)}
                    placeholder="After Label"
                    className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STATS & METRICS BLOCK */}
          {block.type === 'stats' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Key Metrics"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg flex items-center space-x-2">
                    <input
                      type="text"
                      value={item.value || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], value: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="100k+"
                      className="w-24 bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 font-mono font-bold text-xs focus:outline-none focus:border-[#18181b]"
                    />
                    <input
                      type="text"
                      value={item.label || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], label: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Active Readers"
                      className="flex-1 bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                    />
                    <button
                      onClick={() => {
                        const updated = block.items.filter((_, i) => i !== itemIdx);
                        updateField('items', updated);
                      }}
                      className="text-[#a1a1aa] hover:text-[#b91c1c] p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = { id: nanoid(4), value: '500+', label: 'New Metric' };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Stat Card</span>
                </button>
              </div>
            </div>
          )}

          {/* SKILLS & BADGES BLOCK */}
          {block.type === 'skills' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Core Disciplines"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Tag Pills (comma separated)</label>
                <input
                  type="text"
                  value={(block.items || []).join(', ')}
                  onChange={(e) => {
                    const tags = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                    updateField('items', tags);
                  }}
                  placeholder="Design Systems, Typography, WebGL, UI"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* TIMELINE & MILESTONES BLOCK */}
          {block.type === 'timeline' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Career Roadmaps"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#a1a1aa]">MILESTONE #{itemIdx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = block.items.filter((_, i) => i !== itemIdx);
                          updateField('items', updated);
                        }}
                        className="text-[#a1a1aa] hover:text-[#b91c1c] p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={item.period || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], period: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="2025 — Present"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none"
                      />
                      <input
                        type="text"
                        value={item.title || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], title: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="Role / Title"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none font-medium"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={item.description || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], description: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Details description..."
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none resize-none"
                    />
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = { id: nanoid(4), period: '2026', title: 'New Achievement', description: 'Milestone description.' };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Milestone Item</span>
                </button>
              </div>
            </div>
          )}

          {/* COUNTDOWN BLOCK */}
          {block.type === 'countdown' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Countdown Title</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Exhibition Opening"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Target Date</label>
                <input
                  type="date"
                  value={block.targetDate || ''}
                  onChange={(e) => updateField('targetDate', e.target.value)}
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Action Button Label</label>
                  <input
                    type="text"
                    value={block.buttonText || ''}
                    onChange={(e) => updateField('buttonText', e.target.value)}
                    placeholder="RSVP / Get Ticket"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Action URL</label>
                  <input
                    type="text"
                    value={block.buttonUrl || ''}
                    onChange={(e) => updateField('buttonUrl', e.target.value)}
                    placeholder="https://example.com"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* NEWSLETTER BLOCK */}
          {block.type === 'newsletter' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Title</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Stay in the loop"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Description</label>
                <textarea
                  rows={2}
                  value={block.description || ''}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="Occasional dispatch on quiet computing..."
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Button Label</label>
                  <input
                    type="text"
                    value={block.buttonText || ''}
                    onChange={(e) => updateField('buttonText', e.target.value)}
                    placeholder="Subscribe"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Placeholder</label>
                  <input
                    type="text"
                    value={block.placeholder || ''}
                    onChange={(e) => updateField('placeholder', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* LINK HUB BLOCK */}
          {block.type === 'links' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Selected Links"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-[#71717a] block">Links List</label>
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#a1a1aa]">LINK #{itemIdx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = block.items.filter((_, i) => i !== itemIdx);
                          updateField('items', updated);
                        }}
                        className="text-[#a1a1aa] hover:text-[#b91c1c] p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={item.label || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], label: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="Button Title"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                      />
                      <input
                        type="text"
                        value={item.subtitle || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], subtitle: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="Subtitle (optional)"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                      />
                    </div>
                    <input
                      type="text"
                      value={item.url || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], url: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="https://example.com"
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                    />
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = { id: nanoid(4), label: 'New Link', subtitle: '', url: 'https://' };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Link Item</span>
                </button>
              </div>
            </div>
          )}

          {/* PROJECT CARDS BLOCK */}
          {block.type === 'cards' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Featured Projects"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-[#71717a] block">Card Items</label>
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="p-3 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#a1a1aa]">CARD #{itemIdx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = block.items.filter((_, i) => i !== itemIdx);
                          updateField('items', updated);
                        }}
                        className="text-[#a1a1aa] hover:text-[#b91c1c] p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], title: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Project Title"
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                    />

                    <textarea
                      rows={2}
                      value={item.description || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], description: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Short description..."
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b] resize-none"
                    />

                    {/* Card Device Image Upload */}
                    <div className="flex items-center space-x-2">
                      {item.imageUrl && (
                        <img src={item.imageUrl} alt="Thumb" className="w-8 h-8 rounded object-cover border" />
                      )}
                      <label className="flex-1 py-1 px-2 bg-[#ffffff] hover:bg-[#f4f4f5] border border-[#e5e5ea] rounded text-[11px] font-medium text-[#18181b] flex items-center justify-center space-x-1 cursor-pointer transition-colors">
                        <Upload className="w-3 h-3 text-[#71717a]" />
                        <span>{item.imageUrl ? 'Change Card Photo' : 'Upload Card Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const dataUrl = await processDeviceImage(file);
                              const updated = [...block.items];
                              updated[itemIdx] = { ...updated[itemIdx], imageUrl: dataUrl };
                              updateField('items', updated);
                            }
                          }}
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={item.linkUrl || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], linkUrl: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="Link URL"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                      />
                      <input
                        type="text"
                        value={item.linkText || ''}
                        onChange={(e) => {
                          const updated = [...block.items];
                          updated[itemIdx] = { ...updated[itemIdx], linkText: e.target.value };
                          updateField('items', updated);
                        }}
                        placeholder="Link Label (e.g. View Project)"
                        className="bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = {
                      id: nanoid(4),
                      title: 'New Project',
                      description: 'Project summary description.',
                      imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
                      linkUrl: 'https://example.com',
                      linkText: 'View'
                    };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project Card</span>
                </button>
              </div>
            </div>
          )}

          {/* QUOTE BLOCK */}
          {block.type === 'quote' && (
            <>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Quotation</label>
                <textarea
                  rows={2}
                  value={block.quote || ''}
                  onChange={(e) => updateField('quote', e.target.value)}
                  placeholder="Quotation text..."
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Author</label>
                  <input
                    type="text"
                    value={block.author || ''}
                    onChange={(e) => updateField('author', e.target.value)}
                    placeholder="Author name"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Role / Context</label>
                  <input
                    type="text"
                    value={block.role || ''}
                    onChange={(e) => updateField('role', e.target.value)}
                    placeholder="Book or title"
                    className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

          {/* FAQ BLOCK */}
          {block.type === 'faq' && (
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Section Title (optional)</label>
                <input
                  type="text"
                  value={block.title || ''}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Common Questions"
                  className="w-full bg-[#fbfbfb] border border-[#e5e5ea] rounded-md px-2.5 py-1.5 focus:border-[#18181b] focus:bg-[#ffffff] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-[#71717a] block">Q&A Pairs</label>
                {(block.items || []).map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="p-2.5 bg-[#fafafa] border border-[#e5e5ea] rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#a1a1aa]">QUESTION #{itemIdx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = block.items.filter((_, i) => i !== itemIdx);
                          updateField('items', updated);
                        }}
                        className="text-[#a1a1aa] hover:text-[#b91c1c] p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={item.question || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], question: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="What is your question?"
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                    />
                    <textarea
                      rows={2}
                      value={item.answer || ''}
                      onChange={(e) => {
                        const updated = [...block.items];
                        updated[itemIdx] = { ...updated[itemIdx], answer: e.target.value };
                        updateField('items', updated);
                      }}
                      placeholder="Answer details..."
                      className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b] resize-none"
                    />
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newItem = { id: nanoid(4), question: 'New Question', answer: 'Answer goes here.' };
                    updateField('items', [...(block.items || []), newItem]);
                  }}
                  className="w-full py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] rounded-md text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add FAQ Item</span>
                </button>
              </div>
            </div>
          )}

          {/* SOCIAL BLOCK */}
          {block.type === 'social' && (
            <div className="space-y-2">
              <label className="text-[11px] font-medium text-[#71717a] block">Social & Contact Links</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={block.email || ''}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="Email: alex@example.com"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
                <input
                  type="text"
                  value={block.x || ''}
                  onChange={(e) => updateField('x', e.target.value)}
                  placeholder="X: https://x.com/username"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
                <input
                  type="text"
                  value={block.github || ''}
                  onChange={(e) => updateField('github', e.target.value)}
                  placeholder="GitHub URL"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
                <input
                  type="text"
                  value={block.linkedin || ''}
                  onChange={(e) => updateField('linkedin', e.target.value)}
                  placeholder="LinkedIn URL"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
                <input
                  type="text"
                  value={block.instagram || ''}
                  onChange={(e) => updateField('instagram', e.target.value)}
                  placeholder="Instagram URL"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
                <input
                  type="text"
                  value={block.website || ''}
                  onChange={(e) => updateField('website', e.target.value)}
                  placeholder="Website URL"
                  className="bg-[#fbfbfb] border border-[#e5e5ea] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#18181b]"
                />
              </div>
            </div>
          )}

          {/* DIVIDER BLOCK */}
          {block.type === 'divider' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Style</label>
                <div className="flex bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
                  {['line', 'dots', 'space'].map((st) => (
                    <button
                      key={st}
                      onClick={() => updateField('style', st)}
                      className={`flex-1 py-1 text-[11px] capitalize rounded transition-colors ${
                        block.style === st ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] font-medium text-[#71717a] mb-1 block">Spacing</label>
                <div className="flex bg-[#f4f4f5] p-0.5 rounded-md border border-[#e5e5ea]">
                  {['small', 'medium', 'large'].map((sp) => (
                    <button
                      key={sp}
                      onClick={() => updateField('spacing', sp)}
                      className={`flex-1 py-1 text-[11px] capitalize rounded transition-colors ${
                        block.spacing === sp ? 'bg-[#ffffff] text-[#18181b] shadow-sm' : 'text-[#71717a]'
                      }`}
                    >
                      {sp}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
