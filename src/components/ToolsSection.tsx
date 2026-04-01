import { Film, Music, Palette, Scissors, MonitorPlay, Headphones, Video } from "lucide-react";

const tools = [
  { name: "Premiere Pro", icon: Film },
  { name: "After Effects", icon: Palette },
  { name: "DaVinci Resolve", icon: MonitorPlay },
  { name: "CapCut Pro", icon: Scissors },
  { name: "FL Studio", icon: Music },
  { name: "Adobe Audition", icon: Headphones },
  { name: "Filmora", icon: Video },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-32 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4">
          TOOLS & SOFTWARE
        </p>
        <div className="w-12 h-px bg-primary mb-16" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-4 p-6 bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <tool.icon
                size={28}
                strokeWidth={1.5}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
              />
              <span className="font-body text-[11px] tracking-[0.1em] text-muted-foreground text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
