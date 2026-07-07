import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "TMBA – Product / Technology Management",
    school: "Institute of Product Leadership",
    period: "2025 – 2027",
    detail: "Currently Pursuing",
    icon: GraduationCap,
    tone: "wine" as const,
  },
  {
    degree: "Bachelor of Business Administration",
    school: "BBA",
    period: "2021 – 2024",
    detail: "8.9 CGPA",
    icon: BookOpen,
    tone: "rose" as const,
  },
];

const WINE = "#0a3323";
const ROSE = "#839958";
const MAUVE = "#105666";
const BLUSH = "#F7F4D5";

const EducationSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#0A3323", color: BLUSH }}>
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(200,148,148,0.18) 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, rgba(10,51,35,0.35) 0%, transparent 55%)",
        }}
      />

      {/* Constellation of dots */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        style={{ mixBlendMode: "screen" }}
      >
        <defs>
          <pattern id="edu-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={ROSE} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edu-dots)" />
      </svg>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start gap-4 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: ROSE }} />
              <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.32em", color: ROSE }}>
                Chapter 05 · Education
              </p>
            </div>
            <h2
              className="text-5xl leading-[0.98] md:text-7xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                color: BLUSH,
              }}
            >
              Where I <span style={{ fontStyle: "italic", color: ROSE }}>learned</span>
              <br />
              to think in systems.
            </h2>
          </div>
        </motion.div>

        {/* Ticket-style cards */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            const accent = edu.tone === "wine" ? WINE : ROSE;
            return (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl"
                style={{
                  background: BLUSH,
                  color: "#0A3323",
                  border: `1px solid ${accent}`,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
                }}
              >
                {/* Ticket notches */}
                <span
                  aria-hidden
                  className="absolute rounded-full"
                  style={{ top: "50%", left: -14, width: 28, height: 28, background: "#0A3323", transform: "translateY(-50%)" }}
                />
                <span
                  aria-hidden
                  className="absolute rounded-full"
                  style={{ top: "50%", right: -14, width: 28, height: 28, background: "#0A3323", transform: "translateY(-50%)" }}
                />

                {/* Dashed vertical divider */}
                <span
                  aria-hidden
                  className="absolute top-6 bottom-6"
                  style={{ left: "38%", borderLeft: `1px dashed ${accent}` }}
                />

                <div className="grid grid-cols-12 gap-4 p-8 md:p-10">
                  <div className="col-span-4 flex flex-col justify-between">
                    <div>
                      <span
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{ background: accent, color: BLUSH }}
                      >
                        <Icon size={26} strokeWidth={1.6} />
                      </span>
                      <p
                        className="mt-6 text-xs font-semibold uppercase"
                        style={{ letterSpacing: "0.22em", color: MAUVE }}
                      >
                        {edu.period}
                      </p>
                    </div>
                    <p
                      className="mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase"
                      style={{
                        background: `${accent}22`,
                        color: accent,
                        letterSpacing: "0.2em",
                        border: `1px solid ${accent}55`,
                      }}
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                      {edu.detail}
                    </p>
                  </div>

                  <div className="col-span-8 pl-6">
                    <h3
                      className="text-[1.55rem] leading-tight md:text-[1.9rem]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: "#0A3323" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="mt-3 text-sm md:text-base" style={{ color: MAUVE }}>
                      {edu.school}
                    </p>

                    {/* Decorative barcode/lines */}
                    <div className="mt-8 flex items-end gap-1" aria-hidden>
                      {[3, 6, 2, 8, 4, 5, 3, 7, 4, 6, 3, 5, 2, 7, 4].map((h, idx) => (
                        <span
                          key={idx}
                          className="inline-block"
                          style={{
                            width: 2,
                            height: h * 4,
                            background: accent,
                            opacity: 0.55,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
