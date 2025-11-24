import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
} from "../types";

import {
  vs,
  cloud,
  az,
  aws,
  py,
  c,
  typescript,
  reactjs,
  sql,
  git,
  docker,
  dhl,
  Suth,
  slk,
  dev,
  wells,
  threejs,
  // AI/ML icons
  pytorch,
  langchain,
  openai,
  huggingface,
  neuralnet,
  brain,
  appian,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI/ML Engineer",
    icon: brain,
  },
  {
    title: "Agentic AI Systems",
    icon: openai,
  },
  {
    title: "RAG & LLM Solutions",
    icon: neuralnet,
  },
  {
    title: "Full Stack Development",
    icon: vs,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: py,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Transformers",
    icon: huggingface,
  },
  {
    name: "Azure AI",
    icon: az,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C#",
    icon: c,
  },
];

const experiences: TExperience[] = [
  {
    title: "Lead Software Engineer - AI",
    icon: appian,
    iconBg: "#0073CF",
    points: [
      "Multi-agent systems with multi model for intelligence.",
    ],
  },
  {
    title: "AI/ML Research & Development",
    icon: brain,
    iconBg: "#1a1a2e",
    points: [
      "Training custom LLMs from scratch—achieved 34.4M parameter model with excellent perplexity scores.",
      "Research on vocabulary optimization: discovered 10K tokens outperform 32K for grammar quality.",
      "Building multi-agent architectures for complex code generation workflows.",
      "Running dual high-end GPU workstations (RTX 5090 + RTX 4070 SUPER) for model training.",
    ],
  },
  {
    title: "PG Program in AI/ML",
    icon: neuralnet,
    iconBg: "#E6DEDD",
    points: [
      "Advanced studies in Machine Learning, Deep Learning, and Neural Networks.",
      "Specialization in Transformers, Fine-tuning (LoRA), and Agentic AI systems.",
      "Practical projects in RAG systems and custom LLM development.",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: dhl,
    iconBg: "#E6DEDD",
    points: [
      "Developing web applications using ASP.NET Core, Three.js, Azure, SyncFusion, IAM, and Identity.",
      "Built interactive 3D experiences with Three.js—the same tech powering this portfolio.",
      "AI/ML, automation and intelligent systems.",
      "Collaborating with cross-functional teams to create high-quality products.",
    ],
  },
  {
    title: "Technology Specialist",
    icon: wells,
    iconBg: "#383E56",
    points: [
      "Developing web applications using Angular, ASP.NET Core, Web API, PEGA, PCF, and Kendo.",
      "Collaborating with cross-functional teams including designers, product managers, and developers.",
      "Implementing responsive design and providing constructive feedback through code reviews.",
    ],
  },
  {
    title: "PG in Cloud Computing",
    icon: cloud,
    iconBg: "#E6DEDD",
    points: [
      "Post Graduate program in Cloud Computing with Great Lakes Institute of Management.",
      "Completed capstone projects addressing real-time problem scenarios.",
      "AWS DynamoDB, automated business processes, and managed cloud services.",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: Suth,
    iconBg: "#E6DEDD",
    points: [
      "Developing web applications using .NET MVC Framework, RPA, WPF, and Twilio.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "Software Engineer",
    icon: slk,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using .NET MVC Framework and Mainframe technologies.",
      "Collaborating with cross-functional teams including designers and product managers.",
      "Implementing responsive and secure design with cross-browser compatibility.",
    ],
  },
  {
    title: "Junior .NET Developer",
    icon: dev,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using .NET Framework technologies.",
      "Collaborating with cross-functional team members and supporting products for small scale businesses.",
    ],
  },
];

export { services, technologies, experiences };
