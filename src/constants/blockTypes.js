import { nanoid } from 'nanoid';

export const BLOCK_DEFINITIONS = {
  header: {
    type: 'header',
    name: 'Profile Header',
    description: 'Avatar, name, headline, and bio',
    defaultData: () => ({
      name: 'Alex Rivera',
      headline: 'Software Designer & Writer',
      bio: 'Crafting quiet digital tools and deliberate design systems with focus on typography and simplicity.',
      avatarUrl: '',
      initials: 'AR',
      align: 'center'
    })
  },
  text: {
    type: 'text',
    name: 'Text & Paragraph',
    description: 'Document text, headings, or notes like in a word file',
    defaultData: () => ({
      heading: 'About This Project',
      content: 'We believe that tools should disappear into the background, giving all attention to the creative work being made.',
      style: 'standard', // 'standard' | 'lead' | 'h1' | 'h2'
      align: 'left' // 'left' | 'center' | 'right'
    })
  },
  button: {
    type: 'button',
    name: 'Interactive Action Button',
    description: 'Button that opens links, copies text, or shows popup notices',
    defaultData: () => ({
      label: 'Get in Touch',
      actionType: 'link', // 'link' | 'copy' | 'modal' | 'confetti'
      url: 'mailto:hello@example.com',
      openNewTab: true,
      copyText: 'hello@example.com',
      modalTitle: 'Special Announcement',
      modalContent: 'Thank you for visiting! For bespoke inquiries or consulting, send a note anytime.',
      style: 'solid', // 'solid' | 'outline' | 'soft'
      align: 'center', // 'left' | 'center' | 'right' | 'full'
      size: 'medium' // 'small' | 'medium' | 'large'
    })
  },
  photo: {
    type: 'photo',
    name: 'Photo',
    description: 'Upload photo from device with caption',
    defaultData: () => ({
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Kyoto, Japan — Architectural study',
      alt: 'Minimalist landscape',
      aspectRatio: '16/9' // 'auto' | '16/9' | '4/3' | '1/1'
    })
  },
  callout: {
    type: 'callout',
    name: 'Callout Box',
    description: 'Highlighted announcement or notice box',
    defaultData: () => ({
      title: 'Note from the Author',
      content: 'This workspace was assembled using simple modular blocks. Everything updates live in real-time.'
    })
  },
  checklist: {
    type: 'checklist',
    name: 'Checklist / Features',
    description: 'Interactive checklist or feature items',
    defaultData: () => ({
      title: 'Core Principles',
      items: [
        { id: nanoid(4), text: 'Ultra-clean typography and generous whitespace', checked: true },
        { id: nanoid(4), text: 'Zero unnecessary tracking or distractions', checked: true },
        { id: nanoid(4), text: 'Instant portable publishing', checked: false }
      ]
    })
  },
  links: {
    type: 'links',
    name: 'Link Hub',
    description: 'Stack of clean clickable link buttons',
    defaultData: () => ({
      title: '',
      items: [
        { id: nanoid(4), label: 'Selected Works & Case Studies', subtitle: 'Recent software & branding work', url: 'https://example.com' },
        { id: nanoid(4), label: 'Essays & Colophon', subtitle: 'Notes on architecture and code', url: 'https://example.com' },
        { id: nanoid(4), label: 'Contact & Inquiries', subtitle: 'hello@example.com', url: 'mailto:hello@example.com' }
      ]
    })
  },
  cards: {
    type: 'cards',
    name: 'Project Cards',
    description: 'Grid of feature or portfolio cards with photos',
    defaultData: () => ({
      title: 'Selected Projects',
      items: [
        {
          id: nanoid(4),
          title: 'Atelier Engine',
          description: 'A minimal vector layout engine built for procedural publication design.',
          imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
          linkUrl: 'https://example.com',
          linkText: 'View Project'
        },
        {
          id: nanoid(4),
          title: 'Kuro System',
          description: 'High-contrast monochrome UI component library for focused applications.',
          imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80',
          linkUrl: 'https://example.com',
          linkText: 'View Project'
        }
      ]
    })
  },
  stats: {
    type: 'stats',
    name: 'Metrics & Stats',
    description: 'Key counter numbers and metrics grid',
    defaultData: () => ({
      title: 'At a Glance',
      items: [
        { id: nanoid(4), value: '140k+', label: 'Active Readers' },
        { id: nanoid(4), value: '12', label: 'Years Experience' },
        { id: nanoid(4), value: '99.9%', label: 'Uptime Reliability' }
      ]
    })
  },
  beforeAfter: {
    type: 'beforeAfter',
    name: 'Before & After Slider',
    description: 'Interactive comparison slider between two photos',
    defaultData: () => ({
      title: 'Design Evolution',
      beforeUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      afterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      beforeLabel: 'Original',
      afterLabel: 'Redesign'
    })
  },
  skills: {
    type: 'skills',
    name: 'Skills & Badges',
    description: 'Pill cloud of skills, tags, or topics',
    defaultData: () => ({
      title: 'Core Disciplines',
      items: ['Design Systems', 'Typography', 'Architecture', 'TypeScript', 'WebGL', 'Product Strategy', 'UI/UX']
    })
  },
  timeline: {
    type: 'timeline',
    name: 'Timeline & Milestones',
    description: 'Chronological roadmap or career milestones',
    defaultData: () => ({
      title: 'Selected Milestones',
      items: [
        {
          id: nanoid(4),
          period: '2025 — Present',
          title: 'Lead Architect at Atelier',
          description: 'Directing user experience and design systems for generative vector tools.'
        },
        {
          id: nanoid(4),
          period: '2023 — 2025',
          title: 'Senior Interface Designer',
          description: 'Engineered high-performance web components and minimal editor layouts.'
        }
      ]
    })
  },
  countdown: {
    type: 'countdown',
    name: 'Event Countdown',
    description: 'Real-time countdown timer to a target date',
    defaultData: () => {
      const target = new Date();
      target.setDate(target.getDate() + 14);
      return {
        title: 'Exhibition Opening in Tokyo',
        targetDate: target.toISOString().split('T')[0],
        buttonText: 'Reserve Entry Ticket',
        buttonUrl: 'https://example.com'
      };
    }
  },
  newsletter: {
    type: 'newsletter',
    name: 'Newsletter / Inquiries',
    description: 'Minimal subscription or contact signup box',
    defaultData: () => ({
      title: 'Stay in the Loop',
      description: 'Occasional dispatch on quiet computing, typography, and new releases. No spam.',
      buttonText: 'Subscribe',
      placeholder: 'Enter your email address'
    })
  },
  quote: {
    type: 'quote',
    name: 'Quote / Highlight',
    description: 'Highlighted quotation with author credit',
    defaultData: () => ({
      quote: 'Simplicity is about subtracting the obvious and adding the meaningful.',
      author: 'John Maeda',
      role: 'The Laws of Simplicity'
    })
  },
  faq: {
    type: 'faq',
    name: 'FAQ & Accordion',
    description: 'Expandable question and answer pairs',
    defaultData: () => ({
      title: 'Frequently Asked Questions',
      items: [
        {
          id: nanoid(4),
          question: 'What services do you offer?',
          answer: 'We specialize in digital product architecture, typography systems, and web performance optimization.'
        },
        {
          id: nanoid(4),
          question: 'How does project booking work?',
          answer: 'Projects are structured in 2-week focused design and engineering sprints with direct async collaboration.'
        }
      ]
    })
  },
  social: {
    type: 'social',
    name: 'Social & Contact',
    description: 'Clean row of contact and social handles',
    defaultData: () => ({
      email: 'alex@example.com',
      x: 'https://x.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      instagram: '',
      website: 'https://example.com'
    })
  },
  divider: {
    type: 'divider',
    name: 'Divider & Space',
    description: 'Visual separation line or vertical spacing',
    defaultData: () => ({
      style: 'line', // 'line' | 'dots' | 'space'
      spacing: 'medium' // 'small' | 'medium' | 'large'
    })
  }
};

export const createNewBlock = (type) => {
  const def = BLOCK_DEFINITIONS[type];
  if (!def) return null;
  return {
    id: nanoid(6),
    type,
    ...def.defaultData()
  };
};
