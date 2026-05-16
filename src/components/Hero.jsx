import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { aboutMe } from "../constants";
import LetsConnect from "./LetsConnect";

const Hero = () => {
  return (
    <section id="home" className={`${styles.paddingX} ${styles.paddingY} pt-[40px]`}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex md:flex-row flex-col gap-10`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex-1 ${styles.flexStart} flex-col`}
      >
        {/* Hero text */}
        <div className="flex flex-row items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {aboutMe.intro}
        </p>

        <p className={`${styles.paragraph} max-w-[470px] mt-2 text-secondary`}>
          {aboutMe.tagLine}
        </p>
      </motion.div>

          <div className="flex justify-center items-center w-full md:flex-none md:max-w-[141px]">
            <LetsConnect />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <div className="relative z-10 h-[90%] w-[85%] flex items-center justify-center">
              <img
                src="/images/pic.png"
                alt="Profile"
                className="w-[70%] h-auto object-cover rounded-[20px] box-shadow"
              />
            </div>
            <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
