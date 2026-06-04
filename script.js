/* ============================================================
   MORADIA T3 — LANDING PAGE SCRIPT
   Form validation + Scroll animations + UX enhancements
   ============================================================ */

(function () {
  'use strict';

  /* ==================== SCROLL REVEAL ==================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  function initReveal() {
    const targets = [
      '.problem-card',
      '.feature-item',
      '.location-card',
      '.reason-item',
      '.authority-item',
      '.step-item',
      '.solution-banner',
      '.specs-bar',
      '.profile-col',
      '.finance-card',
      '.price-highlight',
      '.scarcity-box',
      '.section-title',
      '.section-intro',
    ];

    targets.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        if (i > 0 && i <= 4) el.classList.add(`reveal-delay-${i}`);
        revealObserver.observe(el);
      });
    });
  }

  /* ==================== SMOOTH ANCHOR SCROLL ==================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 32;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ==================== FORM VALIDATION ==================== */
  function initForm() {
    const form = document.getElementById('qualForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');

    const validators = {
      nome: {
        el: () => document.getElementById('nome'),
        errorEl: () => document.getElementById('nome-error'),
        validate(value) {
          if (!value.trim()) return 'Por favor, introduza o seu nome completo.';
          if (value.trim().length < 3) return 'O nome deve ter pelo menos 3 caracteres.';
          if (!/\s/.test(value.trim())) return 'Por favor, insira nome e apelido.';
          return '';
        },
      },
      telefone: {
        el: () => document.getElementById('telefone'),
        errorEl: () => document.getElementById('telefone-error'),
        validate(value) {
          if (!value.trim()) return 'Por favor, introduza o seu número de telefone.';
          const cleaned = value.replace(/[\s\-().+]/g, '');
          if (!/^\d{9,15}$/.test(cleaned)) return 'Introduza um número de telefone válido.';
          return '';
        },
      },
      finalidade: {
        el: () => document.querySelector('input[name="finalidade"]:checked'),
        errorEl: () => document.getElementById('finalidade-error'),
        validate(value) {
          if (!value) return 'Por favor, selecione uma opção.';
          return '';
        },
      },
      credito: {
        el: () => document.getElementById('credito'),
        errorEl: () => document.getElementById('credito-error'),
        validate(value) {
          if (!value) return 'Por favor, selecione uma opção.';
          return '';
        },
      },
      prazo: {
        el: () => document.getElementById('prazo'),
        errorEl: () => document.getElementById('prazo-error'),
        validate(value) {
          if (!value) return 'Por favor, selecione uma opção.';
          return '';
        },
      },
      valor: {
        el: () => document.querySelector('input[name="valor"]:checked'),
        errorEl: () => document.getElementById('valor-error'),
        validate(value) {
          if (!value) return 'Por favor, selecione uma opção.';
          return '';
        },
      },
    };

    function getFieldValue(key) {
      const validator = validators[key];
      const el = validator.el();
      if (!el) return '';
      if (el.type === 'radio' || el.type === 'checkbox') return el.value;
      return el.value;
    }

    function showError(key, message) {
      const validator = validators[key];
      const errorEl = validator.errorEl();
      const el = validator.el();

      if (errorEl) errorEl.textContent = message;
      if (el && (el.type !== 'radio')) {
        el.classList.toggle('error', !!message);
      }
    }

    function validateField(key) {
      const value = getFieldValue(key);
      const error = validators[key].validate(value);
      showError(key, error);
      return !error;
    }

    /* Live validation on blur */
    document.getElementById('nome')?.addEventListener('blur', () => validateField('nome'));
    document.getElementById('telefone')?.addEventListener('blur', () => validateField('telefone'));
    document.getElementById('credito')?.addEventListener('change', () => validateField('credito'));
    document.getElementById('prazo')?.addEventListener('change', () => validateField('prazo'));
    document.querySelectorAll('input[name="finalidade"]').forEach((el) => {
      el.addEventListener('change', () => validateField('finalidade'));
    });
    document.querySelectorAll('input[name="valor"]').forEach((el) => {
      el.addEventListener('change', () => validateField('valor'));
    });

    /* Form submission */
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let allValid = true;
      Object.keys(validators).forEach((key) => {
        if (!validateField(key)) allValid = false;
      });

      if (!allValid) {
        // Scroll to first error
        const firstError = form.querySelector('.field-error:not(:empty)');
        if (firstError) {
          const offset = 80;
          const top = firstError.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        return;
      }

      /* Collect data */
      const data = {
        nome: document.getElementById('nome').value.trim(),
        telefone: document.getElementById('telefone').value.trim(),
        finalidade: document.querySelector('input[name="finalidade"]:checked')?.value,
        credito: document.getElementById('credito').value,
        prazo: document.getElementById('prazo').value,
        valor: document.querySelector('input[name="valor"]:checked')?.value,
        timestamp: new Date().toISOString(),
        source: 'landing_moradia_t3',
      };

      /* Visual loading state */
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        A enviar...
      `;

      /* Simulate submission (replace with real API call) */
      setTimeout(() => {
        console.log('Form data:', data);

        // Call Google Ads conversion tracking
        if (typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion();
        }

        /* Hide form fields, show success */
        const formGroups = form.querySelectorAll('.form-group, .form-privacy, #submitBtn, .form-whatsapp-alternative');
        formGroups.forEach((el) => {
          el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          el.style.opacity = '0';
          el.style.transform = 'translateY(-10px)';
          el.style.pointerEvents = 'none';
        });

        setTimeout(() => {
          formGroups.forEach((el) => (el.style.display = 'none'));
          formSuccess.classList.add('visible');

          /* Scroll to success message */
          const top = formSuccess.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 400);
      }, 1200);
    });
  }

  /* ==================== HERO PARALLAX (subtle) ==================== */
  function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==================== INIT ==================== */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initSmoothScroll();
    initForm();
    initParallax();
  });

})();
