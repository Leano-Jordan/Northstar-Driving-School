# Northstar Website Template — Design DNA

Status: fictional prospect demo for selling and adapting a reusable website; not a live driving school.

Rosscore product quality is more important than visual sameness. This concept should feel confident, human, clear and practical. The layout should sell the buyer on a thoughtful customer journey, not on fake business credentials or generic dashboard-like blocks.

## Audience and conversion
- Default demonstration market: South Africa. The design can be localized for other jurisdictions after buyer verification.
- The main job is to help a visitor identify a relevant training category and understand the next enquiry step.
- The primary production conversion is the buyer's verified preferred channel: WhatsApp, phone, email, booking form or another approved destination.
- Demo CTAs must not pretend to contact a real Northstar business; keep them routed to the demo enquiry area until a buyer configures real destinations.
- No public price list, fake booking widget, review score, pass rate, qualification, accreditation or trust badge.

## Visual system
- Palette: espresso `#38251D`, burnt terracotta `#B94F2D`, warm amber `#E8B85C`, warm cream `#FBF6EF`, sand `#F1E5D7`, and ink `#2B2521`.
- Use warm neutral surfaces as the foundation, terracotta for emphasis, and amber sparingly for calls to action and visual markers.
- Strong editorial display type, readable body copy, natural driving-learning imagery, comfortable spacing, small-radius cards and deliberate contrast.
- Cosmetic motion is restrained: staged section reveals, card image movement, route motif animation, scroll progress and a continuous ticker. Respect reduced-motion preferences in both CSS and JavaScript.
- Photographs are licensed illustrative stock, not evidence of the buyer's staff, cars, location, clients or results. Prefer buyer-approved imagery after permission is confirmed.
- The header, navigation, CTA hierarchy and footer should feel consistent across the home, training, contact and 404 pages.

## Local and international adaptation
- South African Code 8/10/14, PDP and learner-licence terminology are examples for the default demo, not universal categories.
- For each market update document language and locale, driving terminology and legal references, service area, country calling code, currency, contact destination, privacy/terms content and structured business data.
- Do not invent local addresses, lesson coverage, prices, opening hours, transmission type, test support, instructor credentials, reviews, pass rates or guarantees.
- Keep the demo banner until the buyer's actual identity, content, channels, legal copy and deployment have been reviewed.

## Engineering priorities
1. Trust and accurate business claims.
2. Clear contact conversion path.
3. Mobile-first layout, low-data operation and responsive images.
4. Keyboard access, visible focus, semantic markup and WCAG AA text contrast.
5. Reduced motion, no blocking navigation and stable layout.
6. SEO metadata and structured data grounded in buyer-confirmed facts.
7. Automated quality checks, deployment verification and post-commit reporting.

## Release gate
A commit is not a release. Run the dependency-free tests, confirm the GitHub Actions result, inspect the deployed URL, and test representative mobile/desktop viewports and keyboard interaction. Report browser and device checks honestly; do not claim visual QA that was not performed.
