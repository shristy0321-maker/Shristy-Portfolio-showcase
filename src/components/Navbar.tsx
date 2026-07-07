import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#case-studies" },
  { label: "Recognition", href: "#recognition" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#bring" },
  { label: "Contact", href: "#contact" },
];

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number, duration = 800) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;
  const step = (ts: number) => {
    if (start === null) start = ts;
    const elapsed = ts - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const RESUME_URL =
  "https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing";

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "#222222",
    position: "relative",
    paddingBottom: 4,
  };

  const handleSectionClick = (href: string) => (e: React.MouseEvent) => {
    const id = href.slice(1);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        smoothScrollTo(top, 800);
        history.replaceState(null, "", href);
      }
    }
    setOpen(false);
  };

  const renderDesktopLink = (link: { label: string; href: string }) => {
    const id = link.href.slice(1);
    const isActive = isHome && activeId === id;
    const style: React.CSSProperties = { ...linkBase, fontWeight: isActive ? 600 : 500 };
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
          onClick={handleSectionClick(link.href)}
          className="nav-link transition-colors hover:text-black"
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
        className="nav-link transition-colors hover:text-black"
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
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #EFEFEF" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            height: 72,
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
              fontSize: 24,
              color: "#111111",
              letterSpacing: "-0.5px",
            }}
          >
            Shristy
          </Link>

          {/* Desktop / tablet nav */}
          <div className="hidden md:flex items-center flex-wrap justify-end" style={{ gap: "clamp(12px, 2vw, 28px)" }}>
            {navLinks.map(renderDesktopLink)}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#111111",
                border: "1px solid #111111",
                borderRadius: 999,
                padding: "9px 18px",
                transition: "all 0.3s ease",
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              color: "#111111",
              background: "transparent",
              border: "none",
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <style>{`
          .resume-btn:hover { background-color: #111111; color: #FFFFFF; }
        `}</style>
      </motion.nav>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 md:hidden flex flex-col"
              style={{
                width: "min(82vw, 340px)",
                height: "100vh",
                backgroundColor: "#FFFFFF",
                paddingTop: 88,
                paddingLeft: 28,
                paddingRight: 28,
                paddingBottom: 32,
                boxShadow: "-12px 0 40px rgba(0,0,0,0.08)",
              }}
            >
              <nav className="flex flex-col" style={{ gap: 4 }}>
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = isHome && activeId === id;
                  const linkEl = isHome ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleSectionClick(link.href)}
                      style={{
                        display: "block",
                        padding: "14px 0",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 20,
                        fontWeight: isActive ? 600 : 500,
                        color: "#111111",
                        minHeight: 44,
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={`/${link.href}`}
                      onClick={() => setOpen(false)}
                      style={{
                        display: "block",
                        padding: "14px 0",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 20,
                        fontWeight: 500,
                        color: "#111111",
                        minHeight: 44,
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                  return linkEl;
                })}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{
                    marginTop: 16,
                    display: "inline-block",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#111111",
                    border: "1px solid #111111",
                    borderRadius: 999,
                    padding: "12px 20px",
                  }}
                >
                  Resume
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
