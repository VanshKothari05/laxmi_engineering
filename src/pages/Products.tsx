import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, X, Flame, Wind, Thermometer, Cog, ThermometerSun, Filter, Factory, CircleDot } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-products.jpg";
import { Link, useLocation } from "react-router-dom";

import imgOilBurners from "@/assets/product-oil-burners.png";
import imgOilBurner2 from "@/assets/product-oil-burner-2.jpg";
import imgOilBurner3 from "@/assets/product-oil-burner-3.jpg";
import imgOilBurner4 from "@/assets/product-oil-burner-4.jpg";
import imgBlowers from "@/assets/product-blowers.jpg";
import imgBlowers01 from "@/assets/air-blower-01.jpg";
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
import imgIdBlower1 from "@/assets/id_1.jpg";
import imgIdBlower2 from "@/assets/id_2.jpg";
import imgIdBlower3 from "@/assets/id_3.jpg";
import imgIdBlower4 from "@/assets/id_4.jpg";
import imgTube1 from "@/assets/tube_1.jpg";
import imgTube2 from "@/assets/tube_2.jpg";
import imgTube3 from "@/assets/tube_3.jpg";
import imgTube4 from "@/assets/tube_4.jpg";

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
  // 1. Oil Burner
  {
    image: imgOilBurners,
    images: [imgOilBurners, imgOilBurner4, imgOilBurner2, imgOilBurner3],
    name: "Oil Burner",
    serial: "LX-OB-2024",
    icon: Flame,
    category: "Combustion",
    specs: ["Oil Flow: 3 – 350 LPH", "Max Temp: 1500°C", "Firing: Auto / Manual / Dual Fire", "Fuels: LDO / HSD / FO"],
    desc: "Laxmi Engineering Works' Industrial Oil Burners are engineered for precision and efficiency, available in Gas and Oil Burner models with oil flow capacities ranging from 3 to 350 litres per hour. Capable of reaching temperatures up to 1500°C, they are ideal for melting Aluminium, Brass, Copper, and Zinc. Both Automatic and Manual firing options are available, including Dual Fire configurations for maximum flexibility.",
    brochure: "https://example.com/oil-burner-brochure.pdf",
  },
  // 2. Air Blowers
  {
    image: imgBlowers01,
    images: [imgBlowers1, imgBlowers2, imgBlowers3, imgBlowers4],
    name: "Air Blowers",
    serial: "LX-BL-2024",
    icon: Wind,
    category: "Air Systems",
    specs: ["Drive Options: Direct / V-Belt / CI Coupling", "Impeller Material: MS & Aluminium", "Pressure Range: Low / Medium / High", "Standards: IS & AMCA Compliant"],
    desc: "Laxmi Engineering Works' Industrial Air Blowers deliver efficient and reliable air movement for low, medium, and high-pressure industrial environments. Available in flow rates from 1,000 to 6,000 CFM, with impellers fabricated in Mild Steel and Aluminium for long-lasting durability. Drive options include direct shaft mount, C.I. coupling, and V-Belt configurations — all customisable to specific operational requirements.",
    brochure: "https://example.com/air-blowers-brochure.pdf",
  },
  // 3. Furnace / Pallet Furnace
  {
    image: imgFurnaces,
    name: "Furnace / Pallet Furnace",
    serial: "LX-FR-2024",
    icon: Factory,
    category: "Heat Treatment",
    specs: [],
    desc: "All types of industrial furnaces for heat treatment, forging, melting, and processing applications.",
    brochure: "https://example.com/furnace-brochure.pdf",
    models: [
      {
        name: "Melting Furnace",
        desc: "Laxmi Engineering Works' Electric Furnaces are purpose-built for efficient and reliable metal melting, particularly aluminium, with temperatures reaching up to 980°C. Rated at 6 kW and above, they support both single-phase and three-phase power and feature fully automatic operation with minimal heat loss and reduced power consumption. Their durable construction ensures long-term performance in demanding industrial environments.",
        images: [imgMelting1, imgMelting2, imgMelting3, imgMelting4],
        specs: ["Metals: Aluminium, Brass, Copper, Zinc", "Operation: Fully Automatic Control", "Power: Single & Three Phase Available", "Temperature: Can reach up to 980°C"],
      },
      {
        name: "Pallet Furnace",
        desc: "The Laxmi Pallet Furnace is an innovative, eco-friendly heating solution that uses readily available wooden pallets as fuel, eliminating harmful carbon emissions and dramatically reducing energy costs. Compared to conventional gas or diesel furnaces, it can save industries up to ₹25 lakhs per year in fuel costs while delivering high-performance heating for aluminium melting and other industrial processes. Recognised and promoted by the Indian government as a sustainable alternative to fossil-fuel-based heating.",
        images: [imgPallet2, imgPallet3, imgPallet4, imgPallet1],
        specs: ["Fuel Cost Savings: Up to ₹25 Lakhs / Year", "Carbon Emissions: Zero – Eco-Friendly Fuel", "Fuel Source: Wooden Pallets", "Govt Recognition: Promoted by Govt of India"],
      },
      {
        name: "Oil Furnace",
        desc: "Laxmi Engineering Works' Oil Fired Furnaces are built for efficient and reliable metal melting across a wide range of industries, including brass, copper, aluminium, zinc, forging, and chemical processing. Available in capacities from 20 kg to 6 tons with temperatures reaching up to 1600°C, they are offered in fixed and tilt configurations for versatile operation. Engineered for exceptional heating efficiency and durability, these furnaces perform reliably in the most demanding industrial conditions.",
        images: [imgOilFurnace1, imgOilFurnace2, imgOilFurnace3, imgOilFurnace4],
        specs: ["Temperature Capacity: Can reach up to 1600°C", "Applications: Metal melting for brass, copper, aluminum, and zinc", "Industries: Forging operations & chemical plants", "Processing: BITUMEN processing & high-heat industrial use"],
      },
    ],
    dropdownModels: [
      { label: "Melting Furnace", modelIndex: 0 },
      { label: "Pallet Furnace", modelIndex: 1 },
      { label: "Oil Furnace", modelIndex: 2 },
    ],
  },
  // 4. Oil Heating & Pumping Unit
  {
    image: imgOilHeating,
    name: "Oil Heating & Pumping Unit",
    serial: "LX-OH-2024",
    icon: Thermometer,
    category: "Heating",
    specs: [],
    desc: "Laxmi Engineering Works' Oil Heating and Pumping Units provide efficient oil circulation and precise heating for demanding industrial processes. Available in Simplex and Duplex models, each equipped with oil filters, pressure gauges, temperature gauges, and return and pressure line fittings mounted on a robust MS structure. Built for durability and optimal performance, these units ensure consistent oil supply to burners and industrial systems.",
    brochure: "https://example.com/oil-heating-pumping-brochure.pdf",
    models: [
      {
        name: "Simplex Model",
        desc: "The Simplex Model features a single motor and pump configuration designed for efficient oil heating and circulation in standard industrial applications. It includes an oil filter, pressure gauge, and temperature gauge, all housed in a sturdy MS plant structure for reliable, long-term operation.",
        images: [imgSimplex1, imgSimplex2, imgSimplex3],
        specs: ["Configuration: Single Motor & Pump", "Built-in Safety: Pressure & Temp Gauges", "Filtration: Integrated Oil Filter", "Structure: Heavy-Duty MS Skid Mounted"],
      },
      {
        name: "Duplex Model",
        desc: "The Duplex Model is equipped with two motors and two pumps for enhanced reliability and redundancy in high-demand industrial environments. It features dual oil filters, pressure gauges, and temperature gauges — ensuring uninterrupted oil supply even during maintenance or component servicing.",
        images: [imgDuplex1, imgDuplex2, imgDuplex3],
        specs: ["Configuration: Dual Motor & Pump Setup", "Redundancy: Uninterrupted Oil Supply", "Filtration: Dual Integrated Oil Filters", "Uptime: Serviceable Without Shutdown"],
      },
    ],
    dropdownModels: [
      { label: "Simplex Model", modelIndex: 0 },
      { label: "Duplex Model", modelIndex: 1 },
    ],
  },
  // 5. ID Blower
  {
    image: imgIdBlower1,
    images: [imgIdBlower1, imgIdBlower2, imgIdBlower3, imgIdBlower4],
    name: "ID Blower",
    serial: "LX-IDB-2024",
    icon: Wind,
    category: "Air Systems",
    specs: ["Airflow Capacity: Available from 100 CFM to 21,000 CFM", "Drive: Direct / V-Belt", "Material: MS / SS", "Application: Essential for maintaining clean air quality by effectively extracting smoke and pollutants from industrial setups."],
    desc: "Laxmi Engineering Works' Induced Draft (ID) Blowers are purpose-built for effective exhaust gas extraction in furnaces, boilers, and kilns. Engineered to handle high-temperature flue gases with sustained efficiency, these blowers maintain optimal draft conditions for complete combustion and reduced emissions. Available in a range of capacities with robust MS construction and customisable drive configurations to suit specific industrial requirements.",
    brochure: "https://example.com/id-blower-brochure.pdf",
  },
  // 6. Tube Axial Fan
  {
    image: imgTube1,
    images: [imgTube1, imgTube2, imgTube3, imgTube4],
    name: "Tube Axial Fan",
    serial: "LX-TAF-2024",
    icon: Wind,
    category: "Air Systems",
    specs: ["Type: Axial Flow", "Drive: Direct / V-Belt", "Material: MS / Aluminium", "Application: Ventilation / Cooling"],
    desc: "Laxmi Engineering Works' Tube Axial Fans deliver high-volume airflow in a compact, inline configuration ideal for industrial ventilation, process cooling, and air circulation applications. Designed with aerodynamically optimised blades for maximum efficiency and low noise, they are available in multiple sizes and drive options. Their robust construction ensures reliable, long-term performance in demanding environments.",
    brochure: "https://example.com/tube-axial-fan-brochure.pdf",
  },
  // 7. Oil Line Heater
  {
    image: imgOilLineHeater,
    images: [imgOilLineHeater],
    name: "Oil Line Heater",
    serial: "LX-LH-2024",
    icon: ThermometerSun,
    category: "Heating",
    specs: [
      "Purpose: Ensures Smooth & Efficient Oil Flow to Burners",
      "Benefit: Improves Fuel Atomisation & Combustion Quality",
      "Application: Compatible with All Industrial Burner Systems",
      "Design: Low Maintenance with Long Service Life",
    ],
    desc: "Laxmi Engineering Works' Oil Line Heaters are engineered to ensure a consistent and reliable supply of pre-heated fuel oil to burner systems. By maintaining oil at the ideal operating temperature, these heaters improve fuel atomisation, enhance combustion efficiency, and protect burner components from the damaging effects of cold, high-viscosity oil. Compact, robust, and built for continuous duty, they are an essential part of any well-functioning industrial burner installation.",
    brochure: "https://example.com/oil-line-heater-brochure.pdf",
  },
  // 8. Oil Filter
  {
    image: imgOilFilter,
    images: [imgOilFilter],
    name: "Oil Filter",
    serial: "LX-OF-2024",
    icon: Filter,
    category: "Filtration",
    specs: [
      "Protection: Extends Service Life of Pumps & Burners",
      "Reliability: Ensures Clean, Uninterrupted Oil Supply",
      "Maintenance: Quick & Easy Servicing Without Downtime",
      "Durability: Built for Continuous Heavy-Duty Operation",
    ],
    desc: "Laxmi Engineering Works' Industrial Oil Filters provide dependable filtration to safeguard burner systems and downstream equipment from contaminants and impurities present in fuel oil. Engineered for durability and ease of maintenance, these filters extend the operating life of pumps, valves, and burner nozzles by delivering a consistently clean and stable oil supply. A critical component for any industrial fuel-oil system.",
    brochure: "https://example.com/oil-filter-brochure.pdf",
  },
  // 9. Cyclone
  {
    image: imgCyclone,
    images: [imgCyclone1, imgCyclone2, imgCyclone3, imgCyclone4],
    name: "Cyclone",
    serial: "LX-CY-2024",
    icon: CircleDot,
    category: "Separation",
    specs: [
      "Working Principle: Centrifugal Force – No Moving Parts",
      "Application: Foundries, Kilns, Furnaces & Dusty Processes",
      "Maintenance: Near-Zero – Self-Cleaning Operation",
      "Compliance: Supports Industrial Emission Control Norms",
    ],
    desc: "Laxmi Engineering Works' Cyclone Separators are high-performance industrial dust collection systems that harness centrifugal force to efficiently separate dust, particulates, and debris from gas or air streams — with no moving parts and virtually no maintenance. Widely used in foundries, kilns, furnaces, and manufacturing facilities, they help industries achieve clean air standards, protect downstream equipment, and comply with environmental emission regulations.",
    brochure: "https://example.com/cyclone-brochure.pdf",
  },
  // 10. Valve
  {
    image: imgValve,
    images: [imgValve1, imgValve2, imgValve3, imgValve4],
    name: "Valve",
    serial: "LX-VL-2024",
    icon: Cog,
    category: "Flow Control",
    specs: [
      "Function: Reliable Flow Control & Positive Shut-Off",
      "Compatibility: Suitable for Oil, Gas, Steam & Chemicals",
      "Performance: Leak-Proof Sealing Under Working Conditions",
      "Flexibility: Available in Various Materials & Configurations",
    ],
    desc: "Laxmi Engineering Works manufactures industrial-grade valves designed for dependable flow control across a wide range of piping applications including oil, gas, steam, water, and chemical systems. Engineered to perform reliably under demanding pressure and temperature conditions, our valves deliver leak-proof sealing and long-term durability. Available in multiple materials and configurations, each valve is built to the specific requirements of the application.",
    brochure: "https://example.com/valve-brochure.pdf",
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
        tagline="Product Range"
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
            <span className="mono-label mb-3 block">Product Catalog</span>
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
                    key={product.name}
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
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-accent transition-colors">
                  <X size={18} />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={selectedProduct.models ? activeModel : selectedProduct.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
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
                    {selectedProduct.specs.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">Technical Overview</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProduct.specs.map((spec) => {
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
                    </div>
                    )}
                  </div>
                ) : (
                  <div className="border-t border-border pt-6">
                    {selectedProduct.specs.length > 0 ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <span className="font-mono text-xs text-primary tracking-widest uppercase mb-5 block">Product Details</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Brochure-based technical details can vary depending on burner size, fuel type, automation level, and application. Contact our team for the right configuration and quote for your requirement.
                        </p>
                      </>
                    )}
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