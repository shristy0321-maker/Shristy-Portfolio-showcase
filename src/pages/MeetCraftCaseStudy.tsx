import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Sparkles,
  Mic,
  Repeat,
  Compass,
  UserPlus,
  Search,
  Handshake,
  Users,
  MessageCircle,
  Trophy,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import meetcraftCover from "@/assets/meetcraft-editorial.jpg";
import certificateAsset from "@/assets/skillathon-certificate.jpg.asset.json";

const EASE = [0.22, 1, 0.36, 1] as const;

const GOOGLE_DOC_URL =
  "https://docs.google.com/document/d/1uuuVuGiyEb5UGOvFW0IrqEi8NbRt6nMY/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true";

const CERTIFICATE_URL = "#"; // Replace with hosted certificate URL when available

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={{ hidden: {}, visible: {} }}
    className="section-container py-16 md:py-24"
  >
    {eyebrow && (
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6, ease: EASE }}
        className="eyebrow mb-3"
      >
        {eyebrow}
      </motion.p>
    )}
    {title && (
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        className="mb-10 max-w-3xl text-3xl leading-tight text-foreground md:text-5xl"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
      >
        {title}
      </motion.h2>
    )}
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
    >
      {children}
    </motion.div>
  </motion.section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] ${className}`}
  >
    {children}
  </div>
);

const MeetCraftCaseStudy = () => {
  const personas = [
    {
      icon: Users,
      role: "Attendee",
      pain: "Unable to identify meaningful connections in a sea of strangers.",
      goal: "Meet mentors, recruiters and collaborators aligned to their goals.",
    },
    {
      icon: Mic,
      role: "Speaker",
      pain: "Random crowd swarms after every session with unfiltered asks.",
      goal: "Meet only the attendees most relevant to their expertise.",
    },
    {
      icon: Compass,
      role: "Organizer",
      pain: "Networking feels chaotic and impossible to measure.",
      goal: "Increase attendee satisfaction with structured connection data.",
    },
  ];

  const features = [
    { icon: Target, title: "Intent-based Matching", desc: "Attendees declare why they're here — the platform matches accordingly." },
    { icon: Sparkles, title: "Smart Recommendations", desc: "Surfaces the right people based on goals, roles, and interests." },
    { icon: Mic, title: "Speaker Discovery", desc: "Speakers curate who reaches them and when, before and after sessions." },
    { icon: Repeat, title: "Post-event Follow-up", desc: "Turns one-time meetings into long-term professional relationships." },
  ];

  const journey = [
    { icon: Compass, label: "Discover" },
    { icon: UserPlus, label: "Create Profile" },
    { icon: Search, label: "Explore People" },
    { icon: Handshake, label: "Connect" },
    { icon: Users, label: "Collaborate" },
    { icon: MessageCircle, label: "Stay Connected" },
  ];

  const impact = [
    "Higher quality networking",
    "Reduced randomness",
    "Better event satisfaction",
    "Long-term professional relationships",
  ];

  return (
    <>
      <Navbar />

      <article className="pt-24 md:pt-28">
        {/* Back link */}
        <div className="section-container">
          <Link to="/#case-studies" className="editorial-link">
            <ArrowLeft size={15} /> Back to Projects
          </Link>
        </div>

        {/* HERO */}
        <header className="section-container pt-8 pb-14 md:pt-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="grid gap-12 md:grid-cols-12 md:gap-16"
          >
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">Case Study · 01</p>
              <h1
                className="text-5xl leading-[1.02] tracking-[-0.01em] text-foreground md:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                MeetCraft
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Helping professionals build meaningful connections through intent-based networking.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Product Discovery", "User Research", "Networking", "MVP"].map((t) => (
                  <span key={t} className="editorial-chip">
                    {t}
                  </span>
                ))}
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Role</dt>
                  <dd className="mt-2 text-base text-foreground">Product Strategy &amp; Research</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-2 text-base text-foreground">2026</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img
                  src={meetcraftCover}
                  alt="MeetCraft cover"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </header>

        {/* OVERVIEW */}
        <Section eyebrow="Section 01" title="Overview">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              MeetCraft is a networking platform designed to solve one of the biggest problems at
              conferences — helping attendees connect with the right people instead of relying on
              random hallway conversations.
            </p>
            <p className="text-lg leading-9 text-muted-foreground">
              The product focuses on <em>intent-based networking</em>, letting attendees discover
              mentors, collaborators, recruiters, and peers before, during, and after an event —
              turning short encounters into lasting relationships.
            </p>
          </div>
        </Section>

        {/* PROBLEM */}
        <Section eyebrow="Section 02" title="The Problem">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              Conferences promise powerful networking, yet most attendees leave with a stack of
              business cards and no real connections. Serendipity isn't a strategy — and everyone
              in the room pays the price for it.
            </p>
            <ul className="space-y-4">
              {[
                "Networking at conferences is random.",
                "Attendees struggle to identify relevant people.",
                "Speakers receive unstructured requests.",
                "Organizers cannot measure networking success.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base leading-8 text-foreground/90">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* PERSONAS */}
        <Section eyebrow="Section 03" title="User Research">
          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((p) => (
              <Card key={p.role}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl text-foreground" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                  {p.role}
                </h3>
                <div className="mt-5 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Pain</p>
                    <p className="mt-1 text-sm leading-7 text-foreground/85">{p.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Goal</p>
                    <p className="mt-1 text-sm leading-7 text-foreground/85">{p.goal}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* KEY INSIGHT */}
        <Section eyebrow="Section 04" title="Key Insight">
          <div className="rounded-3xl border border-accent/40 bg-accent/5 p-10 md:p-16">
            <p
              className="text-2xl leading-snug text-foreground md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              &ldquo;People don't struggle with networking because they lack interest — they
              struggle because they lack clarity on who the right people are.&rdquo;
            </p>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section eyebrow="Section 05" title="Our Solution">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* JOURNEY */}
        <Section eyebrow="Section 06" title="User Journey">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <ol className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between md:gap-2">
              {journey.map((step, i) => (
                <li key={step.label} className="flex flex-1 items-center gap-4 md:flex-col md:items-center md:gap-3">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
                    <step.icon size={20} />
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Step {i + 1}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{step.label}</p>
                  </div>
                  {i < journey.length - 1 && (
                    <ArrowRight size={16} className="hidden text-muted-foreground md:block" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* VALUE PROP */}
        <Section eyebrow="Section 07" title="Value Proposition">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="eyebrow mb-4">Customer Needs</p>
              <ul className="space-y-3 text-base leading-8 text-foreground/90">
                <li>· Find relevant people</li>
                <li>· Reduce awkward conversations</li>
                <li>· Build meaningful relationships</li>
              </ul>
            </Card>
            <Card className="bg-foreground text-background">
              <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-background/70">MeetCraft Solution</p>
              <ul className="space-y-3 text-base leading-8">
                <li>· AI-powered matching</li>
                <li>· Goal-based networking</li>
                <li>· Event visibility</li>
                <li>· Structured follow-up</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* IMPACT */}
        <Section eyebrow="Section 08" title="Expected Impact">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((i, idx) => (
              <Card key={i}>
                <p
                  className="text-4xl text-accent"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  0{idx + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-foreground/90">{i}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* REFLECTION */}
        <Section eyebrow="Section 09" title="Project Reflection">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <p className="eyebrow mb-6">Lessons Learned</p>
            <ul className="space-y-4 text-base leading-8 text-foreground/90 md:text-lg">
              <li>· Customer discovery is more valuable than assumptions.</li>
              <li>· Great networking products reduce uncertainty.</li>
              <li>· Product thinking starts with understanding user intent.</li>
            </ul>
          </div>
        </Section>

        {/* RECOGNITION CARD (compact) */}
        <div className="section-container flex justify-center py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group w-[260px] rounded-[20px] border border-border bg-card p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Recognition</p>
            <div className="mx-auto flex h-[140px] w-full items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 via-accent/10 to-background">
              <Trophy size={54} className="text-accent" strokeWidth={1.4} />
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">🏆 Skillathon Winner</p>
            <p className="mt-1 text-xs text-muted-foreground">Institute of Product Leadership</p>
          </motion.div>
        </div>

        {/* FINAL CTA */}
        <section className="section-container py-16 md:py-24">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary via-card to-background p-10 text-center md:p-16">
            <h2
              className="mx-auto max-w-2xl text-3xl leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              Want to explore the complete case study?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={GOOGLE_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Full Case Study <ArrowRight size={15} />
              </a>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-muted-foreground opacity-70"
                title="Walkthrough coming soon"
              >
                <PlayCircle size={16} /> Watch Walkthrough
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              Explore Next <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default MeetCraftCaseStudy;
