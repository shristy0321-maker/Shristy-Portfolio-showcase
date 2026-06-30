import { motion } from "framer-motion";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shristy-kumari-42634221b", external: true },
  { label: "Medium", href: "https://medium.com/@shristy1921", external: true },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing",
    external: true,
  },
  { label: "Email", href: "mailto:shristy1921@gmail.com", external: false },
];

const FinalCTASection = () => {
  return (
    <section
      className="relative py-16 md:py-20"
      style={{ backgroundColor: "#2B211B" }}
    >
      {/* Soft editorial transition from ivory above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-16"
        style={{
          background: "linear-gradient(to bottom, #FAF8F5 0%, #2B211B 100%)",
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: {} }}
          className="mx-auto text-center"
          style={{ maxWidth: "720px" }}
        >
          {[
            { delay: 0 },
            { delay: 0.15 },
            { delay: 0.3 },
            { delay: 0.45 },
            { delay: 0.6 },
            { delay: 0.75 },
          ].map(() => null)}

          <motion.div
            aria-hidden
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 0.6, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6"
            style={{ width: 80, height: 1, backgroundColor: "#C9A227" }}
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mb-5 text-xs uppercase"
            style={{ color: "#C9A227", letterSpacing: "0.28em", fontWeight: 500 }}
          >
            Let's Connect
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-4xl leading-[1.15] md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#FAF8F5",
              fontWeight: 500,
            }}
          >
            The best products start with a conversation.
            <br />
            Let's have one.
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="mx-auto mt-6 text-base leading-8 md:text-lg"
            style={{ maxWidth: "520px", color: "#D8CDC1" }}
          >
            Open to Product Management internships, product roles, and meaningful collaborations.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="mailto:shristy1921@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full px-9 py-3.5 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5"
              style={{
                backgroundColor: "#F2ECE4",
                color: "#2B211B",
                border: "1px solid #E6DED2",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F2ECE4")}
            >
              <span>Let's Connect</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {links.map((link, i) => (
              <div key={link.label} className="flex items-center gap-x-4">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="relative text-xs uppercase transition-colors duration-300"
                  style={{
                    color: "#D8CDC1",
                    letterSpacing: "0.18em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF8F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D8CDC1")}
                >
                  {link.label}
                </a>
                {i < links.length - 1 && (
                  <span aria-hidden style={{ color: "#C9A227" }}>·</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
