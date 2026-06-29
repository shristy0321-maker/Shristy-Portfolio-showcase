import { motion } from "framer-motion";

const EditorialTransition = () => {
  return (
    <section
      aria-label="Editorial pull quote"
      className="flex items-center justify-center"
      style={{ minHeight: "45vh", padding: "8vh 1.5rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <div
          aria-hidden
          style={{ width: 96, height: 1, backgroundColor: "#C8A95B", opacity: 0.55 }}
        />

        <p
          style={{
            marginTop: "2.75rem",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            color: "#1F1F1F",
            fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.005em",
          }}
        >
          I started with people.
        </p>

        <p
          style={{
            marginTop: "1.25rem",
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            color: "#7a6a55",
            fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
            lineHeight: 1.6,
            letterSpacing: "0.005em",
          }}
        >
          Then I learned how to build for them.
        </p>

        <div
          aria-hidden
          style={{
            marginTop: "2.75rem",
            width: 96,
            height: 1,
            backgroundColor: "#C8A95B",
            opacity: 0.55,
          }}
        />
      </motion.div>
    </section>
  );
};

export default EditorialTransition;
