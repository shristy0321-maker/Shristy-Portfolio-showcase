import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  QrCode,
  Video,
  UserCircle2,
  ShoppingBag,
  GraduationCap,
  Sparkles,
  Users,
  Store,
  HeartHandshake,
  CheckCircle2,
  Eye,
  IndianRupee,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kalavanshCover from "@/assets/kalavansh-editorial.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) => (
  <motion.section
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

const KalaVanshCaseStudy = () => {
  const problems = [
    { icon: Eye, text: "Artisans remain invisible in the value chain — middlemen own the story." },
    { icon: IndianRupee, text: "Craftspeople earn less than 10% of the final product price." },
    { icon: Shield, text: "Unsafe working conditions, burns, and long physical labour hours." },
    { icon: GraduationCap, text: "The next generation is walking away — craft has stopped feeling aspirational." },
  ];

  const personas = [
    {
      icon: Users,
      role: "Rural Artisan",
      pain: "Long hours of manual work, low income, no recognition beyond the middleman.",
      goal: "Fair income, identity, and pride in the craft passed down for generations.",
    },
    {
      icon: HeartHandshake,
      role: "Conscious Buyer",
      pain: "Admires the product but has never met the hands behind it.",
      goal: "Authenticity, connection, and a story worth sharing with every purchase.",
    },
    {
      icon: Store,
      role: "Brand / Retailer",
      pain: "No credible way to prove provenance or transparent sourcing to customers.",
      goal: "A trusted mark that lets buyers meet the maker in seconds.",
    },
  ];

  const insights = [
    "People connect with stories — curiosity triggers the QR scan.",
    "Artisans want identity, not sympathy — recognition changes behaviour.",
    "Craft becomes aspirational the moment it becomes visible.",
    "Local relevance matters — solutions must work on basic smartphones.",
  ];

  const features = [
    { icon: QrCode, title: "QR-based Discovery", desc: "Every product carries a QR label — scan to meet the maker in one tap." },
    { icon: Video, title: "30-Second Maker Stories", desc: "Short, emotional videos that show the craft, the hands, and the human." },
    { icon: UserCircle2, title: "Artisan Identity Profiles", desc: "Name, region, craft, journey — a real profile behind every product." },
    { icon: ShoppingBag, title: "Direct & Custom Orders", desc: "Skip the middleman. Buyers commission work directly from the artisan." },
    { icon: GraduationCap, title: "Workshops for Extra Income", desc: "Immersion sessions that turn skill into a second revenue stream." },
    { icon: Sparkles, title: "Local-First Design", desc: "Regional language, visual-first, works on the phones artisans already have." },
  ];

  const flow = [
    { icon: ShoppingBag, label: "Buyer sees product" },
    { icon: QrCode, label: "Scans QR tag" },
    { icon: Video, label: "Watches maker story" },
    { icon: UserCircle2, label: "Explores artisan profile" },
    { icon: HeartHandshake, label: "Custom order / workshop" },
  ];

  const impact = [
    { icon: IndianRupee, label: "Increased artisan income" },
    { icon: UserCircle2, label: "Identity & recognition" },
    { icon: Sparkles, label: "Skill preservation" },
    { icon: HeartHandshake, label: "Cultural awareness" },
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
              <p className="eyebrow mb-4">Case Study · 04</p>
              <h1
                className="text-5xl leading-[1.02] tracking-[-0.01em] text-foreground md:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                KalaVansh
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Making India's invisible artisans visible — a QR-based platform that connects
                buyers to the hands, stories, and lives behind every handcrafted product.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Culture", "Marketplace", "Product Strategy", "Social Impact", "Field Research"].map((t) => (
                  <span key={t} className="editorial-chip">
                    {t}
                  </span>
                ))}
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Role</dt>
                  <dd className="mt-2 text-base text-foreground">Product Strategy · Field Research · Prototyping</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-2 text-base text-foreground">2026</dd>
                </div>
              </dl>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src={kalavanshCover} alt="KalaVansh cover" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </header>

        {/* OVERVIEW */}
        <Section eyebrow="Section 01" title="Overview">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-9 text-foreground/90">
              KalaVansh is a QR-based platform that lets art enthusiasts and conscious consumers
              connect directly with India's artisans — preserving traditional crafts and actively
              supporting their continuation.
            </p>
            <p className="text-lg leading-9 text-muted-foreground">
              Across 7 million artisans and dozens of craft clusters, the pattern is the same:
              high-value products, invisible makers. KalaVansh flips that — every product becomes a
              doorway to the story, the hands, and the human behind it.
            </p>
          </div>
        </Section>

        {/* WHY IT MATTERS */}
        <Section eyebrow="Section 02" title="Why This Problem Matters">
          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {[
                "7M+ artisans in India, powering a 30,000+ crore market.",
                "Craftspeople capture less than 10% of the final product's value.",
                "Working conditions include burns, cuts, and long unpaid hours.",
                "Younger generations are leaving the craft — heritage is silently disappearing.",
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
                &ldquo;We admire the product… but we have never met the hands behind it.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* PROBLEM */}
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

        {/* KEY INSIGHT */}
        <Section eyebrow="Section 05" title="Key Insight">
          <div className="rounded-3xl border border-accent/40 bg-accent/5 p-10 md:p-16">
            <p
              className="text-2xl leading-snug text-foreground md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              &ldquo;The system values the product — but ignores the maker. Change begins the
              moment the maker becomes visible.&rdquo;
            </p>
          </div>
        </Section>

        {/* FIELD VALIDATION */}
        <Section eyebrow="Section 06" title="Field Validation">
          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((v) => (
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
        <Section eyebrow="Section 07" title="Our Solution">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* HOW IT WORKS */}
        <Section eyebrow="Section 08" title="How It Works">
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

        {/* IMPACT */}
        <Section eyebrow="Section 09" title="Expected Impact">
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
        <Section eyebrow="Section 10" title="Reflection">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <p className="eyebrow mb-6">Lessons Learned</p>
            <ul className="space-y-4 text-base leading-8 text-foreground/90 md:text-lg">
              <li>· Immersion in the field reshapes every assumption made on the whiteboard.</li>
              <li>· Emotional connection is a stronger conversion lever than discounts.</li>
              <li>· Cultural products need cultural distribution — not just e-commerce.</li>
              <li>· Making the invisible visible is the product.</li>
            </ul>
          </div>
        </Section>

        {/* BOTTOM CTA */}
        <section className="section-container pb-24 pt-8 md:pt-12">
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/document/d/14FDe1AvnBQFtGJ15QVGi-_jS7-TjdIfd/edit?usp=sharing&ouid=108846919668098328952&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#1F1A17", color: "#FFFFFF" }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(31,26,23,0.35)]"
            >
              📖 View Full Case Study <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-14 flex justify-center md:mt-20">
            <Link
              to="/projects/meetcraft"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:shadow-lg"
            >
              Explore Next — MeetCraft <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default KalaVanshCaseStudy;
