import { useEffect } from "react";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ManufacturingBusiness"],
  "@id": "https://laxmieng.com/#organization",
  name: "Laxmi Engineering Works",
  alternateName: "LEW",
  url: "https://laxmieng.com",
  logo: "https://laxmieng.com/og-image.jpg",
  foundingDate: "1974",
  description:
    "Laxmi Engineering Works is an ISO 9001:2015 certified industrial manufacturer based in Mumbai, India. Specialising in oil burners, industrial blowers, furnaces, and custom machinery since 1974.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Unit No. 09, Bhola Bhagwan Industrial Estate, IB Patel Road",
    addressLocality: "Goregaon East",
    addressRegion: "Mumbai",
    postalCode: "400063",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-98332-41824",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-88790-95770",
      contactType: "customer support",
      areaServed: "IN",
    },
  ],
  email: "info@laxmieng.com",
  hasMap: "https://maps.app.goo.gl/RKDVtP2vtr8BcWNL9",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.1634",
    longitude: "72.8491",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Oil Burner" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Air Blowers" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Industrial Furnace" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pallet Furnace" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "ID Blower" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tube Axial Fan" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Oil Heating and Pumping Unit" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cyclone Separator" } },
    ],
  },
};

const StructuredData = () => {
  useEffect(() => {
    const id = "lew-org-schema";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(organizationSchema);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
