export const TEMPLATES = [
  {
    id: 'empty',
    name: 'Blank Canvas',
    description: 'Empty canvas ready for your HTML, CSS, and JavaScript',
    title: 'Untitled Canvas',
    html: `<!-- Minimal Canvas -->
<main class="container">
  <h1>Minimal Workspace</h1>
  <p>Start writing HTML, CSS, and JavaScript to build your site.</p>
</main>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #ffffff;
  color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 24px;
}

.container {
  max-width: 540px;
  width: 100%;
}

h1 {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

p {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.5;
}`,
    js: `// Add custom interactivity here
console.log("Canvas ready.");`
  },
  {
    id: 'bio-card',
    name: 'Minimal Profile',
    description: 'Refined personal card with clean links and social handles',
    title: 'Personal Profile',
    html: `<main class="card">
  <div class="header">
    <div class="avatar">A</div>
    <div class="info">
      <h1>Alex Rivera</h1>
      <p class="role">Software Designer & Writer</p>
    </div>
  </div>

  <p class="bio">
    Crafting quiet software and deliberate design systems. Focused on typography, performance, and simplicity.
  </p>

  <nav class="links">
    <a href="#projects" class="link-item">
      <span>Selected Work</span>
      <span class="arrow">/</span>
    </a>
    <a href="#essays" class="link-item">
      <span>Essays & Notes</span>
      <span class="arrow">/</span>
    </a>
    <a href="#about" class="link-item">
      <span>Colophon & Setup</span>
      <span class="arrow">/</span>
    </a>
    <a href="mailto:hello@example.com" class="link-item">
      <span>Get in Touch</span>
      <span class="arrow">/</span>
    </a>
  </nav>

  <footer>
    <span>Based in Kyoto & Berlin</span>
    <span class="status">Available for Q4</span>
  </footer>
</main>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #fafafa;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 32px 16px;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 36px;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f4f4f5;
  color: #18181b;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 1px solid #e4e4e7;
}

h1 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.role {
  font-size: 13px;
  color: #71717a;
  margin-top: 2px;
}

.bio {
  font-size: 14px;
  line-height: 1.6;
  color: #52525b;
  margin-bottom: 28px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.link-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: #fafafa;
  border: 1px solid #f4f4f5;
  color: #27272a;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  transition: all 0.15s ease;
}

.link-item:hover {
  background: #f4f4f5;
  border-color: #e4e4e7;
  transform: translateY(-1px);
}

.arrow {
  color: #a1a1aa;
  font-family: monospace;
}

footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #a1a1aa;
  padding-top: 16px;
  border-top: 1px solid #f4f4f5;
}

.status {
  color: #52525b;
}`,
    js: `document.querySelectorAll('.link-item').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Navigated to: ' + link.querySelector('span').innerText);
  });
});`
  },
  {
    id: 'portfolio',
    name: 'Monospace Projects',
    description: 'Clean structured index of projects and writings with monospace aesthetics',
    title: 'Index of Work',
    html: `<div class="layout">
  <header>
    <div class="logo">01 / INDEX</div>
    <div class="meta">UPDATED 2026</div>
  </header>

  <section class="intro">
    <p>Selected architectural projects, computational tools, and open-source experiments.</p>
  </section>

  <section class="table-wrap">
    <div class="row header-row">
      <span class="col-year">YEAR</span>
      <span class="col-title">PROJECT</span>
      <span class="col-tag">CATEGORY</span>
      <span class="col-action">LINK</span>
    </div>

    <div class="row">
      <span class="col-year">2026</span>
      <span class="col-title">Atelier Graph</span>
      <span class="col-tag">WebGL Tool</span>
      <a href="#" class="col-action">View &rarr;</a>
    </div>

    <div class="row">
      <span class="col-year">2025</span>
      <span class="col-title">Vector Font Engine</span>
      <span class="col-tag">Typography</span>
      <a href="#" class="col-action">View &rarr;</a>
    </div>

    <div class="row">
      <span class="col-year">2025</span>
      <span class="col-title">Kuro Minimal Theme</span>
      <span class="col-tag">Interface</span>
      <a href="#" class="col-action">View &rarr;</a>
    </div>

    <div class="row">
      <span class="col-year">2024</span>
      <span class="col-title">Solar Coordinates</span>
      <span class="col-tag">Data Visual</span>
      <a href="#" class="col-action">View &rarr;</a>
    </div>
  </section>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "JetBrains Mono", SFMono-Regular, Consolas, monospace;
  background: #fdfdfd;
  color: #111111;
  padding: 48px 24px;
  line-height: 1.5;
  font-size: 13px;
}

.layout {
  max-width: 680px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #111111;
  padding-bottom: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.intro {
  margin: 32px 0 40px 0;
  color: #444444;
  font-size: 14px;
}

.table-wrap {
  display: flex;
  flex-direction: column;
}

.row {
  display: grid;
  grid-template-columns: 80px 1fr 140px 80px;
  padding: 14px 0;
  border-bottom: 1px solid #eeeeee;
  align-items: center;
  transition: background 0.15s ease;
}

.row:hover:not(.header-row) {
  background: #f7f7f7;
  padding-left: 8px;
  padding-right: 8px;
}

.header-row {
  font-size: 11px;
  color: #888888;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 8px;
}

.col-year {
  color: #777777;
}

.col-title {
  font-weight: 500;
}

.col-tag {
  color: #666666;
}

.col-action {
  color: #111111;
  text-decoration: none;
  font-weight: 500;
}

.col-action:hover {
  text-decoration: underline;
}`,
    js: `console.log("Monospace Index initialized");`
  },
  {
    id: 'particle-canvas',
    name: 'Interactive Canvas',
    description: 'Subtle generative dot matrix with gentle cursor attraction',
    title: 'Generative Canvas',
    html: `<div class="container">
  <canvas id="stage"></canvas>
  <div class="overlay">
    <h2>Interactive Field</h2>
    <p>Move your cursor to perturb the node grid</p>
  </div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fbfbfb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  bottom: 40px;
  left: 40px;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

h2 {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 4px;
}

p {
  font-size: 13px;
  color: #737373;
}`,
    js: `const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');

let width, height;
let dots = [];
let mouse = { x: -1000, y: -1000 };

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  initDots();
}

function initDots() {
  dots = [];
  const spacing = 36;
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      dots.push({
        baseX: x,
        baseY: y,
        x: x,
        y: y,
        vx: 0,
        vy: 0
      });
    }
  }
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener('mouseleave', () => {
  mouse.x = -1000;
  mouse.y = -1000;
});

resize();

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    const dx = mouse.x - dot.x;
    const dy = mouse.y - dot.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < 100) {
      const force = (100 - dist) / 100;
      dot.vx -= (dx / dist) * force * 1.5;
      dot.vy -= (dy / dist) * force * 1.5;
    }

    // Spring back
    dot.vx += (dot.baseX - dot.x) * 0.08;
    dot.vy += (dot.baseY - dot.y) * 0.08;
    dot.vx *= 0.85;
    dot.vy *= 0.85;

    dot.x += dot.vx;
    dot.y += dot.vy;

    ctx.fillStyle = '#b0b0b8';
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();`
  },
  {
    id: 'editorial',
    name: 'Editorial Essay',
    description: 'Clean typographic layout optimized for longform reading',
    title: 'On Quiet Software',
    html: `<article class="content">
  <header>
    <div class="tag">ESSAY / NO. 14</div>
    <h1>The Case for Quiet Software</h1>
    <div class="byline">August 2026 &mdash; 4 min read</div>
  </header>

  <p class="lead">
    Modern digital interfaces have become saturated with notifications, badges, and attention traps. A counter-movement embraces deliberate restraint.
  </p>

  <p>
    When software operates quietly, it respects the user's cognitive bandwidth. It acts as an instrument rather than an amusement park. The tools we rely on daily should disappear into the background, leaving only the task at hand.
  </p>

  <blockquote>
    "Simplicity is not the lack of clutter, that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object."
  </blockquote>

  <p>
    By reducing decorative excess and focusing on typographical hierarchy, generous margins, and predictable workflows, we build environments where creative work can flourish.
  </p>

  <div class="divider"></div>

  <footer>
    <a href="#" class="back-link">&larr; Return to Overview</a>
  </footer>
</article>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Georgia", serif;
  background: #fafaf9;
  color: #292524;
  line-height: 1.8;
  padding: 60px 20px;
}

.content {
  max-width: 580px;
  margin: 0 auto;
}

header {
  margin-bottom: 40px;
}

.tag {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #78716c;
  margin-bottom: 12px;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1c1917;
  margin-bottom: 12px;
}

.byline {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  color: #a8a29e;
}

.lead {
  font-size: 18px;
  color: #44403c;
  margin-bottom: 24px;
  line-height: 1.6;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #292524;
}

blockquote {
  margin: 32px 0;
  padding-left: 20px;
  border-left: 2px solid #1c1917;
  font-style: italic;
  color: #57534e;
}

.divider {
  height: 1px;
  background: #e7e5e4;
  margin: 48px 0 24px 0;
}

.back-link {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  color: #78716c;
  text-decoration: none;
}

.back-link:hover {
  color: #1c1917;
}`,
    js: `console.log("Editorial template loaded");`
  }
];
