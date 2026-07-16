import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";


import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";
import { caseStudyLinks } from "@/config/caseStudyLinks";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  caseStudyUrl?: string;
  presentation: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "MeetCraft",
    category: "Product · Networking",
    year: "2025",
    description:
      "Helping professionals build meaningful connections through intent-based networking.",
    tags: ["Product Discovery", "MVP", "User Research"],
    image: meetcraftCover,
    caseStudyUrl: caseStudyLinks["MeetCraft"],
    presentation: "#",
  },
  {
    number: "02",
    title: "MailNiti",
    category: "AI · SaaS",
    year: "2024",
    description:
      "AI-powered multilingual email assistant designed for Indian SMEs.",
    tags: ["AI Product", "SaaS", "Product Strategy"],
    image: mailnitiCover,
    caseStudyUrl: caseStudyLinks["MailNiti"],
    presentation: "#",
  },
  {
    number: "03",
    title: "Global Makhana",
    category: "Entrepreneurship · D2C",
    year: "2024",
    description:
      "Farm-to-pack premium makhana brand built around traceable sourcing and B2B distribution.",
    tags: ["Entrepreneurship", "GTM", "Supply Chain"],
    image: globalMakhanaCover,
    caseStudyUrl: caseStudyLinks["Global Makhana"],
    presentation: "#",
  },
  {
    number: "04",
    title: "KalaVansh",
    category: "Culture · Marketplace",
    year: "2024",
    description:
      "Digital platform preserving and promoting India's traditional arts, crafts, and cultural heritage.",
    tags: ["Culture", "Marketplace", "Product Strategy"],
    image: kalavanshCover,
    caseStudyUrl: caseStudyLinks["KalaVansh"],
    presentation: "#",
  },
];

type CardTheme = {
  bg: string;
  ink: string;
  sub: string;
  muted: string;
  ring: string;
  chipBg: string;
  chipInk: string;
  chipAltBg: string;
  chipAltInk: string;
  btnBorder: string;
  btnHoverBg: string;
  btnHoverInk: string;
};

const themes: CardTheme[] = [
  // 01 — Blush cream on wine ink
  {
    bg: "#F7F4D5",
    ink: "#0A3323",
    sub: "#0a3323",
    muted: "#105666",
    ring: "rgba(10,51,35,0.35)",
    chipBg: "#0a3323",
    chipInk: "#F7F4D5",
    chipAltBg: "#E8E5B8",
    chipAltInk: "#0A3323",
    btnBorder: "rgba(10,51,35,0.25)",
    btnHoverBg: "#0a3323",
    btnHoverInk: "#F7F4D5",
  },
  // 02 — Dusty rose surface
  {
    bg: "#839958",
    ink: "#0A3323",
    sub: "#0A3323",
    muted: "#0A3323",
    ring: "rgba(10,51,35,0.4)",
    chipBg: "#0A3323",
    chipInk: "#F7F4D5",
    chipAltBg: "#F7F4D5",
    chipAltInk: "#0A3323",
    btnBorder: "rgba(10,51,35,0.35)",
    btnHoverBg: "#0A3323",
    btnHoverInk: "#F7F4D5",
  },
  // 03 — Muted mauve surface
  {
    bg: "#105666",
    ink: "#F7F4D5",
    sub: "#E8E5B8",
    muted: "#D3968C",
    ring: "rgba(247,244,213,0.45)",
    chipBg: "#F7F4D5",
    chipInk: "#0A3323",
    chipAltBg: "rgba(247,244,213,0.18)",
    chipAltInk: "#F7F4D5",
    btnBorder: "rgba(247,244,213,0.4)",
    btnHoverBg: "#F7F4D5",
    btnHoverInk: "#0A3323",
  },
  // 04 — Deep wine drama
  {
    bg: "#0a3323",
    ink: "#F7F4D5",
    sub: "#E8E5B8",
    muted: "#D3968C",
    ring: "rgba(247,244,213,0.4)",
    chipBg: "#839958",
    chipInk: "#0A3323",
    chipAltBg: "rgba(247,244,213,0.14)",
    chipAltInk: "#F7F4D5",
    btnBorder: "rgba(247,244,213,0.4)",
    btnHoverBg: "#F7F4D5",
    btnHoverInk: "#0A3323",
  },
];

type StackedCardProps = {
  project: Project;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
};

const StackedCard = ({ project, index, total, scrollProgress }: StackedCardProps) => {
  const start = index / total;
  const end = (index + 1) / total;

  const isLast = index === total - 1;
  const scale = useTransform(scrollProgress, [start, end], [1, isLast ? 1 : 0.98]);
  const opacity = useTransform(scrollProgress, [start, end], [1, isLast ? 1 : 0.92]);

  const top = 80 + index * 18;
  const t = themes[index % themes.length];

  // Per-card decorative signature
  const stamp = ["◆ DISCOVERY", "✦ BUILD", "❋ SHIP", "✺ IMPACT"][index % 4];
  const chapter = ["CHAPTER ONE", "CHAPTER TWO", "CHAPTER THREE", "CHAPTER FOUR"][index % 4];

  return (
    <div className="sticky" style={{ top }}>
      <motion.article
        style={{ scale, opacity, transformOrigin: "center top" }}
        className="mx-auto"
      >
        {/* Outer wrapper hosts overflow-visible flourishes */}
        <div
          className="relative mx-auto"
          style={{ width: "88vw", maxWidth: "1450px" }}
        >
          {/* Floating chapter tag — top-left, hanging off the card edge */}
          <div
            className="pointer-events-none absolute -top-5 left-8 z-30 flex items-center gap-2 px-4 py-1.5"
            style={{
              background: t.chipBg,
              color: t.chipInk,
              borderRadius: "999px",
              boxShadow: "0 8px 24px rgba(10,51,35,0.25)",
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.28em",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: t.chipInk, opacity: 0.7 }}
            />
            {chapter}
          </div>

          {/* Torn / stamped signature — top-right */}
          <div
            className="pointer-events-none absolute -top-4 right-10 z-30 rotate-[6deg] px-4 py-1.5"
            style={{
              background: t.bg,
              color: t.ink,
              border: `1.5px dashed ${t.ring}`,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "13px",
              letterSpacing: "0.06em",
            }}
          >
            {stamp}
          </div>

          {/* Ticket-stub perforation notches — left & right mid */}
          <span
            aria-hidden
            className="pointer-events-none absolute z-20 h-10 w-10 rounded-full"
            style={{
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "hsl(var(--background))",
              boxShadow: "inset 2px 0 6px rgba(10,51,35,0.10)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute z-20 h-10 w-10 rounded-full"
            style={{
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "hsl(var(--background))",
              boxShadow: "inset -2px 0 6px rgba(10,51,35,0.10)",
            }}
          />

          <div
            className="group relative mx-auto block overflow-hidden"
            style={{
              height: "720px",
              borderRadius: "36px",
              background: t.bg,
              color: t.ink,
              boxShadow: "0px 40px 120px rgba(10,51,35,0.22), inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/* Inner editorial hairline frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-4 rounded-[28px]"
              style={{ border: `1px solid ${t.ring}`, opacity: 0.45 }}
            />

            {/* Corner tick marks (editorial crop marks) */}
            {[
              { top: 14, left: 14, b: `2px solid ${t.ink}`, borders: "tl" },
              { top: 14, right: 14, borders: "tr" },
              { bottom: 14, left: 14, borders: "bl" },
              { bottom: 14, right: 14, borders: "br" },
            ].map((c, ci) => (
              <span
                key={ci}
                aria-hidden
                className="pointer-events-none absolute z-10 h-4 w-4"
                style={{
                  top: (c as any).top,
                  left: (c as any).left,
                  right: (c as any).right,
                  bottom: (c as any).bottom,
                  borderTop: c.borders.includes("t") ? `2px solid ${t.ink}` : undefined,
                  borderBottom: c.borders.includes("b") ? `2px solid ${t.ink}` : undefined,
                  borderLeft: c.borders.includes("l") ? `2px solid ${t.ink}` : undefined,
                  borderRight: c.borders.includes("r") ? `2px solid ${t.ink}` : undefined,
                  opacity: 0.55,
                }}
              />
            ))}

            {/* Decorative giant serif numeral */}
            <span
              aria-hidden
              className="pointer-events-none absolute select-none"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(320px, 42vw, 620px)",
                fontWeight: 500,
                lineHeight: 0.8,
                color: t.ink,
                opacity: 0.05,
                top: "-40px",
                right: "-30px",
                letterSpacing: "-0.05em",
              }}
            >
              {project.number}
            </span>

            {/* Vertical archive label on left spine */}
            <div
              aria-hidden
              className="pointer-events-none absolute z-10 hidden md:flex items-center gap-3"
              style={{
                left: "26px",
                bottom: "36px",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: t.ink,
                opacity: 0.55,
              }}
            >
              ARCHIVE · {project.year} · N°{project.number}
            </div>

            {/* Bottom baseline rule with dots */}
            <div
              aria-hidden
              className="pointer-events-none absolute z-10 flex items-center gap-2"
              style={{ right: "36px", bottom: "22px", color: t.ink, opacity: 0.5 }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.3em", fontWeight: 600 }}>
                CASE STUDY
              </span>
              <span className="inline-block h-1 w-1 rounded-full" style={{ background: t.ink }} />
              <span className="inline-block h-1 w-1 rounded-full" style={{ background: t.ink, opacity: 0.6 }} />
              <span className="inline-block h-1 w-1 rounded-full" style={{ background: t.ink, opacity: 0.3 }} />
            </div>

            <div className="relative grid h-full grid-cols-12 gap-8 px-16 py-20">
            {/* LEFT — 30% */}
            <div className="col-span-12 flex flex-col justify-between md:col-span-4">
              <div>
                <p
                  className="text-[14px] font-medium uppercase tracking-[0.28em]"
                  style={{ color: t.sub }}
                >
                  Project {project.number}
                </p>
                <h3
                  className="mt-10 text-[64px] font-bold leading-[1.02] tracking-[-0.02em]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", color: t.ink }}
                >
                  {project.title}
                </h3>
                <p className="mt-8 text-[28px] font-normal leading-tight" style={{ color: t.ink, opacity: 0.85 }}>
                  {project.category}
                </p>
                <p className="mt-3 text-[18px] font-normal" style={{ color: t.muted }}>
                  {project.year}
                </p>
                <p className="mt-10 max-w-md text-[20px] leading-[1.55]" style={{ color: t.ink, opacity: 0.78 }}>
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                {project.caseStudyUrl ? (
                  project.caseStudyUrl.startsWith("/") ? (
                    <Link
                      to={project.caseStudyUrl}
                      className="group/btn inline-flex items-center gap-3 text-[16px] font-medium transition-colors"
                      style={{ color: t.ink }}
                    >
                      Read Case Study
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-all"
                        style={{ border: `1px solid ${t.btnBorder}`, color: t.ink }}
                      >
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-3 text-[16px] font-medium transition-colors"
                      style={{ color: t.ink }}
                    >
                      Read Case Study
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ border: `1px solid ${t.btnBorder}`, color: t.ink }}
                      >
                        <ArrowRight size={16} />
                      </span>
                    </a>
                  )
                ) : null}
                <a
                  href={project.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full px-6 text-[14px] font-medium transition-all"
                  style={{ border: `1px solid ${t.btnBorder}`, color: t.ink }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = t.btnHoverBg;
                    e.currentTarget.style.color = t.btnHoverInk;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = t.ink;
                  }}
                >
                  View Presentation
                </a>
              </div>
            </div>

            {/* CENTER — 40% */}
            <div className="relative col-span-12 flex items-center justify-center md:col-span-4">
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: "420px",
                  height: "420px",
                  border: `1px dashed ${t.ring}`,
                  padding: "14px",
                }}
              >
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={project.image}
                    alt={`${project.title} project cover`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — 30% */}
            <div className="col-span-12 flex flex-col items-start justify-center gap-4 md:col-span-4 md:items-end">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="inline-flex items-center justify-center whitespace-nowrap text-[15px] font-medium"
                  style={{
                    height: "44px",
                    padding: "0 24px",
                    borderRadius: "999px",
                    background: i === 0 ? t.chipBg : t.chipAltBg,
                    color: i === 0 ? t.chipInk : t.chipAltInk,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};


const CaseStudiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = projects.length;

  return (
    <section id="case-studies" className="relative pt-4 pb-14 md:pb-20">
      <MarqueeTicker
        variant="wine"
        items={[
          "Selected Work 2024 — 2026",
          "Product Discovery",
          "MVP · Research · Validation",
          "Currently Building",
          "Ops-Focused Product Manager",
          "From Insight to Shipped",
        ]}
        speed={42}
      />

      <div className="section-container pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:gap-10"
        >
          {/* Oversized index numeral */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 select-none md:-top-16"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(120px, 18vw, 260px)",
              lineHeight: 0.85,
              color: "#0a3323",
              opacity: 0.08,
              letterSpacing: "-0.04em",
            }}
          >
            04
          </div>

          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="inline-block h-px w-10"
                style={{ background: "#0a3323" }}
              />
              <p
                className="text-[11px] font-medium uppercase"
                style={{ letterSpacing: "0.32em", color: "#0a3323" }}
              >
                Selected Work · 04
              </p>
            </div>
            <h2
              className="text-5xl leading-[0.98] md:text-7xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Projects that
              <br />
              <span style={{ fontStyle: "italic", color: "#0a3323" }}>shipped</span> &amp;
              <br />
              stories that
              <br />
              <span style={{ fontStyle: "italic", color: "#105666" }}>stuck.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end md:col-span-6 md:col-start-7">
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Real product problems explored through research, framing, execution, and outcomes —
              four case studies spanning networking, AI, D2C entrepreneurship, and culture-tech.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.28em]" style={{ color: "#105666" }}>
              <span>Scroll</span>
              <motion.span
                aria-hidden
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                ↓
              </motion.span>
              <span className="opacity-60">Cards stack as you go</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative">
        {projects.map((project, i) => (
          <div
            key={project.number}
            className="relative"
            style={{ marginBottom: i === total - 1 ? 0 : "24vh" }}
          >
            <StackedCard project={project} index={i} total={total} scrollProgress={scrollYProgress} />
          </div>
        ))}
      </div>
    </section>
  );
};


export default CaseStudiesSection;
