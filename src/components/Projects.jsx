import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ project, selected, onKnowMore }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`project-card flex-shrink-0 snap-start px-8 py-6 transition-all duration-300 border rounded-[20px] feature-card w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px] mr-6 last:mr-0 bg-[#07111f] ${
        selected
          ? "border-secondary/40 shadow-[0_20px_60px_-35px_rgba(56,189,248,0.75)]"
          : "hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/40"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="relative w-full h-[180px] overflow-hidden rounded-[20px] bg-[#0b1726] shadow-inner">
            <img
              className="object-cover w-full h-full"
              src={project.image}
              alt={project.title}
            />
          </div>

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
                    className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-dimWhite text-sm hover:border-secondary/40 hover:text-secondary transition-colors duration-300"
                  >
                    <Icon className="text-[18px]" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-dimWhite text-[15px] leading-7 mb-6 min-h-[84px]">
            {project.content}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white hover:border-secondary/40 hover:text-secondary transition-colors duration-300"
              >
                <AiFillGithub size="1.9rem" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-secondary text-sm font-semibold hover:bg-secondary/20 transition-colors duration-300"
              >
                <BsLink45Deg size="1rem" />
                Demo
              </a>
            )}
            {project.knowMore && (
              <button
                type="button"
                onClick={() => onKnowMore(project)}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white text-sm font-semibold hover:border-secondary/40 hover:text-secondary transition-colors duration-300"
              >
                Know More
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

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

    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector(".project-card");
    const width = card ? card.offsetWidth + 24 : 420;
    container.scrollBy({ left: direction === "left" ? -width : width, behavior: "smooth" });
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

          <div className={`relative ${selectedProject ? "md:grid md:grid-cols-[1.1fr_420px] gap-6 items-start" : ""}`}>
            <div className="relative">
              <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 pr-4"
              >
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    selected={selectedProject?.id === project.id}
                    onKnowMore={setSelectedProject}
                  />
                ))}
              </div>

              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-secondary/15 hover:bg-secondary/40 disabled:opacity-40 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
              >
                <FaChevronLeft className="text-white text-2xl" />
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-secondary/15 hover:bg-secondary/40 disabled:opacity-40 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-300"
              >
                <FaChevronRight className="text-white text-2xl" />
              </button>
            </div>

            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                className="mt-6 md:mt-0 rounded-[24px] border border-secondary/15 bg-[#091421]/95 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-secondary uppercase tracking-[1px] text-xs mb-2">
                      Selected Project
                    </p>
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="text-white text-3xl leading-none hover:text-secondary transition-colors duration-300"
                    aria-label="Close details"
                  >
                    ×
                  </button>
                </div>

                <p className="text-dimWhite mt-5 leading-7">
                  {selectedProject.content}
                </p>

                {selectedProject.details && (
                  <p className="text-dimWhite mt-4 leading-7">
                    {selectedProject.details}
                  </p>
                )}

                <div className="mt-6">
                  <p className="text-secondary uppercase tracking-[1px] text-xs mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={tech.id}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-dimWhite"
                        >
                          <Icon className="text-[18px]" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
