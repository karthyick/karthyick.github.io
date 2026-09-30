export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  iconBg: string;
  companyName: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProjectLink = {
  label: string;
  url: string;
};

export type TProject = {
  kind: string;
  description: string;
  stat: string;
  statLabel: string;
  tags: {
    name: string;
    color: string;
  }[];
  sourceCodeLink: string;
  links?: TProjectLink[];
  featured?: boolean;
} & Required<Pick<TCommonProps, "name">>;

export type TSocial = {
  id: "github" | "linkedin" | "huggingface" | "x" | "paper" | "mail" | "web";
  label: string;
  handle: string;
  url: string;
};

export type TStat = {
  value: string;
  label: string;
  gradient: string;
};

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
