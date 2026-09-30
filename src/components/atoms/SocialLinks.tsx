import React from "react";

import { socials } from "../../constants";
import { TSocial } from "../../types";
import {
  GitHubIcon,
  GlobeIcon,
  HuggingFaceIcon,
  LinkedInIcon,
  MailIcon,
  PaperIcon,
  XIcon,
} from "./Icons";

export const SocialIcon: React.FC<{
  id: TSocial["id"];
  className?: string;
}> = ({ id, className }) => {
  switch (id) {
    case "github":
      return <GitHubIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "huggingface":
      return <HuggingFaceIcon className={className} />;
    case "x":
      return <XIcon className={className} />;
    case "paper":
      return <PaperIcon className={className} />;
    case "mail":
      return <MailIcon className={className} />;
    default:
      return <GlobeIcon className={className} />;
  }
};

/** Compact icon row used in the hero. */
export const SocialLinks: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    {socials.map((social) => (
      <a
        key={social.id}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        title={social.label}
        className="bg-tertiary text-secondary flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2450] transition-colors hover:border-[#915EFF] hover:text-white"
      >
        <SocialIcon id={social.id} className="h-[18px] w-[18px]" />
      </a>
    ))}
  </div>
);
