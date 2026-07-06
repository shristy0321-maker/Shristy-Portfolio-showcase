import { motion } from "framer-motion";
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

const CaseStudiesSection = () => {
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
              <div key={i} className="h-32 rounded-2xl border border-border bg-white animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {caseStudies?.map((cs, i) => {
              const coverSrc = coverBySlug[cs.slug] ?? coverByTitle[cs.title] ?? cs.thumbnail ?? meetcraftCover;
              const displayTags = cs.tags?.slice(0, 2) ?? [];

              return (
                <motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="project-row group"
                >
                  <Link
                    to={`/case-study/${cs.slug}`}
                    className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-white p-5 transition-colors duration-300 hover:border-foreground/25 md:flex-row md:items-center md:gap-7 md:p-6"
                  >
                    {/* Circular framed image */}
                    <div className="shrink-0">
                      <div className="relative rounded-full p-[3px]" style={{ border: "1px dashed rgba(42,34,24,0.28)" }}>
                        <div className="h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24">
                          <img
                            src={coverSrc}
                            alt={`${cs.title} project cover`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title + subtitle */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3
                          className="text-2xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-[1.75rem]"
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
                      <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-[15px] md:leading-7">
                        {cs.description}
                      </p>
                    </div>

                    {/* Tags + arrow */}
                    <div className="flex w-full items-center justify-between gap-4 md:w-auto md:flex-col md:items-end md:justify-center md:gap-3">
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {displayTags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-accent">
                        Read Case Study <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
