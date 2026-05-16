import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { achievements } from "../constants";
import { FaGithub, FaYoutube, FaNewspaper } from "react-icons/fa";

const Achievements = () => {
  return (
    <section className={`bg-black-gradient ${styles.paddingY}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${styles.heading2} mb-12`}
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="feature-card p-8 rounded-[20px] border border-white/10"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">
                  {achievement.event}
                </h3>
                <p className="font-poppins font-semibold text-[18px] text-secondary mb-4">
                  {achievement.position}
                </p>
                <p className="font-poppins text-dimWhite text-[16px] mb-3">
                  {achievement.content1}
                </p>
                {achievement.content2 && (
                  <p className="font-poppins text-dimWhite text-[16px] mb-3">
                    {achievement.content2}
                  </p>
                )}
                {achievement.content3 && (
                  <p className="font-poppins text-dimWhite text-[16px] mb-4">
                    {achievement.content3}
                  </p>
                )}

                <div className="flex gap-3 mt-4">
                  {achievement.article && (
                    <a
                      href={achievement.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      <FaNewspaper size="1.5rem" />
                    </a>
                  )}
                  {achievement.youtube && (
                    <a
                      href={achievement.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      <FaYoutube size="1.5rem" />
                    </a>
                  )}
                  {achievement.github && (
                    <a
                      href={achievement.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      <FaGithub size="1.5rem" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
