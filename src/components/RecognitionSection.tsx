import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import skillathonImg from "@/assets/recognition-skillathon.jpg";
import skillathonPresentingImg from "@/assets/recognition-skillathon-presenting.jpg";
import sessionLeadImg from "@/assets/recognition-session-lead.jpg";
import registrationDeskImg from "@/assets/recognition-registration-desk.jpg";
import innovationLabImg from "@/assets/recognition-innovation-lab.jpg";

const INK = "#f7f4d5";       // beige
const SUB = "#d3968c";       // rosy brown
const MOSS = "#839958";      // moss
const BG = "#0a3323";        // dark green
const CARD = "#f7f4d5";      // beige card

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const EASE = [0.22, 1, 0.36, 1] as const;

const RecognitionSection = () => {
  return (
    <section
      id="recognition"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: BG }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
        <div
          className="absolute -left-40 top-32 h-[560px] w-[560px] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${MOSS}, transparent 70%)` }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${SUB}, transparent 70%)` }}
        />
      </div>

      <div className="section-container relative">
        <SectionHeader
          index="02"
          eyebrow="Recognition"
          title="Recognition Along the Way"
          description="Moments — captured on stage, at the desk, and mid-pitch — that shaped my journey into Product Management."
          tone="dark"
        />

        <div className="mt-20 md:mt-28 space-y-40 md:space-y-56">

          {/* ============ 01 · Skillathon Winner — Museum gallery ============ */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-6 md:-left-14 -top-24 md:-top-28 select-none leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(160px, 22vw, 260px)",
                color: `${MOSS}`,
                opacity: 0.12,
              }}
            >
              01
            </span>

            <div className="relative grid md:grid-cols-12 gap-10 md:gap-14 items-start">
              {/* Photo frame with hard drop-shadow in rosy brown */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: EASE }}
                className="md:col-span-7 relative group"
              >
                <div
                  className="p-4 md:p-5 transition-transform duration-700 group-hover:-rotate-1"
                  style={{
                    backgroundColor: CARD,
                    boxShadow: `18px 18px 0 0 ${SUB}`,
                  }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                    <img
                      src={skillathonImg}
                      alt="Receiving the Skillathon Winner award on stage"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className="text-[10px] uppercase font-semibold"
                      style={{ color: BG, letterSpacing: "0.22em" }}
                    >
                      Exhibit · No. 01
                    </span>
                    <span
                      className="text-[10px] italic"
                      style={{ color: `${BG}99`, fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Skillathon · 2026
                    </span>
                  </div>
                </div>

                {/* Floating caption block in rosy brown */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                  className="absolute -bottom-14 -right-4 md:-right-10 p-7 max-w-xs shadow-2xl"
                  style={{ backgroundColor: SUB, color: INK }}
                >
                  <p
                    className="text-[10px] uppercase mb-2"
                    style={{ letterSpacing: "0.28em", color: `${INK}cc` }}
                  >
                    Award · Product Strategy
                  </p>
                  <h3
                    className="text-2xl md:text-3xl leading-[1.05]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                  >
                    Skillathon Winner
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed opacity-95">
                    Recognized for developing an end-to-end product solution during IPL's Skillathon —
                    from problem discovery to a validated MVP pitch.
                  </p>
                </motion.div>
              </motion.div>

              {/* Secondary polaroid — MeetCraft pitch */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
                className="md:col-span-5 md:mt-24 relative"
              >
                <div
                  className="relative p-3 pb-14 shadow-xl mx-auto max-w-[280px] rotate-[4deg] hover:rotate-0 transition-transform duration-500"
                  style={{ backgroundColor: CARD }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                    <img
                      src={skillathonPresentingImg}
                      alt="Presenting the MeetCraft persona slide during Skillathon"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p
                    className="absolute bottom-4 left-0 right-0 text-center text-2xl"
                    style={{ fontFamily: "'Caveat', cursive", color: BG }}
                  >
                    MeetCraft pitch ✦
                  </p>
                  {/* Tape */}
                  <span
                    aria-hidden
                    className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 rotate-[-6deg] backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(247,244,213,0.35)", border: "1px solid rgba(247,244,213,0.5)" }}
                  />
                </div>

                <p
                  className="mt-8 text-xs uppercase text-center"
                  style={{ color: MOSS, letterSpacing: "0.3em" }}
                >
                  Institute of Product Leadership
                </p>
              </motion.div>
            </div>
          </motion.article>

          {/* ============ 02 · Session Lead — Ticket stub + marquee ============ */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative"
          >
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Ticket photo */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: EASE }}
                className="md:col-span-7 md:order-2 relative"
              >
                {/* Marquee background */}
                <div className="absolute -inset-y-14 inset-x-0 overflow-hidden opacity-[0.06] flex flex-col justify-center pointer-events-none">
                  <div
                    className="whitespace-nowrap tracking-tighter uppercase italic font-black"
                    style={{
                      color: INK,
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(60px, 10vw, 130px)",
                      lineHeight: 0.9,
                    }}
                  >
                    ProdXPulse · Session Lead · ProdXPulse · Session Lead ·
                  </div>
                </div>

                <div
                  className="relative rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 shadow-2xl p-1"
                  style={{ backgroundColor: MOSS }}
                >
                  <div
                    className="p-1"
                    style={{ border: `2px dashed ${INK}66` }}
                  >
                    <div className="overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                      <img
                        src={sessionLeadImg}
                        alt="Hosting the ProdXPulse registration desk"
                        loading="lazy"
                        className="h-full w-full object-cover"
                        style={{ filter: "grayscale(0.35) brightness(0.95)" }}
                      />
                    </div>
                  </div>
                  {/* Ticket punchouts */}
                  <span
                    aria-hidden
                    className="absolute top-1/2 -left-4 h-8 w-8 rounded-full -translate-y-1/2"
                    style={{ backgroundColor: BG }}
                  />
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-4 h-8 w-8 rounded-full -translate-y-1/2"
                    style={{ backgroundColor: BG }}
                  />
                </div>

                {/* Attendee onboarding thumb */}
                <div
                  className="hidden md:block absolute -bottom-10 -left-10 w-40 h-28 shadow-xl rotate-[-6deg] overflow-hidden p-1"
                  style={{ backgroundColor: CARD }}
                >
                  <img
                    src={registrationDeskImg}
                    alt="Attendees at the ProdXPulse registration desk"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                className="md:col-span-5 md:order-1 space-y-6"
              >
                <div
                  className="inline-block px-4 py-1 text-[10px] uppercase font-semibold"
                  style={{ backgroundColor: SUB, color: INK, letterSpacing: "0.24em" }}
                >
                  Archive · No. 02
                </div>
                <h3
                  className="text-4xl md:text-5xl leading-[1.05]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: INK,
                    fontWeight: 500,
                  }}
                >
                  Session Lead at{" "}
                  <span className="italic" style={{ color: MOSS }}>
                    ProdXPulse
                  </span>
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ color: `${INK}cc` }}
                >
                  Led a Product Management workshop at IPL's flagship product festival — facilitating
                  hands-on sessions and helping deliver a memorable learning experience for attendees.
                </p>
                <div
                  className="pt-6 flex items-center justify-between"
                  style={{ borderTop: `1px solid ${MOSS}55` }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: INK, letterSpacing: "0.22em" }}
                  >
                    LEADERSHIP · COMMUNITY
                  </span>
                  <span
                    className="text-sm italic"
                    style={{ color: SUB, fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2026
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.article>

          {/* ============ 03 · Innovation Lab — Polaroid stack + annotation ============ */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative grid md:grid-cols-12 gap-12 md:gap-16 items-center"
          >
            {/* Polaroid stack */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: EASE }}
              className="md:col-span-6 relative min-h-[440px]"
            >
              {/* Ghost polaroid behind */}
              <div
                className="absolute top-6 left-8 z-10 p-4 pb-16 shadow-lg rotate-[6deg] w-full max-w-sm opacity-40"
                style={{ backgroundColor: CARD }}
              >
                <div className="w-full aspect-square" style={{ backgroundColor: `${BG}22` }} />
              </div>

              {/* Main polaroid */}
              <div
                className="relative z-20 p-5 pb-20 shadow-2xl -rotate-[3deg] w-full max-w-sm"
                style={{ backgroundColor: CARD }}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={innovationLabImg}
                    alt="Pitching the Global Makhana idea at the Innovation Lab"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p
                  className="absolute bottom-6 left-6 text-3xl tracking-tight"
                  style={{ fontFamily: "'Caveat', cursive", color: BG }}
                >
                  Innovation Lab '26
                </p>
              </div>

              {/* Frosted tape */}
              <span
                aria-hidden
                className="absolute -top-4 left-1/3 w-32 h-9 z-30 rotate-12"
                style={{
                  backgroundColor: "rgba(247,244,213,0.22)",
                  borderLeft: "1px solid rgba(247,244,213,0.4)",
                  borderRight: "1px solid rgba(247,244,213,0.4)",
                  backdropFilter: "blur(2px)",
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="md:col-span-6 relative"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 -left-6 md:-left-10 select-none leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(120px, 12vw, 180px)",
                  color: MOSS,
                  opacity: 0.22,
                }}
              >
                03
              </span>

              <h3
                className="relative z-10 text-4xl md:text-5xl leading-[1.05] mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                Innovation Lab · Top 10
              </h3>

              <p
                className="text-lg md:text-xl leading-[1.7] italic pl-6 md:pl-8"
                style={{
                  color: `${INK}e6`,
                  borderLeft: `3px solid ${SUB}`,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Selected among the Top 10 ideas at the Innovation Lab for solving a real-world
                farmer-to-buyer problem through customer research, validation, and structured
                product thinking.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ border: `1px solid ${MOSS}` }}
                >
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: SUB }}
                  />
                </div>
                <p
                  className="text-xs uppercase font-semibold"
                  style={{ color: MOSS, letterSpacing: "0.28em" }}
                >
                  Finalist · Idea Selected
                </p>
              </div>
            </motion.div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
