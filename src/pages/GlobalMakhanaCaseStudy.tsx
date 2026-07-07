import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Coffee,
  Globe,
  Sprout,
  Factory,
  Package,
  Truck,
  ShieldCheck,
  Leaf,
  Rocket,
  Star,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import globalMakhanaCover from "@/assets/global-makhana-editorial.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

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

const GlobalMakhanaCaseStudy = () => {
  const problems = [
    { icon: Sprout, text: "Farmers earn low margins despite producing the world's best makhana." },
    { icon: Globe, text: "Export buyers face inconsistent quality and unreliable supply." },
    { icon: Coffee, text: "Cafés have limited healthy, ready-to-sell snack options." },
    { icon: ShieldCheck, text: "Consumers struggle to find trusted premium makhana brands." },
  ];

  const personas = [
    {
      icon: Users,
      role: "Healthy Consumer",
      pain: "Limited healthy snack choices in mainstream retail.",
      goal: "Healthy, guilt-free snacking they can trust.",
    },
    {
      icon: Coffee,
      role: "Café Owner",
      pain: "No healthy ready-to-sell snacks that fit the menu.",
      goal: "Increase revenue with healthier, higher-margin alternatives.",
    },
    {
      icon: Globe,
      role: "Export Buyer",
      pain: "Inconsistent quality and fragmented sourcing.",
      goal: "Reliable, export-grade sourcing at scale.",
    },
  ];

  const validation = [
    "Healthy snack demand is real and growing across metros.",
    "Café owners are open to healthier alternatives on the menu.",
    "Product visibility strongly influences purchase decisions.",
    "Customer interviews validated the ecosystem opportunity.",
  ];

  const solution = [
    { icon: Handshake, title: "Direct Farmer Partnerships", desc: "Sourcing straight from Mithila's makhana farmers at fair prices." },
    { icon: Factory, title: "Premium Processing", desc: "In-house roasting, grading, and flavour development." },
    { icon: Coffee, title: "Café-first Distribution", desc: "Land in cafés where healthy snacking decisions happen." },
    { icon: Package, title: "Export-ready Packaging", desc: "Compliance-ready formats built for global buyers." },
    { icon: Truck, title: "Traceable Supply Chain", desc: "Every pack traceable back to the pond it came from." },
    { icon: Leaf, title: "Farm-to-Pack Brand", desc: "One story from farmer to shelf — no middlemen in the middle." },
  ];

  const flow = [
    { icon: Sprout, label: "Farmers" },
    { icon: Factory, label: "Processing" },
    { icon: Leaf, label: "Branding" },
    { icon: Truck, label: "Distribution" },
    { icon: Globe, label: "Cafés / Corporate / Export" },
  ];

  const roadmap = [
    { phase: "Phase 1", label: "Cafés", desc: "Land the first premium café placements in Tier 1 cities." },
    { phase: "Phase 2", label: "Corporate Offices & Cinema Halls", desc: "Expand into high-footfall consumption points." },
    { phase: "Phase 3", label: "Exports", desc: "Ship export-grade makhana to global buyers via B2B platforms." },
  ];

  const highlights = [
    { icon: Rocket, title: "Innovation Lab Project", desc: "Built inside the Institute of Product Leadership's Innovation Lab." },
    { icon: Star, title: "Top 10 in the Batch", desc: "Selected among the Top 10 ideas of the batch." },
    { icon: Sprout, title: "Currently Building", desc: "Actively iterating with farmers, cafés, and early buyers." },
    { icon: CheckCircle2, title: "Validated in the Field", desc: "Grounded in real customer interviews and market research." },
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
              <p className="eyebrow mb-4">Case Study · 03</p>
              <h1
                className="text-5xl leading-[1.02] tracking-[-0.01em] text-foreground md:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                Global Makhana
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Building a premium farm-to-pack makhana brand by connecting Bihar's farmers with
                global markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Innovation Lab", "Entrepreneurship", "Product Strategy", "GTM", "B2B"].map((t) => (
                  <span key={t} className="editorial-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-medium text-foreground">
                🚀 Innovation Lab Project · Top 10 Selected · Currently Building
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Role</dt>
                  <dd className="mt-2 text-base text-foreground">Founder · Product Strategy · Market Research</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-2 text-base text-foreground">2026 – Present</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src={globalMakhanaCover} alt="Global Makhana cover" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </header>

        {/* OVERVIEW */}
        <Section eyebrow="Section 01" title="Project Overview">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              Global Makhana is an Innovation Lab venture focused on transforming Bihar's most
              iconic superfood into a premium global brand.
            </p>
            <p className="text-lg leading-9 text-muted-foreground">
              The idea combines direct farmer sourcing, premium processing, B2B distribution, and
              export-ready branding to solve problems across the agricultural value chain — creating
              greater value for farmers, businesses, and consumers alike.
            </p>
          </div>
        </Section>

        {/* WHY THIS MATTERS */}
        <Section eyebrow="Section 02" title="Why This Problem Matters">
          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {[
                "Bihar produces nearly 90% of India's makhana.",
                "Farmers receive limited value despite producing the world's highest-quality makhana.",
                "Export buyers struggle with inconsistent quality.",
                "Cafés and consumers lack premium healthy snack options.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base leading-8 text-foreground/90">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-accent/40 bg-accent/5 p-8 md:p-10">
              <p
                className="text-xl leading-snug text-foreground md:text-2xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                &ldquo;I wanted to explore how product thinking could create value not only for
                customers but for the entire ecosystem — from farmers to global buyers.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* PROBLEM CARDS */}
        <Section eyebrow="Section 03" title="The Problem">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <Card key={p.text}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <p.icon size={20} />
                </div>
                <p className="mt-6 text-sm leading-7 text-foreground/90">{p.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* PERSONAS */}
        <Section eyebrow="Section 04" title="Customer Research">
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

        {/* MARKET VALIDATION */}
        <Section eyebrow="Section 05" title="Market Validation">
          <div className="grid gap-6 md:grid-cols-2">
            {validation.map((v) => (
              <Card key={v}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-base leading-8 text-foreground/90">{v}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* SOLUTION */}
        <Section eyebrow="Section 06" title="Solution">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solution.map((f) => (
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

        {/* BUSINESS MODEL FLOW */}
        <Section eyebrow="Section 07" title="Business Model">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <ol className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between md:gap-2">
              {flow.map((step, i) => (
                <li key={step.label} className="flex flex-1 items-center gap-4 md:flex-col md:items-center md:gap-3">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
                    <step.icon size={20} />
                  </div>
                  <div className="flex-1 md:text-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Step {i + 1}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{step.label}</p>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowRight size={16} className="hidden text-muted-foreground md:block" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* GROWTH ROADMAP */}
        <Section eyebrow="Section 08" title="Growth Roadmap">
          <div className="grid gap-6 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <Card key={r.phase}>
                <p
                  className="text-4xl text-accent"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  0{i + 1}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">{r.phase}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{r.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{r.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* PROJECT HIGHLIGHTS */}
        <Section eyebrow="Section 09" title="Project Highlights">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <Card key={h.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <h.icon size={20} />
                </div>
                <h3 className="mt-6 text-base font-medium text-foreground">{h.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{h.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* REFLECTION */}
        <Section eyebrow="Section 10" title="Reflection">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <p className="eyebrow mb-6">Lessons Learned</p>
            <ul className="space-y-4 text-base leading-8 text-foreground/90 md:text-lg">
              <li>· Customer interviews reshape assumptions.</li>
              <li>· Product strategy must align with business strategy.</li>
              <li>· Solving ecosystem problems creates long-term value.</li>
              <li>· Building products requires continuous validation.</li>
            </ul>
          </div>
        </Section>

        {/* BOTTOM CTA */}
        <section className="section-container pb-24 pt-8 md:pt-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://docs.google.com/document/d/1P8T-7mcWWwQYeDC9fh1Px7-ja3XrjHDZ/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true"
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
              Explore Next — KalaVansh <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default GlobalMakhanaCaseStudy;
