import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { extraCurricular } from "../constants";

const ExtraCurricular = () => {
  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${styles.heading2} mb-12`}
      >
        Extra Curricular
      </motion.h2>

      <div className="space-y-8">
        {extraCurricular.map((activity, idx) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="feedback-card border border-white/10 rounded-[20px] p-8 hover:border-secondary/30"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">
                  {activity.organisation}
                </h3>
                <p className="font-poppins font-semibold text-[18px] text-secondary mb-2">
                  {activity.title}
                </p>
                <p className="font-poppins text-dimWhite text-[14px] mb-4">
                  {activity.duration}
                </p>
                <ul className="space-y-2">
                  {activity.content.map((item, i) => (
                    <li key={i} className="font-poppins text-dimWhite text-[16px] flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurricular;
