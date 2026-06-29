import { motion } from "framer-motion";

const education = [
  {
    degree: "TMBA – Product / Technology Management",
    school: "Institute of Product Leadership",
    period: "2025 – 2027",
    detail: "Pursuing",
  },
  {
    degree: "Bachelor of Business Administration",
    school: "BBA",
    period: "2021 – 2024",
    detail: "8.9 CGPA",
  },
];

const EducationSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Education</p>
          <h2 className="text-4xl leading-tight md:text-5xl">Academic Foundations</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-t border-border pt-5"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{edu.period}</p>
              <h3 className="mt-3 text-2xl leading-tight text-foreground">{edu.degree}</h3>
              <p className="mt-2 text-base text-muted-foreground">{edu.school}</p>
              <p className="mt-4 text-sm text-accent">{edu.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
