import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

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
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader index="05" eyebrow="Education" title="Academic Foundations" />

        <div>
          {education.map((edu, i) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {edu.period}
                </p>
                <p className="mt-3 text-sm text-accent">{edu.detail}</p>
              </div>
              <div className="md:col-span-9">
                <h3
                  className="text-[1.75rem] leading-tight text-foreground md:text-[2rem]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                >
                  {edu.degree}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">{edu.school}</p>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
