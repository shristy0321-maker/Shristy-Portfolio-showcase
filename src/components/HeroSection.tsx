import { motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl flex-1"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Product Manager · Problem Solver
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={profileImg}
                alt="Shristy Kumari"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
