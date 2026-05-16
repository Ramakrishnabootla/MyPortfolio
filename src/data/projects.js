export const projectsData = {
  "cmrtc-chatbot": {
    title: "CMRTC College Support Chatbot",
    description: "Full chatbot for the CMRTC college site — backend in Python with a React frontend, using sequence-to-vector and vector-to-class mapping for intent routing.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> Full chatbot for the CMRTC college website — backend implemented in Python with a React frontend. Uses sequence-to-vector models for intent detection and vector-to-class mapping to choose appropriate responses. Includes a data module for modifying chatbot content and utility scripts for adding new training data.</p>
      <p className="mb-4"><strong>Highlights:</strong> Prototype won 1st place at IIC 7.0. Features modular backend (app logic, data handlers, model transform layers) and a clean React chat UI.</p>
      <p className="mb-4"><strong>Tech:</strong> Python, React, NLP, Sequence-to-Vector, Vector-to-Class.</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["Python", "React", "NLP"]
  },
  "attendance-system": {
    title: "Attendance Management System",
    description: "Java-based attendance system with roles for admin/teacher/student, file-based storage and attendance-percent reporting used in lab assignments.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> Java-based attendance management project built for Java Programming Lab assignments. Implements roles for admin, teacher and student with file-based storage, marking attendance and viewing attendance percentages.</p>
      <p className="mb-4"><strong>Highlights:</strong> Role-based actions, file I/O persistence, attendance percentage reports and a simple GUI/CLI where applicable.</p>
      <p className="mb-4"><strong>Tech:</strong> Java, File I/O, Swing (optional UI).</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["Java", "Swing"]
  },
  "summer-ai": {
    title: "Summer of AI 2025 — Multilingual Data App",
    description: "Team-built Streamlit app for multilingual corpus collection (offline-first, open-source) to generate usable data for Viswam.ai within a one-month sprint.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> Team-built Streamlit app to collect multilingual cultural and linguistic data for Viswam.ai. Offline-first, open-source app focused on delivering usable corpora within a 4-week sprint model.</p>
      <p className="mb-4"><strong>Highlights:</strong> Multilingual input, audio + text collection, user-acquisition plan and lightweight QC for submissions.</p>
      <p className="mb-4"><strong>Tech:</strong> Streamlit, Python, Multilingual NLP.</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["Streamlit", "Python", "NLP"]
  },
  "whatsapp-health": {
    title: "WhatsApp Health-Awareness Chatbot (n8n)",
    description: "Automated WhatsApp bot delivering short, validated disease-awareness messages with user flows, FAQ lookup and follow-up resources for low-literacy users.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> An automated WhatsApp chatbot built with n8n flows to deliver validated disease-awareness content to rural and semi-urban users. Handles registration, FAQ lookups, symptom guidance (informational only) and follow-up resources.</p>
      <p className="mb-4"><strong>Highlights:</strong> Keyword routing, templated replies for localization, fallback suggestions and light analytics.</p>
      <p className="mb-4"><strong>Tech:</strong> n8n, Twilio/WhatsApp API, Webhooks, SMTP for alerts.</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["n8n", "Twilio", "Webhooks"]
  },
  "daily-newsletter": {
    title: "Daily Email Newsletter Automation (n8n)",
    description: "Aggregates curated content, builds a templated digest and schedules daily sends with unsubscribe handling and lightweight analytics hooks.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> End-to-end automation that aggregates curated sources (Google Sheets, RSS, internal notes), assembles a templated digest and schedules delivery to subscribers with unsubscribe handling.</p>
      <p className="mb-4"><strong>Highlights:</strong> Scheduled sends, unsubscribe/bounce handling and hooks for basic metrics.</p>
      <p className="mb-4"><strong>Tech:</strong> n8n, SendGrid/Gmail API, Google Sheets/Airtable, cron scheduling.</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["n8n", "SendGrid", "Google Sheets"]
  },
  "form-email": {
    title: "Form → Email Automation (n8n)",
    description: "Triggers personalized confirmation emails and admin notifications on form submission with validation, attachments support and CSV exports.",
    details: `
      <p className="mb-4"><strong>Overview:</strong> Reliable automation that triggers personalized confirmation emails and admin notifications when users submit forms (contact/signup/feedback). Supports validation, attachments, and CSV export of submissions.</p>
      <p className="mb-4"><strong>Highlights:</strong> Instant confirmation, admin alerts, attachments & CSV exports for offline review.</p>
      <p className="mb-4"><strong>Tech:</strong> n8n, form webhooks (HTML/Typeform), SMTP/SendGrid, Google Sheets/Airtable.</p>
      <p className="mb-4"><strong>Year:</strong> 2025</p>
    `,
    year: 2025,
    tech: ["n8n", "SMTP", "Google Sheets"]
  }
};

export const educationData = [
  {
    id: "btech",
    name: "CMR TECHNICAL CAMPUS",
    degree: "B.Tech in CSE(AIML)",
    years: "(2024-2027)"
  },
  {
    id: "diploma",
    name: "Jyothishmathi Institute of Tech & Sci",
    degree: "Diploma in EEE",
    years: "(2021-2024)"
  },
  {
    id: "school",
    name: "ST. VINCENT PALLOTTI SCHOOL",
    degree: "High School",
    years: "(2021)"
  },
  {
    id: "courses",
    name: "Courses",
    degree: "HTML, CSS, React, Java, Python, Data Structures, Automation (N8N)",
    years: ""
  }
];
