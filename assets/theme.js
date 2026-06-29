/* ============================================================
   PC ERA — theme.js
   Micro-interactions, cart drawer, wishlist, reveal, variants
   Vanilla JS, no dependencies. Progressive enhancement only.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Intro loader ---------- */
  var loader = document.getElementById('pc-loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('done'); }, 800);
    });
    // safety: never trap the page
    setTimeout(function () { loader.classList.add('done'); }, 2600);
  }

  /* ---------- Scroll progress + cursor sun-glow ---------- */
  var prog = document.getElementById('pc-progress');
  var glow = document.getElementById('pc-glow');
  if (prog) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    }, { passive: true });
  }
  if (glow && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  } else if (glow) { glow.style.display = 'none'; }

  /* ---------- Scroll reveal (soft luxury) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.setProperty('--reveal-delay', (e.target.dataset.revealDelay || 0) + 's');
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Accordions ---------- */
  document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const open = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!open));
      panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
    });
  });

  /* ---------- Generic toggle drawers (cart / nav / search) ---------- */
  function bindDrawer(triggerSel, drawerSel) {
    const drawer = document.querySelector(drawerSel);
    if (!drawer) return;
    document.querySelectorAll(triggerSel).forEach((t) =>
      t.addEventListener('click', (e) => { e.preventDefault(); openDrawer(drawer); })
    );
    drawer.querySelectorAll('[data-drawer-close]').forEach((c) =>
      c.addEventListener('click', () => closeDrawer(drawer))
    );
    drawer.querySelector('.drawer__overlay, .mobile-nav__overlay')?.addEventListener('click', () => closeDrawer(drawer));
  }
  function openDrawer(d) { d.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer(d) { d.classList.remove('is-open'); document.body.style.overflow = ''; }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.is-open').forEach(closeDrawer);
  });
  bindDrawer('[data-cart-open]', '#cart-drawer');
  bindDrawer('[data-nav-open]', '#mobile-nav');
  window.PCEra = { openDrawer, closeDrawer };

  /* ---------- Wishlist (localStorage) ---------- */
  const WKEY = 'pcera_wishlist';
  const getWish = () => JSON.parse(localStorage.getItem(WKEY) || '[]');
  const setWish = (a) => localStorage.setItem(WKEY, JSON.stringify(a));
  function refreshWishUI() {
    const list = getWish();
    document.querySelectorAll('[data-wish]').forEach((b) => {
      b.classList.toggle('is-active', list.includes(b.dataset.wish));
    });
    const c = document.querySelector('[data-wish-count]');
    if (c) c.textContent = list.length;
  }
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wish]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.wish;
    const list = getWish();
    const i = list.indexOf(id);
    if (i > -1) list.splice(i, 1); else list.push(id);
    setWish(list);
    refreshWishUI();
  });
  refreshWishUI();

  /* ---------- Recently viewed ---------- */
  const RKEY = 'pcera_recently_viewed';
  const handleMeta = document.querySelector('[data-product-handle]');
  if (handleMeta) {
    const handle = handleMeta.dataset.productHandle;
    let rv = JSON.parse(localStorage.getItem(RKEY) || '[]').filter((h) => h !== handle);
    rv.unshift(handle);
    localStorage.setItem(RKEY, JSON.stringify(rv.slice(0, 8)));
  }

  /* ---------- Variant pills ---------- */
  document.querySelectorAll('[data-variant-group]').forEach((group) => {
    group.querySelectorAll('.variant-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        group.querySelectorAll('.variant-pill').forEach((p) => p.setAttribute('aria-pressed', 'false'));
        pill.setAttribute('aria-pressed', 'true');
        const input = group.querySelector('input[type="hidden"]');
        if (input) input.value = pill.dataset.value;
      });
    });
  });

  /* ---------- Cart: add to cart (AJAX) ---------- */
  async function addToCart(id, qty) {
    const res = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: [{ id: Number(id), quantity: qty || 1 }] }),
    });
    if (!res.ok) throw new Error('add_failed');
    return res.json();
  }
  async function refreshCartDrawer() {
    const drawer = document.querySelector('#cart-drawer .drawer__body');
    if (!drawer) return;
    const res = await fetch('/?section_id=cart-drawer');
    if (!res.ok) return;
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const fresh = doc.querySelector('#cart-drawer .drawer__panel');
    const cur = document.querySelector('#cart-drawer .drawer__panel');
    if (fresh && cur) cur.innerHTML = fresh.innerHTML;
  }
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.addToCart || btn.closest('form')?.querySelector('[name="id"]')?.value;
    if (!id) return;
    const original = btn.textContent;
    btn.textContent = 'Adding…';
    btn.disabled = true;
    try {
      await addToCart(id, 1);
      await refreshCartDrawer();
      const cd = document.querySelector('#cart-drawer');
      if (cd) openDrawer(cd);
      btn.textContent = 'Added ✓';
    } catch (err) {
      btn.textContent = 'Try again';
    } finally {
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 1400);
    }
  });

  /* ---------- Sticky add-to-cart (mobile/product) ---------- */
  const sticky = document.querySelector('.sticky-atc');
  const mainAtc = document.querySelector('[data-main-atc]');
  if (sticky && mainAtc && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      ([entry]) => sticky.classList.toggle('is-visible', !entry.isIntersecting),
      { rootMargin: '-120px 0px 0px 0px' }
    );
    obs.observe(mainAtc);
  }

  /* ---------- Newsletter inline success ---------- */
  document.querySelectorAll('[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', () => {
      // Shopify customer form posts natively; show optimistic note
      const note = form.querySelector('[data-newsletter-note]');
      if (note) note.textContent = 'Welcome to the era — check your inbox for 10% off.';
    });
  });
})();
