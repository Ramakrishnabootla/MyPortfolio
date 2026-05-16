import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex-shrink-0 snap-start px-8 py-6 transition-all duration-300 border rounded-[20px] feature-card w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px] mr-6 last:mr-0 bg-[#07111f]">
      <div className="flex flex-col h-full justify-between">
        <div>
          <img
            className="object-cover w-20 h-20 rounded-full ring-4 ring-secondary/30"
            src={project.image}
            alt={project.title}
          />

          <div className="mt-6">
            <h1 className="text-2xl font-semibold font-poppins text-white mb-3 text-gradient">
              {project.title}
            </h1>
            <p className="font-poppins font-semibold text-[14px] uppercase tracking-[1px] text-secondary mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="text-dimWhite text-[20px] hover:text-secondary tooltip transition-colors duration-300"
                  >
                    <Icon />
                    <span className="tooltiptext">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-dimWhite text-[15px] leading-7 mb-6">
            {project.content}
          </p>

          <div className="flex items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub
                  size="1.9rem"
                  className="text-white hover:text-secondary transition-colors duration-300"
                />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <BsLink45Deg
                  size="1.9rem"
                  className="text-white hover:text-secondary transition-colors duration-300"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 20);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 20);
  };

  useEffect(() => {
    updateScrollState();
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector('.project-card');
    const width = card ? card.offsetWidth + 24 : 420;
    container.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <section id="projects" className={styles.paddingY}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${styles.heading2} mb-12`}
          >
            Projects
          </motion.h2>

          <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-secondary/15 hover:bg-secondary/40 disabled:opacity-40 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
        >
          <FaChevronLeft className="text-white text-2xl" />
        </button>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-secondary/15 hover:bg-secondary/40 disabled:opacity-40 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
        >
          <FaChevronRight className="text-white text-2xl" />
        </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
