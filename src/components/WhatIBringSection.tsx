import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

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
    pills: ["Figma", "Lovable", "Notion", "Claude", "Aha!", "Canva"],
    isTools: true,
  },
];

// Brand SVGs — official marks, kept simple and color-true
const BRAND_ICONS: Record<string, JSX.Element> = {
  Figma: (
    <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  ),
  Lovable: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="Lovable">
      <path
        fill="#ff4d8d"
        d="M23.2 5.3c-2.9 0-5.5 1.6-7.2 4-1.7-2.4-4.3-4-7.2-4C4.4 5.3 1 8.8 1 13.2c0 8.6 11.7 14.7 14.5 16a1.2 1.2 0 0 0 1 0c2.8-1.3 14.5-7.4 14.5-16 0-4.4-3.4-7.9-7.8-7.9z"
      />
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Notion">
      <path
        fill="#0f0f0f"
        d="M4.46 2.27 14.9 1.5c1.28-.1 1.6-.03 2.4.56l3.33 2.35c.55.4.74.51.74.95v12.9c0 .8-.29 1.27-1.3 1.34l-12.13.74c-.77.04-1.14-.07-1.55-.59l-2.46-3.2c-.45-.6-.63-1.05-.63-1.58V3.86c0-.66.3-1.21 1.16-1.59zm10.65 2.3c-.8-.06-.99 0-1.45.37l-3.4 2.7c-.1.1-.05.13.04.14l4.1-.25c.7-.04.85-.16.85-.5l-.04-2.32c0-.13-.05-.14-.1-.14zM4.86 5.46v12.8c0 .35.18.48.59.46l13.3-.78c.4-.02.45-.27.45-.55V4.74c0-.27-.1-.41-.34-.39l-13.9.83c-.07.01-.1.07-.1.28zm12.95.85c.04.2 0 .4-.2.42l-.64.13v9.42c-.56.3-1.07.47-1.5.47-.7 0-.88-.22-1.4-.87l-4.27-6.73v6.5l1.32.3s0 .76-1.07.76l-2.94.17c-.09-.17 0-.59.3-.67l.77-.21V7.3l-1.07-.09c-.08-.4.13-.96.74-1l3.16-.21 4.36 6.66V6.79l-1.1-.13c-.08-.5.27-.85.71-.88l2.83-.15z"
      />
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Claude">
      <path
        fill="#d97757"
        d="M6.36 16.32 9.94 14.3l.06-.18-.06-.1H9.77l-.6-.04-2.06-.06-1.79-.07-1.73-.1-.43-.1L0 13.13l.03-.27.36-.24.51.04 1.13.08 1.7.12 1.23.07 1.83.2h.29l.04-.12-.1-.07-.08-.07-1.78-1.2-1.92-1.27-1-.73-.55-.37-.27-.34-.12-.75.5-.55.65.05.16.04.66.5 1.4 1.09 1.84 1.35.27.22.1-.08.02-.05-.12-.2-1-1.81-1.07-1.84-.47-.76-.13-.46a2.2 2.2 0 0 1-.08-.54L4.94 0l.3-.1.74.1.31.27.46 1.05 1.13 2.51 1.76 3.43.51 1.02.28.94.1.29h.18V9.4l.16-2.18.3-2.68.3-3.45.1-.97.5-1.2.97-.65.76.36.62.9-.09.57-.37 2.4-.72 3.74-.47 2.5h.27l.31-.31 1.25-1.66 2.1-2.63 1-1.06.97-.93.62-.49h1.18l.87 1.3-.39 1.34-1.22 1.55-1.01 1.3-1.44 1.93-.9 1.55.08.13.22-.02 3.33-.7 1.8-.34 2.15-.36.97.46.11.46-.39.94-2.31.57-2.7.54-4.02.95-.05.04.06.07 1.81.17 2.92-.18 1.78-.05.92-.14 1.16.6-.43.94-1.92.5-2.7-.55-3.51-.83h-.18l.01.11 1.79.99 4 4.42.07.94-.52.74-.55-.08-3.55-2.67-1.37-1.2-3.1-2.61h-.2l-.02.15.71 1.04 3.78 5.69.2 1.74-.28.58-1 .35-1.08-.2-2.23-3.13-2.3-3.52-1.87-3.17-.22.13-1.1 11.85-.52.6-1.2.46-.99-.76-.53-1.21.53-2.4.63-3.13.51-2.49.46-3.09.27-1.02-.02-.07L5.7 21.05l-1.43.36-1.07-.34-.4-.61-.04-.46.36-.55 2.5-3.13z"
      />
    </svg>
  ),
  "Aha!": (
    <svg viewBox="0 0 64 24" xmlns="http://www.w3.org/2000/svg" aria-label="Aha!">
      <text
        x="0"
        y="19"
        fontFamily="'Inter Tight', sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#0066ff"
        letterSpacing="-0.5"
      >
        Aha!
      </text>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Canva">
      <defs>
        <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c4cc" />
          <stop offset="100%" stopColor="#7d2ae8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#canvaGrad)" />
      <path
        fill="#ffffff"
        d="M16.4 14.6c-.1-.1-.2-.1-.3 0-.9 1.1-2 1.8-3.2 1.8-2.1 0-3.4-1.9-3.4-4.2 0-2.5 1.3-4.6 3.1-4.6.8 0 1.3.5 1.3 1.1 0 .5-.3.8-.3 1.1 0 .5.4.9 1 .9.8 0 1.4-.7 1.4-1.7 0-1.4-1.3-2.5-3.3-2.5-3.3 0-5.5 2.7-5.5 5.9 0 3.3 2.1 5.6 5.2 5.6 1.8 0 3.4-.9 4.1-2.8.1-.2 0-.5-.1-.6z"
      />
    </svg>
  ),
};

const ToolIcon = ({ name }: { name: string }) => {
  const icon = BRAND_ICONS[name];
  if (!icon) return null;
  return (
    <span
      className="tool-icon"
      aria-label={name}
      title={name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        width: name === "Aha!" ? "auto" : 32,
        transition: "transform 0.28s ease, opacity 0.28s ease",
        opacity: 0.88,
      }}
    >
      {icon}
    </span>
  );
};


const WhatIBringSection = () => {
  return (
    <section
      id="bring"
      style={{ background: "linear-gradient(180deg, #F7F4D5 0%, #ece9c0 100%)" }}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Decorative rotating asterisk */}
      <svg
        aria-hidden
        className="pointer-events-none absolute animate-[spin_28s_linear_infinite]"
        style={{ top: "8%", right: "6%", width: 120, height: 120, opacity: 0.4 }}
        viewBox="0 0 100 100"
      >
        <g stroke="#0a3323" strokeWidth="2" strokeLinecap="round">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            return (
              <line
                key={i}
                x1={50 + Math.cos(a) * 15}
                y1={50 + Math.sin(a) * 15}
                x2={50 + Math.cos(a) * 42}
                y2={50 + Math.sin(a) * 42}
              />
            );
          })}
        </g>
        <circle cx="50" cy="50" r="8" fill="#0a3323" />
      </svg>

      {/* Corner dashed circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          bottom: "-80px",
          left: "-80px",
          width: 260,
          height: 260,
          border: "1px dashed rgba(10,51,35,0.35)",
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl md:mb-24"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-10" style={{ background: "#0a3323" }} />
            <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.32em", color: "#0a3323" }}>
              Chapter 04 · Toolkit
            </p>
          </div>
          <h2
            className="text-5xl leading-[0.98] md:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, letterSpacing: "-0.015em", color: "#0A3323" }}
          >
            The kit I <span style={{ fontStyle: "italic", color: "#0a3323" }}>reach for</span>
            <br />
            through the product lifecycle.
          </h2>
        </motion.div>

        {/* Rows */}
        <div className="grid gap-4 md:gap-6">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-6 md:p-8"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(10,51,35,0.15)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10">
                {/* Step number + label */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      background: "#0a3323",
                      color: "#F7F4D5",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: 18,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.22em",
                      color: "#0A3323",
                      textTransform: "uppercase",
                      fontWeight: 600,
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
                            backgroundColor: "#F7F4D5",
                            color: "#0A3323",
                            border: "1px solid rgba(10,51,35,0.25)",
                            fontSize: 13,
                            padding: "9px 20px",
                            borderRadius: 999,
                            fontWeight: 500,
                            letterSpacing: "0.01em",
                            display: "inline-block",
                            transition: "background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
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
        </div>
      </div>

      <style>{`
        .editorial-chip-soft:hover {
          background-color: #0a3323 !important;
          color: #F7F4D5 !important;
          border-color: #0a3323 !important;
          transform: translateY(-2px);
        }
        .tool-icon svg { height: 100%; width: auto; display: block; }
        .tool-icon:hover {
          transform: translateY(-2px) scale(1.03);
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default WhatIBringSection;
