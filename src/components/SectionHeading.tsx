import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <span className="mono-label mb-3 block">{tag}</span>
      <div className="accent-bar mb-6" />
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
