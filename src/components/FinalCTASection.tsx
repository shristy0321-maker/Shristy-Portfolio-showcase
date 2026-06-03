import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[hsl(224,71%,8%)] text-white">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[hsl(256,85%,60%)]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[hsl(220,90%,50%)]/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-[hsl(280,80%,60%)]/10 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative section-container text-center max-w-3xl"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Let's build great{" "}
          <span className="bg-gradient-to-r from-[hsl(256,85%,75%)] via-[hsl(280,90%,75%)] to-[hsl(220,90%,75%)] bg-clip-text text-transparent">
            products together.
          </span>
        </h2>
        <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm building products, solving user problems, and actively exploring Product Management
          opportunities. If you'd like to discuss ideas, opportunities, or product challenges,
          let's connect.
        </p>
        <Button
          size="lg"
          className="bg-white text-[hsl(224,71%,14%)] hover:bg-white/90 shadow-2xl"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get In Touch <ArrowRight className="ml-1" size={18} />
        </Button>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
