import { Mail, Linkedin, Youtube } from "lucide-react";

const links = [
  { label: "EMAIL", icon: Mail, href: "mailto:hello@maksalmina.com" },
  { label: "LINKEDIN", icon: Linkedin, href: "#" },
  { label: "YOUTUBE", icon: Youtube, href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4">CONTACT</p>
        <div className="w-12 h-px bg-primary mx-auto mb-10" />
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
          Let's Collaborate
        </h2>
        <div className="flex items-center justify-center gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <link.icon size={24} strokeWidth={1.5} />
              <span className="font-body text-[11px] tracking-[0.2em]">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-32 border-t border-border pt-8">
          <p className="font-body text-[11px] tracking-[0.1em] text-muted-foreground">
            © 2026 MAKSALMINA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
