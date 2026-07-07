import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Languages,
  Mail,
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Store,
  Megaphone,
  Handshake,
  BarChart3,
  Zap,
  MessageCircle,
  Target,
  Trophy,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mailnitiCover from "@/assets/mailniti-editorial.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const GOOGLE_DOC_URL = "#"; // Replace when link is provided
const CERTIFICATE_URL = "#";

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
      <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: EASE }} className="eyebrow mb-3">
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
    <motion.div variants={fadeUp} transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}>
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

const MailNitiCaseStudy = () => {
  const personas = [
    {
      icon: Users,
      role: "Solopreneur",
      pain: "Managing every customer email manually eats into building time.",
      goal: "Save time and respond faster without hiring a team.",
    },
    {
      icon: Store,
      role: "SME Owner",
      pain: "Missed leads and inconsistent follow-ups leak revenue every week.",
      goal: "Improve customer conversion with reliable, consistent outreach.",
    },
    {
      icon: Megaphone,
      role: "Marketing Manager",
      pain: "Low email engagement and no bandwidth for regional campaigns.",
      goal: "Automate campaigns and lift conversion across languages.",
    },
  ];

  const features = [
    { icon: Languages, title: "Regional Language AI", desc: "Compose and reply in Hindi, Tamil, Bengali and more — natively." },
    { icon: Mail, title: "Email Automation", desc: "Trigger-based sequences that follow up while you focus on the business." },
    { icon: Sparkles, title: "AI Personalization", desc: "Every message tuned to the recipient's intent, tone, and history." },
    { icon: Rocket, title: "10-Minute Onboarding", desc: "Set up the first automated flow before your chai gets cold." },
  ];

  const gtm = [
    { icon: TrendingUp, title: "Product-led Growth", desc: "Free tier that proves value in the first workflow, before any sales call." },
    { icon: Megaphone, title: "Regional Marketing", desc: "Vernacular content and creators in Tier 2 and Tier 3 cities." },
    { icon: Handshake, title: "SME Partnerships", desc: "Bundles with local accounting, CRM, and commerce partners." },
    { icon: BarChart3, title: "Performance Marketing", desc: "Sharp, ROI-tracked funnels across Meta, Google, and WhatsApp." },
  ];

  const opportunity = [
    { stat: "63M+", label: "MSMEs in India" },
    { stat: "<10%", label: "have email automation" },
    { stat: "AI ↑", label: "Rapid SME AI adoption" },
    { stat: "22+", label: "Regional language opportunity" },
  ];

  const impact = [
    { icon: Zap, label: "Faster Follow-ups" },
    { icon: TrendingUp, label: "Higher Email Engagement" },
    { icon: Target, label: "Reduced Manual Work" },
    { icon: MessageCircle, label: "Better SME Adoption" },
  ];

  return (
    <>
      <Navbar />

      <article className="pt-24 md:pt-28">
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
              <p className="eyebrow mb-4">Case Study · 02</p>
              <h1
                className="text-5xl leading-[1.02] tracking-[-0.01em] text-foreground md:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                MailNiti
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                AI-powered email automation platform built specifically for Indian SMEs.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["AI Product", "SaaS", "GTM Strategy", "Product Marketing"].map((t) => (
                  <span key={t} className="editorial-chip">
                    {t}
                  </span>
                ))}
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Role</dt>
                  <dd className="mt-2 text-base text-foreground">Product Strategy &amp; Go-to-Market</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-2 text-base text-foreground">2026</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src={mailnitiCover} alt="MailNiti cover" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </header>

        {/* OVERVIEW */}
        <Section eyebrow="Section 01" title="Overview">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              MailNiti is an AI-powered email automation platform designed specifically for Indian
              SMEs — the small businesses that keep the country's economy moving but rarely get
              tools built for them.
            </p>
            <p className="text-lg leading-9 text-muted-foreground">
              The product helps businesses automate follow-ups, communicate in regional languages,
              and improve customer engagement — without requiring any technical expertise or a
              dedicated marketing team.
            </p>
          </div>
        </Section>

        {/* PROBLEM */}
        <Section eyebrow="Section 02" title="The Problem">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              Most Indian SMEs still run their customer communication out of a personal inbox.
              Leads slip, follow-ups vanish, and existing tools are priced for enterprise buyers in
              English-speaking markets — leaving the majority of the market underserved.
            </p>
            <ul className="space-y-4">
              {[
                "SMEs manually manage emails.",
                "Missed follow-ups reduce conversions.",
                "Existing tools are expensive and enterprise-focused.",
                "Language barriers reduce adoption.",
                "Email automation adoption among Indian SMEs remains low.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base leading-8 text-foreground/90">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* MARKET OPPORTUNITY */}
        <Section eyebrow="Section 03" title="Market Opportunity">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opportunity.map((o) => (
              <Card key={o.label}>
                <p
                  className="text-4xl text-accent md:text-5xl"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  {o.stat}
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground/85">{o.label}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* PERSONAS */}
        <Section eyebrow="Section 04" title="User Research">
          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((p) => (
              <Card key={p.role}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <p.icon size={22} />
                </div>
                <h3
                  className="mt-6 text-2xl text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
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
        <Section eyebrow="Section 05" title="Key Insight">
          <div className="rounded-3xl border border-accent/40 bg-accent/5 p-10 md:p-16">
            <p
              className="text-2xl leading-snug text-foreground md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              &ldquo;Indian SMEs need simple, affordable, regional-language AI — not enterprise
              software.&rdquo;
            </p>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section eyebrow="Section 06" title="Our Solution">
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

        {/* GTM STRATEGY */}
        <Section eyebrow="Section 07" title="Go-to-Market Strategy">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gtm.map((g) => (
              <Card key={g.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <g.icon size={20} />
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">{g.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{g.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* IMPACT */}
        <Section eyebrow="Section 08" title="Expected Impact">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((i) => (
              <Card key={i.label}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <i.icon size={20} />
                </div>
                <p className="mt-6 text-base leading-7 text-foreground/90">{i.label}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* REFLECTION */}
        <Section eyebrow="Section 09" title="Project Reflection">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <p className="eyebrow mb-6">Lessons Learned</p>
            <ul className="space-y-4 text-base leading-8 text-foreground/90 md:text-lg">
              <li>· Building for SMEs requires simplicity over complexity.</li>
              <li>· Localization creates a strong competitive advantage.</li>
              <li>· Product strategy and GTM must work together.</li>
              <li>· AI delivers value only when it solves real customer problems.</li>
            </ul>
          </div>
        </Section>

        {/* BOTTOM CTA */}
        <section className="section-container pb-24 pt-8 md:pt-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://docs.google.com/document/d/1jHynLmZARJLMfyIIx8uz67pbDqB9P-hm/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Full Case Study <ArrowRight size={15} />
            </a>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:shadow-lg"
            >
              Explore Next — Global Makhana <ArrowRight size={15} />
            </Link>
          </div>
        </section>

      </article>

      <Footer />
    </>
  );
};

export default MailNitiCaseStudy;
