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
      {/* Ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/40" />
      </div>

      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 items-center gap-12 md:gap-10">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 chip-accent mb-7">
              <Sparkles size={12} />
              Available for PM roles · 2026
            </div>

            <h1 className="font-display font-bold tracking-[-0.02em] mb-7 text-[2.5rem] leading-[1.05] sm:text-5xl md:text-[4.25rem] lg:text-[5rem] md:leading-[1.02]">
              <span className="block text-foreground">Building products</span>
              <span className="block text-foreground">that solve</span>
              <span className="block gradient-text">real customer problems.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Aspiring Product Manager turning user research and business signals
              into structured, AI-native product solutions — from discovery to launch.
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

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-border">
              {identity.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="text-xl leading-none" aria-hidden="true">{s.icon}</span>
                  <span className="text-sm font-medium text-foreground tracking-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-5 order-1 md:order-2 flex items-center justify-center md:justify-end"
          >
            <div className="relative">
              {/* Soft ambient glow */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-3xl pointer-events-none" />

              {/* Single subtle backdrop surface */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-border/60 bg-card/40 backdrop-blur-sm"
              />

              {/* Portrait */}
              <div className="relative w-72 h-[22rem] sm:w-80 sm:h-96 md:w-[22rem] md:h-[28rem] lg:w-[26rem] lg:h-[32rem] rounded-[2rem] overflow-hidden border border-border/70 shadow-[0_40px_100px_-30px_hsl(var(--primary)/0.4)] ring-1 ring-white/5">
                <img
                  src={profileImg}
                  alt="Shristy Kumari, Product Manager"
                  className="w-full h-full object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
