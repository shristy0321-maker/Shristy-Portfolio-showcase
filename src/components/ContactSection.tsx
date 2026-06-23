import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-10">
            Interested in discussing product ideas, opportunities, or collaboration?
          </p>

          <div className="space-y-4 mb-10">
            <a
              href="mailto:shristy1921@gmail.com"
              className="card-elevated p-4 flex items-center gap-4 text-left hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">shristy1921@gmail.com</p>
              </div>
            </a>


            <a
              href="tel:+916203189245"
              className="card-elevated p-4 flex items-center gap-4 text-left hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">+91-6203189245</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shristy-kumari-42634221b"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-4 flex items-center gap-4 text-left hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground">linkedin.com/in/shristy-kumari-42634221b</p>
              </div>
            </a>
          </div>

          <Button variant="hero" size="lg" asChild>
            <a href="mailto:shristy1921@gmail.com">Send a Message</a>
          </Button>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
