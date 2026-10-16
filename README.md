# Northstar Driving Academy — reusable website template

A mobile-first static website template for driving schools, demonstrated with the fictional Northstar Driving Academy identity. It pairs a bright premium cobalt-and-sunshine visual system with clear training pathways and a conversion-focused demo enquiry journey.

## Customer journey
- Start with a clear brand statement and an illustrative driving lesson photo.
- Explore the approach and the learner, driving licence, Code 8/10, Code 14, PDP and lesson options.
- Message or call Northstar to confirm availability, current package inclusions and an accurate quote.
- No package prices are published on the website.

## Demo identity
- Fictional demo brand: Northstar Driving Academy.
- No real customer contact details are included.
- Contact actions route to the demo contact section and must be connected to the buyer's verified phone/WhatsApp details before launch.
- Replace the demo brand, service area, contact channels and business claims for each buyer.

## Hero photography
- The temporary illustrative hero image is by Ron Lach on Pexels: https://www.pexels.com/photo/man-in-white-and-black-striped-dress-shirt-driving-car-9518029/
- Pexels lists the image as free to use. It depicts a Black adult sitting beside a young learner during a practice drive; it is not a photograph of Northstar or a verified member of the business.
- Replace this stock image with owner-approved photography before claiming it shows the actual instructor or vehicle.

## Training-card photography
- Learner's licence card: Ron Lach, Pexels — https://www.pexels.com/photo/boy-in-gray-sweater-driving-car-9518016/ (free under the Pexels License).
- Driving licence card: Magda Ehlers, Pexels — https://www.pexels.com/photo/a-car-driving-on-the-road-3886669/ (Chapman's Peak Drive, Cape Town; free under the Pexels License).
- PDP / progress card: Gugulethu Ndlalani, Pexels — https://www.pexels.com/photo/black-men-and-freight-rusty-transport-4612683/ (Pimville, Gauteng; free under the Pexels License).
- Pexels permits commercial website use without required attribution: https://www.pexels.com/license/. The stock photos are illustrative, not endorsements or photographs of Northstar's own clients, staff or vehicles.

## Site experience
- Pages: `index.html`, `services.html`, `contact.html`, and `404.html`.
- Static HTML, CSS and vanilla JavaScript; no booking backend, database or framework.
- Responsive layouts, accessible mobile navigation, skip link, visible focus styles, native accessible FAQ disclosures and reduced-motion support.
- Motion includes a continuous editorial ticker, scroll reveals, subtle hover feedback, a gently moving route motif and scroll progress. Reduced-motion preferences are respected in CSS and JavaScript, including preference changes while the page is open.
- Demo conversion path: contact-section anchor. No live messaging or calling destination is configured.
- SEO metadata and basic structured business data are included. No unverified address, reviews, pass rates, opening hours, instructor credentials or service guarantees are invented.

## Local and international reuse

- The visual system, page structure and neutral enquiry journey can be adapted to local independent instructors, multi-vehicle schools or larger training providers.
- This demo is South African by default. “Code 8”, “Code 10”, “Code 14”, “PDP”, “learner's licence”, en-ZA language metadata and South Africa references are jurisdiction-specific, not international legal advice.
- For another market, replace licence terminology and eligibility guidance with the relevant local rules; then update spelling, language/locale metadata, currency, service-area wording, phone country code, messaging channel, privacy/terms requirements and schema markup.
- Translate copy rather than relying on flags or colour alone to signal locale. Keep the demo label until all fictional identity, destination and legal-content placeholders are replaced and verified.

## Development workflow
- The single working branch is `main`. All site work and commits happen directly on `main`; do not create working branches or pull requests.
- Run `python3 tests/check_site.py` before committing site changes. The repository quality workflow also runs on pushes to `main`.
- Detailed working rules are in `AGENTS.md`; quality-gate details are in `docs/QUALITY-GATES.md`.

## Before launch
1. Replace the demo brand, photography where available, locale metadata, licence categories, market-specific legal copy, service area and contact destinations; check that no former-client data remains.
2. Test the published site on a real phone and in Chrome, Edge and Firefox.
3. Run Lighthouse and field performance checks. Aim for Core Web Vitals in the good range.
4. Confirm the business's actual service area, current contact details, package inclusions and any applicable application/testing fees with the owner.
5. Add genuine testimonials or business-owned photography only after receiving approval.
6. Review repository visibility and older Git history if any previously committed pricing must remain confidential. Removing amounts from current files does not erase previous public commits.

## Deployment
GitHub Pages workflow: `.github/workflows/deploy-pages.yml`.


## Contact links and social profiles
- The demo intentionally contains no phone, WhatsApp, email or social-profile destination. Connect buyer-owned channels only after purchase and written confirmation.
- The footer's WhatsApp mark uses the Simple Icons SVG under CC0; the telephone icon is an inline SVG based on Lucide's open-source icon style. No icon CDN or paid icon pack is required.
