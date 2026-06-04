import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
            From Customer Insight to Product Impact
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I started my career working closely with customers, where I learned that the best solutions come from understanding real user problems. As a Relationship Manager, I developed a strong foundation in customer empathy, problem-solving, and business thinking.
            </p>
            <p>
              Today, I am transitioning into Product Management at the Institute of Product Leadership and building real-world case studies focused on customer needs, business impact, and product strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
