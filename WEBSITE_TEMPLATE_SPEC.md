# Northstar Driving Academy — Reusable Website Template Spec

## Objective
A premium, photo-led driving-school website template for independent instructors, local schools and international buyers. Northstar is fictional demo branding, not a live business.

## Visitor journey
Understand training options → compare approved rates and packages where published → review FAQs → reach an honest contact preview that activates only verified school-owned channels.

## Visual direction
- Bright premium palette: cobalt #2458D3, deep navy #152A4A, sunshine #FFD166, white #FFFFFF, sky blue #EAF2FF and ink #17243A.
- Editorial typography, deliberate whitespace, image-led storytelling, careful image crops, restrained motion and a clear primary action.
- Use a relevant road photograph as subtle section-background texture beneath a strong navy overlay.
- Keep outline SVG icons bundled in assets/icons; do not load a paid icon pack or external icon CDN.
- No invented trust claims, testimonials, prices, credentials or business details.
- Do not use a full-width demo/warning banner; keep fictional-demo status discreet in the footer.

## Scope
- Home page, training-options page, contact preview and 404 page.
- Static HTML/CSS/vanilla JavaScript; no booking backend, payment flow, stored enquiry form or database.
- Demo enquiry actions lead to the contact card. The card reads data/business.json and exposes only valid configured phone, WhatsApp or email destinations. Keep the fields empty until the owner confirms them. Direct channel links are not a substitute for a stored lead-capture form; configure a form provider or backend if leads must be recorded.
- Mobile-first layout, accessible focus, responsive image markup, lazy-loaded secondary photography and reduced-motion support.
- SEO metadata and structured business data use verified content only.

## Pricing is configurable
- The current sample homepage deliberately displays clearly disclosed illustrative rates using data-pricing-mode="published", to show buyers the intended design. They are not approved rates for a real school.
- Before launch, replace sample rates with owner-approved prices. Each price row declares data-price-mode="published" or "quote": page mode "published" shows fixed rates, "quote" hides fixed rates but keeps tailored-quote labels, and "mixed" shows both. An empty amount is always hidden.
- The template offers single-lesson, lesson-package and tailored-training examples; remove anything the actual school does not provide.
- For published rates, show lesson duration, inclusions, package terms/cancellation rules and separate licensing/test charges where relevant.
- Quote-first pricing is appropriate for custom or specialist training, but is not a universal restriction. A mixed model is also supported.
- Never put private internal budgets or confidential notes in the public repository. Only approved customer-facing prices should be published.

## Photography and icon licensing
- Use relevant photography in the hero, training cards, a story/gallery section and inner-page hero/contact panel.
- Illustrative photos are sourced from Pexels: https://www.pexels.com/license/. Photo source links are listed in README.md.
- Stock imagery does not depict the buyer’s actual instructor, learners, location or fleet. Replace with owner-approved images where possible.
- Local SVG outline icons follow the open-source Lucide icon family under ISC; see assets/icons/README.md and https://github.com/lucide-icons/lucide/blob/main/LICENSE.

## Terminology and localization
- Lead with globally understandable categories: learner licence/permit, theory support, practical lessons, licence test preparation, refresher lessons and specialist training.
- South African examples such as learner’s licence, Code 8/10/14 and PDP/PrDP are regional search vocabulary, not universal categories.
- Verify the jurisdiction’s current licence terminology, eligibility, currency, service area, country code, locale, enquiry channel, privacy terms and structured business data before launch.
- Never invent availability, transmission types, pick-up/drop-off, test support, credentials, address, price or guarantees.

## Quality gates
Run from the repository root: python3 tests/check_site.py
Static checks cover HTML metadata, links, image alt text, responsive markup, icon assets, optional pricing, accessibility basics and reduced motion. They do not replace a browser audit or Lighthouse.

## Release and deployment
- Work directly on the single main branch; no feature branches or pull requests for routine iterations.
- Confirm GitHub Actions, inspect the published URL and test mobile/desktop layouts before calling it ready.
- Production requires approval of brand, photography, services, pricing model, contact destinations, legal copy and domain ownership.