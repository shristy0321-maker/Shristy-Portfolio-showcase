import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";

type OtherProject = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  badge: string | null;
};

const projects: OtherProject[] = [
  {
    slug: "fuzo",
    title: "FUZO",
    description:
      "A self-initiated teardown of the premium corporate gifting space, covering employee onboarding flow, HR admin dashboard, and role-based access control (RBAC), with an interactive prototype and LinkedIn carousel.",
    tags: ["Corporate Gifting", "RBAC", "Prototype", "Teardown"],
    cover: meetcraftCover,
    badge: "Teardown",
  },
  {
    slug: "dharmikvibes",
    title: "DharmikVibes",
    description:
      "AI-powered spiritual pilgrimage companion. Full product teardown covering TAM/SAM/SOM, Porter's Five Forces, SWOT, GTM strategy, and MoSCoW prioritization, with two working MVP prototypes.",
    tags: ["AI", "GTM Strategy", "MVP", "MoSCoW"],
    cover: globalMakhanaCover,
    badge: "AI",
  },
  {
    slug: "notion",
    title: "Notion",
    description:
      "A teardown of Notion's product strategy, positioning, and growth mechanics.",
    tags: ["Product Strategy", "Positioning", "Growth"],
    cover: mailnitiCover,
    badge: null,
  },
  {
    slug: "taj-hotels",
    title: "Taj Hotels",
    description:
      "Digital transformation capstone. A consulting-style roadmap covering CDP strategy, API-first architecture, and a three-horizon transformation plan.",
    tags: ["CDP", "API-First", "Roadmap", "Capstone"],
    cover: kalavanshCover,
    badge: "Capstone",
  },
];

const OtherProjectsSection = () => {
  return (
    <section id="other-projects" className="py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Other Projects</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Other Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Additional teardowns, capstones, and self-initiated explorations across product strategy and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="case-card card-elevated flex h-full flex-col overflow-hidden"
            >
              <a href="#" className="block overflow-hidden">
                <img
                  src={cs.cover}
                  alt={`${cs.title} project cover`}
                  loading="lazy"
                  width={1536}
                  height={896}
                  className="case-card-img h-56 w-full object-cover transition-transform duration-[600ms] ease-out"
                />
              </a>

              <div className="flex flex-1 flex-col p-7">
                <div className="mb-5">
                  <a href="#">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-3xl leading-tight text-foreground transition-colors hover:text-accent">
                        {cs.title}
                      </h3>
                      {cs.badge && (
                        <span
                          className="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em]"
                          style={{ borderColor: "#C9A227", color: "#8a6f1c", backgroundColor: "rgba(201,162,39,0.08)" }}
                        >
                          {cs.badge}
                        </span>
                      )}
                    </div>
                  </a>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">{cs.description}</p>
                </div>

                <div className="mb-7 flex flex-wrap gap-2">
                  {cs.tags?.map((t) => (
                    <span key={t} className="editorial-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-border pt-5">
                  <a href="#" className="editorial-link">
                    Read Case Study <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        #other-projects .case-card { transition: border-color 200ms ease-out, box-shadow 200ms ease-out; will-change: transform; }
        #other-projects .case-card:hover .case-card-img { transform: scale(1.02); }
        #other-projects .case-card:hover { border-color: hsl(var(--foreground) / 0.18); }
      `}</style>
    </section>
  );
};

export default OtherProjectsSection;
