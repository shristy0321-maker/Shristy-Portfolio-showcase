import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  presentationUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "MeetCraft",
    category: "Product · Networking",
    year: "2025",
    description:
      "Structured networking for professionals — an MVP that turns unstructured event mingling into intent-matched conversations and closed-loop follow-ups.",
    tags: ["Product Discovery", "User Research", "MVP"],
    image: meetcraftCover,
    href: "/case-study/meetcraft",
    presentationUrl:
      "https://docs.google.com/document/d/1jHynLmZARJLMfyIIx8uz67pbDqB9P-hm/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true",
  },
  {
    number: "02",
    title: "MailNiti",
    category: "SaaS · Growth",
    year: "2024",
    description:
      "AI-powered email automation for Indian SMEs — a GTM and product framework that turns outbound into a structured, measurable workflow.",
    tags: ["SaaS", "GTM Strategy", "Product"],
    image: mailnitiCover,
    href: "/case-study/mailniti",
    presentationUrl:
      "https://docs.google.com/document/d/1jHynLmZARJLMfyIIx8uz67pbDqB9P-hm/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true",
  },
  {
    number: "03",
    title: "Global Makhana",
    category: "Entrepreneurship · B2B",
    year: "2024",
    description:
      "A premium farm-to-pack makhana brand — vertically integrated sourcing, export-ready packaging, and a go-to-market plan across global B2B marketplaces.",
    tags: ["Entrepreneurship", "B2B", "Go-To-Market"],
    image: globalMakhanaCover,
    href: "/case-study/global-makhana",
    presentationUrl:
      "https://docs.google.com/document/d/1P8T-7mcWWwQYeDC9fh1Px7-ja3XrjHDZ/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true",
  },
  {
    number: "04",
    title: "KalaVansh",
    category: "Heritage · Commerce",
    year: "2024",
    description:
      "A digital-first heritage commerce concept — bringing traditional Indian craft to modern buyers through curated storytelling and a scalable product operating model.",
    tags: ["Brand", "Product Strategy", "Commerce"],
    image: kalavanshCover,
    href: "/case-study/kalavansh",
    presentationUrl:
      "https://docs.google.com/document/d/14FDe1AvnBQFtGJ15QVGi-_jS7-TjdIfd/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true",
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

  // Previous cards scale down slightly and fade to 92% opacity as the next one covers them.
  const isLast = index === total - 1;
  const scale = useTransform(scrollProgress, [start, end], [1, isLast ? 1 : 0.98]);
  const opacity = useTransform(scrollProgress, [start, end], [1, isLast ? 1 : 0.92]);

  // Stagger sticky tops so the stack peeks subtly.
  const top = 80 + index * 18;

  return (
    <div className="sticky" style={{ top }}>
      <motion.article
        style={{ scale, opacity, transformOrigin: "center top" }}
        className="mx-auto"
      >
        <div
          className="group relative mx-auto block overflow-hidden bg-white"
          style={{
            width: "88vw",
            maxWidth: "1450px",
            height: "720px",
            borderRadius: "36px",
            boxShadow: "0px 40px 120px rgba(0,0,0,0.12)",
          }}
        >
          <div className="grid h-full grid-cols-12 gap-8 px-16 py-20">
            {/* LEFT — 30% */}
            <div className="col-span-12 flex flex-col justify-between md:col-span-4">
              <div>
                <p className="text-[14px] font-medium uppercase tracking-[0.28em] text-neutral-400">
                  Project {project.number}
                </p>
                <h3
                  className="mt-10 text-[64px] font-bold leading-[1.02] tracking-[-0.02em] text-neutral-900"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="mt-8 text-[28px] font-normal leading-tight text-neutral-700">
                  {project.category}
                </p>
                <p className="mt-3 text-[18px] font-normal text-neutral-500">{project.year}</p>
                <p className="mt-10 max-w-md text-[20px] leading-[1.55] text-neutral-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href={project.href}
                  className="inline-flex items-center gap-3 text-[16px] font-medium text-neutral-900 transition-colors hover:text-accent"
                >
                  Read Case Study
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </a>
                {project.presentationUrl && (
                  <a
                    href={project.presentationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-[14px] font-medium text-neutral-900 transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                  >
                    View Presentation
                  </a>
                )}
              </div>
            </div>

            {/* CENTER — 40% */}
            <div className="relative col-span-12 flex items-center justify-center md:col-span-4">
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: "420px",
                  height: "420px",
                  border: "1px dashed rgba(0,0,0,0.28)",
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
                    background: i === 0 ? "hsl(var(--accent))" : "#F2F2F0",
                    color: i === 0 ? "hsl(var(--accent-foreground))" : "#1a1a1a",
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
    <section id="case-studies" className="py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Real product problems explored through research, framing, execution, and outcomes.
          </p>
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
