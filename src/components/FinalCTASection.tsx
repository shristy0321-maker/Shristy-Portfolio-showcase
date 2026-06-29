const FinalCTASection = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#0f0a06",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="mx-auto px-6 text-center"
        style={{ maxWidth: "700px" }}
      >
        <div
          style={{
            color: "#a89880",
            fontSize: "24px",
            marginBottom: "32px",
            lineHeight: 1,
          }}
        >
          ✳
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#f5f0e8",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          The best products start with a conversation.
          <br />
          Let's have one.
        </h2>

        <p
          style={{
            color: "#a89880",
            fontSize: "15px",
            letterSpacing: "0.05em",
            marginBottom: "48px",
          }}
        >
          Open to PM internships, product roles, and collaborations.
        </p>

        <a
          href="mailto:shristy0321@gmail.com"
          style={{
            display: "inline-block",
            backgroundColor: "#f5f0e8",
            color: "#1a1208",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "0.08em",
            padding: "14px 40px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ede8df")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f5f0e8")}
        >
          Let's Connect
        </a>

        <div
          className="flex justify-center"
          style={{ marginTop: "40px", gap: "32px" }}
        >
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/shristy-kumari-42634221b" },
            {
              label: "Resume",
              href: "https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#a89880",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a89880")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
