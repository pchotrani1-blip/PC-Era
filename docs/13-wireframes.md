# 13 · Wireframes — Desktop & Mobile

Low-fidelity blueprints for every page. Maps 1:1 to the theme's sections/templates so a developer can build exactly as designed. `[img]` = editorial photography, `▢` = product card.

---

## HOME — Desktop (`templates/index.json`)
```
┌──────────────────────────────────────────────────────────┐
│  Complimentary shipping over $120 · The Era of Trend     │ announcement
├──────────────────────────────────────────────────────────┤
│ NEW  SHOP  DRESSES  SETS   │  PC ERA  │   ⌕  ♡  ◴  🛍    │ sticky header
├──────────────────────────────────────────────────────────┤
│                                                          │
│   [ full-bleed editorial hero · gentle zoom ]            │
│   eyebrow                                                │
│   The Era of Trend            (serif, huge)              │
│   subhead .......                                        │
│   [ Shop new in ] [ Discover PC Era ]      ↓ Scroll      │
├──────────────────────────────────────────────────────────┤
│  ← Confident era ✦ Soft girl era ✦ Vacation era →  ...   │ marquee (butter)
├──────────────────────────────────────────────────────────┤
│                   The edit · BEST SELLERS                │
│        ▢        ▢        ▢        ▢                       │ 4-up grid
│                   [ Shop best sellers ]                  │
├──────────────────────────────────────────────────────────┤
│              Find your era · MADE FOR EVERY ERA          │
│     [img Vacation]   [img Dresses]   [img Sets]          │ 3 tiles
├──────────────────────────────────────────────────────────┤
│  [ img ]   │  Our story · In my PC Era                   │ editorial split
│            │  body ...  — signature   [ Read our story ] │
├──────────────────────────────────────────────────────────┤
│                 Just landed · NEW ARRIVALS               │
│        ▢        ▢        ▢        ▢                       │
├──────────────────────────────────────────────────────────┤
│            #InMyPCEra · STYLED BY YOU                    │
│   [u][u][u][u][u]    Tag @pcera #InMyPCEra               │ 5-up UGC
├──────────────────────────────────────────────────────────┤
│         ★★★★★  She said it best · 4.9 / 2,400+           │
│   [ review ]      [ review ]      [ review ]             │
├──────────────────────────────────────────────────────────┤
│  ✦ Shipping   ✦ Returns   ✦ Quality   ✦ Packaging       │ trust row
├──────────────────────────────────────────────────────────┤
│        Join the era · 10% off your first chapter         │ newsletter (butter)
│              [ email .............. ] [ Join → ]         │
├──────────────────────────────────────────────────────────┤
│ PC ERA |  Shop    Help    House     (socials)           │ footer (ink)
│ brand  |  links   links   links                         │
│ © PC Era. In your PC Era.            [pay icons]         │
└──────────────────────────────────────────────────────────┘
```

## HOME — Mobile
```
┌───────────────────────────┐
│ Shipping over $120 ✦      │
├───────────────────────────┤
│ ☰     PC ERA      ⌕ ♡ 🛍  │ sticky
├───────────────────────────┤
│  [ full-screen hero img ] │
│  eyebrow                  │
│  The Era of Trend         │
│  subhead                  │
│  [ Shop new in (full) ]   │
│  [ Discover (full) ]      │
├───────────────────────────┤
│ ← marquee scrolling →     │
├───────────────────────────┤
│   BEST SELLERS            │
│   ▢      ▢                │ 2-up
│   ▢      ▢                │
├───────────────────────────┤
│   MADE FOR EVERY ERA      │
│   [ tile ]                │ stacked
│   [ tile ]                │
│   [ tile ]                │
├───────────────────────────┤
│   [ img ]                 │ split → stacked
│   In my PC Era            │
│   [ Read our story ]      │
├───────────────────────────┤
│   NEW ARRIVALS  ▢ ▢ / ▢ ▢ │
├───────────────────────────┤
│   STYLED BY YOU  [u][u]   │ 2-up UGC
├───────────────────────────┤
│   ★★★★★ reviews (swipe) → │ carousel
├───────────────────────────┤
│   trust badges (stacked)  │
├───────────────────────────┤
│   Newsletter (butter)     │
├───────────────────────────┤
│   Footer (accordion cols) │
└───────────────────────────┘
```

---

## PRODUCT — Desktop (`main-product`)
```
┌──────────────────────────────────────────────────────────┐
│ header                                                   │
├───────────────────────────────┬──────────────────────────┤
│  GALLERY (2-col, hover-zoom)  │  Home / Collection        │ sticky col →
│   ┌─────────────────────────┐ │  Amalfi Linen Set         │
│   │      hero image         │ │  ★★★★★ 4.9 · 128 reviews   │
│   └─────────────────────────┘ │  $128   (or 4x Afterpay)  │
│   ┌───────────┐ ┌───────────┐ │  "In your vacation era."  │
│   │   img     │ │   img     │ │  story copy ...           │
│   └───────────┘ └───────────┘ │  Colour  ● ● ●            │
│   ┌───────────┐ ┌───────────┐ │  Size  XS S M L  (guide)  │
│   │   img     │ │   img     │ │  [ Add to bag — $128 ]    │
│   └───────────┘ └───────────┘ │  [ ♡ Save to wishlist ]   │
│                               │  ✦ Selling fast           │
│                               │  ▸ Fabric & care          │ accordions
│                               │  ▸ Shipping               │
│                               │  ▸ Returns                │
│                               │  ▸ Styling notes          │
│                               │  ▸ Size guide & model     │
├───────────────────────────────┴──────────────────────────┤
│        Why you'll love it · MADE FOR EVERY ERA           │
│     01 ......     02 ......     03 ......                │
├──────────────────────────────────────────────────────────┤
│            Styling · COMPLETE THE LOOK                   │
│        ▢        ▢        ▢        ▢                       │
├──────────────────────────────────────────────────────────┤
│            Keep exploring · RECENTLY VIEWED              │
│        ▢        ▢        ▢        ▢                       │
├──────────────────────────────────────────────────────────┤
│ footer                                                   │
└──────────────────────────────────────────────────────────┘
```

## PRODUCT — Mobile
```
┌───────────────────────────┐
│ header                    │
│ [ gallery swipe ●○○○ ]    │ full-width carousel
│ Amalfi Linen Set          │
│ ★★★★★ 4.9 · 128           │
│ $128                      │
│ "In your vacation era."   │
│ story ...                 │
│ Colour ● ● ●              │
│ Size XS S M L  (guide)    │
│ [ Add to bag (full) ]     │
│ [ ♡ Wishlist (full) ]     │
│ ▸ accordions ...          │
│ WHY YOU'LL LOVE IT (stk)  │
│ COMPLETE THE LOOK ▢▢/▢▢   │
│ RECENTLY VIEWED ▢▢        │
│ footer                    │
├───────────────────────────┤
│ Amalfi · $128 [Add to bag]│ ← sticky ATC bar
└───────────────────────────┘
```

---

## COLLECTION / PLP — Desktop (`main-collection`)
```
┌──────────────────────────────────────────────────────────┐
│ header                                                   │
│  [ collection hero image + title overlay ]               │
│        eyebrow / Vacation Era / intro line               │
├──────────────────────────────────────────────────────────┤
│  All  Linen  Sets  Dresses  ...        Sort: Featured ▾  │ toolbar
├──────────────────────────────────────────────────────────┤
│   ▢        ▢        ▢        ▢                            │ 4-up grid
│   ▢        ▢        ▢        ▢                            │ dual-img hover
│   ▢        ▢        ▢        ▢                            │ wishlist + quick-add
│                  [ Load more ]                           │
│  ── SEO prose block (below grid) ──                      │
│ footer                                                   │
└──────────────────────────────────────────────────────────┘
```
**Mobile:** hero → horizontal filter pills + sort → 2-up grid → Load more → SEO prose → footer.

---

## ABOUT — Desktop (`page.about.json`)
```
[ hero: In my PC Era ]
[ centered intro: Fashion shouldn't be saved for occasions ]
[ split L: What "In My PC Era" means ]
[ split R: From a moodboard to a movement (founder) ]
[ values row: Quality · Loved · Real life · She comes first ]
[ newsletter CTA (butter) ]
[ footer ]
```
**Mobile:** all splits stack image-over-text; values stack; full-width CTAs.

---

## JOURNAL (Blog) — Desktop (`main-blog`)
```
[ warm header: The Journal + subhead ]
[ 3-col article cards: img / tag / title / excerpt / Read more ]
[ More stories ]
[ footer ]
```
**Article (`main-article`):** centered title block → wide hero image (pulled up) → narrow reading column (720px) → comments → footer. **Mobile:** single column throughout.

---

## CONTACT — Desktop (`contact`)
```
[ split L: Say hello / We're here for your era / care + press + hours ]
[ split R: name · email · subject · message · Send ]
```
**Mobile:** info block, then form, stacked.

## FAQ — Desktop (`page.faq.json`)
```
[ centered header: Frequently asked ]
[ Shipping accordions ]
[ Returns accordions ]
[ Sizing accordions ]
[ Orders & payments accordions ]
```
Narrow column, generous spacing. **Mobile:** identical, full-width accordions.

---

## ACCOUNT — Desktop (`customers/account`)
```
[ greeting: Hi {name} · email · sign out ]
┌───────────────────────────┬──────────────────────────┐
│ Order history (list)      │  REWARDS (butter card)   │
│ Wishlist (grid)           │  120 points · earn rules │
│                           │  Addresses →             │
├───────────────────────────┴──────────────────────────┤
│ Recently viewed (grid)                               │
└──────────────────────────────────────────────────────┘
```
**Mobile:** rewards card first, then orders, wishlist, recently viewed — stacked.

---

## CART DRAWER (global, slides from right)
```
┌──────────────────────┐
│ Your bag (3)      ✕  │
│ $22 away from free → │ progress (butter)
│ [img] Amalfi Set     │
│       Linen · M      │
│       Qty 1   $128   │
│ ─────────────────    │
│ Complete the look ▢▢ │ upsell
│ ─────────────────    │
│ Subtotal     $128    │
│ [ Checkout — $128 ]  │
│ 30-day returns · BNPL│
└──────────────────────┘
```

---

## MOBILE NAV (slides from left)
```
┌──────────────────────┐
│ PC ERA            ✕  │
│ New In               │ serif links
│ Shop                 │
│ Dresses              │
│ Matching Sets        │
│ Vacation             │
│ Journal              │
│ About                │
│ ───                  │
│ (socials)            │
└──────────────────────┘
```

---

## Responsive grid rules (from `base.css`)
| Breakpoint | PLP grid | UGC | Nav | ATC |
|---|---|---|---|---|
| ≥1100px | 4-up | 5-up | inline | sticky col |
| 900–1100 | 3-up | 4-up | inline | sticky col |
| 640–900 | 2-up | — | hamburger | sticky bar |
| <640 | 2-up | 2-up | hamburger | sticky bar |

Spacing scale: section padding `clamp(3.5rem, 8vw, 9rem)`; gutters `clamp(1.25rem, 5vw, 5rem)`. Generous whitespace is the brand.
