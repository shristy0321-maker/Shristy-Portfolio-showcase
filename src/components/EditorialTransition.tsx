import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const EditorialTransition = () => {
  return (
    <section
      aria-label="Editorial pull quote"
      className="flex items-center justify-center"
      style={{ padding: "36px 1.5rem 28px" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, visible: {} }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          aria-hidden
          variants={{
            hidden: { opacity: 0, scaleX: 0.4 },
            visible: { opacity: 0.55, scaleX: 1 },
          }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ width: 80, height: 1, backgroundColor: "#C8A95B", transformOrigin: "center" }}
        />

        <motion.p
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{
            marginTop: "1.1rem",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            color: "#1F1F1F",
            fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.005em",
          }}
        >
          I started with people.
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          style={{
            marginTop: "0.75rem",
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            color: "#7a6a55",
            fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
            lineHeight: 1.6,
            letterSpacing: "0.005em",
          }}
        >
          Then I learned how to build for them.
        </motion.p>

        <motion.div
          aria-hidden
          variants={{
            hidden: { opacity: 0, scaleX: 0.4 },
            visible: { opacity: 0.55, scaleX: 1 },
          }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          style={{
            marginTop: "1.1rem",
            width: 80,
            height: 1,
            backgroundColor: "#C8A95B",
            transformOrigin: "center",
          }}
        />
      </motion.div>
    </section>
  );
};

export default EditorialTransition;
