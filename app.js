/**
 * 1KHVLED // VIBE CODER & CREATIVE DESIGNER
 * Optical Glassmorphism UI Engine & Interactive Stage Controller
 */

(() => {
  'use strict';

  // ====================================================================
  // 1. DATA REGISTRIES (REAL LOGOS, SNAPSHOTS, DESIGNS)
  // ====================================================================

  const PROJECTS_DATA = [
    {
      id: 'messistats',
      name: 'MessiStats',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'Sports Analytics',
      status: '200 OK Live',
      logo: 'public/logos/messistats-logo.png',
      logoFallback: 'public/logos/messistats.svg',
      snapshot: 'public/projects/messistats-snap.png',
      liveUrl: 'https://messistats.site',
      repoUrl: 'https://github.com/1khvled/messistats',
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
      logo: 'public/logos/ronaldostats-logo.png',
      logoFallback: 'public/logos/ronaldostats.svg',
      snapshot: 'public/projects/ronaldostats-snap.png',
      liveUrl: 'https://ronaldomstats-app-no-tme.vercel.app',
      repoUrl: 'https://github.com/1khvled/ronaldostats',
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
      id: 'dz-partpicker',
      name: 'DZ-PartPicker',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'E-Commerce & Configurator',
      status: '200 OK Live',
      logo: 'public/logos/dz-partpicker-logo.png',
      snapshot: 'public/projects/dzpartpicker-snap.png',
      liveUrl: 'https://dzpartpicker.com',
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
      logo: 'public/logos/opgg-logo.svg',
      snapshot: 'public/projects/macroproptrader-snap.png',
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
      id: 'ai-capital',
      name: 'AI Capital Tracker',
      category: 'quant-trading',
      categoryLabel: 'Quant & Trading',
      tag: 'VC Intelligence',
      status: 'Production Live',
      logo: 'public/logos/square-algerie-logo.png',
      snapshot: 'public/projects/aicapitaltracker-snap.png',
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
      logo: 'public/logos/square-algerie-logo.png',
      snapshot: 'public/projects/squarealgerie-snap.png',
      liveUrl: 'https://squarealgerie.com',
      repoUrl: 'https://github.com/1khvled/square-rates',
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
      id: 'bytek',
      name: 'Bytek Gaming Store & 3D Motion',
      category: 'web-apps',
      categoryLabel: 'Web Apps & Portals',
      tag: 'E-Commerce & 3D Motion',
      status: 'Commercial Live',
      logo: 'public/logos/bytek-logo.png',
      snapshot: 'public/projects/ednstore-snap.png',
      liveUrl: 'https://bytekstore.com',
      repoUrl: 'https://github.com/1khvled/bytek-motion-ad',
      description: 'Custom gaming hardware storefront and cinematic 3D motion advertisement suite crafted for elite peripherals (Attack Shark, AJAZZ, MAD60).',
      widgetType: 'motion-switch',
      widgetData: {
        label: 'Motion Suite',
        value: '4K 60FPS · 3D Product Choreography',
        altValue: 'Camera Tracks · Dynamic Lighting',
        btnText: 'View in Theater Stage'
      },
      metrics: [
        'Custom 3D Product Renders',
        'Rapid-Trigger HE Magnetic Peripherals',
        'Fluid Responsive Storefront',
        'Cinematic Video Ad Pipeline'
      ]
    },
    {
      id: 'open-opgg',
      name: 'Open OP.GG Desktop',
      category: 'automations',
      categoryLabel: 'Automations & Bots',
      tag: 'Desktop Client & Automation',
      status: 'Open Source',
      logo: 'public/logos/opgg-logo.svg',
      snapshot: 'public/projects/medqcm-snap.png',
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
      logo: 'public/logos/aliexpress-coin-logo.png',
      snapshot: 'public/projects/ednstore-snap.png',
      liveUrl: 'https://github.com/1khvled/aliexpress-coins-bot',
      repoUrl: 'https://github.com/1khvled/aliexpress-coins-bot',
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

  const DESIGNS_DATA = [
    {
      id: 'attack-shark-x3',
      title: 'Attack Shark X3',
      sub: 'Ultra-lightweight 49g wireless gaming mouse with PixArt 3395 optical sensor.',
      image: 'public/designs/attack-shark-x3.png'
    },
    {
      id: 'hyperx-cloud-3',
      title: 'HyperX Cloud III',
      sub: 'Cinematic studio 3D render of white & pink tournament headset.',
      image: 'public/designs/hyperx-cloud-3.png'
    },
    {
      id: 'mad60-keyboard',
      title: 'MAD60 Keyboard',
      sub: '60% rapid-trigger magnetic switch keyboard with custom keycaps and RGB underglow.',
      image: 'public/designs/mad60-keyboard.png'
    },
    {
      id: 'ajazz-aj179',
      title: 'AJAZZ AJ179 Apex',
      sub: 'Wireless gaming mouse featuring built-in OLED color display and 8K polling receiver.',
      image: 'public/designs/ajazz-aj179.png'
    },
    {
      id: 'attack-shark-x68-he',
      title: 'Attack Shark X68 HE',
      sub: 'Hall Effect magnetic rapid-trigger keyboard engineered for sub-millimeter actuation.',
      image: 'public/designs/attack-shark-x68-he.png'
    },
    {
      id: 'atk-a9-plus',
      title: 'ATK A9 Plus',
      sub: 'Ergonomic high-speed wireless mouse tailored for competitive esports play.',
      image: 'public/designs/atk-a9-plus.png'
    }
  ];

  // ====================================================================
  // 2. DOM ELEMENTS & CACHED REFERENCES
  // ====================================================================

  const projectsGrid = document.getElementById('projectsGrid');
  const designsGrid = document.getElementById('designsGrid');
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

  // Video & Motion Theater
  const motionViewport = document.getElementById('motionViewport');
  const theaterVideo = document.getElementById('theaterVideo');
  const theaterTitle = document.getElementById('theaterTitle');
  const theaterSub = document.getElementById('theaterSub');
  const theaterPlaybackBar = document.getElementById('theaterPlaybackBar');
  const btnTheaterPlay = document.getElementById('btnTheaterPlay');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const scrubberTrack = document.getElementById('scrubberTrack');
  const scrubberFill = document.getElementById('scrubberFill');
  const theaterTimecode = document.getElementById('theaterTimecode');
  const btnTheaterMute = document.getElementById('btnTheaterMute');
  const unmutedIcon = document.getElementById('unmutedIcon');
  const mutedIcon = document.getElementById('mutedIcon');
  const moodboardCanvas = document.getElementById('moodboardCanvas');
  const carousel3dStage = document.getElementById('carousel3dStage');
  const carouselTrack = document.getElementById('carouselTrack');
  const btnCarouselPrev = document.getElementById('btnCarouselPrev');
  const btnCarouselNext = document.getElementById('btnCarouselNext');
  const modeSwitchButtons = document.querySelectorAll('.mode-switch-btn');

  // Active State
  let currentFilter = 'all';
  let currentMode = 'stage'; // 'stage' | 'moodboard' | 'carousel'
  let carouselIndex = 0;
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

    // Highlight active mood tile
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

  // Cycle vibe button in dock
  if (dockVibeToggle) {
    dockVibeToggle.addEventListener('click', () => {
      const nextIdx = (VIBE_PALETTES.indexOf(currentVibe) + 1) % VIBE_PALETTES.length;
      const nextVibe = VIBE_PALETTES[nextIdx];
      applyVibe(nextVibe);
      showToast(`Palette switched to ${nextVibe.toUpperCase()}`);
    });
  }

  // Bento mood tiles
  if (vibeMoodButtons) {
    vibeMoodButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-mood-tile');
      if (!btn) return;
      const vibe = btn.dataset.vibe;
      applyVibe(vibe);
      showToast(`Active refraction: ${vibe.toUpperCase()}`);
    });
  }

  // Initial vibe
  applyVibe(currentVibe);

  // ====================================================================
  // 5. CURSOR-TRACKED SPECULAR GLINT & 3D TILT PHYSICS
  // ====================================================================

  function attachPhysicsToCard(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Cursor-tracked glint variables
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle 3D perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

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

      // Micro widget markup
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
        <!-- Inner Media Stage: 16px Radius, Concentric to Outer 24px -->
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
            onerror="this.src='public/designs/attack-shark-x68-he.png'">
        </div>

        <!-- Card Body Content -->
        <div class="card-body-content">
          <div class="card-header-row">
            <div class="card-logo-wrap">
              <img
                src="${project.logo}"
                alt="${project.name} Logo"
                class="card-brand-logo"
                onerror="this.src='${project.logoFallback || 'public/logos/opgg-logo.svg'}'">
              <div>
                <h3 class="card-title">${project.name}</h3>
                <span class="card-category-tag">${project.categoryLabel}</span>
              </div>
            </div>
          </div>

          <p class="card-description">${project.description}</p>

          ${widgetHtml}

          <!-- Footer Actions -->
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
      // Inspect craft button or snapshot click
      const inspectBtn = e.target.closest('[data-action="inspect"]');
      if (inspectBtn) {
        const id = inspectBtn.dataset.id;
        openProjectModal(id);
        return;
      }

      // Micro-widget interactive actions
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
        // Find matching project
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
          // If filtered out, reset filter first
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
  // 9. AI MOTION GRAPHICS & 3D PRESENTATION STAGE (3 MODES)
  // ====================================================================

  // Render 3D Design gallery thumbnails
  function renderDesigns() {
    if (!designsGrid) return;
    designsGrid.innerHTML = '';

    DESIGNS_DATA.forEach(design => {
      const thumb = document.createElement('div');
      thumb.className = 'design-thumb-card specular-glint-surface';
      thumb.dataset.id = design.id;
      thumb.innerHTML = `
        <div class="design-thumb-inner">
          <img src="${design.image}" alt="${design.title}" class="design-thumb-img" loading="lazy">
        </div>
        <div class="design-thumb-caption">${design.title}</div>
      `;

      thumb.addEventListener('click', () => {
        selectDesignForStage(design);
      });

      attachPhysicsToCard(thumb);
      designsGrid.appendChild(thumb);
    });
  }

  function selectDesignForStage(design) {
    if (theaterTitle) theaterTitle.textContent = `${design.title} — 3D Studio Showcase`;
    if (theaterSub) theaterSub.textContent = design.sub;

    // Switch to Stage mode if not active
    switchPresentationMode('stage');

    // Pause video, set poster or display design image
    if (theaterVideo) {
      theaterVideo.pause();
      theaterVideo.poster = design.image;
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
    }

    showToast(`Loaded ${design.title} into stage viewport`);
    const stageEl = document.getElementById('motion-design');
    if (stageEl) stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Switch between the 3 Modes
  function switchPresentationMode(mode) {
    currentMode = mode;
    modeSwitchButtons.forEach(btn => {
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (theaterVideo) theaterVideo.style.display = (mode === 'stage') ? 'block' : 'none';
    if (theaterPlaybackBar) theaterPlaybackBar.style.display = (mode === 'stage') ? 'flex' : 'none';
    if (moodboardCanvas) moodboardCanvas.style.display = (mode === 'moodboard') ? 'block' : 'none';
    if (carousel3dStage) carousel3dStage.style.display = (mode === 'carousel') ? 'flex' : 'none';

    if (mode === 'stage') {
      if (theaterTitle) theaterTitle.textContent = 'Bytek Motion Ad — 3D Product Commercial';
      if (theaterSub) theaterSub.textContent = 'Cinematic camera choreography, dynamic product spotlight, and motion branding.';
    } else if (mode === 'moodboard') {
      if (theaterTitle) theaterTitle.textContent = 'Interactive 3D Moodboard Canvas';
      if (theaterSub) theaterSub.textContent = 'Freeform tactile light table. Click and drag items anywhere across the canvas.';
      initMoodboardDragging();
    } else if (mode === 'carousel') {
      if (theaterTitle) theaterTitle.textContent = 'Spatial 3D Perspective Coverflow';
      if (theaterSub) theaterSub.textContent = 'Hardware acceleration perspective stage. Click next/prev to orbit items.';
      update3DCarousel();
    }
  }

  modeSwitchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchPresentationMode(btn.dataset.mode);
    });
  });

  // Video Scrubber & Playback Controls
  if (btnTheaterPlay && theaterVideo) {
    btnTheaterPlay.addEventListener('click', () => {
      if (theaterVideo.paused) {
        theaterVideo.play();
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        theaterVideo.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    });

    theaterVideo.addEventListener('timeupdate', () => {
      if (!theaterVideo.duration) return;
      const progress = (theaterVideo.currentTime / theaterVideo.duration) * 100;
      if (scrubberFill) scrubberFill.style.width = `${progress}%`;

      const curM = Math.floor(theaterVideo.currentTime / 60);
      const curS = Math.floor(theaterVideo.currentTime % 60).toString().padStart(2, '0');
      const durM = Math.floor(theaterVideo.duration / 60) || 0;
      const durS = Math.floor(theaterVideo.duration % 60 || 0).toString().padStart(2, '0');
      if (theaterTimecode) theaterTimecode.textContent = `${curM}:${curS} / ${durM}:${durS}`;
    });

    if (scrubberTrack) {
      scrubberTrack.addEventListener('click', (e) => {
        const rect = scrubberTrack.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) / rect.width;
        theaterVideo.currentTime = clickPos * theaterVideo.duration;
      });
    }

    if (btnTheaterMute) {
      btnTheaterMute.addEventListener('click', () => {
        theaterVideo.muted = !theaterVideo.muted;
        if (theaterVideo.muted) {
          if (unmutedIcon) unmutedIcon.style.display = 'none';
          if (mutedIcon) mutedIcon.style.display = 'block';
          showToast('Audio muted');
        } else {
          if (unmutedIcon) unmutedIcon.style.display = 'block';
          if (mutedIcon) mutedIcon.style.display = 'none';
          showToast('Audio unmuted');
        }
      });
    }
  }

  // Mode 2: Draggable Moodboard Logic
  let moodboardInitialized = false;
  function initMoodboardDragging() {
    if (moodboardInitialized || !moodboardCanvas) return;
    moodboardInitialized = true;

    const items = moodboardCanvas.querySelectorAll('.moodboard-item');
    items.forEach(item => {
      let isDragging = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;

      const onPointerDown = (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = item.offsetLeft;
        initialTop = item.offsetTop;
        item.style.zIndex = '100';
        item.setPointerCapture(e.pointerId);
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        item.style.left = `${initialLeft + dx}px`;
        item.style.top = `${initialTop + dy}px`;
      };

      const onPointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        item.style.zIndex = '10';
        item.releasePointerCapture(e.pointerId);
      };

      item.addEventListener('pointerdown', onPointerDown);
      item.addEventListener('pointermove', onPointerMove);
      item.addEventListener('pointerup', onPointerUp);
      item.addEventListener('pointercancel', onPointerUp);
    });
  }

  // Mode 3: 3D Perspective Carousel Logic
  function build3DCarousel() {
    if (!carouselTrack) return;
    carouselTrack.innerHTML = '';

    DESIGNS_DATA.forEach((design, i) => {
      const card = document.createElement('div');
      card.className = 'carousel-card specular-glint-surface';
      card.dataset.index = i;
      card.innerHTML = `
        <img src="${design.image}" alt="${design.title}">
        <div class="carousel-card-title">${design.title}</div>
      `;
      carouselTrack.appendChild(card);
    });
  }

  function update3DCarousel() {
    const cards = carouselTrack.querySelectorAll('.carousel-card');
    const total = cards.length;
    if (total === 0) return;

    cards.forEach((card, i) => {
      const offset = (i - carouselIndex + total) % total;
      // Compute 3D circular positioning
      if (offset === 0) {
        card.style.transform = 'translate3d(0, 0, 0) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '30';
      } else if (offset === 1) {
        card.style.transform = 'translate3d(180px, 0, -120px) rotateY(-25deg) scale(0.85)';
        card.style.opacity = '0.7';
        card.style.zIndex = '20';
      } else if (offset === total - 1) {
        card.style.transform = 'translate3d(-180px, 0, -120px) rotateY(25deg) scale(0.85)';
        card.style.opacity = '0.7';
        card.style.zIndex = '20';
      } else {
        card.style.transform = 'translate3d(0, 0, -250px) scale(0.6)';
        card.style.opacity = '0';
        card.style.zIndex = '10';
      }
    });
  }

  if (btnCarouselPrev) {
    btnCarouselPrev.addEventListener('click', () => {
      const total = DESIGNS_DATA.length;
      carouselIndex = (carouselIndex - 1 + total) % total;
      update3DCarousel();
    });
  }

  if (btnCarouselNext) {
    btnCarouselNext.addEventListener('click', () => {
      const total = DESIGNS_DATA.length;
      carouselIndex = (carouselIndex + 1) % total;
      update3DCarousel();
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

    // Close when clicking modal backdrop
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

  // Active Nav Link Spy on Scroll
  const navLinks = document.querySelectorAll('.dock-item-btn[data-nav]');
  const trackedSections = ['showcase', 'motion-design', 'vibe-playground'];

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
    renderDesigns();
    build3DCarousel();
    update3DCarousel();

    // Attach glint physics to initial static cards
    document.querySelectorAll('.specular-glint-surface').forEach(attachPhysicsToCard);
  });

})();
