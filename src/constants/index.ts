import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
} from "../types";

import {
  backend,
  creator,
  web,vs,cloud,
  az,
   aws,
    ops,
     jen,
      py,
  c,
  typescript,
  reactjs,
  Angular,
  sql,
  git,
  docker,
  dhl,
  Suth,
  slk,
  dev,
  wells,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: vs,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C#",
    icon: c,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Azure",
    icon: az,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "OpenShift",
    icon: ops,
  },
  {
    name: "Jenkins",
    icon: jen,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "SqlDB",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior .NET Developer",
    icon: dev,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using .NET Framework technologies.",
      "Collaborating with cross-functional team members and support product for Small scale businesses"
    ],
  },
  {
    title: "Software Engineer",
    icon: slk,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using .NET MVC Framework, Mainframe and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive and secure design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: Suth,
    iconBg: "#E6DEDD",
    points: [
      "Developing web applications using .NET MVC Framework, RPA, WPF, Twilio and other related technologies.",
      "Collaborating with cross-functional teams including designers, product owners, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technology Specialist",
    icon: wells,
    iconBg: "#383E56",
    points: [
      "Developing web applications using Angular, ASP.NET Core, Web API, PEGA, PCF, Kendo and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cloud Computing",
    icon: cloud,
    iconBg: "#E6DEDD",
    points: [
      "Post Graduate program in Cloud Computing with Great Lakes Institute of Management",
      "Completed various capstone project which address real-time problem scenarios",
      "Create and Manage a Nonrelational Database using AWS DynamoDB",
      "Building an Automated Business Process using Managed Services on a Public Cloud",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: dhl,
    iconBg: "#E6DEDD",
    points: [
      "Developing web applications using ASP.NET CORE, Three JS, Azure, SyncFusion, IAM, Identity and other related technologies.",
      "Collaborating with cross-functional teams including product owner, and other developers to create high-quality products.",
      "Implementing responsive design and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product & Open-source contribution",
    icon: web,
    iconBg: "#383E56",
    points: [
      "Developing web applications using ASP.NET API, React JS, SyncFusion, Azure and other related technologies.",
      "Contribute to address real-time problems for business units, ease to confuse on their core business",
    ],
  },
];

export { services, technologies, experiences};
