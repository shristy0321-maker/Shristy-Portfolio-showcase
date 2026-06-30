import { motion } from "framer-motion";
import { Trophy, Presentation, Lightbulb, LucideIcon } from "lucide-react";

type Recognition = {
  icon: LucideIcon;
  title: string;
  org: string;
  description: string;
  meta: string;
};

const items: Recognition[] = [
  {
    icon: Trophy,
    title: "Skillathon Winner",
    org: "Institute of Product Leadership",
    description:
      "Recognized for developing and presenting an end-to-end product solution during IPL's Skillathon.",
    meta: "2026",
  },
  {
    icon: Presentation,
    title: "Session Lead",
    org: "ProdXPulse 2026",
    description:
      "Led a Product Management workshop during IPL's flagship Product Festival, facilitating sessions and helping deliver a successful learning experience.",
    meta: "Leadership • Community",
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    org: "Top 10 Idea Selected",
    description:
      "Selected among the Top 10 ideas during the Innovation Lab for solving a real-world problem through customer research, validation, and product thinking.",
    meta: "Innovation • Product Discovery",
  },
];

const RecognitionSection = () => {
  return (
    <section
      id="recognition"
      className="relative py-16 md:py-20"
      style={{ backgroundColor: "#2B211B" }}
    >
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto text-center"
          style={{ maxWidth: "720px" }}
        >
          <div
            aria-hidden
            className="mx-auto mb-6"
            style={{ width: 80, height: 1, backgroundColor: "#C9A227", opacity: 0.6 }}
          />
          <p
            className="mb-5 text-xs uppercase"
            style={{ color: "#C9A227", letterSpacing: "0.28em", fontWeight: 500 }}
          >
            Recognition
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#FAF8F5",
              fontWeight: 500,
              lineHeight: 1.05,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Recognition Along the Way
          </h2>

          <p
            className="mx-auto mt-6 text-base leading-8 md:text-lg"
            style={{ maxWidth: "600px", color: "#D8CDC1" }}
          >
            A few milestones that shaped my journey into Product Management.
          </p>
        </motion.div>

        {/* Desktop / tablet grid */}
        <div className="hidden md:grid mx-auto mt-16 max-w-6xl grid-cols-2 gap-6 lg:grid-cols-3 md:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.15 }}
                className="group flex h-full flex-col transition-all duration-300 ease-out hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F2ECE4",
                  borderRadius: "24px",
                  padding: "32px",
                  border: "1px solid #E6DED2",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9B896")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E6DED2")}
              >
                <Icon size={24} strokeWidth={1.6} style={{ color: "#C9A227" }} />
                <h3 className="mt-6 text-2xl leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#2B211B", fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "#6B5E52" }}>{item.org}</p>
                <p className="mt-5 text-base leading-7" style={{ color: "#4A3F36" }}>{item.description}</p>
                <p className="mt-auto pt-6 text-xs uppercase" style={{ color: "#8B7B6C", letterSpacing: "0.18em" }}>{item.meta}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile horizontal swipe carousel */}
        <div
          className="flex md:hidden mt-10 -mx-6"
          style={{
            gap: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 8,
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          <style>{`#recognition .md\\:hidden::-webkit-scrollbar { display: none; }`}</style>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col shrink-0"
                style={{
                  scrollSnapAlign: "start",
                  width: "82%",
                  backgroundColor: "#F2ECE4",
                  borderRadius: 20,
                  padding: 24,
                  border: "1px solid #E6DED2",
                }}
              >
                <Icon size={22} strokeWidth={1.6} style={{ color: "#C9A227" }} />
                <h3 className="mt-5 text-xl leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#2B211B", fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "#6B5E52" }}>{item.org}</p>
                <p className="mt-4 text-[15px] leading-7" style={{ color: "#4A3F36" }}>{item.description}</p>
                <p className="mt-5 text-[11px] uppercase" style={{ color: "#8B7B6C", letterSpacing: "0.18em" }}>{item.meta}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
