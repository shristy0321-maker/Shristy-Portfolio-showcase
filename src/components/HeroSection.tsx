import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/shristy-portrait-hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6],
    [1, 0.8, 0.5, 0.2, 0]
  );
  const fade = (y: number, delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#FAF7F3" }}
    >
      {/* Back arrow — top left */}
      <motion.a
        href="#"
        aria-label="Back"
        className="absolute"
        style={{
          top: "5%",
          left: "5%",
          zIndex: 5,
          color: "#1a1208",
          fontSize: 28,
          lineHeight: 1,
          textDecoration: "none",
        }}
        {...fade(8, 0.1)}
      >
        ‹
      </motion.a>

      {/* Sparkle — top right */}
      <motion.div
        className="absolute"
        style={{ top: "5%", right: "5%", zIndex: 5, color: "#6D5D57", fontSize: 18 }}
        {...fade(8, 0.1)}
      >
        ✦
      </motion.div>

      {/* Subtle dotted texture on the right */}
      <motion.div
        aria-hidden
        className="absolute hidden md:block"
        style={{
          top: "22%",
          right: "4%",
          width: 140,
          height: 220,
          zIndex: 1,
          opacity: 0.3,
          backgroundImage: "radial-gradient(#6D5D57 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      />

      {/* Layer 2: PORTFOLIO heading (behind portrait) */}
      <div
        className="absolute text-center"
        style={{
          top: "24%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "102vw",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <motion.h1
          {...fade(15, 0.2)}
          style={{
            margin: 0,
            color: "#6B5A52",
            fontFamily: "'Editorial New', 'Bodoni Moda', 'Didot', 'Bodoni 72', serif",
            fontWeight: 400,
            fontStyle: "normal",
            textTransform: "uppercase",
            fontSize: "clamp(3rem, 11.6vw, 13.2rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Layer 3: Portrait in front of PORTFOLIO */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center items-end"
        style={{
          bottom: "calc(6% + 18px)",
          zIndex: 3,
          height: "65%",
          width: "auto",
          opacity: reduce ? 1 : portraitOpacity,
        }}
      >
        <motion.img
          {...fade(20, 0)}
          src={portrait}
          alt="Shristy Kumari"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 30px 60px rgba(40, 25, 15, 0.12))",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 86%, rgba(0,0,0,0.6) 94%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 86%, rgba(0,0,0,0.6) 94%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      {/* Bottom-right label */}
      <motion.div
        className="absolute"
        style={{
          bottom: "4%",
          right: "5%",
          zIndex: 5,
          color: "#1a1208",
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          borderBottom: "1px solid #1a1208",
          paddingBottom: 4,
        }}
        {...fade(10, 0.5)}
      >
        Shristy Kumari
      </motion.div>
    </section>
  );
};

export default HeroSection;
