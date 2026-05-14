import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import heroImage from "@/assets/hero-products.jpg";
import { getProductHubConfig } from "@/data/productHubs";
import NotFound from "./NotFound";

type Props = { hubSlug: "oil-burners" | "industrial-blowers" | "furnaces" };

const ProductHubPage = ({ hubSlug }: Props) => {
  const config = getProductHubConfig(hubSlug);
  if (!config) return <NotFound />;

  useSEO({
    title: config.seoTitle,
    description: config.seoDescription,
    canonical: config.canonical,
    keywords: config.seoKeywords,
  });

  return (
    <>
      <HeroSection
        tagline="Product focus"
        title={config.heroTitle}
        titleAccent={config.heroTitleAccent}
        subtitle={config.lede}
        image={heroImage}
        imageAlt="Industrial manufacturing — Laxmi Engineering Works, Mumbai"
      />

      <article className="py-16 md:py-24 bg-background border-b border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            {config.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={config.primaryCta.to}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              {config.primaryCta.label} <ArrowRight size={14} />
            </Link>
            {config.secondaryCtas.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs tracking-widest uppercase text-foreground hover:border-primary/50 transition-colors"
              >
                {c.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              Request quote
            </Link>
          </div>

          <nav className="mt-14 pt-10 border-t border-border" aria-label="Related product hubs">
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase block mb-4">
              Related
            </span>
            <ul className="flex flex-wrap gap-4">
              {config.relatedHubs.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
                  Full catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
};

export default ProductHubPage;
