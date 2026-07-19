const PROJECTS = [
  {
    name: "chrome-lens-search",
    category: "software",
    kind: "pypi library",
    tagline: "pip install chrome-lens-search",
    description:
      "Reverse-engineered the Google Lens product-search endpoint so you can search by image straight from the command line — no browser, no paid API. Feed it a photo and it returns exact product titles with links to the merchants selling them (Nike, StockX, GOAT, and the rest). It talks to Lens over plain HTTP the same way Chromium does under the hood, so it's fast and barely has any dependencies. I built it for reselling: when I'm sourcing I can shoot a sneaker or item, instantly see what it is and where it's listed, and check comps without typing a single search.",
    tags: ["Python", "Reverse Engineering", "PyPI", "Selenium"],
    repo: "darcodev/chrome-lens-search",
    stars: 4,
    icon: "lens",
    links: [
      { label: "GitHub", url: "https://github.com/darcodev/chrome-lens-search", icon: "github" },
      { label: "PyPI", url: "https://pypi.org/project/chrome-lens-search/", icon: "package" },
    ],
  },
  {
    name: "email-cleaner",
    category: "software",
    kind: "cli tool",
    tagline: "pipx install email-cleaner",
    description:
      "A zero-dependency CLI that bulk-cleans promotional email straight over IMAP — Gmail, Outlook, iCloud, and Yahoo. It scans the inbox, groups the marketing and newsletter clutter by sender, and shows a preview before anything is touched — nothing gets deleted without your say-so. Reselling means signing up at a lot of stores and marketplaces, so my inbox fills fast with drops, promos, and receipts; this clears the noise in one pass instead of unsubscribing one by one. It runs on nothing but Python's standard library, so there's nothing extra to install.",
    tags: ["Python", "IMAP", "CLI", "Zero Deps"],
    repo: "darcodev/email-cleaner",
    stars: 4,
    icon: "mail",
    links: [
      { label: "GitHub", url: "https://github.com/darcodev/email-cleaner", icon: "github" },
    ],
  },
  {
    name: "lcd-temp-alarm",
    category: "hardware",
    kind: "hardware build",
    tagline: "arduino uno · 16×2 lcd · °f",
    description:
      "An Arduino Uno reads the ambient temperature and shows it live on a 16×2 LCD in °F. Cross the set limit and the screen flips to a Temp Limit! warning and lights the alarm LED. I built it for my car detailing business — in summer heat, detailing chemicals dry too fast and lose their effect, so I check whether a panel is cool enough to work before I start. In the demo the limit is 87°F (set it to whatever you want): I warm the sensor with my finger to trip the alarm, then let go and it settles back under the line.",
    tags: ["Arduino", "C++", "LCD", "Sensor"],
    icon: "thermometer",
    cover: "assets/projects/lcd-temp-alarm/cover.webp",
    media: [
      { type: "image", src: "assets/projects/lcd-temp-alarm/01.webp", alt: "LCD showing the Temp Limit! alarm at 87.4°F" },
      { type: "image", src: "assets/projects/lcd-temp-alarm/02.webp", alt: "LCD showing the live temperature, 88.3°F" },
      { type: "youtube", id: "zYIsCFyWwkE", title: "LCD temp alarm — demo", aspect: "portrait" },
    ],
  },
  {
    name: "memory-speed-game",
    category: "hardware",
    kind: "hardware build",
    tagline: "arduino · leds · buttons",
    description:
      "A two-player reaction game on a breadboard. Green then yellow LEDs count down a second apart, then the red one holds for a random 1–5 seconds, buzzer beeping through it. The moment the red LED goes dark, the two white side LEDs light up — first player to hit their button wins, and the buzzer calls it.",
    tags: ["Arduino", "C++", "LEDs", "Buttons"],
    icon: "gamepad",
    cover: "assets/projects/memory-speed-game/cover.webp",
    media: [
      { type: "youtube", id: "ORqZgaVXeKQ", title: "Memory speed game — demo", aspect: "portrait" },
    ],
    links: [
      { label: "inspired by Robonyx", url: "https://www.youtube.com/@Robonyx", icon: "external" },
    ],
  },
];

const ICONS = {
  lens: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><circle cx="11" cy="11" r="2.5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  chip: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  package: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>',
  external: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.36L18.18 20 12 16.56 5.82 20l1.43-6.37L2.5 9.27l6.6-1.01z"/></svg>',
  thermometer: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>',
  image: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="m21 15-5-5L5 21"/></svg>',
  expand: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
};

const grid = document.getElementById("project-grid");
const emptyState = document.getElementById("empty-state");
const filterStatus = document.getElementById("filter-status");

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function renderProjects(filter = "all") {
  const items = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  if (observer) {
    grid.querySelectorAll(".reveal").forEach((el) => observer.unobserve(el));
  }

  grid.innerHTML = items
    .map((p, i) => {
      const tags = p.tags ?? [];
      const links = p.links ?? [];
      const media = p.media ?? [];
      const photoCount = media.filter((m) => m.type === "image").length;
      const hasVideo = media.some((m) => m.type === "youtube");
      let badge = "gallery";
      let badgeIcon = ICONS.expand;
      if (photoCount && hasVideo) badge = `${photoCount} photos · video`;
      else if (photoCount) badge = `${photoCount} photo${photoCount === 1 ? "" : "s"}`;
      else if (hasVideo) { badge = "watch demo"; badgeIcon = ICONS.play; }

      const header = p.cover
        ? `<button class="card-media" type="button" data-media-idx="${i}" aria-label="${esc(`Open ${hasVideo && !photoCount ? "demo video" : "photo and video gallery"} for ${p.name}`)}">
        <img src="${esc(p.cover)}" alt="" loading="lazy" decoding="async" />
        <span class="card-media-fallback" aria-hidden="true">${ICONS.image}<span>photos coming soon</span></span>
        <span class="card-media-badge">${badgeIcon}<span>${esc(badge)}</span></span>
      </button>`
        : `<div class="card-top">
        <div class="card-icon">${ICONS[p.icon] || ICONS.chip}</div>
        ${
          p.repo
            ? `<span class="card-stars" title="GitHub stars" aria-label="${esc(p.stars ?? 0)} GitHub stars">${ICONS.star}<span data-stars aria-hidden="true">${esc(p.stars ?? "–")}</span></span>`
            : ""
        }
      </div>`;

      return `
    <article class="card reveal${p.cover ? " card--media" : ""}" data-category="${esc(p.category)}" style="--stagger:${i * 60}ms" ${p.repo ? `data-repo="${esc(p.repo)}"` : ""}>
      ${header}
      <div>
        ${p.kind ? `<p class="card-kind">${esc(p.kind)}</p>` : ""}
        <h3>${esc(p.name)}</h3>
        <p class="card-tagline">${esc(p.tagline ?? "")}</p>
      </div>
      <p class="card-desc">${esc(p.description ?? "")}</p>
      <ul class="card-tags">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      ${
        links.length
          ? `<div class="card-links">
        ${links
          .map(
            (l) =>
              `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(`${p.name} on ${l.label} (opens in new tab)`)}">${ICONS[l.icon] || ICONS.external}${esc(l.label)}</a>`
          )
          .join("")}
        <span class="card-updated" data-updated hidden></span>
      </div>`
          : ""
      }
    </article>`;
    })
    .join("");

  grid.querySelectorAll(".card-media").forEach((btn) => {
    const proj = items[Number(btn.dataset.mediaIdx)];
    const img = btn.querySelector("img");
    if (img) {
      if (img.complete && img.naturalWidth === 0) btn.classList.add("is-broken");
      img.addEventListener("error", () => btn.classList.add("is-broken"));
      img.addEventListener("load", () => btn.classList.remove("is-broken"));
    }
    btn.addEventListener("click", () => openLightbox(proj?.media ?? [], 0, btn));
  });

  emptyState.hidden = items.length !== 0;

  if (filterStatus) {
    filterStatus.textContent =
      items.length === 0
        ? "No projects in this category yet — write-ups in progress."
        : `${items.length} project${items.length === 1 ? "" : "s"} shown.`;
  }

  applyStars();
  observeReveals(grid.querySelectorAll(".reveal"));
  requestAnimationFrame(() =>
    grid.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      }
    })
  );
}

const chips = document.querySelectorAll(".chip");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      c.classList.toggle("is-active", c === chip);
      c.setAttribute("aria-pressed", String(c === chip));
    });
    renderProjects(chip.dataset.filter);
  });
});

let starCache = null;

async function fetchStars() {
  try {
    const res = await fetch(
      "https://api.github.com/users/darcodev/repos?per_page=100"
    );
    if (!res.ok) return;
    const repos = await res.json();
    starCache = Object.fromEntries(
      repos.map((r) => [
        r.full_name,
        { stars: r.stargazers_count, pushed: r.pushed_at },
      ])
    );

    applyStars();
  } catch {}
}

function relativeTime(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "updated today";
  if (days < 30) return `updated ${days}d ago`;
  if (days < 365) return `updated ${Math.floor(days / 30)}mo ago`;
  return `updated ${Math.floor(days / 365)}y ago`;
}

function applyStars() {
  if (!starCache) return;
  document.querySelectorAll("[data-repo]").forEach((card) => {
    const info = starCache[card.dataset.repo];
    if (info === undefined) return;
    const el = card.querySelector("[data-stars]");
    if (el) el.textContent = info.stars;
    const wrap = card.querySelector(".card-stars");
    if (wrap) wrap.setAttribute("aria-label", `${info.stars} GitHub stars`);
    const upd = card.querySelector("[data-updated]");
    if (upd && info.pushed) {
      upd.textContent = relativeTime(info.pushed);
      upd.hidden = false;
    }
  });
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const observer = prefersReducedMotion
  ? null
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

function observeReveals(nodes) {
  if (!observer) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  nodes.forEach((el) => observer.observe(el));
}

function initTyping() {
  const typed = document.querySelector(".role-typed");
  if (!typed || prefersReducedMotion) return;

  const finalHTML = typed.innerHTML;
  const text = typed.textContent;
  const textNode = document.createTextNode("");
  const cursor = document.createElement("span");
  cursor.className = "type-cursor";
  typed.textContent = "";
  typed.append(textNode, cursor);

  let i = 0;
  const speed = 38;
  (function tick() {
    i++;
    if (i <= text.length) {
      textNode.data = text.slice(0, i);
      setTimeout(tick, speed);
    } else {
      typed.innerHTML = finalHTML;
    }
  })();
}

function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w = 0;
  let h = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(window.innerWidth * dpr);
    h = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(
      150,
      Math.floor((window.innerWidth * window.innerHeight) / 11000)
    );
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.3 + 0.4) * dpr,
      vx: (Math.random() - 0.5) * 0.08 * dpr,
      vy: (Math.random() - 0.5) * 0.08 * dpr,
      green: Math.random() < 0.3,
      tw: Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);

    const linkDist = 90 * dpr;
    ctx.lineWidth = dpr * 0.5;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const d = Math.hypot(dx, dy);
        if (d < linkDist) {
          ctx.globalAlpha = 0.05 * (1 - d / linkDist);
          ctx.strokeStyle = "#00FF41";
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }

    for (const s of stars) {
      ctx.globalAlpha = 0.3 + 0.25 * Math.sin(t / 1400 + s.tw);
      ctx.fillStyle = s.green ? "#4AF626" : "#E0E0E0";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function frame(t) {
    for (const s of stars) {
      s.x = (s.x + s.vx + w) % w;
      s.y = (s.y + s.vy + h) % h;
    }
    draw(t);
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", () => {
    resize();
    if (prefersReducedMotion) draw(0);
  });

  if (prefersReducedMotion) {
    draw(0);
  } else {
    requestAnimationFrame(frame);
  }
}

/* lightbox: photos + youtube demo */
const lb = {
  root: document.getElementById("lightbox"),
  stage: document.getElementById("lb-stage"),
  thumbs: document.getElementById("lb-thumbs"),
  counter: document.getElementById("lb-counter"),
  media: [],
  index: 0,
  trigger: null,
};

const ytThumb = (id) => `https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg`;

function lbSlideHTML(m) {
  if (m.type === "youtube") {
    const portrait = m.aspect === "portrait" ? " lb-video--portrait" : "";
    // youtube won't embed from a file:// page (Error 153), so use a click-through
    // poster. the inline iframe works once it's served over http/https.
    const httpOrigin =
      location.protocol === "http:" || location.protocol === "https:";
    if (!httpOrigin) {
      const thumb = `https://i.ytimg.com/vi/${esc(m.id)}/hqdefault.jpg`;
      return `<a class="lb-video lb-ytposter${portrait}" href="https://www.youtube.com/watch?v=${esc(m.id)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(`Watch ${m.title || "demo"} on YouTube (opens in new tab)`)}">
        <img src="${thumb}" alt="" loading="lazy" />
        <span class="lb-ytposter-btn">${ICONS.play}<span>Watch on YouTube</span></span>
      </a>`;
    }
    return `<div class="lb-video${portrait}"><iframe
        src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?autoplay=1&rel=0&modestbranding=1"
        title="${esc(m.title || "demo video")}"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen loading="lazy"></iframe></div>`;
  }
  return `<img class="lb-img" src="${esc(m.src)}" alt="${esc(m.alt || "")}" />`;
}

function lbRender() {
  if (!lb.root) return;
  const m = lb.media[lb.index];
  lb.stage.innerHTML = m ? lbSlideHTML(m) : "";
  if (lb.counter) lb.counter.textContent = `${lb.index + 1} / ${lb.media.length}`;
  lb.thumbs.querySelectorAll("button").forEach((b, i) => {
    const active = i === lb.index;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-current", active ? "true" : "false");
  });
}

function lbGo(i) {
  const n = lb.media.length;
  if (!n) return;
  lb.index = (i + n) % n;
  lbRender();
}

function openLightbox(media, start, trigger) {
  if (!lb.root || !media || !media.length) return;
  lb.media = media;
  lb.index = start || 0;
  lb.trigger = trigger || null;

  lb.thumbs.innerHTML = media
    .map((m, i) => {
      const isVid = m.type === "youtube";
      const src = isVid ? ytThumb(m.id) : m.src;
      return `<button type="button" data-lb-thumb="${i}" aria-label="${esc(
        `Show ${isVid ? "video" : "photo"} ${i + 1}`
      )}"><img src="${esc(src)}" alt="" loading="lazy" />${
        isVid ? `<span class="lb-thumb-play" aria-hidden="true">${ICONS.play}</span>` : ""
      }</button>`;
    })
    .join("");

  lb.root.classList.toggle("is-single", media.length < 2);
  lb.root.hidden = false;
  document.body.classList.add("lb-open");
  lbRender();
  requestAnimationFrame(() => {
    lb.root.classList.add("is-open");
    const closeBtn = lb.root.querySelector(".lb-close");
    if (closeBtn) closeBtn.focus();
  });
}

function closeLightbox() {
  if (!lb.root || lb.root.hidden) return;
  lb.root.classList.remove("is-open");
  document.body.classList.remove("lb-open");
  lb.stage.innerHTML = ""; // stops any playing video
  window.setTimeout(() => {
    if (!lb.root.classList.contains("is-open")) lb.root.hidden = true;
  }, 200);
  if (lb.trigger && typeof lb.trigger.focus === "function") lb.trigger.focus();
}

function trapTab(e) {
  const list = Array.from(
    lb.root.querySelectorAll('button, [href], iframe, [tabindex]:not([tabindex="-1"])')
  ).filter((el) => el.tagName === "IFRAME" || el.offsetParent !== null);
  if (!list.length) return;
  const first = list[0];
  const last = list[list.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function initLightbox() {
  if (!lb.root) return;
  lb.root.addEventListener("click", (e) => {
    if (e.target.closest("[data-lb-close]")) return closeLightbox();
    if (e.target.closest("[data-lb-prev]")) return lbGo(lb.index - 1);
    if (e.target.closest("[data-lb-next]")) return lbGo(lb.index + 1);
    const thumb = e.target.closest("[data-lb-thumb]");
    if (thumb) return lbGo(Number(thumb.dataset.lbThumb));
  });
  document.addEventListener("keydown", (e) => {
    if (lb.root.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lbGo(lb.index + 1);
    else if (e.key === "ArrowLeft") lbGo(lb.index - 1);
    else if (e.key === "Tab") trapTab(e);
  });
}

initStarfield();
initTyping();
initLightbox();
observeReveals(document.querySelectorAll(".reveal"));
renderProjects();
fetchStars();
document.getElementById("year").textContent = new Date().getFullYear();
