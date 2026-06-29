import { motion } from "framer-motion";

const rows = [
  {
    label: "BEFORE THE PRODUCT",
    pills: ["User Research", "Competitor Teardowns", "Persona Mapping"],
  },
  {
    label: "WHILE BUILDING",
    pills: ["PRD Writing", "Prototyping", "Prioritization (RICE/MoSCoW)"],
  },
  {
    label: "TAKING IT OUT",
    pills: ["GTM Strategy", "Metrics & KPIs", "Stakeholder Communication"],
  },
  {
    label: "TOOLS",
    pills: ["Figma", "Lovable", "Notion", "Claude", "Aha!"],
  },
];

const WhatIBringSection = () => {
  return (
    <section
      id="bring"
      style={{ backgroundColor: "#eee8db", padding: "100px 0" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-[35%]"
          >
            <div
              style={{
                width: 40,
                height: 1,
                backgroundColor: "#d4c9b8",
                marginBottom: 16,
              }}
            />
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#a89880",
                marginBottom: 16,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Skills
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#1a1208",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              The Shristy Stack
            </h2>
          </motion.div>

          {/* Right column */}
          <div className="md:w-[65%] flex-1">
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "none" : "1px solid #d4c9b8",
                }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "#a89880",
                    minWidth: 160,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    paddingTop: 6,
                  }}
                >
                  {row.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.pills.map((pill) => (
                    <span
                      key={pill}
                      style={{
                        backgroundColor: "#1a1208",
                        color: "#f5f0e8",
                        fontSize: 12,
                        padding: "6px 16px",
                        borderRadius: 999,
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        display: "inline-block",
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
