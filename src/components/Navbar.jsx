import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import styles from "../style";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Keep navbar always visible (sticky)
  useEffect(() => {
    // no-op: navbar is sticky by CSS and should always be visible
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.0 }}
      className={`nav-styles fixed top-0 left-0 right-0 z-50`}
    >
      <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
        <div className={`${styles.boxWidth} flex justify-between items-center`}>
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/rk-logo.avif"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-white font-poppins font-bold ss:text-[24px] text-[20px]">
              RK
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-white font-poppins font-normal text-[16px] hover:text-secondary transition-colors duration-300"
              >
                {nav.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden bg-primary/95 backdrop-blur-md ${styles.paddingX}`}
        >
          <div className={`${styles.boxWidth} py-6 flex flex-col gap-4`}>
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-white font-poppins font-normal text-[16px] hover:text-secondary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
