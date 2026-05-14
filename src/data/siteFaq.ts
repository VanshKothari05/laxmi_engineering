/** Shared FAQ copy for homepage UI and JSON-LD FAQPage — keep in sync. */
export type FaqItem = { question: string; answer: string };

export const SITE_FAQ: FaqItem[] = [
  {
    question: "Where is Laxmi Engineering Works located?",
    answer:
      "We are based at Unit No. 09, Bhola Bhagwan Industrial Estate, IB Patel Road, Goregaon East, Mumbai 400063, Maharashtra, India. We supply industrial oil burners, blowers, and furnaces across India including Maharashtra, Gujarat, Karnataka, and other states.",
  },
  {
    question: "Do you manufacture industrial oil burners in Mumbai?",
    answer:
      "Yes. Laxmi Engineering Works designs and manufactures industrial oil burners and combustion equipment from our ISO 9001:2015 certified facility in Mumbai, with capacities from low LPH to high-duty applications for furnaces, kilns, and process heating.",
  },
  {
    question: "What products do you offer besides oil burners?",
    answer:
      "Our range includes industrial air blowers, ID blowers, tube axial fans, melting and pallet furnaces, oil-fired furnaces, oil heating and pumping units, oil line heaters, oil filters, cyclone separators, and industrial valves — engineered for Indian plant conditions.",
  },
  {
    question: "How can I request a quotation or technical support?",
    answer:
      "Use the contact form on our website, email info@laxmieng.com, or call +91 98332 41824. Share your application, fuel type, capacity, and site location so our team can recommend the right configuration and documentation.",
  },
  {
    question: "Are you ISO certified?",
    answer:
      "Yes. Laxmi Engineering Works operates under ISO 9001:2015 quality management systems, with structured inspection and documentation for industrial equipment dispatch.",
  },
];
