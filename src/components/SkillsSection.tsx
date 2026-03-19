import { motion } from "framer-motion";
import { Compass, Settings, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Product Skills",
    icon: Compass,
    skills: ["Product Discovery", "PRD & User Stories", "BRD", "Acceptance Criteria", "User Research", "Market Analysis", "Go-To-Market Strategy"],
  },
  {
    title: "Methodologies & Soft Skills",
    icon: Settings,
    skills: ["Agile & Scrum", "Stakeholder Communication", "Problem Solving", "Negotiation"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Jira", "Confluence", "Figma (Basic)", "Excel", "Data Analysis"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Core Competencies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="card-elevated p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <group.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-full"
                  >
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
