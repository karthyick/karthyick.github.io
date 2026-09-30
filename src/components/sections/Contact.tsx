import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { socials } from "../../constants";
import { Header } from "../atoms/Header";
import { SocialIcon } from "../atoms/SocialLinks";
import { MailIcon } from "../atoms/Icons";

const Contact = () => {
  const mailto = `mailto:${config.html.email}`;

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <p className="text-secondary mt-4 text-[16px] leading-[28px]">
          {config.contact.content}
        </p>

        <a
          href={mailto}
          className="bg-tertiary shadow-primary mt-8 inline-flex items-center gap-3 rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-colors hover:text-[#915EFF]"
        >
          <MailIcon className="h-5 w-5" />
          {config.contact.cta}
        </a>
        <p className="text-secondary mt-3 text-[14px]">{config.html.email}</p>

        <ul className="mt-10 flex flex-col gap-3">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary group flex items-center gap-4 rounded-lg px-5 py-3 transition-colors hover:bg-[#1d1836]"
              >
                <span className="text-secondary flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black-100 transition-colors group-hover:text-[#915EFF]">
                  <SocialIcon id={social.id} className="h-[18px] w-[18px]" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[15px] font-medium text-white">
                    {social.label}
                  </span>
                  <span className="text-secondary truncate text-[13px]">
                    {social.handle}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
