const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>Built with a story-first product lens.</p>
        <p>© {new Date().getFullYear()} Shristy Kumari</p>
      </div>
    </footer>
  );
};

export default Footer;
