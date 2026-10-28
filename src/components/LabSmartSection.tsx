import { motion } from "framer-motion";
import logo from "@/assets/labsmart-logo.png";
import workplace from "@/assets/labsmart-workplace.jpeg";
import deskCollage from "@/assets/labsmart-desk-collage.png";
import invitationFlow from "@/assets/labsmart-invitation-flow.png";
import fizzyBoard from "@/assets/labsmart-fizzy-board.png";

const GREEN = "#0A3323";
const MOSS = "#839958";
const BEIGE = "#F7F4D5";
const MIDNIGHT = "#105666";

const modules = [
  "User Invitation",
  "Lab Profile",
  "Mobile UI Optimization",
  "Daily Business",
  "Expense Management",
];

const ease = [0.22, 1, 0.36, 1] as const;

const LabSmartSection = () => {
  return (
    <section id="labsmart" className="relative overflow-hidden py-24 md:py-32" style={{ background: BEIGE }}>
      {/* Ghost word */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none"
        style={{
          top: "4%",
          left: "-3%",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(160px, 22vw, 360px)",
          lineHeight: 0.85,
          color: GREEN,
          opacity: 0.05,
          letterSpacing: "-0.04em",
        }}
      >
        labs
      </span>

      <div className="section-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: GREEN }} />
              <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.32em", color: GREEN }}>
                Professional Experience
              </p>
            </div>

            <div
              className="mb-8 inline-flex items-center rounded-2xl bg-white px-6 py-4"
              style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 16px 40px rgba(10,51,35,0.08)" }}
            >
              <img src={logo} alt="LabSmart logo" className="h-10 w-auto object-contain md:h-12" />
            </div>

            <h2
              className="text-3xl leading-tight md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, color: GREEN }}
            >
              Product Specialist Intern
            </h2>
            <p className="mt-2 text-sm font-medium uppercase" style={{ letterSpacing: "0.18em", color: MIDNIGHT }}>
              3 Months · Healthcare SaaS
            </p>

            <p className="mt-6 max-w-md text-[15px] leading-7 md:text-base md:leading-8" style={{ color: "#2d5240" }}>
              Worked on understanding lab workflows, improving product experiences, writing user stories,
              designing solutions, and collaborating with developers to improve day-to-day operations for
              pathology labs.
            </p>

            <div className="mt-7 flex max-w-md flex-wrap gap-2">
              {modules.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[12px] font-medium"
                  style={{ background: `${GREEN}0d`, color: GREEN, border: `1px solid ${MOSS}66` }}
                >
                  {m}
                </span>
              ))}
            </div>

            <a
              href="#labsmart-journey"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: GREEN, color: BEIGE, boxShadow: "0 14px 30px rgba(10,51,35,0.25)" }}
            >
              Explore My Work at LabSmart
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </motion.div>

          {/* Right — collage of real work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Soft moss blob behind collage */}
            <svg
              aria-hidden
              className="pointer-events-none absolute"
              style={{ top: "-8%", right: "-10%", width: 380, height: 380, opacity: 0.3, zIndex: 0 }}
              viewBox="0 0 400 400"
            >
              <path fill={MOSS} d="M320 220c0 90-70 150-160 150S0 320 20 220 90 30 200 30s120 100 120 190z" />
            </svg>

            <div className="relative grid grid-cols-12 gap-4">
              {/* Workplace photo — large */}
              <figure
                className="relative col-span-7 overflow-hidden rounded-3xl bg-white"
                style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 24px 60px rgba(10,51,35,0.14)", transform: "rotate(-1.5deg)" }}
              >
                <img src={workplace} alt="LabSmart website on my laptop with paper sketches" className="h-64 w-full object-cover md:h-80" />
                <figcaption
                  className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase"
                  style={{ background: `${BEIGE}f2`, color: GREEN, letterSpacing: "0.16em" }}
                >
                  Real work · real sketches
                </figcaption>
              </figure>

              {/* Invitation flow */}
              <figure
                className="relative col-span-5 self-start overflow-hidden rounded-3xl bg-white p-2"
                style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 20px 50px rgba(10,51,35,0.12)", transform: "rotate(2deg) translateY(14px)" }}
              >
                <img src={invitationFlow} alt="User invitation flow wireframe" className="h-40 w-full rounded-2xl object-cover object-top md:h-52" />
                <figcaption
                  className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase"
                  style={{ background: `${GREEN}f0`, color: BEIGE, letterSpacing: "0.16em" }}
                >
                  Invitation flow
                </figcaption>
              </figure>

              {/* Fizzy board */}
              <figure
                className="relative col-span-7 overflow-hidden rounded-3xl bg-white"
                style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 20px 50px rgba(10,51,35,0.12)", transform: "rotate(1.2deg) translateY(-6px)" }}
              >
                <img src={fizzyBoard} alt="Fizzy board with Mobile UI Optimization user stories" className="h-44 w-full object-cover object-left md:h-56" />
                <figcaption
                  className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase"
                  style={{ background: `${BEIGE}f2`, color: GREEN, letterSpacing: "0.16em" }}
                >
                  Fizzy user stories
                </figcaption>
              </figure>

              {/* Desk collage */}
              <figure
                className="relative col-span-5 self-end overflow-hidden rounded-3xl bg-white"
                style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 20px 50px rgba(10,51,35,0.12)", transform: "rotate(-2deg)" }}
              >
                <img src={deskCollage} alt="Desk with code, paper prototypes and notes" className="h-44 w-full object-cover md:h-56" />
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabSmartSection;
