import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "What I Bring", href: "#bring" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (link: { label: string; href: string }) => {
    if (isHome) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={`/${link.href}`}
        onClick={() => setOpen(false)}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-lg font-bold text-primary">
          SK
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(renderLink)}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navLinks.map(renderLink)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
