import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Founder",
    company: "VLLP Foods",
    period: "2023 – Present",
    points: [
      "Built and managed a B2B sourcing and distribution model",
      "Handled procurement, vendor negotiation, quality control, and customer fulfillment",
      "Improved operational efficiency by implementing structured processes",
    ],
  },
  {
    role: "Relationship Manager",
    company: "",
    period: "2024",
    points: [
      "Managed customer accounts and handled escalations",
      "Acted as the primary point of contact for resolving customer issues",
      "Collected feedback and worked with internal teams to improve service workflows",
      "Helped strengthen client relationships and retention",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="card-elevated p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Briefcase size={18} className="text-primary" />
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {exp.role}{exp.company && ` – ${exp.company}`}
                    </h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
