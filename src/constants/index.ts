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
    title: "Lead AI Engineer",
    icon: appian,
    iconBg: "#0073CF",
    points: [
      "Designed and proposed REX — an AI-native autonomous engineering pipeline; adopted and implemented, delivering a ~70% productivity gain in engineering delivery.",
      "Built a fully custom, vendor-agnostic LLM tracing & evaluation service replacing Phoenix, Datadog, and LangSmith — enterprise multi-tenant isolation on OTel/OpenInference standards.",
      "LLM-as-Judge evaluation pipelines with domain-specific rubrics — automated scoring improved 25/100 to 97/100 across enterprise domains.",
      "LangGraph multi-agent orchestration for natural-language application generation on Bedrock Claude.",
    ],
  },
  {
    title: "AI/ML Research & Development",
    icon: brain,
    iconBg: "#1a1a2e",
    points: [
      "Published EFA research (2026): Evaluation-First Architecture — 96.2% All-Pass Rate on MT-Bench, outperforming seven baselines incl. Self-Refine and Best-of-5.",
      "Trained TinyStories-24.5M from scratch (Llama 2 architecture: RoPE, SwiGLU, RMSNorm, Flash Attention; perplexity 8.65) — published on HuggingFace with live inference.",
      "LoRA fine-tuned a 9B-parameter model to 91.7% domain accuracy (bf16 LoRA, single-GPU RTX 5090).",
      "6 PyPI packages (15,400+ downloads) incl. tracemaid, rubricon, distill-json; 8 VS Code extensions (4,700+ installs); shipped multiple MCP servers.",
      "Built a production voice AI agent (Alexa → FastAPI → LLM intent routing, 20 action types) and an autonomous dev → review → QA → E2E-test multi-agent platform with multi-LLM orchestration.",
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
      "SOLVE — slotting product for DHL supply chain: predictive analytics generating slotting moves for SKUs across DHL warehouses.",
      "Re-engineered the slotting improvement algorithm and 2D/3D warehouse virtualization with Three.js — the same tech powering this portfolio.",
      "Architecture, development, cloud migration (Azure), and team coordination — converting client requirements into technical tasks.",
      "Transport Metrics — inbound supply-chain data platform, independently designed and deployed as sole contributor (Azure Functions, Gen AI).",
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
