import { motion } from "framer-motion";
import { Mail, Linkedin, BookOpen, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "shristy1921@gmail.com",
    href: "mailto:shristy1921@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shristy-kumari-42634221b",
    href: "https://www.linkedin.com/in/shristy-kumari-42634221b",
    external: true,
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "medium.com/@shristy1921",
    href: "https://medium.com/@shristy1921",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6203189245",
    href: "tel:+916203189245",
  },
];

const GOLD = "#C9A227";
const CREAM = "#FAF8F5";
const MUTED = "#D8CDC1";
const ESPRESSO = "#2B211B";

const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: ESPRESSO }}>
      {/* Soft editorial transition from ivory above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-16"
        style={{ background: `linear-gradient(to bottom, #FAF8F5 0%, ${ESPRESSO} 100%)` }}
      />

      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: {} }}
          className="mx-auto text-center"
          style={{ maxWidth: 760 }}
        >



          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[2rem] leading-[1.18] md:text-[2.75rem]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: CREAM,
              fontWeight: 500,
              letterSpacing: "-0.005em",
            }}
          >
            The best products start with a conversation.
            <br />
            Let's have one.
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mx-auto mt-7 text-base leading-8 md:text-lg"
            style={{ maxWidth: 650, color: MUTED }}
          >
            Open to Product Management internships, product roles, and meaningful collaborations.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="mailto:shristy1921@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full px-9 py-3.5 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5"
              style={{
                backgroundColor: "#F2ECE4",
                color: ESPRESSO,
                border: "1px solid #E6DED2",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F2ECE4")}
            >
              <span>Start a Conversation</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          className="mx-auto mt-20 flex max-w-2xl items-start justify-center gap-12 md:mt-24 md:gap-20"
        >
          {contacts.map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="contact-icon-link"
              >
                <item.icon size={22} strokeWidth={1.4} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          .contact-icon-link {
            color: ${CREAM};
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            transition: color 250ms ease, transform 250ms ease;
          }
          .contact-icon-link:hover {
            color: ${GOLD};
            transform: translateY(-2px);
          }
        `}</style>

        {/* Footer */}
        <div
          className="mx-auto mt-24 flex max-w-5xl flex-col gap-2 text-xs md:mt-28 md:flex-row md:items-center md:justify-between"
          style={{ color: MUTED }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.95rem" }}>
            Built with a story-first product lens.
          </p>
          <p style={{ letterSpacing: "0.12em" }}>© 2026 Shristy Kumari</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
