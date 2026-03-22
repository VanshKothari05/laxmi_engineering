import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  index: number;
}

const AnimatedCounter = ({ value, label, index }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Parse the numeric part and suffix
  const numericMatch = value.match(/^([\d.]+)(.*)$/);
  const targetNum = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;

      if (isDecimal) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(isDecimal ? targetNum.toFixed(1) : targetNum.toString());
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 150);

    return () => clearTimeout(timeout);
  }, [isInView, targetNum, isDecimal, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative text-center md:text-left group"
    >
      {/* Background glow on hover */}
      <div className="absolute -inset-4 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="flex items-baseline gap-1 justify-center md:justify-start">
        <span className="font-display text-5xl md:text-6xl font-bold text-primary tabular-nums leading-none">
          {displayValue}
        </span>
        <span className="font-display text-3xl md:text-4xl font-bold text-primary/70">
          {suffix}
        </span>
      </div>
      <div className="w-8 h-px bg-primary/40 mt-3 mb-2 mx-auto md:mx-0" />
      <p className="text-muted-foreground text-xs font-mono tracking-[0.15em] uppercase">
        {label}
      </p>
    </motion.div>
  );
};

export default AnimatedCounter;
