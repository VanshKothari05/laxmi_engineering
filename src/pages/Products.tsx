import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, X, Flame, Wind, Thermometer, Cog, ThermometerSun, Filter, Factory, CircleDot, Disc, ChevronLeft } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-products.jpg";
import { Link } from "react-router-dom";

import imgOilBurners from "@/assets/product-oil-burners.jpg";
import imgOilBurner2 from "@/assets/product-oil-burner-2.jpg";
import imgOilBurner3 from "@/assets/product-oil-burner-3.jpg";
import imgOilBurner4 from "@/assets/product-oil-burner-4.jpg";
import imgBlowers from "@/assets/product-blowers.jpg";
import imgFurnaces from "@/assets/product-furnaces.jpg";
import imgOilHeating from "@/assets/product-oil-heating.jpg";
import imgRotomizer from "@/assets/product-rotomizer.jpg";
import imgOilLineHeater from "@/assets/product-oil-line-heater.jpg";
import imgOilFilter from "@/assets/product-oil-filter.jpg";
import imgCyclone from "@/assets/product-cyclone.jpg";
import imgValve from "@/assets/product-valve.jpg";

const products = [
  {
    image: imgOilBurners,
    images: [imgOilBurners, imgOilBurner2, imgOilBurner3, imgOilBurner4],
    name: "Oil Burner",
    serial: "LX-OB-2024",
    icon: Flame,
    category: "Combustion",
    specs: ["Capacity: 50-5000 kCal/hr", "Fuel: LDO / HSD / FO", "Efficiency: >92%", "Atomization: Pressure / Air"],
    desc: "High-efficiency industrial oil burners with precise flame control for consistent combustion and maximum thermal output.",
  },
  {
    image: imgBlowers,
    name: "Air Blowers",
    serial: "LX-BL-2024",
    icon: Wind,
    category: "Air Systems",
    specs: ["Type: Centrifugal / Axial", "Capacity: Up to 50,000 CFM", "Pressure: Up to 500 mmWG", "Material: MS / SS"],
    desc: "Heavy-duty air blowers for combustion air supply, ventilation, and industrial process requirements.",
  },
  {
    image: imgOilHeating,
    name: "Oil Heating & Pumping Unit",
    serial: "LX-OH-2024",
    icon: Thermometer,
    category: "Heating",
    specs: ["Heating: Steam / Electric", "Pump Type: Gear / Screw", "Flow: Up to 5000 LPH", "Pressure: Up to 20 kg/cm²"],
    desc: "Complete oil heating and pumping solutions for efficient fuel management and preheating systems.",
  },
  {
    image: imgRotomizer,
    name: "Rotomizer",
    serial: "LX-RT-2024",
    icon: Disc,
    category: "Atomization",
    specs: ["Speed: Up to 12000 RPM", "Capacity: 50-500 kg/hr", "Material: SS 304 / 316", "Drive: Electric Motor"],
    desc: "Precision rotary atomizers for spray drying, coating, and fine particle generation in industrial processes.",
  },
  {
    image: imgOilLineHeater,
    name: "Oil Line Heater",
    serial: "LX-LH-2024",
    icon: ThermometerSun,
    category: "Heating",
    specs: ["Type: Electric / Steam", "Temp: Up to 250°C", "Capacity: Custom", "Control: Thermostat / PID"],
    desc: "Inline oil heating systems to maintain optimal fuel viscosity and temperature for burner performance.",
  },
  {
    image: imgOilFilter,
    name: "Oil Filter",
    serial: "LX-OF-2024",
    icon: Filter,
    category: "Filtration",
    specs: ["Type: Duplex / Simplex", "Filtration: 10-100 Micron", "Flow: Up to 5000 LPH", "Material: CS / SS"],
    desc: "Industrial-grade oil filtration systems ensuring clean fuel supply and protecting downstream equipment.",
  },
  {
    image: imgFurnaces,
    name: "Furnace",
    serial: "LX-FR-2024",
    icon: Factory,
    category: "Heat Treatment",
    specs: ["Type: Box / Pit / Rotary", "Temp Range: Up to 1200°C", "Fuel: Oil / Gas / Electric", "Capacity: Custom"],
    desc: "All types of industrial furnaces for heat treatment, forging, melting, and processing applications.",
  },
  {
    image: imgCyclone,
    name: "Cyclone",
    serial: "LX-CY-2024",
    icon: CircleDot,
    category: "Separation",
    specs: ["Type: Single / Multi", "Efficiency: Up to 95%", "Material: MS / SS", "Capacity: Custom CFM"],
    desc: "High-efficiency cyclone separators for dust collection, particulate removal, and air pollution control.",
  },
  {
    image: imgValve,
    name: "Valve",
    serial: "LX-VL-2024",
    icon: Cog,
    category: "Flow Control",
    specs: ["Type: Gate / Ball / Globe", "Size: 15mm - 300mm", "Pressure: Up to 40 kg/cm²", "Material: CS / SS / CI"],
    desc: "Industrial valves engineered for precise flow control in oil, gas, steam, and chemical applications.",
  },
];

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  const openProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setGalleryIndex(0);
  };

  return (
    <>
      <HeroSection
        tagline="Product Range / LX-2024"
        title="PRECISION"
        titleAccent="COMPONENTS"
        subtitle="Comprehensive range of industrial machinery engineered for reliability, efficiency, and performance."
        image={heroImage}
      />

      {/* Category Filter */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="mono-label mb-3 block">Product Catalog / 01</span>
            <div className="accent-bar mb-6" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
                  Industrial Solutions
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                  Every product in our range is designed and manufactured to meet the highest standards of industrial performance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-mono text-[11px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.serial}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer relative bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors duration-500"
                  >
                    {/* Image with parallax-like zoom */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      />
                      {/* Multi-layer gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Floating serial badge */}
                      <div className="absolute top-4 right-4 bg-background/40 backdrop-blur-md border border-border/50 px-3 py-1.5 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <span className="font-mono text-[10px] text-foreground/70 tracking-wider">
                          {product.serial}
                        </span>
                      </div>

                      {/* Icon with glow */}
                      <div className="absolute top-4 left-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative w-11 h-11 bg-background/20 backdrop-blur-md border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/20 transition-all duration-500">
                            <Icon size={18} className="text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="p-6 relative">
                      {/* Animated top line */}
                      <div className="absolute top-0 left-6 right-6 h-px">
                        <div className="h-full bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      </div>

                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase block mb-1.5">
                            {product.category}
                          </span>
                          <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                        </div>
                        <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 mt-1">
                          <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                        {product.desc}
                      </p>

                      {/* Spec pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.specs.slice(0, 2).map((spec) => (
                          <span
                            key={spec}
                            className="font-mono text-[10px] text-muted-foreground bg-secondary px-2.5 py-1 border border-border/50 tabular-nums"
                          >
                            {spec}
                          </span>
                        ))}
                        <span className="font-mono text-[10px] text-primary/70 bg-primary/5 px-2.5 py-1 border border-primary/20">
                          +{product.specs.length - 2} more
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-mono text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Request Specifications <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-primary tracking-widest uppercase bg-primary/15 backdrop-blur-sm px-3 py-1 border border-primary/30">
                      {selectedProduct.category}
                    </span>
                    <span className="font-mono text-[10px] text-foreground/50 tracking-wider">
                      {selectedProduct.serial}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {selectedProduct.name}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                  {selectedProduct.desc}
                </p>

                <div className="border-t border-border pt-6">
                  <span className="font-mono text-xs text-primary tracking-widest uppercase mb-5 block">
                    Technical Specifications
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.specs.map((spec) => {
                      const [label, value] = spec.split(": ");
                      return (
                        <div key={spec} className="flex justify-between items-center py-3 px-4 bg-secondary/50 border border-border/50">
                          <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{label}</span>
                          <span className="font-mono text-sm text-foreground font-medium">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;
