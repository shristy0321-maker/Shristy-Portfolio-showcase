import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section id="about" className="pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
          className="mx-auto"
          style={{ maxWidth: "680px" }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scaleX: 0.4 }, visible: { opacity: 1, scaleX: 1 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="editorial-rule mb-10"
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="eyebrow mb-10"
          >
            About
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
            className="font-serif text-[2.5rem] leading-[1.05] tracking-[-0.01em] text-foreground md:text-[3.75rem]"
          >
            From Conversations to Products
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
            className="mt-16 font-serif text-foreground text-[1.6rem] leading-[1.4] tracking-[-0.005em] md:text-[2rem] md:leading-[1.35]"
          >
            My product education started in client calls and stakeholder rooms.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
            className="mt-12 text-muted-foreground text-[1.125rem] leading-[1.85] md:text-[1.2rem] md:leading-[1.9]"
          >
            Long before roadmaps or sprint planning. Just real people, real problems, and the gap
            between what was promised and what was delivered.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
