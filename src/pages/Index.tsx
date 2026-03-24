import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, Wind, Factory, Gauge, Cog, Filter, ThermometerSun, Tornado, Disc3, ArrowRight, ChevronRight, Award, Users, Wrench, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FlipCard from "@/components/FlipCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import heroImage from "@/assets/hero-home.jpg";
import heroVideo from "@/assets/hero-home-video.mp4.asset.json";

import imgOilBurners from "@/assets/product-oil-burners.jpg";
import imgBlowers from "@/assets/product-blowers.jpg";
import imgFurnaces from "@/assets/product-furnaces.jpg";
import imgOilHeating from "@/assets/product-oil-heating.jpg";
import imgRotomizer from "@/assets/product-rotomizer.jpg";
import imgOilLineHeater from "@/assets/product-oil-line-heater.jpg";
import imgOilFilter from "@/assets/product-oil-filter.jpg";
import imgCyclone from "@/assets/product-cyclone.jpg";
import imgValve from "@/assets/product-valve.jpg";
import bgIndustrialSolutions from "@/assets/bg-industrial-solutions.jpg";
import aboutFactoryImg from "@/assets/about-factory.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";
import aboutWorkshopImg from "@/assets/about-workshop.jpg";

const stats = [
  { value: "50+", label: "Years of Expertise" },
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Industry Sectors" },
  { value: "99.9%", label: "Reliability Rate" },
];

const products = [
  { icon: Flame, title: "Oil Burner", description: "High-efficiency industrial oil burners engineered for consistent combustion and maximum thermal output.", serial: "LX-OB01" },
  { icon: Wind, title: "Air Blowers", description: "Heavy-duty air blowers designed for continuous operation in demanding industrial environments.", serial: "LX-BL02" },
  { icon: Gauge, title: "Oil Heating & Pumping Unit", description: "Complete oil heating and pumping units for efficient fuel management.", serial: "LX-OH03" },
  { icon: Disc3, title: "Rotomizer", description: "Precision rotary atomizers for spray drying, coating, and fine particle generation.", serial: "LX-RT04" },
  { icon: ThermometerSun, title: "Oil Line Heater", description: "Inline oil heating systems for optimal fuel viscosity and burner performance.", serial: "LX-LH05" },
  { icon: Filter, title: "Oil Filter", description: "Industrial-grade filtration systems ensuring clean fuel supply and equipment protection.", serial: "LX-OF06" },
  { icon: Factory, title: "Furnace", description: "All types of industrial furnaces for heat treatment, forging, and melting applications.", serial: "LX-FR07" },
  { icon: Tornado, title: "Cyclone", description: "High-efficiency cyclone separators for dust collection and air pollution control.", serial: "LX-CY08" },
  { icon: Cog, title: "Valve", description: "Industrial valves for precise flow control in oil, gas, steam, and chemical applications.", serial: "LX-VL09" },
];

const testimonials = [
  {
    text: "Laxmi Engineering has been our go-to supplier for oil burners for over 15 years. Their precision and reliability is unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rajesh Mehta",
    role: "Plant Manager, Tata Steel",
  },
  {
    text: "The custom furnace solution they delivered exceeded our temperature uniformity requirements. Exceptional engineering team.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Sunil Agarwal",
    role: "Director, National Refractories",
  },
  {
    text: "Consistent quality, on-time delivery, and outstanding after-sales support. They understand industrial requirements like no one else.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Sharma",
    role: "Procurement Head, ONGC",
  },
  {
    text: "Their blowers have been running non-stop for 3 years without a single breakdown. That speaks volumes about their build quality.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Vikram Singh",
    role: "Operations Head, Hindalco",
  },
  {
    text: "LEW delivered a complete oil heating system that reduced our fuel costs by 18%. ROI was achieved in under a year.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Amit Desai",
    role: "VP Engineering, Reliance",
  },
  {
    text: "From design to installation, their team was professional and thorough. The heat exchangers perform exactly to spec.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Meera Kulkarni",
    role: "Technical Manager, BPCL",
  },
  {
    text: "We've standardized on LEW burners across all our plants. The consistency and service support is excellent.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Arjun Reddy",
    role: "Chief Engineer, JSW Steel",
  },
  {
    text: "Their custom machinery division solved a complex automation challenge that three other vendors couldn't handle.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Karan Malhotra",
    role: "MD, Precision Auto Components",
  },
  {
    text: "Quality certification and documentation from LEW is always impeccable. Makes our audits stress-free.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Neha Joshi",
    role: "QA Director, L&T",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const featuredProducts = [
  { image: imgOilBurners, name: "Oil Burner", tag: "Best Seller", description: "Precision-engineered oil burners delivering >92% efficiency with advanced flame control for industrial heating applications." },
  { image: imgBlowers, name: "Air Blowers", tag: "Heavy Duty", description: "Centrifugal and axial blowers rated up to 50,000 CFM, built for non-stop operation in the harshest environments." },
  { image: imgFurnaces, name: "Furnace", tag: "Custom Built", description: "Box, pit, and rotary furnaces reaching 1200°C — designed and built to your exact heat treatment specifications." },
  { image: imgRotomizer, name: "Rotomizer", tag: "Precision", description: "High-speed rotary atomizers for uniform spray drying and coating at up to 12,000 RPM." },
];

const industries = [
  "Oil & Gas", "Steel & Metals", "Power Generation", "Petrochemicals",
  "Cement", "Textiles", "Food Processing", "Pharmaceuticals",
  "Automotive", "Shipbuilding",
];

const Index = () => {
  return (
    <>
      <HeroSection
        tagline="Precision Engineering / Since 1974"
        title="ENGINEERING THE FUTURE"
        titleAccent="OF INDUSTRIAL INFRASTRUCTURE"
        subtitle="A trusted leader in high-performance industrial manufacturing. Oil burners, blowers, furnaces, and precision machinery."
        image={heroImage}
        video={heroVideo.url}
      />

      {/* Stats Section */}
      <section className="py-[12vh] bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-[15vh] bg-secondary border-b border-border overflow-hidden">
        <div className="container">
          <SectionHeading tag="Who We Are" title="Powering India's Industry Since 1974" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left - Image mosaic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 grid grid-cols-2 gap-3"
            >
              {/* Large main image */}
              <div className="col-span-2 relative overflow-hidden group">
                <img
                  src={aboutFactoryImg}
                  alt="Industrial manufacturing facility"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-5 py-3"
                >
                  <span className="font-display text-2xl font-bold">50+</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase ml-2">Years of Excellence</span>
                </motion.div>
              </div>
              {/* Two smaller images */}
              <div className="overflow-hidden group">
                <img
                  src={aboutTeamImg}
                  alt="Engineering team at work"
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden group">
                <img
                  src={aboutWorkshopUrl}
                  alt="CNC machinery workshop"
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Laxmi Engineering Works</strong> is one of India's most trusted names in industrial manufacturing. From our 40,000 sq. ft. ISO 9001:2015 certified facility, we deliver precision-engineered oil burners, blowers, furnaces, and custom machinery to 500+ clients across 10+ sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our experienced team of 100+ engineers combines decades of expertise with modern CNC technology to build equipment that runs reliably, year after year.
              </p>

              {/* Highlight stats row */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, title: "ISO 9001:2015", desc: "Certified quality systems" },
                  { icon: Wrench, title: "Custom Built", desc: "Engineered to your specs" },
                  { icon: Users, title: "500+ Clients", desc: "Pan-India & exports" },
                  { icon: ShieldCheck, title: "99.9% Uptime", desc: "Continuous operation" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 p-3 bg-background border border-border group hover:border-primary/40 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-foreground leading-tight">{item.title}</h4>
                      <p className="text-muted-foreground text-[11px] mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors self-start"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-[15vh] bg-secondary border-b border-border">
        <div className="container">
          <SectionHeading
            tag="Featured Products / 01"
            title="Built for Industry"
            description="Explore our flagship products — engineered for maximum performance in the most demanding environments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <FlipCard
                key={product.name}
                image={product.image}
                name={product.name}
                tag={product.tag}
                description={product.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Industrial Solutions */}
      <section className="relative py-[15vh] bg-background overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={bgIndustrialSolutions} alt="" className="w-full h-full object-cover opacity-[0.15]" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            tag="Our Capabilities / 02"
            title="Industrial Solutions"
            description="Our product range delivers outstanding reliability, reduced downtime, and optimal efficiency across oil & gas, manufacturing, metalworking, and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.serial}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  to="/products"
                  className="block relative bg-secondary border border-border p-7 group hover:border-primary/40 transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top row: icon + serial */}
                  <div className="relative flex items-start justify-between mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                        <product.icon className="text-primary" size={22} />
                      </div>
                      {/* Animated corner accent */}
                      <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.2em] group-hover:text-primary/50 transition-colors duration-500">
                      {product.serial}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative font-display text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-6 h-px bg-primary/30 mb-3 group-hover:w-10 transition-all duration-500" />

                  {/* Description */}
                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="relative inline-flex items-center gap-2 text-primary font-mono text-[11px] tracking-[0.15em] uppercase">
                    <span className="group-hover:mr-1 transition-all duration-300">Explore</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Bottom-right corner accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-[15vh] bg-secondary border-t border-border">
        <div className="container">
          <SectionHeading
            tag="Industries / 03"
            title="Sectors We Serve"
            description="Trusted across 10+ industries for precision-engineered industrial equipment."
          />
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border bg-background/50 px-6 py-3 font-mono text-sm text-foreground tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Scrolling Columns */}
      <section className="py-[15vh] bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mono-label mb-3"
            >
              Client Testimonials / 04
            </motion.span>
            <div className="accent-bar mx-auto mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground max-w-2xl leading-relaxed"
            >
              Hear from the industry leaders who trust Laxmi Engineering Works for their critical manufacturing needs.
            </motion.p>
          </div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
            <TestimonialsColumn testimonials={secondColumn} duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[15vh] bg-secondary border-t border-border">
        <div className="container">
          <SectionHeading
            tag="Why Laxmi / 05"
            title="Why Industry Leaders Choose Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "50+", title: "Years Experience", desc: "Half a century of engineering excellence and continuous innovation." },
              { num: "ISO", title: "9001:2015 Certified", desc: "Quality management system ensuring consistency at every stage." },
              { num: "24/7", title: "Technical Support", desc: "Round-the-clock assistance, spare parts supply, and remote diagnostics." },
              { num: "PAN", title: "India Delivery", desc: "End-to-end supply chain with timely delivery across India and export markets." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <span className="font-display text-4xl font-bold text-primary">{item.num}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[15vh] bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8"
            >
              <span className="mono-label mb-3 block">Request for Quote / 06</span>
              <div className="accent-bar mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
                Ready to Build?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Get in touch with our engineering team for custom solutions, technical specifications, and competitive pricing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 flex md:justify-end"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-mono text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
