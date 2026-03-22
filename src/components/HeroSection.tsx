import { motion } from "framer-motion";

interface HeroSectionProps {
  tagline: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  image: string;
  video?: string;
}

const HeroSection = ({ tagline, title, titleAccent, subtitle, image, video }: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-background">
      <div className="container relative z-10 grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-8"
        >
          <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">{tagline}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[0.95]">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-stroke">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-body">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Hero Background - Video or Image */}
      {video ? (
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={image}
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
};

export default HeroSection;
