// ============================================
// IMERSÃO GÊNESIS — GSAP Animation Engine
// ============================================

// Toggle bio expand/collapse on speaker cards
function toggleBio(btn) {
  var bioEl = btn.previousElementSibling;
  var isCollapsed = bioEl.getAttribute('data-collapsed') === 'true';
  bioEl.setAttribute('data-collapsed', isCollapsed ? 'false' : 'true');
  btn.querySelector('span').textContent = isCollapsed ? 'Ler menos' : 'Ler mais';
  btn.classList.toggle('is-open', isCollapsed);
}

document.addEventListener('DOMContentLoaded', function () {

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Global defaults for a premium, smooth feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 1
  });

  // ─────────────────────────────────────────────
  // 1. HERO — Cinematic Entrance
  // ─────────────────────────────────────────────
  const heroTl = gsap.timeline({ delay: 0.2 });

  // Background subtle scale-in (Ken Burns lite)
  heroTl.fromTo('.hero__bg',
    { scale: 1.08, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }
  );

  // Overlay fades in
  heroTl.fromTo('.hero__overlay',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    0.15
  );

  // Logo fades in
  heroTl.fromTo('.hero__logo',
    { y: -15, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
    0.4
  );

  // Badge slides down
  heroTl.fromTo('.hero__content .badge',
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7 },
    0.6
  );

  // Title reveal
  heroTl.fromTo('.hero h1',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    0.75
  );

  // Subtitle text reveal
  heroTl.fromTo('.hero__sub',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    1.0
  );

  // Info line
  heroTl.fromTo('.hero__info',
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    1.2
  );

  // CTA button
  heroTl.fromTo('.hero .btn--primary',
    { y: 15, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
    1.4
  );

  // Micro text
  heroTl.fromTo('.hero .micro-text',
    { opacity: 0 },
    { opacity: 1, duration: 0.5 },
    1.7
  );

  // Slow parallax on hero background while scrolling
  gsap.to('.hero__bg', {
    y: '15%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // ─────────────────────────────────────────────
  // 2. SCROLL-TRIGGERED SECTION REVEALS
  // ─────────────────────────────────────────────

  // Generic section header animation (h2 + p)
  gsap.utils.toArray('.section, .final-cta').forEach(function (section) {
    const h2 = section.querySelector('h2');
    const p = section.querySelector('h2 + p');

    if (h2) {
      gsap.fromTo(h2,
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: {
            trigger: h2,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (p) {
      gsap.fromTo(p,
        { y: 18, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, delay: 0.1,
          scrollTrigger: {
            trigger: p,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // ─────────────────────────────────────────────
  // 3. CARDS — Staggered reveal
  // ─────────────────────────────────────────────

  // Problem cards
  gsap.utils.toArray('.problem-grid .card').forEach(function (card, i) {
    gsap.fromTo(card,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, delay: i * 0.12,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 4. HIGHLIGHT BOXES — Slide from left
  // ─────────────────────────────────────────────

  gsap.utils.toArray('.highlight-box').forEach(function (box) {
    gsap.fromTo(box,
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: box,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 5. JOURNEY STEPS — Cascade
  // ─────────────────────────────────────────────

  const journeySteps = gsap.utils.toArray('.journey__step');
  const journeyArrows = gsap.utils.toArray('.journey__arrow');

  if (journeySteps.length) {
    const journeyItems = [];
    journeySteps.forEach(function (step, i) {
      journeyItems.push(step);
      if (journeyArrows[i]) journeyItems.push(journeyArrows[i]);
    });

    gsap.fromTo(journeyItems,
      { y: 15, opacity: 0, scale: 0.92 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.journey',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 6. BENEFIT ITEMS — Stagger from left
  // ─────────────────────────────────────────────

  var benefitItems = gsap.utils.toArray('.benefit-item');
  if (benefitItems.length) {
    gsap.fromTo(benefitItems,
      { x: -15, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.5,
        stagger: 0.04,
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 7. PROOF CARDS — Scale up with stagger
  // ─────────────────────────────────────────────

  var proofCards = gsap.utils.toArray('.proof-card');
  if (proofCards.length) {
    gsap.fromTo(proofCards,
      { y: 25, opacity: 0, scale: 0.96 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.proof-grid',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 8. VALUE TAGS — Pop in with stagger
  // ─────────────────────────────────────────────

  var valueTags = gsap.utils.toArray('.value-tag');
  if (valueTags.length) {
    gsap.fromTo(valueTags,
      { y: 12, opacity: 0, scale: 0.92 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.value-tags',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 9. PRICING CARDS — Rise with stagger
  // ─────────────────────────────────────────────

  var priceCards = gsap.utils.toArray('.price-card-v2');
  if (priceCards.length) {
    gsap.fromTo(priceCards,
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-grid-v2',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 10. FOR-WHO ITEMS — Stagger from right
  // ─────────────────────────────────────────────

  var forWhoItems = gsap.utils.toArray('.for-who-item');
  if (forWhoItems.length) {
    gsap.fromTo(forWhoItems,
      { x: 15, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.5,
        stagger: 0.04,
        scrollTrigger: {
          trigger: '.for-who-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 11. SPEAKER CARDS — Scale up staggered
  // ─────────────────────────────────────────────

  var speakerCards = gsap.utils.toArray('.speaker-card-v2, .speaker-card');
  var speakerGrid = document.querySelector('.speakers-grid-v2') || document.querySelector('.speakers-grid');
  if (speakerCards.length && speakerGrid) {
    gsap.fromTo(speakerCards,
      { y: 25, opacity: 0, scale: 0.96 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: speakerGrid,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 12. ABOUT SECTION — Split reveal
  // ─────────────────────────────────────────────

  var aboutText = document.querySelector('.about-text');
  var aboutImage = document.querySelector('.about-grid > div:last-child');

  if (aboutText) {
    gsap.fromTo(aboutText,
      { x: -25, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8,
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  if (aboutImage) {
    gsap.fromTo(aboutImage,
      { x: 25, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, delay: 0.15,
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 13. BADGES — Pop-in
  // ─────────────────────────────────────────────

  gsap.utils.toArray('.badge').forEach(function (badge) {
    // Skip hero badge (already animated in hero timeline)
    if (badge.closest('.hero')) return;

    gsap.fromTo(badge,
      { y: 10, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: badge,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 14. CTA BUTTONS — Fade in on scroll
  // ─────────────────────────────────────────────

  gsap.utils.toArray('.btn--primary').forEach(function (btn) {
    // Skip hero button (already animated)
    if (btn.closest('.hero')) return;

    gsap.fromTo(btn,
      { y: 12, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: btn,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 15. SEPARATORS — Width grow
  // ─────────────────────────────────────────────

  gsap.utils.toArray('.separator').forEach(function (sep) {
    gsap.fromTo(sep,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sep,
          start: 'top 94%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 16. VIDEO CONTAINER — Scale reveal
  // ─────────────────────────────────────────────

  var videoContainer = document.querySelector('.video-container');
  if (videoContainer) {
    gsap.fromTo(videoContainer,
      { y: 20, opacity: 0, scale: 0.98 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoContainer,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 17. INVEST GLOW — Pulse on scroll
  // ─────────────────────────────────────────────

  var investGlow = document.querySelector('.invest-glow');
  if (investGlow) {
    gsap.fromTo(investGlow,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1, opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.invest-section',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 18. SIGNATURE QUOTE — Italic fade
  // ─────────────────────────────────────────────

  var quote = document.querySelector('.signature-quote');
  if (quote) {
    gsap.fromTo(quote,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: quote,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 19. NOT-FOR CARD — Slide up
  // ─────────────────────────────────────────────

  var notForCard = document.querySelector('.not-for-card');
  if (notForCard) {
    gsap.fromTo(notForCard,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: notForCard,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ─────────────────────────────────────────────
  // 20. INVEST DIVIDERS — Width grow
  // ─────────────────────────────────────────────

  gsap.utils.toArray('.invest-divider').forEach(function (div) {
    gsap.fromTo(div,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: div,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // ─────────────────────────────────────────────
  // 21. FINAL CTA — Grand entrance
  // ─────────────────────────────────────────────

  var finalCta = document.querySelector('.final-cta');
  if (finalCta) {
    var ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: finalCta,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    ctaTl.fromTo(finalCta.querySelector('h2'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    var ctaP = finalCta.querySelector('p');
    if (ctaP) {
      ctaTl.fromTo(ctaP,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.3
      );
    }

    var ctaBadge = finalCta.querySelector('.badge');
    if (ctaBadge) {
      ctaTl.fromTo(ctaBadge,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.4)' },
        0.5
      );
    }

    var ctaBtn = finalCta.querySelector('.btn--primary');
    if (ctaBtn) {
      ctaTl.fromTo(ctaBtn,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.3)' },
        0.7
      );
    }
  }

  // ─────────────────────────────────────────────
  // SMOOTH SCROLL for anchor links
  // ─────────────────────────────────────────────

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 24 }, // offsetY de 24px para respirar
          duration: 1.2,
          ease: 'power3.inOut'
        });
      }
    });
  });

  // ─────────────────────────────────────────────
  // REVEAL BODY TO PREVENT FOUC (Flash of Unstyled Content)
  // ─────────────────────────────────────────────
  document.body.classList.add('is-loaded');

});
