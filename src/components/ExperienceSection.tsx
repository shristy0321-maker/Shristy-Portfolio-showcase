import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

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
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Professional Journey"
        />

        <div>
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {exp.period}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{exp.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3
                  className="text-[1.75rem] leading-tight text-foreground md:text-[2rem]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                >
                  {exp.role}
                  <span className="serif-accent text-muted-foreground"> at {exp.company}</span>
                </h3>
                <ul className="mt-6 space-y-3 text-base leading-8 text-muted-foreground">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[14px] h-px w-4 shrink-0 bg-border" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
