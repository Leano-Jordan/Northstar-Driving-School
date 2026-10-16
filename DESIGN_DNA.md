# Northstar Website Template — Design DNA

Status: fictional prospect demo for a reusable driving-school website; not a live driving school.

The template should feel confident, human, bright and practical, with an image-led editorial layout rather than generic dashboard-like blocks.

## Audience and conversion
- Build for independent instructors, local driving schools and larger training providers. South Africa is an example locale; the structure must also adapt for global markets.
- Help visitors identify a relevant training route and reach one clear enquiry or booking action.
- Treat pricing as a configuration choice: publish verified lesson rates and packages when useful, use quote-first for genuinely tailored work, or mix both.
- Demo CTAs must not pretend to contact a real Northstar business. Keep buyer-owned phone, WhatsApp, email and booking channels unconfigured until approved.
- Never invent prices, testimonials, pass rates, qualifications, accreditation, addresses, coverage, opening hours or guarantees.

## Visual system
- Palette: cobalt #2458D3, deep navy #152A4A, sunshine #FFD166, white #FFFFFF, sky blue #EAF2FF, ink #17243A and restrained coral #C83B2A.
- Use white and sky-blue surfaces as the foundation, cobalt for navigation and actions, and sunshine for optimistic highlights.
- Use relevant photography throughout: lesson moments, learner support, cars on roads, test preparation and professional vehicles where appropriate.
- Apply a subtle road photograph under a strong colour overlay for visual texture without sacrificing readable contrast.
- Give images deliberate crops, aspect ratios, meaningful alt text, and responsive/lazy-loading behaviour. Prefer buyer-approved photography in production; stock is illustrative, never evidence of the buyer’s staff or fleet.
- Bundle open-source outline SVG icons locally; no paid icon pack or external icon CDN.
- Motion stays restrained and respects prefers-reduced-motion.

## Pricing and terminology
- The fictional demo starts in quote mode because it has no approved prices. The template supports published rates, quote-first or mixed pricing.
- For consumer lessons, show price, lesson duration, package inclusions, cancellation terms and separate testing/application fees when known and approved.
- Lead with portable terms: learner licence/permit, theory support, practical driving lessons, test preparation, refresher lessons and specialist training.
- South African terms such as learner’s licence, Code 8/10/14 and PDP/PrDP are market-specific examples—not universal categories or legal advice.

## Localization
- Confirm each market’s language/locale, licence categories and eligibility terms, service area, currency, country code, preferred contact channel, privacy/terms requirements and structured business data.
- Confirm available services, transmission type, pick-up/drop-off, testing support, business hours, instructor credentials, inclusions and prices before publishing.
- Keep header, navigation, CTA hierarchy and footer consistent across home, training, contact and 404 pages.
- Do not use a prominent full-width demo warning banner. Keep fictional-demo status discreet in the footer and contact-preview limitations clear.

## Engineering priorities
1. Trust, accurate business claims and clear conversion.
2. Image-rich design with responsive crops and efficient loading.
3. Mobile accessibility, focus visibility and reduced-motion support.
4. Owner-controlled public pricing configuration.
5. Search metadata based on verified facts.
6. Automated static checks, deployment verification and honest reporting.

## Release gate
Run python3 tests/check_site.py, confirm GitHub Actions succeeds, inspect the deployed URL and test representative mobile/desktop viewports and keyboard interactions. Do not claim visual QA or live deployment until verified.