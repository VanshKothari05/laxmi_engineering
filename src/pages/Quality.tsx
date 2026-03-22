import { motion } from "framer-motion";
import { Shield, CheckCircle, FileCheck, Microscope, Award, Target } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SpecCard from "@/components/SpecCard";
import heroImage from "@/assets/hero-quality.jpg";

const qualityLabUrl = "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80";
const inspectionUrl = "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&q=80";
const certificationUrl = "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80";

const qualityPillars = [
  { icon: Shield, title: "ISO 9001:2015", description: "Certified quality management system ensuring consistent processes and continuous improvement.", serial: "QA-01" },
  { icon: Microscope, title: "In-House Testing Lab", description: "Complete testing laboratory with precision instruments for dimensional accuracy and material verification.", serial: "QA-02" },
  { icon: FileCheck, title: "Full Traceability", description: "End-to-end material traceability from raw material procurement to finished component delivery.", serial: "QA-03" },
  { icon: Target, title: "±0.005mm Tolerance", description: "Precision machining capabilities with ultra-tight tolerances for mission-critical industrial components.", serial: "QA-04" },
  { icon: CheckCircle, title: "Stage-Gate Inspection", description: "Multi-stage quality checkpoints during manufacturing ensure zero-defect delivery.", serial: "QA-05" },
  { icon: Award, title: "Performance Certification", description: "Every product ships with a comprehensive test certificate and performance documentation.", serial: "QA-06" },
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
        tagline="Quality Assurance / ISO 9001:2015"
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
                tag="Quality Standards / 01"
                title="Our Quality Framework"
                description="Every product undergoes rigorous inspection and testing protocols to ensure it meets the highest standards of industrial performance."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPillars.map((q) => (
              <SpecCard key={q.serial} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-[15vh] bg-secondary border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7">
              <SectionHeading tag="QC Process / 02" title="Quality Control Workflow" />
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
          <SectionHeading tag="Certifications / 03" title="Standards & Compliance" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 overflow-hidden border border-border"
          >
            <img src={certificationUrl} alt="Certified manufacturing facility" className="w-full h-[300px] object-cover" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="spec-card bg-secondary border border-border p-8"
              >
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

export default Quality;
