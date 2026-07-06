import { motion } from "framer-motion";
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
              <div key={i} className="h-32 rounded-2xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {caseStudies?.map((cs, i) => {
              const coverSrc = coverBySlug[cs.slug] ?? coverByTitle[cs.title] ?? cs.thumbnail ?? meetcraftCover;
              const tags = (cs.tags ?? []).slice(0, 2);

              return (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/case-study/${cs.slug}`}
                    className="project-row group flex items-center gap-6 rounded-2xl border border-border bg-background px-6 py-5 transition-colors duration-300 hover:border-foreground/25 md:gap-8 md:px-8 md:py-6"
                    style={{ backgroundColor: "hsl(var(--background))" }}
                  >
                    {/* Circular framed image */}
                    <div className="relative shrink-0">
                      <div
                        className="rounded-full p-[3px]"
                        style={{ border: "1px dashed hsl(var(--border))" }}
                      >
                        <img
                          src={coverSrc}
                          alt={`${cs.title} project`}
                          loading="lazy"
                          className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
                        />
                      </div>
                    </div>

                    {/* Title + subtitle */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="truncate text-xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-2xl"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                      >
                        {cs.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-sm text-muted-foreground md:text-[15px]">
                        {cs.description}
                      </p>
                    </div>

                    {/* Right-side pill tags */}
                    <div className="hidden shrink-0 items-center gap-2 sm:flex">
                      {cs.badge && (
                        <span
                          className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
                          style={{ borderColor: "#C9A227", color: "#8a6f1c", backgroundColor: "rgba(201,162,39,0.08)" }}
                        >
                          {cs.badge}
                        </span>
                      )}
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[12px] text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
