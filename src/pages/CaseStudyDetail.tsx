import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Trophy, Target, Users, Lightbulb, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: cs, isLoading } = useQuery({
    queryKey: ["case_study", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="pt-32 section-container">
          <div className="h-96 animate-pulse bg-muted rounded-xl" />
        </div>
      </>
    );
  }

  if (!cs) {
    return (
      <>
        <Navbar />
        <div className="pt-32 section-container text-center">
          <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to portfolio</Link>
        </div>
      </>
    );
  }

  const sections = [
    { icon: Target, label: "Problem Statement", content: cs.problem_statement },
    { icon: Search, label: "User Research", content: cs.user_research },
    { icon: Lightbulb, label: "Key Insights", content: cs.key_insights },
    { icon: Users, label: "Solution", content: cs.solution },
    { icon: TrendingUp, label: "Impact", content: cs.impact },
  ].filter((s) => s.content);

  return (
    <>
      <Navbar />
      <article className="pt-24">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/80 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="relative section-container py-16 md:py-24">
            <Link to="/#case-studies" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6">
              <ArrowLeft size={16} /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {(cs.badge || cs.featured) && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium">
                  <Trophy size={12} /> {cs.badge ?? "Featured"}
                </span>
              )}
              {cs.tags.map((t: string) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-5 max-w-3xl">
              {cs.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
              {cs.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {cs.presentation_url && (
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href={cs.presentation_url} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} className="mr-1" /> View Presentation
                  </a>
                </Button>
              )}
              {cs.report_url && (
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                  <a href={cs.report_url} target="_blank" rel="noreferrer">
                    <Download size={16} className="mr-1" /> Download Report
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="section-container py-16">
          {cs.overview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <p className="eyebrow mb-3">Project Overview</p>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{cs.overview}</p>
            </motion.div>
          )}

          {/* Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {sections.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-elevated p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <s.icon size={18} className="text-accent" />
                  </div>
                  <h2 className="font-display font-semibold text-lg">{s.label}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Embedded presentation */}
          {cs.presentation_url && (
            <div className="mb-16">
              <p className="eyebrow mb-3">Presentation</p>
              <h2 className="text-2xl font-bold mb-6">Full Deck</h2>
              <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-lg bg-muted">
                <iframe
                  src={cs.presentation_url}
                  title={`${cs.title} presentation`}
                  className="w-full h-full"
                  allow="fullscreen"
                />
              </div>
            </div>
          )}

          {cs.report_url && (
            <div className="card-elevated p-8 text-center">
              <h3 className="font-display text-xl font-bold mb-2">Want the full write-up?</h3>
              <p className="text-muted-foreground mb-5">Download the detailed report PDF.</p>
              <Button asChild size="lg">
                <a href={cs.report_url} target="_blank" rel="noreferrer">
                  <Download size={16} className="mr-1" /> Download Report
                </a>
              </Button>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
