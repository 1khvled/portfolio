/**
 * 1KHVLED // VIBE CODER & CREATIVE DESIGNER
 * Frontier AI Model Matrix & Optical Glassmorphism UI Engine
 */

(() => {
  'use strict';

  // ====================================================================
  // 1. PRODUCTION PROJECTS REGISTRY (VERIFIED LINKS & REAL ASSETS)
  // ====================================================================

  const PROJECTS_DATA = [
    {
      id: 'messistats',
      name: 'MessiStats',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Sports Analytics',
      status: '200 OK Live',
      logo: 'logos/messistats-logo.png',
      logoFallback: 'logos/messistats.svg',
      snapshot: 'projects/messistats-snap.png',
      liveUrl: 'https://www.messistat.com',
      repoUrl: 'https://github.com/1khvled/messi-stats',
      description: 'Comprehensive career analytics portal tracking Lionel Messi\'s 850+ official goals, 380+ assists, xG shot maps, and club/country match logs with high-density visual filtering.',
      widgetType: 'messi-duel',
      widgetData: {
        label: 'Career Telemetry',
        value: '850 Goals · 382 Assists',
        altValue: '1,080 Matches · 0.79 Goal/Game',
        btnText: 'Toggle Match Ratio'
      },
      metrics: [
        '850+ Career Goals Tracked',
        'Interactive xG Shot Visualizer',
        'Next.js 14 App Router',
        'Sub-second Filter Latency'
      ]
    },
    {
      id: 'ronaldostats',
      name: 'RonaldoStats',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Sports Analytics',
      status: '200 OK Live',
      logo: 'logos/ronaldostats-logo.png',
      logoFallback: 'logos/ronaldostats.svg',
      snapshot: 'projects/ronaldostats-snap.png',
      liveUrl: 'https://ronaldomstats-app-no-tme.vercel.app',
      repoUrl: 'https://github.com/1khvled/ronaldo-stats',
      description: 'Real-time performance diagnostic suite tracking Cristiano Ronaldo\'s 910+ all-time goals, clutch conversion rates, penalty metrics, and historical match logs.',
      widgetType: 'ronaldo-duel',
      widgetData: {
        label: 'Clutch Metric',
        value: '910 Goals · 135 Int\'l',
        altValue: '66 Hat-tricks · 165 Penalties',
        btnText: 'Toggle Hat-tricks'
      },
      metrics: [
        '910+ Verified Official Goals',
        'Clutch Minutes Distribution',
        'Vercel Edge Deployed',
        'Live Responsive Layout'
      ]
    },
    {
      id: 'obsidianwear',
      name: 'Obsidian Wear',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Luxury Streetwear E-Commerce',
      status: 'Production Live',
      logo: 'logos/obsidianwear-logo.svg',
      snapshot: 'projects/obsidianwear-snap.png',
      liveUrl: 'https://obsidianwearlovable.vercel.app',
      repoUrl: 'https://github.com/1khvled/obsidianwear-V2-GOOD-VERSION',
      description: 'Modern luxury streetwear storefront featuring optical dark aesthetics, real-time cart state, high-density apparel lookbooks, and sleek responsive checkout flows.',
      widgetType: 'obsidian-currency',
      widgetData: {
        label: 'Signature Heavyweight Hoodie',
        value: '89.00 EUR · 22,000 DZD',
        altValue: 'Limited Release: 50 Units Worldwide',
        btnText: 'Toggle Availability'
      },
      metrics: [
        'Modern Streetwear Aesthetic',
        'Real-time Cart State Management',
        'High-Res Editorial Lookbooks',
        'Next-Gen Responsive Checkout'
      ]
    },
    {
      id: 'dz-partpicker',
      name: 'DZ-PartPicker',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Hardware Configurator',
      status: '200 OK Live',
      logo: 'logos/dz-partpicker-logo.png',
      snapshot: 'projects/dzpartpicker-snap.png',
      liveUrl: 'https://pcbuilder-psi.vercel.app',
      repoUrl: 'https://github.com/1khvled/dz-partpicker',
      description: 'Algeria\'s premier PC hardware compatibility checker and real-time vendor price aggregator across local retailers, calculating exact DZD component totals.',
      widgetType: 'pc-builder',
      widgetData: {
        tierIndex: 1,
        tiers: [
          { name: 'Entry 1080p', cost: '85,000 DZD', spec: 'i3 12100F + RX 6600' },
          { name: 'Mid 1440p', cost: '145,000 DZD', spec: 'i5 13400F + RTX 4060' },
          { name: 'Beast 4K', cost: '280,000 DZD', spec: 'Ryzen 7 7800X3D + RTX 4075' }
        ],
        btnText: 'Cycle Build Tier'
      },
      metrics: [
        'Wattage & Socket Verification',
        'Live Vendor Price Scraping',
        'Real DZD Currency Matrix',
        'Zero-Conflict Part Checker'
      ]
    },
    {
      id: 'macro-prop',
      name: 'Macro Prop Trader',
      category: 'quant-trading',
      categoryLabel: 'Quant & Trading',
      tag: 'Macro Telemetry & Yield Model',
      status: 'Quant Engine Live',
      logo: 'logos/opgg-logo.svg',
      snapshot: 'projects/macroproptrader-snap.png',
      liveUrl: 'https://macro-prop-trader.vercel.app',
      repoUrl: 'https://github.com/1khvled/macro-prop-trader',
      description: 'Institutional macroeconomic risk dashboard and sovereign yield curve modeler tracking 2Y/10Y inversion spreads, Fed dot plots, and multi-asset drawdowns.',
      widgetType: 'macro-spread',
      widgetData: {
        spread: '+18.4 bps',
        altSpread: '-6.2 bps (Simulated Inversion)',
        regime: 'Bull Steepener',
        btnText: 'Simulate Rate Cut (-25bps)'
      },
      metrics: [
        'Nelson-Siegel Yield Fitting',
        'Live US Treasury Ingestion',
        'Monte Carlo VaR Analysis',
        'Vectorized Financial Maths'
      ]
    },
    {
      id: 'bytek-store',
      name: 'Bytek Gaming Store',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Gaming Hardware E-Commerce',
      status: 'Production Live',
      logo: 'logos/bytek-logo.png',
      snapshot: 'projects/bytek-cart-snap.png',
      liveUrl: 'https://bytek-byte-cart.vercel.app',
      repoUrl: 'https://github.com/1khvled/bytek-store-cart',
      description: 'High-performance gaming peripheral and keyboard storefront featuring real-time cart state, rapid-trigger magnetic hardware selection, and localized Algerian delivery checkout.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Store Inventory',
        value: 'Rapid-Trigger Keyboards · 8K Mice',
        altValue: 'Free 58-Wilaya Express Delivery',
        btnText: 'Toggle Shipping'
      },
      metrics: [
        'Rapid-Trigger HE Magnetic Switch Peripherals',
        'Reactive Cart & Checkout Matrix',
        'High-Resolution Hardware Catalog',
        'Localized Express Shipping'
      ]
    },
    {
      id: 'fpl-analytics',
      name: 'FPL Analytics Dashboard',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Sports Analytics & Quant Form',
      status: '200 OK Live',
      logo: 'logos/fpl-logo.svg',
      snapshot: 'projects/fpl-snap.png',
      liveUrl: 'https://fplteams16.vercel.app',
      repoUrl: 'https://github.com/1khvled/fpl-analytics-dashboard',
      description: 'Advanced Fantasy Premier League team diagnostics, fixture difficulty matrix, xG/xA form ratings, and optimal transfer rotation algorithms.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Algorithm Engine',
        value: 'Optimal Transfer Rank: Top 0.5%',
        altValue: 'Fixture Difficulty Index: 1.4 FDR',
        btnText: 'Toggle FDR Matrix'
      },
      metrics: [
        'Real-time Premier League API Integration',
        'Expected Goals (xG) & Assists (xA) Math',
        'Transfer Rotation Optimizer',
        'Interactive Team Pitch View'
      ]
    },
    {
      id: 'koora-clean',
      name: 'Koora Clean PWA',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Streaming Platform & PWA',
      status: '200 OK Live',
      logo: 'logos/koora-logo.svg',
      snapshot: 'projects/kooraclean-snap.png',
      liveUrl: 'https://koora-clean-amina.vercel.app',
      repoUrl: 'https://github.com/1khvled/koora-clean',
      description: 'Ad-free, telemetry-free progressive web app for live football match streaming, featuring zero overlay popups and low-latency HLS multi-bitrate playback.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Stream Telemetry',
        value: '0 Popups · 1080p60 HLS Stream',
        altValue: 'Latency: 1.2s · Buffer Health 100%',
        btnText: 'Toggle Health'
      },
      metrics: [
        'Zero Advertising Overlays',
        'Adaptive HLS Video Engine',
        'Full Progressive Web App (PWA) Offline Cache',
        'Mobile Gesture Controls'
      ]
    },
    {
      id: 'ai-capital',
      name: 'AI Capital Tracker',
      category: 'quant-trading',
      categoryLabel: 'Quant & Trading',
      tag: 'VC Intelligence',
      status: 'Production Live',
      logo: 'logos/square-algerie-logo.png',
      snapshot: 'projects/aicapitaltracker-snap.png',
      liveUrl: 'https://aicapitaltracker.vercel.app',
      repoUrl: 'https://github.com/1khvled/ai-capital-tracker',
      description: 'Real-time capital flow intelligence platform monitoring global AI startup funding rounds, compute infrastructure investments, and valuation multiples.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Tracked Volume',
        value: '$48.2B across 412 Deals',
        altValue: 'Avg Deal Size: $117M (Series B)',
        btnText: 'Toggle Deal Multiples'
      },
      metrics: [
        'Automated Round Parsing',
        'GPU Cluster CapEx Modeling',
        'Fast Search & Filter Index',
        'Real-time Funding Telemetry'
      ]
    },
    {
      id: 'square-dz',
      name: 'Square Live DZ',
      category: 'quant-trading',
      categoryLabel: 'Quant & Trading',
      tag: 'FX Telemetry',
      status: 'Active Feed',
      logo: 'logos/square-algerie-logo.png',
      snapshot: 'projects/squarealgerie-snap.png',
      liveUrl: 'https://squarealgerie.com',
      repoUrl: 'https://github.com/1khvled/algeria-exchange-rates-api',
      description: 'Algeria\'s real-time informal foreign exchange (Square Port Said) rate tracker and volatility monitor for EUR/DZD, USD/DZD, and CAD/DZD.',
      widgetType: 'currency-ticker',
      widgetData: {
        label: 'Square Port Said (Live)',
        value: '1€ = 248.50 DZD | 1$ = 236.00 DZD',
        altValue: 'Spread: +12.4% vs Official Bank',
        btnText: 'Compare Bank Spread'
      },
      metrics: [
        'Sub-minute Price Refresh',
        'Telegram Bot Alert Channel',
        'Historical Volatility Engine',
        'PWA Mobile-Optimized'
      ]
    },
    {
      id: 'dealscout',
      name: 'DealScout Engine',
      category: 'automations',
      categoryLabel: 'Automations & Bots',
      tag: 'Autonomous Scraper & Publisher',
      status: 'Active Automation',
      logo: 'logos/dealscout-logo.svg',
      snapshot: 'projects/dealscout-snap.png',
      liveUrl: 'https://dealscout-green.vercel.app',
      repoUrl: 'https://github.com/1khvled/dealscout-telegram-deals',
      description: 'Autonomous multi-channel deal intelligence and price drop scraper tracking hidden coupon discounts and automated multi-channel publishing.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Scraper Pipeline',
        value: '5-Min Cron · 1,420 Deals Parsed Daily',
        altValue: 'Telegram Multi-Channel Webhooks Active',
        btnText: 'Toggle Webhook Status'
      },
      metrics: [
        'Automated Cron Price Monitor',
        'Telegram Bot Channel Broadcast',
        'Coupon Stacking Calculator',
        'Serverless Edge Execution'
      ]
    },
    {
      id: 'open-opgg',
      name: 'Open OP.GG Desktop',
      category: 'automations',
      categoryLabel: 'Automations & Bots',
      tag: 'Desktop Client & Automation',
      status: 'Open Source',
      logo: 'logos/opgg-logo.svg',
      snapshot: 'projects/medqcm-snap.png',
      liveUrl: 'https://github.com/1khvled/open-opgg',
      repoUrl: 'https://github.com/1khvled/open-opgg',
      description: 'Lightweight, privacy-first desktop client and automated rune/build importer for League of Legends, interfacing directly with local LCU client endpoints.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'LCU Connection',
        value: 'Active WebSocket · 0.2s Import',
        altValue: 'Auto-Accept Match: Ready',
        btnText: 'Toggle Auto-Accept'
      },
      metrics: [
        'Direct Local LCU Hook',
        'Zero Ads & Zero Telemetry',
        'Electron + Tailwind + React',
        'Sub-15MB Memory Footprint'
      ]
    },
    {
      id: 'aliexpress-bot',
      name: 'AliExpress Discount & Coin Suite',
      category: 'automations',
      categoryLabel: 'Automations & Bots',
      tag: 'Scraper & Bot Automation',
      status: 'Active Autonomous Bot',
      logo: 'logos/aliexpress-coin-logo.png',
      snapshot: 'projects/ednstore-snap.png',
      liveUrl: 'https://github.com/1khvled/aliexpress-coin-bot',
      repoUrl: 'https://github.com/1khvled/aliexpress-coin-bot',
      description: 'Autonomous discount finder and daily coin streak claimer automating hidden price reductions and bulk order optimization via headless browser workflows.',
      widgetType: 'simple-toggle',
      widgetData: {
        label: 'Automation Telemetry',
        value: '124-Day Streak · 18.5% Avg Savings',
        altValue: 'Stacking: Coins + Store Coupons',
        btnText: 'Toggle Stacking Rules'
      },
      metrics: [
        'Headless Chromium Automation',
        'Anti-Detection Fingerprinting',
        'Telegram Push Notifications',
        'Zero-Maintenance Cron Fleet'
      ]
    }
  ];

  // ====================================================================
  // 2. DOM ELEMENTS & CACHED REFERENCES
  // ====================================================================

  const projectsGrid = document.getElementById('projectsGrid');
  const orbitDeck = document.getElementById('orbitDeck');
  const filterButtons = document.querySelectorAll('.filter-pill-btn');
  const vibeToast = document.getElementById('vibeToast');
  const dockVibeToggle = document.getElementById('dockVibeToggle');
  const dockVibeName = document.getElementById('dockVibeName');
  const vibeMoodButtons = document.getElementById('vibeMoodButtons');
  const btnCopyEmail = document.getElementById('btnCopyEmail');

  // Modal Dialog
  const projectTheaterModal = document.getElementById('projectTheaterModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectCategory = document.getElementById('modalProjectCategory');
  const modalProjectLogo = document.getElementById('modalProjectLogo');
  const modalProjectImage = document.getElementById('modalProjectImage');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalProjectMetrics = document.getElementById('modalProjectMetrics');
  const modalLiveLink = document.getElementById('modalLiveLink');
  const modalRepoLink = document.getElementById('modalRepoLink');

  // Active State
  let currentFilter = 'all';
  const VIBE_PALETTES = ['obsidian', 'emerald', 'sunset', 'purple'];
  let currentVibe = localStorage.getItem('user_vibe') || 'obsidian';

  // ====================================================================
  // 3. TOAST FEEDBACK NOTIFIER
  // ====================================================================

  let toastTimer = null;
  function showToast(message) {
    if (!vibeToast) return;
    vibeToast.textContent = message;
    vibeToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      vibeToast.classList.remove('show');
    }, 2800);
  }

  // ====================================================================
  // 4. THEME & TACTILE VIBE CONTROLLER
  // ====================================================================

  function applyVibe(vibe) {
    if (!VIBE_PALETTES.includes(vibe)) vibe = 'obsidian';
    currentVibe = vibe;
    document.documentElement.setAttribute('data-vibe', vibe);
    localStorage.setItem('user_vibe', vibe);

    const prettyNames = {
      obsidian: 'Obsidian',
      emerald: 'Emerald',
      sunset: 'Sunset',
      purple: 'Amethyst'
    };

    if (dockVibeName) dockVibeName.textContent = prettyNames[vibe] || 'Obsidian';

    if (vibeMoodButtons) {
      vibeMoodButtons.querySelectorAll('.btn-mood-tile').forEach(btn => {
        if (btn.dataset.vibe === vibe) {
          btn.style.borderColor = 'var(--vibe-accent)';
          btn.style.background = 'rgba(255, 255, 255, 0.15)';
        } else {
          btn.style.borderColor = 'var(--glass-inner-border)';
          btn.style.background = 'rgba(255, 255, 255, 0.05)';
        }
      });
    }
  }

  if (dockVibeToggle) {
    dockVibeToggle.addEventListener('click', () => {
      const nextIdx = (VIBE_PALETTES.indexOf(currentVibe) + 1) % VIBE_PALETTES.length;
      const nextVibe = VIBE_PALETTES[nextIdx];
      applyVibe(nextVibe);
      showToast(`Palette switched to ${nextVibe.toUpperCase()}`);
    });
  }

  if (vibeMoodButtons) {
    vibeMoodButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-mood-tile');
      if (!btn) return;
      const vibe = btn.dataset.vibe;
      applyVibe(vibe);
      showToast(`Active refraction: ${vibe.toUpperCase()}`);
    });
  }

  applyVibe(currentVibe);

  // ====================================================================
  // 5. CURSOR-TRACKED SPECULAR GLINT & 3D TILT PHYSICS
  // ====================================================================

  function attachPhysicsToCard(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // ====================================================================
  // 6. RENDER PROJECT SHOWCASE CARDS (CONCENTRIC GEOMETRY)
  // ====================================================================

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'optical-glass-card specular-glint-surface';
      card.id = `card-${project.id}`;

      let widgetHtml = '';
      if (project.widgetType === 'pc-builder') {
        const tier = project.widgetData.tiers[project.widgetData.tierIndex];
        widgetHtml = `
          <div class="card-micro-widget" id="widget-${project.id}">
            <div>
              <div class="widget-label">DZ-PartPicker Configurator</div>
              <div class="widget-value" id="val-${project.id}">${tier.name}: ${tier.cost} (${tier.spec})</div>
            </div>
            <button type="button" class="widget-interactive-btn" data-action="cycle-tier" data-id="${project.id}">
              ${project.widgetData.btnText}
            </button>
          </div>
        `;
      } else if (project.widgetType === 'macro-spread') {
        widgetHtml = `
          <div class="card-micro-widget" id="widget-${project.id}">
            <div>
              <div class="widget-label">US Treasury 2Y/10Y Spread</div>
              <div class="widget-value" id="val-${project.id}">${project.widgetData.spread} · ${project.widgetData.regime}</div>
            </div>
            <button type="button" class="widget-interactive-btn" data-action="toggle-spread" data-id="${project.id}">
              ${project.widgetData.btnText}
            </button>
          </div>
        `;
      } else if (project.widgetData) {
        widgetHtml = `
          <div class="card-micro-widget" id="widget-${project.id}">
            <div>
              <div class="widget-label">${project.widgetData.label || 'Live Telemetry'}</div>
              <div class="widget-value" id="val-${project.id}">${project.widgetData.value}</div>
            </div>
            <button type="button" class="widget-interactive-btn" data-action="toggle-val" data-id="${project.id}">
              ${project.widgetData.btnText || 'Toggle'}
            </button>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="inner-media-stage" style="cursor: pointer;" data-action="inspect" data-id="${project.id}">
          <div class="snapshot-top-bar">
            <span class="glass-mini-tag">
              <span class="dock-status-dot" style="width: 6px; height: 6px;"></span>
              <span>${project.status}</span>
            </span>
            <span class="glass-mini-tag" style="background: rgba(0,0,0,0.7);">${project.tag}</span>
          </div>
          <img
            src="${project.snapshot}"
            alt="${project.name} UI Snapshot"
            class="inner-snapshot-img"
            loading="lazy"
            onerror="this.src='logos/opgg-logo.svg'">
        </div>

        <div class="card-body-content">
          <div class="card-header-row">
            <div class="card-logo-wrap">
              <img
                src="${project.logo}"
                alt="${project.name} Logo"
                class="card-brand-logo"
                onerror="this.src='${project.logoFallback || 'logos/opgg-logo.svg'}'">
              <div>
                <h3 class="card-title">${project.name}</h3>
                <span class="card-category-tag">${project.categoryLabel}</span>
              </div>
            </div>
          </div>

          <p class="card-description">${project.description}</p>

          ${widgetHtml}

          <div class="card-footer-actions">
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass-primary">
              <span>Launch Live</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass-icon" title="View Source on GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <button type="button" class="btn-glass-icon" data-action="inspect" data-id="${project.id}" title="Inspect Craft">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          </div>
        </div>
      `;

      attachPhysicsToCard(card);
      projectsGrid.appendChild(card);
    });
  }

  // ====================================================================
  // 7. INTERACTIVE MICRO-WIDGET CONTROLLERS
  // ====================================================================

  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      const inspectBtn = e.target.closest('[data-action="inspect"]');
      if (inspectBtn) {
        const id = inspectBtn.dataset.id;
        openProjectModal(id);
        return;
      }

      const widgetBtn = e.target.closest('.widget-interactive-btn');
      if (!widgetBtn) return;

      const action = widgetBtn.dataset.action;
      const id = widgetBtn.dataset.id;
      const project = PROJECTS_DATA.find(p => p.id === id);
      if (!project) return;

      const valEl = document.getElementById(`val-${id}`);
      if (!valEl) return;

      if (action === 'cycle-tier' && project.widgetType === 'pc-builder') {
        const data = project.widgetData;
        data.tierIndex = (data.tierIndex + 1) % data.tiers.length;
        const currentTier = data.tiers[data.tierIndex];
        valEl.textContent = `${currentTier.name}: ${currentTier.cost} (${currentTier.spec})`;
        widgetBtn.classList.toggle('active');
        showToast(`Selected: ${currentTier.name} — ${currentTier.cost}`);
      } else if (action === 'toggle-spread' && project.widgetType === 'macro-spread') {
        const data = project.widgetData;
        const isAlt = widgetBtn.classList.toggle('active');
        valEl.textContent = isAlt ? data.altSpread : `${data.spread} · ${data.regime}`;
        showToast(isAlt ? 'Simulated: -25 bps Fed rate cut scenario' : 'Restored: Baseline yield spread');
      } else if (action === 'toggle-val' && project.widgetData) {
        const data = project.widgetData;
        const isAlt = widgetBtn.classList.toggle('active');
        valEl.textContent = isAlt ? data.altValue : data.value;
      }
    });
  }

  // ====================================================================
  // 8. CATEGORY FILTERS & ORBIT CHIP DECK
  // ====================================================================

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    });
  });

  if (orbitDeck) {
    orbitDeck.addEventListener('click', (e) => {
      const chip = e.target.closest('.orbit-chip');
      if (!chip) return;

      const projectId = chip.dataset.project;
      const filter = chip.dataset.filter;

      if (filter === 'all') {
        const allBtn = document.querySelector('.filter-pill-btn[data-filter="all"]');
        if (allBtn) allBtn.click();
        const showcaseEl = document.getElementById('showcase');
        if (showcaseEl) showcaseEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (projectId) {
        const targetCard = document.getElementById(`card-${projectId}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.style.outline = '2px solid var(--vibe-accent)';
          targetCard.style.boxShadow = '0 0 35px var(--vibe-accent)';
          setTimeout(() => {
            targetCard.style.outline = '';
            targetCard.style.boxShadow = '';
          }, 1800);
        } else {
          const allBtn = document.querySelector('.filter-pill-btn[data-filter="all"]');
          if (allBtn) allBtn.click();
          setTimeout(() => {
            const cardNow = document.getElementById(`card-${projectId}`);
            if (cardNow) {
              cardNow.scrollIntoView({ behavior: 'smooth', block: 'center' });
              cardNow.style.outline = '2px solid var(--vibe-accent)';
              setTimeout(() => cardNow.style.outline = '', 1800);
            }
          }, 100);
        }
      }
    });
  }

  // ====================================================================
  // 9. FRONTIER AI MODEL MATRIX & INTERACTIVE REASONING LAB
  // ====================================================================

  // Micro-tool state handlers inside model cards
  const modelsGrid = document.getElementById('modelsGrid');
  if (modelsGrid) {
    modelsGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.widget-interactive-btn');
      if (!btn) return;

      const action = btn.dataset.action;
      const target = btn.dataset.target;

      if (action === 'toggle-thinking' && target === 'claude') {
        const readout = document.getElementById('claudeReadout');
        const isExtended = btn.classList.toggle('active');
        if (isExtended) {
          btn.textContent = 'Toggle Standard (0s)';
          readout.innerHTML = '<span style="color:#f59e0b;">Extended Mode Active:</span> 64,000 token reasoning budget. Internal chain-of-thought verifying DOM tree hydration & CSS containment.';
          showToast('Claude 3.7: Extended Thinking enabled (64k budget)');
        } else {
          btn.textContent = 'Toggle Extended (64k)';
          readout.textContent = 'Mode: Standard (0s) · Direct generation for fast UI templates and CSS variable tweaks.';
          showToast('Claude 3.7: Standard instant mode');
        }
      } else if (action === 'step-quant' && target === 'deepseek') {
        const readout = document.getElementById('deepseekReadout');
        const steps = [
          'Step 1: Yield Inversion Telemetry · Analyzing 2Y/10Y spread derivative ∂y/∂t.',
          'Step 2: Black-Scholes PDE Solved · Implied Volatility surface calibrated to 16.4%.',
          'Step 3: Vectorized CUDA Execution · Execution order filled with +18.4 bps alpha.'
        ];
        let currentStep = parseInt(btn.dataset.step || '0', 10);
        currentStep = (currentStep + 1) % steps.length;
        btn.dataset.step = currentStep;
        readout.innerHTML = `<span style="color:#60a5fa;">DeepSeek-R1 CoT:</span> ${steps[currentStep]}`;
        showToast(`DeepSeek-R1: Step ${currentStep + 1}/3 evaluated`);
      } else if (action === 'scale-context' && target === 'gemini') {
        const readout = document.getElementById('geminiReadout');
        const contexts = [
          'Context: 250k tokens ingested · Searching entire Monorepo codebase in 340ms.',
          'Context: 1,000,000 tokens ingested · Cross-referencing 14 repositories & PR histories in 520ms.',
          'Context: 2,000,000 tokens ingested · Max window active. Zero context truncation across all codebase history.'
        ];
        let curIdx = parseInt(btn.dataset.scaleIdx || '0', 10);
        curIdx = (curIdx + 1) % contexts.length;
        btn.dataset.scaleIdx = curIdx;
        readout.innerHTML = `<span style="color:#38bdf8;">Gemini 2.0 Ingestion:</span> ${contexts[curIdx]}`;
        showToast(`Gemini 2.0: Context scaled to ${(curIdx + 1) * 750}K+ tokens`);
      } else if (action === 'dispatch-swarm' && target === 'muse') {
        const readout = document.getElementById('museReadout');
        const isSwarm = btn.classList.toggle('active');
        if (isSwarm) {
          btn.textContent = 'Halt Swarm';
          readout.innerHTML = '<span style="color:#c084fc;">Swarm Active:</span> Worktree 1: UI Refactor · Worktree 2: Integration Tests (PASS) · Worktree 3: PR Reviewer.';
          showToast('Muse Spark: 3 parallel git worktree agents dispatched');
        } else {
          btn.textContent = 'Deploy Swarm Workers';
          readout.textContent = 'Worktree 1: Builder (Idle) · Worktree 2: Test Runner (Idle)';
          showToast('Muse Spark: Swarm returned to idle');
        }
      }
    });
  }

  // Interactive Task Router
  const routerTaskSelector = document.getElementById('routerTaskSelector');
  const routerTarget = document.getElementById('routerTarget');
  const routerStrategy = document.getElementById('routerStrategy');
  const routerVelocity = document.getElementById('routerVelocity');

  const ROUTER_PRESETS = {
    ui: {
      model: 'Claude 3.7 Sonnet (Extended Thinking)',
      color: '#f59e0b',
      strategy: '64K Token Thinking budget for optical physics & zero visual regressions.',
      velocity: '10x Developer Multiplier · Zero-Defect Craft',
      highlightId: 'card-model-claude'
    },
    quant: {
      model: 'DeepSeek-R1 (Reinforcement Learning CoT)',
      color: '#3b82f6',
      strategy: 'Large-scale RL reasoning trace solving Nelson-Siegel yield fitting & orderbook skews.',
      velocity: 'Dense 671B MoE Math Engine · Pure Logic',
      highlightId: 'card-model-deepseek'
    },
    repo: {
      model: 'Gemini 2.0 Pro (2M+ Token Context)',
      color: '#38bdf8',
      strategy: 'Full repository audit without vector chunking. Ingests all 14 projects into single prompt.',
      velocity: '&lt; 400ms Retrieval · Native Multimodal',
      highlightId: 'card-model-gemini'
    },
    swarm: {
      model: 'Muse Spark 1.3 (Muse Code Harness)',
      color: '#c084fc',
      strategy: 'Autonomous multi-agent execution across isolated git branches with automated test suites.',
      velocity: 'Parallel Fleet Execution · Zero Human Bottleneck',
      highlightId: 'card-model-muse'
    }
  };

  if (routerTaskSelector) {
    routerTaskSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-router-task');
      if (!btn) return;

      routerTaskSelector.querySelectorAll('.btn-router-task').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const task = btn.dataset.task;
      const preset = ROUTER_PRESETS[task];
      if (!preset) return;

      if (routerTarget) {
        routerTarget.textContent = preset.model;
        routerTarget.style.color = preset.color;
      }
      if (routerStrategy) routerStrategy.textContent = preset.strategy;
      if (routerVelocity) routerVelocity.textContent = preset.velocity;

      // Glow the corresponding model card
      const targetCard = document.getElementById(preset.highlightId);
      if (targetCard) {
        targetCard.style.borderColor = preset.color;
        targetCard.style.boxShadow = `0 0 35px -5px ${preset.color}`;
        setTimeout(() => {
          targetCard.style.borderColor = '';
          targetCard.style.boxShadow = '';
        }, 1600);
      }

      showToast(`Prompt auto-routed to ${preset.model.split(' ')[0]}`);
    });
  }

  // ====================================================================
  // 10. PROJECT THEATER MODAL DIALOG
  // ====================================================================

  function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project || !projectTheaterModal) return;

    if (modalProjectTitle) modalProjectTitle.textContent = project.name;
    if (modalProjectCategory) modalProjectCategory.textContent = `${project.categoryLabel} · ${project.tag}`;
    if (modalProjectLogo) modalProjectLogo.src = project.logo;
    if (modalProjectImage) modalProjectImage.src = project.snapshot;
    if (modalProjectDesc) modalProjectDesc.textContent = project.description;

    if (modalProjectMetrics) {
      modalProjectMetrics.innerHTML = '';
      project.metrics.forEach(m => {
        const tag = document.createElement('span');
        tag.className = 'glass-mini-tag';
        tag.textContent = m;
        modalProjectMetrics.appendChild(tag);
      });
    }

    if (modalLiveLink) modalLiveLink.href = project.liveUrl;
    if (modalRepoLink) modalRepoLink.href = project.repoUrl;

    projectTheaterModal.showModal();
  }

  if (btnCloseModal && projectTheaterModal) {
    btnCloseModal.addEventListener('click', () => {
      projectTheaterModal.close();
    });

    projectTheaterModal.addEventListener('click', (e) => {
      const rect = projectTheaterModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        projectTheaterModal.close();
      }
    });
  }

  // ====================================================================
  // 11. ONE-CLICK EMAIL COPY & UTILITIES
  // ====================================================================

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', async () => {
      const email = '1khvled.dev@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast('✉ Email copied to clipboard!');
      } catch (err) {
        showToast('Email: 1khvled.dev@gmail.com');
      }
    });
  }

  const navLinks = document.querySelectorAll('.dock-item-btn[data-nav]');
  const trackedSections = ['showcase', 'models-matrix', 'vibe-playground'];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    trackedSections.forEach(secId => {
      const secEl = document.getElementById(secId);
      if (!secEl) return;
      const top = secEl.offsetTop;
      const height = secEl.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.nav === secId);
        });
      }
    });
  }, { passive: true });

  // ====================================================================
  // 12. INITIALIZATION ON DOM READY
  // ====================================================================

  document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    document.querySelectorAll('.specular-glint-surface').forEach(attachPhysicsToCard);
  });

})();
