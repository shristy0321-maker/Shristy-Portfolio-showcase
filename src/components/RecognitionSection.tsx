import { motion } from "framer-motion";
import { Trophy, Presentation, Lightbulb, LucideIcon, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import skillathonImg from "@/assets/recognition-skillathon.jpg";
import skillathonPresentingImg from "@/assets/recognition-skillathon-presenting.jpg";
import sessionLeadImg from "@/assets/recognition-session-lead.jpg";
import registrationDeskImg from "@/assets/recognition-registration-desk.jpg";
import innovationLabImg from "@/assets/recognition-innovation-lab.jpg";

type Recognition = {
  icon: LucideIcon;
  title: string;
  org: string;
  description: string;
  meta: string;
  year: string;
  images: { src: string; alt: string; caption?: string }[];
  accent: string; // moss green shade
};

const items: Recognition[] = [
  {
    icon: Trophy,
    title: "Skillathon Winner",
    org: "Institute of Product Leadership",
    description:
      "Recognized for developing and presenting an end-to-end product solution during IPL's Skillathon — from problem discovery to a validated MVP pitch.",
    meta: "Award · Product Strategy",
    year: "2026",
    images: [
      { src: skillathonImg.url, alt: "Receiving the Skillathon Winner award on stage", caption: "Award moment" },
      { src: skillathonPresentingImg.url, alt: "Presenting the MeetCraft persona slide during Skillathon", caption: "MeetCraft pitch" },
    ],
    accent: "#c7e05a",
  },
  {
    icon: Presentation,
    title: "Session Lead",
    org: "ProdXPulse 2026",
    description:
      "Led a Product Management workshop at IPL's flagship product festival — facilitating hands-on sessions and helping deliver a memorable learning experience for attendees.",
    meta: "Leadership · Community",
    year: "2026",
    images: [
      { src: sessionLeadImg.url, alt: "Hosting the ProdXPulse registration desk", caption: "Front desk · ProdXPulse" },
      { src: registrationDeskImg.url, alt: "Attendees at the ProdXPulse registration desk", caption: "Attendee onboarding" },
    ],
    accent: "#f4c9a6",
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab · Top 10",
    org: "Idea Selected",
    description:
      "Selected among the Top 10 ideas at the Innovation Lab for solving a real-world farmer-to-buyer problem through customer research, validation, and structured product thinking.",
    meta: "Innovation · Product Discovery",
    year: "2026",
    images: [
      { src: innovationLabImg.url, alt: "Pitching the Global Makhana idea at the Innovation Lab", caption: "Envisioning the idea" },
    ],
    accent: "#a8d5c0",
  },
];

const INK = "#f7f4d5";
const SUB = "#d3968c";
const BODY = "#ece9c0";
const BORDER = "rgba(200,148,148,0.30)";

const RecognitionSection = () => {
  return (
    <section
      id="recognition"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#0a3323" }}
    >
      {/* Decorative background flourishes */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute -left-32 top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(closest-side, #839958, transparent 70%)" }}
        />
        <div
          className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(closest-side, #d3968c, transparent 70%)" }}
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

        <div className="mt-4 space-y-14 md:space-y-20">
          {items.map((item, i) => {
            const Icon = item.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 md:grid-cols-12 md:gap-10"
                style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "3.5rem" }}
              >
                {/* Text column */}
                <div
                  className={`md:col-span-5 ${reverse ? "md:order-2" : ""} flex flex-col`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ backgroundColor: item.accent, color: "#0a3323" }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span
                      className="text-xs uppercase"
                      style={{ color: "#839958", letterSpacing: "0.28em" }}
                    >
                      {item.year} · No. 0{i + 1}
                    </span>
                  </div>

                  <h3
                    className="mt-6 text-[2rem] leading-[1.05] md:text-[2.75rem]"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: INK,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm" style={{ color: SUB }}>
                    {item.org}
                  </p>

                  <p
                    className="mt-6 max-w-md text-[15px] leading-[1.8]"
                    style={{ color: BODY }}
                  >
                    {item.description}
                  </p>

                  <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
                    style={{ border: `1px solid ${BORDER}`, color: SUB }}>
                    <Sparkles size={13} />
                    <span className="text-[11px] uppercase" style={{ letterSpacing: "0.22em" }}>
                      {item.meta}
                    </span>
                  </div>
                </div>

                {/* Image collage column */}
                <div className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
                  <div className="relative">
                    {item.images.length === 1 ? (
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-[28px]"
                        style={{ border: `1px solid ${BORDER}`, aspectRatio: "4 / 3" }}
                      >
                        <img
                          src={item.images[0].src}
                          alt={item.images[0].alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3 backdrop-blur-md"
                          style={{ backgroundColor: "rgba(10,51,35,0.55)" }}
                        >
                          <span className="text-xs" style={{ color: BODY, letterSpacing: "0.14em" }}>
                            {item.images[0].caption}
                          </span>
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: item.accent }}
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <div className="grid grid-cols-5 gap-4">
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.4 }}
                          className="col-span-3 relative overflow-hidden rounded-[28px]"
                          style={{ border: `1px solid ${BORDER}`, aspectRatio: "4 / 5" }}
                        >
                          <img
                            src={item.images[0].src}
                            alt={item.images[0].alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <div
                            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase backdrop-blur-md"
                            style={{
                              backgroundColor: "rgba(10,51,35,0.55)",
                              color: BODY,
                              letterSpacing: "0.2em",
                            }}
                          >
                            {item.images[0].caption}
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          className="col-span-2 relative overflow-hidden rounded-[28px] self-end"
                          style={{
                            border: `1px solid ${BORDER}`,
                            aspectRatio: "3 / 4",
                            marginBottom: "2rem",
                          }}
                        >
                          <img
                            src={item.images[1].src}
                            alt={item.images[1].alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <div
                            className="absolute left-3 bottom-3 rounded-full px-3 py-1 text-[10px] uppercase backdrop-blur-md"
                            style={{
                              backgroundColor: "rgba(10,51,35,0.55)",
                              color: BODY,
                              letterSpacing: "0.2em",
                            }}
                          >
                            {item.images[1].caption}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Decorative accent dot */}
                    <span
                      className="absolute -top-3 -right-3 h-6 w-6 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
