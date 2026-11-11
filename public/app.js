/* ------------------------------------------------------------------
   1khvled — portfolio interactions
   Vanilla JavaScript. No dependencies, no trackers.
   ------------------------------------------------------------------ */

(function () {
  "use strict";

  var EMAIL = "1khvled.dev@gmail.com";

  /* ----------------------------------------------------------------
     Case study content
     ---------------------------------------------------------------- */

  var PROJECTS = {
    messistat: {
      title: "MessiStat",
      year: "2026",
      role: "Design & engineering",
      live: "https://www.messistat.com",
      repo: "https://github.com/1khvled/messi-stats",
      brief: "A complete statistical archive for Lionel Messi that stays accurate while the record keeps moving.",
      body: [
        "MessiStat covers career totals, season-by-season goal logs, competition hubs, milestone trackers and a Messi vs Ronaldo comparator. Every page is generated ahead of time from a single dataset, so the site has no backend and no runtime data fetching.",
        "The hard part is bookkeeping, not layout. Prebuild scripts reconcile totals across the site, regenerate the sitemap and share images, and fail the build when two pages disagree."
      ],
      points: [
        "Programmatic pages for seasons, competitions and opponents",
        "One data source with build-time consistency checks",
        "Static output with no database or API at runtime",
        "Mobile-first layout built for quick reads"
      ],
      stack: ["Vite", "JavaScript", "CSS", "Static data"],
      note: "Independent project. Not affiliated with Lionel Messi, any club or any league."
    },
    bytek: {
      title: "Bytek Store",
      year: "2026",
      role: "Design & engineering",
      live: "https://www.bytekstore.shop",
      repo: null,
      brief: "A real storefront for gaming peripherals in Algeria, priced in dinars and built for how people actually buy here.",
      body: [
        "Bytek sells gaming mice, keyboards and accessories across Algeria. The storefront handles variants, live stock, local pricing in dinars and a cash-on-delivery checkout — the way most of the market actually buys.",
        "Behind the shop window is an operations layer: a product catalogue with SEO fields, an image pipeline that generates hundreds of responsive derivatives at build time, and exports for Facebook and IndexNow."
      ],
      points: [
        "Product catalogue with variants, stock states and DZD pricing",
        "Checkout and order flow built around cash on delivery",
        "Build-time image derivatives for every product and breakpoint",
        "Restock radar, verified-defect refunds and new-arrival sorting",
        "SEO product pages plus Facebook catalogue and IndexNow feeds"
      ],
      stack: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
      note: "Source is private. Built and maintained for the store."
    },
    dzpartpicker: {
      title: "DZ-PartPicker",
      year: "2026",
      role: "Design & engineering",
      live: "https://pcbuilder-psi.vercel.app",
      repo: null,
      brief: "A PC builder that checks what fits before you buy, using prices from Algerian retailers.",
      body: [
        "DZ-PartPicker compares component prices across Algerian retailers and checks a build for compatibility before anything is bought: CPU socket, memory generation, PSU headroom, GPU length, cooler height and case clearance.",
        "Listings are ingested from retailer catalogues and reswept on a schedule. Stale products are pruned instead of lingering with old prices, and every build total is calculated in dinars."
      ],
      points: [
        "Compatibility engine spanning CPU, motherboard, memory, GPU, PSU and case",
        "Retailer ingestion with scheduled resweeps and stale-price pruning",
        "Build planner with local price totals",
        "Next.js App Router with Supabase as the data layer"
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "Cheerio"],
      note: "Source is private."
    },
    fpl: {
      title: "FPL Elite",
      year: "2026",
      role: "Design & engineering",
      live: "https://fplteams16.vercel.app",
      repo: null,
      brief: "A command centre for Fantasy Premier League managers who want the numbers, not the noise.",
      body: [
        "FPL Elite starts with your real team: enter the ID from your Fantasy Premier League URL and the dashboard loads your squad, bank and free transfers. Projections cover the next three gameweeks, with captain and bench decisions scored separately.",
        "Transfer what-ifs let you test a move before making it. Template share and differentials show where your team is generic, and where it is actually taking a risk."
      ],
      points: [
        "Team import from a public FPL ID",
        "Three-gameweek projections with captain and bench scoring",
        "What-if transfers, max XI and squad rating",
        "Template share, differentials and xP power rankings",
        "Matchday live, mini-leagues and fixture difficulty"
      ],
      stack: ["Next.js", "React", "TypeScript", "FPL API"],
      note: "Source is private. Uses the public Fantasy Premier League API."
    },
    aicapital: {
      title: "AI Capital Tracker",
      year: "2026",
      role: "Design & engineering",
      live: "https://aicapitaltracker.vercel.app",
      repo: "https://github.com/1khvled/ai-capital-tracker",
      brief: "A research desk for the AI build-out, with the method left visible.",
      body: [
        "AI Capital Tracker follows the physical build-out of AI: data-centre capex, corporate debt, credit spreads and venture funding. Those inputs feed a documented factor model that produces a 12-month contraction probability instead of a headline.",
        "Every number can be traced. The site exposes the transaction ledger, company profiles, market data and the method itself, including what the model does not claim to predict."
      ],
      points: [
        "Factor model with a versioned, public methodology",
        "Ledger of tracked AI-infrastructure spending and debt",
        "Sensitivity views rather than a single forecast",
        "Next.js front end with a Node data-refresh pipeline"
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      note: "Independent research project. Not investment advice."
    },
    square: {
      title: "Square DZ",
      year: "2026",
      role: "Design & engineering",
      live: "https://squarealgerie.com",
      repo: "https://github.com/1khvled/algeria-exchange-rates-api",
      brief: "Live parallel-market exchange rates for Algiers, published as data other developers can use.",
      body: [
        "Square DZ tracks the parallel market at Square Port-Saïd alongside official Banque d'Algérie rates: EUR, USD, GBP, CAD, USDT P2P and gold, with the spread between markets calculated automatically.",
        "The site is the consumer product. The platform is the API: TypeScript and Python SDKs published to npm and PyPI, plus a browser extension for quick conversions while shopping online."
      ],
      points: [
        "Rate ingestion, normalisation and daily snapshots",
        "Parallel vs official spread calculations",
        "TypeScript and Python SDKs on npm and PyPI",
        "Chrome extension for in-page conversion",
        "Arabic, French and English interfaces"
      ],
      stack: ["Next.js", "TypeScript", "Python", "Chrome extension"],
      note: "Market data belongs to Square DZ. The SDKs are MIT-licensed."
    },
    edn: {
      title: "EDN Référence",
      year: "2026",
      role: "Design & engineering",
      live: "https://edn-store.vercel.app",
      repo: "https://github.com/1khvled/edn-store",
      brief: "A storefront and study platform for French medical revision, built without a framework.",
      body: [
        "EDN Référence is a digital store and study platform for French medical students preparing the EDN and ECOS exams. It sells 28 referentials and bundles them with a QCM bank, methodology guides and free sample chapters.",
        "There is no framework and no CMS. The catalogue is generated from a single JSON file, and the reader, QCM module and checkout flow are hand-written so the site stays fast on a student laptop."
      ],
      points: [
        "Catalogue generated from one JSON data source",
        "Interactive QCM module with instant correction",
        "In-browser reader for PDF and Word extracts",
        "Free sample chapters and methodology guides",
        "Hand-written HTML, CSS and ES6 with no framework"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Static catalogue"],
      note: ""
    },
    opgg: {
      title: "Open OP.GG",
      year: "2026",
      role: "Design & engineering",
      live: null,
      repo: "https://github.com/1khvled/open-opgg",
      brief: "An ad-free, telemetry-free desktop companion for League of Legends.",
      body: [
        "Open OP.GG is a clean-room desktop companion for League of Legends: champion tier lists by role and rank, rune builds, counters, ARAM and Arena data, and a live overlay that reads the game client.",
        "It is built on Electron with a local data layer, so the app opens instantly and keeps working between patches. Rune pages can be exported and lobby actions automated through the League Client API."
      ],
      points: [
        "Champion tiers, builds, counters and mode-specific data",
        "Live Client Data API integration and in-game HUD",
        "Rune export and lobby automations through the LCU",
        "No ads, no telemetry, no third-party trackers",
        "Packaged as a Windows desktop app"
      ],
      stack: ["Electron", "JavaScript", "Node.js", "LCU API"],
      note: "Independent project. Not affiliated with OP.GG or Riot Games."
    }
  };

  /* ----------------------------------------------------------------
     Helpers
     ---------------------------------------------------------------- */

  function syncScrollLock() {
    var anyOpen = document.querySelector("dialog[open]");
    document.documentElement.classList.toggle("has-dialog", Boolean(anyOpen));
  }

  function externalLink(label, url) {
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label + " ";
    var mark = document.createElement("span");
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "\u2197";
    a.appendChild(mark);
    return a;
  }

  /* ----------------------------------------------------------------
     Local time in Algiers
     ---------------------------------------------------------------- */

  var clocks = Array.prototype.slice.call(document.querySelectorAll("[data-clock]"));
  var timeFormat = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Algiers",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  function tick() {
    var value = timeFormat.format(new Date());
    clocks.forEach(function (el) {
      el.textContent = value;
    });
  }

  if (clocks.length) {
    tick();
    window.setInterval(tick, 30000);
  }

  /* ----------------------------------------------------------------
     Copy email
     ---------------------------------------------------------------- */

  var copyButton = document.querySelector("[data-copy-email]");
  var copyStatus = document.querySelector("[data-copy-status]");
  var copyTimer = 0;

  function legacyCopy(text) {
    var helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.className = "clipboard-helper";
    document.body.appendChild(helper);
    helper.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    helper.remove();
    return ok;
  }

  function setCopyState(message) {
    if (copyStatus) {
      copyStatus.textContent = message;
    }
    if (copyButton) {
      copyButton.textContent = message === "Copied" ? "Copied" : "Copy address";
    }
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var done = function (ok) {
        setCopyState(ok ? "Copied" : EMAIL);
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(function () {
          setCopyState("");
        }, 2400);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(EMAIL).then(function () {
          done(true);
        }, function () {
          done(legacyCopy(EMAIL));
        });
      } else {
        done(legacyCopy(EMAIL));
      }
    });
  }

  /* ----------------------------------------------------------------
     Mobile menu
     ---------------------------------------------------------------- */

  var menu = document.getElementById("menu-dialog");
  var menuOpen = document.querySelector("[data-menu-open]");
  var menuClose = document.querySelector("[data-menu-close]");

  if (menu && menuOpen && typeof menu.showModal === "function") {
    menuOpen.addEventListener("click", function () {
      menu.showModal();
      menuOpen.setAttribute("aria-expanded", "true");
      syncScrollLock();
    });

    if (menuClose) {
      menuClose.addEventListener("click", function () {
        menu.close();
      });
    }

    menu.addEventListener("click", function (event) {
      if (event.target === menu) {
        menu.close();
      }
      if (event.target.closest("a")) {
        menu.close();
      }
    });

    menu.addEventListener("close", function () {
      menuOpen.setAttribute("aria-expanded", "false");
      syncScrollLock();
    });

    var wide = window.matchMedia("(min-width: 861px)");
    var closeOnWide = function (event) {
      if (event.matches && menu.open) {
        menu.close();
      }
    };
    if (wide.addEventListener) {
      wide.addEventListener("change", closeOnWide);
    } else if (wide.addListener) {
      wide.addListener(closeOnWide);
    }
  }

  /* ----------------------------------------------------------------
     Case study dialog
     ---------------------------------------------------------------- */

  var dialog = document.getElementById("case-dialog");

  if (dialog && typeof dialog.showModal === "function") {
    var fields = {
      year: dialog.querySelector("[data-case-year]"),
      role: dialog.querySelector("[data-case-role]"),
      title: dialog.querySelector("[data-case-title]"),
      brief: dialog.querySelector("[data-case-brief]"),
      copy: dialog.querySelector("[data-case-copy]"),
      stack: dialog.querySelector("[data-case-stack]"),
      links: dialog.querySelector("[data-case-links]"),
      note: dialog.querySelector("[data-case-note]")
    };
    var closeButton = dialog.querySelector("[data-case-close]");
    var lastTrigger = null;

    var fill = function (project) {
      fields.year.textContent = project.year;
      fields.role.textContent = project.role;
      fields.title.textContent = project.title;
      fields.brief.textContent = project.brief;

      fields.copy.replaceChildren();
      project.body.forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        fields.copy.appendChild(p);
      });

      if (project.points && project.points.length) {
        var ul = document.createElement("ul");
        project.points.forEach(function (text) {
          var li = document.createElement("li");
          li.textContent = text;
          ul.appendChild(li);
        });
        fields.copy.appendChild(ul);
      }

      fields.stack.replaceChildren();
      project.stack.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        fields.stack.appendChild(li);
      });

      fields.links.replaceChildren();
      if (project.live) {
        fields.links.appendChild(externalLink("Live site", project.live));
      }
      if (project.repo) {
        fields.links.appendChild(externalLink("Source on GitHub", project.repo));
      }
      if (!project.live && !project.repo) {
        var none = document.createElement("span");
        none.textContent = "No public link";
        fields.links.appendChild(none);
      }

      fields.note.textContent = project.note || "";
      fields.note.hidden = !project.note;
    };

    var openCase = function (id, updateHash) {
      var project = PROJECTS[id];
      if (!project) {
        return;
      }
      if (!dialog.open) {
        lastTrigger = document.activeElement;
      }
      fill(project);
      if (!dialog.open) {
        dialog.showModal();
      }
      syncScrollLock();
      if (updateHash && window.history.replaceState) {
        window.history.replaceState(null, "", "#case-" + id);
      }
      if (closeButton) {
        closeButton.focus();
      }
    };

    var closeCase = function () {
      if (dialog.open) {
        dialog.close();
      }
      if (window.location.hash.indexOf("#case-") === 0 && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    Array.prototype.forEach.call(document.querySelectorAll("[data-case]"), function (button) {
      button.addEventListener("click", function () {
        openCase(button.getAttribute("data-case"), true);
      });
    });

    if (closeButton) {
      closeButton.addEventListener("click", closeCase);
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        closeCase();
      }
    });

    dialog.addEventListener("close", function () {
      if (window.location.hash.indexOf("#case-") === 0 && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      syncScrollLock();
      if (lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    });

    var fromHash = function () {
      var match = window.location.hash.match(/^#case-([a-z]+)$/);
      if (match && PROJECTS[match[1]]) {
        openCase(match[1], false);
      } else if (dialog.open) {
        dialog.close();
      }
    };

    window.addEventListener("hashchange", fromHash);
    if (window.location.hash.indexOf("#case-") === 0) {
      fromHash();
    }
  }

  /* ----------------------------------------------------------------
     Active section in the header
     ---------------------------------------------------------------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".desk-nav a"));
  var sectionIds = ["work", "about", "contact"];
  var sections = sectionIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (navLinks.length && sections.length) {
    var activeFrame = 0;
    var setActive = function () {
      activeFrame = 0;
      var marker = window.scrollY + 150;
      var current = "";
      sections.forEach(function (section) {
        if (section.offsetTop <= marker) {
          current = section.id;
        }
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        current = "contact";
      }
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + current) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };
    var requestActive = function () {
      if (!activeFrame) {
        activeFrame = window.requestAnimationFrame(setActive);
      }
    };
    window.addEventListener("scroll", requestActive, { passive: true });
    window.addEventListener("resize", requestActive);
    setActive();
  }
})();
