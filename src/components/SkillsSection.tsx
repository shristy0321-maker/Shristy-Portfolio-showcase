import { motion } from "framer-motion";
import { Compass, Settings, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Product Skills",
    icon: Compass,
    skills: [
      "Product Discovery",
      "PRD & User Stories",
      "BRD",
      "Acceptance Criteria",
      "User Research",
      "Market Analysis",
      "Go-To-Market Strategy",
      "RICE / MoSCoW",
    ],
  },
  {
    title: "AI in Product Workflows",
    icon: Sparkles,
    skills: [
      "ChatGPT for PRDs",
      "Interview Synthesis",
      "Competitive Teardowns",
      "Edge Case Generation",
      "Prompt Engineering",
    ],
  },
  {
    title: "Methodologies & Soft Skills",
    icon: Settings,
    skills: ["Agile & Scrum", "Stakeholder Communication", "Problem Solving", "Negotiation"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Jira", "Power BI", "Lovable", "Figma (Basic)", "Excel", "Data Analysis"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-3">Skills Snapshot</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Core Competencies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated p-6"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <group.icon size={18} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4 text-sm">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
