import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import skillathonImg from "@/assets/recognition-skillathon.jpg";
import skillathonPresentingImg from "@/assets/recognition-skillathon-presenting.jpg";
import sessionLeadImg from "@/assets/recognition-session-lead.jpg";
import registrationDeskImg from "@/assets/recognition-registration-desk.jpg";
import innovationLabImg from "@/assets/recognition-innovation-lab.jpg";

const INK = "#f7f4d5";
const SUB = "#d3968c";
const MOSS = "#839958";
const BG = "#0a3323";
const CARD = "#f7f4d5";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const EASE = [0.22, 1, 0.36, 1] as const;

type Frame = {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
};

type Entry = {
  index: string;
  eyebrow: string;
  title: string;
  titleItalic?: string;
  meta: string;
  description: string;
  frames: Frame[];
};

const entries: Entry[] = [
  {
    index: "01",
    eyebrow: "Award · Product Strategy",
    title: "Skillathon",
    titleItalic: "Winner",
    meta: "Institute of Product Leadership · 2026",
    description:
      "Recognized for developing an end-to-end product solution during IPL's Skillathon — from problem discovery to a validated MVP pitch with the MeetCraft team.",
    frames: [
      {
        src: skillathonImg,
        alt: "Receiving the Skillathon Winner award on stage",
        caption: "Award moment · on stage",
        ratio: "4 / 3",
      },
      {
        src: skillathonPresentingImg,
        alt: "Presenting the MeetCraft persona slide during Skillathon",
        caption: "MeetCraft pitch ✦",
        ratio: "4 / 3",
      },
    ],
  },
  {
    index: "02",
    eyebrow: "Leadership · Community",
    title: "Session Lead at",
    titleItalic: "ProdXPulse",
    meta: "IPL Product Festival · 2026",
    description:
      "Led a Product Management workshop and hosted the registration desk at IPL's flagship product festival — facilitating hands-on sessions for attendees.",
    frames: [
      {
        src: sessionLeadImg,
        alt: "Hosting a ProdXPulse session",
        caption: "Session lead · workshop",
        ratio: "4 / 3",
      },
      {
        src: registrationDeskImg,
        alt: "Verifying team registrations at the ProdXPulse desk",
        caption: "Registration desk · check-in",
        ratio: "4 / 3",
      },
    ],
  },
  {
    index: "03",
    eyebrow: "Finalist · Idea Selected",
    title: "Innovation Lab",
    titleItalic: "· Top 10",
    meta: "Global Makhana · 2026",
    description:
      "Selected among the Top 10 ideas at the Innovation Lab for solving a real-world farmer-to-buyer problem through customer research, validation, and structured product thinking.",
    frames: [
      {
        src: innovationLabImg,
        alt: "Pitching the Global Makhana idea at the Innovation Lab",
        caption: "Innovation Lab '26 · pitching",
        ratio: "4 / 3",
      },
    ],
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
          description="Moments — captured on stage, at the desk, and mid-pitch — that shaped my journey into Product Management."
          tone="dark"
        />

        <div className="mt-20 md:mt-28 space-y-28 md:space-y-36">
          {entries.map((entry, i) => (
            <motion.article
              key={entry.index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="relative"
            >
              {/* Giant ghost numeral */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -top-16 md:-top-20 select-none leading-none ${
                  i % 2 === 0 ? "-left-4 md:-left-10" : "-right-4 md:-right-10"
                }`}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(140px, 18vw, 220px)",
                  color: MOSS,
                  opacity: 0.14,
                }}
              >
                {entry.index}
              </span>

              <div
                className={`grid md:grid-cols-12 gap-10 md:gap-14 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text column */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="md:col-span-4 md:sticky md:top-28 space-y-5"
                >
                  <div
                    className="inline-block px-4 py-1 text-[10px] uppercase font-semibold"
                    style={{ backgroundColor: SUB, color: INK, letterSpacing: "0.24em" }}
                  >
                    {entry.eyebrow}
                  </div>
                  <h3
                    className="text-4xl md:text-5xl leading-[1.05]"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: INK,
                      fontWeight: 500,
                    }}
                  >
                    {entry.title}{" "}
                    {entry.titleItalic && (
                      <span className="italic" style={{ color: MOSS }}>
                        {entry.titleItalic}
                      </span>
                    )}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.8]"
                    style={{ color: `${INK}cc` }}
                  >
                    {entry.description}
                  </p>
                  <div
                    className="pt-5 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${MOSS}55` }}
                  >
                    <span
                      className="text-[11px] font-bold"
                      style={{ color: INK, letterSpacing: "0.22em" }}
                    >
                      EXHIBIT · NO. {entry.index}
                    </span>
                    <span
                      className="text-sm italic"
                      style={{ color: SUB, fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {entry.meta}
                    </span>
                  </div>
                </motion.div>

                {/* Gallery column */}
                <div
                  className={`md:col-span-8 grid gap-6 md:gap-8 ${
                    entry.frames.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {entry.frames.map((f, idx) => (
                    <motion.figure
                      key={idx}
                      variants={fadeUp}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.1 + idx * 0.08 }}
                      className="group relative"
                    >
                      <div
                        className="p-3 md:p-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-[0.5deg]"
                        style={{
                          backgroundColor: CARD,
                          boxShadow: `12px 12px 0 0 ${
                            idx % 2 === 0 ? SUB : MOSS
                          }`,
                        }}
                      >
                        <div
                          className="overflow-hidden"
                          style={{ aspectRatio: f.ratio ?? "4 / 3" }}
                        >
                          <img
                            src={f.src}
                            alt={f.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                          />
                        </div>
                        <figcaption className="mt-3 flex items-center justify-between">
                          <span
                            className="text-[10px] uppercase font-semibold"
                            style={{ color: BG, letterSpacing: "0.22em" }}
                          >
                            Frame · {entry.index}.{idx + 1}
                          </span>
                          <span
                            className="text-[13px] italic"
                            style={{
                              color: `${BG}b3`,
                              fontFamily: "'Cormorant Garamond', serif",
                            }}
                          >
                            {f.caption}
                          </span>
                        </figcaption>
                      </div>
                    </motion.figure>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
