import { motion } from "framer-motion";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/profile.png.asset.json";

const profileImg = profileAsset.url;

const stats = [
  { value: "4", label: "Case Studies" },
  { value: "1", label: "Skillathon Win" },
  { value: "AI-native", label: "Workflows" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/40 pointer-events-none" />

      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl flex-1"
          >
            <div className="inline-flex items-center gap-2 chip-accent mb-6">
              <Sparkles size={12} />
              Available for PM roles · 2026
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-foreground">Aspiring Product Manager building </span>
              <span className="gradient-text">execution-first, AI-driven products</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              I turn user problems into structured product solutions using research,
              documentation, and rapid execution — with AI woven into every step of the workflow.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Case Studies <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown size={16} className="mr-1" /> View Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="shrink-0 relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl" />
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={profileImg}
                alt="Shristy Kumari, Product Manager"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
