import { motion } from "framer-motion";
import { socialMedia } from "../constants";
import styles from "../style";

const Contact = () => {
  // Build contact cards from shared socialMedia constants
  const contactInfo = socialMedia.map((s) => {
    const titleMap = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      mail: 'Email',
      phone: 'Phone',
    };
    return {
      title: titleMap[s.id] || s.id,
      value: s.link.replace(/^(mailto:|tel:)?/, ''),
      href: s.link,
      icon: s.icon,
    };
  });

  return (
    <section id="contact" className={`${styles.paddingY} border-t border-white/10`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white relative inline-block mb-6">
            Contact Me
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
          </h2>
          <p className="mt-8 text-lg text-dimWhite max-w-2xl mx-auto">
            Have a project in mind? Let's build it together. Open to hiring and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white/5 border border-secondary/20 rounded-[24px] p-6 hover:border-secondary/40 hover:bg-white/10 transition-all duration-500 flex flex-col items-center justify-center min-h-[180px] text-center"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4 text-secondary mx-auto">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-base md:text-lg font-poppins font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-dimWhite break-all">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

        {/* Footer copyright moved to global Footer component to avoid duplicates */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
