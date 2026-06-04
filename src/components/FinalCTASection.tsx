import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="relative py-40 md:py-48 overflow-hidden bg-[hsl(224,71%,6%)] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[hsl(270,85%,55%)]/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full bg-[hsl(256,90%,65%)]/15 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative section-container text-center max-w-4xl flex flex-col items-center"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-12">
          Let's Create Something{" "}
          <span className="bg-gradient-to-r from-[hsl(256,85%,80%)] via-[hsl(280,90%,75%)] to-[hsl(220,90%,80%)] bg-clip-text text-transparent">
            Meaningful.
          </span>
        </h2>
        <Button
          size="lg"
          className="bg-white text-[hsl(224,71%,10%)] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl px-8 h-12 text-base font-semibold"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Connect <ArrowRight className="ml-1" size={18} />
        </Button>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
