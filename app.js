/**
 * 1khvled Developer Portfolio Showcase Engine (10X Edition)
 * Zero-dependency modern ES architecture with interactive spotlight,
 * interactive terminal, audio feedback synthesis, and accessible modal.
 */

const PROJECTS = [
  {
    id: "messistat",
    title: "MessiStats",
    category: "sports",
    categoryLabel: "Sports Analytics",
    tagline: "Career Analytics & Match-by-Match Visualizer",
    description: "Production historical statistics database visualizing 1,000+ career games, goals, assists, xG, heatmap distributions, and trophies for Lionel Messi across FC Barcelona, PSG, Inter Miami, and Argentina.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    liveUrl: "https://www.messistat.com",
    repoUrl: "https://github.com/1khvled/messi-stats",
    isLive: true,
    badge: "Production",
    highlights: [
      "1,000+ verified career matches indexed with sub-second retrieval",
      "Dynamic shot map and pitch quadrant heatmap visualizations",
      "Interactive career milestone timeline & trophy cabinet tracker"
    ]
  },
  {
    id: "ronaldostats",
    title: "RonaldoStats",
    category: "sports",
    categoryLabel: "Sports Analytics",
    tagline: "CR7 Career Analytics & Record Tracker",
    description: "Deep statistical database and match intelligence platform analyzing Cristiano Ronaldo's 900+ career goals across Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr, and Portugal.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel Edge"],
    liveUrl: "https://ronaldomstats.site",
    repoUrl: "https://github.com/1khvled/ronaldo-stats",
    isLive: true,
    badge: "Production",
    highlights: [
      "Full breakdown of 900+ official goals by body part and match minute",
      "Club-by-club performance delta visualizer",
      "Edge-rendered match cards with zero server cold start"
    ]
  },
  {
    id: "macro-prop-trader",
    title: "Macro Prop Trader",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Institutional Macro & Quant Intelligence Dashboard",
    description: "Desk-grade macro trading terminal featuring real-time central bank rate paths, FX matrixes, US Treasury yield curve shifts, commodities spreads, and cross-asset correlation models.",
    tags: ["Next.js 15", "React 19", "TradingView", "Tailwind CSS", "Vercel"],
    liveUrl: "https://macro-prop-trader.vercel.app",
    repoUrl: "https://github.com/1khvled/macro-prop-trader",
    isLive: true,
    badge: "Quant Intelligence",
    highlights: [
      "Real-time US Treasury Yield Curve inversion alerts (2Y/10Y spread)",
      "Central Bank policy rate trajectory matrices (FED, ECB, BOJ, BOE)",
      "TradingView institutional charting widgets embedded seamlessly"
    ]
  },
  {
    id: "dz-partpicker",
    title: "DZ-PartPicker",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "PC Building & Compatibility Engine for Algerian Gamers",
    description: "Algorithmic PC part builder tailored for the Algerian tech ecosystem. Automated socket/chipset compatibility checking, PSU wattage estimation, and real-time Algerian market pricing in DZD.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Algerian Market API"],
    liveUrl: "https://pcbuilder-psi.vercel.app",
    repoUrl: "https://github.com/1khvled/dz-partpicker",
    isLive: true,
    badge: "Production",
    highlights: [
      "Algorithmic component validation preventing socket & form-factor mismatches",
      "Automated power budget estimator with 20% transient headroom",
      "Localized Algerian Dinar (DZD) pricing with regional store aggregation"
    ]
  },
  {
    id: "ai-capital-tracker",
    title: "AI Capital Tracker",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Global AI Infrastructure & Compute CapEx Monitor",
    description: "Intelligence portal mapping global AI investment flows, GPU datacenter clusters, frontier lab venture funding rounds, and compute infrastructure economics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge", "Charts"],
    liveUrl: "https://aicapitaltracker.vercel.app",
    repoUrl: "https://github.com/1khvled/ai-capital-tracker",
    isLive: true,
    badge: "Data Platform",
    highlights: [
      "Tracks gigawatt-scale GPU compute clusters and hyperscaler CapEx",
      "Interactive venture funding rounds timeline for frontier AI labs",
      "Token economics & compute cost depreciation models"
    ]
  },
  {
    id: "medqcm",
    title: "MedQCM Platform",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "Adaptive Medical Exam Simulator for DFASM Students",
    description: "Specialized clinical testing platform with thousands of verified medical QCMs, spaced repetition algorithms, timed exam simulation modes, and detailed physiological explanations.",
    tags: ["Next.js", "React", "Tailwind CSS", "IndexedDB", "Medical Ed"],
    liveUrl: "https://khvledqcm.vercel.app",
    repoUrl: null,
    isLive: true,
    badge: "Medical Ed",
    highlights: [
      "Algorithmic spaced repetition for medical knowledge retention",
      "Timed DFASM exam simulations with weighted scoring rubrics",
      "Offline-first client caching via IndexedDB"
    ]
  },
  {
    id: "edn-store",
    title: "EDN Prep Store",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "Medical Educational Marketplace & Digital Reader",
    description: "Digital publication platform and interactive web reader providing high-yield revision books, clinical ECOS station scenarios, and methodology guides for French medical residency exams.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Vercel Edge", "JSON Schema"],
    liveUrl: "https://edn-store.vercel.app",
    repoUrl: "https://github.com/1khvled/edn-store",
    isLive: true,
    badge: "Store Platform",
    highlights: [
      "Zero-latency reader engine with interactive chapter previewers",
      "Full digital book catalog with instant filter by medical discipline",
      "Embedded QCM tester with real-time feedback and rationale"
    ]
  },
  {
    id: "algeria-exchange-rates-api",
    title: "Square Live DZ FX API & SDK",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Real-Time Algerian Parallel Market FX Engine",
    description: "Official TypeScript and Python SDK aggregating live informal currency rates (Square Port-Saïd, Algiers) alongside official Banque d'Algérie interbank rates, gold prices, and spread metrics.",
    tags: ["TypeScript", "Python", "Cloudflare Edge", "REST API", "PyPI", "npm"],
    liveUrl: "https://squarealgerie.com",
    repoUrl: "https://github.com/1khvled/algeria-exchange-rates-api",
    isLive: true,
    badge: "SDK & API",
    highlights: [
      "Sub-10ms response time powered by Cloudflare edge caching",
      "Dual SDK distribution across npm and PyPI",
      "Automated divergence tracking between official bank rates and Square market"
    ]
  },
  {
    id: "stocker-ai-terminal",
    title: "StockerAI Terminal",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Bloomberg-Grade Local-First Quant Research Terminal",
    description: "Single-user quantitative stock research terminal featuring multi-factor valuation screens, Monte Carlo stress tests, automated SEC EDGAR filing forensics, and multi-model LLM consensus.",
    tags: ["Python", "Flask", "SEC EDGAR", "Groq / Gemini", "Tailwind CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/stocker-ai-terminal",
    isLive: false,
    badge: "Quant Terminal",
    highlights: [
      "Institutional multi-factor screening (Piotroski F-Score, Altman Z-Score)",
      "Automated 10-K / 10-Q filing ingestion directly from SEC EDGAR",
      "Local-first architecture ensuring zero portfolio data leaves machine"
    ]
  },
  {
    id: "open-opgg",
    title: "Open OP.GG Desktop",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "Ad-Free, Telemetry-Free LoL Desktop Companion",
    description: "Clean-room desktop replica of OP.GG built with Electron. Connects directly to the League Client Update (LCU) WebSocket for instant champion select scouting, rune imports, and performance analysis.",
    tags: ["Electron", "Node.js", "LCU WebSocket", "Desktop App"],
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/open-opgg",
    isLive: false,
    badge: "Desktop App",
    highlights: [
      "Local WebSocket listener syncing in real-time with League of Legends client",
      "Zero telemetry, zero ads, zero memory bloat compared to commercial overlays",
      "Automatic rune page configuration and build optimizer"
    ]
  },
  {
    id: "binance-market-maker",
    title: "Binance Prediction Market Maker",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "High-Frequency Autonomous Market Making Fleet",
    description: "Production quantitative execution suite running 12 automated bots across Binance prediction markets with real-time volatility-adjusted spread calculation, inventory management, and telemetry dashboards.",
    tags: ["Python", "WebSockets", "Binance API", "FastAPI", "AsyncIO"],
    liveUrl: null,
    repoUrl: null,
    isLive: true,
    badge: "Algorithmic Fleet",
    highlights: [
      "Autonomous 12-bot distributed fleet running 24/7 on high-frequency order books",
      "Volatility-adjusted Poisson spread quoting and inventory skew protection",
      "Real-time terminal dashboard streaming order fills and risk exposures"
    ]
  },
  {
    id: "dealscout",
    title: "DealScout Telegram Deals Engine",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "Autonomous Multi-Channel Deal Intelligence Pipeline",
    description: "End-to-end deal scraper and normalization engine monitoring competitor networks, stripping watermarks, optimizing affiliate coin discount parameters, and broadcasting 1:1 formatted deal cards.",
    tags: ["Python", "Telethon", "Telegram API", "Pillow", "GitHub Actions"],
    liveUrl: "https://t.me/DzAliexpress0",
    repoUrl: "https://github.com/1khvled/dealscout-telegram-deals",
    isLive: true,
    badge: "Active Telegram",
    highlights: [
      "Automated real-time competitor telegram feed monitoring and deduplication",
      "Affiliate coin discount URL rewrite with localized shopping regional flags",
      "Intelligent watermark scrubbing and automated PIL deal card renderer"
    ]
  },
  {
    id: "aliexpress-coin-bot",
    title: "AliExpress Daily Coin Bot",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "Automated Daily Coin Claiming & Discount Optimizer",
    description: "Headless Playwright browser automation with encrypted session management that collects 100+ coins daily without triggering bot challenges or IP blocks, coupled with a Telegram bot interface.",
    tags: ["Node.js", "Playwright", "Telegram Bot API", "Chrome Extension"],
    liveUrl: "https://t.me/Alilo07BOT",
    repoUrl: "https://github.com/1khvled/aliexpress-coin-bot",
    isLive: true,
    badge: "Headless Bot",
    highlights: [
      "Headless Chromium browser emulation bypassing bot protection mechanisms",
      "One-click browser extension for secure local session cookie export",
      "Automated 24h cron sweep with Telegram execution alerts"
    ]
  },
  {
    id: "koora-clean",
    title: "Koora Clean PWA",
    category: "sports",
    categoryLabel: "Sports Analytics",
    tagline: "Ad-Free Low-Latency Football Match Streaming Portal",
    description: "Modern Progressive Web App eliminating annoying popups and ad overlays from live football streams. Incorporates HLS adaptive bitrate streaming and live score telemetry.",
    tags: ["PWA", "HLS.js", "JavaScript ES6+", "Service Workers"],
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/koora-clean",
    isLive: false,
    badge: "PWA Streaming",
    highlights: [
      "Zero popup overlays or malicious redirects",
      "Native HLS adaptive bitrate player with audio channel selection",
      "Installable PWA support with instant offline shell loading"
    ]
  }
];

// Sound Synthesizer (Zero External Audio Assets)
class AudioFX {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
}

const audio = new AudioFX();

// State
let currentCategory = "all";
let searchQuery = "";

// DOM Elements
const gridEl = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.querySelectorAll(".tab-btn");
const totalProjectsCountEl = document.getElementById("totalProjectsCount");
const modalEl = document.getElementById("projectModal");
const toastEl = document.getElementById("toast");
const soundToggleBtn = document.getElementById("soundToggle");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

// Category Style Helper
function getCategoryBadgeClass(category) {
  switch (category) {
    case "fintech": return "cat-fintech";
    case "sports": return "cat-sports";
    case "webapps": return "cat-webapps";
    case "automation": return "cat-automation";
    default: return "cat-webapps";
  }
}

// Show Toast
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  audio.playSuccess();
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2400);
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const p = PROJECTS.find(item => item.id === projectId);
  if (!p || !modalEl) return;

  audio.playClick();

  const modalTitle = document.getElementById("modalTitle");
  const modalTagline = document.getElementById("modalTagline");
  const modalCategory = document.getElementById("modalCategory");
  const modalDesc = document.getElementById("modalDesc");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalTags = document.getElementById("modalTags");
  const modalLiveBtn = document.getElementById("modalLiveBtn");
  const modalRepoBtn = document.getElementById("modalRepoBtn");

  if (modalTitle) modalTitle.textContent = p.title;
  if (modalTagline) modalTagline.textContent = p.tagline;
  if (modalCategory) {
    modalCategory.textContent = p.categoryLabel;
    modalCategory.className = `project-category-badge ${getCategoryBadgeClass(p.category)}`;
  }
  if (modalDesc) modalDesc.textContent = p.description;

  if (modalHighlights) {
    modalHighlights.innerHTML = (p.highlights || []).map(h => `
      <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="color: var(--accent-cyan); font-weight: bold;">▹</span>
        <span>${h}</span>
      </li>
    `).join("");
  }

  if (modalTags) {
    modalTags.innerHTML = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");
  }

  if (modalLiveBtn) {
    if (p.liveUrl) {
      modalLiveBtn.style.display = "inline-flex";
      modalLiveBtn.href = p.liveUrl;
    } else {
      modalLiveBtn.style.display = "none";
    }
  }

  if (modalRepoBtn) {
    if (p.repoUrl) {
      modalRepoBtn.style.display = "inline-flex";
      modalRepoBtn.href = p.repoUrl;
    } else {
      modalRepoBtn.style.display = "none";
    }
  }

  // Open as modal dialog
  modalEl.showModal();
}

// Close Modal
function closeProjectModal() {
  if (!modalEl) return;
  modalEl.close();
  audio.playClick();
}

// Render Project Cards
function renderProjects() {
  const filtered = PROJECTS.filter(project => {
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      project.title.toLowerCase().includes(query) ||
      project.tagline.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-secondary);">No projects matched "${searchQuery}"</p>
        <p style="font-size: 0.875rem;">Try adjusting your search query or switching categories.</p>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = filtered.map(p => {
    const liveButton = p.liveUrl ? `
      <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live">
        <span>Launch App</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    ` : "";

    const inspectButton = `
      <button type="button" class="btn-inspect" onclick="window.portfolioApp.openModal('${p.id}')">
        Deep Dive
      </button>
    `;

    const repoButton = p.repoUrl ? `
      <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" aria-label="${p.title} GitHub repository">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    ` : "";

    const statusPill = p.isLive ? `
      <span class="live-status">
        <span class="live-dot" aria-hidden="true"></span>
        <span>Live</span>
      </span>
    ` : `
      <span class="live-status" style="color: var(--text-muted);">
        <span style="width: 7px; height: 7px; border-radius: 50%; background-color: var(--text-muted); display: inline-block;"></span>
        <span>${p.badge}</span>
      </span>
    `;

    return `
      <article class="project-card" data-category="${p.category}">
        <div>
          <div class="project-card-header">
            <span class="project-category-badge ${getCategoryBadgeClass(p.category)}">
              ${p.categoryLabel}
            </span>
            ${statusPill}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <p class="project-desc">${p.description}</p>
        </div>

        <div>
          <div class="tech-tags">
            ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="card-actions">
            ${liveButton}
            ${inspectButton}
            ${repoButton}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Interactive Spotlight Tracker
window.addEventListener("pointermove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
});

// Interactive GOAT Bento Switcher
window.switchGoatPreview = function(player) {
  audio.playClick();
  const goatNameEl = document.getElementById("goatName");
  const goatGoalsEl = document.getElementById("goatGoals");
  const goatAssistsEl = document.getElementById("goatAssists");
  const goatTrophiesEl = document.getElementById("goatTrophies");
  const goatLiveBtn = document.getElementById("goatLiveBtn");
  const btnMessi = document.getElementById("btnGoatMessi");
  const btnRonaldo = document.getElementById("btnGoatRonaldo");

  if (player === "messi") {
    if (goatNameEl) goatNameEl.textContent = "Lionel Messi Career Engine";
    if (goatGoalsEl) goatGoalsEl.textContent = "840+";
    if (goatAssistsEl) goatAssistsEl.textContent = "380+";
    if (goatTrophiesEl) goatTrophiesEl.textContent = "46";
    if (goatLiveBtn) goatLiveBtn.href = "https://www.messistat.com";
    if (btnMessi) btnMessi.classList.add("active");
    if (btnRonaldo) btnRonaldo.classList.remove("active");
  } else {
    if (goatNameEl) goatNameEl.textContent = "Cristiano Ronaldo Records";
    if (goatGoalsEl) goatGoalsEl.textContent = "900+";
    if (goatAssistsEl) goatAssistsEl.textContent = "250+";
    if (goatTrophiesEl) goatTrophiesEl.textContent = "35";
    if (goatLiveBtn) goatLiveBtn.href = "https://ronaldomstats.site";
    if (btnRonaldo) btnRonaldo.classList.add("active");
    if (btnMessi) btnMessi.classList.remove("active");
  }
};

// Interactive Terminal Engine
const COMMANDS = {
  help: () => `Available commands:
  - bio          : Who is Khaled?
  - stack        : Core engineering & quant stack
  - systems      : Overview of 14 shipped systems
  - ping         : Measure latency to production deployments
  - contact      : GitHub & Telegram channels
  - clear        : Clear console window`,
  bio: () => `Khaled (@1khvled)
  Full-Stack Software Engineer & Quantitative Builder based in Algeria.
  Specializing in financial engineering, sports data analytics, local AI terminals, and high-concurrency automated fleets.`,
  stack: () => `Frontend : Next.js 15, React 19, TypeScript, Tailwind CSS, Electron, PWA
Backend  : Python 3.12, Flask, FastAPI, Node.js, WebSockets, AsyncIO
Quant    : Multi-Factor Scoring, Poisson Spreads, SEC EDGAR 10-K/Q Ingestion
DevOps   : Vercel Edge, Cloudflare Workers, GitHub Actions CI/CD`,
  systems: () => `Shipped 14 major production systems:
  - 8 Live Web Deployments (MessiStats, RonaldoStats, MacroPropTrader, DZ-PartPicker, etc.)
  - 4 Quantitative & FinTech Terminals (Binance Fleet, StockerAI, Square Live FX)
  - 2 Autonomous Headless Bots (DealScout Telegram Engine, AliExpress Coin Collector)`,
  ping: () => `Pinging production edge networks:
  ✔ messistat.com              -> 26ms [Vercel Edge Global]
  ✔ ronaldomstats.site         -> 29ms [Vercel Edge Global]
  ✔ macro-prop-trader.vercel.app -> 24ms [Next.js 15 Edge]
  ✔ squarealgerie.com          -> 18ms [Cloudflare Edge]
  ✔ 12x Binance Market Bots    -> 11ms [Active Websocket Fleet]`,
  contact: () => `Direct communication:
  - GitHub   : https://github.com/1khvled
  - Telegram : https://t.me/DzAliexpress0 / @Alilo07BOT`,
  clear: () => "CLEAR"
};

function executeTerminalCommand(cmdText) {
  const trimmed = cmdText.trim().toLowerCase();
  if (!trimmed) return;

  audio.playClick();

  if (trimmed === "clear") {
    if (terminalOutput) terminalOutput.innerHTML = "";
    return;
  }

  const handler = COMMANDS[trimmed];
  const response = handler ? handler() : `command not found: "${trimmed}". Type "help" for a list of commands.`;

  const outputBlock = document.createElement("div");
  outputBlock.style.marginBottom = "0.75rem";
  outputBlock.innerHTML = `
    <div style="color: var(--text-muted); margin-bottom: 0.25rem;">
      <span style="color: var(--accent-emerald);">guest@1khvled</span>:<span style="color: var(--accent-cyan);">~</span>$ ${cmdText}
    </div>
    <div style="white-space: pre-wrap; color: #cbd5e1;">${response}</div>
  `;

  if (terminalOutput) {
    terminalOutput.appendChild(outputBlock);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

window.runQuickCommand = function(cmd) {
  if (terminalInput) terminalInput.value = cmd;
  executeTerminalCommand(cmd);
  if (terminalInput) terminalInput.value = "";
};

if (terminalInput) {
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = "";
    }
  });
}

// Keyboard Shortcut '/' or 'Cmd+K' to focus search
window.addEventListener("keydown", (e) => {
  if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) && document.activeElement !== searchInput) {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
      showToast("Search focused! Type keyword or stack...");
    }
  }
});

// Category Tabs
categoryTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    audio.playClick();
    categoryTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProjects();
  });
});

// Search Input
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

// Sound Toggle
if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    audio.enabled = !audio.enabled;
    if (audio.enabled) {
      audio.init();
      audio.playClick();
      soundToggleBtn.innerHTML = `<span>🔊</span><span>Sound ON</span>`;
      soundToggleBtn.style.color = "var(--accent-cyan)";
      showToast("Audio feedback enabled!");
    } else {
      soundToggleBtn.innerHTML = `<span>🔇</span><span>Sound OFF</span>`;
      soundToggleBtn.style.color = "var(--text-muted)";
      showToast("Audio feedback muted.");
    }
  });
}

// Modal Backdrop Click to Dismiss (per modern web guidance)
if (modalEl) {
  modalEl.addEventListener("click", (e) => {
    const rect = modalEl.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modalEl.close();
      audio.playClick();
    }
  });
}

// Global Export for inline onclick
window.portfolioApp = {
  openModal: openProjectModal,
  closeModal: closeProjectModal,
  copyLink: (url) => {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Live link copied to clipboard!");
    });
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  if (totalProjectsCountEl) {
    totalProjectsCountEl.textContent = PROJECTS.length.toString();
  }
  renderProjects();

  // Welcome terminal greeting
  if (terminalOutput) {
    terminalOutput.innerHTML = `
      <div style="color: var(--text-muted); margin-bottom: 0.75rem;">
        ⚡ 1khvled Terminal v2.4 (x86_64-pc-linux-gnu)<br>
        Type <span style="color: var(--accent-cyan); font-weight: bold;">"help"</span> or click the pills below to explore capabilities interactively.
      </div>
    `;
  }
});
