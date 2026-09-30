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
    content: string;
    cta: string;
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
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
    p: ["Lead AI/ML Engineer @ Appian", "Applied LLM research, built for production."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    content:
      "Happy to talk about agent reliability, LLM evaluation, token economics, small-model training, or anything on this page you think is wrong.",
    cta: "Email me",
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Lead AI/ML Engineer at Appian. I do applied LLM research and ship it to production. At Appian I designed REX, an AI-native autonomous engineering pipeline that delivered a ~70% productivity gain, and built a vendor-agnostic LLM tracing and evaluation service on OTel/OpenInference standards. My paper, Evaluation-First Generation (EFA), has the model write its own rubric before it generates: 96.2% all-pass on MT-Bench against 92.5% for the best baseline. I trained TinyStories-24.5M, a 24.5M-parameter LLM, from scratch (Llama 2 architecture, perplexity 8.65) and LoRA fine-tuned a 9B model to 91.7% domain accuracy. In the open: 8 PyPI packages and 8 VS Code extensions, 25K+ downloads, all tried first at aichargeworks.com. Quantum Computing (MIT xPRO) · PG in AI/ML (IIT Roorkee) · PG in Cloud Computing (Great Lakes) · Azure certified (AZ-900, AI-900, DP-900, PL-900).`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Journey.",
    },
    works: {
      p: "Research & open source",
      h2: "Work.",
      content: `One thesis across all of it: an LLM should check its own work, and an agent loop should cost less and be visible at every stage. The paper sets the method, the model proves how far a small network gets on a well-shaped domain, and each package makes one stage of the loop cheaper or observable.`,
    },
  },
};
