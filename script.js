(() => {
  "use strict";

  const motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  let reducedMotion = Boolean(motionQuery && motionQuery.matches);
  if (motionQuery && typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", (event) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
      }
    });
  }

  // Pricing is optional: show buyer-entered amounts only in explicit published mode.
  const pricingMode = document.body && document.body.dataset.pricingMode === "published" ? "published" : "quote";
  document.querySelectorAll("[data-package-price]").forEach((price) => {
    const amount = price.querySelector("[data-price-amount]");
    price.hidden = (pricingMode !== "published" && pricingMode !== "mixed") || !amount || !amount.textContent.trim();
  });

  // Keep the copyright notice correct without requiring an annual content edit.
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  // Only expose phone, WhatsApp or email channels that the business owner has actually configured.
  const contactStatus = document.querySelector("[data-contact-status]");
  if (contactStatus && typeof window.fetch === "function") {
    window.fetch("data/business.json", { credentials: "same-origin" })
      .then((response) => {
        if (!response.ok) throw new Error("Contact configuration could not be loaded.");
        return response.json();
      })
      .then((business) => {
        const enableChannel = (selector, href, label, external = false) => {
          const link = document.querySelector(selector);
          if (!link || !href) return false;
          link.href = href;
          link.textContent = label;
          link.dataset.event = "CONTACT_ENQUIRY_CLICK";
          if (external) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
          link.hidden = false;
          return true;
        };

        let enabledCount = 0;
        const phone = String(business.phone || "").trim();
        const dialString = String(business.phoneTel || "").replace(/[^+\d]/g, "");
        if (phone && /^\+[1-9]\d{6,14}$/.test(dialString)) {
          enabledCount += Number(enableChannel("[data-contact-phone]", "tel:" + dialString, "Call the school · " + phone + " ↗"));
        }

        let whatsappHref = "";
        try {
          const candidate = new URL(String(business.whatsappUrl || ""));
          const isWaMe = candidate.protocol === "https:" && candidate.hostname === "wa.me" && /^\/[1-9]\d{6,14}$/.test(candidate.pathname);
          const isApiWhatsApp = candidate.protocol === "https:" && candidate.hostname === "api.whatsapp.com" && candidate.pathname === "/send" && /^\d{7,15}$/.test(candidate.searchParams.get("phone") || "");
          if (isWaMe || isApiWhatsApp) whatsappHref = candidate.href;
        } catch (_error) {
          // An empty or invalid destination remains disabled rather than becoming a broken link.
        }
        enabledCount += Number(enableChannel("[data-contact-whatsapp]", whatsappHref, "Message on WhatsApp ↗", true));

        const email = String(business.email || "").trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          enabledCount += Number(enableChannel("[data-contact-email]", "mailto:" + encodeURIComponent(email), "Email the school · " + email + " ↗"));
        }

        const heading = document.querySelector("[data-contact-heading]");
        const rule = document.querySelector("[data-contact-rule]");
        if (heading) heading.hidden = enabledCount === 0;
        if (rule) rule.hidden = enabledCount === 0;
        contactStatus.hidden = enabledCount > 0;
        if (enabledCount > 0) {
          contactStatus.textContent = "Ask about lesson options, package inclusions, availability and next steps before booking.";
        } else {
          contactStatus.textContent = "This example has no confirmed contact channel yet. Add the school's approved phone, WhatsApp or email details in data/business.json before publishing.";
        }
      })
      .catch(() => {
        contactStatus.hidden = false;
        contactStatus.textContent = "Contact options could not be loaded. Confirm the school's approved contact details before publishing.";
      });
  }
  const header = document.querySelector(".site-header, body > header");
  const nav = header && header.querySelector("nav");
  const menuToggle = header && header.querySelector(".menu-toggle");
  let floatingSuppressed = false;
  const floatingVisibleTargets = new Set();

  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;
    progress.style.transform = "scaleX(" + percentage + ")";
    if (header) header.classList.toggle("is-scrolled", scrollTop > 12);
    const floating = document.querySelector(".floating-demo-contact");
    if (floating) floating.classList.toggle("is-visible", scrollTop > 240 && !floatingSuppressed);
  }
  let scrollFrame = 0;
  function scheduleScrollUI() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      updateScrollUI();
    });
  }
  window.addEventListener("scroll", scheduleScrollUI, { passive: true });
  window.addEventListener("resize", scheduleScrollUI, { passive: true });

  if (header && nav && menuToggle) {
    header.classList.add("has-mobile-menu");
    if (!nav.id) nav.id = "primary-navigation";
    menuToggle.setAttribute("aria-controls", nav.id);
    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    };
    menuToggle.addEventListener("click", () => {
      const open = !header.classList.contains("is-menu-open");
      header.classList.toggle("is-menu-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
        closeMenu();
        menuToggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (header.classList.contains("is-menu-open") && !header.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.matchMedia && !window.matchMedia("(max-width: 760px)").matches) closeMenu();
    }, { passive: true });
  }

  const chat = document.createElement("a");
  chat.className = "floating-demo-contact";
  chat.href = "contact.html#demo-enquiry";
  chat.setAttribute("aria-label", "Start an enquiry");
  const chatDot = document.createElement("span");
  chatDot.className = "chat-dot";
  chatDot.setAttribute("aria-hidden", "true");
  const chatText = document.createElement("span");
  chatText.textContent = "Enquire now";
  const chatArrow = document.createElement("span");
  chatArrow.textContent = "↗";
  chatArrow.setAttribute("aria-hidden", "true");
  chat.append(chatDot, chatText, chatArrow);
  chat.dataset.event = "CONTACT_ENQUIRY_CLICK";
  document.body.appendChild(chat);

  // Avoid covering the page's main enquiry action or footer links.
  if ("IntersectionObserver" in window) {
    const hideTargets = document.querySelectorAll(
      ".contact-inner, .contact-page-hero, .service-close, .contact-bottom-cta, .site-footer"
    );
    if (hideTargets.length) {
      const floatingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) floatingVisibleTargets.add(entry.target);
          else floatingVisibleTargets.delete(entry.target);
        });
        floatingSuppressed = floatingVisibleTargets.size > 0;
        updateScrollUI();
      }, { threshold: 0.05 });
      hideTargets.forEach((target) => floatingObserver.observe(target));
    }
  }

  // Delegation also captures links enabled later from the contact configuration.
  document.addEventListener("click", (event) => {
    const element = event.target && typeof event.target.closest === "function"
      ? event.target.closest("[data-event]")
      : null;
    if (!element) return;
    const eventName = element.dataset.event;
    if (typeof window.gtag === "function") window.gtag("event", eventName);
    if (typeof window.plausible === "function") window.plausible(eventName);
    window.dispatchEvent(new CustomEvent("roscore:event", { detail: { name: eventName, href: element.href || null } }));
  });

  if (!reducedMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".hero-copy, .hero-visual, .approach-intro, .approach-step, .section-heading, .training-card, .package-card, .extras-panel, .faq-item, .contact-inner, .service-detail-card, .inner-hero-copy, .inner-hero-art, .contact-page-copy, .contact-direct-card, .message-guide-grid article, .service-close, .contact-bottom-cta"
    );
    document.body.classList.add("motion-ready");
    revealTargets.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", (index % 3) * 70 + "ms");
    });
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -48px 0px", threshold: 0.08 });
    revealTargets.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        if (targetId === "#main-content" && typeof target.focus === "function") target.focus({ preventScroll: true });
        if (window.history && window.history.replaceState) window.history.replaceState(null, "", targetId);
      }
    });
  });

  updateScrollUI();
})();