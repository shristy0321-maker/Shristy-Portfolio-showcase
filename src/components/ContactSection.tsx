import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "shristy1921@gmail.com",
    href: "mailto:shristy1921@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6203189245",
    href: "tel:+916203189245",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shristy-kumari-42634221b",
    href: "https://www.linkedin.com/in/shristy-kumari-42634221b",
    external: true,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="editorial-rule mb-8" />
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="text-4xl leading-tight md:text-5xl">Open to thoughtful product conversations.</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            For opportunities, collaborations, or product discussions, reach out directly.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group border-t border-border py-5"
            >
              <item.icon size={18} className="text-accent" />
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
              <p className="mt-3 text-base leading-7 text-foreground transition-colors group-hover:text-accent">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
