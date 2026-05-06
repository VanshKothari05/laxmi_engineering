import { motion } from "framer-motion";
import { Shield, CheckCircle, FileCheck, Microscope, Award, Target } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SpecCard from "@/components/SpecCard";
import heroImage from "@/assets/hero-quality.jpg";
import certificationImg from "@/assets/quality-certification.png";

const qualityLabUrl = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80";
const inspectionUrl = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80";

const qualityPillars = [
  { icon: Shield, title: "Process Control Discipline", description: "Defined process checkpoints across fabrication, machining, assembly, and final dispatch for stable output quality." },
  { icon: Microscope, title: "Performance Validation", description: "Each unit is function-checked for combustion behavior, flow performance, and operational stability before release." },
  { icon: FileCheck, title: "Inspection Documentation", description: "Structured inspection records and dispatch checklists ensure clarity, consistency, and service-ready handover." },
  { icon: Target, title: "Application-Fit Engineering", description: "Configurations are aligned to actual plant conditions, fuel type, and duty cycle for dependable field performance." },
  { icon: CheckCircle, title: "Stage-Gate Inspection", description: "Multi-stage quality checkpoints during manufacturing ensure zero-defect delivery." },
  { icon: Award, title: "Performance Certification", description: "Every product ships with a comprehensive test certificate and performance documentation." },
];

const qcProcess = [
  { step: "01", title: "Incoming Inspection", desc: "Raw materials verified against specifications — chemical composition, hardness, and dimensional checks." },
  { step: "02", title: "In-Process QC", desc: "Critical dimensions checked at each manufacturing stage using calibrated instruments." },
  { step: "03", title: "Final Inspection", desc: "100% inspection of finished components — dimensional, visual, and functional testing." },
  { step: "04", title: "Documentation", desc: "Test certificates, material certificates, and inspection reports issued with every consignment." },
];

const Quality = () => {
  return (
    <>
      <HeroSection
        tagline="Quality Assurance"
        title="ZERO DEFECT"
        titleAccent="COMMITMENT"
        subtitle="Rigorous quality control at every stage — from raw material to final delivery. Precision you can trust."
        image={heroImage}
      />

       <section className="py-[15vh] bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 overflow-hidden border border-border"
            >
              <img src={qualityLabUrl} alt="Quality testing laboratory" className="w-full h-[350px] object-cover" />
            </motion.div>
            <div className="lg:col-span-7">
              <SectionHeading
                tag="Quality Standards"
                title="Our Quality Framework"
                description="Every product undergoes rigorous inspection and testing protocols to ensure it meets the highest standards of industrial performance."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPillars.map((q) => (
              <SpecCard key={q.title} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-[15vh] bg-secondary border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7">
              <SectionHeading tag="QC Process" title="Quality Control Workflow" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 overflow-hidden border border-border"
            >
              <img src={inspectionUrl} alt="Inspection process" className="w-full h-[300px] object-cover" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {qcProcess.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-display text-6xl font-bold text-primary">{p.step}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-[15vh] bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Heading + Certification Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <SectionHeading tag="Certifications" title="Standards & Compliance" />
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                {[
                  { title: "ISO 9001:2015", desc: "Quality Management System — ensuring consistent quality in design, manufacturing, and delivery." },
                  { title: "IBR Approved", desc: "Indian Boiler Regulation compliant manufacturing for pressure vessels and boiler components." },
                  { title: "CE Marking", desc: "Products designed and tested to meet European health, safety, and environmental standards." },
                ].map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="spec-card bg-secondary border border-border p-6"
                  >
                    <h3 className="font-mono text-primary text-sm tracking-widest mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 overflow-hidden border border-border"
            >
              <img src={certificationImg} alt="Certified manufacturing facility" className="w-full h-[480px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
