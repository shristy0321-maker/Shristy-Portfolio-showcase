import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    const baseClass =
      "text-sm text-muted-foreground transition-colors hover:text-foreground";

    if (isHome) {
      return (
        <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={baseClass}>
          {link.label}
        </a>
      );
    }

    return (
      <Link key={link.href} to={`/${link.href}`} onClick={() => setOpen(false)} className={baseClass}>
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="section-container flex h-18 items-center justify-between">
        <Link to="/" className="text-base font-medium tracking-[0.18em] text-foreground uppercase">
          shristy
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(renderLink)}
          <Button variant="resume" size="sm" asChild>
            <a
              href="https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
            <div className="section-container py-5 flex flex-col gap-4">
              {navLinks.map(renderLink)}
              <Button variant="resume" size="sm" asChild>
                <a
                  href="https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Resume <ArrowUpRight size={14} />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
