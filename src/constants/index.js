import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  depi,
  upwork,
  neuronetix,
  nike,
  hooBank,
  XO,
  threejs,
  firstPerson,
  secondPerson,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [

  {
    title: "Front-end Internship Trainee",
    company_name: "Digital Egypt Pioneers Initiative DEPI",
    icon: depi,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - present",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "MERN Internship Trainee",
    company_name: "Neuronetix",
    icon: neuronetix,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Collaborating with the development team to design and implement RESTful APIs, ensuring seamless communication between the frontend and backend.",
      "Optimizing application performance through techniques like lazy loading, code splitting, and efficient state management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Belal proved me wrong.",
    name: "Mohammed Elazzony",
    designation: "Videographer",
    company: "Jeel Company",
    image: firstPerson,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Belal does.",
    name: "Abdelaziz Gamal",
    designation: "Embedded Software Engineer",
    company: "Upwork",
    image: secondPerson,
  },
];

const projects = [
  {
    name: "Nike",
    description:
      "Developed a responsive Nike website using React and Tailwind CSS, featuring modern UI design, seamless navigation, and optimized performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/BelalAhmed4/Nike-React-TailwindCSS-Netlify",
  },
  {
    name: "HooBank",
    description:
      "A responsive React web app featuring a Hero section, client testimonials, and a call-to-action, built with reusable components and custom styling for a modern UI experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hooBank,
    source_code_link: "https://github.com/BelalAhmed4/HooBank_React_Tailwind",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Built a two- player Tic - Tac - Toe game in React with a responsive interface and real - time gameplay, offering an engaging user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: XO,
    source_code_link: "https://github.com/BelalAhmed4/React_Tic_Tac_Toe_Netlify",
  },
];

export { services, technologies, experiences, testimonials, projects };
