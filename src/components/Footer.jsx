import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { aboutMe, socialMedia, repoLink } from "../constants";
import { FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`bg-black-gradient ${styles.paddingY}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h1 className="font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] mb-4">
                <span className="text-gradient">{aboutMe.name}</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[470px]`}>
                {aboutMe.tagLine}
              </p>
            </motion.div>

            {/* Right Section - Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="font-poppins font-semibold text-[24px] text-white mb-6">
                Get in Touch
              </h3>
              <div className="flex flex-wrap gap-6 mb-8">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-secondary hover:text-white transition-colors duration-300"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/images/Ramakrishna_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-poppins font-semibold bg-blue-gradient rounded-[10px] text-white hover:bg-secondary transition-all duration-300"
                >
                  Get Resume
                </a>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-poppins font-semibold bg-blue-gradient rounded-[10px] text-white hover:bg-secondary transition-all duration-300 flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 py-8 flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="font-poppins text-center text-dimWhite">
              © 2024-2026 RamaKrishna Bootla. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-secondary hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              Back to Top <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
