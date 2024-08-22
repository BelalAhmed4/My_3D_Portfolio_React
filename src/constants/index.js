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
  typingSpeedGame,
  XO,
  threejs,
  firstPerson,
  secondPerson
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
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [

  {
    title: "Front-end Internship Trainee",
    company_name: "Digital Egypt Pioneers Initiative DEPI",
    icon: depi,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
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
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
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
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Belal proved me wrong.",
    name: "Mohammed Elazzony",
    designation: "Videographer",
    company: "Talent Area",
    image: firstPerson,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Belal does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
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
  {
    name: "Typing Speed Game",
    description:
      "A simple typing speed game where users type displayed words within a limited time. The game dynamically adjusts difficulty based on word length, offering a progressively challenging experience.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: typingSpeedGame,
    source_code_link: "https://github.com/BelalAhmed4/Typing-Speed-Test-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
