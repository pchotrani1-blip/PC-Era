/* ============================================================
   PC ERA — theme.js
   Micro-interactions, cart drawer, wishlist, reveal, variants
   Vanilla JS, no dependencies. Progressive enhancement only.
   ============================================================ */
(function () {
  'use strict';

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

  /* Open any accordion pre-marked as expanded (e.g. Product details) */
  document.querySelectorAll('.accordion__trigger[aria-expanded="true"]').forEach((trigger) => {
    const panel = trigger.nextElementSibling;
    if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
  });

  /* ---------- Swipeable product-card carousels ---------- */
  document.querySelectorAll('[data-pc-track]').forEach((track) => {
    const media = track.closest('.product-card__media');
    if (!media) return;
    const dots = media.querySelectorAll('.pc-dot');
    const prev = media.querySelector('[data-pc-prev]');
    const next = media.querySelector('[data-pc-next]');
    const go = (dir) => track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
    if (prev) prev.addEventListener('click', (e) => { e.preventDefault(); go(-1); });
    if (next) next.addEventListener('click', (e) => { e.preventDefault(); go(1); });
    if (dots.length) {
      track.addEventListener('scroll', () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        dots.forEach((d, di) => d.classList.toggle('is-active', di === i));
      }, { passive: true });
    }
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
// Variant colour image switching
document.addEventListener('DOMContentLoaded', function () {
  function filterImagesByColour(colour) {
    document.querySelectorAll('[data-media-id], .product__media-item, .product-single__photo').forEach(function (el) {
      var img = el.querySelector('img');
      if (!img) return;
      var alt = (img.alt || '').trim().toLowerCase();
      var match = colour ? alt === colour.toLowerCase() : true;
      el.style.display = match ? '' : 'none';
    });
  }

  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el.name === 'Color' || el.name === 'Colour' || el.name === 'color' || el.name === 'colour') {
      filterImagesByColour(el.value);
    }
  });

  // Also handle swatch buttons if theme uses them
  document.addEventListener('click', function (e) {
    var swatch = e.target.closest('[data-value][data-option]');
    if (swatch) {
      var optionName = (swatch.dataset.option || '').toLowerCase();
      if (optionName === 'colour' || optionName === 'color') {
        filterImagesByColour(swatch.dataset.value);
      }
    }
  });
});
