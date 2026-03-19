import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Digital Passenger Journey Transformation",
    subtitle: "Airline Industry – Product Case Study",
    tags: ["Product Discovery", "Process Mapping", "Digital Transformation"],
    sections: [
      { heading: "Problem", content: "Airline passengers face key pain points such as flight delays, poor disruption communication, and baggage handling issues, leading to fragmented and frustrating travel experiences." },
      { heading: "Analysis", content: "Conducted analysis of the airline passenger journey to identify operational, technology, and process gaps including legacy systems, siloed operations, and lack of real-time operational visibility." },
      { heading: "Proposed Solution", content: "Designed a Passenger 360° customer insights platform integrating booking, loyalty, complaints, and operational data to create a unified view of each passenger." },
      { heading: "Transformation Roadmap", content: "Proposed a digital transformation roadmap covering Shared Customer Insights, Digital Platform, Operational Backbone, Governance Framework, and Ecosystem integration." },
      { heading: "Frameworks Applied", content: "Applied project management frameworks including Agile Scrum, Lean Six Sigma, Process Mapping, WBS, Gantt Charts, and RACI Matrix to structure implementation." },
    ],
  },
  {
    title: "MailNiti – GTM Strategy",
    subtitle: "AI-Powered Email Automation – Marketing & Go-To-Market Plan",
    tags: ["Go-To-Market", "Market Analysis", "Competitor Research"],
    sections: [
      { heading: "Problem", content: "Indian SMEs, startups, and solopreneurs lack affordable, AI-driven email automation tools with regional language support tailored to the Indian market." },
      { heading: "Market Research", content: "Conducted market and competitor analysis to identify differentiation opportunities in the AI email automation space for the Indian SME segment." },
      { heading: "Value Proposition", content: "Defined a value proposition focusing on AI-driven personalization and regional language support to serve Indian SMEs more effectively than existing global solutions." },
      { heading: "GTM Strategy", content: "Proposed customer acquisition channels and marketing campaigns to drive early product adoption among SMEs, startups, and solopreneurs in India." },
    ],
  },
  {
    title: "VLLP Foods",
    subtitle: "B2B Sourcing & Distribution – Entrepreneurial Venture",
    tags: ["Entrepreneurship", "Operations", "B2B"],
    sections: [
      { heading: "Overview", content: "Founded and managed a B2B sourcing and distribution business, handling end-to-end operations from procurement to customer fulfillment." },
      { heading: "Operations", content: "Handled procurement, vendor negotiation, quality control, and customer fulfillment across multiple B2B channels." },
      { heading: "Process Improvement", content: "Improved operational efficiency by implementing structured processes for order management, inventory tracking, and vendor coordination." },
      { heading: "Key Learnings", content: "Gained hands-on experience in supply chain management, stakeholder negotiation, and building scalable operational workflows from scratch." },
    ],
  },
  {
    title: "MeetCraft",
    subtitle: "Structured Networking Solution",
    tags: ["Product Discovery", "User Research", "MVP Design"],
    sections: [
      { heading: "Problem", content: "Professionals struggle to build meaningful connections at networking events due to unstructured formats and lack of follow-up tools." },
      { heading: "User Research", content: "Conducted interviews with 20+ professionals across industries. Found that 78% felt networking events were inefficient and lacked structure." },
      { heading: "Personas", content: "Created 3 key personas: The Career Switcher (seeking targeted connections), The Startup Founder (seeking investors/co-founders), and The Corporate Professional (seeking industry peers)." },
      { heading: "Problem Statement", content: "How might we help professionals create structured, meaningful connections at networking events that lead to lasting professional relationships?" },
      { heading: "Proposed MVP Solution", content: "A mobile-first platform that uses interest matching, structured conversation prompts, and automated follow-ups to transform networking experiences." },
      { heading: "Key Learnings", content: "Validated that users prioritize quality over quantity in networking. Discovered that structured formats increase follow-up rates by 3x compared to traditional events." },
    ],
  },
];

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Case Studies</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Deep dives into real product challenges, research, and solution design.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-elevated overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={18} className="text-primary" />
                      <h3 className="font-display font-bold text-xl text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                    className="shrink-0"
                  >
                    {expandedProject === i ? "Collapse" : "View Case Study"}
                    <ArrowRight size={14} className={`ml-1 transition-transform ${expandedProject === i ? "rotate-90" : ""}`} />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedProject === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-border pt-6 mt-4 space-y-6"
                  >
                    {project.sections.map((section) => (
                      <div key={section.heading}>
                        <h4 className="font-display font-semibold text-foreground mb-2">{section.heading}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
