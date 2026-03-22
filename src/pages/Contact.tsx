import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-contact.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Quote request submitted successfully. Our team will contact you within 24 hours.");
      setFormState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <HeroSection
        tagline="Get in Touch / RFQ"
        title="REQUEST"
        titleAccent="FOR QUOTE"
        subtitle="Contact our engineering team for custom solutions, technical specifications, and competitive pricing."
        image={heroImage}
      />

      <section className="py-[15vh] bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <SectionHeading tag="Contact Info / 01" title="Reach Us" />
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Location", value: "Industrial Area, India" },
                  { icon: Phone, label: "Phone", value: "+91 XXXX XXXXXX" },
                  { icon: Mail, label: "Email", value: "info@laxmieng.com" },
                  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <item.icon className="text-primary mt-1" size={20} />
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">
                        {item.label}
                      </span>
                      <span className="text-foreground text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <SectionHeading tag="Quote Form / 02" title="Send a Request" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", type: "text", required: true },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "company", label: "Company Name", type: "text", required: false },
                    { name: "phone", label: "Phone Number", type: "tel", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                        {field.label} {field.required && <span className="text-primary">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="oil-burner">Oil Burner Inquiry</option>
                    <option value="blower">Industrial Blower</option>
                    <option value="furnace">Furnace Requirements</option>
                    <option value="heating-unit">Oil Heating Unit</option>
                    <option value="custom">Custom Machinery</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Describe your requirements, quantities, specifications..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-primary-foreground px-10 py-4 font-mono text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Google Map */}
      <section className="bg-secondary border-t border-border">
        <div className="container py-12">
          <SectionHeading tag="Our Location / 02" title="Find Us" />
        </div>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d72.8311!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Laxmi Engineering Works Location"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
