import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { skills, experiences } from "../constants";

const SkillsAndExperience = () => {
  return (
    <section id="skills" className={styles.paddingY}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex md:flex-row flex-col gap-10`}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className={styles.heading2 + " mb-8"}>Skills</h2>
            <div className="space-y-6">
              {skills.map((category) => (
                <div key={category.title}>
                  <h3 className="font-poppins font-semibold text-[20px] text-secondary mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.id} className="flex items-center gap-2">
                          <Icon className="text-2xl text-secondary" />
                          <span className="text-sm text-dimWhite">{s.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className={styles.heading2 + " mb-8"}>Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.organisation} className="flex gap-4 items-start">
                  <div className="w-14 h-14 flex-shrink-0">
                    {exp.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={exp.logo} alt={`${exp.organisation} logo`} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full bg-white/10 rounded flex items-center justify-center text-xs">Logo</div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[18px] text-white">{exp.organisation}</h3>
                    {exp.positions.map((pos, i) => (
                      <div key={i} className="mt-2">
                        <p className="font-poppins font-semibold text-[16px] text-secondary">{pos.title}</p>
                        <p className="text-dimWhite text-sm mb-2">{pos.duration}</p>
                        <ul className="list-disc ml-5 space-y-1">
                          {pos.content.map((c, idx) => (
                            <li key={idx} className="text-dimWhite text-sm">{c.text}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
