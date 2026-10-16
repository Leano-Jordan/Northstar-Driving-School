# Northstar Driving Academy — reusable driving-school website

A bright, premium, photo-led static website template for independent instructors, local driving schools and international buyers. Northstar is fictional demo branding, not a live business.

## Customer journey
- Lead with clear, image-led messaging and a next-step action.
- Explore learner/theory support, practical lessons, test preparation, refresher lessons and specialist training routes.
- Compare verified prices and lesson packages where the school publishes rates, or request an itemised quote for tailored work.
- Move to the buyer's verified phone, WhatsApp, email or booking channel after configuration.

## Pricing configuration
- The homepage currently displays clearly disclosed illustrative rates in data-pricing-mode="published" mode so buyers can judge the finished pricing layout. These are not approved school prices.
- Before launch, replace sample amounts with buyer-approved rates and confirm lesson duration, package inclusions, cancellations and separate fees; or switch to data-pricing-mode="quote" to hide the example prices. The script also supports mixed pricing.
- An amount stays hidden when quote mode is active or the matching data-price-amount field is empty.
- Remove any package category the buyer does not offer. Public rates should identify lesson duration, package inclusions, cancellation conditions and separate fees.
- Never store confidential internal budgets or private notes in this public repository.

## Demo identity and contact
- Northstar is fictional. No real phone number, WhatsApp destination, email, address or booking link is configured in this repository.
- The contact card reads data/business.json and only activates confirmed fields: phone (display label), phoneTel (international E.164 number beginning with +), whatsappUrl (HTTPS wa.me/<number> or api.whatsapp.com/send?phone=<digits>) and email (valid address).
- Missing, malformed or blank channels stay disabled and the contact card explains that details must be added before launch. Click-to-call, WhatsApp and mailto links do not submit a stored form; real lead capture requires a configured form provider or backend.
- Demo status is discreet in the footer; there is no full-width warning banner.
- Replace brand, service area, contact channels, service claims and legal copy for each buyer.

## Photography sources
The demo uses Pexels CDN photos as illustrative stock images. Pexels licence: https://www.pexels.com/license/. These do not represent Northstar’s real instructors, learners, vehicle fleet or location.

- Homepage hero, Ron Lach: https://www.pexels.com/photo/man-in-white-and-black-striped-dress-shirt-driving-car-9518029/
- Learner training card, Ron Lach: https://www.pexels.com/photo/boy-in-gray-sweater-driving-car-9518016/
- In-car coaching, Ron Lach: https://www.pexels.com/photo/adult-man-looking-at-a-teenager-seated-on-driver-s-side-of-a-car-9518018/
- Road view, Malte Luk: https://www.pexels.com/photo/a-person-driving-a-car-on-the-road-1106435/
- Curving road, Ricky Esquivel: https://www.pexels.com/photo/car-on-the-road-3042415/
- South African road example, Magda Ehlers: https://www.pexels.com/photo/a-car-driving-on-the-road-3886669/
- Heavy vehicle on road: https://www.pexels.com/photo/truck-is-driving-on-road-20234936/
- Existing professional transport example, Gugulethu Ndlalani: https://www.pexels.com/photo/black-men-and-freight-rusty-transport-4612683/

Replace stock with owner-approved photography when available. Keep image credits and alt text aligned with the actual source.

## Open-source icons
- Six SVG line icons are bundled in assets/icons, using a Lucide-style outline and ISC licence. See assets/icons/README.md and https://lucide.dev/icons/.
- Assets are local SVGs: no paid library, icon font or external icon CDN is needed.

## Site experience
- Pages: index.html, services.html, contact.html, and 404.html.
- Static HTML/CSS/vanilla JavaScript; no framework, booking backend, database or payments.
- Responsive layouts, accessible navigation, skip link, focus states, native FAQ disclosures, informative image alt text and reduced-motion support.
- Photography appears in the home hero, training cards and gallery, inner training hero and contact preview.
- No unverified address, opening hours, reviews, pass rates, credentials or guarantees are invented.

## Terminology and international reuse
- Lead with portable categories: learner licence/permit, theory support, practical driving lessons, test preparation, refresher lessons and specialist training.
- South African terms such as Code 8, Code 10, Code 14 and PDP/PrDP are regional examples, not universal categories.
- For each market, update locale/language, licence terminology and eligibility guidance, service area, currency, calling code, enquiry channel, privacy/terms and structured business data.

## Development and release
- Work directly on the single main branch; no feature branches or pull requests for routine changes.
- Run python3 tests/check_site.py before and after meaningful changes. GitHub Actions runs static checks on pushes to main.
- Static checks do not prove browser rendering, successful external-image delivery or real-world contact delivery; verify the configured channel destinations on a phone before launch.
- A commit is not proof of deployment. Verify the Pages workflow and published URL before sharing it.
- Before launch, confirm actual services, approved prices, contact destinations, owner-approved photography, service area, legal copy and domain ownership.