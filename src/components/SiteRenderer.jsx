import React from 'react';

// Preset themes and gradients (light, elegant, zero neon glow)
export const THEMES = {
  white: {
    id: 'white',
    name: 'Pure White',
    type: 'solid',
    bg: '#ffffff',
    text: '#171717',
    muted: '#737373',
    cardBg: '#fafafa',
    border: '#e5e5e5',
    cardBorder: '#f0f0f0',
    buttonBg: '#171717',
    buttonText: '#ffffff',
    buttonHover: '#262626',
    linkHover: '#f4f4f5'
  },
  warm: {
    id: 'warm',
    name: 'Warm Linen',
    type: 'solid',
    bg: '#faf8f5',
    text: '#1c1917',
    muted: '#78716c',
    cardBg: '#ffffff',
    border: '#e7e5e4',
    cardBorder: '#e7e5e4',
    buttonBg: '#292524',
    buttonText: '#ffffff',
    buttonHover: '#44403c',
    linkHover: '#f5f5f4'
  },
  stone: {
    id: 'stone',
    name: 'Soft Stone',
    type: 'solid',
    bg: '#f5f5f4',
    text: '#18181b',
    muted: '#71717a',
    cardBg: '#ffffff',
    border: '#e4e4e7',
    cardBorder: '#e4e4e7',
    buttonBg: '#18181b',
    buttonText: '#ffffff',
    buttonHover: '#27272a',
    linkHover: '#f4f4f5'
  },
  slate: {
    id: 'slate',
    name: 'Pale Slate',
    type: 'solid',
    bg: '#f8fafc',
    text: '#0f172a',
    muted: '#64748b',
    cardBg: '#ffffff',
    border: '#e2e8f0',
    cardBorder: '#e2e8f0',
    buttonBg: '#0f172a',
    buttonText: '#ffffff',
    buttonHover: '#1e293b',
    linkHover: '#f1f5f9'
  },
  sage: {
    id: 'sage',
    name: 'Sage Mist',
    type: 'solid',
    bg: '#f4f7f4',
    text: '#1c2826',
    muted: '#5e716a',
    cardBg: '#ffffff',
    border: '#dce5de',
    cardBorder: '#e2eae4',
    buttonBg: '#233831',
    buttonText: '#ffffff',
    buttonHover: '#1b2c26',
    linkHover: '#eaf1ec'
  },
  rose: {
    id: 'rose',
    name: 'Rose Linen',
    type: 'solid',
    bg: '#fdf7f7',
    text: '#261b1e',
    muted: '#7a5e66',
    cardBg: '#ffffff',
    border: '#eedfe2',
    cardBorder: '#f3e8eb',
    buttonBg: '#3d252c',
    buttonText: '#ffffff',
    buttonHover: '#2d1b20',
    linkHover: '#faecef'
  },
  butter: {
    id: 'butter',
    name: 'Buttercream',
    type: 'solid',
    bg: '#fdfbf2',
    text: '#292518',
    muted: '#7a7051',
    cardBg: '#ffffff',
    border: '#ebe5cb',
    cardBorder: '#f2eedb',
    buttonBg: '#383019',
    buttonText: '#ffffff',
    buttonHover: '#26200f',
    linkHover: '#f7f2dc'
  },
  // Gradients
  'grad-morning': {
    id: 'grad-morning',
    name: 'Morning Glow',
    type: 'gradient',
    bg: 'linear-gradient(145deg, #fff3eb 0%, #fdfbf7 50%, #f0f7ff 100%)',
    text: '#1e293b',
    muted: '#64748b',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    border: '#e2e8f0',
    cardBorder: '#e2e8f0',
    buttonBg: '#0f172a',
    buttonText: '#ffffff',
    buttonHover: '#1e293b',
    linkHover: '#ffffff'
  },
  'grad-sage': {
    id: 'grad-sage',
    name: 'Sage Forest',
    type: 'gradient',
    bg: 'linear-gradient(145deg, #edf5ef 0%, #f7faf7 50%, #e8f0eb 100%)',
    text: '#172520',
    muted: '#52665e',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    border: '#dbe5de',
    cardBorder: '#dbe5de',
    buttonBg: '#1f312a',
    buttonText: '#ffffff',
    buttonHover: '#13211c',
    linkHover: '#ffffff'
  },
  'grad-lavender': {
    id: 'grad-lavender',
    name: 'Mist Lavender',
    type: 'gradient',
    bg: 'linear-gradient(145deg, #f5f0f8 0%, #faf8fc 50%, #eef2fa 100%)',
    text: '#221e2e',
    muted: '#685e78',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    border: '#e4deec',
    cardBorder: '#e4deec',
    buttonBg: '#2c253b',
    buttonText: '#ffffff',
    buttonHover: '#1d1729',
    linkHover: '#ffffff'
  },
  'grad-sand': {
    id: 'grad-sand',
    name: 'Desert Dune',
    type: 'gradient',
    bg: 'linear-gradient(145deg, #fbf7ef 0%, #fdfbf6 50%, #f6f0e2 100%)',
    text: '#2b2315',
    muted: '#78684d',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    border: '#e8dfcc',
    cardBorder: '#e8dfcc',
    buttonBg: '#362a16',
    buttonText: '#ffffff',
    buttonHover: '#241a0b',
    linkHover: '#ffffff'
  }
};

export const FONTS = {
  sans: {
    id: 'sans',
    name: 'Modern Sans',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
  },
  serif: {
    id: 'serif',
    name: 'Editorial Serif',
    fontFamily: "Georgia, 'Times New Roman', serif"
  },
  mono: {
    id: 'mono',
    name: 'Monospace',
    fontFamily: "'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  }
};

export const WIDTHS = {
  compact: { id: 'compact', name: 'Compact', maxWidth: '460px' },
  medium: { id: 'medium', name: 'Standard', maxWidth: '640px' },
  wide: { id: 'wide', name: 'Wide', maxWidth: '840px' }
};

// Social Icons SVG helper
const getSocialIconSvg = (type) => {
  switch (type) {
    case 'email':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
    case 'x':
      return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    case 'github':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
    case 'linkedin':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
    case 'instagram':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;
    case 'website':
    default:
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;
  }
};

// Generates complete self-contained HTML for the block site
export const generateSiteHtml = (siteData = {}) => {
  const {
    title = 'My Website',
    theme = 'white',
    font = 'sans',
    maxWidth = 'medium',
    blocks = [],
    customTheme = null
  } = siteData;

  const currentTheme = customTheme && customTheme.enabled ? customTheme : (THEMES[theme] || THEMES.white);
  const currentFont = FONTS[font] || FONTS.sans;
  const currentWidth = WIDTHS[maxWidth] || WIDTHS.medium;

  // Render individual blocks
  const renderedBlocks = (blocks || []).map((block) => {
    switch (block.type) {
      case 'header': {
        const isCenter = block.align === 'center';
        return `
          <header class="block-header ${isCenter ? 'align-center' : 'align-left'}">
            ${block.avatarUrl 
              ? `<img src="${block.avatarUrl}" alt="${block.name || 'Avatar'}" class="avatar-img" />`
              : `<div class="avatar-initials">${block.initials || (block.name ? block.name.slice(0, 2).toUpperCase() : 'W')}</div>`
            }
            <div class="header-text">
              <h1 class="header-name">${block.name || ''}</h1>
              ${block.headline ? `<p class="header-headline">${block.headline}</p>` : ''}
              ${block.bio ? `<p class="header-bio">${block.bio}</p>` : ''}
            </div>
          </header>
        `;
      }

      case 'text': {
        const alignClass = block.align ? `text-align-${block.align}` : 'text-align-left';
        return `
          <section class="block-text style-${block.style || 'standard'} ${alignClass}">
            ${block.heading ? `<h2 class="text-heading">${block.heading}</h2>` : ''}
            ${block.content ? `<p class="text-content">${block.content.replace(/\n/g, '<br/>')}</p>` : ''}
          </section>
        `;
      }

      case 'button': {
        const align = block.align || 'center';
        const style = block.style || 'solid';
        const size = block.size || 'medium';
        const action = block.actionType || 'link';

        // Custom individual button colors if configured
        const customStyle = [];
        if (block.customBg) customStyle.push(`background-color: ${block.customBg} !important`);
        if (block.customTextColor) customStyle.push(`color: ${block.customTextColor} !important`);
        if (block.customBorderColor) customStyle.push(`border-color: ${block.customBorderColor} !important`);
        const inlineStyleAttr = customStyle.length > 0 ? `style="${customStyle.join('; ')}"` : '';

        if (action === 'copy') {
          return `
            <div class="block-btn-wrap btn-align-${align}">
              <button onclick="copyBtnText(this, '${encodeURIComponent(block.copyText || block.label || '')}')" ${inlineStyleAttr} class="custom-btn btn-style-${style} btn-size-${size}">
                <span class="btn-text">${block.label || 'Copy Text'}</span>
                <span class="btn-icon">&rarr;</span>
              </button>
            </div>
          `;
        }

        if (action === 'modal') {
          return `
            <div class="block-btn-wrap btn-align-${align}">
              <button onclick="showCustomModal('${encodeURIComponent(block.modalTitle || 'Notice')}', '${encodeURIComponent(block.modalContent || '')}')" ${inlineStyleAttr} class="custom-btn btn-style-${style} btn-size-${size}">
                <span>${block.label || 'Open Notice'}</span>
                <span class="btn-icon">&rarr;</span>
              </button>
            </div>
          `;
        }

        if (action === 'confetti') {
          return `
            <div class="block-btn-wrap btn-align-${align}">
              <button onclick="triggerConfetti()" ${inlineStyleAttr} class="custom-btn btn-style-${style} btn-size-${size}">
                <span>${block.label || 'Celebrate'}</span>
                <span class="btn-icon">&rarr;</span>
              </button>
            </div>
          `;
        }

        // Default 'link' action
        const targetAttr = block.openNewTab !== false ? 'target="_blank" rel="noopener noreferrer"' : '';
        return `
          <div class="block-btn-wrap btn-align-${align}">
            <a href="${block.url || '#'}" ${targetAttr} ${inlineStyleAttr} class="custom-btn btn-style-${style} btn-size-${size}">
              <span>${block.label || 'Click Here'}</span>
              <span class="btn-icon">&rarr;</span>
            </a>
          </div>
        `;
      }

      case 'callout': {
        return `
          <aside class="block-callout">
            ${block.title ? `<h4 class="callout-title">${block.title}</h4>` : ''}
            <p class="callout-content">${(block.content || '').replace(/\n/g, '<br/>')}</p>
          </aside>
        `;
      }

      case 'checklist': {
        const items = block.items || [];
        return `
          <section class="block-checklist">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="checklist-items">
              ${items.map(item => `
                <div class="checklist-row ${item.checked ? 'is-checked' : ''}" onclick="this.classList.toggle('is-checked')">
                  <div class="check-box">&#10003;</div>
                  <span class="check-text">${item.text || ''}</span>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'photo': {
        const ratioClass = block.aspectRatio ? `aspect-${block.aspectRatio.replace('/', '-')}` : 'aspect-16-9';
        return `
          <figure class="block-photo">
            <div class="photo-wrapper ${ratioClass}">
              <img src="${block.url || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'}" alt="${block.alt || 'Photo'}" loading="lazy" />
            </div>
            ${block.caption ? `<figcaption class="photo-caption">${block.caption}</figcaption>` : ''}
          </figure>
        `;
      }

      case 'beforeAfter': {
        const beforeUrl = block.beforeUrl || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80';
        const afterUrl = block.afterUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
        return `
          <section class="block-before-after">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="ba-container" onmousemove="updateBa(event, this)" ontouchmove="updateBa(event, this)">
              <img src="${afterUrl}" alt="${block.afterLabel || 'After'}" class="ba-img ba-after" />
              <div class="ba-overlay" style="width: 50%;">
                <img src="${beforeUrl}" alt="${block.beforeLabel || 'Before'}" class="ba-img ba-before" />
              </div>
              <div class="ba-handle" style="left: 50%;">
                <div class="ba-line"></div>
                <div class="ba-button">&harr;</div>
              </div>
              <span class="ba-badge ba-badge-before">${block.beforeLabel || 'Before'}</span>
              <span class="ba-badge ba-badge-after">${block.afterLabel || 'After'}</span>
            </div>
          </section>
        `;
      }

      case 'stats': {
        const items = block.items || [];
        return `
          <section class="block-stats">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="stats-grid">
              ${items.map(item => `
                <div class="stat-card">
                  <div class="stat-value">${item.value || '0'}</div>
                  <div class="stat-label">${item.label || 'Metric'}</div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'skills': {
        const items = block.items || [];
        return `
          <section class="block-skills">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="skills-cloud">
              ${items.map(skill => `
                <span class="skill-pill">${skill}</span>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'timeline': {
        const items = block.items || [];
        return `
          <section class="block-timeline">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="timeline-list">
              ${items.map(item => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-period">${item.period || ''}</div>
                  <div class="timeline-content">
                    <h4 class="timeline-title">${item.title || ''}</h4>
                    ${item.description ? `<p class="timeline-desc">${item.description}</p>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'countdown': {
        const targetDate = block.targetDate || '2026-12-31';
        return `
          <section class="block-countdown" data-target="${targetDate}">
            ${block.title ? `<h3 class="countdown-title">${block.title}</h3>` : ''}
            <div class="countdown-timer">
              <div class="cd-box"><span class="cd-num cd-days">00</span><span class="cd-lbl">DAYS</span></div>
              <div class="cd-box"><span class="cd-num cd-hours">00</span><span class="cd-lbl">HOURS</span></div>
              <div class="cd-box"><span class="cd-num cd-mins">00</span><span class="cd-lbl">MINS</span></div>
              <div class="cd-box"><span class="cd-num cd-secs">00</span><span class="cd-lbl">SECS</span></div>
            </div>
            ${block.buttonText && block.buttonUrl ? `
              <div class="countdown-action">
                <a href="${block.buttonUrl}" target="_blank" rel="noopener noreferrer" class="custom-btn btn-style-solid btn-size-medium">
                  <span>${block.buttonText}</span>
                  <span class="btn-icon">&rarr;</span>
                </a>
              </div>
            ` : ''}
          </section>
        `;
      }

      case 'newsletter': {
        return `
          <section class="block-newsletter">
            <div class="newsletter-card">
              <h3 class="newsletter-title">${block.title || 'Stay in touch'}</h3>
              ${block.description ? `<p class="newsletter-desc">${block.description}</p>` : ''}
              <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('button').innerText = 'Joined'; this.querySelector('input').value = '';">
                <input type="email" required placeholder="${block.placeholder || 'Enter your email'}" class="newsletter-input" />
                <button type="submit" class="newsletter-btn">${block.buttonText || 'Subscribe'}</button>
              </form>
            </div>
          </section>
        `;
      }

      case 'links': {
        const items = block.items || [];
        return `
          <nav class="block-links">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="links-stack">
              ${items.map(item => `
                <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="link-card">
                  <div class="link-info">
                    <span class="link-label">${item.label || 'Link'}</span>
                    ${item.subtitle ? `<span class="link-subtitle">${item.subtitle}</span>` : ''}
                  </div>
                  <span class="link-arrow">&rarr;</span>
                </a>
              `).join('')}
            </div>
          </nav>
        `;
      }

      case 'cards': {
        const items = block.items || [];
        return `
          <section class="block-cards">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="cards-grid">
              ${items.map(item => `
                <div class="project-card">
                  ${item.imageUrl ? `
                    <div class="card-img-wrap">
                      <img src="${item.imageUrl}" alt="${item.title || 'Card'}" loading="lazy" />
                    </div>
                  ` : ''}
                  <div class="card-body">
                    <h4 class="card-title">${item.title || 'Untitled'}</h4>
                    ${item.description ? `<p class="card-desc">${item.description}</p>` : ''}
                    ${item.linkUrl ? `
                      <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer" class="card-link">
                        <span>${item.linkText || 'Learn more'}</span>
                        <span class="card-arrow">&rarr;</span>
                      </a>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'quote': {
        return `
          <blockquote class="block-quote">
            <p class="quote-text">"${block.quote || ''}"</p>
            ${(block.author || block.role) ? `
              <footer class="quote-footer">
                <span class="quote-author">${block.author || ''}</span>
                ${block.role ? `<span class="quote-role">&mdash; ${block.role}</span>` : ''}
              </footer>
            ` : ''}
          </blockquote>
        `;
      }

      case 'faq': {
        const items = block.items || [];
        return `
          <section class="block-faq">
            ${block.title ? `<h3 class="section-title">${block.title}</h3>` : ''}
            <div class="faq-list">
              ${items.map(item => `
                <details class="faq-item">
                  <summary class="faq-question">
                    <span>${item.question || 'Question'}</span>
                    <span class="faq-chevron">+</span>
                  </summary>
                  <div class="faq-answer">
                    <p>${item.answer || ''}</p>
                  </div>
                </details>
              `).join('')}
            </div>
          </section>
        `;
      }

      case 'social': {
        const links = [];
        if (block.email) links.push({ type: 'email', label: 'Email', url: `mailto:${block.email}` });
        if (block.x) links.push({ type: 'x', label: 'X', url: block.x });
        if (block.github) links.push({ type: 'github', label: 'GitHub', url: block.github });
        if (block.linkedin) links.push({ type: 'linkedin', label: 'LinkedIn', url: block.linkedin });
        if (block.instagram) links.push({ type: 'instagram', label: 'Instagram', url: block.instagram });
        if (block.website) links.push({ type: 'website', label: 'Website', url: block.website });

        if (links.length === 0) return '';

        return `
          <div class="block-social">
            <div class="social-row">
              ${links.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-pill" title="${link.label}">
                  ${getSocialIconSvg(link.type)}
                  <span>${link.label}</span>
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }

      case 'divider': {
        if (block.style === 'space') {
          const h = block.spacing === 'large' ? '48px' : block.spacing === 'small' ? '16px' : '32px';
          return `<div style="height: ${h};"></div>`;
        }
        if (block.style === 'dots') {
          return `<div class="block-divider-dots">&bull; &bull; &bull;</div>`;
        }
        return `<hr class="block-divider-line" />`;
      }

      default:
        return '';
    }
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || 'My Website'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: ${currentFont.fontFamily};
      background: ${currentTheme.bg};
      color: ${currentTheme.text};
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      padding: 56px 20px;
      min-height: 100vh;
      display: flex;
      justify-content: center;
    }

    .site-container {
      width: 100%;
      max-width: ${currentWidth.maxWidth};
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    /* Header Block */
    .block-header {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .block-header.align-center {
      align-items: center;
      text-align: center;
    }
    .block-header.align-left {
      align-items: flex-start;
      text-align: left;
    }

    .avatar-img {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid ${currentTheme.border};
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    .avatar-initials {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.border};
      color: ${currentTheme.text};
      font-weight: 600;
      font-size: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.02em;
    }

    .header-name {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: ${currentTheme.text};
    }
    .header-headline {
      font-size: 14px;
      color: ${currentTheme.muted};
      font-weight: 500;
      margin-top: 2px;
    }
    .header-bio {
      font-size: 14.5px;
      color: ${currentTheme.text};
      opacity: 0.88;
      margin-top: 10px;
      max-width: 500px;
      line-height: 1.6;
    }

    /* Section Titles */
    .section-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: ${currentTheme.muted};
      font-weight: 600;
      margin-bottom: 12px;
    }

    /* Text Block */
    .block-text.text-align-left { text-align: left; }
    .block-text.text-align-center { text-align: center; }
    .block-text.text-align-right { text-align: right; }
    
    .block-text .text-heading {
      font-size: 17px;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }
    .block-text.style-h1 .text-heading {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .block-text.style-h2 .text-heading {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.015em;
    }
    .block-text .text-content {
      font-size: 14.5px;
      color: ${currentTheme.text};
      opacity: 0.9;
      line-height: 1.65;
    }
    .block-text.style-lead .text-content {
      font-size: 17px;
      line-height: 1.6;
    }

    /* Standalone Button Block */
    .block-btn-wrap {
      display: flex;
      width: 100%;
    }
    .btn-align-left { justify-content: flex-start; }
    .btn-align-center { justify-content: center; }
    .btn-align-right { justify-content: flex-end; }
    .btn-align-full .custom-btn { width: 100%; justify-content: center; }

    .custom-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.15s ease;
      cursor: pointer;
      border: 1px solid transparent;
      outline: none;
    }
    .btn-size-small { padding: 7px 14px; font-size: 12px; }
    .btn-size-medium { padding: 10px 20px; font-size: 13.5px; }
    .btn-size-large { padding: 14px 26px; font-size: 15px; }

    .btn-style-solid {
      background: ${currentTheme.buttonBg};
      color: ${currentTheme.buttonText};
    }
    .btn-style-solid:hover {
      background: ${currentTheme.buttonHover};
      transform: translateY(-1px);
    }
    .btn-style-outline {
      background: transparent;
      border: 1px solid ${currentTheme.border};
      color: ${currentTheme.text};
    }
    .btn-style-outline:hover {
      background: ${currentTheme.linkHover};
      border-color: ${currentTheme.text};
    }
    .btn-style-soft {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      color: ${currentTheme.text};
    }
    .btn-style-soft:hover {
      background: ${currentTheme.linkHover};
      transform: translateY(-1px);
    }
    .btn-icon {
      transition: transform 0.15s ease;
    }
    .custom-btn:hover .btn-icon {
      transform: translateX(2px);
    }

    /* Callout Box */
    .block-callout {
      background: ${currentTheme.cardBg};
      border-left: 3px solid ${currentTheme.text};
      border-top: 1px solid ${currentTheme.cardBorder};
      border-right: 1px solid ${currentTheme.cardBorder};
      border-bottom: 1px solid ${currentTheme.cardBorder};
      border-radius: 8px;
      padding: 16px 20px;
    }
    .callout-title {
      font-size: 14px;
      font-weight: 600;
      color: ${currentTheme.text};
      margin-bottom: 4px;
    }
    .callout-content {
      font-size: 13.5px;
      color: ${currentTheme.muted};
      line-height: 1.55;
    }

    /* Checklist Block */
    .checklist-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .checklist-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 8px;
      font-size: 13.5px;
      cursor: pointer;
      user-select: none;
      transition: all 0.12s ease;
    }
    .checklist-row:hover {
      background: ${currentTheme.linkHover};
    }
    .check-box {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 1px solid ${currentTheme.border};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: bold;
      color: transparent;
      background: #ffffff;
      shrink-0;
      transition: all 0.12s ease;
    }
    .checklist-row.is-checked .check-box {
      background: ${currentTheme.text};
      color: #ffffff;
      border-color: ${currentTheme.text};
    }
    .check-text {
      color: ${currentTheme.text};
    }

    /* Photo Block */
    .block-photo {
      width: 100%;
    }
    .photo-wrapper {
      position: relative;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid ${currentTheme.border};
      background: ${currentTheme.cardBg};
    }
    .photo-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .aspect-16-9 { aspect-ratio: 16 / 9; }
    .aspect-4-3 { aspect-ratio: 4 / 3; }
    .aspect-1-1 { aspect-ratio: 1 / 1; }
    .aspect-auto { aspect-ratio: auto; max-height: 480px; }

    .photo-caption {
      font-size: 12px;
      color: ${currentTheme.muted};
      margin-top: 8px;
      text-align: center;
    }

    /* Before & After Block */
    .ba-container {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid ${currentTheme.border};
      cursor: ew-resize;
      user-select: none;
      background: ${currentTheme.cardBg};
    }
    .ba-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
    }
    .ba-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
    .ba-overlay .ba-img {
      width: var(--container-width, 100%);
    }
    .ba-handle {
      position: absolute;
      top: 0;
      height: 100%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .ba-line {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #ffffff;
      box-shadow: 0 0 6px rgba(0,0,0,0.3);
    }
    .ba-button {
      position: relative;
      z-index: 2;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ffffff;
      color: #171717;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }
    .ba-badge {
      position: absolute;
      bottom: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      background: rgba(0,0,0,0.6);
      color: #ffffff;
      font-size: 11px;
      font-weight: 500;
      pointer-events: none;
    }
    .ba-badge-before { left: 12px; }
    .ba-badge-after { right: 12px; }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
    }
    .stat-card {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 10px;
      padding: 16px;
      text-align: center;
    }
    .stat-value {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: ${currentTheme.text};
      line-height: 1.2;
    }
    .stat-label {
      font-size: 11.5px;
      color: ${currentTheme.muted};
      margin-top: 4px;
    }

    /* Skills Cloud */
    .skills-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill-pill {
      display: inline-block;
      padding: 6px 12px;
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 500;
      color: ${currentTheme.text};
    }

    /* Timeline */
    .timeline-list {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-left: 20px;
      border-left: 1px solid ${currentTheme.border};
      gap: 20px;
      margin-left: 6px;
    }
    .timeline-item {
      position: relative;
    }
    .timeline-dot {
      position: absolute;
      left: -25px;
      top: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: ${currentTheme.text};
      border: 2px solid ${currentTheme.bg};
    }
    .timeline-period {
      font-size: 11px;
      font-mono: monospace;
      color: ${currentTheme.muted};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .timeline-title {
      font-size: 14px;
      font-weight: 600;
      color: ${currentTheme.text};
      margin-top: 2px;
    }
    .timeline-desc {
      font-size: 13px;
      color: ${currentTheme.muted};
      line-height: 1.5;
      margin-top: 4px;
    }

    /* Countdown Timer */
    .block-countdown {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.border};
      border-radius: 12px;
      padding: 24px;
      text-align: center;
    }
    .countdown-title {
      font-size: 15px;
      font-weight: 600;
      color: ${currentTheme.text};
      margin-bottom: 16px;
    }
    .countdown-timer {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 18px;
    }
    .cd-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(0,0,0,0.03);
      padding: 10px 14px;
      border-radius: 8px;
      min-width: 60px;
    }
    .cd-num {
      font-size: 20px;
      font-weight: 600;
      font-family: monospace;
      color: ${currentTheme.text};
    }
    .cd-lbl {
      font-size: 9px;
      letter-spacing: 0.1em;
      color: ${currentTheme.muted};
      margin-top: 2px;
    }

    /* Newsletter Card */
    .newsletter-card {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.border};
      border-radius: 12px;
      padding: 24px;
    }
    .newsletter-title {
      font-size: 16px;
      font-weight: 600;
      color: ${currentTheme.text};
      margin-bottom: 4px;
    }
    .newsletter-desc {
      font-size: 13px;
      color: ${currentTheme.muted};
      margin-bottom: 16px;
    }
    .newsletter-form {
      display: flex;
      gap: 8px;
    }
    .newsletter-input {
      flex: 1;
      padding: 10px 14px;
      background: #ffffff;
      border: 1px solid ${currentTheme.border};
      border-radius: 8px;
      font-size: 13px;
      color: #171717;
      outline: none;
    }
    .newsletter-btn {
      padding: 10px 18px;
      background: ${currentTheme.buttonBg};
      color: ${currentTheme.buttonText};
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s ease;
      white-space: nowrap;
    }
    .newsletter-btn:hover {
      background: ${currentTheme.buttonHover};
    }

    /* Links Block */
    .links-stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .link-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 9px;
      text-decoration: none;
      color: ${currentTheme.text};
      transition: all 0.15s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.015);
    }
    .link-card:hover {
      background: ${currentTheme.linkHover};
      border-color: ${currentTheme.border};
      transform: translateY(-1px);
    }
    .link-label {
      font-size: 14px;
      font-weight: 500;
      display: block;
    }
    .link-subtitle {
      font-size: 12px;
      color: ${currentTheme.muted};
      margin-top: 2px;
      display: block;
    }
    .link-arrow {
      color: ${currentTheme.muted};
      font-size: 16px;
      margin-left: 12px;
      transition: transform 0.15s ease;
    }
    .link-card:hover .link-arrow {
      transform: translateX(2px);
      color: ${currentTheme.text};
    }

    /* Project Cards Block */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }
    .project-card {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card-img-wrap {
      width: 100%;
      height: 140px;
      overflow: hidden;
      background: ${currentTheme.border};
    }
    .card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card-body {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .card-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 6px;
      color: ${currentTheme.text};
    }
    .card-desc {
      font-size: 13px;
      color: ${currentTheme.muted};
      line-height: 1.5;
      margin-bottom: 14px;
      flex: 1;
    }
    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12.5px;
      font-weight: 500;
      color: ${currentTheme.text};
      text-decoration: none;
    }
    .card-link:hover {
      text-decoration: underline;
    }

    /* Quote Block */
    .block-quote {
      border-left: 2px solid ${currentTheme.text};
      padding-left: 18px;
      margin: 8px 0;
    }
    .quote-text {
      font-size: 15.5px;
      font-style: italic;
      color: ${currentTheme.text};
      line-height: 1.6;
    }
    .quote-footer {
      margin-top: 8px;
      font-size: 12.5px;
      color: ${currentTheme.muted};
    }
    .quote-author {
      font-weight: 500;
      color: ${currentTheme.text};
    }

    /* FAQ Block */
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .faq-item {
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 8px;
      overflow: hidden;
    }
    .faq-question {
      padding: 14px 16px;
      font-size: 13.5px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
    }
    .faq-question::-webkit-details-marker {
      display: none;
    }
    .faq-chevron {
      color: ${currentTheme.muted};
      font-family: monospace;
      font-size: 16px;
      transition: transform 0.2s ease;
    }
    .faq-item[open] .faq-chevron {
      transform: rotate(45deg);
    }
    .faq-answer {
      padding: 0 16px 14px 16px;
      font-size: 13px;
      color: ${currentTheme.muted};
      line-height: 1.6;
    }

    /* Social Block */
    .social-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .social-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: ${currentTheme.cardBg};
      border: 1px solid ${currentTheme.cardBorder};
      border-radius: 9999px;
      text-decoration: none;
      color: ${currentTheme.text};
      font-size: 12px;
      font-weight: 500;
      transition: all 0.15s ease;
    }
    .social-pill:hover {
      background: ${currentTheme.linkHover};
      border-color: ${currentTheme.border};
      transform: translateY(-1px);
    }

    /* Dividers */
    .block-divider-line {
      border: 0;
      height: 1px;
      background: ${currentTheme.border};
      margin: 4px 0;
    }
    .block-divider-dots {
      text-align: center;
      color: ${currentTheme.muted};
      letter-spacing: 0.4em;
      font-size: 11px;
      opacity: 0.6;
    }

    /* Custom Popup Modal Inside Site */
    .site-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(2px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .site-modal-box {
      background: #ffffff;
      color: #171717;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      max-width: 400px;
      width: 100%;
      padding: 24px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      animation: modalPop 0.18s ease-out;
    }
    @keyframes modalPop {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .site-modal-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .site-modal-content {
      font-size: 13.5px;
      color: #52525b;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .site-modal-close-btn {
      width: 100%;
      padding: 10px;
      background: #18181b;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <main class="site-container">
    ${renderedBlocks}
  </main>

  <!-- Interactive Modal Container -->
  <div id="siteModal" class="site-modal-overlay" onclick="closeCustomModal()">
    <div class="site-modal-box" onclick="event.stopPropagation()">
      <h3 id="modalTitleEl" class="site-modal-title"></h3>
      <p id="modalContentEl" class="site-modal-content"></p>
      <button class="site-modal-close-btn" onclick="closeCustomModal()">Done</button>
    </div>
  </div>

  <canvas id="confettiCanvas" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;"></canvas>

  <script>
    // Button Interactive Copy
    function copyBtnText(btn, encodedText) {
      const text = decodeURIComponent(encodedText);
      navigator.clipboard.writeText(text);
      const textSpan = btn.querySelector('.btn-text') || btn;
      const original = textSpan.innerText;
      textSpan.innerText = 'Copied to Clipboard!';
      setTimeout(() => { textSpan.innerText = original; }, 2000);
    }

    // Button Interactive Modal
    function showCustomModal(encodedTitle, encodedContent) {
      document.getElementById('modalTitleEl').innerText = decodeURIComponent(encodedTitle);
      document.getElementById('modalContentEl').innerText = decodeURIComponent(encodedContent);
      const modal = document.getElementById('siteModal');
      modal.style.display = 'flex';
    }
    function closeCustomModal() {
      document.getElementById('siteModal').style.display = 'none';
    }

    // Celebration Particle Burst
    function triggerConfetti() {
      const canvas = document.getElementById('confettiCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particles = [];
      const colors = ['#18181b', '#71717a', '#a1a1aa', '#e4e4e7', '#27272a'];
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.7) * 14,
          size: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1
        });
      }
      
      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.3; // gravity
          p.alpha -= 0.015;
          if (p.alpha > 0) {
            active++;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.fillRect(p.x, p.y, p.size, p.size);
          }
        });
        if (active > 0) requestAnimationFrame(render);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      render();
    }

    // Before / After Slider Interaction
    function updateBa(e, container) {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let pos = (clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(1, pos));
      const percentage = (pos * 100) + '%';
      
      const overlay = container.querySelector('.ba-overlay');
      const handle = container.querySelector('.ba-handle');
      if (overlay && handle) {
        overlay.style.width = percentage;
        handle.style.left = percentage;
        overlay.style.setProperty('--container-width', rect.width + 'px');
      }
    }

    window.addEventListener('resize', () => {
      document.querySelectorAll('.ba-container').forEach(c => {
        const rect = c.getBoundingClientRect();
        c.querySelector('.ba-overlay')?.style.setProperty('--container-width', rect.width + 'px');
      });
    });
    setTimeout(() => {
      document.querySelectorAll('.ba-container').forEach(c => {
        const rect = c.getBoundingClientRect();
        c.querySelector('.ba-overlay')?.style.setProperty('--container-width', rect.width + 'px');
      });
    }, 100);

    // Real-Time Countdown Timers
    function updateCountdowns() {
      document.querySelectorAll('.block-countdown').forEach(block => {
        const targetStr = block.getAttribute('data-target');
        if (!targetStr) return;
        const target = new Date(targetStr).getTime();
        const now = new Date().getTime();
        const diff = target - now;

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((diff % (1000 * 60)) / 1000);

          const daysEl = block.querySelector('.cd-days');
          const hoursEl = block.querySelector('.cd-hours');
          const minsEl = block.querySelector('.cd-mins');
          const secsEl = block.querySelector('.cd-secs');

          if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
          if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
          if (minsEl) minsEl.innerText = String(mins).padStart(2, '0');
          if (secsEl) secsEl.innerText = String(secs).padStart(2, '0');
        }
      });
    }
    setInterval(updateCountdowns, 1000);
    updateCountdowns();
  </script>
</body>
</html>`;
};
