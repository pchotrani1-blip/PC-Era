# 11 · Conversion Optimisation

Luxury *and* high-converting. Every tactic below is implemented or wired in the theme — keep it tasteful, never desperate.

## Urgency (quiet, credible)
- Product: "Selling fast — only a few left in each size" (`main-product`).
- Cart drawer: free-shipping progress bar creates a goal.
- Drops: countdown timers on launch (Story + email + landing).
- Low-stock badge on PLP card when inventory < threshold (wire via metafield/app).
- **Never** fake-scarcity. Only show urgency when true.

## Social proof
- Homepage reviews section (4.9 / 2,400+).
- Star rating + review count on product page H-area.
- UGC grid ("Styled by you") on home + product.
- Review photos on PDP (via Judge.me/Okendo).
- "X people have this in their bag" / recently-purchased (optional app, subtle).

## Trust
- Trust badges (shipping, returns, quality, packaging) on home + below ATC.
- Easy 30-day returns stated on PDP, cart, footer.
- Secure-checkout + payment icons in footer.
- Real founder story + real contact details.

## Wishlist
- Heart on every product card + PDP (localStorage now; sync to account via app).
- Wishlist count in header; surfaced in account.
- Powers back-in-stock + abandoned-browse retargeting.

## Cross-sell & upsell
- **Cart free-ship threshold** ($120) — nudges add-ons.
- "Complete the look" on PDP (Shopify product recommendations).
- Matching-set bundle discount (buy set together, save).
- Post-purchase one-click upsell (AfterSell/ReConvert).
- Cart drawer "add the matching top" upsell block.

## Email & SMS capture
- Welcome popup: 10% off first order (delay 5s or exit-intent), single field.
- Newsletter section on home + footer.
- Back-in-stock captures email on sold-out variants.
- Birthday capture in popup step 2 for the birthday flow.

## Sticky add-to-cart
- Mobile sticky ATC bar appears once the main ATC scrolls out of view (`theme.js`).
- Desktop: product info column is sticky while gallery scrolls.

## Mobile-first
- Theme is built mobile-first; 2-col PLP, single-col PDP, sticky ATC, thumb-reachable CTAs, full-width buttons.
- Fast: no JS framework, deferred scripts, lazy media, responsive `srcset`, system-light fonts fallback.
- Express wallets (Shop/Apple/Google Pay) for one-tap mobile checkout.

## Merchandising for conversion
- Lead collections + home with proven best sellers.
- "New in" and "Last chance" badges to create freshness + urgency.
- Bundle sets; show "wears 3 ways" to justify price.

## Test backlog (prioritised)
1. Hero headline (era-led vs. brand-led).
2. Popup offer (10% vs. free shipping vs. gift).
3. PDP urgency line on/off.
4. Free-ship threshold ($100 vs. $120 vs. $150).
5. Bundle discount depth.
6. Reviews above vs. below the fold on PDP.

## Guardrails (so it stays luxury)
- Max one popup, tastefully timed. No spinning wheels, no countdown on every page, no neon "SALE". Urgency must be true. White space > clutter, always.
