import { 
  Project, 
  SkillCategory, 
  JourneyMilestone, 
  FocusArea, 
  BeyondCodeItem, 
  StatItem,
  EducationItem,
  CertificateItem
} from '../types';

export const PERSONAL_INFO = {
  name: "Aman Kr.",
  role: "Computer Science Student & Aspiring Software Engineer",
  location: "India",
  status: "Available for Opportunities",
  email: "akmkr7551@gmail.com",
  github: "https://github.com/amankr0026",
  linkedin: "https://linkedin.com",
  cvUrl: "https://drive.google.com/file/d/1jerCZYtNDqHyqxJKOkbhkgpv01-ynTuy/view?usp=sharing",
  cvPreviewUrl: "https://drive.google.com/file/d/1jerCZYtNDqHyqxJKOkbhkgpv01-ynTuy/preview",
  heroSubtitle: "Building my foundation in software engineering through C++, Data Structures & Algorithms, web development, and hands-on projects.",
  aboutHeadline: "A little about me.",
  aboutParagraphs: [
    "I'm currently building a strong foundation in Computer Science and software engineering. My journey started with Python, which introduced me to programming, and I am now focusing heavily on C++, Data Structures & Algorithms, and practical software development.",
    "I believe the best way to learn programming is to build, break, debug, and build again. My goal is to keep improving my problem-solving skills while creating useful and meaningful projects."
  ],
  devProfile: {
    name: "Aman Kr.",
    focus: "Software Development",
    languages: "C++ • Python • JavaScript",
    learning: "DSA • Web Development • Modern Systems",
    interest: "AI • Technology • Scalable Software",
    basedIn: "India",
    status: "Computer Science Student"
  }
};

export const QUICK_STATS: StatItem[] = [
  {
    id: "stat-1",
    badge: "01",
    number: "01",
    label: "Programming Journey",
    sublabel: "From Python fundamentals to C++ systems & DSA",
    detail: "Consistently learning and advancing core CS foundations."
  },
  {
    id: "stat-2",
    badge: "02",
    number: "02",
    label: "Core Focus",
    sublabel: "C++ • Data Structures & Algorithms",
    detail: "Solving problems with a focus on time & space complexity."
  },
  {
    id: "stat-3",
    badge: "03",
    number: "03",
    label: "Projects",
    sublabel: "Hands-on Development",
    detail: "Turning conceptual knowledge into functional, well-tested code."
  },
  {
    id: "stat-4",
    badge: "∞",
    number: "∞",
    label: "Learning Mindset",
    sublabel: "Continuous Growth & Curiosity",
    detail: "Embracing challenges, debugging with rigor, and iterating daily."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages I write to solve problems, build applications, and learn computer systems.",
    icon: "Code2",
    skills: [
      {
        name: "C++",
        level: "Core Strength",
        highlight: "Pointers, Memory Layout, OOP, STL Containers, Competitive Logic",
        category: "Programming"
      },
      {
        name: "Python",
        level: "Core Strength",
        highlight: "Scripting, Automation, Data Structures, Foundation Language",
        category: "Programming"
      },
      {
        name: "JavaScript",
        level: "Actively Using",
        highlight: "ES6+, DOM Manipulation, Async/Await, Web Interactivity",
        category: "Programming"
      },
      {
        name: "HTML5",
        level: "Actively Using",
        highlight: "Semantic Markup, Accessibility, Clean Document Structure",
        category: "Programming"
      },
      {
        name: "CSS3",
        level: "Actively Using",
        highlight: "Flexbox, Grid, Responsive Design, CSS Variables, Tailwind",
        category: "Programming"
      }
    ]
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science",
    description: "Core theoretical pillars that power efficient problem-solving and software design.",
    icon: "Binary",
    skills: [
      {
        name: "Data Structures",
        level: "Core Strength",
        highlight: "Arrays, Linked Lists, Stacks, Queues, Trees, Hash Maps",
        category: "Computer Science"
      },
      {
        name: "Algorithms",
        level: "Core Strength",
        highlight: "Searching, Sorting, Recursion, Two Pointers, Sliding Window, Asymptotic Analysis",
        category: "Computer Science"
      },
      {
        name: "Object-Oriented Programming",
        level: "Core Strength",
        highlight: "Encapsulation, Inheritance, Polymorphism, Abstraction, Clean Code Structure",
        category: "Computer Science"
      },
      {
        name: "Problem Solving",
        level: "Core Strength",
        highlight: "Algorithmic thinking, edge case validation, step-by-step debugging",
        category: "Computer Science"
      },
      {
        name: "Basic Computer Networks",
        level: "Fundamental Understanding",
        highlight: "OSI Model, TCP/IP, HTTP/HTTPS, DNS, Client-Server Architecture",
        category: "Computer Science"
      },
      {
        name: "Database Fundamentals",
        level: "Fundamental Understanding",
        highlight: "Relational Concepts, Tables, Schema Design, SQL Queries & Keys",
        category: "Computer Science"
      }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building responsive, modern, user-friendly digital experiences.",
    icon: "Layout",
    skills: [
      {
        name: "React",
        level: "Actively Using",
        highlight: "Functional Components, Hooks, State Management, Component Architecture",
        category: "Web Development"
      },
      {
        name: "Responsive Design",
        level: "Actively Using",
        highlight: "Mobile-First layouts, Fluid Typography, Breakpoints, Cross-Device Polish",
        category: "Web Development"
      },
      {
        name: "Modern UI Styling",
        level: "Actively Using",
        highlight: "Tailwind CSS, Dark Mode Architecture, CSS Micro-interactions",
        category: "Web Development"
      },
      {
        name: "DOM & Browser APIs",
        level: "Actively Using",
        highlight: "Event Handling, Local Storage, Fetch API, Smooth Scroll",
        category: "Web Development"
      }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "Essential workflow utilities, version control, and environments used daily.",
    icon: "Terminal",
    skills: [
      {
        name: "Git",
        level: "Actively Using",
        highlight: "Branching, Merging, Commits, Version History, Conflict Resolution",
        category: "Tools"
      },
      {
        name: "GitHub",
        level: "Actively Using",
        highlight: "Repository Management, Pull Requests, Code Reviews, Collaboration",
        category: "Tools"
      },
      {
        name: "VS Code",
        level: "Actively Using",
        highlight: "C++ Toolchain, Extensions, Integrated Debugger, Keybindings",
        category: "Tools"
      },
      {
        name: "Linux / CLI",
        level: "Actively Using",
        highlight: "Bash commands, File System Navigation, Compiling via g++/clang, Shell",
        category: "Tools"
      },
      {
        name: "Vercel",
        level: "Actively Using",
        highlight: "Deployment, CI/CD integrations, Live Preview Links",
        category: "Tools"
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "attendify",
    title: "Attendify",
    category: "web-dev",
    categoryLabel: "Web Application • Smart Attendance",
    shortDescription: "A smart, responsive attendance tracking and calculation web app that enables students to monitor class attendance, analyze criteria percentages, and calculate safe-absence margins.",
    role: "Creator & Frontend Developer",
    status: "Live & Deployed",
    tags: ["React", "JavaScript", "LocalStorage", "Analytics", "Responsive UI", "Tailwind CSS"],
    githubUrl: "https://github.com/amankr0026/attendify",
    liveDemoUrl: "https://amankr0026.github.io/attendify/",
    featured: true,
    accentColor: "indigo",
    caseStudy: {
      overview: "Attendify is an intuitive, privacy-friendly attendance management tool built to help students effortlessly maintain their required attendance criteria (e.g., 75% rule). It eliminates guesswork by providing real-time calculations of current percentage status, critical danger warnings, and exact counts of classes you can afford to miss or must attend.",
      problem: "College students often struggle to keep track of attendance across multiple courses with varying schedules and attendance policies, frequently resulting in debarment surprises or stressful manual calculations.",
      approach: "Built a fast, zero-login client-side web application leveraging browser localStorage for instant data persistence, paired with an algorithmic calculation engine that dynamically updates percentage margins on every attendance toggle.",
      techStackDetails: [
        { category: "Frontend & UI", items: ["HTML5", "CSS3 / Tailwind CSS", "Modern JavaScript (ES6+)", "Responsive Grid Layouts"] },
        { category: "State & Storage", items: ["Client-side LocalStorage Engine", "Real-time Attendance Algorithm", "JSON Schema Serialization"] },
        { category: "Deployment", items: ["GitHub Pages", "Git Version Control", "Live Continuous Deployment"] }
      ],
      keyFeatures: [
        {
          title: "Instant Percentage & Margin Calculation",
          description: "Instantly computes overall and subject-specific attendance percentages, calculating exact required attendances or safe absences."
        },
        {
          title: "Subject-Wise Custom Profiles",
          description: "Add, edit, and categorize courses with custom target criteria percentages (e.g., 75%, 80%, or 85%)."
        },
        {
          title: "Persistent Browser Storage",
          description: "Automatically saves all subject records and attendance history directly in the browser's localStorage without requiring external database setups."
        },
        {
          title: "Dynamic Visual Status Alerts",
          description: "Color-coded visual indicators immediately highlight which subjects are in the safe zone or require urgent attendance."
        }
      ],
      challenges: [
        {
          challenge: "Designing mathematical formulas that accurately handle edge cases (e.g., 0 total classes, 100% attendance, fractional percentages).",
          solution: "Implemented robust boundary conditions and zero-division guards to ensure bulletproof calculations under any state."
        },
        {
          challenge: "Creating an ultra-fast mobile workflow so students can update records in 2 seconds between classes.",
          solution: "Designed one-tap increment/decrement buttons with haptic visual feedback and minimal tap friction."
        }
      ],
      whatILearned: [
        "How to translate student daily pain points into a dependable, zero-friction digital solution.",
        "Best practices for reliable client-side state persistence and schema evolution in localStorage.",
        "Refining mobile responsiveness and touch-friendly user interfaces."
      ],
      futureImprovements: [
        "Timetable integration with automated lecture reminders.",
        "One-click data export and backup in CSV / JSON format.",
        "Dark / Light theme customizer."
      ]
    }
  },
  {
    id: "staymate",
    title: "StayMate",
    category: "web-dev",
    categoryLabel: "Web Application • Accommodation Finder",
    shortDescription: "A comprehensive student accommodation and hostel discovery platform featuring multi-attribute search filtering, room amenities showcases, and direct property inquiry workflows.",
    role: "Frontend & UX Developer",
    status: "Live & Deployed",
    tags: ["React", "SPA Architecture", "HashRouter", "Search & Filter", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/amankr0026/staymate",
    liveDemoUrl: "https://amankr0026.github.io/staymate/#/",
    featured: true,
    accentColor: "emerald",
    caseStudy: {
      overview: "StayMate is a modern single-page web platform designed to simplify finding student accommodations, hostels, and PGs near universities. It connects students with verified listings, clear pricing structures, transparent amenity breakdowns, and direct contact channels.",
      problem: "Students moving to new cities often face fragmented hostel listings, unverified room conditions, hidden charges, and difficult communication with property managers.",
      approach: "Architected a responsive Single-Page Application (SPA) with dynamic filtering pipelines (price, room type, gender preference, amenities), high-resolution gallery cards, and interactive inquiry triggers.",
      techStackDetails: [
        { category: "Frontend Framework", items: ["React", "JavaScript (ES6+)", "HashRouter SPA Routing", "Lucide Icons"] },
        { category: "Styling & UX", items: ["Tailwind CSS", "Responsive Bento Grid", "Smooth Micro-interactions"] },
        { category: "Hosting & Tools", items: ["GitHub Pages", "Git Version Control", "Component-Driven Architecture"] }
      ],
      keyFeatures: [
        {
          title: "Multi-Attribute Search & Filter Engine",
          description: "Filter accommodations seamlessly by rent budget, room sharing configuration (single/double/triple), gender preference, and facilities (Wi-Fi, AC, Mess)."
        },
        {
          title: "Rich Property Detail Cards",
          description: "Detailed cards highlighting verified pricing, room amenities, distance to campus, and image galleries."
        },
        {
          title: "Direct Inquiry & Visit Scheduling",
          description: "Built-in inquiry workflows allowing users to request room visits or directly contact hostel owners."
        },
        {
          title: "HashRouter SPA Navigation",
          description: "Flawless client-side routing tailored for static hosting environments on GitHub Pages without 404 reload errors."
        }
      ],
      challenges: [
        {
          challenge: "Preventing broken page refreshes on static GitHub Pages hosting when using client-side routing.",
          solution: "Configured React HashRouter (`/#/`) to handle deep links and route transitions reliably across any static CDN."
        },
        {
          challenge: "Balancing detailed property information with clean, non-overwhelming visual card density.",
          solution: "Organized data into structured badge chips, expandable details, and clear visual hierarchy."
        }
      ],
      whatILearned: [
        "Designing scalable data filtering algorithms across complex multi-criteria arrays in React.",
        "Structuring maintainable component trees for discovery and directory platforms.",
        "Optimizing SPA performance and asset delivery for high-speed page loads."
      ],
      futureImprovements: [
        "Interactive campus distance calculator with map integration.",
        "Verified student review system with rating breakdowns for food, cleanliness, and security.",
        "Wishlist and saved properties comparison tool."
      ]
    }
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "milestone-1",
    step: "01",
    title: "Started Programming",
    period: "Foundation Phase",
    description: "Began learning Python, discovering the joy of turning logic into code. Built foundational understanding of variables, loops, functions, and algorithmic basics.",
    takeaways: [
      "Wrote first scripts & basic automation",
      "Learned fundamental control flow and modular functions",
      "Developed an appetite for solving computational puzzles"
    ],
    status: "completed",
    icon: "Sparkles"
  },
  {
    id: "milestone-2",
    step: "02",
    title: "Moved to C++",
    period: "Systems & OOP Phase",
    description: "Transitioned to C++ to understand lower-level concepts: pointers, memory management, and Object-Oriented Programming (Classes, Inheritance, Polymorphism, Encapsulation).",
    takeaways: [
      "Mastered pointers, references, and memory allocation",
      "Applied OOP principles to model structured applications",
      "Gained appreciation for compiled language efficiency"
    ],
    status: "completed",
    icon: "Cpu"
  },
  {
    id: "milestone-3",
    step: "03",
    title: "Data Structures & Algorithms",
    period: "Algorithmic Focus",
    description: "Deepened study of DSA to strengthen problem-solving capabilities. Practiced implementing arrays, linked lists, stacks, queues, trees, and standard algorithms.",
    takeaways: [
      "Analyzed time and space complexity with Big-O notation",
      "Implemented fundamental data structures from scratch",
      "Strengthened problem-solving speed and edge case analysis"
    ],
    status: "completed",
    icon: "Binary"
  },
  {
    id: "milestone-4",
    step: "04",
    title: "Building Practical Projects",
    period: "Hands-on Development",
    description: "Started applying programming knowledge to real-world software, exploring web technologies, interactive interfaces, and combining C++ logic with user-facing systems.",
    takeaways: [
      "Built responsive web interfaces with React and Tailwind",
      "Designed structured repositories with clean documentation",
      "Embraced iterative building: code, break, debug, refine"
    ],
    status: "current",
    icon: "Rocket"
  },
  {
    id: "milestone-5",
    step: "05",
    title: "What's Next",
    period: "Future Exploration",
    description: "Continuing to advance DSA mastery, exploring scalable software engineering practices, deeper systems programming, and emerging AI technologies.",
    takeaways: [
      "Solve advanced algorithmic problems (Graphs & DP)",
      "Explore AI/ML integration in real-world applications",
      "Collaborate on open-source projects & software teams"
    ],
    status: "upcoming",
    icon: "Compass"
  }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "focus-cpp",
    title: "C++ Advanced Concepts",
    description: "Deepening knowledge of modern C++, Standard Template Library (STL), memory management, and performance optimization.",
    currentStage: "Building",
    stageIndex: 1,
    technologies: ["C++17/20", "STL", "Pointers & References", "Templates"]
  },
  {
    id: "focus-dsa",
    title: "Data Structures & Algorithms",
    description: "Consistent problem-solving covering trees, graphs, dynamic programming, and competitive algorithmic patterns.",
    currentStage: "Testing",
    stageIndex: 2,
    technologies: ["Binary Trees", "Graphs", "Dynamic Programming", "Big-O Optimization"]
  },
  {
    id: "focus-oop",
    title: "Object-Oriented Programming",
    description: "Designing maintainable, decoupled software architectures using solid OOP principles, design patterns, and clean code paradigms.",
    currentStage: "Improving",
    stageIndex: 3,
    technologies: ["Encapsulation", "Polymorphism", "Inheritance", "Modularity"]
  },
  {
    id: "focus-web",
    title: "Web Development",
    description: "Creating responsive, fast, and accessible user interfaces with modern React, TypeScript, and modern styling toolchains.",
    currentStage: "Building",
    stageIndex: 1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: "focus-ai",
    title: "Artificial Intelligence & Emerging Tech",
    description: "Exploring the fundamentals of AI, machine learning concepts, and practical integrations of modern AI models into software.",
    currentStage: "Learning",
    stageIndex: 0,
    technologies: ["AI Fundamentals", "Python Data Tools", "API Integrations", "Emerging Tech"]
  }
];

export const BEYOND_CODE_ITEMS: BeyondCodeItem[] = [
  {
    id: "interest-gaming",
    title: "Gaming",
    emoji: "🎮",
    category: "Strategy & Play",
    description: "I enjoy gaming and exploring tactical, story-rich, and multiplayer titles. It keeps my reflexes sharp and inspires my interest in graphics and game engines.",
    connectionToEngineering: "Nurtures quick strategic decision-making and appreciation for low-latency systems."
  },
  {
    id: "interest-gym",
    title: "Gym & Fitness",
    emoji: "🏋️",
    category: "Discipline & Health",
    description: "Fitness is one of the primary ways I maintain discipline, mental clarity, and consistency. Regular training teaches that consistent daily effort yields compounding progress.",
    connectionToEngineering: "Parallels the programming journey: steady consistency beats occasional intensity."
  },
  {
    id: "interest-esports",
    title: "Esports",
    emoji: "🏆",
    category: "Competitive Spirit",
    description: "I enjoy following competitive gaming ecosystems, tournament meta-strategies, and the teamwork required to execute high-pressure plays.",
    connectionToEngineering: "Highlights the value of clear communication, role delegation, and rapid adaptation."
  },
  {
    id: "interest-tech",
    title: "Technology & Hardware",
    emoji: "💡",
    category: "Curiosity & Exploration",
    description: "I like exploring new technologies, understanding how hardware components interact with operating systems, and keeping up with industry innovations.",
    connectionToEngineering: "Fuels curiosity to understand what happens beneath the software abstractions."
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "edu-lpu",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    grade: "8.04 CGPA",
    gradeType: "CGPA",
    period: "Aug 2025 - Present",
    location: "Phagwara, Punjab",
    status: "current",
    highlights: [
      "Core curriculum: Data Structures & Algorithms, Object-Oriented Programming (C++), Operating Systems & Computer Architecture",
      "Building practical software engineering fundamentals with strong algorithmic problem-solving",
      "Actively developing full-stack web applications and technical CS projects"
    ]
  },
  {
    id: "edu-dav-xii",
    institution: "D.A.V Public School, Ara Kuju",
    degree: "Higher Secondary Education (Class XII)",
    field: "Science Stream (PCM & Computer Science)",
    grade: "85%",
    gradeType: "Percentage",
    period: "May 2023 - Mar 2025",
    location: "Ramgarh, Jharkhand",
    status: "completed",
    highlights: [
      "Rigorous foundations in Physics, Chemistry, Mathematics, and Computer Science fundamentals",
      "Developed strong quantitative analysis and logical deduction skills",
      "Consistent academic performance across analytical disciplines"
    ]
  },
  {
    id: "edu-dav-x",
    institution: "D.A.V Public School, Ara Kuju",
    degree: "Secondary Education (Class X)",
    field: "General & Foundational Sciences",
    grade: "92%",
    gradeType: "Percentage",
    period: "Jun 2022 - Mar 2023",
    location: "Ramgarh, Jharkhand",
    status: "completed",
    highlights: [
      "High academic standing graduating with distinction (92%)",
      "Excellence in Mathematics, Science, and Analytical Studies",
      "Participated in school science and competitive logic activities"
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-fullstack",
    title: "Learn Full Stack Web Development from Frontend to Backend",
    category: "Full Stack Development",
    issuer: "Certified Web Course",
    issueDate: "Sep 2025",
    credentialUrl: "https://drive.google.com/file/d/1_xRRjxnaa-cWSV7lbq2o00T4MXi-AFb3/view?usp=sharing",
    skills: ["React", "JavaScript (ES6+)", "Node.js Basics", "RESTful APIs", "HTML5 & CSS3", "Modern Frontend Architecture"],
    description: "Comprehensive end-to-end training covering client-side component architecture, responsive styling, API communication, backend integration, and full lifecycle web application delivery."
  },
  {
    id: "cert-python",
    title: "Master Python Programming with OOP, Data Structures, and Libraries",
    category: "Python & Core Programming",
    issuer: "Certified Python Masterclass",
    issueDate: "May 2025",
    credentialUrl: "https://drive.google.com/file/d/1ST6XJL74iYAAoRts9XRDr4sMFbbgT8ay/view?usp=sharing",
    skills: ["Python 3", "Object-Oriented Programming", "Data Structures", "Standard Libraries", "Modular Code", "Algorithm Logic"],
    description: "In-depth specialization into Python core concepts, object-oriented design patterns, complex data structure manipulation, script automation, and practical standard library modules."
  }
];

