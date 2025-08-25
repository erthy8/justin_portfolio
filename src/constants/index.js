import * as assets from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Appian",
    icon: assets.appian,
    iconBg: "white",
    date: "Summer 2025",
    points: [
      "Deployed and maintained production-grade Kubernetes clusters in AWS using Python, Terraform, Go and Helm",
      "Developed and fine-tuned a Retrieval-Augmented Generation (RAG) AI agent leveraging a custom knowledge base to interpret code and automatically generate context-aware update recommendations",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "General Dynamics Mission Systems",
    icon: assets.gdms_logo,
    iconBg: "white",
    date: "Summer 2024",
    points: [
      "Engineered and sustained Java, C++, and Python software for US Navy data collection and transmission systems",
      "Designed a Bash script to verify media (drive partitioning, encryption, filesystems) on thousands of drives to test Johns Hopkins research data",
    ],
  },
  {
    title: "Computer Science Instructor",
    company_name: "J&J Camp",
    icon: assets.jj_logo,
    iconBg: "white",
    date: "Year-Round 2021-2023",
    points: [
      "Designed and delivered programming curriculum to students concentrated in Python",
    ],
  },
  // {
  //   title: "Software Developer Intern",
  //   company_name: "AiPi Solutions",
  //   icon: assets.aipi,
  //   iconBg: "#FFFF",
  //   date: "Summer 2023",
  //   points: [
  //     "Led a team of 5 interns to train OpenAI’s 4o LLM, automating the editing process of Non-Disclosure Agreements",
  //     "Built and deployed a web application using React and Vercel, allowing model integration into client’s workflow",
  //   ],
  // },
];

const projects = [
  {
    name: "DocuBot",
    type: { name: "AI Agent RAG", color: "lime-300" },
    image: assets.docubot_logo,
    description:
      "An AI RAG agent based on a custom knowledge base that analyzes merge requests and automatically updates documentation",
    photos: assets.gradebuddy,
    bullets: [
      "Dynamic question inputting (prompt, student-answer, max points, and rubric)",
      "LLM scores each question based on given question rubric",
      "Aggregates total score for an assignment after grading individual questions"
    ],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "Amazon Bedrock", color: "cyan" },  
      { name: "Amazon Kendra", color: "emerald" },
      { name: "YAML", color: "red" },
    ],
    link: "https://drive.google.com/file/d/1IWFoHSavw72UZMTCQAfJJbTihLk59BIV/view?usp=sharing",
  },
  {
    name: "Helping Hands",
    type: { name: "Web Application", color: "blue-400" },
    image: assets.hh_logo,
    description:
      "A computer vision application that creates a virtual mouse through intuitive hand motion tracking.",
    photos: assets.simplisplit,
    bullets: [
      "Utilized tesseract for receipt scanning (OCR)",
      "React Native for front-end mobile development",
      "Venmo API for payment processing",
      "Firebase for user account database storage",
    ],
    skills: [
      { name: "OpenCV", color: "green" },
      { name: "Python", color: "yellow" },
      { name: "MediaPipe", color: "violet" },

    ],
    link: null,
    video: "path/to/video1.mp4",
  },
  {
    name: "Just Dance Dance Revolution",
    type: { name: "Web Application", color: "blue-400" },
    image: assets.jddr_logo,
    description:
      "Display a precisely generated dance overlay from a YouTube dance video to help users learn how to dance with accuracy ratings and real-time analysis.",
    photos: assets.nutrifit,
    bullets: [
      "Allows users to select goals like bulking, cutting, keto, or diabetic and recommends products accordingly",
      "Integrates Kroger's Product API to fetch grocery items and Nutritionix API to retrieve detailed nutritional data",
      "Implements a custom Nutrition Rating algorithm to rank products based on user goals",
      "Enables users to save selected items for later comparison and planning",
    ],
    skills: [
      { name: "cv2", color: "cyan" },
      { name: "Python", color: "yellow" },
      { name: "Pandas", color: "blue" },
      { name: "SQL", color: "orange" },
      { name: "MediaPipe", color: "yellow" },
      { name: "Google API", color: "orange" },
    ],
    link: "https://github.com/phongo1/NutriFit",
    video: "path/to/video.mp4", // Replace with actual video path
  },
  {
    name: "Connective",
    type: { name: "Website", color: "[#566af6]" },
    image: assets.connective_logo,
    description:
      "A social media website to connect students enrolled in the same class with each other to share resources and ask questions.",
    photos: assets.phobot,
    bullets: [
      "Built with Discord API, Riot API, googlesearch API, and BeautifulSoup for webscraping",
    ],
    skills: [
      { name: "HTML/CSS", color: "cyan" },,
      { name: "Javascript", color: "yellow" },
      { name: "Flask", color: "blue" },
      { name: "React.js", color: "orange" },
      { name: "SQL", color: "yellow" },
    ],
    link: "https://github.com/phongo1/discord_bot",
    video: "path/to/video1.mp4",
  },
  {
    name: "BandMaker",
    type: { name: "Discord Bot", color: "emerald-400" },
    image: assets.bandmaker_logo,
    description:
      "A commissioned program displayed on a Discord bot that leverages AI, pattern recognition algorithms, and SQL database querying, to perform comprehensive analysis on stock market data",
    photos: assets.game,
    bullets: ['Final project for CS 1110 (Intro to Programming)'],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "SQL", color: "green" },
      { name: "sckit-learn", color: "blue" },
      { name: "PyPlot", color: "red" },
      { name: "Discord API", color: "orange" },
    ],
    link: "https://github.com/phongo1/Fantasy-Shooter-Game-",
    video: "https://www.youtube.com/watch?v=FLIzubXNmyo&ab_channel=PhongLe",
  },
  {
    name: "Dream Weaver",
    type:  { name: "Web Application", color: "blue-400" },
    image: assets.dreamweaver_logo,
    description:
      "TBD",
    photos: assets.website,
    bullets: [ 'A simple website to showcase the book and author - built with HTML/CSS/JS and deployed with Github Pages' ],
    skills: [
      { name: "HTML/CSS", color: "cyan" },
      { name: "Javascript", color: "yellow" },
    ],
    link: "https://github.com/phongo1/phongo1.github.io",
    video: "https://www.youtube.com/watch?v=FLIzubXNmyo&ab_channel=PhongLe",
  },
].map((project, index) => ({ ...project, id: index + 1 }));

export { experiences, projects };
