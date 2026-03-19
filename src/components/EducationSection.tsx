import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "TMBA – Product / Technology Management",
    school: "Institute of Product Leadership",
    period: "2025 – 2027",
    detail: "Pursuing",
  },
  {
    degree: "BBA",
    school: "Banasthali Vidyapeeth",
    period: "2021 – 2024",
    detail: "8.9 CGPA",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "CBSE",
    period: "2021",
    detail: "80%",
  },
  {
    degree: "Secondary (10th)",
    school: "CBSE",
    period: "2019",
    detail: "69%",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="card-elevated p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-medium text-primary">{edu.period}</span>
                  {edu.detail && (
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{edu.detail}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
