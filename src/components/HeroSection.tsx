import portrait from "@/assets/portrait.jpg";
import logo from "@/assets/logo_maksalmina.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="animate-fade-up">
            <img src={logo} alt="Maksalmina Logo" className="w-10 h-auto mb-6 opacity-70" />
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-6">
              CREATIVE VIDEO EDITOR
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground">
              PORTOFOLIO
              <br />
              <span className="text-primary">MAKSALMINA</span>
            </h1>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#portfolio"
                className="font-body text-xs tracking-[0.15em] font-medium bg-primary text-primary-foreground px-8 py-3 hover:opacity-90 transition-opacity"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                className="font-body text-xs tracking-[0.15em] font-medium text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                CONTACT
              </a>
              <a
                href="https://drive.google.com/file/d/1EOiBK47qVnRGcaimmnIwebPBwFY66Gwi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.15em] font-medium text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                CV
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="animate-fade-up [animation-delay:200ms] opacity-0 flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[400px] lg:w-[440px]">
              <div className="absolute -inset-4 bg-primary/5 -z-10" />
              <img
                src={portrait}
                alt="Maksalmina - Creative Video Editor"
                width={440}
                height={600}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
