import { motion } from "framer-motion";
import { Search, ListChecks, Users, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "How I approach problems",
    points: [
      "Start with the user, not the feature",
      "Frame problems as JTBD before solutioning",
      "Validate assumptions with the cheapest test possible",
    ],
  },
  {
    icon: ListChecks,
    title: "How I prioritize features",
    points: [
      "RICE for quantitative trade-offs",
      "MoSCoW for MVP scope cuts",
      "Always name what I'm NOT building, and why",
    ],
  },
  {
    icon: Users,
    title: "How I work cross-functionally",
    points: [
      "PRDs with clear acceptance criteria",
      "Async-first updates · sync only when blocked",
      "Bring eng + design in at the discovery stage",
    ],
  },
  {
    icon: Sparkles,
    title: "How I use AI in the workflow",
    points: [
      "ChatGPT for PRD drafts & competitive teardowns",
      "Synthesize user interview transcripts in minutes",
      "Generate edge cases I'd otherwise miss",
    ],
  },
];

const ProductThinkingSection = () => {
  return (
    <section id="thinking" className="py-24 bg-secondary/40 border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-3">Framework</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            My Product Thinking Framework
          </h2>
          <p className="text-muted-foreground">
            The repeatable system I use to take products from messy problem to shipped MVP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-elevated p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <p.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
              </div>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductThinkingSection;
