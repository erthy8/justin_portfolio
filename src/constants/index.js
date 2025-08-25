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
      "Contributed to a core infrastructure team streamlining Infrastructure-as-Code provisioning, networking services, and Okta",
      "Integrated Teleport, a secure access platform, to enable compliant and efficient access management to AWS and customer apps",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ellucian",
    icon: assets.ellucian_logo,
    iconBg: "white",
    date: "Summer 2024 - Spring 2025",
    points: [
      "Engineered full-stack Proof of Concepts, demonstrating feasibility of proposed enterprise solutions",
      "Developed an AI-powered writing assistant serving higher education institutions",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "UVA Computer Science",
    icon: assets.uva_cs,
    iconBg: "white",
    date: "Fall 2023",
    points: [
      "Worked closely with Professor Sebastian Elbaum to fine-tune Meta Llama2 LLM, automating natural language to regex conversions",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "AiPi Solutions",
    icon: assets.aipi,
    iconBg: "#FFFF",
    date: "Summer 2023",
    points: [
      "Led a team of 5 interns to train OpenAI’s 4o LLM, automating the editing process of Non-Disclosure Agreements",
      "Built and deployed a web application using React and Vercel, allowing model integration into client’s workflow",
    ],
  },
];

const projects = [
  {
    name: "GradeBuddy",
    type: { name: "Web Application", color: "lime-300" },
    image: assets.gradebuddy_logo,
    description:
      "An auto-grader tool built for students and faculty to automate manual grading of open-ended answers based on a rubric",
    photos: assets.gradebuddy,
    bullets: [
      "Dynamic question inputting (prompt, student-answer, max points, and rubric)",
      "LLM scores each question based on given question rubric",
      "Aggregates total score for an assignment after grading individual questions"
    ],
    skills: [
      { name: "React.js", color: "cyan" },  
      { name: "Django", color: "emerald" },
      { name: "Firebase DB", color: "orange" },
    ],
    link: "https://github.com/brandonistfan/GradeBuddy",
    website: "https://www.gradebuddy.app",
  },
  {
    name: "SimpliSplit",
    type: { name: "Mobile Application", color: "blue-400" },
    image: assets.ss_logo,
    description:
      "A mobile app to streamline bill splitting by allowing users to scan a receipt, match friends to receipt items, and send Venmo requests accordingly with one click",
    photos: assets.simplisplit,
    bullets: [
      "Utilized tesseract for receipt scanning (OCR)",
      "React Native for front-end mobile development",
      "Venmo API for payment processing",
      "Firebase for user account database storage",
    ],
    skills: [
      { name: "React Native", color: "green" },
      { name: "Python", color: "yellow" },
      { name: "Flask", color: "violet" },
      { name: "Firebase DB", color: "orange" },

    ],
    link: null,
    video: "path/to/video1.mp4",
  },
  {
    name: "NutriFit",
    type: { name: "Web Application", color: "blue-400" },
    image: assets.nutrifitLogo,
    description:
      "A web app that helps users achieve their fitness or dietary goals by recommending grocery products based on nutrient compatibility and personalized ratings.",
    photos: assets.nutrifit,
    bullets: [
      "Allows users to select goals like bulking, cutting, keto, or diabetic and recommends products accordingly",
      "Integrates Kroger's Product API to fetch grocery items and Nutritionix API to retrieve detailed nutritional data",
      "Implements a custom Nutrition Rating algorithm to rank products based on user goals",
      "Enables users to save selected items for later comparison and planning",
    ],
    skills: [
      { name: "React.js", color: "cyan" },
      { name: "Express.js", color: "emerald" },
      { name: "TypeScript", color: "blue" },
      { name: "Kroger API", color: "orange" },
      { name: "Nutritionix API", color: "yellow" },
    ],
    link: "https://github.com/phongo1/NutriFit",
    video: "path/to/video.mp4", // Replace with actual video path
  },
  {
    name: "Phobot",
    type: { name: "Discord Bot", color: "[#566af6]" },
    image: assets.pho_icon,
    description:
      "A multifaceted Discord Bot that can run autonomously, pull game data, send customized emails, search google, tell random jokes, and more",
    photos: assets.phobot,
    bullets: [
      "Built with Discord API, Riot API, googlesearch API, and BeautifulSoup for webscraping",
    ],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "Discord API", color: "blue" },
      { name: "Google API", color: "orange" },
    ],
    link: "https://github.com/phongo1/discord_bot",
    video: "path/to/video1.mp4",
  },
  {
    name: "Fantasy Game",
    type: { name: "2D - Arena Game", color: "emerald-400" },
    image: assets.game_logo,
    description:
      "A 2D RPG inspired shooter-platformer game built with pygame and UVAGE (UVA game engine)",
    photos: assets.game,
    bullets: ['Final project for CS 1110 (Intro to Programming)'],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "Pygame", color: "red" },
    ],
    link: "https://github.com/phongo1/Fantasy-Shooter-Game-",
    video: "https://www.youtube.com/watch?v=FLIzubXNmyo&ab_channel=PhongLe",
  },
  {
    name: "Jose's Website",
    type: { name: "Website", color: "lime-300" },
    image: assets.joseweb_thumbnail,
    description:
      "A commisioned website for Jose, an author publishing a book called \"Queen of Heaven\"",
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
