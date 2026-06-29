import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://docs.google.com/document/d/1A1ZRcoT7HX-G9eu5ZbVfYx2sNg9_t0Yh/edit?usp=sharing";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const linkBase: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "#222222",
    position: "relative",
    paddingBottom: 4,
  };

  const renderLink = (link: { label: string; href: string }) => {
    const id = link.href.slice(1);
    const isActive = isHome && activeId === id;
    const className = "nav-link transition-colors hover:text-black";
    const style: React.CSSProperties = {
      ...linkBase,
      fontWeight: isActive ? 600 : 500,
    };

    const content = (
      <>
        {link.label}
        <span
          className="nav-underline"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            height: 1,
            backgroundColor: "#111111",
            width: isActive ? "100%" : 0,
            transition: "width 0.3s ease",
          }}
        />
      </>
    );

    if (isHome) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className={className}
          style={style}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={`/${link.href}`}
        onClick={() => setOpen(false)}
        className={className}
        style={style}
      >
        {content}
      </Link>
    );
  };

  return (
    <>
      <style>{`
        .nav-link:hover .nav-underline { width: 100% !important; }
      `}</style>
      <nav
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            height: 80,
            maxWidth: 1200,
            paddingLeft: "clamp(16px, 4vw, 40px)",
            paddingRight: "clamp(16px, 4vw, 40px)",
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#111111",
              letterSpacing: "-0.5px",
            }}
          >
            Shristy
          </Link>

          <div className="flex items-center flex-wrap justify-end" style={{ gap: "clamp(16px, 3vw, 40px)" }}>
            {navLinks.map(renderLink)}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111111",
                border: "1px solid #111111",
                borderRadius: 999,
                padding: "10px 20px",
                transition: "all 0.3s ease",
              }}
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden"
            style={{ color: "#111111" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
        </div>

        <style>{`
          .resume-btn:hover { background-color: #111111; color: #FFFFFF; }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
