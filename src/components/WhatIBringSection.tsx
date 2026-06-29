import { motion } from "framer-motion";

const items = [
  {
    title: "Discovery grounded in real conversations",
    description: "I start with people, context, and constraints before moving toward solutions.",
  },
  {
    title: "Structured product thinking",
    description: "I turn ambiguity into clear narratives, decision frameworks, and prioritized next steps.",
  },
  {
    title: "AI-native execution",
    description: "I use modern tools to move faster across research synthesis, documentation, and prototyping.",
  },
];

const WhatIBringSection = () => {
  return (
    <section id="bring" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <div className="editorial-rule mb-8" />
          <p className="eyebrow mb-4">Approach</p>
          <h2 className="text-4xl leading-tight md:text-5xl">What I Bring to the Table</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-t border-border pt-5"
            >
              <h3 className="text-2xl leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
