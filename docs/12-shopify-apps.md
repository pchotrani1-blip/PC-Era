# 12 · Shopify App Stack

Minimal, premium, performance-conscious. Every app must earn its place — too many apps slow the site and cheapen the feel. Recommended primary in **bold**, alternatives after.

| Need | App | Why |
|---|---|---|
| **Reviews / UGC ratings** | **Okendo** (or Judge.me, Loox) | Photo reviews, on-brand widgets, review schema, attributes (fit/quality), syncs to Shopping. Loox if you want a more visual, lower-cost photo-first option. |
| **Wishlist** | **Wishlist Plus** (or Swym) | Saves across devices/account, powers back-in-stock + email retargeting. (Theme has a localStorage wishlist already; app adds account sync.) |
| **Bundles** | **Shopify Bundles** (native, free) or **Fast Bundle** | Matching-set bundles, "buy the look", volume discounts. |
| **Email & SMS** | **Klaviyo** | All flows in `06-email-flows.md`, segmentation by era, SMS, predictive analytics. |
| **Loyalty & rewards** | **Smile.io** (or LoyaltyLion) | Points, VIP tiers, referrals — the account "Rewards" panel. |
| **UGC / shoppable Instagram** | **Foursixty** (or Okendo UGC) | Turns #InMyPCEra into shoppable galleries on home/PDP. |
| **Analytics** | **GA4 + Shopify Analytics + Triple Whale** | Attribution, LTV, blended ROAS; Lucky Orange/Hotjar for session replay. |
| **SEO** | **Yoast SEO for Shopify** (or SearchPie) | Meta templating, schema, redirects, sitemap hygiene. |
| **Back in stock** | **Back in Stock** (or part of Swym) | Captures demand on sold-out variants → restock emails. |
| **Search & filtering** | **Searchanise** or **Boost AI Search & Filter** | Fast predictive search, era/colour/size/length filters on PLP. |
| **Personalisation / recs** | **Rebuy** | AI "complete the look", cart upsells, smart cross-sell. |
| **Post-purchase upsell** | **AfterSell** (or ReConvert) | One-click upsell after checkout, raises AOV. |
| **Subscriptions (optional)** | **Recharge** | If you add a "drop membership" / restock club later. |
| **Returns** | **Loop Returns** (or AfterShip Returns) | Branded, easy returns + exchange-first to retain revenue. |
| **Shipping tracking** | **AfterShip** | Branded tracking page on-brand, reduces "where's my order". |
| **Reviews of fit / size** | **Kiwi Sizing** (optional) | Size recommender to cut returns. |
| **Trust / payments** | Shop Pay, PayPal, Afterpay, Klarna, Apple/Google Pay | Native — enable all; BNPL matters for 18–35. |
| **Pop-up / email capture** | **Klaviyo forms** (native to Klaviyo) | One tasteful welcome popup, exit-intent. |

## Launch-day minimum (don't over-install)
Klaviyo · Okendo (or Loox) · Smile.io · Shopify Bundles · Searchanise/Boost · Back in Stock · Rebuy or AfterSell · Yoast SEO. Add the rest as you scale.

## Performance hygiene
- Audit every app's script weight; remove trial apps that inject blocking JS.
- Prefer apps with **theme app blocks** (load in-section) over global script injection.
- Re-test Core Web Vitals after each install. The theme is fast by default — protect it.
