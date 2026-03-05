import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, label: "Product Discovery", desc: "Identifying real user pain points through structured research" },
  { icon: Users, label: "Customer Focus", desc: "Deep empathy for users drives every product decision" },
  { icon: Lightbulb, label: "Solution Design", desc: "Turning insights into actionable, structured product solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            From Customer Problems to Product Solutions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            I'm an MBA candidate in Product / Technology Management at the Institute of Product Leadership,
            with experience in entrepreneurship, operations, and customer engagement. I focus on identifying
            user pain points, conducting research, and turning insights into structured product solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="card-elevated p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
