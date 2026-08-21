import { nanoid } from 'nanoid';

export const STARTER_SITES = [
  {
    id: 'bio',
    name: 'Personal Bio & Metrics',
    description: 'Clean personal card with avatar, bio, key metrics, and link hub',
    title: 'Alex Rivera — Profile',
    theme: 'grad-morning',
    font: 'sans',
    maxWidth: 'compact',
    blocks: [
      {
        id: nanoid(6),
        type: 'header',
        name: 'Alex Rivera',
        headline: 'Software Designer & Writer',
        bio: 'Crafting quiet digital tools and deliberate design systems with focus on typography and simplicity.',
        avatarUrl: '',
        initials: 'AR',
        align: 'center'
      },
      {
        id: nanoid(6),
        type: 'stats',
        title: '',
        items: [
          { id: nanoid(4), value: '140k+', label: 'Readers' },
          { id: nanoid(4), value: '12', label: 'Years Design' },
          { id: nanoid(4), value: '99.9%', label: 'Quality Score' }
        ]
      },
      {
        id: nanoid(6),
        type: 'links',
        title: 'Selected Links',
        items: [
          { id: nanoid(4), label: 'Selected Works & Case Studies', subtitle: 'Recent digital product work', url: 'https://example.com' },
          { id: nanoid(4), label: 'Essays & Observations', subtitle: 'Notes on minimalism and software', url: 'https://example.com' },
          { id: nanoid(4), label: 'Book Office Hours', subtitle: '30-minute design advisory session', url: 'https://example.com' }
        ]
      },
      {
        id: nanoid(6),
        type: 'skills',
        title: 'Disciplines',
        items: ['Design Systems', 'Typography', 'TypeScript', 'WebGL', 'Product Strategy']
      },
      {
        id: nanoid(6),
        type: 'social',
        email: 'alex@example.com',
        x: 'https://x.com',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        website: 'https://example.com'
      }
    ]
  },
  {
    id: 'portfolio',
    name: 'Photography & Comparison',
    description: 'Visual showcase with before-after slider, project cards, and timeline',
    title: 'Elena Vance — Visual Works',
    theme: 'grad-sage',
    font: 'serif',
    maxWidth: 'medium',
    blocks: [
      {
        id: nanoid(6),
        type: 'header',
        name: 'Elena Vance',
        headline: 'Architectural & Spatial Photography',
        bio: 'Documenting light, concrete, and deliberate structural form across Europe and East Asia.',
        avatarUrl: '',
        initials: 'EV',
        align: 'left'
      },
      {
        id: nanoid(6),
        type: 'beforeAfter',
        title: 'Restoration Comparison',
        beforeUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        afterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        beforeLabel: 'Archive 1984',
        afterLabel: 'Present 2026'
      },
      {
        id: nanoid(6),
        type: 'cards',
        title: 'Selected Series',
        items: [
          {
            id: nanoid(4),
            title: 'Shadow & Mass',
            description: 'A monochrome exploration of brutalist government complexes in Berlin.',
            imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
            linkUrl: 'https://example.com',
            linkText: 'View Series'
          },
          {
            id: nanoid(4),
            title: 'Glass Geometry',
            description: 'Reflective structural façades and high-altitude perspective in Tokyo.',
            imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80',
            linkUrl: 'https://example.com',
            linkText: 'View Series'
          }
        ]
      },
      {
        id: nanoid(6),
        type: 'quote',
        quote: 'Architecture is the learned game, correct and magnificent, of forms assembled in the light.',
        author: 'Le Corbusier',
        role: 'Vers une architecture'
      },
      {
        id: nanoid(6),
        type: 'social',
        email: 'elena@example.com',
        instagram: 'https://instagram.com',
        website: 'https://example.com'
      }
    ]
  },
  {
    id: 'launch',
    name: 'Product Launch & Countdown',
    description: 'Product landing page with live countdown, feature highlights, and FAQs',
    title: 'Kanso — Focus Timer',
    theme: 'grad-lavender',
    font: 'sans',
    maxWidth: 'medium',
    blocks: [
      {
        id: nanoid(6),
        type: 'header',
        name: 'Kanso Timer',
        headline: 'A Quiet Desktop Timer for Deep Work',
        bio: 'No gamification, no loud notifications, no streak pressure. Just a clean digital hourglass designed to respect your focus.',
        avatarUrl: '',
        initials: 'K',
        align: 'center'
      },
      {
        id: nanoid(6),
        type: 'countdown',
        title: 'Public Release Countdown',
        targetDate: '2026-10-01',
        buttonText: 'Reserve Early Access',
        buttonUrl: 'https://example.com'
      },
      {
        id: nanoid(6),
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        caption: 'Minimalist desktop interface in sand finish',
        alt: 'Product preview',
        aspectRatio: '16/9'
      },
      {
        id: nanoid(6),
        type: 'newsletter',
        title: 'Get Product Updates',
        description: 'Join 12,000+ creators receiving our monthly release dispatch.',
        buttonText: 'Join Waitlist',
        placeholder: 'alex@example.com'
      },
      {
        id: nanoid(6),
        type: 'faq',
        title: 'Common Questions',
        items: [
          {
            id: nanoid(4),
            question: 'Is Kanso completely offline?',
            answer: 'Yes. Kanso does not require an account, has zero telemetry, and operates 100% locally on your machine.'
          },
          {
            id: nanoid(4),
            question: 'Can I customize timer intervals?',
            answer: 'Yes. You can configure work sessions and quiet rest intervals via simple keyboard shortcuts.'
          }
        ]
      },
      {
        id: nanoid(6),
        type: 'social',
        github: 'https://github.com',
        x: 'https://x.com',
        website: 'https://example.com'
      }
    ]
  },
  {
    id: 'empty',
    name: 'Blank Canvas',
    description: 'Empty starting canvas ready for your device photos and blocks',
    title: 'My Website',
    theme: 'white',
    font: 'sans',
    maxWidth: 'medium',
    blocks: [
      {
        id: nanoid(6),
        type: 'header',
        name: 'My Website',
        headline: 'Welcome to my corner of the web',
        bio: 'Add your own device photos, text, links, and cards using the blocks panel on the left.',
        avatarUrl: '',
        initials: 'MW',
        align: 'center'
      }
    ]
  }
];
