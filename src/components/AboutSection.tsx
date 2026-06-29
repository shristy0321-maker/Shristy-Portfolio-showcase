import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="pt-10 pb-20 md:pt-14 md:pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">About</p>
          <h2 className="max-w-2xl text-4xl leading-tight text-foreground md:text-6xl">
            From Conversations to Products
          </h2>

          <div className="mt-8 max-w-[48rem] space-y-6 text-left text-lg leading-9 text-muted-foreground md:text-[1.3rem] md:leading-10">
            <p className="max-w-[42rem] text-foreground text-[1.5rem] leading-[1.35] md:text-[2rem]">
              My product education started in client calls and stakeholder rooms.
            </p>
            <p>
              Long before roadmaps or sprint planning. Just real people, real problems, and the gap
              between what was promised and what was delivered.
            </p>
            <p>
              Working across client engagement and relationship management taught me how trust is built,
              where expectations break, and why clarity matters. That experience now shapes how I think
              about products: listen deeply, define the right problem, and design outcomes that feel useful
              in the real world.
            </p>
            <p className="text-foreground text-[1.35rem] leading-[1.45] md:text-[1.8rem]">
              Now I'm here to make sure that gap doesn't exist.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
