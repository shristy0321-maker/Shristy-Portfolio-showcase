import { motion } from "framer-motion";
import { ExternalLink, Download, Trophy, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type CaseStudy = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string | null;
  presentation_url: string | null;
  report_url: string | null;
  featured: boolean;
  badge: string | null;
};

const gradients = [
  "from-indigo-500 via-blue-500 to-cyan-400",
  "from-emerald-500 via-teal-500 to-lime-400",
  "from-fuchsia-500 via-pink-500 to-rose-400",
  "from-amber-500 via-orange-500 to-red-400",
  "from-violet-500 via-purple-500 to-indigo-400",
  "from-sky-500 via-blue-500 to-indigo-400",
];

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
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Featured Works
          </h2>
          <p className="text-muted-foreground">
            A snapshot of recent product, GTM, and platform case studies — each with a deck and a detailed report.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="card-elevated h-80 animate-pulse bg-muted" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudies?.map((cs, i) => {
              const gradient = gradients[i % gradients.length];
              return (
                <motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group card-elevated overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`relative h-44 overflow-hidden ${cs.thumbnail ? "" : `bg-gradient-to-br ${gradient}`}`}>
                    {cs.thumbnail ? (
                      <img
                        src={cs.thumbnail}
                        alt={cs.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(0,0,0,0.15))]" />
                      </>
                    )}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
                        <FileText className="text-white" size={22} />
                      </div>
                      {(cs.badge || cs.featured) && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-xs font-medium text-foreground shadow-sm">
                          <Trophy size={12} className="text-accent" />
                          {cs.badge ?? "Featured"}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display font-bold text-2xl text-white tracking-tight drop-shadow">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cs.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {cs.presentation_url && (
                        <Button asChild size="sm" className="flex-1 min-w-[140px]">
                          <a href={cs.presentation_url} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} className="mr-1.5" />
                            View Presentation
                          </a>
                        </Button>
                      )}
                      {cs.report_url && (
                        <Button asChild size="sm" variant="outline" className="flex-1 min-w-[140px]">
                          <a href={cs.report_url} download>
                            <Download size={14} className="mr-1.5" />
                            Download Report
                          </a>
                        </Button>
                      )}
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
