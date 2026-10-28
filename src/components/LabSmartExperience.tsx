import { motion } from "framer-motion";
import workplace from "@/assets/labsmart-workplace.jpeg";
import deskCollage from "@/assets/labsmart-desk-collage.png";
import invitationFlow from "@/assets/labsmart-invitation-flow.png";
import fizzyBoard from "@/assets/labsmart-fizzy-board.png";
import fizzyBoards from "@/assets/labsmart-fizzy-boards.png";
import logo from "@/assets/labsmart-logo.png";

const GREEN = "#0A3323";
const MOSS = "#839958";
const BEIGE = "#F7F4D5";

const ease = [0.22, 1, 0.36, 1] as const;

type Panel = {
  heading: string;
  description: string;
  image?: string;
  alt?: string;
  contain?: boolean;
};

const panels: Panel[] = [
  {
    heading: "Understanding the problem",
    description: "Explored product workflows and pathology lab operations.",
    image: workplace,
    alt: "LabSmart product on my laptop during workflow study",
  },
  {
    heading: "Customer feedback",
    description: "Learned about day-to-day challenges and workflow needs of lab owners.",
    image: deskCollage,
    alt: "Notes and desk work while gathering feedback",
  },
  {
    heading: "Ideation & prioritization",
    description: "Discussed solution ideas and priorities with the team.",
    image: deskCollage,
    alt: "Paper sketches from ideation sessions",
  },
  {
    heading: "Paper prototypes & Figma",
    description: "Sketched user flows and translated selected ideas into designs.",
    image: invitationFlow,
    alt: "User invitation flow wireframe",
    contain: true,
  },
  {
    heading: "User stories in Fizzy",
    description: "Organized tasks and clarified requirements for developers.",
    image: fizzyBoard,
    alt: "Fizzy board with Mobile UI Optimization stories",
  },
  {
    heading: "Key modules & contributions",
    description: "User Invitation, Lab Profile, Mobile UI, Daily Business and Expense Management.",
    image: logo,
    alt: "LabSmart logo",
    contain: true,
  },
];

const LabSmartExperience = () => {
  return (
    <section id="labsmart-journey" className="relative overflow-hidden py-24 md:py-32" style={{ background: "#f2efcb" }}>
      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-10" style={{ background: GREEN }} />
            <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.32em", color: GREEN }}>
              LabSmart Experience
            </p>
          </div>
          <h2
            className="max-w-3xl text-4xl leading-[1.02] md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, letterSpacing: "-0.015em", color: GREEN }}
          >
            From understanding workflows to{" "}
            <span style={{ fontStyle: "italic", color: MOSS }}>developer handoff</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 md:text-base" style={{ color: "#2d5240" }}>
            A closer look at the process, artifacts, and modules I contributed to.
          </p>
        </motion.div>

        {/* Six panels */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {panels.map((panel, i) => (
            <motion.article
              key={panel.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="flex flex-col rounded-3xl bg-white p-5"
              style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 18px 44px rgba(10,51,35,0.08)" }}
            >
              <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: MOSS }}>
                {String(i + 1).padStart(2, "0")} / 06
              </p>
              <h3
                className="mt-3 text-xl leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, color: GREEN }}
              >
                {panel.heading}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-6" style={{ color: "#2d5240" }}>
                {panel.description}
              </p>
              {panel.image && (
                <div
                  className="mt-4 overflow-hidden rounded-2xl"
                  style={{ border: `1px solid ${MOSS}44`, background: panel.contain ? BEIGE : "transparent" }}
                >
                  <img
                    src={panel.image}
                    alt={panel.alt}
                    className={`h-28 w-full ${panel.contain ? "object-contain p-3" : "object-cover object-top"}`}
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Fizzy boards strip — supporting artifact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-white p-6 md:flex-row md:items-center md:p-8"
          style={{ border: `1px solid ${MOSS}55`, boxShadow: "0 18px 44px rgba(10,51,35,0.08)" }}
        >
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.24em", color: MOSS }}>
              Boards I worked in
            </p>
            <p className="mt-2 text-sm leading-7" style={{ color: "#2d5240" }}>
              Mobile UI Optimization, Planned Stories, Lab Account Profile, Dashboard for LSAdmin, Private Expense —
              where user stories moved from idea to done.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-2xl md:w-72" style={{ border: `1px solid ${MOSS}44` }}>
            <img src={fizzyBoards} alt="Fizzy boards list" className="h-40 w-full object-cover object-left-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabSmartExperience;
