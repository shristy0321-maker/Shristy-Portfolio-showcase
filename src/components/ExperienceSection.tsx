import { motion } from "framer-motion";

const experiences = [
  {
    role: "Relationship Manager",
    company: "Trade India",
    location: "Jaipur",
    period: "Nov 2024 – May 2025",
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
    points: [
      "Handled onboarding, support, and retention for coworking members.",
      "Mapped recurring service pain points and coordinated improvements.",
      "Built a day-to-day understanding of how user expectations shape loyalty.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <div className="editorial-rule mb-8" />
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="text-4xl leading-tight md:text-5xl">Professional Journey</h2>
        </motion.div>

        <div className="space-y-12 border-t border-border pt-10">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid gap-5 border-b border-border pb-10 md:grid-cols-[15rem_1fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{exp.period}</p>
                <p className="mt-3 text-sm text-muted-foreground">{exp.location}</p>
              </div>
              <div>
                <h3 className="text-2xl leading-tight text-foreground">
                  {exp.role}
                  <span className="serif-accent text-muted-foreground"> at {exp.company}</span>
                </h3>
                <ul className="mt-5 space-y-3 text-base leading-8 text-muted-foreground">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
