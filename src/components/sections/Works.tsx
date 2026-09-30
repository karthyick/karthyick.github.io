import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { GitHubIcon } from "../atoms/Icons";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  kind,
  description,
  stat,
  statLabel,
  tags,
  sourceCodeLink,
  links,
  featured,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(index, 4) * 0.2, 0.75)}
      className={featured ? "w-full lg:flex-1" : "w-full sm:w-[360px]"}
    >
      <Tilt
        tiltMaxAngleX={featured ? 6 : 12}
        tiltMaxAngleY={featured ? 6 : 12}
        scale={1}
        transitionSpeed={450}
        className="h-full"
      >
        <div
          className={`${
            featured ? "green-pink-gradient" : "bg-tertiary"
          } shadow-card h-full rounded-2xl p-[1px]`}
        >
          <div className="bg-tertiary flex h-full flex-col rounded-2xl p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider">
                {kind}
              </p>
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} source`}
                title="Source"
                className="black-gradient flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:text-[#915EFF]"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>

            <div className="mt-3">
              <p
                className={`${
                  featured ? "green-text-gradient" : "blue-text-gradient"
                } text-[32px] font-black leading-none sm:text-[40px]`}
              >
                {stat}
              </p>
              <p className="text-secondary mt-1 text-[13px]">{statLabel}</p>
            </div>

            <div className="mt-4">
              <h3
                className={`font-bold text-white ${
                  featured ? "text-[24px]" : "text-[20px]"
                }`}
              >
                {name}
              </h3>
              <p className="text-secondary mt-2 text-[14px] leading-[22px]">
                {description}
              </p>
            </div>

            {links && links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black-100 rounded-lg border border-[#2a2450] px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:border-[#915EFF]"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-16 flex flex-col gap-7 lg:flex-row">
        {featured.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-7 max-sm:justify-center">
        {rest.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "research");
