import { 
  Project, 
  SkillCategory, 
  JourneyMilestone, 
  FocusArea, 
  BeyondCodeItem, 
  StatItem 
} from '../types';

export const PERSONAL_INFO = {
  name: "Aman Kr.",
  role: "Computer Science Student & Aspiring Software Engineer",
  location: "India",
  status: "Available for Opportunities",
  email: "akmkr7551@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
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
    id: "dsa-practice-algorithms",
    title: "DSA Practice & Algorithms Suite",
    category: "c++-dsa",
    categoryLabel: "C++ • Algorithms",
    shortDescription: "A structured collection of C++ implementations covering fundamental data structures, search/sort algorithms, and problem-solving patterns with time/space complexity analysis.",
    role: "Lead Developer / Student Engineer",
    status: "Active Practice & Growth",
    tags: ["C++", "Data Structures", "Algorithms", "STL", "Problem Solving"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
    featured: true,
    accentColor: "emerald",
    caseStudy: {
      overview: "A comprehensive repository of C++ implementations built to master Data Structures and Algorithms from first principles. It includes custom implementations of linear and non-linear data structures, alongside step-by-step solutions to classic algorithmic challenges.",
      problem: "When learning data structures, relying solely on built-in libraries can create a gap in understanding how memory allocation, pointers, and algorithmic trade-offs operate under the hood.",
      approach: "Built data structures (like Linked Lists, Stacks, Queues, Binary Trees, and Min/Max Heaps) from scratch using C++ pointers and dynamic memory management before utilizing the Standard Template Library (STL). Benchmarked asymptotic complexity and documented edge cases.",
      techStackDetails: [
        { category: "Core Language", items: ["C++17 / C++20", "GCC / Clang Compiler"] },
        { category: "Concepts", items: ["Pointers & Dynamic Memory", "Templates", "STL (Vectors, Maps, Sets)", "Recursion"] },
        { category: "Environment", items: ["VS Code", "Linux Terminal (g++)", "GDB Debugger"] }
      ],
      keyFeatures: [
        {
          title: "Custom Data Structure Implementations",
          description: "Handcrafted Singly & Doubly Linked Lists, Dynamic Arrays, Binary Search Trees, and Priority Queues with memory leak checks."
        },
        {
          title: "Algorithmic Pattern Categorization",
          description: "Solutions grouped by patterns: Two Pointers, Sliding Window, Binary Search, Divide & Conquer, and Tree Traversals (DFS/BFS)."
        },
        {
          title: "Asymptotic Complexity Documentation",
          description: "Every problem includes documented Worst-Case, Average-Case, and Best-Case Time and Auxiliary Space complexities."
        },
        {
          title: "Rigorous Test Harness",
          description: "Unit tests covering boundary conditions: empty structures, single-node trees, duplicates, and large inputs."
        }
      ],
      challenges: [
        {
          challenge: "Managing pointers and avoiding segmentation faults in self-referencing nodes.",
          solution: "Implemented careful null checks, clear memory deallocation routines in destructors, and utilized GDB to trace stack frames."
        },
        {
          challenge: "Balancing readability with competitive programming efficiency.",
          solution: "Structured clean modular files with descriptive variable names while utilizing efficient pass-by-reference semantics."
        }
      ],
      whatILearned: [
        "Deep intuitive understanding of pointer arithmetic and heap vs. stack memory allocation in C++.",
        "How to mathematically analyze Big-O time and space complexity rather than guessing.",
        "The internal mechanisms behind STL containers like std::vector resizing and std::unordered_map hashing.",
        "The discipline of breaking down complex problems into verifiable sub-problems."
      ],
      futureImprovements: [
        "Add graph algorithms (Dijkstra, Topological Sort, Disjoint Set Union).",
        "Implement interactive ASCII visualizer for tree rotations and heap operations.",
        "Add dynamic programming category with memoization vs. tabulation comparisons."
      ]
    }
  },
  {
    id: "personal-portfolio-platform",
    title: "Personal Engineering Portfolio",
    category: "web-dev",
    categoryLabel: "Web Development",
    shortDescription: "A modern, high-performance responsive portfolio crafted to showcase technical growth, interactive project case studies, and engineering philosophy.",
    role: "UI/UX & Frontend Developer",
    status: "Completed & Maintained",
    tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Responsive Design"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
    featured: true,
    accentColor: "cyan",
    caseStudy: {
      overview: "A custom-designed developer portfolio engineered with a minimal, dark-first aesthetic. It focuses on clarity, typography, interactive terminal elements, and structured engineering case studies.",
      problem: "Standard generic templates often feel cluttered with exaggerated claims or lack authentic student storytelling with deep architectural case studies.",
      approach: "Designed a clean, content-first layout with high visual hierarchy, subtle micro-interactions, responsive typography, and dedicated modal deep dives for each project.",
      techStackDetails: [
        { category: "Frontend Framework", items: ["React 18+", "TypeScript", "Vite"] },
        { category: "Styling & Animations", items: ["Tailwind CSS", "Motion", "JetBrains Mono"] },
        { category: "Deployment", items: ["Vercel", "Git Version Control"] }
      ],
      keyFeatures: [
        {
          title: "Original Dark-First Aesthetic",
          description: "High-contrast palette with near-black backgrounds, muted slate text, and crisp emerald accents."
        },
        {
          title: "Deep-Dive Case Study Modals",
          description: "Detailed breakdowns of problems, engineering approaches, challenges, and key learnings."
        },
        {
          title: "Interactive Live Terminal Widget",
          description: "Hero code execution loop demonstrating programming mindset with clean syntax highlighting."
        },
        {
          title: "Fully Responsive & Accessible",
          description: "Seamless navigation with hamburger menus for mobile, touch-friendly targets, and semantic tags."
        }
      ],
      challenges: [
        {
          challenge: "Creating smooth, non-distracting animations that enhance rather than slow down navigation.",
          solution: "Leveraged hardware-accelerated transforms and lightweight Motion springs with constrained spring parameters."
        },
        {
          challenge: "Structuring data so projects, skills, and timeline can be updated with zero code friction.",
          solution: "Separated portfolio content into strictly typed TypeScript data modules."
        }
      ],
      whatILearned: [
        "Mastery of modern component composition in React and TypeScript type safety.",
        "How to balance visual sophistication with web performance and accessibility.",
        "Refined UX sensibilities around spacing, visual rhythm, and typography pairing."
      ],
      futureImprovements: [
        "Add interactive web-based algorithm visualizer playground directly in the browser.",
        "Integrate RSS / Markdown blog reader for technical notes."
      ]
    }
  },
  {
    id: "interactive-web-application",
    title: "Interactive Web Application & UI System",
    category: "web-dev",
    categoryLabel: "Web Development",
    shortDescription: "A practical web application focused on responsive layout design, interactive state handling, and intuitive user workflows built using modern JavaScript and React.",
    role: "Frontend Developer",
    status: "Completed",
    tags: ["JavaScript", "HTML5", "CSS3", "React", "State Management"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
    featured: true,
    accentColor: "blue",
    caseStudy: {
      overview: "A hands-on web application created to apply core web development fundamentals into an interactive user interface with real-time state manipulation and responsive views.",
      problem: "Translating static designs into dynamic, accessible, and responsive user experiences requires deep practice with event handling, DOM cycles, and state synchronization.",
      approach: "Constructed modular components with clean prop drilling and React state hooks, implementing client-side validation and immediate visual feedback.",
      techStackDetails: [
        { category: "Core Technologies", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
        { category: "Frontend Framework", items: ["React", "Lucide Icons"] },
        { category: "Tooling", items: ["Vite", "Git", "CSS Flex/Grid"] }
      ],
      keyFeatures: [
        {
          title: "Dynamic State Management",
          description: "Seamless user interactions with zero full-page reloads using React hooks (useState, useEffect, useMemo)."
        },
        {
          title: "Adaptive Responsive Layouts",
          description: "Carefully calibrated CSS Grid and Flexbox structures that reflow gracefully from 320px mobile to 4K displays."
        },
        {
          title: "Form Validation & Feedback",
          description: "Real-time user input validation with clear visual error states and success notifications."
        }
      ],
      challenges: [
        {
          challenge: "Preventing unnecessary re-renders when managing multiple interactive elements.",
          solution: "Extracted isolated sub-components and used proper dependency arrays in React effects."
        }
      ],
      whatILearned: [
        "Component lifecycle and the power of unidirectional data flow in modern web apps.",
        "Best practices for mobile responsiveness and cross-browser consistency.",
        "How to structure maintainable CSS without class bloat."
      ],
      futureImprovements: [
        "Connect to a persistent backend database.",
        "Add theme customizer and exportable user data."
      ]
    }
  },
  {
    id: "cpp-student-management-system",
    title: "C++ Student Records & Data Engine",
    category: "tools-systems",
    categoryLabel: "C++ • Systems",
    shortDescription: "A console-based object-oriented data management tool in C++ demonstrating file I/O streams, binary persistence, class inheritance, and search indexing.",
    role: "Developer",
    status: "Completed",
    tags: ["C++", "OOP", "File Handling", "Streams", "CLI"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#",
    featured: false,
    accentColor: "violet",
    caseStudy: {
      overview: "An object-oriented CLI system built in C++ to model real-world record management using file serialization, encapsulation, and menu-driven command navigation.",
      problem: "Understanding how software persists structured data to secondary storage without relying on external relational database servers.",
      approach: "Utilized C++ fstream libraries (ifstream, ofstream) in binary mode to serialize and deserialize custom record objects with integrity checks and search filters.",
      techStackDetails: [
        { category: "Language", items: ["C++17"] },
        { category: "Libraries", items: ["<fstream>", "<iostream>", "<vector>", "<iomanip>"] },
        { category: "Concepts", items: ["Object-Oriented Design", "File Streams", "Exception Handling"] }
      ],
      keyFeatures: [
        {
          title: "Binary File Persistence",
          description: "Saves and loads student records reliably with binary read/write operations."
        },
        {
          title: "Multi-parameter Search & Sort",
          description: "Search records by ID, name, or academic standing using custom sorting comparators."
        },
        {
          title: "Encapsulation & Validation",
          description: "Strict class mutators to ensure invalid grades or corrupted IDs are rejected before saving."
        }
      ],
      challenges: [
        {
          challenge: "Handling binary file corruption when modifying existing record offsets.",
          solution: "Implemented temporary scratch files and atomic file replacement logic on update/delete operations."
        }
      ],
      whatILearned: [
        "Practical understanding of file pointers (seekg, seekp) and stream states in C++.",
        "How OOP principles enforce data validation boundaries.",
        "CLI UX design principles for terminal-based tools."
      ],
      futureImprovements: [
        "Add an interactive TUI (Terminal User Interface) using ncurses.",
        "Implement encrypted record storage."
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
