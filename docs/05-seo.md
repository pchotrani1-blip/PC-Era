# 05 · SEO Playbook

## Strategy
PC Era ranks on **affordable luxury / contemporary women's fashion** intent: era-led lifestyle terms ("vacation outfits", "matching sets", "linen dress") + brand terms. Editorial-first, so SEO copy lives *below* the fold and in metafields — never cluttering the hero.

## Global
- **Brand meta title pattern:** `{Page} | PC Era` — keep under 60 chars.
- **Homepage title:** `PC Era — Affordable Luxury Women's Fashion | The Era of Trend`
- **Homepage meta description:** `PC Era is affordable luxury women's fashion made to dress every era of her life. Shop linen sets, dresses & resort wear. Free shipping over $120.`
- **H1 rule:** exactly one per page (theme already enforces this).
- One canonical per page; theme outputs `canonical_url`.

## H-structure (per template)
- **Home:** H1 "The Era of Trend" (visually the hero) → H2 per section.
- **Collection:** H1 = collection name → H2 grid/filters.
- **Product:** H1 = product title → H2 "Why you'll love it", "Complete the look".
- **Article:** H1 = article title → H2 subheads.

## Keyword map
| Page | Primary | Secondary |
|---|---|---|
| Home | affordable luxury fashion | contemporary women's clothing, quiet luxury brand |
| Dresses | women's dresses | satin slip dress, linen maxi dress, midi dress |
| Matching Sets | matching sets | two piece set, co-ord set, linen set |
| Vacation | vacation outfits | holiday dresses, resort wear, European summer outfits |
| Best Sellers | best selling dresses | most loved fashion pieces |
| Journal | how to style | summer outfit ideas, vacation packing list |

## Product SEO
- **Title pattern:** `{Product Name} — {Category} | PC Era` (e.g. "Amalfi Linen Set — Matching Set | PC Era").
- **Meta description:** lead with era + fabric + benefit + CTA. ≤ 155 chars.
  - *Ex:* "The Amalfi Linen Set in breathable European linen — your vacation-era uniform. Wears 3 ways. Free shipping over $120. Shop PC Era."
- **URL:** `/products/amalfi-linen-set` (clean, no dates).
- **Alt text:** describe garment + context: "Model wears PC Era Amalfi linen set in butter, walking on Amalfi terrace".

## Image SEO
- Filename: `pc-era-amalfi-linen-set-butter-front.jpg` (kebab-case, descriptive).
- Compress to WebP, ≤ 200KB; theme serves responsive `srcset`.
- Always set descriptive `alt`; decorative images get empty alt.
- `fetchpriority="high"` on hero/LCP image (already wired).

## Blog/Journal SEO
- Target informational long-tail: "what to pack for a European summer", "how to style a linen set".
- Internal-link each article to 2–3 products + 1 collection.
- 1,000–1,500 words, scannable H2/H3, one custom hero image.

## Schema (already implemented in theme)
- `Organization` + `WebSite` (layout).
- `Product` + `AggregateRating` + `Offer` (main-product).
- `FAQPage` (faq section).
- **Add via metafields/app:** `BreadcrumbList`, `Review`, `Article` (use a JSON-LD app or extend sections).

## Technical
- Submit sitemap.xml (Shopify auto-generates) in Google Search Console.
- Set up 301s for any legacy URLs.
- Core Web Vitals: theme is light (no framework), lazy-loads media, defers JS — keep apps minimal to protect LCP.
- Mobile-first indexing: theme is mobile-first by design.

## Google Merchant Center / Shopping
1. Connect via **Google & YouTube** Shopify channel.
2. Map fields: `title`, `description`, `google_product_category` (Apparel & Accessories > Clothing), `gender=female`, `age_group=adult`, `color`, `size`, `material`.
3. Use clean front-on product shots as primary feed image (white/neutral bg variant).
4. Enable **free listings** + Performance Max for shopping ads.
5. Add GTIN/MPN where available; mark `identifier_exists=no` for own-brand pieces without GTIN.
6. Feed title pattern for Shopping (more keyword-led than on-site): `PC Era Amalfi Linen Matching Set - Women's Linen Co-ord - Butter`.

## Local/brand SERP
- Claim brand name on Instagram/TikTok/Pinterest (consistent @pcera).
- Build `Organization.sameAs` links (socials) into schema for a richer brand panel.
