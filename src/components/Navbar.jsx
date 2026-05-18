import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import styles from "../style";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./ui";

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
            <svg
              className="w-10 h-10 text-white"
              viewBox="240 185 150 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path fill="currentColor" d="M255.934113,192.825897C269.895050,191.689453 283.820801,190.473602 297.381073,193.120529C318.372009,197.217850 326.190308,223.165070 311.801422,239.135971C311.144531,239.865128 310.540344,240.641830 309.565186,241.812164C319.475067,254.059967 329.342865,266.255768 339.357025,278.632446C331.578522,281.681549 326.188080,280.527832 321.865753,275.240692C311.763702,262.883759 301.698639,250.496582 291.710693,238.234711C292.555023,236.161545 294.269196,236.248016 295.554901,235.699081C302.585815,232.697083 307.222015,225.293869 306.099945,218.749222C304.834259,211.366837 297.192291,204.529678 289.778870,204.346008C284.118347,204.205795 278.370270,203.684677 272.806671,204.425644C263.482605,205.667419 259.357666,200.014847 255.934113,192.825897z"/>
              <path fill="currentColor" d="M340.718994,214.740738C345.570374,208.784149 350.207123,203.110947 354.792847,197.396851C359.478516,191.558319 364.729584,190.225800 372.823639,193.297867C369.786133,197.177536 366.919495,200.962357 363.923370,204.641769C356.144073,214.195160 348.396149,223.776901 340.436127,233.178375C338.281281,235.723404 338.263123,237.472153 340.367920,240.014282C350.030029,251.683853 359.533478,263.484894 369.072662,275.255920C369.977203,276.372101 371.354462,277.259125 371.225952,278.982391C363.765472,281.780762 358.519196,280.445404 353.792206,274.650513C344.739868,263.553040 335.763275,252.390945 326.530060,241.445618C323.621124,237.997269 323.548706,235.379776 326.538239,231.990234C331.380402,226.500183 335.853241,220.684402 340.718994,214.740738z"/>
              <path fill="currentColor" d="M300.881592,280.043518C295.873871,280.679169 292.743011,278.833038 289.871094,275.162292C281.576172,264.560028 272.872559,254.278259 264.393768,243.818466C262.873291,241.942719 260.868805,240.315842 260.375397,237.727356C268.550964,234.990433 273.075806,236.241638 278.134491,242.437943C287.382996,253.766312 296.670837,265.062592 305.930420,276.381927C306.437958,277.002350 306.837372,277.711212 307.363586,278.492432C305.617737,280.758026 303.303101,279.785370 300.881592,280.043518z"/>
            </svg>
            <span className="text-white font-poppins font-bold ss:text-[24px] text-[20px]">
              Ramakrishna
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-white font-poppins font-normal text-[16px] hover:text-secondary transition-colors duration-300"
              >
                {nav.title}
              </a>
            ))}
            <ThemeToggle variant="icon" defaultTheme="light" duration={450} />
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex md:hidden items-center mr-4">
            <ThemeToggle variant="icon" defaultTheme="light" duration={450} />
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
