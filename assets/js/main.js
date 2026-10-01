/* Chickago Boys – Interaktion & Animation */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  if (!hasGsap) root.classList.remove('anim');

  /* ---------- Jahr ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Öffnungszeiten (täglich 12–22 Uhr, Zeitzone Berlin) ---------- */
  var OPEN = 12 * 60, CLOSE = 22 * 60;
  function berlinNow() {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[map.weekday], minutes: parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10) };
  }
  function updateOpenState() {
    var now = berlinNow();
    var isOpen = now.minutes >= OPEN && now.minutes < CLOSE;
    var text = isOpen ? 'Jetzt geöffnet · bis 22 Uhr'
      : now.minutes < OPEN ? 'Geschlossen · öffnet heute um 12 Uhr'
      : 'Geschlossen · öffnet morgen um 12 Uhr';
    $$('[data-open-badge]').forEach(function (el) {
      el.textContent = text;
      el.classList.toggle('is-open', isOpen);
      el.classList.toggle('is-closed', !isOpen);
    });
    $$('[data-hours] tr').forEach(function (tr) {
      tr.classList.toggle('is-today', parseInt(tr.getAttribute('data-day'), 10) === now.day);
    });
  }
  updateOpenState();
  setInterval(updateOpenState, 60000);

  /* ---------- Smooth Scroll (Lenis) ---------- */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  function navOffset() { return -(($('#nav') || {}).offsetHeight || 0) - 12; }
  function scrollToTarget(target) {
    if (lenis) lenis.scrollTo(target, { offset: navOffset(), duration: 1.1 });
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a) return;
    var url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    var target = url.hash === '#top' ? document.body : document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    closeMenu(false);
    if (url.hash === '#top') { lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }
    else scrollToTarget(target);
    history.replaceState(null, '', url.hash);
  });

  /* ---------- Navigation ein-/ausblenden ---------- */
  var nav = $('#nav');
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    if (!nav) return;
    if (document.body.classList.contains('menu-open')) { lastY = y; return; }
    if (y > 140 && y - lastY > 6) nav.classList.add('is-hidden');
    else if (lastY - y > 6 || y < 140) nav.classList.remove('is-hidden');
    document.body.classList.toggle('nav-visible', !nav.classList.contains('is-hidden') && y > 10);
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menü ---------- */
  var btn = $('#menu-btn'), panel = $('#menu-panel'), overlay = $('#menu-overlay');
  function setLabel(txt) { $$('.menu-label', btn).forEach(function (s) { s.textContent = txt; }); }
  function openMenu() {
    document.body.classList.add('menu-open');
    nav.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    setLabel('Schließen');
    if (lenis) lenis.stop();
    if (hasGsap && !reduce) {
      window.gsap.fromTo($$('li', panel), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .38, stagger: .06, ease: 'power3.out', delay: .14 });
    }
    var first = $('a', panel);
    if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 60);
  }
  function closeMenu(returnFocus) {
    if (!document.body.classList.contains('menu-open')) return;
    document.body.classList.remove('menu-open');
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    setLabel('Menü');
    if (lenis) lenis.start();
    if (returnFocus !== false) btn.focus({ preventScroll: true });
  }
  if (btn && panel) {
    btn.addEventListener('click', function () {
      document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
    });
    overlay && overlay.addEventListener('click', function () { closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    $$('a', panel).forEach(function (a) { a.addEventListener('click', function () { closeMenu(false); }); });
  }

  /* ---------- Navigation auf dunklen Flächen hell einfärben ---------- */
  var darkEls = $$('[data-nav-dark]');
  if (nav && darkEls.length) {
    var checkDark = function () {
      var probe = (nav.offsetHeight || 70) / 2;
      nav.classList.toggle('is-dark', darkEls.some(function (el) {
        var r = el.getBoundingClientRect(); return r.top <= probe && r.bottom >= probe;
      }));
    };
    window.addEventListener('scroll', checkDark, { passive: true });
    window.addEventListener('resize', checkDark);
    checkDark();
  }

  /* ---------- Mobile Bestell-Leiste ---------- */
  var orderbar = $('#orderbar');
  var heroEl = $('.hero') || $('.page-hero');
  if (orderbar && heroEl && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      orderbar.classList.toggle('is-visible', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(heroEl);
  }

  /* ---------- Speisekarte: aktive Kategorie ---------- */
  var catNav = $('.cat-nav');
  if (catNav && 'IntersectionObserver' in window) {
    var links = $$('a', catNav);
    var list = $('ul', catNav);
    var setActive = function (id) {
      links.forEach(function (l) {
        var on = l.getAttribute('href') === '#' + id;
        l.classList.toggle('is-active', on);
        if (on) {
          l.setAttribute('aria-current', 'true');
          list.scrollTo({ left: l.offsetLeft - list.clientWidth / 2 + l.offsetWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
        } else l.removeAttribute('aria-current');
      });
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    var cats = $$('.menu-cat');
    cats.forEach(function (s) { io.observe(s); });
    window.addEventListener('scroll', function () {
      if (cats[0] && cats[0].getBoundingClientRect().top > window.innerHeight * .4) {
        links.forEach(function (l) { l.classList.remove('is-active'); l.removeAttribute('aria-current'); });
      }
    }, { passive: true });
  }

  /* ---------- Route (Take away) ---------- */
  var route = $('[data-route]');
  var routeState = null;
  function buildRoute() {
    if (!route) return null;
    var svg = $('.route__svg', route), path = $('path', svg), stops = $$('.stop', route);
    if (!stops.length || window.getComputedStyle(svg).display === 'none') return null;
    var box = route.getBoundingClientRect();
    var pts = stops.map(function (s) {
      var r = s.getBoundingClientRect();
      return { x: r.left - box.left + r.width * .5, y: r.top - box.top - 34 };
    });
    var start = { x: Math.max(40, pts[0].x - box.width * .2), y: pts[0].y + 6 };
    var d = 'M' + start.x + ' ' + start.y;
    var prev = start;
    pts.forEach(function (p, i) {
      var dx = p.x - prev.x;
      var lift = i % 2 ? 90 : -70;
      d += ' C' + (prev.x + dx * .45) + ' ' + (prev.y + lift) + ' ' + (p.x - dx * .45) + ' ' + (p.y - lift) + ' ' + p.x + ' ' + p.y;
      prev = p;
    });
    path.setAttribute('d', d);
    return { path: path, len: path.getTotalLength(), rider: $('.route__rider', route) };
  }
  function placeRider(progress) {
    if (!routeState) return;
    var pt = routeState.path.getPointAtLength(routeState.len * progress);
    var ahead = routeState.path.getPointAtLength(Math.min(routeState.len, routeState.len * progress + 4));
    var angle = Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180 / Math.PI;
    var w = routeState.rider.offsetWidth, h = routeState.rider.offsetHeight;
    routeState.rider.style.transform = 'translate(' + (pt.x - w / 2) + 'px,' + (pt.y - h / 2) + 'px) rotate(' + (angle * .25) + 'deg)';
  }

  /* ---------- Ohne GSAP: fertig ---------- */
  if (!hasGsap) {
    routeState = buildRoute();
    placeRider(1);
    return;
  }

  var gsap = window.gsap, ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);
  var rand = gsap.utils.random;

  function splitWords(el) {
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
            else { var s = document.createElement('span'); s.className = 'pw'; s.textContent = p; frag.appendChild(s); }
          });
          ch.parentNode.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR') walk(ch);
      });
    })(el);
    return $$('.pw', el);
  }
  function splitChars(el) {
    var txt = el.textContent; el.textContent = '';
    var sr = document.createElement('span'); sr.className = 'sr-only'; sr.textContent = txt; el.appendChild(sr);
    return txt.split('').map(function (c) {
      var s = document.createElement('span'); s.className = 'pl'; s.textContent = c === ' ' ? '\u00a0' : c;
      s.setAttribute('aria-hidden', 'true'); s.style.display = 'inline-block';
      el.appendChild(s); return s;
    });
  }

  if (reduce) {
    routeState = buildRoute();
    placeRider(1);
    return;
  }

  /* ---- Hero-Intro ---- */
  var hero = $('.hero');
  if (hero) {
    var chars = [];
    $$('[data-hero-big] .part', hero).forEach(function (p) { chars = chars.concat(splitChars(p)); });
    var burgerImg = $('.hero__burger img', hero);
    var tl = gsap.timeline({ delay: .05 });
    tl.set($$('[data-intro]', hero), { opacity: 1 })
      .fromTo('.hero__eyebrow', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .5, ease: 'power3.out' }, 0)
      .fromTo(chars, { scale: 0, opacity: 0, y: function () { return rand(40, 100); }, rotation: function () { return rand(-18, 18); }, transformOrigin: '50% 90%' },
        { scale: 1, opacity: 1, y: 0, rotation: 0, duration: .75, stagger: .045, ease: 'back.out(2.2)' }, .05)
      .fromTo(burgerImg, { scale: .45, y: 140, rotation: -12, opacity: 0 }, { scale: 1, y: 0, rotation: 0, opacity: 1, duration: 1.1, ease: 'back.out(1.5)' }, .3)
      .fromTo('.hero__wm .wm-fill', { xPercent: -30, opacity: 0, rotation: -8 }, { xPercent: 0, opacity: 1, rotation: 0, duration: .8, ease: 'back.out(1.8)' }, .75)
      .fromTo($$('[data-sticker]', hero), { '--s': 0 }, { '--s': 1, duration: .6, stagger: .12, ease: 'back.out(3)' }, .9)
      .fromTo(['.hero__bottom .lead', '.hero__cta'], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .1, ease: 'power3.out' }, .8)
      .add(function () {
        gsap.to(burgerImg, { y: -14, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      });

    if (window.matchMedia('(pointer: fine)').matches) {
      var qx = gsap.quickTo(burgerImg, 'x', { duration: .8, ease: 'power3.out' });
      var qr = gsap.quickTo(burgerImg, 'rotation', { duration: .8, ease: 'power3.out' });
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        var nx = (e.clientX - r.left) / r.width - .5;
        qx(nx * 40); qr(nx * 6);
      });
    }

    var mm = gsap.matchMedia();
    mm.add('(min-width: 821px)', function () {
      var parts = $$('[data-hero-big] .part', hero);
      gsap.to(parts[0], { xPercent: -10, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to(parts[1], { xPercent: 12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero__burger', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    });
  }

  /* ---- Seiten-Hero (Unterseiten) ---- */
  var pageHero = $('.page-hero');
  if (pageHero) {
    var ph = $('[data-hero-big]', pageHero);
    if (ph) {
      var pchars = splitChars(ph);
      gsap.fromTo(pchars, { scale: 0, opacity: 0, y: function () { return rand(40, 90); }, rotation: function () { return rand(-16, 16); }, transformOrigin: '50% 90%' },
        { scale: 1, opacity: 1, y: 0, rotation: 0, duration: .75, stagger: .05, ease: 'back.out(2.2)', delay: .05 });
    }
    var phImg = $('.page-hero__img img', pageHero);
    if (phImg) {
      gsap.fromTo(phImg, { scale: .5, y: 120, rotation: 10, opacity: 0 }, { scale: 1, y: 0, rotation: 0, opacity: 1, duration: 1.1, ease: 'back.out(1.5)', delay: .25 });
      gsap.to(phImg, { y: -12, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.4 });
    }
  }

  /* ---- Wort-Pop für Headlines ---- */
  $$('[data-pop]').forEach(function (el) {
    var words = splitWords(el);
    gsap.fromTo(words,
      { opacity: 0, scale: 0, y: function () { return rand(18, 40); }, rotation: function () { return rand(-14, 14); }, transformOrigin: '50% 90%' },
      { opacity: 1, scale: 1, y: 0, rotation: 0, duration: .72, stagger: .06, ease: 'back.out(2.35)',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  /* ---- Reveal (nutzt translate/opacity, damit CSS-Rotationen bleiben) ---- */
  var reveals = $$('[data-reveal]').filter(function (el) { return !el.closest('.hero'); });
  ST.batch(reveals, {
    start: 'top 90%', once: true,
    onEnter: function (batch) {
      gsap.fromTo(batch, { opacity: 0, '--ry': '40px' }, { opacity: 1, '--ry': '0px', duration: .9, stagger: .1, ease: 'power3.out' });
    }
  });

  /* ---- Sticker "aufkleben" ---- */
  $$('[data-sticker]').filter(function (el) { return !el.closest('.hero'); }).forEach(function (el) {
    gsap.fromTo(el, { '--s': 0 }, { '--s': 1, duration: .7, ease: 'back.out(3)', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  /* ---- Parallax Fotoband ---- */
  $$('[data-parallax]').forEach(function (img) {
    gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  /* ---- Route ---- */
  if (route) {
    routeState = buildRoute();
    ST.create({
      trigger: route, start: 'top 75%', end: 'bottom 55%', scrub: .6,
      onUpdate: function (self) { placeRider(self.progress); },
      onRefresh: function (self) { routeState = buildRoute(); placeRider(self.progress); }
    });
    placeRider(0);
  }

  /* ---- Footer: Zutaten fliegen von unten ins Bild und fallen wieder raus ---- */
  var jug = $('[data-juggle]');
  if (jug) {
    var foot = jug.closest('footer') || jug;
    var G = 1100; // Schwerkraft in px/s², hält Flugkurve und -zeit realistisch
    var running = false;
    // Versatz, ab dem eine Zutat (auch gedreht) komplett unter dem Footer-Rand steckt
    var below = function (el) {
      return foot.getBoundingClientRect().bottom - jug.getBoundingClientRect().top - el.offsetTop + el.offsetHeight * .3 + 2;
    };
    var toss = function (item, wait) {
      var el = item.el;
      var low = below(el);
      var apex = -Math.min(window.innerHeight * .55, Math.max(jug.offsetHeight, 110) * rand(.8, 1.25) + 20);
      var dir = Math.random() < .5 ? -1 : 1;
      var drift = window.innerWidth * rand(.03, .08) * dir;
      var rot = rand(-30, 30);
      var up = Math.sqrt(2 * (low - apex) / G);
      item.tl = gsap.timeline({ delay: wait, paused: !running, onComplete: function () { toss(item, rand(.15, .8)); } })
        .fromTo(el, { y: low }, { y: apex, duration: up, ease: 'power2.out' })
        .to(el, { y: low, duration: up, ease: 'power2.in' })
        .fromTo(el, { x: -drift / 2, rotation: rot }, { x: drift / 2, rotation: rot + dir * rand(200, 480), duration: up * 2, ease: 'none' }, 0);
    };
    var items = $$('.juggle', jug).map(function (el, i) {
      var item = { el: el, tl: null };
      gsap.set(el, { y: below(el), visibility: 'visible' });
      toss(item, .1 + i * .3);
      return item;
    });
    var setRunning = function (on) {
      running = on;
      items.forEach(function (it) { on ? it.tl.play() : it.tl.pause(); });
    };
    ST.create({
      trigger: jug, start: 'top bottom', end: 'bottom top',
      onToggle: function (self) { setRunning(self.isActive); }
    });
    document.addEventListener('visibilitychange', function () {
      setRunning(!document.hidden && ST.isInViewport(jug));
    });
  }

  window.addEventListener('load', function () { ST.refresh(); });
})();
