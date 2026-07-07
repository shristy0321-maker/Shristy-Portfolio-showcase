import { motion } from "framer-motion";

const experiences = [
  {
    role: "Relationship Manager",
    company: "Trade India",
    location: "Jaipur",
    period: "Nov 2024 – May 2025",
    year: "'25",
    points: [
      "Managed B2B relationships and captured business requirements to improve platform adoption.",
      "Translated client feedback into actionable recommendations for internal teams.",
      "Worked across functions to resolve friction points and improve customer experience.",
    ],
  },
  {
    role: "Client Management",
    company: "Nimble Cowork",
    location: "Jaipur",
    period: "Mar 2024 – Oct 2024",
    year: "'24",
    points: [
      "Handled onboarding, support, and retention for coworking members.",
      "Mapped recurring service pain points and coordinated improvements.",
      "Built a day-to-day understanding of how user expectations shape loyalty.",
    ],
  },
];

const WINE = "#0a3323";
const ROSE = "#839958";
const MAUVE = "#105666";
const BLUSH = "#F7F4D5";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32" style={{ background: BLUSH }}>
      {/* Decorative floating serif letter */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none"
        style={{
          top: "8%",
          right: "-2%",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(180px, 26vw, 420px)",
          lineHeight: 0.85,
          color: WINE,
          opacity: 0.06,
          letterSpacing: "-0.04em",
        }}
      >
        journey
      </span>

      {/* Soft rose blob */}
      <svg
        aria-hidden
        className="pointer-events-none absolute"
        style={{ bottom: "-120px", left: "-140px", width: 460, height: 460, opacity: 0.35 }}
        viewBox="0 0 400 400"
      >
        <path
          fill={ROSE}
          d="M320 220c0 90-70 150-160 150S0 320 20 220 90 30 200 30s120 100 120 190z"
        />
      </svg>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start gap-4 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: WINE }} />
              <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.32em", color: WINE }}>
                Chapter 03 · Experience
              </p>
            </div>
            <h2
              className="text-5xl leading-[0.98] md:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, letterSpacing: "-0.015em", color: "#0A3323" }}
            >
              A working <span style={{ fontStyle: "italic", color: WINE }}>journey</span>
              <br />
              in customer-facing rooms.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground md:text-base">
            Two years of B2B relationships, onboarding, and support — where I learned to translate messy conversations into product signal.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="absolute top-2 hidden md:block"
            style={{
              left: "calc(25% + 12px)",
              bottom: 0,
              width: 2,
              background: `linear-gradient(to bottom, ${WINE}, ${ROSE} 60%, transparent)`,
              borderRadius: 2,
            }}
          />

          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-6 pb-16 md:grid-cols-12 md:gap-10 md:pb-20"
            >
              {/* Timeline dot */}
              <span
                aria-hidden
                className="absolute hidden md:block"
                style={{
                  left: "calc(25% + 5px)",
                  top: 8,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: BLUSH,
                  border: `3px solid ${WINE}`,
                  boxShadow: `0 0 0 6px ${BLUSH}`,
                }}
              />

              <div className="md:col-span-3">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase"
                  style={{
                    background: `${WINE}12`,
                    color: WINE,
                    letterSpacing: "0.22em",
                    border: `1px solid ${WINE}30`,
                  }}
                >
                  {exp.period}
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm" style={{ color: MAUVE }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {exp.location}
                </p>
              </div>

              <div className="md:col-span-9">
                <div
                  className="relative rounded-3xl p-8 md:p-10"
                  style={{
                    background: "#FFFFFF",
                    border: `1px solid ${ROSE}55`,
                    boxShadow: `0 24px 60px rgba(10,51,35,0.08)`,
                  }}
                >
                  {/* Giant year in the corner */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute select-none"
                    style={{
                      top: 12,
                      right: 20,
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "clamp(80px, 10vw, 140px)",
                      lineHeight: 1,
                      color: ROSE,
                      opacity: 0.35,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {exp.year}
                  </span>

                  <h3
                    className="relative text-[1.75rem] leading-tight md:text-[2.15rem]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: "#0A3323" }}
                  >
                    {exp.role}
                    <span style={{ fontStyle: "italic", color: WINE }}> at {exp.company}</span>
                  </h3>

                  <ul className="relative mt-6 space-y-4 text-[15px] leading-7 md:text-base md:leading-8" style={{ color: "#2d5240" }}>
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: WINE }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
