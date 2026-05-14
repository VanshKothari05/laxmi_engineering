import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";
import heroImage from "@/assets/hero-contact.jpg";
import { toast } from "sonner";

const Contact = () => {
  useSEO({
    title: "Contact Us | Get a Quote — Laxmi Engineering Works, Mumbai",
    description: "Contact Laxmi Engineering Works for industrial equipment quotes. Located at Bhola Bhagwan Industrial Estate, Goregaon East, Mumbai 400063. Call +91 98332 41824 or email info@laxmieng.com.",
    canonical: "/contact",
    keywords: "contact Laxmi Engineering Works, industrial equipment quote Mumbai, oil burner supplier contact, blower manufacturer Mumbai, Goregaon East Mumbai manufacturer",
  });

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
        tagline="Get in Touch"
        title="REQUEST"
        titleAccent="FOR QUOTE"
        subtitle="Contact our engineering team for custom solutions, product details, and competitive pricing."
        image={heroImage}
        imageAlt="Contact Laxmi Engineering Works for industrial oil burner and furnace quotes — Mumbai manufacturer"
      />

      <section className="py-[15vh] bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <SectionHeading tag="Contact Info" title="Reach Us" />
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Location", value: "Unit No. 09, Laxmi Engineering Works, Bhola Bhagwan Industrial Estate, IB Patel Road, Goregaon East, Mumbai – 400063, Maharashtra" },
                  { icon: Phone, label: "Phone", values: ["+91 98332 41824", "+91 88790 95770"] },
                  { icon: Mail, label: "Email", values: ["info@laxmieng.com", "sailesh_bhat@rediffmail.com"] }
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <item.icon className="text-primary mt-1 shrink-0" size={26} />
                    <div>
                      <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase block mb-1">
                        {item.label}
                      </span>
                      {"values" in item ? (
                        <div className="flex flex-col gap-1">
                          {item.values.map((v) => (
                            <span key={v} className="text-foreground text-base">{v}</span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-foreground text-base">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <SectionHeading tag="Quote Form" title="Send a Request" />
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
                    <option value="pallet-furnace">Pallet Furnace</option>
                    <option value="heating-unit">Oil Heating and Pumping Unit</option>
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
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container">
          <SectionHeading tag="Our Location" title="Find Us" />
          <div className="border border-border overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Unit%20No.%2009%2C%20Laxmi%20Engineering%20Works%2C%20Bhola%20Bhagwan%20Industrial%20Estate%2C%20IB%20Patel%20Road%2C%20Goregaon%20East%2C%20Mumbai%20400063&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, filter: "grayscale(60%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laxmi Engineering Works Location"
            />
          </div>
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/RKDVtP2vtr8BcWNL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Open Exact Location
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;