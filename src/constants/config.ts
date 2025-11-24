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
    title: "Karthick | Develoeper",
    fullName: "Karthick",
    email: "",
  },
  hero: {
    name: "Karthick",
    p: ["AI/ML | Agentic Systems | LLMs | Developer"],
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
      content: `10+ years in enterprise software, now focused on what matters: building intelligence. I architect Agentic AI systems, RAG pipelines, and fine-tune LLMs. Currently building AI Systems at Appian—transforming natural language into applications. I train custom models from scratch (34M+ parameters), research vocabulary optimization, and run serious GPU infrastructure. Certified in Azure (AZ-900, AI-900, DP-900, PL-900). PG in AI/ML. I don't just use AI—I build it.`,
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
