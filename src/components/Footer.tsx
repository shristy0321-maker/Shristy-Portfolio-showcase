const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground italic">
          "Interested in building meaningful products and solving real user problems."
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Shristy Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
