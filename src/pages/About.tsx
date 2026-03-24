import { motion } from "framer-motion";
import { Award, Clock, Users, MapPin, Target, Zap, Shield, Wrench } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-about.jpg";
import capCncImg from "@/assets/capability-cnc.jpg";
import capPrototypeImg from "@/assets/capability-prototype.jpg";
import capTestingImg from "@/assets/capability-testing.jpg";
import capFabricationImg from "@/assets/capability-fabrication.jpg";

// Real industrial stock photos - unique from Index page
const aboutFactoryUrl = "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80";
const aboutTeamUrl = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80";

const milestones = [
  { year: "1974", event: "Laxmi Engineering Works founded with a vision for precision manufacturing.", highlight: true },
  { year: "1990", event: "Expanded product line to include industrial furnaces and blowers.", highlight: false },
  { year: "2005", event: "Achieved ISO 9001:2015 certification for quality management.", highlight: false },
  { year: "2015", event: "Modernized facility with CNC machinery and automated testing.", highlight: false },
  { year: "2024", event: "50+ years of continuous operation. 500+ clients across 10+ sectors.", highlight: true },
];

const values = [
  { icon: Award, title: "Accuracy", description: "Every component manufactured to tolerances of ±0.005mm with rigorous quality control.", serial: "LX-V01" },
  { icon: Clock, title: "Reliability", description: "99.9% uptime guarantee. Engineered for continuous industrial operation.", serial: "LX-V02" },
  { icon: Users, title: "Partnership", description: "Long-term relationships with procurement officers and infrastructure developers.", serial: "LX-V03" },
  { icon: MapPin, title: "Scale", description: "40,000 sq. ft. manufacturing facility equipped with modern CNC machinery.", serial: "LX-V04" },
];

const capabilities = [
  { icon: Target, title: "CNC Machining", desc: "5-axis CNC centres for complex geometries and tight tolerances.", image: capCncImg },
  { icon: Zap, title: "Rapid Prototyping", desc: "Concept to prototype in under 2 weeks for critical timelines.", image: capPrototypeImg },
  { icon: Shield, title: "Quality Testing", desc: "In-house NDT, dimensional inspection, and material analysis.", image: capTestingImg },
  { icon: Wrench, title: "Custom Fabrication", desc: "Heavy fabrication up to 10-tonne assemblies with certified welding.", image: capFabricationImg },
];

const About = () => {
  return (
    <>
      <HeroSection
        tagline="About LEW / Est. 1974"
        title="ENGINEERING"
        titleAccent="EXCELLENCE"
        subtitle="Established 1974. 40,000 sq. ft. facility. ISO 9001:2015 Certified. 50+ years of industrial manufacturing."
        image={heroImage}
      />

      {/* Who We Are - with images */}
      <section className="py-[15vh] bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative">
                <div className="overflow-hidden border border-border">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={aboutFactoryUrl}
                    alt="Manufacturing facility"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-10 right-6 w-[50%] border-4 border-background shadow-2xl overflow-hidden"
                >
                  <img src={aboutTeamUrl} alt="Engineering team" className="w-full h-[220px] object-cover" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-6 -left-4 bg-primary text-primary-foreground p-5 flex flex-col items-center"
                >
                  <span className="font-display text-4xl font-bold">50+</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase">Years</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading tag="Who We Are / 01" title="A Legacy of Excellence" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1974, <strong className="text-foreground">Laxmi Engineering Works</strong> has grown from a small workshop into one of India's most trusted industrial manufacturing companies. Our 40,000 sq. ft. state-of-the-art facility houses advanced CNC machinery, in-house testing laboratories, and a team of 100+ skilled engineers and technicians.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We specialize in oil burners, industrial blowers, furnaces, heating units, and custom machinery — serving 500+ clients across oil & gas, steel, power, and automotive sectors with unwavering commitment to quality and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Clients Served" },
                  { num: "40K", label: "Sq. Ft. Facility" },
                  { num: "100+", label: "Engineers" },
                  { num: "10+", label: "Sectors" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="border-l-2 border-primary pl-4 py-2"
                  >
                    <span className="font-display text-2xl font-bold text-primary">{s.num}</span>
                    <span className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-1">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - redesigned cards */}
      <section className="relative py-[15vh] bg-secondary border-t border-border overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-[0.06]" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            tag="Our Foundation / 02"
            title="Built on Integrity"
            description="At Laxmi Engineering Works, we are committed to excellence, precision, and innovation in every component we manufacture."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.serial}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-background border border-border p-8 group hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Serial */}
                <span className="absolute top-4 right-4 font-mono text-[9px] text-muted-foreground/40 tracking-[0.2em]">{v.serial}</span>

                <div className="relative">
                  <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors duration-300">
                    <v.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                  <div className="w-6 h-px bg-primary/40 mb-3 group-hover:w-10 transition-all duration-500" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-[15vh] bg-background border-t border-border">
        <div className="container">
          <SectionHeading tag="What We Do / 03" title="Our Capabilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden border border-border group hover:border-primary/40 transition-all duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img src={cap.image} alt={cap.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105 transition-transform" loading="lazy" width={800} height={512} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
                
                <div className="relative flex gap-5 p-6">
                  <div className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <cap.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[15vh] bg-secondary border-t border-border">
        <div className="container">
          <SectionHeading tag="Our Journey / 04" title="Five Decades of Industry" />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 items-start py-8 relative"
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-[56px] md:left-[76px] top-10 w-[9px] h-[9px] rounded-full bg-primary border-2 border-background z-10" />
                  
                  <span className={`font-display text-3xl md:text-4xl font-bold tabular-nums min-w-[100px] md:min-w-[120px] ${m.highlight ? 'text-primary' : 'text-muted-foreground/50'}`}>
                    {m.year}
                  </span>
                  <div className="pl-8 border-b border-border pb-8 flex-1">
                    <p className="text-foreground leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-[15vh] bg-background border-t border-border">
        <div className="container">
          <SectionHeading tag="Quality Standards / 05" title="Certified & Compliant" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "ISO 9001:2015", desc: "Quality Management System certification ensuring consistent product quality.", icon: Award },
              { title: "In-House Testing", desc: "Complete testing laboratory for dimensional accuracy and material verification.", icon: Shield },
              { title: "Traceability", desc: "Full material traceability from raw material to finished component delivery.", icon: Target },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-secondary border border-border p-8 group hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                  <cert.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-mono text-primary text-sm tracking-widest mb-3">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
