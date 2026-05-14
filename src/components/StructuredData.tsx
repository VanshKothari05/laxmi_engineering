import { useEffect } from "react";
import { products, toSlug } from "@/pages/Products";
import { SITE_FAQ } from "@/data/siteFaq";
import { COMPANY, SITE_URL, SOCIAL_PROFILES } from "@/constants/site";

function productListUrl(productName: string): string {
  const slug = toSlug(productName);
  if (productName === "Oil Burner") return `${SITE_URL}/oil-burners`;
  if (productName === "Furnace / Pallet Furnace") return `${SITE_URL}/furnaces`;
  if (productName === "Air Blowers" || productName === "ID Blower" || productName === "Tube Axial Fan") {
    return `${SITE_URL}/industrial-blowers`;
  }
  return `${SITE_URL}/products?open=${slug}`;
}

function buildJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const localId = `${SITE_URL}/#localbusiness`;
  const websiteId = `${SITE_URL}/#website`;
  const faqId = `${SITE_URL}/#faq`;
  const catalogId = `${SITE_URL}/#product-catalog`;

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: COMPANY.legalName,
    alternateName: "LEW",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    foundingDate: COMPANY.foundingYear,
    description:
      "ISO 9001:2015 certified industrial manufacturer in Mumbai, India — oil burners, industrial blowers, furnaces, cyclone separators, and oil heating systems since 1974.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phonePrimary,
        contactType: "sales",
        areaServed: ["IN", "Mumbai", "Maharashtra"],
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneAlt,
        contactType: "technical support",
        areaServed: "IN",
      },
    ],
    email: COMPANY.email,
    sameAs: [...SOCIAL_PROFILES],
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": localId,
    parentOrganization: { "@id": orgId },
    name: COMPANY.legalName,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: COMPANY.phonePrimary,
    email: COMPANY.email,
    priceRange: "$$",
    hasMap: COMPANY.mapUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE_URL,
    name: COMPANY.legalName,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };

  const itemListElement = products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.desc,
      url: productListUrl(p.name),
      brand: { "@type": "Brand", name: COMPANY.legalName },
      category: p.category,
      sku: p.serial,
    },
  }));

  const productCatalog = {
    "@type": "ItemList",
    "@id": catalogId,
    name: "Industrial equipment catalog",
    numberOfItems: products.length,
    itemListElement,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": faqId,
    mainEntity: SITE_FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, productCatalog, faqPage],
  };
}

const StructuredData = () => {
  useEffect(() => {
    const id = "lew-jsonld-graph";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildJsonLd());

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
