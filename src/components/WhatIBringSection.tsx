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
    isTools: true,
  },
];

const WhatIBringSection = () => {
  return (
    <section
      id="bring"
      style={{ backgroundColor: "#eee8db", padding: "160px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: 120 }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              backgroundColor: "#c9b896",
              margin: "0 auto 24px",
            }}
          />
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "#a89880",
              marginBottom: 24,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Skills
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
              fontWeight: 500,
              color: "#2a2218",
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.005em",
            }}
          >
            What I Worked With
          </h2>
        </motion.div>

        {/* Horizontal rows */}
        <div>
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              {/* Divider above each row */}
              <div
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#d8c9ad",
                  opacity: 0.55,
                }}
              />

              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
                style={{ padding: "44px 0" }}
              >
                {/* Label */}
                <div className="md:col-span-4">
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.28em",
                      color: "#8a7a62",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      fontFamily: "'Inter Tight', sans-serif",
                    }}
                  >
                    {row.label}
                  </div>
                </div>

                {/* Pills or tool icons */}
                <div className="md:col-span-8">
                  {row.isTools ? (
                    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                      {row.pills.map((tool) => (
                        <ToolIcon key={tool} name={tool} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-x-3 gap-y-3">
                      {row.pills.map((pill) => (
                        <span
                          key={pill}
                          className="editorial-chip-soft"
                          style={{
                            backgroundColor: "#faf6ec",
                            color: "#2a2218",
                            border: "1px solid #cdbf9f",
                            fontSize: 13,
                            padding: "9px 20px",
                            borderRadius: 999,
                            fontWeight: 500,
                            letterSpacing: "0.01em",
                            display: "inline-block",
                            transition:
                              "background-color 0.25s ease, border-color 0.25s ease",
                            fontFamily: "'Inter Tight', sans-serif",
                          }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final divider */}
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#d8c9ad",
              opacity: 0.55,
            }}
          />
        </div>
      </div>

      <style>{`
        .editorial-chip-soft:hover {
          background-color: #f3ecdb !important;
          border-color: #a89262 !important;
        }
      `}</style>
    </section>
  );
};

export default WhatIBringSection;
