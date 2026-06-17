
// Inline header/footer + interactions

const LOGO = "https://id-preview--cb68a18b-432e-4e56-81ee-a3fb90b17c57.lovable.app/__l5e/assets-v1/54765de3-7904-435f-9f9c-ee464a0096fe/ideneumo-logo.png";
const NAV = [
  { label: "Platform", to: "platform.html", caret: true },
  { label: "Solutions", to: "solutions.html", caret: true },
  { label: "Why Ideneumo", to: "why.html" },
  { label: "Resources", to: "resources.html", caret: true },
  { label: "Contact", to: "contact.html" },
];

function ico(name, cls="") {
  return `<i data-lucide="${name}" class="${cls}"></i>`;
}

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const here = (location.pathname.split("/").pop() || "index.html");
  const navLinks = NAV.slice(0,4).map(n => `
    <a href="${n.to}" class="${here===n.to?'active':''}">${n.label}${n.caret?ico('chevron-down','h-3 w-3 opacity-60'):''}</a>
  `).join("");
  const mobileLinks = NAV.map(n => `<a href="${n.to}">${n.label}</a>`).join("");

  host.className = "site-header";
  host.innerHTML = `
    <div class="container-x">
      <div class="bar">
        <a href="index.html" style="display:flex;align-items:center;">
          <img src="${LOGO}" alt="Ideneumo" style="height:40px;width:auto;user-select:none;" />
        </a>
        <nav class="main" style="display:flex;align-items:center;gap:.25rem;">
          ${navLinks}
          <a href="contact.html">Pricing</a>
        </nav>
        <div style="display:flex;align-items:center;gap:.5rem;">
          <a href="contact.html" class="sign-in" style="font-size:.875rem;font-weight:500;padding:.5rem 1rem;color:rgba(17,19,24,.8);text-decoration:none;">Sign in</a>
          <a href="contact.html" class="btn-primary demo" style="height:44px;padding-inline:1.25rem;font-size:.875rem;">Book a demo ${ico('arrow-up-right','h-4 w-4')}</a>
          <button class="mobile-toggle" id="mob-toggle" aria-label="Menu">${ico('menu','h-5 w-5')}</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        ${mobileLinks}
        <a href="contact.html" class="btn-primary" style="width:100%;margin-top:.5rem;">Book a demo</a>
      </div>
    </div>
  `;

  // Scroll
  const onScroll = () => host.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const tog = document.getElementById("mob-toggle");
  const mob = document.getElementById("mobile-menu");
  tog.addEventListener("click", () => mob.classList.toggle("open"));
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  const columns = [
    { h:"Platform", l:[["Overview","platform.html"],["Capabilities","platform.html"],["Integrations","platform.html"],["Security","platform.html"]] },
    { h:"Solutions", l:[["Financial Services","solutions.html"],["Healthcare","solutions.html"],["SaaS","solutions.html"],["Retail","solutions.html"],["Public Sector","solutions.html"]] },
    { h:"Resources", l:[["Docs","resources.html"],["Guides","resources.html"],["Blog","resources.html"],["Customer Stories","resources.html"]] },
    { h:"Company", l:[["Why Ideneumo","why.html"],["Brand System","brand.html"],["Careers","contact.html"],["Contact","contact.html"]] },
  ];
  const cols = columns.map(c => `
    <div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:var(--color-ink);">${c.h}</div>
      <ul style="list-style:none;padding:0;margin:1rem 0 0;display:flex;flex-direction:column;gap:.625rem;">
        ${c.l.map(([lbl,to])=>`<li><a href="${to}" style="font-size:.875rem;color:var(--color-charcoal);text-decoration:none;" onmouseover="this.style.color='var(--color-tangerine)'" onmouseout="this.style.color='var(--color-charcoal)'">${lbl}</a></li>`).join("")}
      </ul>
    </div>
  `).join("");

  host.innerHTML = `
    <footer style="position:relative;background:#fff;padding-top:5rem;overflow:hidden;">
      <div class="container-x">
        <div style="display:grid;grid-template-columns:1.4fr 3fr 1.4fr;gap:3rem;padding-bottom:4rem;border-bottom:1px solid var(--color-border);" class="footer-grid">
          <div>
            <img src="${LOGO}" alt="Ideneumo" style="height:40px;width:auto;" />
            <p style="margin-top:1.25rem;font-size:.875rem;color:var(--color-charcoal);max-width:20rem;line-height:1.6;">Protect every identity journey across your customer portals.</p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;" class="footer-cols">${cols}</div>
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:var(--color-ink);">Stay updated</div>
            <p style="margin-top:.75rem;font-size:.875rem;color:var(--color-charcoal);">Get the latest on identity security and product updates.</p>
            <form style="margin-top:1rem;display:flex;gap:.5rem;" onsubmit="event.preventDefault();this.querySelector('input').value='';alert('Subscribed!');">
              <input type="email" placeholder="Work email" required
                style="flex:1;height:44px;border-radius:12px;border:1px solid var(--color-border);padding:0 .75rem;font-size:.875rem;" />
              <button class="btn-primary" style="height:44px;padding-inline:1.25rem;font-size:.875rem;">→</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom" style="padding:1.5rem 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:1rem;font-size:.75rem;color:var(--color-charcoal);flex-wrap:wrap;">
          <div>© ${new Date().getFullYear()} Ideneumo. All rights reserved. · UK based. Global standards.</div>
          <div style="display:flex;gap:1.25rem;">
            <a href="contact.html" style="color:inherit;text-decoration:none;">Privacy</a>
            <a href="contact.html" style="color:inherit;text-decoration:none;">Terms</a>
            <a href="contact.html" style="color:inherit;text-decoration:none;">Security</a>
            <a href="contact.html" style="color:inherit;text-decoration:none;">Trust Center</a>
          </div>
          <div style="display:flex;gap:.75rem;">
            ${["linkedin","twitter","github","youtube"].map(i=>`<a href="#" style="height:32px;width:32px;display:grid;place-items:center;border-radius:8px;border:1px solid var(--color-border);color:inherit;text-decoration:none;">${ico(i,'h-4 w-4')}</a>`).join("")}
          </div>
        </div>
      </div>
      ${stripesWaveSVG('120px')}
      <style>
        @media (max-width: 1023px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .footer-cols { grid-template-columns: repeat(2,1fr) !important; }
        }
      </style>
    </footer>
  `;
}

function stripesWaveSVG(height="120px") {
  return `<svg viewBox="0 0 1440 240" preserveAspectRatio="none" style="display:block;width:100%;height:${height};" aria-hidden>
    <path d="M0 180 Q 360 60 720 140 T 1440 100 V240 H0 Z" fill="#FF6A00"/>
    <path d="M0 200 Q 360 90 720 170 T 1440 130 V240 H0 Z" fill="#FF4D4D"/>
    <path d="M0 220 Q 360 130 720 200 T 1440 160 V240 H0 Z" fill="#E31E3A"/>
    <path d="M0 235 Q 360 170 720 220 T 1440 190 V240 H0 Z" fill="#6B0F2E"/>
  </svg>`;
}

function stripesSweepSVG() {
  return `<svg viewBox="0 0 900 600" preserveAspectRatio="none" style="width:100%;height:100%;" aria-hidden>
    <defs>
      <clipPath id="sweepClip"><path d="M-50 280 Q 250 80 600 220 T 1000 240 L 1000 360 Q 600 220 250 360 T -50 420 Z"/></clipPath>
    </defs>
    <g clip-path="url(#sweepClip)">
      <path d="M-50 280 Q 250 80 600 220 T 1000 240 L 1000 270 Q 600 110 250 250 T -50 320 Z" fill="#FF6A00"/>
      <path d="M-50 320 Q 250 140 600 250 T 1000 270 L 1000 300 Q 600 160 250 290 T -50 360 Z" fill="#FF4D4D"/>
      <path d="M-50 360 Q 250 200 600 290 T 1000 310 L 1000 340 Q 600 220 250 330 T -50 400 Z" fill="#E31E3A"/>
      <path d="M-50 400 Q 250 260 600 330 T 1000 350 L 1000 380 Q 600 290 250 370 T -50 430 Z" fill="#6B0F2E"/>
    </g></svg>`;
}

function fingerprintSVG(color="#FF6A00", opacity=0.7) {
  let paths = "";
  for (let i=0;i<10;i++){
    const r = 40 + i*18;
    paths += `<path d="M ${200-r} 230 a ${r} ${r*0.92} 0 0 1 ${r*2} 0" opacity="${(1 - i*0.07).toFixed(2)}"/>`;
  }
  return `<svg viewBox="0 0 400 400" style="width:100%;height:100%;" aria-hidden>
    <g fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="${opacity}">${paths}</g></svg>`;
}

// Helmet anatomy interactivity (homepage)
function initHelmetAnatomy() {
  const root = document.getElementById("helmet-anatomy");
  if (!root) return;
  const layers = window.__ANATOMY_LAYERS;
  let active = layers[0].id;
  const draw = () => {
    const cur = layers.find(l => l.id === active);
    root.querySelector("#anatomy-icon").innerHTML = ico(cur.icon, "h-6 w-6");
    root.querySelector("#anatomy-kicker").textContent = `LAYER ${cur.k} · ${cur.sec.toUpperCase()}`;
    root.querySelector("#anatomy-title").textContent = cur.t;
    root.querySelector("#anatomy-desc").textContent = cur.d;
    root.querySelectorAll(".chip").forEach(b => {
      const on = b.dataset.id === active;
      b.style.borderColor = on ? "var(--color-tangerine)" : "var(--color-border)";
      b.style.background = on ? "#fff" : "rgba(255,255,255,.6)";
      b.style.boxShadow = on ? "var(--shadow-card)" : "none";
    });
    // Hotspots
    root.querySelectorAll(".hot").forEach(g => {
      const on = g.dataset.id === active;
      const c2 = g.querySelector(".dot");
      const r = on ? 11 : 7;
      c2.setAttribute("r", r);
      c2.setAttribute("fill", on ? "#E31E3A" : "#fff");
      g.querySelector(".lbl").setAttribute("fill", on ? "#fff" : "#111318");
      g.querySelector(".pulse").style.display = on ? "" : "none";
    });
    if (window.lucide) window.lucide.createIcons();
  };
  root.querySelectorAll(".chip,.hot").forEach(el => {
    el.addEventListener("mouseenter", () => { active = el.dataset.id; draw(); });
    el.addEventListener("click", () => { active = el.dataset.id; draw(); });
  });
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  if (window.lucide) window.lucide.createIcons();
  initHelmetAnatomy();

  // Contact form
  const f = document.getElementById("contact-form");
  if (f) {
    f.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("contact-form-wrap").innerHTML = `
        <div style="text-align:center;padding:3rem 0;">
          <div style="margin:0 auto;height:64px;width:64px;border-radius:50%;background:#d1fae5;display:grid;place-items:center;">
            ${ico('check','h-7 w-7')}
          </div>
          <h3 style="margin-top:1.25rem;font-family:Satoshi;font-size:1.5rem;font-weight:700;">Request received.</h3>
          <p style="margin-top:.5rem;color:var(--color-charcoal);">A senior architect will reach out within one business day.</p>
        </div>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }
});
