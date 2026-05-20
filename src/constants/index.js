import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiN8N,
  SiStreamlit,
  SiGnubash,
  SiMysql,
} from "react-icons/si";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const aboutMe = {
  name: "RamaKrishna Bootla",
  githubUsername: "Ramakrishnabootla",
  tagLine: "B.Tech CSE(AIML) Student • Full Stack & AI Developer",
  intro: "Passionate about building innovative solutions combining full-stack development with AI/ML. Experienced in automation, chatbots, and scalable applications.",
};

export const socialMedia = [
  {
    id: "github",
    icon: FaGithub,
    link: "https://github.com/Ramakrishnabootla",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ramakrishna-bootla-7ba1b5338/",
  },
  {
    id: "mail",
    icon: FaEnvelope,
    link: "mailto:bootlaramakrsihna0@gmail.com",
  },
  {
    id: "phone",
    icon: FaPhone,
    link: "tel:+919603125954",
  },
];

export const resumeLink = "";
export const repoLink = "https://github.com/Ramakrishnabootla";
export const callToAction = "https://www.linkedin.com/in/ramakrishna-bootla-7ba1b5338/";

export const skills = [
  {
    title: "Programming & Backend",
    items: [
      {
        id: "java",
        icon: FaJava,
        name: "Java",
      },
      {
        id: "python",
        icon: FaPython,
        name: "Python",
      },
      {
        id: "javascript",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "node",
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        id: "express",
        icon: FaNodeJs,
        name: "Express",
      },
      {
        id: "react",
        icon: FaReact,
        name: "React",
      },
      {
        id: "tailwind",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "sql",
        icon: FaDatabase,
        name: "SQL",
      },
      {
        id: "nosql",
        icon: FaDatabase,
        name: "NoSQL",
      },
      {
        id: "mysql",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "mongodb",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "git",
        icon: FaGitAlt,
        name: "Git",
      },
      {
        id: "github",
        icon: FaGithub,
        name: "GitHub",
      },
      {
        id: "n8n",
        icon: SiN8N,
        name: "N8N",
      },
      {
        id: "bash",
        icon: SiGnubash,
        name: "Bash",
      },
    ],
  },
];

export const experiences = [
  
  {
    organisation: "Hexart.In",
    logo: "/images/hexart-logo.png",
    link: "https://hexart.in",
    positions: [
      {
        title: "Machine Learning Intern",
        duration: "Nov 2025 - Mar 2026",
        content: [
          {
            text: "Developed end-to-end computer vision pipeline using YOLOv8 for object detection and ORB for feature matching",
            link: "",
          },
          {
            text: "Implemented embedding-based search and retrieval to improve matching accuracy in noisy environments",
            link: "",
          },
          {
            text: "Optimized inference and data pipelines, improving processing throughput by 2x",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Viswam.AI",
    logo: "/images/viswam-logo.png",
    link: "https://viswam.ai",
    positions: [
      {
        title: "AI Developer Intern",
        duration: "Jun 2025 - Jul 2025",
        content: [
          {
            text: "Built multimodal data collection pipelines for voice, text, and image inputs",
            link: "",
          },
          {
            text: "Assisted in training lightweight models and evaluation suites for edge deployment",
            link: "",
          },
          {
            text: "Contributed to data labeling strategies and automated quality checks",
            link: "",
          },
        ],
      },
    ],
  },
];

export const educationList = [
  {
    id: "btech",
    icon: "",
    title: "B.Tech CSE(AIML)",
    degree: "Bachelor of Technology in Computer Science (Artificial Intelligence & Machine Learning)",
    duration: "(2024-2027)",
    content1: "CMR TECHNICAL CAMPUS",
    content2: "",
  },
  {
    id: "diploma",
    icon: "",
    title: "Diploma in EEE",
    degree: "Diploma in Electrical and Electronics Engineering",
    duration: "(2021-2024)",
    content1: "Jyothishmathi Institute of Tech & Sci",
    content2: "",
  },
  {
    id: "hsc",
    icon: "",
    title: "High School",
    degree: "Secondary Education",
    duration: "(2021)",
    content1: "ST. VINCENT PALLOTTI SCHOOL",
    content2: "",
  },
];

export const achievements = [
  {
    id: "si-hackathon-2024",
    icon: "🏅",
    event: "Smart India Hackathon 2024",
    position: "Selected (College Level)",
    content1: "Selected to represent CMR Technical Campus at Smart India Hackathon 2024",
    content2: "Contributed to a prototype addressing real-world challenges",
    content3: "",
    article: "",
    youtube: "",
    github: "",
    project: "",
  },
  {
    id: "iic-1st",
    icon: "🏆",
    event: "Institute Innovation Council",
    position: "1st Place",
    content1: "1st place for CMRTC College Support Chatbot",
    content2: "Led development of an NLP-based student support system",
    content3: "",
    article: "",
    youtube: "",
    github: "https://github.com/Ramakrishnabootla",
    project: "CMRTC College Support Chatbot",
  },
  {
    id: "robotics-1st",
    icon: "🤖",
    event: "Robotics Competition",
    position: "1st Place",
    content1: "1st place for a mobile-operated robot solution",
    content2: "Designed control systems and integrating teleoperation",
    content3: "",
    article: "",
    youtube: "",
    github: "",
    project: "",
  },
  {
    id: "business-buzz-2nd",
    icon: "💡",
    event: "Business Buzz",
    position: "2nd Place",
    content1: "2nd place for a solar-based tracking system business model",
    content2: "Presented market analysis and prototype plan",
    content3: "",
    article: "",
    youtube: "",
    github: "",
    project: "",
  },
  {
    id: "leadership-roles",
    icon: "🎯",
    event: "Club Roles",
    position: "President / Event Lead / Executive Member",
    content1: "President 2026, Event Lead 2025, Executive Member at AI Club CMRTC",
    content2: "Organized workshops and hackathons, mentored juniors",
    content3: "",
    article: "",
    youtube: "",
    github: "",
    project: "",
  },
];

export const projects = [
  {
    id: "p-blue-collar",
    title: "Blue Collar - Field Workforce App",
    github: "https://github.com/Ramakrishnabootla",
    link: "https://bluecollarworkers.vercel.app",
    knowMore: true,
    image: "/images/project-blue-collar.png",
    content: "Mobile-first workforce management app for blue-collar teams with attendance, task assignment, and offline sync",
    details:
      "Designed to streamline field workforce operations with offline support, task management, and attendance tracking for mobile teams.",
    stack: [
      { id: "react", icon: FaReact, name: "React" },
      { id: "node", icon: FaNodeJs, name: "Node.js" },
    ],
  },
  {
    id: "p-voice-agent",
    title: "Voice Agent - Conversational Voice Assistant",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    knowMore: true,
    image: "/images/project-voice-agent.png",
    content: "Voice-enabled agent integrating speech-to-text and TTS for customer support workflows",
    details:
      "Built a voice-first assistant that routes customer requests using speech recognition and natural language response flows.",
    stack: [
      { id: "python", icon: FaPython, name: "Python" },
      { id: "streamlit", icon: SiStreamlit, name: "Streamlit" },
    ],
  },
  {
    id: "p-chatbot",
    title: "CMRTC College Support Chatbot",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-cmrtc-chatbot.png",
    content: "Full chatbot for CMRTC college site with Python backend and React frontend using NLP for intent routing",
    stack: [
      {
        id: "python",
        icon: FaPython,
        name: "Python",
      },
      {
        id: "react",
        icon: FaReact,
        name: "React",
      },
    ],
  }, 
  
  {
    id: "4",
    title: "WhatsApp Health-Awareness Chatbot",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-whatsapp-chatbot.png",
    content: "Automated WhatsApp bot using n8n delivering health awareness with user flows and FAQ lookup",
    stack: [
      {
        id: "n8n",
        icon: SiN8N,
        name: "N8N",
      },
    ],
  },
  {
    id: "5",
    title: "Daily Email Newsletter Automation",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-newsletter.svg",
    content: "End-to-end automation aggregating content and scheduling daily newsletter sends",
    stack: [
      {
        id: "n8n",
        icon: SiN8N,
        name: "N8N",
      },
    ],
  },
  {
    id: "6",
    title: "Form → Email Automation",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-form-email.svg",
    content: "Reliable automation for personalized confirmations and admin notifications with CSV exports",
    stack: [
      {
        id: "n8n",
        icon: SiN8N,
        name: "N8N",
      },
    ],
  },
  {
    id: "2",
    title: "Attendance Management System",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-attendance.svg",
    content: "Java-based attendance system with role-based access for admin/teacher/student with file-based storage",
    stack: [
      {
        id: "java",
        icon: FaJava,
        name: "Java",
      },
    ],
  },
  {
    id: "3",
    title: "Summer of AI 2025 - Multilingual Data App",
    github: "https://github.com/Ramakrishnabootla",
    link: "",
    image: "/images/project-summer-ai.svg",
    content: "Team-built Streamlit app for multilingual corpus collection with offline-first approach",
    stack: [
      {
        id: "streamlit",
        icon: SiStreamlit,
        name: "Streamlit",
      },
      {
        id: "python",
        icon: FaPython,
        name: "Python",
      },
    ],
  },
];

export const extraCurricular = [
  {
    id: "1",
    organisation: "Innovation Club",
    logo: "",
    title: "Active Member",
    duration: "2024 - Present",
    content: [
      {
        text: "Participating in innovation challenges and hackathons",
        link: "",
      },
      {
        text: "Collaborating on cutting-edge projects",
        link: "",
      },
    ],
  },
];

export const blogPosts = [];

export const stats = {
  organisations: 0,
  issuesOpened: 0,
  pullRequests: 0,
};

export const itemsToFetch = 20;
