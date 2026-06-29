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
    <section id="case-studies" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <div className="editorial-rule mb-6" />
          <p className="eyebrow mb-3">Case Studies</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Product Case Studies</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Real product problems explored through research, framing, execution, and outcomes.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-[31rem] rounded-lg border border-border bg-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies?.map((cs, i) => {
              const coverSrc = coverBySlug[cs.slug] ?? coverByTitle[cs.title] ?? cs.thumbnail ?? meetcraftCover;

              return (
                <motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="card-elevated flex h-full flex-col overflow-hidden"
                >
                  <Link to={`/case-study/${cs.slug}`} className="block overflow-hidden">
                    <img
                      src={coverSrc}
                      alt={`${cs.title} project cover`}
                      loading="lazy"
                      width={1536}
                      height={896}
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-5">
                      <Link to={`/case-study/${cs.slug}`}>
                        <h3 className="text-3xl leading-tight text-foreground transition-colors hover:text-accent">
                          {cs.title}
                        </h3>
                      </Link>
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
                      <Link to={`/case-study/${cs.slug}`} className="editorial-link">
                        Read Case Study <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
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
