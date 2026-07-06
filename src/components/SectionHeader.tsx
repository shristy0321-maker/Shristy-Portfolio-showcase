import { motion } from "framer-motion";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Prolens-style section header:
 * [ 01 ]  ————————  EYEBROW
 * Big display title
 * Optional description
 * A thin full-width rule sits above the header to separate sections.
 */
const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: Props) => {
  const isDark = tone === "dark";
  const titleColor = isDark ? "#FAF8F5" : "#2a2218";
  const eyebrowColor = isDark ? "#C9A227" : "#8a6f1c";
  const numberColor = isDark ? "#C9A227" : "#8a6f1c";
  const descColor = isDark ? "#D8CDC1" : "hsl(var(--muted-foreground))";
  const ruleColor = isDark ? "rgba(201,162,39,0.35)" : "rgba(42,34,24,0.14)";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className="mb-12 md:mb-16">
      {/* Top full-width rule that acts as a section separator */}
      <div
        aria-hidden
        style={{ height: 1, width: "100%", backgroundColor: ruleColor }}
        className="mb-8 md:mb-10"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: {} }}
        className={`grid gap-6 md:grid-cols-12 md:gap-10 ${alignClass}`}
      >
        {/* Left index + eyebrow */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: EASE }}
          className="md:col-span-3"
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: numberColor,
              fontSize: "1rem",
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            {index}
          </div>
          <div
            className="mt-3"
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: eyebrowColor,
              fontWeight: 500,
            }}
          >
            {eyebrow}
          </div>
        </motion.div>

        {/* Right title + description */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="md:col-span-9"
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: titleColor,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              margin: 0,
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              className="mt-5 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: descColor }}
            >
              {description}
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;
