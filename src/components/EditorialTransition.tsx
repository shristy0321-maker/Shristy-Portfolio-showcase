import { motion } from "framer-motion";
import { GraduationCap, Package, TrendingUp } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const EditorialTransition = () => {
  return (
    <section
      aria-label="Tagline"
      className="relative w-full"
      style={{ backgroundColor: "#FAF7F3" }}
    >
      {/* Breathing room below hero */}
      <div style={{ height: "clamp(24px, 3vw, 40px)" }} />

      {/* Soft organic wave divider */}
      <div className="w-full overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          width="100%"
          height="60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C240,10 480,70 720,40 C960,10 1200,70 1440,40"
            stroke="#B89A84"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Generous whitespace */}
      <div style={{ height: "clamp(40px, 5vw, 64px)" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
            color: "#1F1F1F",
            fontSize: "clamp(1.75rem, 4.6vw, 3.25rem)",
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
          }}
        >
          Building{" "}
          <span style={{ color: "#8A6A4F", fontStyle: "italic" }}>products</span>{" "}
          that solve{" "}
          <span style={{ color: "#8A6A4F", fontStyle: "italic" }}>
            real user problems
          </span>
          .
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
          style={{ color: "#3a2e25" }}
        >
          <Badge icon={<GraduationCap size={18} strokeWidth={1.5} />} label="MBA @ IPL" />
          <Divider />
          <Badge icon={<Package size={18} strokeWidth={1.5} />} label="Product Management" />
          <Divider />
          <Badge icon={<TrendingUp size={18} strokeWidth={1.5} />} label="Business Strategy" />
        </motion.div>
      </motion.div>

      <div style={{ height: "clamp(64px, 9vw, 100px)" }} />
    </section>
  );
};

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div
    className="flex items-center gap-2.5"
    style={{
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 500,
      fontSize: "0.95rem",
      letterSpacing: "0.01em",
      color: "#3a2e25",
    }}
  >
    <span style={{ color: "#8A6A4F" }}>{icon}</span>
    <span>{label}</span>
  </div>
);

const Divider = () => (
  <span
    aria-hidden
    className="hidden md:inline-block"
    style={{ width: 1, height: 18, backgroundColor: "#B89A84", opacity: 0.6 }}
  />
);

export default EditorialTransition;
