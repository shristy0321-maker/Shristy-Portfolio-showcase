import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import skillathonImg from "@/assets/recognition-skillathon.jpg";
import skillathonPresentingImg from "@/assets/recognition-skillathon-presenting.jpg";
import sessionLeadImg from "@/assets/recognition-session-lead.jpg";
import registrationDeskImg from "@/assets/recognition-registration-desk.jpg";
import innovationLabImg from "@/assets/recognition-innovation-lab.jpg";

const INK = "#f7f4d5";   // beige
const SUB = "#d3968c";   // rosy brown
const MOSS = "#839958";  // moss
const BG = "#0a3323";    // dark green
const CARD = "#12402d";  // slightly lifted card bg

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const EASE = [0.22, 1, 0.36, 1] as const;

type Item = {
  n: string;
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  aspect: string;
  featured?: boolean;
};

const items: Item[] = [
  {
    n: "01",
    eyebrow: "Featured Achievement",
    title: "Skillathon Winner",
    desc: "Recognized at IPL's Skillathon for developing an end-to-end product solution — from problem discovery to a validated MVP pitch.",
    img: skillathonImg,
    alt: "Receiving the Skillathon Winner award on stage",
    aspect: "16 / 10",
    featured: true,
  },
  {
    n: "02",
    eyebrow: "MeetCraft · Pitch",
    title: "The MeetCraft Pitch",
    desc: "Presented the MeetCraft persona and product narrative — turning research into a story that resonated with the jury.",
    img: skillathonPresentingImg,
    alt: "Presenting the MeetCraft persona slide during Skillathon",
    aspect: "3 / 4",
  },
  {
    n: "03",
    eyebrow: "Leadership · Community",
    title: "Session Lead · ProdXPulse",
    desc: "Led a Product Management workshop at IPL's flagship product festival, ProdXPulse.",
    img: sessionLeadImg,
    alt: "Hosting the ProdXPulse workshop",
    aspect: "1 / 1",
  },
  {
    n: "04",
    eyebrow: "Community Operations",
    title: "Registration Desk",
    desc: "Ran the ProdXPulse registration desk — welcoming and onboarding participants across teams.",
    img: registrationDeskImg,
    alt: "Attendees at the ProdXPulse registration desk",
    aspect: "4 / 5",
  },
  {
    n: "05",
    eyebrow: "Innovation Lab · Top 10",
    title: "Innovation Lab Finalist",
    desc: "Selected among the Top 10 ideas for solving a real farmer-to-buyer problem through customer research and structured product thinking.",
    img: innovationLabImg,
    alt: "Pitching the Global Makhana idea at the Innovation Lab",
    aspect: "1 / 1",
  },
];

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
          description="A curated record of moments — on stage, at the desk, and mid-pitch — that shaped my journey into Product Management."
          tone="dark"
        />

        {/* Editorial mosaic grid */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {items.map((it, i) => {
            const layoutClass = it.featured
              ? "md:col-span-8"
              : i === 1
              ? "md:col-span-4 md:mt-24"
              : i === 2
              ? "md:col-span-4"
              : i === 3
              ? "md:col-span-4 md:-mt-12"
              : "md:col-span-4";

            return (
              <motion.article
                key={it.n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
                className={`${layoutClass} group`}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    backgroundColor: CARD,
                    boxShadow: `0 1px 0 0 ${INK}12 inset`,
                    border: `1px solid ${INK}14`,
                  }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: it.aspect }}>
                    <img
                      src={it.img}
                      alt={it.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  {it.featured && (
                    <div className="absolute top-0 right-0 p-6">
                      <div
                        className="px-4 py-1 text-[10px] font-bold uppercase"
                        style={{
                          backgroundColor: SUB,
                          color: BG,
                          letterSpacing: "0.22em",
                        }}
                      >
                        Featured Moment
                      </div>
                    </div>
                  )}

                  {/* soft bottom gradient on hover for tall cards */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${BG}80, transparent 45%)`,
                    }}
                  />
                </div>

                {/* Caption */}
                <div className={`mt-6 md:mt-8 ${it.featured ? "flex gap-6" : ""}`}>
                  {it.featured && (
                    <span
                      className="shrink-0 text-4xl italic leading-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: SUB,
                      }}
                    >
                      {it.n}
                    </span>
                  )}
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase mb-2"
                      style={{
                        color: it.featured ? SUB : MOSS,
                        letterSpacing: "0.24em",
                      }}
                    >
                      {it.eyebrow}
                    </p>
                    <h3
                      className={`${
                        it.featured ? "text-2xl md:text-3xl" : "text-xl"
                      } leading-[1.15] mb-2`}
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: INK,
                        fontWeight: 600,
                      }}
                    >
                      {it.title}
                    </h3>
                    <p
                      className="text-[13.5px] leading-relaxed max-w-lg"
                      style={{ color: `${INK}b8` }}
                    >
                      {it.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
