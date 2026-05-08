import profileImage from '../assets/profile_image.png';

export const personalInfo = {
  name: "Pankaj Nihal",
  title: "Software Engineer",
  email: "p.b.nihalcse1@gmail.com",
  phone: "+8801762361365",
  location: "Dhaka, Bangladesh",
  summary: "Software Engineer with 1+ year of professional experience. Strong in Python, Django REST Framework, FastAPI, and React.js. Skilled in REST API design, PostgreSQL, MySQL, and Firebase. Competitive programmer with 550+ problems solved.",
  profileImage: profileImage,
  profiles: {
    github: "https://github.com/Nihal1l",
    portfolio: "https://nihal1l.github.io/portfolio/",
    linkedin: "https://www.linkedin.com/in/p-b-nihal/",
    leetcode: "https://leetcode.com/u/evtQJLmSEh/",
    hackerrank: "https://www.hackerrank.com/profile/p_b_nihalcse1",
    codeforces: "https://codeforces.com/",
    codechef: "https://codechef.com/",
  }
};

export const services = [
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side applications using Django, FastAPI, and Python.",
    icon: "Server",
  },
  {
    title: "Frontend Development",
    description: "Creating interactive and responsive user interfaces with React.js and Tailwind CSS.",
    icon: "Layout",
  },
  {
    title: "API Design & Integration",
    description: "Designing RESTful APIs and integrating third-party services like Stripe and SSLCommerz.",
    icon: "Webhook",
  },
];

export const stats = [
  { label: "Problems Solved", value: "550+" },
  { label: "Experience", value: "1+ Year" },
  { label: "Projects Built", value: "15+" },
];

export const projects = [
  {
    id: 1,
    title: "JobVenue (Job Board Platform)",
    tags: ["React.js", "Django REST", "PostgreSQL", "WebSocket"],
    description: "A complete job board with job posting, application system, search/filtering, and real-time chat.",
    github: "https://github.com/Nihal1l/Job_Board_frontend",
    link: "https://job-board-frontend-lime.vercel.app/",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "akhonLagbe (E-Commerce)",
    tags: ["React.js", "Django REST", "PostgreSQL"],
    description: "E-commerce platform with product browsing, cart management, secure checkout, and order tracking.",
    github: "https://github.com/Nihal1l/akhonLagbe_frontend",
    link: "https://akhon-lagbe-frontend-tghk.vercel.app/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "EventHub (Event Management)",
    tags: ["Django REST", "PostgreSQL", "Tailwind CSS"],
    description: "Event management app featuring creation/management, RBAC, and token authentication.",
    github: "https://github.com/Nihal1l/Event_Management_Project.git",
    link: "https://eventhub-crgq.onrender.com/",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
  }
];

export const skills = [
  // { name: "html", slug: "html" },
  // { name: "css", slug: "css" },
  { name: "django", slug: "django" },
  { name: "fastapi", slug: "fastapi" },
  { name: "reactjs", slug: "react" },  
  { name: "postgresql", slug: "postgres" },
  { name: "mysql", slug: "mysql" },
  { name: "firebase", slug: "firebase" },
  { name: "aws", slug: "aws" },
  { name: "docker", slug: "docker" },
  { name: "git", slug: "git" },
  { name: "postman", slug: "postman" },
  { name: "python", slug: "python" },
  { name: "javascript", slug: "js" },
  { name: "java", slug: "java" },
  { name: "cpp", slug: "cpp" },
  { name: "c", slug: "c" },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "EON System | Dhaka, Bangladesh",
    period: "Jan 2025 – Present",
    description: "Building production web apps, optimizing DB performance (Indexing, select_related), and integrating payment systems (Stripe, SSLCommerz) and real-time systems.",
    tech: ["Django", "FastAPI", "React.js", "PostgreSQL", "AWS"]
  },
  {
    title: "MSc in Computer Science & Engineering",
    company: "Jagannath University, Dhaka",
    period: "",
    description: "Focusing on advanced algorithms, data structures, and system design.",
  }
];

export const achievements = [
  "ICPC Dhaka Regional 2024 Contestant",
  "Jagannath University Programming Club (JUPC) Active Member",
  "ICT Division — Programming Contest Analyst & Volunteer (2024)"
];
