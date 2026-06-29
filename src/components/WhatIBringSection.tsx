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
      style={{ backgroundColor: "#eee8db", padding: "120px 0" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: 80 }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              backgroundColor: "#d4c9b8",
              margin: "0 auto 20px",
            }}
          />
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "#a89880",
              marginBottom: 20,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Skills
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 600,
              color: "#1a1208",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            What I Worked With
          </h2>
        </motion.div>

        {/* Four editorial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                backgroundColor: "#faf6ec",
                border: "1px solid #e4dccb",
                borderRadius: 4,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                minHeight: 240,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 18,
                    color: "#a89880",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "#e4dccb",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "#a89880",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {row.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {row.pills.map((pill) => (
                  <span
                    key={pill}
                    style={{
                      backgroundColor: "#1a1208",
                      color: "#f5f0e8",
                      fontSize: 12,
                      padding: "7px 16px",
                      borderRadius: 999,
                      fontWeight: 500,
                      letterSpacing: "0.04em",
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
    </section>
  );
};

export default WhatIBringSection;
