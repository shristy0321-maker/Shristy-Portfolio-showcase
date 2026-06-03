import { motion } from "framer-motion";
import { Brain, Rocket, BarChart3, Sparkles, MessageSquareText, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Product Thinking",
    description:
      "I break down complex problems, identify user needs, and translate insights into actionable product opportunities.",
  },
  {
    icon: Rocket,
    title: "Execution Mindset",
    description:
      "From research and documentation to prototyping and delivery, I focus on turning ideas into outcomes.",
  },
  {
    icon: BarChart3,
    title: "Data-Informed Decisions",
    description:
      "I combine qualitative insights with data to prioritize effectively and measure impact.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Productivity",
    description:
      "I leverage AI tools to accelerate research, documentation, analysis, and product workflows.",
  },
  {
    icon: MessageSquareText,
    title: "Structured Communication",
    description:
      "I create clear presentations, reports, and product narratives that align stakeholders and drive decisions.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "I actively build, experiment, and learn through real-world projects, case studies, and hands-on product challenges.",
  },
];

const WhatIBringSection = () => {
  return (
    <section id="bring" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-3">Strengths</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground">
            A blend of product thinking, execution, and continuous learning that helps transform
            ideas into impactful products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-elevated p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
