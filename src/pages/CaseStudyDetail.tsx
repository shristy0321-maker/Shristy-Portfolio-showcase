import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";

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

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: cs, isLoading } = useQuery({
    queryKey: ["case_study", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("case_studies").select("*").eq("slug", slug!).maybeSingle();
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
          <div className="h-96 animate-pulse bg-secondary rounded-lg" />
        </div>
      </>
    );
  }

  if (!cs) {
    return (
      <>
        <Navbar />
        <div className="pt-32 section-container text-center">
          <h1 className="text-3xl mb-4">Case study not found</h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </>
    );
  }

  const heroCover = coverBySlug[cs.slug] ?? coverByTitle[cs.title] ?? cs.thumbnail ?? meetcraftCover;

  const sections = [
    { label: "Problem", content: cs.problem_statement },
    { label: "Research", content: cs.user_research },
    { label: "Solution", content: cs.solution },
    { label: "Outcome", content: cs.impact },
    { label: "Key Learnings", content: cs.key_insights },
  ].filter((s) => s.content);

  return (
    <>
      <Navbar />
      <article className="pt-24 md:pt-28">
        <div className="section-container">
          <Link to="/#case-studies" className="editorial-link mb-8">
            <ArrowLeft size={15} /> Back to Case Studies
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 border-b border-border pb-10"
          >
            <p className="eyebrow mb-4">Case Study</p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="max-w-4xl text-4xl leading-tight text-foreground md:text-6xl"
            >
              {cs.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg"
            >
              {cs.description}
            </motion.p>
            <div className="mt-7 flex flex-wrap gap-2">
              {cs.tags?.map((t: string) => (
                <span key={t} className="editorial-chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {cs.presentation_url && (
                <Button asChild variant="hero" size="lg">
                  <a href={cs.presentation_url} target="_blank" rel="noreferrer">
                    Read Full Case Study <ArrowRight size={15} />
                  </a>
                </Button>
              )}
              {cs.report_url && (
                <Button asChild variant="hero-outline" size="lg">
                  <a href={cs.report_url} target="_blank" rel="noreferrer">
                    <Download size={15} /> Download Report
                  </a>
                </Button>
              )}
            </div>
          </motion.header>


          {cs.overview && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 max-w-3xl border-l border-accent pl-6"
            >
              <p className="eyebrow mb-3">Case Overview</p>
              <p className="text-lg leading-9 text-foreground/90 whitespace-pre-line">{cs.overview}</p>
            </motion.section>
          )}

          <div className="grid gap-10 md:grid-cols-2 mb-16">
            {sections.map((s, i) => (
              <motion.section
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="border-t border-border pt-5"
              >
                <h2 className="text-2xl leading-tight text-foreground mb-4">{s.label}</h2>
                <p className="text-base leading-8 text-muted-foreground whitespace-pre-line">{s.content}</p>
              </motion.section>
            ))}
          </div>


          {cs.report_url && (
            <section className="mb-16 border-y border-border py-10 text-left">
              <h3 className="text-2xl leading-tight text-foreground mb-2">Need the full write-up?</h3>
              <p className="text-base text-muted-foreground mb-6">Download the detailed report.</p>
              <Button asChild size="lg" variant="hero-outline">
                <a href={cs.report_url} target="_blank" rel="noreferrer">
                  <Download size={15} /> Download Report
                </a>
              </Button>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
