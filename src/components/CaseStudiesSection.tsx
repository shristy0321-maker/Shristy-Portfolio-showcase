import { motion } from "framer-motion";
import { ExternalLink, Download, Trophy, Network, Sprout, Mail, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
  badge?: string;
  icon: any;
  gradient: string;
  presentationUrl?: string;
  reportUrl?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "MeetCraft",
    summary:
      "Structured networking platform that turns chaotic events into 3x more meaningful follow-ups via intent matching and AI-drafted recaps.",
    tags: ["Product Discovery", "MVP", "User Research"],
    badge: "Skillathon Winner",
    icon: Network,
    gradient: "from-indigo-500 via-blue-500 to-cyan-400",
    presentationUrl: "#",
    reportUrl: "#",
  },
  {
    title: "Global Makhana",
    summary:
      "Farm-to-pack premium makhana brand built around traceable sourcing, in-house grading, and B2B marketplace distribution.",
    tags: ["Entrepreneurship", "GTM", "Supply Chain"],
    icon: Sprout,
    gradient: "from-emerald-500 via-teal-500 to-lime-400",
    presentationUrl: "/presentations/global-makhana.pptx",
    reportUrl: "#",
  },
  {
    title: "MailNiti",
    summary:
      "GTM strategy for an AI email automation tool built for Bharat — INR pricing, regional language fluency, SME-tuned templates.",
    tags: ["Go-To-Market", "Positioning", "Market Analysis"],
    icon: Mail,
    gradient: "from-fuchsia-500 via-pink-500 to-rose-400",
    presentationUrl: "#",
    reportUrl: "#",
  },
  {
    title: "Passenger Journey Transformation",
    summary:
      "Airline Passenger 360° platform unifying booking, loyalty, and ops data to power proactive disruption comms and faster recovery.",
    tags: ["Platform Thinking", "Digital Transformation"],
    icon: Plane,
    gradient: "from-amber-500 via-orange-500 to-red-400",
    presentationUrl: "#",
    reportUrl: "#",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
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
            Selected Product Work
          </h2>
          <p className="text-muted-foreground">
            A snapshot of recent product, GTM, and platform case studies — each with a deck and a detailed report.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <motion.article
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group card-elevated overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Cover */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${cs.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(0,0,0,0.15))]" />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
                      <Icon className="text-white" size={22} />
                    </div>
                    {cs.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-xs font-medium text-foreground shadow-sm">
                        <Trophy size={12} className="text-accent" />
                        {cs.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight drop-shadow">
                      {cs.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cs.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {cs.presentationUrl && (
                      <Button asChild size="sm" className="flex-1 min-w-[140px]">
                        <a href={cs.presentationUrl} target="_blank" rel="noreferrer">
                          <ExternalLink size={14} className="mr-1.5" />
                          View Presentation
                        </a>
                      </Button>
                    )}
                    {cs.reportUrl && (
                      <Button asChild size="sm" variant="outline" className="flex-1 min-w-[140px]">
                        <a href={cs.reportUrl} download>
                          <Download size={14} className="mr-1.5" />
                          Download Report
                        </a>
                      </Button>
                    )}
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

export default CaseStudiesSection;
