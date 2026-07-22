type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Karthick Raja M | Lead AI/ML Engineer",
    fullName: "Karthick Raja M",
    email: "karthickrajam18@gmail.com",
  },
  hero: {
    name: "Karthick",
    p: [
      "Lead AI/ML Engineer",
      "Agentic AI · Multi-Agent Systems · Custom LLMs · RAG · LLM Observability",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Lead AI/ML Engineer with 10+ years building enterprise-scale intelligent systems. Currently Lead AI Engineer at Appian — designed REX, an AI-native autonomous engineering pipeline delivering ~70% productivity gain, and built vendor-agnostic LLM observability replacing Phoenix, Datadog, and LangSmith. Published research: Evaluation-First Architecture (EFA) — 96.2% All-Pass Rate on MT-Bench. Trained TinyStories-24.5M, my own LLM from scratch (perplexity 8.65, on HuggingFace); LoRA fine-tuned a 9B model to 91.7% domain accuracy. 6 PyPI packages + 8 VS Code extensions — 20,000+ downloads across the aichargeworks.com ecosystem. Quantum Computing (MIT xPRO) · Gen AI (Chennai Mathematical Institute) · Azure certified (AZ-900, AI-900, DP-900, PL-900) · PG in AI/ML (IIT Roorkee). I don't just use AI—I build it.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Journey.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "",
      h2: "",
      content: ``,
    },
  },
};
