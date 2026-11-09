/**
 * 1khvled Developer Portfolio Showcase Engine
 * High-performance, zero-dependency client-side architecture.
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
    badge: "Production"
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
    badge: "Production"
  },
  {
    id: "macro-prop-trader",
    title: "Macro Prop Trader",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Institutional Macro & Quant Intelligence Dashboard",
    description: "Desk-grade macro trading terminal featuring real-time central bank rate paths, FX matrixes, US Treasury yield curve shifts, commodities spreads, and cross-asset correlation models.",
    tags: ["Next.js 15", "React 19", "TradingView Widgets", "Tailwind CSS"],
    liveUrl: "https://macro-prop-trader.vercel.app",
    repoUrl: "https://github.com/1khvled/macro-prop-trader",
    isLive: true,
    badge: "Quant Intelligence"
  },
  {
    id: "dz-partpicker",
    title: "DZ-PartPicker",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "PC Building & Compatibility Engine for Algerian Gamers",
    description: "Algorithmic PC part builder tailored for the Algerian tech ecosystem. Automated socket/chipset compatibility checking, PSU wattage estimation, and real-time Algerian market pricing in DZD.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DZ Market Pricing"],
    liveUrl: "https://pcbuilder-psi.vercel.app",
    repoUrl: "https://github.com/1khvled/dz-partpicker",
    isLive: true,
    badge: "Production"
  },
  {
    id: "ai-capital-tracker",
    title: "AI Capital Tracker",
    category: "fintech",
    categoryLabel: "FinTech & Quant",
    tagline: "Global AI Infrastructure & Compute CapEx Monitor",
    description: "Intelligence portal mapping global AI investment flows, GPU datacenter clusters, frontier lab venture funding rounds, and compute infrastructure economics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge"],
    liveUrl: "https://aicapitaltracker.vercel.app",
    repoUrl: "https://github.com/1khvled/ai-capital-tracker",
    isLive: true,
    badge: "Data Platform"
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
    badge: "Medical Ed"
  },
  {
    id: "edn-store",
    title: "EDN Prep Store",
    category: "webapps",
    categoryLabel: "Web Platform",
    tagline: "Medical Educational Marketplace & Digital Reader",
    description: "Digital publication platform and interactive web reader providing high-yield revision books, clinical ECOS station scenarios, and methodology guides for French medical residency exams.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Vercel Edge"],
    liveUrl: "https://edn-store.vercel.app",
    repoUrl: "https://github.com/1khvled/edn-store",
    isLive: true,
    badge: "Store Platform"
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
    badge: "SDK & API"
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
    badge: "Quant Terminal"
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
    badge: "Desktop App"
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
    badge: "Algorithmic Fleet"
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
    badge: "Active Telegram"
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
    badge: "Headless Bot"
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
    badge: "PWA Streaming"
  }
];

// State
let currentCategory = "all";
let searchQuery = "";

// DOM Elements
const gridEl = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.querySelectorAll(".tab-btn");
const totalProjectsCountEl = document.getElementById("totalProjectsCount");

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
        <p style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-secondary);">No projects found</p>
        <p style="font-size: 0.875rem;">Try adjusting your search query or switching category tabs.</p>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = filtered.map(p => {
    const liveButton = p.liveUrl ? `
      <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live">
        <span>Visit Live</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    ` : "";

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
            ${repoButton}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Event Listeners
categoryTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProjects();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  if (totalProjectsCountEl) {
    totalProjectsCountEl.textContent = PROJECTS.length.toString();
  }
  renderProjects();
});
