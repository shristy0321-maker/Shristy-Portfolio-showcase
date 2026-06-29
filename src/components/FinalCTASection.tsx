import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-y border-border py-16 text-left md:flex md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Next Chapter</p>
            <h2 className="text-4xl leading-tight text-foreground md:text-6xl">
              Let's create something <span className="serif-accent text-muted-foreground">meaningful.</span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0">
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Connect <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
