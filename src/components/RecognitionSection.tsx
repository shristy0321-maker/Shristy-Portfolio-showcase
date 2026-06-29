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
      "Recognized for developing and presenting an end-to-end product solution during IPL's Skillathon, demonstrating product thinking, customer understanding, and execution.",
    meta: "2026",
  },
  {
    icon: Presentation,
    title: "Session Lead",
    org: "ProdXPulse 2026",
    description:
      "Led a Product Management workshop during IPL's flagship Product Festival, facilitating sessions and helping create an engaging learning experience for participants.",
    meta: "Leadership • Community • Product",
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    org: "Top 10 Idea Selected",
    description:
      "Selected among the Top 10 ideas in the Innovation Lab for identifying a real-world problem, validating customer needs, and presenting a product-driven solution.",
    meta: "Innovation • Product Discovery",
  },
];

const RecognitionSection = () => {
  return (
    <section id="recognition" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Recognition</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Recognition Along the Way</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A few milestones that shaped my journey into Product Management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex h-full flex-col rounded-3xl border border-border bg-[#F2ECE4] p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#c9b896]"
              >
                <Icon size={22} className="text-accent" strokeWidth={1.6} />
                <h3 className="mt-6 text-2xl leading-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-auto pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.meta}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
