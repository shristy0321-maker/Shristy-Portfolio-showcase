import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string | null;
  presentation_url: string | null;
  report_url: string | null;
  featured: boolean;
  badge: string | null;
};

const coverBySlug: Record<string, string> = {
  meetcraft: meetcraftCover,
  "global-makhana": globalMakhanaCover,
  mailniti: mailnitiCover,
  kalavansh: kalavanshCover,
};

const coverByTitle: Record<string, string> = {
  MeetCraft: meetcraftCover,
  "Global Makhana": globalMakhanaCover,
  MailNiti: mailnitiCover,
  Kalavansh: kalavanshCover,
};

const STICKY_TOP_BASE = 96; // px

type StackedCardProps = {
  cs: CaseStudy;
  index: number;
  total: number;
  coverSrc: string;
  containerRef: React.RefObject<HTMLDivElement>;
  scrollProgress: MotionValue<number>;
};

const StackedCard = ({ cs, index, total, coverSrc, scrollProgress }: StackedCardProps) => {
  // Each card owns a slice of the parent scroll progress.
  // As the NEXT card slides in, this card scales down slightly and dims.
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(scrollProgress, [start, end], [1, 1 - (total - index - 1) * 0.03 - 0.02]);
  const opacity = useTransform(scrollProgress, [start, end], [1, index === total - 1 ? 1 : 0.85]);

  const top = STICKY_TOP_BASE + index * 14; // subtle staggered peek

  return (
    <div className="sticky" style={{ top }}>
      <motion.article
        style={{
          scale,
          opacity,
          transformOrigin: "center top",
        }}
        className="mx-auto w-full"
      >
        <Link
          to={`/case-study/${cs.slug}`}
          className="group block overflow-hidden rounded-[28px] border border-border bg-white transition-colors duration-300 hover:border-foreground/25"
          style={{ boxShadow: "0 20px 50px -25px rgba(42,34,24,0.25), 0 8px 24px -12px rgba(42,34,24,0.12)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px]">
              <img
                src={coverSrc}
                alt={`${cs.title} project cover`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur"
              >
                {String(index + 1).padStart(2, "0")} · Case Study
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3
                  className="text-[2rem] leading-tight text-foreground transition-colors group-hover:text-accent md:text-[2.5rem]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                >
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

              <p className="mt-5 text-base leading-8 text-muted-foreground">{cs.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {cs.tags?.map((t) => (
                  <span key={t} className="editorial-chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  Read Case Study <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </div>
        </Link>
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

  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ["case_studies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as CaseStudy[];
    },
  });

  const total = caseStudies?.length ?? 0;

  return (
    <section id="case-studies" className="py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Real product problems explored through research, framing, execution, and outcomes.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex flex-col gap-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-[28px] border border-border bg-white animate-pulse" />
            ))}
          </div>
        ) : (
          <div ref={containerRef} className="relative">
            {caseStudies?.map((cs, i) => {
              const coverSrc =
                coverBySlug[cs.slug] ?? coverByTitle[cs.title] ?? cs.thumbnail ?? meetcraftCover;

              return (
                // Spacer wrapper — its height creates the scroll distance for the sticky card
                <div
                  key={cs.id}
                  className="relative"
                  style={{ marginBottom: i === total - 1 ? 0 : "22vh" }}
                >
                  <StackedCard
                    cs={cs}
                    index={i}
                    total={total}
                    coverSrc={coverSrc}
                    containerRef={containerRef}
                    scrollProgress={scrollYProgress}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
