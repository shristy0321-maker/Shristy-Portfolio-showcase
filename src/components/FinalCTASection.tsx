import { motion } from "framer-motion";
import { Mail, Linkedin, BookOpen, Phone } from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";


const LINKEDIN_URL = "https://www.linkedin.com/in/shristy-kumari-42634221b";

const contacts = [
  { icon: Mail, label: "Email", value: "shristy1921@gmail.com", href: "mailto:shristy1921@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shristy-kumari-42634221b", href: LINKEDIN_URL, external: true },
  { icon: BookOpen, label: "Medium", value: "medium.com/@shristy1921", href: "https://medium.com/@shristy1921", external: true },
  { icon: Phone, label: "Phone", value: "+91 6203189245", href: "tel:+916203189245" },
];

const BLUSH = "#F7F4D5";
const ROSE = "#839958";
const MAUVE = "#105666";
const WINE = "#0a3323";
const INK = "#0A3323";

const FinalCTASection = () => {
  return (
    <>
      <MarqueeTicker
        variant="blush"
        italic
        speed={46}
        items={[
          "Let's build something",
          "Say hello",
          "Open to PM roles",
          "Ideas · Feedback · Coffee",
          "Currently in India",
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
        style={{
          background: `linear-gradient(160deg, ${ROSE} 0%, ${MAUVE} 45%, ${WINE} 100%)`,
        }}
      >
        {/* Wavy layered top divider — echoes the palette poster */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full md:h-32"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d={`M0,0 L1440,0 L1440,80 C1260,120 1080,40 900,72 C720,104 540,64 360,88 C180,112 90,72 0,96 Z`}
            fill={BLUSH}
          />
          <path
            d={`M0,60 C180,100 360,60 540,80 C720,100 900,60 1080,84 C1260,108 1350,72 1440,92 L1440,120 C1260,148 1080,96 900,116 C720,136 540,100 360,120 C180,140 90,112 0,132 Z`}
            fill={ROSE}
            opacity="0.9"
          />
        </svg>

        {/* Decorative floating marks */}
        <span
          aria-hidden
          className="pointer-events-none absolute select-none"
          style={{
            top: "18%",
            left: "6%",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(90px, 12vw, 180px)",
            color: BLUSH,
            opacity: 0.08,
            lineHeight: 1,
          }}
        >
          hello.
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute select-none"
          style={{
            bottom: "12%",
            right: "6%",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(80px, 10vw, 160px)",
            color: BLUSH,
            opacity: 0.08,
            lineHeight: 1,
          }}
        >
          &
        </span>

        <div className="section-container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, visible: {} }}
            className="mx-auto text-center"
            style={{ maxWidth: 820 }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.32em]"
              style={{ background: "rgba(247,244,213,0.14)", color: BLUSH, border: `1px solid rgba(247,244,213,0.25)` }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: BLUSH, boxShadow: `0 0 0 4px rgba(247,244,213,0.18)` }}
              />
              Currently open to work
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-[2.4rem] leading-[1.1] md:text-[4rem]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: BLUSH,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              The best products start
              <br />
              with a{" "}
              <span style={{ fontStyle: "italic", color: ROSE }}>conversation</span>.
              <br />
              Let's have one.
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="mx-auto mt-8 text-base leading-8 md:text-lg"
              style={{ maxWidth: 620, color: BLUSH, opacity: 0.82 }}
            >
              Open to Product Management internships, product roles, and meaningful collaborations.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
              className="mt-11 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="mailto:shristy1921@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5"
                style={{ backgroundColor: BLUSH, color: INK, boxShadow: "0 18px 40px rgba(10,51,35,0.25)" }}
              >
                <span>Start a Conversation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: `1px solid rgba(247,244,213,0.5)`, color: BLUSH }}
              >
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Contact row as chips */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 md:mt-28 md:grid-cols-4"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={item.label}
                className="group flex items-center gap-3 rounded-2xl px-4 py-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(247,244,213,0.08)",
                  border: `1px solid rgba(247,244,213,0.18)`,
                  color: BLUSH,
                  backdropFilter: "blur(6px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(247,244,213,0.16)";
                  e.currentTarget.style.borderColor = "rgba(247,244,213,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(247,244,213,0.08)";
                  e.currentTarget.style.borderColor = "rgba(247,244,213,0.18)";
                }}
              >
                <span
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full"
                  style={{ background: BLUSH, color: WINE }}
                >
                  <item.icon size={18} strokeWidth={1.7} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.24em]" style={{ opacity: 0.7 }}>
                    {item.label}
                  </span>
                  <span className="truncate text-[13px] font-medium">{item.value}</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blush footer */}
      <footer style={{ backgroundColor: BLUSH, color: INK }}>
        <div className="section-container">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 py-10 text-xs md:flex-row md:items-center md:justify-between md:py-12">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: WINE,
              }}
            >
              Built with a story-first product lens.
            </p>
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: WINE }}
              />
              <p style={{ letterSpacing: "0.16em", color: MAUVE }}>© 2026 SHRISTY KUMARI</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalCTASection;
