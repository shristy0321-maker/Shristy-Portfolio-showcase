import { motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Product Manager · Builder · Problem Solver
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Shristy Kumari</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Product Management · Operations · Customer-Centric Solutions
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl">
            Building structured solutions from real customer problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowDown className="ml-1" size={16} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/shristy-kumari-42634221b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} className="mr-1" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
