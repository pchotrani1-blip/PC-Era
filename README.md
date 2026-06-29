# PC ERA — *The Era of Trend*

A complete, deployable **Shopify Online Store 2.0 theme** + brand system for **PC Era**, an affordable-luxury women's fashion house. Built to feel like *Vogue meets Jacquemus* — editorial, minimal, expensive, soft-feminine — at a price she can actually afford.

> *Every girl goes through different eras. PC Era exists to dress every version of her.*

---

## What's in this repository

### 1. A real Shopify theme (ready to deploy)
A hand-built, dependency-free OS 2.0 theme. Drop it into a store with the Shopify CLI or upload as a zip.

```
.
├── assets/            base.css (design system), theme.js (interactions)
├── config/            settings_schema.json, settings_data.json
├── layout/            theme.liquid
├── locales/           en.default.json
├── sections/          hero, marquee, featured-collection, era-collections,
│                      editorial-split, in-my-pc-era, reviews, trust-badges,
│                      newsletter, main-product, main-collection, collection-list,
│                      main-blog, main-article, main-search, main-page, faq,
│                      contact, recently-viewed, header, footer, cart-drawer, mobile-nav
├── snippets/          product-card, icon
├── templates/         index, product, collection, list-collections, blog, article,
│                      search, page, page.about, page.contact, page.faq, cart, 404,
│                      product.card, customers/*
└── docs/              the full brand, copy, SEO, email, social, photography,
                       packaging, conversion, apps & wireframe playbooks
```

### 2. The brand playbooks (`/docs`)
| File | What it covers |
|---|---|
| `01-brand-bible.md` | Mission, eras, voice, palette, type, logo, do/don't |
| `02-homepage-copy.md` | Every homepage section, written in full |
| `03-product-copy.md` | Product description framework + 6 finished examples |
| `04-collections.md` | All 8 collections: copy, SEO, merchandising |
| `05-seo.md` | Meta titles/descriptions, keywords, schema, Merchant Center |
| `06-email-flows.md` | 8 luxury flows, subject lines + body copy |
| `07-social-strategy.md` | Instagram grid, Stories, Reels, Pinterest, launch |
| `08-photography-direction.md` | Locations, lighting, props, settings, grading, moodboard |
| `09-packaging.md` | Box, courier bag, cards, tissue, tags, dust bag |
| `10-customer-journey.md` | Instagram → unboxing → repeat, end to end |
| `11-conversion.md` | Urgency, social proof, upsell, capture, mobile |
| `12-shopify-apps.md` | The exact app stack + why |
| `13-wireframes.md` | Desktop + mobile wireframes for every page |

---

## Deploy in 5 minutes

```bash
# 1. Install the Shopify CLI
npm i -g @shopify/cli @shopify/theme

# 2. From this folder, connect your store
shopify theme dev --store your-store.myshopify.com   # live preview
shopify theme push                                    # upload to store
```

Then in the **Shopify admin**:
1. **Online Store → Themes → Customize** — the homepage is pre-assembled.
2. Create the menus referenced by the theme: `main-menu`, `footer-shop`, `footer-help`, `footer-house`.
3. Create the collections (see `docs/04-collections.md`) and pages: `about`, `contact`, `faq` (assign the matching templates).
4. Upload editorial photography per `docs/08-photography-direction.md`.
5. Install the app stack in `docs/12-shopify-apps.md`.

### Product metafields used (namespace.key)
Create these under **Settings → Custom data → Products** to power the luxury product page:
`custom.story` (rich text), `custom.model_wears`, `custom.model_height`, `custom.fit`, `custom.fabric`, `custom.complete_look`.

---

## Design tokens (quick reference)

| Token | Value | Use |
|---|---|---|
| Butter Yellow | `#F5E9A9` | Hero accents, newsletter, signature moments |
| Warm Ivory | `#FCFAF4` | Alt sections |
| Soft Cream | `#FFFDF8` | Default background |
| Champagne Gold | `#CDA349` | Accents, stars, hover fills |
| Warm Beige | `#EEE7D7` | Editorial blocks, product media bg |
| Soft Black | `#222222` | Text, buttons, footer |

**Type:** Serif headlines (Canela / Fraunces) · italic editorial accents · sans body (Neue Haas / Inter).
**Motion:** slow-luxury — `cubic-bezier(.22,1,.36,1)`, 0.35–0.9s, scroll reveals, dual-image hovers, marquee.

Everything is responsive and built mobile-first. Replace the Google-Fonts fallback (Fraunces/Inter) with licensed Canela + Neue Haas Grotesk in production.
