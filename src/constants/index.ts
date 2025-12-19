export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    title: "Client-Centric Approach",
    description:
      "I prioritize understanding client needs and maintaining open communication throughout every project to ensure exceptional results.",
    id: 1,
  },
  {
    title: "Performance Focused",
    description:
      "Every application I build is optimized for speed, accessibility, and user experience across all devices.",
    id: 2,
  },
  {
    title: "Modern Technologies",
    description:
      "I stay current with the latest frontend technologies and best practices to deliver cutting-edge solutions.",
    id: 3,
  },
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", proficiency: 90, icon: "⚛️" },
      { name: "Next.js", proficiency: 85, icon: "⚡" },
      { name: "TypeScript", proficiency: 80, icon: "📘" },
      { name: "JavaScript", proficiency: 95, icon: "🟨" },
      { name: "HTML5", proficiency: 95, icon: "🌐" },
      { name: "CSS3", proficiency: 90, icon: "🎨" },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      { name: "Tailwind CSS", proficiency: 90, icon: "🎯" },
      { name: "Sass/SCSS", proficiency: 85, icon: "💎" },
      { name: "Styled Components", proficiency: 80, icon: "💅" },
      { name: "Framer Motion", proficiency: 75, icon: "🎬" },
    ],
  },
  {
    category: "State Management & Tools",
    items: [
      { name: "Redux Toolkit", proficiency: 85, icon: "🔄" },
      { name: "Zustand", proficiency: 80, icon: "🐻" },
      { name: "Git & GitHub", proficiency: 90, icon: "📚" },
      { name: "npm/yarn", proficiency: 85, icon: "📦" },
    ],
  },
  {
    category: "Testing & Performance",
    items: [
      { name: "Jest", proficiency: 75, icon: "🧪" },
      { name: "React Testing Library", proficiency: 70, icon: "🔍" },
      { name: "Performance Optimization", proficiency: 80, icon: "⚡" },
      { name: "SEO", proficiency: 75, icon: "🔍" },
    ],
  },
];

export const experience = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Delivering high-quality web applications and collaborating with clients to create exceptional user experiences. Specializing in React, Next.js, and modern frontend technologies.",
    achievements: [
      "Developed 4+ production-ready applications with modern UI/UX design",
      "Improved application performance by 40% through optimization techniques",
      "Implemented responsive design ensuring 100% mobile compatibility",
      "Reduced bundle size by 30% using code splitting and lazy loading",
      "Maintained 100% client satisfaction rate across all projects",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Self-Learning Projects",
    period: "2022 - 2023",
    description:
      "Intensive self-directed learning focused on mastering frontend development fundamentals and building comprehensive portfolio projects to demonstrate technical proficiency.",
    achievements: [
      "Built 6+ portfolio projects showcasing various technologies and frameworks",
      "Mastered modern JavaScript ES6+ features and industry best practices",
      "Developed expertise in responsive design principles and CSS frameworks",
      "Gained hands-on experience with REST APIs and third-party integrations",
      "Established strong foundation in version control and collaborative development",
    ],
    technologies: [
      "JavaScript",
      "React",
      "HTML/CSS",
      "Git",
      "REST APIs",
      "Responsive Design",
    ],
  },
];

export const testimonials = [
  {
    name: "Emmanuel Bin",
    role: "Senior Software Developer",
    company: "TechCorp",
    content:
      "Elizabeth's technical skills are excellent. She consistently generates clean, deployable code and has a deep understanding of React and modern frontend architecture. Her commitment to accessibility and performance optimization sets her apart",
    avatar: "👩‍💻",
  },
  {
    name: "Esther Abu",
    role: "UI/UX Designer",
    company: "DesignStudio",
    content:
      "Elizabeth possesses a good skill for design implementation, transforming tricky designs into pixel-perfect, responsive interfaces. Good communication skills and a high level of understanding of requirements make collaboration smooth and highly effective.",
    avatar: "👨‍🎨",
  },
  {
    name: "Ruth Abiloye",
    role: "Project Manager",
    company: "StartupXYZ",
    content:
      "Elizabeth consistently worked above expectations on all projects, producing consistently high-quality output to time. A nice and communicative individual, she combines problem-solving ability with good technical competence, making her a very worthwhile and well-respected member of any development team.",
    avatar: "👨‍💼",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat, connect, collaborate in real-time",
    des: "A modern real-time chat application built with the MERN stack, offering seamless messaging, secure conversations, and intuitive user experience for both personal and professional communication needs.",
    img: "/assets/s26.png",
    link: "https://mern-chap-app.vercel.app",
    github: "https://github.com/Lizzietrust/mern-chap-app",
    tags: ["React.js", "Tailwind", "Tanstack Query", "Socket.io", "Node.js", "Express", "MongoDB"],
    details: "",
    screenshots: ["/assets/s26.png"],
    features: [
      "Real-time Messaging with Socket.io",
      "Multi-Provider Context Architecture",
      "Theme & UI State Management",
      "Video/Audio Calling Infrastructure",
    ],
    challenges: "",
    solutions: "",
  },
  {
    id: 2,
    title: "Trendy Fashion Wears and Accessories Store",
    des: "A stylish eCommerce app for discovering and shopping trendy fashion wears and accessories, offering seamless browsing, secure checkout, and fast delivery.",
    img: "/assets/s25.png",
    link: "https://ricky-xtopha-frontend.vercel.app/",
    // github: "https://github.com/Lizzietrust/blogg",
    tags: ["Next.js", "React", "Tailwind", "Tanstack Query"],
    details: "",
    screenshots: ["/assets/s25.png"],
    features: [
      "User authentication and authorization",
      "Responsive design for all devices",
      "SEO optimized with meta tags",
      "Real-time content updates",
    ],
    challenges: "",
    solutions: "",
  },
  {
    id: 3,
    title: "PROSE E-Tracker: Smart Logistics Management App",
    des: "PROSE E-Tracker is an application which helps with logistics by tracking jobs, providing updates in real time, mapping the routes and increasing productivity with the clients, transporters, and admin.",
    img: "/assets/s24.png",
    link: "https://prose-staging.vercel.app/",
    dashboard: "https://prose-staging.vercel.app/login",

    // github: "https://github.com/Lizzietrust/blogg",
    tags: ["Next.js", "React", "Tailwind", "Tanstack Query"],
    details: "",
    screenshots: ["/assets/s24.png"],
    features: [
      "User authentication and authorization",
      "Rich text editor with markdown support",
      "Draft management and auto-save",
      "Responsive design for all devices",
      "SEO optimized with meta tags",
      "Real-time content updates",
    ],
    challenges: "",
    solutions: "",
  },
  {
    id: 3,
    title: "Create, Share, and Publish Blogs",
    des: "Empowering creators to share their voice, showcasing user-generated content with ease, edit, publish, and draft management features.",
    img: "/assets/Screenshot 1.png",
    link: "https://blogg-rho-ivory.vercel.app/",
    github: "https://github.com/Lizzietrust/blogg",
    tags: ["Next.js", "React", "Tailwind", "MongoDB"],
    details:
      "A full-featured blogging platform with authentication, markdown support, and a modern UI. Built for creators to easily manage and share their content.",
    screenshots: ["/assets/Screenshot 1.png"],
    features: [
      "User authentication and authorization",
      "Rich text editor with markdown support",
      "Draft management and auto-save",
      "Responsive design for all devices",
      "SEO optimized with meta tags",
      "Real-time content updates",
    ],
    challenges:
      "Implemented real-time collaboration features and optimized for performance with large content loads",
    solutions:
      "Used Next.js ISR for static generation, implemented efficient caching strategies, and optimized database queries",
  },
  {
    id: 4,
    title: "Online Fast Food",
    des: "Savor the flavor, swift and easy online food ordering, manage orders and checkout with seamless user experience.",
    img: "/assets/Screenshot 2.png",
    link: "https://fast-food-order.vercel.app/",
    github: "https://github.com/Lizzietrust/fast-food-order",
    tags: ["React", "Redux", "Tailwind", "Firebase"],
    details:
      "A modern food ordering web app with real-time order management, authentication, and a beautiful, responsive UI.",
    screenshots: ["/assets/Screenshot 2.png"],
    features: [
      "Real-time order tracking",
      "Secure payment integration",
      "User account management",
      "Order history and favorites",
      "Responsive mobile-first design",
      "Admin dashboard for restaurant",
    ],
    challenges:
      "Managing complex state for cart, orders, and user preferences across multiple components",
    solutions:
      "Implemented Redux Toolkit for centralized state management with proper action creators and reducers",
  },
  {
    id: 5,
    title: "Crypto Hub - Market Insights",
    des: "Stay updated with real-time cryptocurrency prices, market stats, news, and detailed information on the world of digital assets.",
    img: "/assets/Screenshot 3.png",
    link: "https://react-crypto-app-eosin-theta.vercel.app/",
    github: "https://github.com/Lizzietrust/React-CryptoApp",
    tags: ["React", "Redux", "API Integration", "Chart.js"],
    details:
      "A dashboard for tracking crypto prices, news, and stats. Features interactive charts and a clean, informative layout.",
    screenshots: ["/assets/Screenshot 3.png"],
    features: [
      "Real-time cryptocurrency price tracking",
      "Interactive charts and graphs",
      "News feed integration",
      "Portfolio tracking",
      "Price alerts and notifications",
      "Detailed coin information",
    ],
    challenges:
      "Handling real-time data updates and managing complex chart visualizations",
    solutions:
      "Implemented WebSocket connections for live updates and used Chart.js for responsive, interactive visualizations",
  },
  {
    id: 5,
    title: "Film Explorer Hub",
    des: "Discover your next favorite movie! Search, filter, and explore movie details with our user-friendly web app, personalized for authenticated users",
    img: "/assets/Screenshot 4.png",
    link: "https://movie-web-app-black.vercel.app/",
    github: "https://github.com/Lizzietrust/movie-web-app",
    tags: ["React", "TMDB API", "Styled Components"],
    details:
      "A movie discovery platform with search, filtering, and personalized features for logged-in users.",
    screenshots: ["/assets/Screenshot 4.png"],
    features: [
      "Advanced search and filtering",
      "Movie recommendations",
      "Watchlist management",
      "Detailed movie information",
      "User reviews and ratings",
      "Responsive design",
    ],
    challenges:
      "Implementing efficient search and filtering with large datasets from TMDB API",
    solutions:
      "Used debounced search, implemented proper caching, and optimized API calls with React Query",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Lizzietrust",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lizzietrust",
    icon: "linkedin",
  },
  {
    name: "X",
    url: "https://x.com/lizzieops?s=21",
    icon: "twitter",
  },
];
