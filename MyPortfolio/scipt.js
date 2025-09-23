// simple accessible nav toggle
  (function () {
      const btn = document.querySelector('.menu-btn');
      const nav = document.getElementById('site-nav');
      if (btn && nav) {
        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          nav.classList.toggle('open');
        });

        // close nav on link click (mobile)
        nav.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
          });
        });
      }
  })();

  /* Project details store */
  const projectsData = {
    "cmrtc-chatbot": {
      title: "CMRTC College Support Chatbot",
      longHtml: `
        <p><strong>Overview:</strong> Full chatbot for the CMRTC college website — backend implemented in Python with a React frontend. Uses sequence-to-vector models for intent detection and vector-to-class mapping to choose appropriate responses. Includes a data module for modifying chatbot content and utility scripts for adding new training data.</p>
        <p><strong>Highlights:</strong> Prototype won 1st place at IIC 7.0. Features modular backend (app logic, data handlers, model transform layers) and a clean React chat UI.</p>
        <p><strong>Tech:</strong> Python, React, NLP, Sequence-to-Vector, Vector-to-Class.</p>
        <p><strong>Year:</strong> 2025</p>`
    },
    "attendance-system": {
      title: "Attendance Management System",
      longHtml: `
        <p><strong>Overview:</strong> Java-based attendance management project built for Java Programming Lab assignments. Implements roles for admin, teacher and student with file-based storage, marking attendance and viewing attendance percentages.</p>
        <p><strong>Highlights:</strong> Role-based actions, file I/O persistence, attendance percentage reports and a simple GUI/CLI where applicable.</p>
        <p><strong>Tech:</strong> Java, File I/O, Swing (optional UI).</p>
        <p><strong>Year:</strong> 2025</p>`
    },
    "summer-ai": {
      title: "Summer of AI 2025 — Multilingual Data App",
      longHtml: `
        <p><strong>Overview:</strong> Team-built Streamlit app to collect multilingual cultural and linguistic data for Viswam.ai. Offline-first, open-source app focused on delivering usable corpora within a 4-week sprint model.</p>
        <p><strong>Highlights:</strong> Multilingual input, audio + text collection, user-acquisition plan and lightweight QC for submissions.</p>
        <p><strong>Tech:</strong> Streamlit, Python, Multilingual NLP.</p>
        <p><strong>Year:</strong> 2025</p>`
    },
    "whatsapp-health": {
      title: "WhatsApp Health-Awareness Chatbot (n8n)",
      longHtml: `
        <p><strong>Overview:</strong> An automated WhatsApp chatbot built with n8n flows to deliver validated disease-awareness content to rural and semi-urban users. Handles registration, FAQ lookups, symptom guidance (informational only) and follow-up resources.</p>
        <p><strong>Highlights:</strong> Keyword routing, templated replies for localization, fallback suggestions and light analytics.</p>
        <p><strong>Tech:</strong> n8n, Twilio/WhatsApp API, Webhooks, SMTP for alerts.</p>
        <p><strong>Year:</strong> 2025</p>`
    },
    "daily-newsletter": {
      title: "Daily Email Newsletter Automation (n8n)",
      longHtml: `
        <p><strong>Overview:</strong> End-to-end automation that aggregates curated sources (Google Sheets, RSS, internal notes), assembles a templated digest and schedules delivery to subscribers with unsubscribe handling.</p>
        <p><strong>Highlights:</strong> Scheduled sends, unsubscribe/bounce handling and hooks for basic metrics.</p>
        <p><strong>Tech:</strong> n8n, SendGrid/Gmail API, Google Sheets/Airtable, cron scheduling.</p>
        <p><strong>Year:</strong> 2025</p>`
    },
    "form-email": {
      title: "Form → Email Automation (n8n)",
      longHtml: `
        <p><strong>Overview:</strong> Reliable automation that triggers personalized confirmation emails and admin notifications when users submit forms (contact/signup/feedback). Supports validation, attachments, and CSV export of submissions.</p>
        <p><strong>Highlights:</strong> Instant confirmation, admin alerts, attachments & CSV exports for offline review.</p>
        <p><strong>Tech:</strong> n8n, form webhooks (HTML/Typeform), SMTP/SendGrid, Google Sheets/Airtable.</p>
        <p><strong>Year:</strong> 2025</p>`
    }
  };

  /* Modal handling */
  (function () {
      const modal = document.getElementById('project-modal');
      const modalTitle = document.getElementById('project-modal-title');
      const modalBody = document.getElementById('project-modal-body');
      const knowBtns = document.querySelectorAll('.know-more');
      let lastFocused = null;

      function openModal(projectId) {
        if (!modal || !modalTitle || !modalBody) return;
        const p = projectsData[projectId];
        if (!p) return;
        modalTitle.innerText = p.title;
        modalBody.innerHTML = p.longHtml;

        modal.removeAttribute('hidden');
        modal.classList.add('show'); // trigger CSS animation
        document.body.style.overflow = 'hidden';
        lastFocused = document.activeElement;

        const panel = modal.querySelector('.project-modal__panel');
        if (panel) panel.focus();
      }

      function closeModal() {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => {
          modal.setAttribute('hidden', '');
          document.body.style.overflow = '';
          if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
          }
        }, 300); // match CSS transition duration
      }

      // open handlers
      knowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.projectId || btn.getAttribute('data-project-id');
          openModal(id);
        });
      });

      // close handlers
      if (modal) {
        modal.querySelectorAll('[data-close]').forEach(el => {
          el.addEventListener('click', () => closeModal());
        });

        // click outside panel to close
        modal.addEventListener('click', (ev) => {
          const panel = modal.querySelector('.project-modal__panel');
          if (panel && !panel.contains(ev.target)) closeModal();
        });
      }

      // ESC to close
      window.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
      });
    })();
// ...existing code...
