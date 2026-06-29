import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section id="about" className="pt-6 pb-20 md:pt-8 md:pb-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scaleX: 0.4 }, visible: { opacity: 1, scaleX: 1 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="editorial-rule mb-6"
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="eyebrow mb-3"
          >
            About
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
            className="max-w-2xl text-4xl leading-tight text-foreground md:text-6xl"
          >
            From Conversations to Products
          </motion.h2>

          <div className="mt-8 max-w-[48rem] space-y-6 text-left text-lg leading-9 text-muted-foreground md:text-[1.3rem] md:leading-10">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              className="max-w-[42rem] text-foreground text-[1.5rem] leading-[1.35] md:text-[2rem]"
            >
              My product education started in client calls and stakeholder rooms.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            >
              Long before roadmaps or sprint planning. Just real people, real problems, and the gap
              between what was promised and what was delivered.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
