import { motion } from "framer-motion";
import { ArrowRight, FileText, Trophy } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

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
    <section id="case-studies" className="py-28 bg-[hsl(224,30%,7%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(260,85%,55%)]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(255,90%,60%)]/10 blur-[120px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[hsl(260,90%,75%)] mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Product Case Studies
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Exploring customer needs, business challenges, and product opportunities through structured thinking and real-world problem solving.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {caseStudies?.map((cs, i) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 hover:border-[hsl(260,85%,65%)]/40 hover:shadow-[0_20px_60px_-20px_hsl(260,85%,55%/0.4)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <Link to={`/case-study/${cs.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden bg-[hsl(224,30%,10%)]">
                    {cs.thumbnail ? (
                      <img
                        src={cs.thumbnail}
                        alt={cs.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,40%,18%)] via-[hsl(240,30%,12%)] to-[hsl(224,30%,8%)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(260,85%,60%/0.25),transparent_60%)]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,30%,7%)] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/15">
                        <FileText className="text-white" size={18} />
                      </div>
                      {(cs.badge || cs.featured) && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(260,85%,55%)]/20 backdrop-blur-md border border-[hsl(260,85%,70%)]/30 text-xs font-medium text-[hsl(260,90%,85%)]">
                          <Trophy size={11} />
                          {cs.badge ?? "Featured"}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="p-7 flex flex-col flex-1">
                  <Link to={`/case-study/${cs.slug}`}>
                    <h3 className="font-display font-bold text-2xl md:text-[1.6rem] text-white tracking-tight mb-3 leading-tight group-hover:text-[hsl(260,90%,80%)] transition-colors">
                      {cs.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {cs.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-white/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      to={`/case-study/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(260,90%,80%)] hover:gap-2.5 transition-all w-fit"
                    >
                      Read Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
