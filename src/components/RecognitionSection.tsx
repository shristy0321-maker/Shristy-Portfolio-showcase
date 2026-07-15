import { motion } from "framer-motion";
import { Trophy, Presentation, Lightbulb, type LucideIcon } from "lucide-react";
import skillathonImg from "@/assets/recognition-skillathon.jpg";
import skillathonPresentingImg from "@/assets/recognition-skillathon-presenting.jpg";
import sessionLeadImg from "@/assets/recognition-session-lead.jpg";
import registrationDeskImg from "@/assets/recognition-registration-desk.jpg";
import innovationLabImg from "@/assets/recognition-innovation-lab.jpg";

type Recognition = {
  icon: LucideIcon;
  no: string;
  year: string;
  title: string;
  org: string;
  description: string;
  badge: string;
  images: { src: string; alt: string; caption?: string }[];
};

const items: Recognition[] = [
  {
    icon: Trophy,
    no: "No. 01",
    year: "2026",
    title: "Skillathon Winner",
    org: "Institute of Product Leadership",
    description:
      "Recognized for developing and presenting an end-to-end product solution during IPL's Skillathon — from problem discovery to a validated MVP pitch.",
    badge: "Award · Product Strategy",
    images: [
      { src: skillathonImg, alt: "Receiving the Skillathon Winner award on stage", caption: "Award moment" },
      { src: skillathonPresentingImg, alt: "Presenting the MeetCraft persona slide", caption: "MeetCraft pitch" },
    ],
  },
  {
    icon: Presentation,
    no: "No. 02",
    year: "2026",
    title: "Session Lead",
    org: "ProdXPulse 2026",
    description:
      "Led a Product Management workshop at IPL's flagship product festival — facilitating hands-on sessions and helping deliver a memorable learning experience for attendees.",
    badge: "Speaking · Community",
    images: [
      { src: sessionLeadImg, alt: "Hosting the ProdXPulse registration desk", caption: "Front desk" },
      { src: registrationDeskImg, alt: "Attendees at the ProdXPulse registration desk", caption: "Attendee onboarding" },
    ],
  },
  {
    icon: Lightbulb,
    no: "No. 03",
    year: "2026",
    title: "Innovation Lab · Top 10",
    org: "Global Makhana · Farmer-to-Buyer",
    description:
      "Selected among the Top 10 ideas at the Innovation Lab for solving a real-world farmer-to-buyer problem through customer research, validation, and structured product thinking.",
    badge: "Innovation · Product Discovery",
    images: [
      { src: innovationLabImg, alt: "Pitching the Global Makhana idea at the Innovation Lab", caption: "Envisioning the idea" },
    ],
  },
];

const INK = "#f7f4d5";
const MOSS = "#839958";
const ROSE = "#d3968c";
const TEAL = "#105666";
const BG = "#0a3323";
const BODY = "rgba(247,244,213,0.78)";
const HAIR = "rgba(131,153,88,0.28)";

const serif = "'Cormorant Garamond', Georgia, serif";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const RecognitionSection = () => {
  return (
    <section
      id="recognition"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: BG, color: INK }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
        <div
          className="absolute -left-40 top-24 h-[560px] w-[560px] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${MOSS}, transparent 70%)` }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${ROSE}, transparent 70%)` }}
        />
      </div>

      <div className="section-container relative">
        {/* Editorial header */}
        <motion.div
          {...fadeUp}
          className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10"
          style={{ borderBottom: `1px solid ${HAIR}` }}
        >
          <div>
            <p className="mb-4 text-[11px] uppercase" style={{ color: MOSS, letterSpacing: "0.3em" }}>
              Accolades &amp; Engagements
            </p>
            <h2
              className="leading-[0.92] tracking-tight"
              style={{ fontFamily: serif, color: INK }}
            >
              <span className="block italic font-light text-5xl md:text-8xl">Recognition</span>
              <span className="relative inline-block ml-8 md:ml-24 mt-2 text-5xl md:text-8xl font-semibold" style={{ color: ROSE }}>
                Along the Way
                <span
                  className="absolute -bottom-3 left-0 h-[3px] w-full"
                  style={{ backgroundColor: TEAL }}
                />
              </span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[11px] uppercase" style={{ color: MOSS, letterSpacing: "0.28em" }}>
              2025 — 2026 Archive
            </p>
            <p className="mt-3 max-w-xs text-sm italic" style={{ color: BODY, fontFamily: serif }}>
              Moments — captured on stage, at the desk, and mid-pitch — that shaped my journey into Product.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-48">
          {/* Item 01 — layered depth frames */}
          <RowOne item={items[0]} />
          {/* Item 02 — half-round paired frames */}
          <RowTwo item={items[1]} />
          {/* Item 03 — hero framed spotlight */}
          <RowThree item={items[2]} />
        </div>
      </div>
    </section>
  );
};

/* ---------- Row 01 ---------- */
const RowOne = ({ item }: { item: Recognition }) => {
  const Icon = item.icon;
  return (
    <motion.article {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
      <div className="md:col-span-5 order-2 md:order-1">
        <Meta icon={Icon} label={`${item.no} / ${item.year}`} color={ROSE} />
        <h3 className="mt-6 text-4xl md:text-6xl leading-[1.02]" style={{ fontFamily: serif, color: INK }}>
          {item.title}
          <span className="mt-3 block text-xl md:text-2xl italic font-normal" style={{ color: MOSS }}>
            {item.org}
          </span>
        </h3>
        <p className="mt-6 max-w-md text-[15px] md:text-lg leading-[1.75]" style={{ color: BODY }}>
          {item.description}
        </p>
        <Badge label={item.badge} variant="outline" />
      </div>

      <div className="md:col-span-7 order-1 md:order-2 relative h-[420px] md:h-[520px]">
        <span
          className="pointer-events-none absolute -top-16 -right-4 select-none text-[10rem] md:text-[13rem] leading-none italic opacity-20"
          style={{ fontFamily: serif, color: TEAL }}
        >
          01
        </span>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 h-[80%] w-[80%] overflow-hidden rounded-[6px]"
          style={{ border: `1px solid ${HAIR}` }}
        >
          <img src={item.images[0].src} alt={item.images[0].alt} loading="lazy" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 h-[62%] w-[58%] overflow-hidden rounded-[6px] shadow-2xl"
          style={{ borderWidth: "10px", borderStyle: "solid", borderColor: BG }}
        >
          <img src={item.images[1].src} alt={item.images[1].alt} loading="lazy" className="h-full w-full object-cover" />
          <Caption text={item.images[1].caption!} />
        </motion.div>
      </div>
    </motion.article>
  );
};

/* ---------- Row 02 ---------- */
const RowTwo = ({ item }: { item: Recognition }) => {
  const Icon = item.icon;
  return (
    <motion.article {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
      <div className="md:col-span-7 relative h-[460px] md:h-[520px]">
        <span
          className="pointer-events-none absolute -top-10 -left-6 select-none text-[10rem] md:text-[13rem] leading-none italic opacity-20"
          style={{ fontFamily: serif, color: TEAL }}
        >
          02
        </span>
        <div className="relative grid grid-cols-2 gap-4 md:gap-6 h-full px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 overflow-hidden"
            style={{
              border: `1px solid ${HAIR}`,
              borderTopLeftRadius: "9999px",
              borderTopRightRadius: "9999px",
            }}
          >
            <img src={item.images[0].src} alt={item.images[0].alt} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 overflow-hidden"
            style={{
              border: `1px solid ${HAIR}`,
              borderBottomLeftRadius: "9999px",
              borderBottomRightRadius: "9999px",
            }}
          >
            <img src={item.images[1].src} alt={item.images[1].alt} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>

      <div className="md:col-span-5 md:pl-6">
        <Meta icon={Icon} label={`${item.no} / ${item.year}`} color={ROSE} />
        <h3 className="mt-6 text-4xl md:text-6xl leading-[1.02]" style={{ fontFamily: serif, color: INK }}>
          {item.title}
          <span
            className="mt-3 block text-sm md:text-base font-mono uppercase"
            style={{ color: TEAL, letterSpacing: "0.28em" }}
          >
            {item.org}
          </span>
        </h3>
        <p className="mt-6 text-[15px] md:text-lg leading-[1.75]" style={{ color: BODY }}>
          {item.description}
        </p>
        <Badge label={item.badge} variant="solid" />
      </div>
    </motion.article>
  );
};

/* ---------- Row 03 ---------- */
const RowThree = ({ item }: { item: Recognition }) => {
  const Icon = item.icon;
  return (
    <motion.article {...fadeUp} className="relative flex flex-col items-center">
      <div className="w-full max-w-5xl relative">
        <div
          className="absolute inset-0 -rotate-1 translate-x-4 translate-y-4"
          style={{ backgroundColor: TEAL, opacity: 0.85 }}
        />
        <div
          className="relative overflow-hidden aspect-[16/9] w-full"
          style={{ border: `1px solid rgba(247,244,213,0.18)`, backgroundColor: BG }}
        >
          <img
            src={item.images[0].src}
            alt={item.images[0].alt}
            loading="lazy"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div
              className="max-w-lg p-8 md:p-10 text-center backdrop-blur-md"
              style={{
                backgroundColor: "rgba(10,51,35,0.82)",
                border: `1px solid ${HAIR}`,
              }}
            >
              <div className="flex justify-center mb-5">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ border: `1px solid ${ROSE}`, color: ROSE }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase mb-3" style={{ color: MOSS, letterSpacing: "0.3em" }}>
                {item.no} / {item.year}
              </p>
              <h3 className="text-3xl md:text-5xl leading-tight" style={{ fontFamily: serif, color: INK }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm italic" style={{ color: ROSE, fontFamily: serif }}>
                {item.org}
              </p>
              <p className="mt-5 text-[14px] md:text-[15px] leading-[1.75]" style={{ color: BODY }}>
                {item.description}
              </p>
              <div className="mt-6 flex justify-center">
                <Badge label={item.badge} variant="outline" />
              </div>
            </div>
          </div>
          <div className="absolute left-4 bottom-3 font-mono text-[10px] uppercase" style={{ color: INK, letterSpacing: "0.28em", opacity: 0.7 }}>
            {item.images[0].caption}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ---------- Shared bits ---------- */
const Meta = ({ icon: Icon, label, color }: { icon: LucideIcon; label: string; color: string }) => (
  <div className="flex items-center gap-4">
    <span
      className="flex h-11 w-11 items-center justify-center rounded-full"
      style={{ border: `1px solid ${color}`, color }}
    >
      <Icon size={18} strokeWidth={1.6} />
    </span>
    <span className="font-mono text-[11px] uppercase" style={{ color: MOSS, letterSpacing: "0.3em" }}>
      {label}
    </span>
  </div>
);

const Badge = ({ label, variant }: { label: string; variant: "solid" | "outline" }) =>
  variant === "solid" ? (
    <div
      className="mt-8 inline-flex items-center px-4 py-2 text-[10px] uppercase font-semibold"
      style={{ backgroundColor: ROSE, color: BG, letterSpacing: "0.24em" }}
    >
      {label}
    </div>
  ) : (
    <div
      className="mt-8 inline-flex items-center px-4 py-2 text-[10px] uppercase"
      style={{ border: `1px solid ${ROSE}`, color: ROSE, letterSpacing: "0.24em" }}
    >
      {label}
    </div>
  );

const Caption = ({ text }: { text: string }) => (
  <div
    className="absolute left-3 bottom-3 rounded-full px-3 py-1 text-[10px] uppercase backdrop-blur-md"
    style={{ backgroundColor: "rgba(10,51,35,0.6)", color: INK, letterSpacing: "0.22em" }}
  >
    {text}
  </div>
);

export default RecognitionSection;
