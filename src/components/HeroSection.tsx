import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.74]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="section-container py-10 md:py-18">
        <div className="grid items-end gap-10 md:grid-cols-[1.02fr_0.98fr] md:gap-12">
          <div className="order-2 md:order-1 relative z-10">
            <div className="editorial-rule mb-8" />
            <p className="eyebrow mb-6">Product Management Portfolio</p>

            <h1 className="max-w-3xl text-[2.7rem] leading-[0.94] text-foreground sm:text-[3.5rem] md:text-[4.7rem] lg:text-[5.35rem]">
              I started with people.
              <br />
              <span className="serif-accent text-muted-foreground">Then I learned how to build for them.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              A thoughtful, story-first portfolio shaped by customer conversations, product strategy,
              and AI-native execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#case-studies">
                  View Case Studies <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a
                  href="https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={16} /> View Resume
                </a>
              </Button>
            </div>

            <div className="mt-16 max-w-2xl border-t border-border pt-8">
              <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                I work at the intersection of customer empathy, structured thinking, and execution — turning
                ambiguous problems into clear product narratives, usable flows, and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative min-h-[26rem] md:min-h-[40rem] flex items-end justify-center md:justify-end">
            <div className="pointer-events-none absolute inset-x-0 top-[14%] z-0 overflow-hidden text-center md:text-right">
              <span className="block text-[4.75rem] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[6rem] md:text-[8.25rem] lg:text-[10rem]">
                SHRISTY
              </span>
            </div>

            <motion.div style={{ opacity: imageOpacity, y: imageY }} className="relative z-10 w-full max-w-[28rem] md:max-w-[31rem]">
              <div className="absolute inset-x-[12%] bottom-0 h-24 bg-accent/10 blur-3xl" aria-hidden="true" />
              <img
                src={profileImg}
                alt="Shristy Kumari portrait"
                className="h-[30rem] w-full rounded-lg object-cover object-[center_18%] md:h-[40rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
