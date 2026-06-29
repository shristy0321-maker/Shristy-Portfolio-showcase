import { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (link: { label: string; href: string }) => {
    const style = { color: "#1a1208", fontSize: 15, fontWeight: 400 } as const;
    const className = "transition-opacity hover:opacity-60";

    if (isHome) {
      return (
        <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={className} style={style}>
          {link.label}
        </a>
      );
    }

    return (
      <Link key={link.href} to={`/${link.href}`} onClick={() => setOpen(false)} className={className} style={style}>
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: "transparent" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between" style={{ height: 72 }}>
        <Link to="/" style={{ color: "#1a1208", fontSize: 16, fontWeight: 500, letterSpacing: "0.01em" }}>
          Shristy Kumari
        </Link>

        <div className="hidden md:flex items-center" style={{ gap: 36 }}>
          {navLinks.map(renderLink)}
        </div>

        <button className="md:hidden" style={{ color: "#1a1208" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-8 py-5 flex flex-col gap-4">
              {navLinks.map(renderLink)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
