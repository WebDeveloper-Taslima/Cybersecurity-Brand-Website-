// ===== Ideneumo static site JS =====
(function(){
  // Year
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();

  // Sticky header shrink
  var header = document.getElementById('siteHeader');
  var onScroll = function(){
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  // Mobile menu toggle
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); });
    });
  }

  // Logo marquee — duplicate names twice for seamless loop
  var names = "Northwind • Helix Bank • Orbital • Lumen Health • Pavia • Statura • Kintsu • Vellum".split('•').map(function(s){return s.trim();});
  var track = document.getElementById('marqueeTrack');
  if (track) {
    var doubled = names.concat(names).concat(names).concat(names);
    track.innerHTML = doubled.map(function(n){ return '<span>'+n+'</span>'; }).join('');
  }

  // Services grid
  var services = [
    {title:"Customer Identity & Access Management", text:"End-to-end CIAM platforms tailored to your product, customers, and regulatory profile.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>'},
    {title:"Authentication & MFA", text:"Adaptive, risk-based authentication with passkeys, biometrics, and step-up flows.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'},
    {title:"Customer Login Experiences", text:"Conversion-optimized login journeys that feel native to your brand and product.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>'},
    {title:"Identity Security Consulting", text:"Strategic guidance — from threat modeling to architecture review and remediation.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'},
    {title:"Secure Registration Journeys", text:"Frictionless sign-up with progressive profiling, fraud signals and compliant data capture.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>'},
    {title:"Access Governance", text:"Roles, entitlements and lifecycle automation that scale with your customer base.",
     icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M12 8v4"/></svg>'},
  ];
  var helmetSvg = '<svg class="svc-helmet" aria-hidden="true" viewBox="0 0 64 64"><path d="M32 4 C16 4 7 14 7 30 v14 c0 7 5 12 12 13 c3 0.5 5 2 6 4 c1.5 2 3 3 6 3 h2 a3 3 0 0 0 3-3 v-1 h12 v1 a3 3 0 0 0 3 3 h2 c3 0 4.5-1 6-3 c1-2 3-3.5 6-4 c7-1 12-6 12-13 V30 C57 14 48 4 32 4 Z" fill="currentColor"/></svg>';
  var arrowSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  var grid = document.getElementById('servicesGrid');
  if (grid) {
    grid.innerHTML = services.map(function(s, i){
      var n = String(i+1).padStart(2,'0');
      return ''+
      '<a href="#contact" class="card card-hover svc-card">'+
        helmetSvg+
        '<div class="card-glow"></div>'+
        '<div class="svc-top">'+
          '<div class="svc-icon">'+s.icon+'</div>'+
          '<span class="svc-num">/ '+n+'</span>'+
        '</div>'+
        '<h3 class="svc-title">'+s.title+'</h3>'+
        '<p class="svc-text">'+s.text+'</p>'+
        '<div class="svc-cta">Learn more '+arrowSvg+'</div>'+
      '</a>';
    }).join('');
  }

  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach(function(el){
    var strength = 0.25;
    el.addEventListener('mousemove', function(e){
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width/2) * strength;
      var y = (e.clientY - r.top - r.height/2) * strength;
      el.style.transform = 'translate('+x+'px,'+y+'px)';
    });
    el.addEventListener('mouseleave', function(){ el.style.transform = 'translate(0,0)'; });
  });
})();
