import { motion } from "framer-motion";
import { Trophy, Presentation, Lightbulb, LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#8c323d" }}
    >
      <div className="section-container relative">
        <SectionHeader
          index="02"
          eyebrow="Recognition"
          title="Recognition Along the Way"
          description="A few milestones that shaped my journey into Product Management."
          tone="dark"
        />

        <div>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 py-10 md:grid-cols-12 md:gap-10"
                style={{ borderTop: "1px solid rgba(200,148,148,0.30)" }}
              >
                <div className="md:col-span-3 flex items-start gap-4">
                  <Icon size={22} strokeWidth={1.6} style={{ color: "#c89494" }} />
                  <p
                    className="text-xs uppercase"
                    style={{ color: "#c89494", letterSpacing: "0.22em" }}
                  >
                    {item.meta}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3
                    className="text-[1.75rem] leading-tight md:text-[2rem]"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: "#fbf1f1",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "#e8caca" }}>{item.org}</p>
                  <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: "#f5dcdc" }}>
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(200,148,148,0.30)" }} />
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
