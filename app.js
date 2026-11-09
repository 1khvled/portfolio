/**
 * 1KHVLED // SYSTEMS SPECIFICATION & INTERFACE ENGINE
 * Architectural Brutalism × Quantitative Instrument
 * 100% Solid Surfaces, Tabular Numbers, Zero Blur.
 */

const SYSTEMS_REGISTRY = [
  {
    sysId: "SYS-01",
    id: "messistat",
    name: "MessiStats",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "Career Match-by-Match Telemetry & Shot Visualizer",
    summary: "Production historical statistics database visualizing 1,000+ career fixtures, expected goals (xG), pitch quadrant heatmaps, and milestone trajectories with sub-second retrieval.",
    specs: [
      { label: "CORE STACK", val: "Next.js 15 / TS / Recharts" },
      { label: "DATA INDEX", val: "1,048 Verified Fixtures" },
      { label: "EDGE CACHE", val: "stale-while-revalidate 300s" }
    ],
    artifact: {
      type: "SCHEMA",
      lines: [
        { key: "MATCH_INDEX_QUERY", val: "SELECT id, xG, shot_zone, assist_type" },
        { key: "QUADRANT_RESOLUTION", val: "18-zone pitch coordinate array" },
        { key: "LATENCY_P99", val: "18.4ms (Vercel Global Edge)" }
      ]
    },
    metric: "1,048 Matches Indexed",
    liveUrl: "https://www.messistat.com",
    repoUrl: "https://github.com/1khvled/messi-stats",
    status: "LIVE DEMO",
    archSpec: {
      domain: "High-Density Sports Data Intelligence",
      architecture: "Static Site Generation (SSG) with incremental Edge revalidation. All match events, coordinates, and historical metadata are compiled into optimized binary JSON payloads loaded via deterministic chunk routing.",
      mathModel: "xG shot location weighting using logistic regression over distance-to-goal vector d and visible angle theta: P(Goal) = 1 / (1 + e^-(beta_0 + beta_1*d + beta_2*theta)).",
      keyTradeoffs: "Pre-indexed match telemetry in client-side memory rather than making runtime SQL joins for each shot chart, eliminating all server round-trips during quadrant filtering."
    }
  },
  {
    sysId: "SYS-02",
    id: "ronaldostats",
    name: "RonaldoStats",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "CR7 Career Analytics & Record Tracker",
    summary: "Deep statistical database and match intelligence platform analyzing Cristiano Ronaldo's 900+ career goals across Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr, and Portugal.",
    specs: [
      { label: "CORE STACK", val: "Next.js 15 / Tailwind / Vercel" },
      { label: "SCORING VOL", val: "900+ Official Career Goals" },
      { label: "HYDRATION", val: "Zero-CLS Edge Render" }
    ],
    artifact: {
      type: "TELEMETRY",
      lines: [
        { key: "GOAL_BODY_PARTS", val: "Right 574 | Left 174 | Head 153" },
        { key: "MINUTE_CLUSTERS", val: "Highest density: 75'-90' (23%)" },
        { key: "COMP_BREAKDOWN", val: "UCL: 140 | LaLiga: 311 | EPL: 103" }
      ]
    },
    metric: "900+ Goals Analyzed",
    liveUrl: "https://ronaldomstats.site",
    repoUrl: "https://github.com/1khvled/ronaldo-stats",
    status: "LIVE DEMO",
    archSpec: {
      domain: "Career Historical Analytics & Comparative Modeling",
      architecture: "Edge-cached dynamic route handlers with deterministic memory caching. High-speed tabular displays with synchronized match minute histograms.",
      mathModel: "Cumulative goal velocity G_v(t) = dG/dt evaluated across 20-year rolling career windows with opposition league coefficient adjustments.",
      keyTradeoffs: "Directly embedded SVG histogram paths rather than heavy canvas chart dependencies, minimizing bundle payload to under 45KB initial JS."
    }
  },
  {
    sysId: "SYS-03",
    id: "macro-prop-trader",
    name: "Macro Prop Trader",
    category: "quant",
    categoryLabel: "Quant Engine",
    badgeCat: "cat-quant",
    tagline: "Institutional Macro & Cross-Asset Intelligence",
    summary: "Desk-grade macro trading terminal featuring central bank policy rate trajectories, US Treasury yield curve shifts (2Y/10Y inversion models), and cross-asset correlation matrices.",
    specs: [
      { label: "CORE STACK", val: "Next.js 15 / React 19 / TradingView" },
      { label: "SPREAD MODEL", val: "US Treasury 2Y/10Y Inversion" },
      { label: "POLICY REPO", val: "FED / ECB / BOJ / BOE Matrix" }
    ],
    artifact: {
      type: "TICKER_LEDGER",
      lines: [
        { key: "US10Y_US02Y_SPREAD", val: "+0.14 bps (Normalizing Curve)" },
        { key: "FED_TERMINAL_RATE", val: "4.25% - 4.50% (Implied FedWatch)" },
        { key: "EURUSD_PARITY_BIAS", val: "Delta Hedge Spread: -42 pips" }
      ]
    },
    metric: "Yield Curve Diagnostics",
    liveUrl: "https://macro-prop-trader.vercel.app",
    repoUrl: "https://github.com/1khvled/macro-prop-trader",
    status: "LIVE DEMO",
    archSpec: {
      domain: "Quantitative Fixed Income & Macro Correlation",
      architecture: "Hybrid server/client reactive execution. Yield curve spline interpolation rendered on Edge runtime, with embedded institutional TradingView lightweight charting widgets.",
      mathModel: "Nelson-Siegel-Svensson yield curve model: y(m) = beta_0 + beta_1*(1-e^(-m/tau_1))/(m/tau_1) + beta_2*((1-e^(-m/tau_1))/(m/tau_1) - e^(-m/tau_1)) + ...",
      keyTradeoffs: "Tabular Bloomberg-style density prioritized over consumer spacing, presenting 48 financial telemetry fields on a single 1080p viewport."
    }
  },
  {
    sysId: "SYS-04",
    id: "stocker-ai-terminal",
    name: "StockerAI Terminal",
    category: "quant",
    categoryLabel: "Quant Engine",
    badgeCat: "cat-quant",
    tagline: "Bloomberg-Grade Local-First Quant Terminal",
    summary: "Single-user quantitative stock research terminal featuring multi-factor valuation screens, Monte Carlo stress tests, automated SEC EDGAR filing forensics, and multi-model LLM consensus.",
    specs: [
      { label: "CORE STACK", val: "Python 3.12 / Flask / SEC EDGAR" },
      { label: "FORENSICS", val: "Piotroski F & Altman Z-Score" },
      { label: "LOCAL FIRST", val: "100% On-Machine Execution" }
    ],
    artifact: {
      type: "EXECUTION_TRACE",
      lines: [
        { key: "SEC_INGEST_10K", val: "Parsed Balance Sheet + Cash Flows" },
        { key: "ALTMAN_Z_SCORE", val: "3.84 (Safe Zone / Non-Distressed)" },
        { key: "MONTE_CARLO_RUN", val: "10,000 FCF Simulations / 95% VaR" }
      ]
    },
    metric: "Local-First Forensics",
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/stocker-ai-terminal",
    status: "REPO + SPEC",
    archSpec: {
      domain: "Fundamental Forensics & Quantitative Equity Screening",
      architecture: "Local Flask Python backend serving a dense, high-frequency web UI. SEC EDGAR XBRL parser automatically pulls raw 10-K/10-Q statements and computes forensic health indices.",
      mathModel: "Altman Z-Score calculation for public manufacturers: Z = 1.2*X_1 + 1.4*X_2 + 3.3*X_3 + 0.6*X_4 + 0.999*X_5, coupled with Piotroski 9-point binary scoring.",
      keyTradeoffs: "Local-first storage (SQLite/JSON) guarantees absolute privacy for watchlists, proprietary weight matrices, and API credentials without remote database dependencies."
    }
  },
  {
    sysId: "SYS-05",
    id: "dz-partpicker",
    name: "DZ-PartPicker",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "PC Hardware Compatibility & Algerian DZD Market Engine",
    summary: "Algorithmic PC builder for the Algerian ecosystem. Automated motherboard socket matching, PSU wattage budgeting with 20% headroom, and real-time localized market pricing in DZD.",
    specs: [
      { label: "CORE STACK", val: "Next.js / TypeScript / Tailwind" },
      { label: "LOGIC", val: "Form-Factor & TDP Compatibility" },
      { label: "CURRENCY", val: "Algerian Dinar (DZD) Dynamic" }
    ],
    artifact: {
      type: "VALIDATION_RULES",
      lines: [
        { key: "SOCKET_GUARD", val: "LGA1700 / AM5 strict pin validation" },
        { key: "POWER_ENVELOPE", val: "GPU TGP + CPU TDP + 20% headroom" },
        { key: "PRICING_AGGREGATOR", val: "Live DZD retail store quotations" }
      ]
    },
    metric: "Deterministic Compatibility",
    liveUrl: "https://pcbuilder-psi.vercel.app",
    repoUrl: "https://github.com/1khvled/dz-partpicker",
    status: "LIVE DEMO",
    archSpec: {
      domain: "Deterministic Hardware Compatibility & Localized E-Commerce",
      architecture: "Client-side graph validation checking component compatibility constraints in O(1) time across 12 hardware categories.",
      mathModel: "Wattage requirement envelope: W_req = (P_CPU + P_GPU + sum(P_periph)) * 1.25, ensuring capacitor aging and transient spike tolerance.",
      keyTradeoffs: "All compatibility rule trees execute in pure TypeScript memory on the client, avoiding network latency during interactive build assembly."
    }
  },
  {
    sysId: "SYS-06",
    id: "algeria-exchange-rates-api",
    name: "Square Live DZ FX API & SDK",
    category: "quant",
    categoryLabel: "Quant Engine",
    badgeCat: "cat-quant",
    tagline: "Real-Time Parallel Market FX & Interbank Divergence SDK",
    summary: "Official TypeScript and Python SDK aggregating live informal currency rates (Square Port-Saïd, Algiers) alongside official Banque d'Algérie rates, gold bullion prices, and divergence metrics.",
    specs: [
      { label: "PACKAGES", val: "npm (TS) & PyPI (Python 3.8+)" },
      { label: "EDGE CACHE", val: "Cloudflare 60s TTL / CORS" },
      { label: "METRICS", val: "Official vs Parallel Spread Gap" }
    ],
    artifact: {
      type: "API_PAYLOAD",
      lines: [
        { key: "PARALLEL_EUR_DZD", val: "Buy: 254.00 DA | Sell: 256.50 DA" },
        { key: "OFFICIAL_EUR_DZD", val: "Buy: 142.10 DA | Sell: 142.15 DA" },
        { key: "DIVERGENCE_SPREAD", val: "+80.44% (Parallel Market Premium)" }
      ]
    },
    metric: "Dual SDK + Edge API",
    liveUrl: "https://squarealgerie.com",
    repoUrl: "https://github.com/1khvled/algeria-exchange-rates-api",
    status: "LIVE DEMO",
    archSpec: {
      domain: "Foreign Exchange Telemetry & Market Structure",
      architecture: "High-availability edge API built on Cloudflare Workers. Real-time rate feeds are validated against multi-source quotations with automated outlier rejection.",
      mathModel: "Spread Divergence Gap: Delta_s = ((P_parallel - P_official) / P_official) * 100, tracking macroeconomic currency premiums in real-time.",
      keyTradeoffs: "Dual distribution across npm and PyPI with zero external runtime dependencies (using native fetch in TS and standard urllib/requests in Python)."
    }
  },
  {
    sysId: "SYS-07",
    id: "ai-capital-tracker",
    name: "AI Capital Tracker",
    category: "quant",
    categoryLabel: "Quant Engine",
    badgeCat: "cat-quant",
    tagline: "Global AI Compute CapEx & Datacenter Monitor",
    summary: "Intelligence portal mapping global AI investment flows, GPU datacenter clusters, frontier lab venture funding rounds, and compute infrastructure economics.",
    specs: [
      { label: "CORE STACK", val: "Next.js / TypeScript / Charts" },
      { label: "METRICS", val: "Hyperscaler CapEx & GPU Clusters" },
      { label: "DEPRECIATION", val: "Token Economics & Wattage Costs" }
    ],
    artifact: {
      type: "CLUSTER_SPEC",
      lines: [
        { key: "H100_CLUSTER_SCALE", val: "100k+ Cluster Deployments Mapped" },
        { key: "POWER_DRAW_MW", val: "150MW - 350MW Datacenter Nodes" },
        { key: "TOKEN_DEPRECIATION", val: "Cost-per-million tokens deflation" }
      ]
    },
    metric: "Compute Infrastructure Radar",
    liveUrl: "https://aicapitaltracker.vercel.app",
    repoUrl: "https://github.com/1khvled/ai-capital-tracker",
    status: "LIVE DEMO",
    archSpec: {
      domain: "Macro Compute Infrastructure & Venture Economics",
      architecture: "Server-side structured JSONL aggregation with edge revalidation. Datacenter cluster coordinates and venture rounds are structured for instant tabular lookup.",
      mathModel: "Compute CapEx amortization: TCO = CapEx_hardware * (1 - r)^t + sum(P_energy * 24 * 365) + OpEx_cooling.",
      keyTradeoffs: "High-contrast tabular presentation of CapEx figures with zero decorative clutter, allowing institutional comparison of frontier lab rounds."
    }
  },
  {
    sysId: "SYS-08",
    id: "binance-market-maker",
    name: "Binance Prediction Market Maker",
    category: "quant",
    categoryLabel: "Quant Engine",
    badgeCat: "cat-quant",
    tagline: "Autonomous 12-Bot Market Making Fleet",
    summary: "Production quantitative execution suite running 12 automated bots across Binance prediction markets with real-time volatility-adjusted spread calculation, inventory management, and telemetry dashboards.",
    specs: [
      { label: "CORE STACK", val: "Python 3.12 / AsyncIO / WebSockets" },
      { label: "FLEET SIZE", val: "12 Parallel Bot Daemons (8080-8094)" },
      { label: "FILL LATENCY", val: "Sub-15ms WebSocket Event Loop" }
    ],
    artifact: {
      type: "ORDERBOOK_EVENT",
      lines: [
        { key: "POISSON_QUOTE_GAP", val: "Delta_p = gamma * sigma^2 * q + 2/gamma * ln(1 + gamma/kappa)" },
        { key: "INVENTORY_SKEW", val: "Current: +4 contracts (Adjusting Bid)" },
        { key: "WEBSOCKET_HEARTBEAT", val: "200 OK | Stream Latency: 11.2ms" }
      ]
    },
    metric: "12 Autonomous Bots",
    liveUrl: null,
    repoUrl: null,
    status: "ACTIVE FLEET",
    archSpec: {
      domain: "High-Frequency Algorithmic Market Making & Inventory Control",
      architecture: "Asynchronous multi-process Python daemon running 12 isolated market-maker processes on physical ports 8080-8094. Uses low-latency WebSocket order book hooks with AsyncIO.",
      mathModel: "Avellaneda-Stoikov market making framework: reservation price r(s,q,t) = s - q*gamma*sigma^2*(T-t), optimal half-spreads delta_a, delta_b derived from order book arrival intensity kappa.",
      keyTradeoffs: "Pure physical process isolation per trading pair rather than single-threaded asyncio event loops, preventing thread blocking on rapid order fill bursts."
    }
  },
  {
    sysId: "SYS-09",
    id: "dealscout",
    name: "DealScout Telegram Engine",
    category: "automation",
    categoryLabel: "Distributed Automation",
    badgeCat: "cat-auto",
    tagline: "Autonomous Multi-Channel Deal Intelligence Pipeline",
    summary: "End-to-end deal scraper and normalization engine monitoring competitor networks, stripping watermarks, optimizing affiliate coin discount parameters, and broadcasting 1:1 formatted deal cards.",
    specs: [
      { label: "CORE STACK", val: "Python 3.12 / Telethon / Pillow" },
      { label: "CHANNELS", val: "@DzAliexpress0 & @francedealsdz" },
      { label: "CADENCE", val: "5-Minute Autonomous Cron Sweep" }
    ],
    artifact: {
      type: "PIPELINE_STATUS",
      lines: [
        { key: "MIRROR_ENGINE", val: "1:1 competitor deduplication (30m debounce)" },
        { key: "WATERMARK_SCRUB", val: "Automated corner badge & text purging" },
        { key: "COIN_AFFILIATE_REWRITE", val: "Active discount parameter injection" }
      ]
    },
    metric: "5-Min Autonomous Cron",
    liveUrl: "https://t.me/DzAliexpress0",
    repoUrl: "https://github.com/1khvled/dealscout-telegram-deals",
    status: "LIVE CHANNEL",
    archSpec: {
      domain: "Autonomous Distributed Scraping & Publishing Infrastructure",
      architecture: "Event-driven Telethon pipeline reading peer Telegram MTProto channels in real-time. Regex normalizers strip competitor artifacts and execute automated PIL card composition.",
      mathModel: "Jaccard text similarity + product ID hash deduplication: J(A, B) = |A cap B| / |A cup B| with threshold theta = 0.85 to eliminate duplicate promotions within a 45-minute window.",
      keyTradeoffs: "Direct MTProto client integration over standard HTTP scraping, achieving zero IP blocking and instant competitor message interception."
    }
  },
  {
    sysId: "SYS-10",
    id: "aliexpress-coin-bot",
    name: "AliExpress Daily Coin Bot",
    category: "automation",
    categoryLabel: "Distributed Automation",
    badgeCat: "cat-auto",
    tagline: "Headless Playwright Coin Claiming & Discount Suite",
    summary: "Headless Playwright browser automation with encrypted session management that collects 100+ coins daily without triggering bot challenges or IP blocks, coupled with a Telegram bot interface.",
    specs: [
      { label: "CORE STACK", val: "Node.js / Playwright / Chromium" },
      { label: "BOT INTERFACE", val: "Telegram @Alilo07BOT" },
      { label: "EVASION", val: "Encrypted Session Cookies + Extension" }
    ],
    artifact: {
      type: "BROWSER_TRACE",
      lines: [
        { key: "HEADLESS_CHROMIUM", val: "User-agent spoof + canvas fingerprint bypass" },
        { key: "DAILY_YIELD", val: "70 to 100+ Coins collected per account" },
        { key: "TASK_SCHEDULER", val: "24-Hour Automated Cron Cycle" }
      ]
    },
    metric: "100+ Daily Coins",
    liveUrl: "https://t.me/Alilo07BOT",
    repoUrl: "https://github.com/1khvled/aliexpress-coin-bot",
    status: "ACTIVE BOT",
    archSpec: {
      domain: "Headless Browser Automation & Anti-Bot Evasion",
      architecture: "Headless Playwright worker running stealth browser contexts. Companion Chrome extension allows one-click export of authenticated session cookies directly into the bot daemon.",
      mathModel: "Randomized Gaussian interaction delay: t_delay = mu + sigma * Z with mu = 1.4s, sigma = 0.35s to mimic human touch events and bypass Cloudflare Turnstile / Akamai sensors.",
      keyTradeoffs: "Client-side session cookie injection completely avoids password storage, keeping credentials secure on the user's local machine."
    }
  },
  {
    sysId: "SYS-11",
    id: "open-opgg",
    name: "Open OP.GG Desktop",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "Ad-Free, Telemetry-Free LoL Desktop Companion",
    summary: "Clean-room desktop replica of OP.GG built with Electron. Connects directly to the League Client Update (LCU) WebSocket for instant champion select scouting, rune imports, and performance analysis.",
    specs: [
      { label: "CORE STACK", val: "Electron / Node.js / LCU API" },
      { label: "TELEMETRY", val: "0% Ads / 0% Remote Tracking" },
      { label: "INTEGRATION", val: "Local LCU TLS WebSocket" }
    ],
    artifact: {
      type: "LCU_STREAM",
      lines: [
        { key: "LCU_PROCESS_ATTACH", val: "Lockfile parsed: port + auth token" },
        { key: "CHAMP_SELECT_HOOK", val: "Instant opponent MMR & winrate query" },
        { key: "RUNE_PAGE_WRITE", val: "PUT /lol-perks/v1/pages 201 Created" }
      ]
    },
    metric: "0% Bloat Desktop Tool",
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/open-opgg",
    status: "REPO + SPEC",
    archSpec: {
      domain: "Real-Time IPC & Game Client Reverse Integration",
      architecture: "Electron main process monitors game lockfile on local OS, establishing an authenticated HTTPS/WebSocket session with the local Riot Client Update (LCU).",
      mathModel: "Optimal rune tree derivation based on matchup win-probability: argmax_R sum(P(Win | R, Matchup_k) * w_k).",
      keyTradeoffs: "100% clean-room local operation with zero telemetry, zero ad injects, and 90% lower RAM footprint compared to commercial counterparts (Blitz, Porofessor)."
    }
  },
  {
    sysId: "SYS-12",
    id: "medqcm",
    name: "MedQCM Platform",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "Adaptive Medical Exam Simulator for DFASM Students",
    summary: "Specialized clinical testing platform with thousands of verified medical QCMs, spaced repetition algorithms, timed exam simulation modes, and detailed physiological explanations.",
    specs: [
      { label: "CORE STACK", val: "Next.js / React / IndexedDB" },
      { label: "AUDIENCE", val: "French Medical Residency (DFASM)" },
      { label: "STORAGE", val: "Offline-First Client Sync" }
    ],
    artifact: {
      type: "EXAM_RUNTIME",
      lines: [
        { key: "QUESTION_BANK", val: "10,000+ Verified Clinical Items" },
        { key: "SPACED_REPETITION", val: "SuperMemo-2 (SM-2) Interval Decay" },
        { key: "OFFLINE_STATE", val: "Local IndexedDB persistent progress" }
      ]
    },
    metric: "10,000+ Clinical QCMs",
    liveUrl: "https://khvledqcm.vercel.app",
    repoUrl: null,
    status: "LIVE DEMO",
    archSpec: {
      domain: "Medical Educational Systems & Spaced Repetition",
      architecture: "High-yield offline-first Progressive Web App. Entire medical question banks and explanation diagrams are cached locally in IndexedDB with cloud progress delta sync.",
      mathModel: "SM-2 Interval Scheduling Algorithm: I(1) = 1, I(2) = 6, I(n) = I(n-1) * EF, with Easiness Factor EF' = EF + (0.1 - (5-q)*(0.08 + (5-q)*0.02)).",
      keyTradeoffs: "Optimized for extreme exam session endurance with zero layout shift, instantaneous question navigation, and offline execution in hospital wards."
    }
  },
  {
    sysId: "SYS-13",
    id: "edn-store",
    name: "EDN Prep Store",
    category: "webapps",
    categoryLabel: "Production Web App",
    badgeCat: "cat-web",
    tagline: "Medical Educational Marketplace & Digital Reader",
    summary: "Digital publication platform and interactive web reader providing high-yield revision books, clinical ECOS station scenarios, and methodology guides for French medical residency exams.",
    specs: [
      { label: "CORE STACK", val: "HTML5 / CSS3 / ES6 / Vercel" },
      { label: "CATALOG", val: "ECOS Stations & Method Guides" },
      { label: "PERFORMANCE", val: "100/100 Lighthouse Benchmark" }
    ],
    artifact: {
      type: "CATALOG_SPEC",
      lines: [
        { key: "DIGITAL_READER", val: "Zero-latency chapter visualizer" },
        { key: "SAMPLE_CHAPTERS", val: "Instant PDF/DOCX preview extraction" },
        { key: "SECURITY_HEADERS", val: "Strict CSP + Content-Type nosniff" }
      ]
    },
    metric: "100/100 Lighthouse",
    liveUrl: "https://edn-store.vercel.app",
    repoUrl: "https://github.com/1khvled/edn-store",
    status: "LIVE DEMO",
    archSpec: {
      domain: "High-Performance Content Distribution & Medical Publishing",
      architecture: "Ultralight static architecture deployed to Vercel Global Edge. Delivers sub-30ms first-contentful paint with clean client-side routing.",
      mathModel: "Zero external asset dependencies, achieving an uncompressed bundle size under 28KB and perfect 100/100 scores across all Lighthouse categories.",
      keyTradeoffs: "Avoided heavy PDF.js viewer bloat by implementing an inline progressive HTML reader for chapter excerpts."
    }
  },
  {
    sysId: "SYS-14",
    id: "koora-clean",
    name: "Koora Clean PWA",
    category: "automation",
    categoryLabel: "Distributed Automation",
    badgeCat: "cat-auto",
    tagline: "Ad-Free Low-Latency Football Match Streaming Portal",
    summary: "Modern Progressive Web App eliminating annoying popups and ad overlays from live football streams. Incorporates HLS adaptive bitrate streaming and live score telemetry.",
    specs: [
      { label: "CORE STACK", val: "PWA / HLS.js / Service Worker" },
      { label: "STREAM PROTOCOL", val: "HTTP Live Streaming (HLS m3u8)" },
      { label: "AD BLOCKING", val: "Zero Overlays / Zero Redirects" }
    ],
    artifact: {
      type: "STREAM_DIAGNOSTICS",
      lines: [
        { key: "HLS_ADAPTIVE_BITRATE", val: "Auto-scaling: 1080p60 -> 720p60 -> 480p" },
        { key: "POPUP_INTERCEPTION", val: "window.open / iframe sandboxing active" },
        { key: "BUFFER_HEALTH", val: "Low-latency live sync: 4.2s offset" }
      ]
    },
    metric: "Zero-Ad Streaming PWA",
    liveUrl: null,
    repoUrl: "https://github.com/1khvled/koora-clean",
    status: "REPO + SPEC",
    archSpec: {
      domain: "Low-Latency Media Streaming & Sandbox Security",
      architecture: "Progressive Web App embedding an audited HLS.js video playback engine. Strict content-security and sandboxed iframe barriers terminate aggressive third-party redirects.",
      mathModel: "Dynamic buffer management: TargetBuffer = min(max(liveSyncOffset * 0.8, 3.0), 12.0) seconds to avoid rebuffering under unstable networks.",
      keyTradeoffs: "Direct video stream URL resolution on the client side, bypassing intrusive host wrappers while maintaining sub-5 second live broadcast latency."
    }
  }
];

// State Machine
let currentCategory = "all";
let currentViewMode = "grid"; // 'grid' | 'table'
let searchQuery = "";
let currentTheme = localStorage.getItem("1khvled_theme") || "carbon";

// DOM Elements
const specGridEl = document.getElementById("specGrid");
const indexTableBodyEl = document.getElementById("indexTableBody");
const searchInputEl = document.getElementById("matrixSearchInput");
const tabButtons = document.querySelectorAll(".matrix-filter-tab");
const viewButtons = document.querySelectorAll(".view-switch-btn");
const specDrawerEl = document.getElementById("specDrawer");
const commandPaletteEl = document.getElementById("commandPalette");
const paletteInputEl = document.getElementById("paletteInput");
const paletteListEl = document.getElementById("paletteResultsList");
const clockEl = document.getElementById("clockUtc");
const toastEl = document.getElementById("mechanicalToast");
const themeSwitchBtn = document.getElementById("themeSwitchBtn");

// Filter and Search Engine
function getFilteredSystems() {
  return SYSTEMS_REGISTRY.filter(sys => {
    const matchesCategory = currentCategory === "all" || sys.category === currentCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query ||
      sys.sysId.toLowerCase().includes(query) ||
      sys.name.toLowerCase().includes(query) ||
      sys.tagline.toLowerCase().includes(query) ||
      sys.summary.toLowerCase().includes(query) ||
      sys.specs.some(s => s.val.toLowerCase().includes(query) || s.label.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

// Render Spec Grid View (Mode A)
function renderSpecGrid(systems) {
  if (!specGridEl) return;

  if (systems.length === 0) {
    specGridEl.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; background-color: var(--bg-primary); border: 1px solid var(--border-grid);">
        <div style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">[0 MATCHES FOUND]</div>
        <p style="color: var(--text-secondary); font-size: 0.9375rem;">No systems match query "${searchQuery}". Reset filters or search term.</p>
      </div>
    `;
    return;
  }

  specGridEl.innerHTML = systems.map(s => {
    const liveAction = s.liveUrl ? `
      <a href="${s.liveUrl}" target="_blank" rel="noopener noreferrer" class="spec-action-link" title="Open live production platform">
        <span>LIVE ↗</span>
      </a>
    ` : (s.repoUrl ? `
      <a href="${s.repoUrl}" target="_blank" rel="noopener noreferrer" class="spec-action-link" title="Open GitHub source repository">
        <span>REPO ↗</span>
      </a>
    ` : `
      <span class="spec-action-link" style="color: var(--text-muted); cursor: default;" title="Private internal production system">
        <span>PRIVATE</span>
      </span>
    `);

    const statusClass = s.status.includes("LIVE") ? "status-live" : "status-repo";

    return `
      <article class="spec-module-card with-crosshair" data-sys-id="${s.sysId}">
        <div>
          <!-- Top Metadata -->
          <div class="spec-top-meta">
            <span class="spec-sys-id tabular-num">${s.sysId}</span>
            <span class="spec-category-badge ${s.badgeCat}">${s.categoryLabel}</span>
            <span class="spec-deploy-status ${statusClass}">
              <span class="signal-led" style="background-color: ${s.status.includes('LIVE') ? 'var(--signal-emerald)' : 'var(--text-muted)'};"></span>
              <span>${s.status}</span>
            </span>
          </div>

          <!-- Title & Engineering Thesis -->
          <div class="spec-title-wrap">
            <h3 class="spec-title">${s.name}</h3>
            <p class="spec-tagline">${s.tagline}</p>
          </div>
          <p class="spec-thesis">${s.summary}</p>

          <!-- 3-Column Quantitative Spec Strip -->
          <div class="spec-metrics-strip">
            ${s.specs.map(sp => `
              <div class="spec-strip-cell">
                <span class="spec-strip-label">${sp.label}</span>
                <span class="spec-strip-val tabular-num" title="${sp.val}">${sp.val}</span>
              </div>
            `).join("")}
          </div>

          <!-- Technical Artifact Frame -->
          <div class="artifact-crop-frame">
            <span class="crop-mark-tl">┌</span>
            <span class="crop-mark-tr">┐</span>
            <span class="crop-mark-bl">└</span>
            <span class="crop-mark-br">┘</span>
            <div style="font-size: 0.625rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem; letter-spacing: 0.05em;">
              // ARTIFACT_PREVIEW: ${s.artifact.type}
            </div>
            ${s.artifact.lines.map(line => `
              <div class="artifact-content-line">
                <span>${line.key}</span>
                <strong class="tabular-num">${line.val}</strong>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Action Row -->
        <div class="spec-action-row">
          <button type="button" class="spec-action-btn" onclick="window.sysEngine.openSpecDrawer('${s.sysId}')">
            [INSPECT ARCHITECTURE & SPEC +]
          </button>
          ${liveAction}
        </div>
      </article>
    `;
  }).join("");
}

// Render Index Table View (Mode B)
function renderIndexTable(systems) {
  if (!indexTableBodyEl) return;

  if (systems.length === 0) {
    indexTableBodyEl.innerHTML = `
      <tr>
        <td colspan="7" style="padding: 3rem 1rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
          [0 SYSTEMS FOUND MATCHING QUERY]
        </td>
      </tr>
    `;
    return;
  }

  indexTableBodyEl.innerHTML = systems.map(s => {
    const liveAction = s.liveUrl ? `
      <a href="${s.liveUrl}" target="_blank" rel="noopener noreferrer" style="font-weight: 700; color: var(--text-primary); text-decoration: underline;" title="Launch live app">LIVE ↗</a>
    ` : (s.repoUrl ? `
      <a href="${s.repoUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-secondary);" title="View GitHub repo">REPO ↗</a>
    ` : `<span style="color: var(--text-muted);">INTERNAL</span>`);

    return `
      <tr class="index-table-row" onclick="window.sysEngine.openSpecDrawer('${s.sysId}')">
        <td class="table-cell-mono" style="font-weight: 700; color: var(--text-muted); width: 80px;">${s.sysId}</td>
        <td class="table-sys-name">${s.name}</td>
        <td><span class="spec-category-badge ${s.badgeCat}">${s.categoryLabel}</span></td>
        <td class="table-cell-mono" style="font-size: 0.75rem;">${s.specs[0].val}</td>
        <td class="table-cell-mono" style="font-weight: 600; color: var(--text-primary);">${s.metric}</td>
        <td>
          <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-mono); font-size: 0.6875rem; color: ${s.status.includes('LIVE') ? 'var(--signal-emerald)' : 'var(--text-muted)'};">
            <span class="signal-led" style="background-color: ${s.status.includes('LIVE') ? 'var(--signal-emerald)' : 'var(--text-muted)'};"></span>
            ${s.status}
          </span>
        </td>
        <td onclick="event.stopPropagation();" style="text-align: right; font-family: var(--font-mono); font-size: 0.75rem;">
          ${liveAction}
        </td>
      </tr>
    `;
  }).join("");
}

// Master Render
function renderShowcase() {
  const systems = getFilteredSystems();
  const specViewContainer = document.getElementById("specGridViewContainer");
  const tableViewContainer = document.getElementById("indexTableViewContainer");

  if (currentViewMode === "grid") {
    if (specViewContainer) specViewContainer.style.display = "block";
    if (tableViewContainer) tableViewContainer.style.display = "none";
    renderSpecGrid(systems);
  } else {
    if (specViewContainer) specViewContainer.style.display = "none";
    if (tableViewContainer) tableViewContainer.style.display = "block";
    renderIndexTable(systems);
  }
}

// Architecture Spec Drawer Controls (<dialog>)
function openSpecDrawer(sysId) {
  const s = SYSTEMS_REGISTRY.find(item => item.sysId === sysId);
  if (!s || !specDrawerEl) return;

  const drawerSysId = document.getElementById("drawerSysId");
  const drawerTitle = document.getElementById("drawerTitle");
  const drawerTagline = document.getElementById("drawerTagline");
  const drawerDomain = document.getElementById("drawerDomain");
  const drawerArchitecture = document.getElementById("drawerArchitecture");
  const drawerMathModel = document.getElementById("drawerMathModel");
  const drawerTradeoffs = document.getElementById("drawerTradeoffs");
  const drawerSpecsList = document.getElementById("drawerSpecsList");
  const drawerLiveBtn = document.getElementById("drawerLiveBtn");
  const drawerRepoBtn = document.getElementById("drawerRepoBtn");

  if (drawerSysId) drawerSysId.textContent = `${s.sysId} // SPECIFICATION`;
  if (drawerTitle) drawerTitle.textContent = s.name;
  if (drawerTagline) drawerTagline.textContent = s.tagline;
  if (drawerDomain) drawerDomain.textContent = s.archSpec.domain;
  if (drawerArchitecture) drawerArchitecture.textContent = s.archSpec.architecture;
  if (drawerMathModel) drawerMathModel.textContent = s.archSpec.mathModel;
  if (drawerTradeoffs) drawerTradeoffs.textContent = s.archSpec.keyTradeoffs;

  if (drawerSpecsList) {
    drawerSpecsList.innerHTML = s.specs.map(sp => `
      <div style="padding: 0.65rem 0.85rem; background-color: var(--bg-elevated); border: 1px solid var(--border-grid);">
        <span style="font-family: var(--font-mono); font-size: 0.625rem; color: var(--text-muted); display: block;">${sp.label}</span>
        <strong style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-primary);">${sp.val}</strong>
      </div>
    `).join("");
  }

  if (drawerLiveBtn) {
    if (s.liveUrl) {
      drawerLiveBtn.style.display = "inline-flex";
      drawerLiveBtn.href = s.liveUrl;
    } else {
      drawerLiveBtn.style.display = "none";
    }
  }

  if (drawerRepoBtn) {
    if (s.repoUrl) {
      drawerRepoBtn.style.display = "inline-flex";
      drawerRepoBtn.href = s.repoUrl;
    } else {
      drawerRepoBtn.style.display = "none";
    }
  }

  specDrawerEl.showModal();
}

function closeSpecDrawer() {
  if (specDrawerEl) specDrawerEl.close();
}

// Command Palette Handler
function openCommandPalette() {
  if (!commandPaletteEl) return;
  commandPaletteEl.showModal();
  if (paletteInputEl) {
    paletteInputEl.value = "";
    paletteInputEl.focus();
    renderPaletteResults("");
  }
}

function closeCommandPalette() {
  if (commandPaletteEl) commandPaletteEl.close();
}

function renderPaletteResults(query) {
  if (!paletteListEl) return;
  const q = query.trim().toLowerCase();
  const matches = SYSTEMS_REGISTRY.filter(s =>
    !q ||
    s.sysId.toLowerCase().includes(q) ||
    s.name.toLowerCase().includes(q) ||
    s.tagline.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    paletteListEl.innerHTML = `
      <li style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
        No matching systems found
      </li>
    `;
    return;
  }

  paletteListEl.innerHTML = matches.map((s, idx) => `
    <li class="palette-result-item ${idx === 0 ? 'selected' : ''}" onclick="window.sysEngine.selectPaletteItem('${s.sysId}')">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="color: var(--text-muted); font-weight: 700;">${s.sysId}</span>
        <strong style="color: var(--text-primary);">${s.name}</strong>
        <span style="color: var(--text-secondary); font-size: 0.75rem;">${s.tagline}</span>
      </div>
      <span style="color: var(--text-muted); font-size: 0.6875rem;">[SELECT ↵]</span>
    </li>
  `).join("");
}

function selectPaletteItem(sysId) {
  closeCommandPalette();
  openSpecDrawer(sysId);
}

// Mechanical Toast Notification
function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = `[${msg}]`;
  toastEl.classList.add("show");
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

// Theme Polarity Switcher (Carbon / Paper)
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("1khvled_theme", theme);
  if (themeSwitchBtn) {
    themeSwitchBtn.textContent = theme === "carbon" ? "[THEME: CARBON]" : "[THEME: PAPER]";
  }
  showToast(`THEME SWITCHED -> ${theme.toUpperCase()}`);
}

function toggleTheme() {
  setTheme(currentTheme === "carbon" ? "paper" : "carbon");
}

// UTC Ticking Clock (Tabular Precision)
function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  const utcHours = String(now.getUTCHours()).padStart(2, "0");
  const utcMins = String(now.getUTCMinutes()).padStart(2, "0");
  const utcSecs = String(now.getUTCSeconds()).padStart(2, "0");
  clockEl.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC`;
}

// Spotlight Tab Switcher
function switchSpotlightTab(tabId) {
  const tabs = document.querySelectorAll(".spotlight-tab-btn");
  const panes = document.querySelectorAll(".spotlight-pane");

  tabs.forEach(t => {
    if (t.getAttribute("data-tab") === tabId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  panes.forEach(p => {
    if (p.id === `spotlight-${tabId}`) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
}

// Global Keyboard Navigation
window.addEventListener("keydown", (e) => {
  // If typing inside an input, do not intercept single key navigation
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    if (e.key === "Escape") {
      closeCommandPalette();
      closeSpecDrawer();
    }
    return;
  }

  if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
    e.preventDefault();
    openCommandPalette();
    return;
  }

  if (e.key.toLowerCase() === "t") {
    e.preventDefault();
    toggleTheme();
    return;
  }

  if (e.key.toLowerCase() === "g") {
    window.open("https://github.com/1khvled", "_blank");
    return;
  }

  if (e.key === "Escape") {
    closeCommandPalette();
    closeSpecDrawer();
    return;
  }

  // Section Numeric Jumps
  if (e.key === "1") {
    document.getElementById("sec-hero")?.scrollIntoView({ behavior: "smooth" });
  } else if (e.key === "2") {
    document.getElementById("sec-showcase")?.scrollIntoView({ behavior: "smooth" });
  } else if (e.key === "3") {
    document.getElementById("sec-architecture")?.scrollIntoView({ behavior: "smooth" });
  } else if (e.key === "4") {
    document.getElementById("sec-capabilities")?.scrollIntoView({ behavior: "smooth" });
  } else if (e.key === "5") {
    document.getElementById("sec-dispatch")?.scrollIntoView({ behavior: "smooth" });
  }
});

// Event Wireups
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-cat");
    renderShowcase();
  });
});

viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    viewButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentViewMode = btn.getAttribute("data-view");
    renderShowcase();
  });
});

if (searchInputEl) {
  searchInputEl.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderShowcase();
  });
}

if (paletteInputEl) {
  paletteInputEl.addEventListener("input", (e) => {
    renderPaletteResults(e.target.value);
  });
}

if (themeSwitchBtn) {
  themeSwitchBtn.addEventListener("click", toggleTheme);
}

// Light dismiss for drawers and modals
[specDrawerEl, commandPaletteEl].forEach(dialog => {
  if (dialog) {
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!inDialog) {
        dialog.close();
      }
    });
  }
});

// Copy to Clipboard Utility
function copyContactEmail() {
  const email = "khvled2004@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("EMAIL COPIED: khvled2004@gmail.com");
  });
}

// Expose System Engine to Global Scope
window.sysEngine = {
  openSpecDrawer,
  closeSpecDrawer,
  openCommandPalette,
  closeCommandPalette,
  selectPaletteItem,
  switchSpotlightTab,
  copyContactEmail,
  toggleTheme
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Enforce saved theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeSwitchBtn) {
    themeSwitchBtn.textContent = currentTheme === "carbon" ? "[THEME: CARBON]" : "[THEME: PAPER]";
  }

  // Start Real-Time UTC Clock
  updateClock();
  setInterval(updateClock, 1000);

  // Initial Showcase Render
  renderShowcase();
});
