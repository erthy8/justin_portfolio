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
    photos: assets.docubot,
    bullets: [
      "1st Place in Appian's 2025 internal hackathon",
      "Utilizes a custom knoewledge base built on thousands of documentation files using Amazon Kendra to provide context-aware suggestions",
      "Integrates into GitLab CI/CD pipelines to analyze merge requests and propose documentation updates",
      "Dynamically updates an AWS s3 bucket knowledge base when new documentation files are added",
    ],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "Amazon Bedrock", color: "cyan" },  
      { name: "Amazon Kendra", color: "emerald" },
      { name: "YAML", color: "red" },
    ],
    link: "https://drive.google.com/file/d/1IWFoHSavw72UZMTCQAfJJbTihLk59BIV/view?usp=sharing",
    award: "1st Place - Appian Hackathon 2025",
  },
  {
    name: "Helping Hands",
    type: { name: "Web Application", color: "blue-400" },
    image: assets.hh_logo,
    description:
      "A computer vision application that creates a virtual mouse through intuitive hand motion tracking.",
    photos: assets.helpinghands,
    bullets: [
      "1st Place CyberTech category for HackTJ (300+ participants)",
      "Uses webcam input to track hand and finger positions for cursor movement and click actions",
      "Calculates angles between finger joints to determine gestures for clicking and dragging",
      "Engineered a smoothing filter to ensure stable cursor movement",
    ],
    skills: [
      { name: "OpenCV", color: "green" },
      { name: "Python", color: "yellow" },
      { name: "MediaPipe", color: "violet" },

    ],
    link: "https://devpost.com/software/helpinghands-myl8ox",
    video: "https://www.youtube.com/watch?v=fZa1yPhAmOk&ab_channel=Justin",
    award: "1st Place - HackTJ 2023",
  },
  {
    name: "Just Dance Dance Revolution",
    type: { name: "Web Application", color: "blue-400" },
    image: assets.jddr_logo,
    description:
      "Display a precisely generated dance overlay from a YouTube dance video to help users learn how to dance with accuracy ratings and real-time analysis.",
    photos: assets.dancemaker,
    bullets: [
      "3rd Place Arts&Games category for UVA's HooHacks (750+ participants)",
      "Utilized frame-by-frame computer vision analysis on YouTube videos retrieved from Google API to extract key body positions stored as landmark coordinates into data frames",
      "Stores and queries dance move data using SQL to efficiently retrieve and compare user movements",
      "Attempts to use YOLO AI built model to create a bounding box around user to improve accuracy",
      "Performs linear regression analysis on SQL database to produce accuracy ratings for user dance moves",
    ],
    skills: [
      { name: "cv2", color: "cyan" },
      { name: "Python", color: "yellow" },
      { name: "Pandas", color: "blue" },
      { name: "SQL", color: "orange" },
      { name: "MediaPipe", color: "yellow" },
      { name: "Google API", color: "orange" },
    ],
    link: "https://devpost.com/software/just-dance-dance-revolution",
    video: "https://youtu.be/RBW0g9_VbUQ", // Replace with actual video path
    award: "3rd Place - HooHacks 2024",
  },
  {
    name: "Connective",
    type: { name: "Website", color: "[#566af6]" },
    image: assets.connective_logo,
    description:
      "A social media website to connect students enrolled in the same class with each other to share resources and ask questions.",
    photos: assets.connective,
    bullets: [
      "1st Place popular vote category for UMD's Bitcamp (600+ participants)",
      "Built with Selenium webscraping to automatically populate class lists from university website",
      "Uses Flask backend with SQL database to store user data and posts",
      "Incorporates HTML/CSS/JS and React frontend for a responsive and user-friendly interface",
    ],
    skills: [
      { name: "HTML/CSS", color: "cyan" },
      { name: "Javascript", color: "yellow" },
      { name: "Flask", color: "blue" },
      { name: "React.js", color: "orange" },
      { name: "SQL", color: "yellow" },
    ],
    link: "https://devpost.com/software/connective",
    video: "https://www.youtube.com/watch?v=OK9z4lBm2gs&ab_channel=Benszeto",
    award: "1st Place - Bitcamp 2024",
  },
  {
    name: "BandMaker",
    type: { name: "Discord Bot", color: "emerald-400" },
    image: assets.bandmaker_logo,
    description:
      "A commissioned program displayed on a Discord bot that leverages AI, pattern recognition algorithms, and SQL database querying, to perform comprehensive analysis on stock market data",
    photos: assets.bandmaker,
    bullets: [
      "Discord bot built with Python and Discord API to interact with users and provide real-time stock analysis",
      "Pinged users on significant stock movements using AI sentiment analysis and pattern recognition algorithms",
      "Displayed analysis results using data visualiztions with PyPlot",
    ],
    skills: [
      { name: "Python", color: "yellow" },
      { name: "SQL", color: "green" },
      { name: "sckit-learn", color: "blue" },
      { name: "PyPlot", color: "red" },
      { name: "Discord API", color: "orange" },
    ],
    link: "https://github.com/daven-c/BandMaker",
  },
  {
    name: "Color Detection Program",
    type:  { name: "Machine Learning Program", color: "blue-400" },
    image: assets.ml_logo,
    description: "Machine learning color detection system that identifies and labels colors in images based on a predefined color dataset",
    photos: assets.ml,
    bullets: [ 
      "Computer Vision CMSC 426 Project",
      "Architected a machine learning driven color detection system, employing Gaussian Mixture Models trained on a diverse dataset of over 100 images, optimizing 15 critical model parameters",
    ],
    skills: [
      { name: "Numpy", color: "red" },
      { name: "Matplotlib", color: "orange" },
      { name: "Scipy", color: "yellow" },
      { name: "cv2", color: "blue" },
      { name: "sckit-learn", color: "cyan" },
    ],
    link: null,
  },
].map((project, index) => ({ ...project, id: index + 1 }));

export { experiences, projects };
