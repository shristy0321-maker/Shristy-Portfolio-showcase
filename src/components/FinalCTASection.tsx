import { motion } from "framer-motion";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shristy-kumari-42634221b", external: true },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1SVSClilP8Q2__iAloBsbxeZ7tBYRWhHrBNYgw_BV_C8/edit?usp=sharing",
    external: true,
  },
  { label: "Email", href: "mailto:shristy0321@gmail.com", external: false },
];

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto text-center"
          style={{ maxWidth: "720px" }}
        >
          <div className="editorial-rule mx-auto mb-6" />
          <p className="eyebrow mb-5">Let's Connect</p>

          <h2 className="text-4xl leading-[1.15] text-foreground md:text-6xl">
            The best products start with a conversation.
            <br />
            Let's have one.
          </h2>

          <p
            className="mx-auto mt-6 text-base leading-8 text-muted-foreground md:text-lg"
            style={{ maxWidth: "520px" }}
          >
            Open to Product Management internships, product roles, and meaningful collaborations.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:shristy0321@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 bg-[#F2ECE4] px-9 py-3.5 text-sm font-medium text-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground"
            >
              <span>Let's Connect</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {links.map((link, i) => (
              <div key={link.label} className="flex items-center gap-x-4">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="relative text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
                {i < links.length - 1 && (
                  <span aria-hidden className="text-accent">·</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
