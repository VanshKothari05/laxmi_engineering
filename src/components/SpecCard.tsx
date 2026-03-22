import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  serial: string;
}

const SpecCard = ({ icon: Icon, title, description, serial }: SpecCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="spec-card bg-secondary border border-border p-8 relative"
    >
      <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground tracking-wider">
        {serial}
      </span>
      <Icon className="text-primary mb-4" size={32} />
      <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default SpecCard;
