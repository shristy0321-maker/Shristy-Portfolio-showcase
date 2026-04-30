import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Trophy,
  Target,
  Users,
  AlertTriangle,
  Lightbulb,
  Brain,
  Layers,
  FileText,
  GitBranch,
  ListOrdered,
  CalendarRange,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Section = { icon: any; heading: string; content?: string; bullets?: string[] };

type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  badge?: string;
  featured?: boolean;
  presentationUrl?: string;
  sections: Section[];
};

const projects: Project[] = [
  {
    title: "MeetCraft",
    subtitle: "Structured Networking for Professionals · MVP Case Study",
    badge: "🏆 Skillathon Winner – Institute of Product Leadership",
    featured: true,
    tags: ["Product Discovery", "User Research", "PRD", "MVP"],
    sections: [
      {
        icon: Target,
        heading: "Problem Statement",
        content:
          "Professionals attend dozens of networking events but walk away with stacks of business cards and zero meaningful relationships. Unstructured formats and missing follow-up tools make networking high-effort, low-ROI.",
      },
      {
        icon: Users,
        heading: "Target Users",
        bullets: [
          "Career Switcher — needs targeted intros to a new industry",
          "Startup Founder — hunting for investors, co-founders, early hires",
          "Corporate Professional — building peer network for career mobility",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Pain Points",
        bullets: [
          "78% of interviewed professionals called events 'inefficient'",
          "No way to filter the room by intent or industry",
          "Follow-ups die in inbox chaos within 72 hours",
          "Introverts opt out entirely — random mingling doesn't work for them",
        ],
      },
      {
        icon: Lightbulb,
        heading: "Solution",
        content:
          "A mobile-first networking layer that matches attendees by intent, gives them a structured 5-minute conversation script, and auto-drafts the follow-up message before they leave the venue.",
      },
      {
        icon: Brain,
        heading: "Product Thinking",
        bullets: [
          "Why this: structure converts intent into action — random mingling doesn't",
          "Trade-off: chose intent-matching over AI bio-matching for MVP (cheaper, faster to validate)",
          "Did NOT build: in-app video, gamification, paid event hosting — all distract from the core loop",
        ],
      },
      {
        icon: Layers,
        heading: "Features Breakdown",
        bullets: [
          "Intent tags at signup → drives matching engine",
          "Structured 5-min conversation prompts → reduces awkwardness",
          "Auto-generated follow-up draft → 3x higher follow-up rate",
          "Post-event connection scorecard → loop closure",
        ],
      },
      {
        icon: FileText,
        heading: "PRD Summary",
        content:
          "Goal: increase quality follow-ups per event by 3x. Success metrics: % of matches that exchange contact, % of follow-ups sent within 24h, NPS from event organizers. Scope locked via MoSCoW; out-of-scope items documented to prevent feature creep.",
      },
      {
        icon: GitBranch,
        heading: "User Flow",
        bullets: [
          "Signup → set 3 intent tags → join active event",
          "Receive curated match list (top 5 by intent overlap)",
          "Tap match → get conversation prompts → meet in person",
          "Post-meet: rate connection → app drafts follow-up email",
        ],
      },
      {
        icon: ListOrdered,
        heading: "Feature Prioritization (RICE)",
        bullets: [
          "Intent matching — Reach 9 · Impact 9 · Confidence 8 · Effort 5 → MVP",
          "Auto follow-up draft — R 9 · I 8 · C 7 · E 3 → MVP",
          "Conversation prompts — R 8 · I 7 · C 8 · E 2 → MVP",
          "Gamification badges — R 6 · I 4 · C 5 · E 6 → Deferred",
        ],
      },
      {
        icon: CalendarRange,
        heading: "Execution Plan",
        bullets: [
          "MVP scope: signup, matching, prompts, follow-up draft (4 weeks)",
          "Sprint 1: auth + intent tagging · Sprint 2: matching engine",
          "Sprint 3: conversation flow · Sprint 4: follow-up + analytics",
          "Dependencies: event organizer partnership for pilot, email API",
        ],
      },
      {
        icon: Sparkles,
        heading: "How I used AI (ChatGPT)",
        bullets: [
          "Drafted PRD v0 from raw notes → cut writing time by 60%",
          "Synthesized 20+ interview transcripts into persona themes",
          "Generated edge cases for the matching algorithm I'd missed",
          "Used GPT to simulate the follow-up email tone for 3 personas",
        ],
      },
    ],
  },
  {
    title: "Global Makhana",
    subtitle: "Premium Farm-to-Pack Makhana Brand · Entrepreneurial Venture",
    tags: ["Entrepreneurship", "B2B", "Go-To-Market", "Supply Chain"],
    presentationUrl: "/presentations/global-makhana.pptx",
    sections: [
      {
        icon: Target,
        heading: "Problem Statement",
        content:
          "Bihar produces 90% of the world's makhana, yet farmers earn poverty wages, exporters get inconsistent quality, and consumers can't find a trusted premium brand.",
      },
      {
        icon: Users,
        heading: "Target Users",
        bullets: [
          "Export buyers (US, UAE, UK) seeking export-grade snacks",
          "Urban Indian consumers wanting premium healthy snacks",
          "B2B distributors on TradeIndia & IndiaMART",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Pain Points",
        bullets: [
          "Inconsistent grading from unorganized sellers",
          "No traceability from farm to pack",
          "Limited flavour variety in the premium segment",
          "Farmers locked out of export-margin economics",
        ],
      },
      {
        icon: Lightbulb,
        heading: "Solution",
        content:
          "A vertically integrated makhana brand: direct sourcing from Bihar farmers, in-house roasting & grading, export-ready packaging, and a flavoured product line — listed on global B2B marketplaces.",
      },
      {
        icon: Brain,
        heading: "Product Thinking",
        bullets: [
          "Why now: makhana classified as superfood + plant-based snack boom",
          "Trade-off: started B2B (TradeIndia, IndiaMART) before D2C — faster cash cycle",
          "Did NOT build: own e-commerce site at launch — leveraged marketplaces for distribution",
        ],
      },
      {
        icon: Layers,
        heading: "Features Breakdown",
        bullets: [
          "Direct farmer partnership → margin + traceability",
          "In-house roasting & grading → consistent export quality",
          "Multi-marketplace listings → global reach without sales team",
          "Plain · Roasted · Flavoured SKU ladder → broader basket",
        ],
      },
      {
        icon: ListOrdered,
        heading: "Feature Prioritization (MoSCoW)",
        bullets: [
          "Must: sourcing pipeline, grading SOP, B2B listings",
          "Should: flavour variants, export packaging",
          "Could: D2C site, subscription box",
          "Won't (yet): private label, retail chain distribution",
        ],
      },
      {
        icon: CalendarRange,
        heading: "Execution Plan",
        bullets: [
          "Phase 1: lock farmer contracts + grading SOP",
          "Phase 2: list on TradeIndia & IndiaMART, fulfil first 10 orders",
          "Phase 3: launch flavoured SKUs, target export inquiries",
          "Dependencies: FSSAI cert, export packaging supplier, logistics partner",
        ],
      },
      {
        icon: Sparkles,
        heading: "How I used AI",
        bullets: [
          "Researched export market sizing & competitor SKUs via ChatGPT",
          "Drafted product copy & B2B listing descriptions",
          "Generated FAQ scripts for buyer negotiation calls",
        ],
      },
    ],
  },
  {
    title: "MailNiti — GTM Strategy",
    subtitle: "AI-Powered Email Automation for Indian SMEs · Marketing Plan",
    tags: ["Go-To-Market", "Market Analysis", "Positioning"],
    sections: [
      {
        icon: Target,
        heading: "Problem Statement",
        content:
          "Indian SMEs, startups, and solopreneurs lack affordable AI email automation tools that understand regional languages and the local SME context.",
      },
      {
        icon: Users,
        heading: "Target Users",
        bullets: [
          "Tier-2/3 SME owners running on WhatsApp + email",
          "Bootstrapped startups needing lifecycle email without a marketer",
          "Solopreneurs (coaches, D2C founders) doing their own email",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Pain Points",
        bullets: [
          "Mailchimp/HubSpot pricing is dollar-based, breaks INR budgets",
          "No regional language templates that don't sound machine-translated",
          "Generic global templates miss Indian buyer triggers (festivals, GST cycles)",
        ],
      },
      {
        icon: Lightbulb,
        heading: "Solution",
        content:
          "Position MailNiti as the first AI email tool built for Bharat — INR pricing, regional language fluency, and templates tuned to Indian buying behaviour.",
      },
      {
        icon: Brain,
        heading: "Product Thinking",
        bullets: [
          "Why this wedge: language + price are defensible vs global incumbents",
          "Trade-off: narrow ICP (Indian SME) over broad global launch — wins category",
          "Did NOT build: enterprise tier — distracts from PLG motion",
        ],
      },
      {
        icon: Layers,
        heading: "GTM Levers",
        bullets: [
          "Founder-led content on LinkedIn + regional creator partnerships",
          "Free template gallery → email capture → product trial",
          "WhatsApp community for SME founders → activation channel",
          "Freemium tier capped at 500 contacts to drive upgrade",
        ],
      },
      {
        icon: ListOrdered,
        heading: "Channel Prioritization (RICE)",
        bullets: [
          "LinkedIn founder content — highest confidence, lowest cost",
          "Regional creator partnerships — high reach, medium effort",
          "Paid Google ads — deferred until CAC is proven",
        ],
      },
      {
        icon: CalendarRange,
        heading: "Launch Plan",
        bullets: [
          "Month 1: pre-launch waitlist + template gallery",
          "Month 2: beta with 50 SMEs, capture testimonials",
          "Month 3: public launch on Product Hunt India + WhatsApp groups",
        ],
      },
      {
        icon: Sparkles,
        heading: "How I used AI",
        bullets: [
          "Used ChatGPT for competitor teardown (Mailchimp, Brevo, Zoho)",
          "Generated 30+ regional template drafts in Hindi & Tamil",
          "Drafted positioning statements and tested 5 variants",
        ],
      },
    ],
  },
  {
    title: "Digital Passenger Journey Transformation",
    subtitle: "Airline Industry · Platform & Systems Case Study",
    tags: ["Platform Thinking", "Process Mapping", "Digital Transformation"],
    sections: [
      {
        icon: Target,
        heading: "Problem Statement",
        content:
          "Airline passengers face fragmented experiences across booking, delays, baggage, and complaints — driven by siloed operations and legacy systems with no shared customer view.",
      },
      {
        icon: Users,
        heading: "Target Users",
        bullets: [
          "Frequent business flyers needing real-time disruption updates",
          "Leisure travellers needing baggage + complaint clarity",
          "Airline ops + customer service teams stuck on legacy tools",
        ],
      },
      {
        icon: AlertTriangle,
        heading: "Pain Points",
        bullets: [
          "Disruption comms lag the actual event by 30+ minutes",
          "Baggage status invisible until landing",
          "Loyalty data, complaint data, ops data live in different systems",
        ],
      },
      {
        icon: Lightbulb,
        heading: "Solution",
        content:
          "A Passenger 360° platform that unifies booking, loyalty, complaints, and operational data into a single customer view — powering proactive comms and faster service recovery.",
      },
      {
        icon: Brain,
        heading: "Product Thinking",
        bullets: [
          "Platform-first: build the shared data backbone before surface features",
          "Trade-off: invest 6 months in integration before any visible UI win",
          "Did NOT build: new mobile app — extended existing one to avoid adoption tax",
        ],
      },
      {
        icon: Layers,
        heading: "Solution Pillars",
        bullets: [
          "Shared Customer Insights layer",
          "Unified Digital Platform (web + app)",
          "Operational Backbone with real-time event bus",
          "Governance Framework + Ecosystem partner APIs",
        ],
      },
      {
        icon: ListOrdered,
        heading: "Frameworks Applied",
        bullets: [
          "Agile Scrum for delivery cadence",
          "Lean Six Sigma for ops process redesign",
          "WBS + Gantt + RACI for cross-team accountability",
        ],
      },
      {
        icon: CalendarRange,
        heading: "Roadmap",
        bullets: [
          "Q1: data backbone + Passenger 360° schema",
          "Q2: proactive disruption comms MVP",
          "Q3: baggage real-time visibility",
          "Q4: ecosystem APIs for partner airlines + lounges",
        ],
      },
      {
        icon: Sparkles,
        heading: "How I used AI",
        bullets: [
          "Mapped passenger journey states using ChatGPT to brainstorm edge cases",
          "Drafted RACI matrix variants for cross-functional review",
          "Synthesized airline industry reports into a 1-page brief",
        ],
      },
    ],
  },
];

const SectionBlock = ({ s }: { s: Section }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
      <s.icon size={16} className="text-accent" />
    </div>
    <div className="flex-1">
      <h4 className="font-display font-semibold text-foreground mb-2">{s.heading}</h4>
      {s.content && (
        <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
      )}
      {s.bullets && (
        <ul className="space-y-1.5">
          {s.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="text-accent mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Featured Product Work
          </h2>
          <p className="text-muted-foreground">
            Each case study walks through problem, users, solution, execution artifacts, and how
            AI accelerated the work.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`card-elevated overflow-hidden ${
                  project.featured ? "ring-1 ring-accent/30" : ""
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        {project.featured && (
                          <span className="chip-accent">
                            <Trophy size={12} /> Featured
                          </span>
                        )}
                        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                      {project.badge && (
                        <p className="mt-2 text-xs font-medium text-accent">{project.badge}</p>
                      )}
                    </div>
                    <Button
                      variant={isOpen ? "ghost" : "default"}
                      size="sm"
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="shrink-0"
                    >
                      {isOpen ? "Collapse" : "View Case Study"}
                      <ArrowRight
                        size={14}
                        className={`ml-1 transition-transform ${isOpen ? "rotate-90" : ""}`}
                      />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="border-t border-border pt-8 mt-6 grid md:grid-cols-2 gap-x-10 gap-y-7"
                    >
                      {project.sections.map((s) => (
                        <SectionBlock key={s.heading} s={s} />
                      ))}
                      {project.presentationUrl && (
                        <div className="md:col-span-2 pt-4 border-t border-border">
                          <a
                            href={project.presentationUrl}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                          >
                            <Download size={16} />
                            Download Presentation Deck
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
