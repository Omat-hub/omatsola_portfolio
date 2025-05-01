export const projects = [
  {
    id: "1",
    title: "Solar Energy Monitoring App",
    description:
      "An innovative app that allows users to monitor and manage their solar energy systems in real-time. The app displays power generation data, energy consumption, and performance analytics.",
    detailedDescription: {
      heading: "Smart Solar Energy Monitoring for Real-Time Insights",
      paragraphs: [
        "The Solar Energy Monitoring App empowers homeowners and businesses with comprehensive insights into their solar power systems. Designed for clarity and functionality, the app combines real-time monitoring with historical data visualization to help users make informed decisions about energy consumption and performance. An intuitive dashboard displays key metrics like energy output, usage trends, and system health—enabling proactive maintenance and smarter energy habits."
      ],
      features: [
        "Real-time solar energy generation updates",
        "Daily, weekly, and monthly analytics",
        "Push notifications for underperformance or unusual activity",
        "Remote diagnostics and system health reports"
      ],
      techDetails: [
        "Built using the MERN stack—MongoDB, Express, React, and Node.js",
        "Charts rendered using Chart.js",
        "JWT authentication for backend security",
        "Responsive UI with efficient state management"
      ],
      summary:
        "This project showcases my ability to translate complex technical data into user-friendly visuals, build scalable full-stack applications, and create impactful energy management tools."
    },
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    liveLink: "https://solar-energy-monitoring-app.example.com",
    githubLink: "https://github.com/username/solar-energy-monitoring-app",
    imageUrl: "/images/conny-schneider-xuTJZ7uD7PI-unsplash.jpg",
    projectType: "Mobile & Web",
    year: 2024
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description:
      "A sleek and responsive portfolio website built with React. Showcases personal projects, skills, and contact information in a clean, modern layout.",
    detailedDescription: {
      heading: "Modern Portfolio to Showcase Projects and Personality",
      paragraphs: [
        "This portfolio site is a personal showcase built to reflect my technical capabilities, aesthetic sensibility, and professional identity. Designed with responsiveness and user experience in mind, it highlights my projects, skills, and story through a minimalist layout and clean interactions. With subtle animations, modular components, and accessible design patterns, it provides a smooth browsing experience across devices, while serving as a continuous playground for experimenting with front-end technologies."
      ],
      features: [
        "Hero section with a brief bio and CTA",
        "Projects section with hover effects and modals",
        "About section detailing background and skills",
        "Contact form with email handling",
        "Smooth animations via Framer Motion"
      ],
      techDetails: [
        "Built with React, Tailwind CSS, and Vite",
        "Modular component architecture",
        "Fully responsive and accessible",
        "Performance optimization with HMR"
      ],
      summary:
        "I use this site as a living project to test new UI/UX ideas, improve performance, and explore accessibility strategies."
    },
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    liveLink: "https://username-portfolio.com",
    githubLink: "https://github.com/username/portfolio-website",
    imageUrl: "/images/donny-jiang-42gFAgdIUC8-unsplash.jpg",
    projectType: "Web",
    year: 2023
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "A fully-featured e-commerce platform with user authentication, product management, a shopping cart, and a checkout process. Admins can manage products and orders from an admin panel.",
    detailedDescription: {
      heading: "Scalable E-Commerce Solution for Users and Admins",
      paragraphs: [
        "This E-Commerce Platform replicates the entire online shopping journey—from product discovery to secure checkout—with features that prioritize both user convenience and admin control. It offers a seamless interface for customers to browse, search, and purchase products, while also enabling administrators to manage inventory and process orders efficiently. Designed to scale, the platform ensures a robust shopping experience with integrated authentication, real-time cart updates, and secure payment handling."
      ],
      features: [
        "User registration and JWT-based authentication",
        "Search, filter, and sort products",
        "Shopping cart with real-time updates",
        "Stripe-powered checkout",
        "Order tracking and history for users",
        "Admin dashboard for product and order management"
      ],
      techDetails: [
        "React and Redux for frontend and state management",
        "Node.js, Express, and MongoDB for backend",
        "Clean code architecture with reusable components",
        "Error handling for payments and inventory logic"
      ],
      summary:
        "This project demonstrates my ability to create secure, reliable, and user-focused business applications."
    },
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://ecommerce-platform.example.com",
    githubLink: "https://github.com/username/e-commerce-platform",
    imageUrl: "/images/hunter-harritt-Ype9sdOPdYc-unsplash.jpg",
    projectType: "Web",
    year: 2025
  },
  {
    id: "4",
    title: "Task Management App",
    description:
      "A simple and intuitive task management web app that helps users to track and manage their daily tasks. Features include task creation, deadline tracking, and categorization.",
    detailedDescription: {
      heading: "Real-Time Task Tracking with a Clean Interface",
      paragraphs: [
        "The Task Management App is a lightweight yet powerful productivity tool built for users who want to organize daily activities with precision and clarity. Offering task creation with deadlines, category filters, and priority tags, it’s designed to streamline workflow and reduce friction. With real-time syncing via Firebase and a responsive, mobile-friendly UI, the app supports efficient task tracking at home, at work, or on the go—all within a minimalist design interface."
      ],
      features: [
        "Create tasks with due dates and categories",
        "Priority tagging and visual markers",
        "Filter tasks by date, status, or category",
        "Dark/light mode toggle",
        "Firebase Authentication and Firestore syncing"
      ],
      techDetails: [
        "Built with Vue.js and Tailwind CSS",
        "Firebase for real-time data and auth",
        "Responsive layouts and intuitive UX",
        "Consistent design system and spacing"
      ],
      summary:
        "This project balances simplicity with power, supporting users who want a fast and reliable task management tool."
    },
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://task-management-app.example.com",
    githubLink: "https://github.com/username/task-management-app",
    imageUrl: "/images/nasa-_SFJhRPzJHs-unsplash.jpg",
    projectType: "Web",
    year: 2023
  },
  {
    id: "5",
    title: "Blog Platform",
    description:
      "A blog platform where users can write, edit, and publish their posts. Includes user authentication, markdown support, and a comment system. Admins can moderate posts and comments.",
    detailedDescription: {
      heading: "A Markdown-Powered Blogging Platform for Creators",
      paragraphs: [
        "This Blog Platform is a content-centric system crafted for writers, bloggers, and community contributors. It emphasizes simplicity in writing, flexibility in publishing, and safety in user interaction. Equipped with a real-time markdown editor, post scheduling, comment threading, and moderation tools, it empowers both creators and admins. The platform balances functionality and security, making it an ideal solution for growing digital communities and personal content hubs alike."
      ],
      features: [
        "Live markdown editor with preview",
        "Post drafts, edit history, and scheduling",
        "Nested comment system with moderation",
        "Role-based access for admin control",
        "Secure login and user management"
      ],
      techDetails: [
        "React frontend with custom UI and CSS modules",
        "Node.js/Express APIs with MongoDB for data storage",
        "Secure markdown rendering to prevent XSS",
        "SEO metadata, lazy-loading, and pagination"
      ],
      summary:
        "A deep dive into CMS design that combines technical structure with community-focused editorial tools."
    },
    technologies: ["React", "Node.js", "Express", "MongoDB", "Markdown"],
    liveLink: "https://blog-platform.example.com",
    githubLink: "https://github.com/username/blog-platform",
    imageUrl: "/images/pawel-czerwinski-kyo00lYIkLQ-unsplash.jpg",
    projectType: "Web",
    year: 2023
  }
];
