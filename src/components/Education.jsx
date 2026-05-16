import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { educationList } from "../constants";

const Education = () => {
  return (
    <section id="education" className={styles.paddingY}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${styles.heading2} mb-12`}
          >
            Education
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="feature-card p-8 rounded-[20px] border border-white/10 hover:border-secondary/30"
              >
                <div className="flex flex-col">
                  <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">
                    {edu.title}
                  </h3>
                  <p className="font-poppins font-semibold text-[18px] text-secondary mb-2">
                    {edu.degree}
                  </p>
                  <p className="font-poppins text-dimWhite text-[16px] mb-3">
                    {edu.content1}
                  </p>
                  <p className="font-poppins text-dimWhite text-[14px]">
                    {edu.duration}
                  </p>
                  {edu.content2 && (
                    <p className="font-poppins text-dimWhite text-[16px] mt-3">
                      {edu.content2}
                    </p>
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

export default Education;
