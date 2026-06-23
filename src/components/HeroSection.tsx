import { motion } from "framer-motion";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/profile.png.asset.json";

const profileImg = profileAsset.url;

const identity = [
  { icon: "🔍", label: "Product Discovery" },
  { icon: "🏆", label: "Skillathon Winner" },
  { icon: "⚡", label: "AI-Native Builder" },
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
                <a href="#case-studies">
                  View Case Studies <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a
                  href="https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={16} className="mr-1" /> View Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-6 border-t border-border">
              {identity.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="text-2xl leading-none" aria-hidden="true">{s.icon}</span>
                  <span className="text-sm font-medium text-foreground tracking-tight">{s.label}</span>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="shrink-0 relative flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-primary/15 to-transparent blur-3xl pointer-events-none" />

            {/* Layered depth panels — subtle glassmorphism */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-40 h-40 md:w-52 md:h-52 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md rotate-[-8deg] shadow-xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(var(--card)/0.55), hsl(var(--card)/0.15)), repeating-linear-gradient(0deg, hsl(var(--border)/0.25) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, hsl(var(--border)/0.25) 0 1px, transparent 1px 24px)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 w-44 h-28 md:w-60 md:h-36 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-md rotate-[6deg] shadow-xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 right-10 w-24 h-24 md:w-32 md:h-32 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-md rotate-[-5deg] shadow-lg"
            />

            {/* Floating portrait */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-[2rem] overflow-hidden border border-border/70 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)] ring-1 ring-white/5"
            >
              <img
                src={profileImg}
                alt="Shristy Kumari, Product Manager"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
