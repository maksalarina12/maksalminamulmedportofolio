import { ExternalLink } from "lucide-react";
import podcastThumb from "@/assets/podcast-thumb.jpg";
import shortform1 from "@/assets/shortform-thumb1.jpg";
import shortform2 from "@/assets/shortform-thumb2.jpg";
import musicThumb from "@/assets/music-thumb.jpg";

interface PortfolioItem {
  image: string;
  label: string;
  category: string;
  href: string;
  aspect?: string;
}

const items: PortfolioItem[] = [
  {
    image: podcastThumb,
    label: "Professional Ads & Commercial Edits",
    category: "ADS VIDEO",
    href: "https://drive.google.com/drive/folders/1ImIYTjzorUqmxMxNtvgQVT6abSdZmDji?usp=sharing",
    aspect: "aspect-video",
  },
  {
    image: shortform1,
    label: "AI-Powered Clone Content",
    category: "AI CLONE",
    href: "https://drive.google.com/drive/folders/1dCHRQyFZuwoF42qs6MrpBaEr5IflhhlV?usp=sharing",
    aspect: "aspect-[9/14]",
  },
  {
    image: musicThumb,
    label: "Music Video Production & Editing",
    category: "MUSIC VIDEO",
    href: "https://drive.google.com/drive/folders/1v7x8xkicOOY-zp8F5mKkvepR2K6iisFU?usp=drive_link",
    aspect: "aspect-video",
  },
  {
    image: shortform2,
    label: "Short-Form Viral Content",
    category: "SHORT VIDEO",
    href: "https://drive.google.com/drive/folders/1fusGI_LwuqZaWB_2tXhKVJOqlQs_dw-R?usp=drive_link",
    aspect: "aspect-[9/14]",
  },
  {
    image: podcastThumb,
    label: "Long-Form YouTube Content",
    category: "YOUTUBE LONG VIDEO",
    href: "https://drive.google.com/drive/folders/160_V25aKE5kAeREzsazJO7Fia6cI-DZI?usp=drive_link",
    aspect: "aspect-video",
  },
  {
    image: shortform1,
    label: "Custom Thumbnail Design",
    category: "THUMBNAIL",
    href: "https://drive.google.com/drive/folders/1oIx4TaeZpOqMCUQ6p7gh4F1W2frT0Dr-?usp=drive_link",
    aspect: "aspect-video",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4">PORTFOLIO</p>
        <div className="w-12 h-px bg-primary mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}
              className="group cursor-pointer block"
            >
              <div className={`relative overflow-hidden ${item.aspect} bg-muted`}>
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 flex items-end p-5 transition-all duration-500">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.1em] text-primary-foreground">
                      View Project <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mb-1">
                  {item.category}
                </p>
                <p className="font-body text-sm text-foreground leading-snug">{item.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
