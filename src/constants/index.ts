import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
  TSocial,
  TStat,
} from "../types";

import {
  vs,
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
  mit,
  iitr,
  greatlakes,
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
    id: "research",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Applied LLM Research",
    icon: brain,
  },
  {
    title: "LLM Evaluation & Observability",
    icon: neuralnet,
  },
  {
    title: "Agentic AI Systems",
    icon: openai,
  },
  {
    title: "Full Stack & Cloud",
    icon: vs,
  },
];

const stats: TStat[] = [
  {
    value: "96.2%",
    label: "all-pass on MT-Bench, EFA paper",
    gradient: "green-text-gradient",
  },
  {
    value: "24.5M",
    label: "parameter LLM trained from scratch",
    gradient: "blue-text-gradient",
  },
  {
    value: "25K+",
    label: "downloads, 8 PyPI packages + 8 VS Code extensions",
    gradient: "pink-text-gradient",
  },
  {
    value: "~70%",
    label: "engineering productivity gain, REX at Appian",
    gradient: "orange-text-gradient",
  },
];

const socials: TSocial[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "github.com/karthyick",
    url: "https://github.com/karthyick",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "linkedin.com/in/karthyick",
    url: "https://www.linkedin.com/in/karthyick/",
  },
  {
    id: "huggingface",
    label: "Hugging Face",
    handle: "huggingface.co/karthyick",
    url: "https://huggingface.co/karthyick",
  },
  {
    id: "x",
    label: "X",
    handle: "x.com/karthyick",
    url: "https://x.com/karthyick",
  },
  {
    id: "paper",
    label: "EFA paper",
    handle: "Evaluation-First Generation (PDF)",
    url: "https://github.com/karthyick/evaluation-first-attention/blob/main/paper/EFA_Paper_Final.pdf",
  },
  {
    id: "web",
    label: "aichargeworks.com",
    handle: "R&D playground",
    url: "https://aichargeworks.com",
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
    companyName: "Appian, Chennai",
    date: "2025 - Present",
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
    companyName: "Independent, aichargeworks.com",
    date: "2025 - Present",
    iconBg: "#1a1a2e",
    points: [
      "Published Evaluation-First Generation (EFA, 2026): the model writes its rubric first and generates against it. 96.2% all-pass on MT-Bench vs 92.5% for the best baseline (Self-Refine), 80 prompts x 12 methods = 960 runs. rubricon on PyPI is the reference implementation.",
      "Trained TinyStories-24.5M from scratch (Llama 2 architecture: RoPE, SwiGLU, RMSNorm, Flash Attention; perplexity 8.65) — published on Hugging Face with live inference.",
      "LoRA fine-tuned a 9B-parameter model to 91.7% domain accuracy (bf16 LoRA, single-GPU RTX 5090).",
      "8 PyPI packages (19,977 downloads) incl. tracemaid, rubricon, distill-json, semantic-llm-cache; 8 VS Code extensions (5,192 installs); shipped multiple MCP servers.",
      "Built a production voice AI agent (Alexa → FastAPI → LLM intent routing, 20 action types) and an autonomous dev → review → QA → E2E-test multi-agent platform with multi-LLM orchestration.",
    ],
  },
  {
    title: "Quantum Computing",
    icon: mit,
    companyName: "MIT xPRO",
    date: "",
    iconBg: "#FFFFFF",
    points: [
      "Introduction to Quantum Computing from Massachusetts Institute of Technology (MIT xPRO) — latest credential.",
      "Qubits, superposition, entanglement, and quantum gates — hands-on circuits with Qiskit.",
      "Built the Quantum Gates Explorer — an interactive live tool for visualizing quantum gate operations.",
    ],
  },
  {
    title: "PG Program in AI/ML",
    icon: iitr,
    companyName: "IIT Roorkee",
    date: "",
    iconBg: "#FFFFFF",
    points: [
      "Advanced studies in Machine Learning, Deep Learning, and Neural Networks.",
      "Specialization in Transformers, Fine-tuning (LoRA), and Agentic AI systems.",
      "Practical projects in RAG systems and custom LLM development.",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: dhl,
    companyName: "DHL IT Services",
    date: "Jun 2021 - 2025",
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
    companyName: "Wells Fargo India",
    date: "Jun 2018 - Jun 2021",
    iconBg: "#383E56",
    points: [
      "Developing web applications using Angular, ASP.NET Core, Web API, PEGA, PCF, and Kendo.",
      "Collaborating with cross-functional teams including designers, product managers, and developers.",
      "Implementing responsive design and providing constructive feedback through code reviews.",
    ],
  },
  {
    title: "PG in Cloud Computing",
    icon: greatlakes,
    companyName: "Great Lakes Institute of Management",
    date: "",
    iconBg: "#FFFFFF",
    points: [
      "Post Graduate program in Cloud Computing with Great Lakes Institute of Management.",
      "Completed capstone projects addressing real-time problem scenarios.",
      "AWS DynamoDB, automated business processes, and managed cloud services.",
    ],
  },
  {
    title: "Senior Software Engineer",
    icon: Suth,
    companyName: "Sutherland Global Services",
    date: "Feb 2017 - Jun 2018",
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
    companyName: "SLK Software Services, Bangalore",
    date: "2015 - Feb 2017",
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
    companyName: "",
    date: "",
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using .NET Framework technologies.",
      "Collaborating with cross-functional team members and supporting products for small scale businesses.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Evaluation-First Generation (EFA)",
    kind: "Paper · 2026",
    featured: true,
    description:
      "Specification-Driven LLM Output Quality via Dynamic Rubric Conditioning and Iterative Criteria Refinement. The model writes the rubric first, then generates against it, so the check is part of the generation and not a pass after it.",
    stat: "96.2%",
    statLabel:
      "all-pass on MT-Bench vs 92.5% for the best baseline (Self-Refine) · 80 prompts × 12 methods = 960 runs",
    tags: [
      { name: "llm-evaluation", color: "blue-text-gradient" },
      { name: "mt-bench", color: "green-text-gradient" },
      { name: "rubricon", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/evaluation-first-attention",
    links: [
      {
        label: "Paper (PDF)",
        url: "https://github.com/karthyick/evaluation-first-attention/blob/main/paper/EFA_Paper_Final.pdf",
      },
      {
        label: "Plain-language article",
        url: "https://www.linkedin.com/pulse/llms-check-own-work-why-i-make-model-write-rubric-first-mohan-eqs4c",
      },
      { label: "rubricon on PyPI", url: "https://pypi.org/project/rubricon/" },
    ],
  },
  {
    name: "TinyStories-24.5M",
    kind: "Model · trained from scratch",
    featured: true,
    description:
      "A 24.5M-parameter decoder-only LLM on the Llama 2 architecture: RoPE, SwiGLU, RMSNorm, Flash Attention, custom 10K-vocab tokenizer. Trained on a single RTX 5090 to show how far a small model gets on a well-shaped domain. Live inference on Hugging Face.",
    stat: "8.65",
    statLabel: "perplexity · 24.5M parameters · Llama 2 architecture",
    tags: [
      { name: "pytorch", color: "orange-text-gradient" },
      { name: "llama-2", color: "blue-text-gradient" },
      { name: "from-scratch", color: "green-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/llm_tinystories",
    links: [
      {
        label: "Model + live inference",
        url: "https://huggingface.co/karthyick/tinystories-24.5m-article-generation",
      },
    ],
  },
  {
    name: "tracemaid",
    kind: "PyPI",
    description:
      "OpenTelemetry traces turned into Mermaid diagrams you can actually read.",
    stat: "4,464",
    statLabel: "downloads",
    tags: [
      { name: "opentelemetry", color: "blue-text-gradient" },
      { name: "observability", color: "green-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/tracemaid",
    links: [{ label: "PyPI", url: "https://pypi.org/project/tracemaid/" }],
  },
  {
    name: "rubricon",
    kind: "PyPI",
    description:
      "Specification-first generation: write the rubric, then generate against it. Reference implementation of the EFA paper.",
    stat: "4,220",
    statLabel: "downloads",
    tags: [
      { name: "llm-evaluation", color: "blue-text-gradient" },
      { name: "efa", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/evaluation-first-attention",
    links: [{ label: "PyPI", url: "https://pypi.org/project/rubricon/" }],
  },
  {
    name: "distill-json",
    kind: "PyPI",
    description:
      "Lossless JSON compression for LLM payloads: 60-85% token reduction, 6.6x ratio.",
    stat: "3,031",
    statLabel: "downloads",
    tags: [
      { name: "token-economics", color: "orange-text-gradient" },
      { name: "compression", color: "green-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/DISTILL",
    links: [{ label: "PyPI", url: "https://pypi.org/project/distill-json/" }],
  },
  {
    name: "semantic-llm-cache",
    kind: "PyPI",
    description:
      "Cache by meaning, not by string. One decorator, and 20-40% of calls never leave the process.",
    stat: "2,470",
    statLabel: "downloads",
    tags: [
      { name: "caching", color: "blue-text-gradient" },
      { name: "embeddings", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/prompt-cache",
    links: [
      { label: "PyPI", url: "https://pypi.org/project/semantic-llm-cache/" },
    ],
  },
  {
    name: "auto-any",
    kind: "PyPI",
    description:
      "Browser and task automation that replays: every run is a signed receipt.",
    stat: "2,344",
    statLabel: "downloads",
    tags: [
      { name: "automation", color: "green-text-gradient" },
      { name: "agents", color: "orange-text-gradient" },
    ],
    sourceCodeLink: "https://pypi.org/project/auto-any/",
    links: [{ label: "PyPI", url: "https://pypi.org/project/auto-any/" }],
  },
  {
    name: "clinotes",
    kind: "PyPI",
    description:
      "Git-native project memory for coding agents: decisions as Markdown, MCP-ready.",
    stat: "1,800",
    statLabel: "downloads",
    tags: [
      { name: "agent-memory", color: "pink-text-gradient" },
      { name: "mcp", color: "blue-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/clinotes",
    links: [{ label: "PyPI", url: "https://pypi.org/project/clinotes/" }],
  },
  {
    name: "langgraph-crosschain",
    kind: "PyPI",
    description:
      "Direct node-to-node communication across separate LangGraph chains.",
    stat: "1,121",
    statLabel: "downloads",
    tags: [
      { name: "langgraph", color: "green-text-gradient" },
      { name: "multi-agent", color: "orange-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/langgraph-crosschain",
    links: [
      { label: "PyPI", url: "https://pypi.org/project/langgraph-crosschain/" },
    ],
  },
  {
    name: "context-rainbow",
    kind: "PyPI",
    description:
      "Color-aware context routing: progressive knowledge loading instead of bulk stuffing.",
    stat: "527",
    statLabel: "downloads",
    tags: [
      { name: "context-engineering", color: "blue-text-gradient" },
      { name: "routing", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/karthyick/context-rainbow",
    links: [
      { label: "PyPI", url: "https://pypi.org/project/context-rainbow/" },
    ],
  },
  {
    name: "VS Code extensions",
    kind: "Marketplace · krextensions",
    description:
      "8 editor tools on the VS Code Marketplace. Python Venv Activator (2,694) and Code to Flowchart (2,297) lead the set.",
    stat: "5,192",
    statLabel: "installs across 8 extensions",
    tags: [
      { name: "vscode", color: "blue-text-gradient" },
      { name: "developer-tools", color: "green-text-gradient" },
    ],
    sourceCodeLink: "https://marketplace.visualstudio.com/publishers/krextensions",
    links: [
      {
        label: "Python Venv Activator",
        url: "https://marketplace.visualstudio.com/items?itemName=krextensions.venv-activator",
      },
      {
        label: "Code to Flowchart",
        url: "https://marketplace.visualstudio.com/items?itemName=krextensions.code-to-flowchart",
      },
    ],
  },
];

export { services, technologies, experiences, projects, socials, stats };
