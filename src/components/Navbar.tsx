const navLinks = ['ABOUT', 'PORTFOLIO', 'TOOLS', 'CONTACT'] as const;

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a href="#" className="font-heading text-lg font-bold tracking-[0.2em] text-foreground">
          MAKSALMINA
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
