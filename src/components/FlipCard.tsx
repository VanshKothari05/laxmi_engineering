import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";

interface FlipCardProps {
  image: string;
  name: string;
  tag: string;
  description: string;
  index: number;
}

const FlipCard = ({ image, name, tag, description, index }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="aspect-[4/5] [perspective:1200px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden border border-border">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Top tag */}
          <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between">
            <span className="bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
              {tag}
            </span>
            <motion.div
              animate={{ rotate: isFlipped ? 0 : 0 }}
              className="w-8 h-8 border border-foreground/20 flex items-center justify-center bg-background/30 backdrop-blur-sm"
            >
              <ArrowUpRight size={14} className="text-foreground/70" />
            </motion.div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="w-8 h-0.5 bg-primary mb-3" />
            <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">
              {name}
            </h3>
            <p className="text-muted-foreground text-xs font-mono tracking-wider mt-1 uppercase">
              Hover to explore →
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-border overflow-hidden">
          {/* Blurred background image */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-15 blur-sm scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-background/90" />
          
          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-px bg-primary" />
            <div className="absolute top-0 left-0 w-px h-full bg-primary" />
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12">
            <div className="absolute bottom-0 right-0 w-full h-px bg-primary" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-primary" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center">
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-4">
              {tag}
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground tracking-tight mb-4">
              {name}
            </h3>
            <div className="w-10 h-px bg-primary mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-[260px]">
              {description}
            </p>
            <Link
              to="/products"
              className="group/link inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-primary/90 transition-all"
            >
              View Details 
              <ChevronRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
