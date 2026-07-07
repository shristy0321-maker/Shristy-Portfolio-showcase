import { motion } from "framer-motion";
import { ArrowRight, Trophy, Target, Users, Lightbulb, Layers, ExternalLink } from "lucide-react";

import meetcraftCover from "@/assets/meetcraft-editorial.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const project = {
  title: "MeetCraft",
  subtitle: "Structured Networking for Professionals",
  year: "2025",
  badge: "Skillathon Winner",
  badgeOrg: "Institute of Product Leadership",
  description:
    "An MVP that transforms unstructured event mingling into intent-matched conversations and closed-loop follow-ups. Professionals attend dozens of networking events but walk away with stacks of business cards and zero meaningful relationships.",
  image: meetcraftCover,
  href: "/case-study/meetcraft",
  presentationUrl:
    "https://docs.google.com/document/d/1jHynLmZARJLMfyIIx8uz67pbDqB9P-hm/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true",
  tags: ["Product Discovery", "User Research", "MVP", "PRD"],
  highlights: [
    {
      icon: Target,
      title: "Problem Framed",
      text: "78% of professionals called networking events 'inefficient' — follow-ups die within 72 hours.",
    },
    {
      icon: Users,
      title: "User Validated",
      text: "Interviewed 20+ professionals to map pain points across introverts, founders, and career switchers.",
    },
    {
      icon: Lightbulb,
      title: "Solution Designed",
      text: "Intent-matching engine + structured conversation prompts + auto-drafted follow-ups.",
    },
    {
      icon: Layers,
      title: "MVP Scoped",
      text: "4-week execution plan with MoSCoW prioritization and RICE scoring.",
    },
  ],
};

const FlagshipProjectSection = () => {
  return (
    <section id="project" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Flagship Project</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Featured Work</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A complete product journey — from discovery to delivery.
          </p>
        </motion.div>

        {/* Hero Card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: EASE }}
          className="group relative overflow-hidden rounded-3xl bg-white"
          style={{
            boxShadow: "0px 32px 80px rgba(0,0,0,0.08)",
          }}
        >
          <div className="grid min-h-[600px] md:grid-cols-2">
            {/* Left — Content */}
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
              <div>
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 px-4 py-2">
                  <Trophy size={14} className="text-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-5xl font-bold leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-4 text-xl text-muted-foreground">{project.subtitle}</p>

                {/* Year */}
                <p className="mt-2 text-sm text-muted-foreground/70">{project.year} · {project.badgeOrg}</p>

                {/* Description */}
                <p className="mt-8 text-base leading-[1.8] text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary p-8 md:p-12">
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: "min(400px, 85%)",
                  height: "min(400px, 85%)",
                  border: "1.5px dashed rgba(0,0,0,0.15)",
                  padding: "18px",
                }}
              >
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={project.image}
                    alt={`${project.title} project cover`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {project.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <h.icon size={18} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground">{h.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href={project.href}
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:bg-foreground/90"
          >
            Read Full Case Study
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-all group-hover:border-background/40">
              <ArrowRight size={16} />
            </span>
          </a>
          {project.presentationUrl && (
            <a
              href={project.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-base font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <ExternalLink size={16} />
              View Presentation
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipProjectSection;
