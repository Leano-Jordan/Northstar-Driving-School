# Northstar Reusable Website Quality Gates

Run from the repository root:

```sh
python3 tests/check_site.py
```

The dependency-free checks cover all public HTML pages, not just the homepage. They validate document metadata, landmarks, skip navigation, unique IDs, internal file/anchor references, image alt text, external-link safety, reduced-motion and focus support, mobile navigation, responsive image markup, explicit image dimensions, asynchronous decoding and below-the-fold lazy loading, local icon assets, JSON-LD syntax, enquiry paths, and optional pricing without invented amounts. The checks are static and do not replace browser-based visual or accessibility testing.

Static checks are not a browser audit. Before launch:
- Check 320px, 360px, 375px, 390px, 768px, 1024px and wide desktop widths.
- Test keyboard-only navigation, reduced-motion mode and a screen-reader smoke test.
- Test Chrome, Firefox, Safari/iOS and Edge where available.
- Populate contact fields only with owner-approved destinations; keep unknown details blank.
- Test every configured phone, WhatsApp and email link on an actual phone. A direct link does not prove enquiries are stored; verify a real form provider/backend separately.
- Confirm GitHub Pages deployment and the public URL.
- Verify image URLs and responsive crops on mobile and desktop; replace stock with owner-approved photography where possible.
- Check the pricing mode matches the buyer’s chosen policy; replace or hide illustrative sample rates, and ensure no empty/placeholder amount is displayed.
- Only apply business structured data after it matches the verified business profile; static checks do not prove rich-result eligibility.
- Run Lighthouse and check Core Web Vitals on mobile and desktop. Target LCP ≤ 2.5s, INP ≤ 200ms and CLS ≤ 0.1 at the 75th percentile.
- Confirm no invented or unapproved amounts, business claims, former-client identities or live personal contact details appear in public HTML, repo docs or images. Public prices must be approved and current; quote-first mode is a choice rather than a template restriction. For international resale, verify locale metadata, local licensing language and buyer-market legal requirements.


CI runs on pushes to the single working branch, `main`, plus manual dispatch. This repository does not use feature branches or pull-request-based work for routine changes.
