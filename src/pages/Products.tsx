import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, X, Flame, Wind, Thermometer, Cog, ThermometerSun, Filter, Factory, CircleDot, Disc } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-products.jpg";
import { Link, useLocation } from "react-router-dom";

import imgOilBurners from "@/assets/product-oil-burners.png";
import imgOilBurner2 from "@/assets/product-oil-burner-2.jpg";
import imgOilBurner3 from "@/assets/product-oil-burner-3.jpg";
import imgOilBurner4 from "@/assets/product-oil-burner-4.jpg";
import imgBlowers from "@/assets/product-blowers.jpg";
import imgBlowers1 from "@/assets/air-blower-1.jpg";
import imgBlowers2 from "@/assets/air-blower-2.jpg";
import imgBlowers3 from "@/assets/air-blower-3.png";
import imgBlowers4 from "@/assets/air-blower-4.jpg";
import imgFurnaces from "@/assets/product-furnaces.jpg";
import imgMelting1 from "@/assets/melting-1.jpg";
import imgMelting2 from "@/assets/melting-2.jpg";
import imgMelting3 from "@/assets/melting-3.jpg";
import imgMelting4 from "@/assets/melting-4.jpg";
import imgOilFurnace1 from "@/assets/oil-1.jpg";
import imgOilFurnace2 from "@/assets/oil-2.jpg";
import imgOilFurnace3 from "@/assets/oil-3.jpg";
import imgOilFurnace4 from "@/assets/oil-4.jpg";
import imgPallet1 from "@/assets/pallet-1.jpg";
import imgPallet2 from "@/assets/pallet-2.jpg";
import imgPallet3 from "@/assets/pallet-3.jpg";
import imgPallet4 from "@/assets/pallet-4.jpg";
import imgOilHeating from "@/assets/product-oil-heating.jpg";
import imgSimplex1 from "@/assets/simple-1.jpg";
import imgSimplex2 from "@/assets/simple-2.jpg";
import imgSimplex3 from "@/assets/simple-3.jpg";
import imgDuplex1 from "@/assets/duplex-1.jpg";
import imgDuplex2 from "@/assets/duplex-2.jpg";
import imgDuplex3 from "@/assets/duplex-3.jpg";
import imgRotomizer from "@/assets/product-rotomizer.jpg";
import imgOilLineHeater from "@/assets/product-oil-line-heater.jpg";
import imgOilFilter from "@/assets/product-oil-filter.jpg";
import imgCyclone from "@/assets/product-cyclone.jpg";
import imgCyclone1 from "@/assets/cyclone-1.jpg";
import imgCyclone2 from "@/assets/cyclone-2.jpg";
import imgCyclone3 from "@/assets/cyclone-3.jpg";
import imgCyclone4 from "@/assets/cyclone-4.jpg";
import imgValve from "@/assets/product-valve.jpg";
import imgValve1 from "@/assets/valve-1.jpg";
import imgValve2 from "@/assets/valve-2.jpg";
import imgValve3 from "@/assets/valve-3.jpg";
import imgValve4 from "@/assets/valve-4.jpg";

export const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type ProductModel = {
  name: string;
  specs: string[];
  desc: string;
  images?: string[];
};

type Product = {
  image: string;
  images?: string[];
  name: string;
  serial: string;
  icon: React.ElementType;
  category: string;
  specs: string[];
  desc: string;
  models?: ProductModel[];
  dropdownModels?: { label: string; modelIndex: number }[];
  brochure?: string;
};

export const products: Product[] = [
  {
    image: imgOilBurners,
    images: [imgOilBurners, imgOilBurner4, imgOilBurner2, imgOilBurner3],
    name: "Oil Burner",
    serial: "LX-OB-2024",
    icon: Flame,
    category: "Combustion",
    specs: [],
    desc: "High-efficiency industrial oil burners with precise flame control for consistent combustion and maximum thermal output.",
    brochure: "https://example.com/oil-burner-brochure.pdf",
  },
  {
    image: imgBlowers,
    images: [imgBlowers1, imgBlowers2, imgBlowers3, imgBlowers4],
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
    specs: ["Motor Power: 1 HP and above", "Voltage: 220V & 440V", "Material: Mild Steel", "Warranty: 1 Year"],
    desc: "Reliable oil circulation and heating units for industrial applications. Available in Simplex and Duplex configurations.",
    models: [
      {
        name: "Simplex Model",
        desc: "Single motor and pump configuration ideal for standard industrial oil heating and circulation needs.",
        images: [imgSimplex1, imgSimplex2, imgSimplex3],
        specs: ["Oil Flow Capacity: 20 LPM and above", "Motor Capacity: 0.5 HP, 1500 RPM", "Heater Capacity: 4 KW and above", "Features: Oil filter, pressure gauge, temperature gauge, return & pressure line fittings in MS tray"],
      },
      {
        name: "Duplex Model",
        desc: "Dual motor and pump setup for enhanced reliability and efficiency in high-demand industrial processes.",
        images: [imgDuplex1, imgDuplex2, imgDuplex3],
        specs: ["Oil Flow Capacity: 20 LPM and above", "Motor Capacity: 0.5 HP, 1500 RPM", "Configuration: 2 motors and 2 pumps", "Features: Dual oil filters, pressure gauges, temperature gauges, return & pressure line fittings in MS tray"],
      },
    ],
    dropdownModels: [
      { label: "Simplex Model", modelIndex: 0 },
      { label: "Duplex Model", modelIndex: 1 },
    ],
  },
  {
    image: imgRotomizer,
    images: [imgRotomizer],
    name: "Rotomizer",
    serial: "LX-RT-2024",
    icon: Disc,
    category: "Atomization",
    specs: ["Speed: Up to 12000 RPM", "Capacity: 50-500 kg/hr", "Material: SS 304 / 316", "Drive: Electric Motor"],
    desc: "Precision rotary atomizers for spray drying, coating, and fine particle generation in industrial processes.",
  },
  {
    image: imgOilLineHeater,
    images: [imgOilLineHeater],
    name: "Oil Line Heater",
    serial: "LX-LH-2024",
    icon: ThermometerSun,
    category: "Heating",
    specs: ["Type: Electric / Steam", "Temp: Up to 250°C", "Capacity: Custom", "Control: Thermostat / PID"],
    desc: "Inline oil heating systems to maintain optimal fuel viscosity and temperature for burner performance.",
  },
  {
    image: imgOilFilter,
    images: [imgOilFilter],
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
    models: [
      {
        name: "Melting Furnace",
        desc: "High-temperature melting furnaces for metal melting operations including aluminium, brass, and cast iron.",
        images: [imgMelting1, imgMelting2, imgMelting3, imgMelting4],
        specs: ["Type: Crucible / Induction", "Temp Range: Up to 1600°C", "Fuel: Oil / Gas / Electric", "Capacity: 50 kg – 2000 kg"],
      },
      {
        name: "Pallet Furnace",
        desc: "Batch-type pallet furnaces for heat treatment, annealing, and stress relieving of components on pallets.",
        images: [imgPallet1, imgPallet2, imgPallet3, imgPallet4],
        specs: ["Type: Batch / Continuous", "Temp Range: Up to 1000°C", "Loading: Pallet / Trolley", "Fuel: Oil / Gas / Electric"],
      },
      {
        name: "Oil Furnace",
        desc: "Oil-fired furnaces engineered for forging, re-heating, and heat treatment using light or heavy fuel oil.",
        images: [imgOilFurnace1, imgOilFurnace2, imgOilFurnace3, imgOilFurnace4],
        specs: ["Fuel: LDO / HSD / FO", "Temp Range: Up to 1200°C", "Burner: Pressure Jet / Air Atomised", "Efficiency: >85%"],
      },
    ],
    dropdownModels: [
      { label: "Melting Furnace", modelIndex: 0 },
      { label: "Pallet Furnace", modelIndex: 1 },
      { label: "Oil Furnace", modelIndex: 2 },
    ],
  },
  {
    image: imgCyclone,
    images: [imgCyclone1, imgCyclone2, imgCyclone3, imgCyclone4],
    name: "Cyclone",
    serial: "LX-CY-2024",
    icon: CircleDot,
    category: "Separation",
    specs: ["Type: Single / Multi", "Efficiency: Up to 95%", "Material: MS / SS", "Capacity: Custom CFM"],
    desc: "High-efficiency cyclone separators for dust collection, particulate removal, and air pollution control.",
  },
  {
    image: imgValve,
    images: [imgValve1, imgValve2, imgValve3, imgValve4],
    name: "Valve",
    serial: "LX-VL-2024",
    icon: Cog,
    category: "Flow Control",
    specs: ["Type: Gate / Ball / Globe", "Size: 15mm - 300mm", "Pressure: Up to 40 kg/cm²", "Material: CS / SS / CI"],
    desc: "Industrial valves engineered for precise flow control in oil, gas, steam, and chemical applications.",
  },
];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const ImageGallery = ({ images, name }: { images: string[]; name: string }) => {
  const slots = Array.from({ length: 4 }, (_, i) => images[i % images.length]);
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      {slots.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.08, duration: 0.4 }}
          className="relative border border-border overflow-hidden bg-secondary"
          style={{ paddingBottom: "100%" }}
        >
          <img src={img} alt={`${name} - ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeModel, setActiveModel] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const openSlug = params.get("open");
    const modelLabel = params.get("model");

    if (openSlug) {
      const product = products.find((p) => toSlug(p.name) === openSlug);
      if (product) {
        let modelIndex = 0;
        if (modelLabel && product.dropdownModels) {
          const found = product.dropdownModels.findIndex(
            (m) => m.label === decodeURIComponent(modelLabel)
          );
          if (found !== -1) modelIndex = found;
        }
        setSelectedProduct(product);
        setActiveModel(modelIndex);
      }
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  }, [location]);

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const openProduct = (product: Product, modelIndex = 0) => { setSelectedProduct(product); setActiveModel(modelIndex); };

  const modalImages = (() => {
    if (!selectedProduct) return [];
    if (selectedProduct.models) return selectedProduct.models[activeModel]?.images ?? [selectedProduct.image];
    return selectedProduct.images ?? [selectedProduct.image];
  })();

  return (
    <>
      <HeroSection
        tagline="Product Range / LX-2024"
        title="PRECISION"
        titleAccent="COMPONENTS"
        subtitle="Comprehensive range of industrial machinery engineered for reliability, efficiency, and performance."
        image={heroImage}
      />

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
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">Industrial Solutions</h2>
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

          {/* Product Grid — items-start so cards don't stretch to fill row height */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => {
                const Icon = product.icon;
                const isMultiModel = !!product.dropdownModels;

                return (
                  <motion.div
                    id={toSlug(product.name)}
                    key={product.serial}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => !isMultiModel && openProduct(product)}
                    className={`group relative bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors duration-500 ${
                      !isMultiModel ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute top-4 right-4 bg-background/40 backdrop-blur-md border border-border/50 px-3 py-1.5 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <span className="font-mono text-[10px] text-foreground/70 tracking-wider">{product.serial}</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative w-11 h-11 bg-background/20 backdrop-blur-md border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/20 transition-all duration-500">
                            <Icon size={18} className="text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      <div className="absolute top-0 left-6 right-6 h-px">
                        <div className="h-full bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      </div>

                      {/* Category */}
                      <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase block mb-1.5">
                        {product.category}
                      </span>

                      {/* Name + "Select Model" pill on the same line */}
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>
                        {isMultiModel && (
                          <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-primary/40 text-primary/80 bg-primary/5 leading-4 shrink-0">
                            Select Model
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                        {product.desc}
                      </p>

{/* Spec chips */}
                      {product.specs.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.specs.slice(0, 2).map((spec) => (
                            <span
                              key={spec}
                              className="font-mono text-[10px] text-muted-foreground bg-secondary px-2.5 py-1 border border-border/50 tabular-nums"
                            >
                              {spec}
                            </span>
                          ))}
                          {product.specs.length > 2 && (
                            <span className="font-mono text-[10px] text-primary/70 bg-primary/5 px-2.5 py-1 border border-primary/20">
                              +{product.specs.length - 2} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* CTA */}
                      {isMultiModel ? (
                        <div
                          className="flex flex-col gap-2 pt-3 border-t border-border/60"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {product.dropdownModels!.map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => openProduct(product, opt.modelIndex)}
                              className="w-full flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-wider uppercase bg-secondary border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group/btn"
                            >
                              <span>{opt.label}</span>
                              <ArrowRight size={13} className="text-primary group-hover/btn:text-primary-foreground transition-colors" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between pt-3 border-t border-border/60">
                          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                            View Details
                          </span>
                          <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
                            <ArrowRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-mono text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Request Specifications <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
              <div className="relative p-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-primary tracking-widest uppercase bg-primary/15 px-3 py-1 border border-primary/30">{selectedProduct.category}</span>
                  <span className="font-mono text-[10px] text-foreground/50 tracking-wider">{selectedProduct.serial}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-accent transition-colors">
                  <X size={18} />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={selectedProduct.models ? activeModel : selectedProduct.serial} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <ImageGallery images={modalImages} name={selectedProduct.name} />
                </motion.div>
              </AnimatePresence>

              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">{selectedProduct.desc}</p>

                {selectedProduct.models ? (
                  <div className="border-t border-border pt-6">
                    <span className="font-mono text-xs text-primary tracking-widest uppercase mb-5 block">Available Models</span>
                    <div className="flex gap-0 mb-6 border border-border w-fit">
                      {selectedProduct.models.map((model, idx) => (
                        <button
                          key={model.name}
                          onClick={() => setActiveModel(idx)}
                          className={`font-mono text-[11px] tracking-widest uppercase px-6 py-2.5 transition-all duration-200 ${activeModel === idx ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                        >
                          {model.name}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div key={activeModel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{selectedProduct.models[activeModel].desc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProduct.models[activeModel].specs.map((spec) => {
                            const colonIdx = spec.indexOf(": ");
                            const label = colonIdx !== -1 ? spec.slice(0, colonIdx) : spec;
                            const value = colonIdx !== -1 ? spec.slice(colonIdx + 2) : "";
                            return (
                              <div key={spec} className="flex justify-between items-start gap-4 py-3 px-4 bg-secondary/50 border border-border/50">
                                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider shrink-0">{label}</span>
                                <span className="font-mono text-sm text-foreground font-medium text-right">{value}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">Key Features</span>
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
                  </div>
                ) : (
                  <div className="border-t border-border pt-6">
                    <span className="font-mono text-xs text-primary tracking-widest uppercase mb-5 block">Technical Specifications</span>
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
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors">
                    Request Quote <ArrowRight size={14} />
                  </Link>
                  {selectedProduct.brochure && (
                    <a
                      href={selectedProduct.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors"
                    >
                      Download Brochure <ArrowRight size={14} />
                    </a>
                  )}
                  <button onClick={() => setSelectedProduct(null)} className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
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