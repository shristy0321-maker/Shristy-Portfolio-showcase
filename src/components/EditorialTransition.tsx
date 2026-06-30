import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const EditorialTransition = () => {
  return (
    <section
      aria-label="Editorial pull quote"
      className="relative w-full"
      style={{ backgroundColor: "#FAF7F3" }}
    >
      {/* 16–24px gap between portrait and wave */}
      <div style={{ height: 20 }} />

      {/* Elegant organic wave */}
      <div className="w-full overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1440 60"
          width="100%"
          height="44"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            d="M0,30 C240,4 480,56 720,30 C960,4 1200,56 1440,30"
            stroke="#B89A84"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 32px to headline */}
      <div style={{ height: 32 }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, visible: {} }}
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          style={{
            margin: 0,
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
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
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
      </motion.div>

      <div style={{ height: 48 }} />
    </section>
  );
};

export default EditorialTransition;
