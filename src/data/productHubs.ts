export type HubLink = { label: string; to: string };

export type ProductHubConfig = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonical: string;
  heroTitle: string;
  heroTitleAccent?: string;
  lede: string;
  /** Short paragraphs (plain text) */
  paragraphs: string[];
  primaryCta: { label: string; to: string };
  secondaryCtas: HubLink[];
  relatedHubs: HubLink[];
};

const hubs: Record<string, ProductHubConfig> = {
  "oil-burners": {
    path: "/oil-burners",
    seoTitle: "Industrial Oil Burner Manufacturer in Mumbai & India | Laxmi Engineering Works",
    seoDescription:
      "Leading industrial oil burner manufacturer in Mumbai, Maharashtra — LDO, HSD, FO firing, auto/manual/dual fire, 3–350 LPH. ISO 9001:2015. Supply across India. Request a quote.",
    seoKeywords:
      "oil burner manufacturer Mumbai, industrial oil burner India, burner supplier Maharashtra, LDO HSD burner, furnace oil burner manufacturer, dual fire oil burner, Laxmi Engineering Works Goregaon",
    canonical: "/oil-burners",
    heroTitle: "Industrial Oil Burner Manufacturer",
    heroTitleAccent: "in Mumbai & India",
    lede:
      "Laxmi Engineering Works engineers and supplies industrial oil burners for melting, heat treatment, and process heating — built for Indian fuels, plant duty cycles, and long field life.",
    paragraphs: [
      "From our Goregaon East, Mumbai facility, we support projects across Maharashtra and pan-India with application-fit burner sizing, combustion tuning guidance, and documentation for procurement and maintenance teams.",
      "Explore capacities, firing modes, and integration options on our full product catalog, or contact us with your furnace type, fuel, and required heat release for a configuration-led quotation.",
    ],
    primaryCta: { label: "View oil burners in catalog", to: "/products?open=oil-burner" },
    secondaryCtas: [
      { label: "Oil heating & pumping units", to: "/products?open=oil-heating-pumping-unit" },
      { label: "Oil line heaters", to: "/products?open=oil-line-heater" },
    ],
    relatedHubs: [
      { label: "Industrial blowers", to: "/industrial-blowers" },
      { label: "Industrial furnaces", to: "/furnaces" },
    ],
  },
  "industrial-blowers": {
    path: "/industrial-blowers",
    seoTitle: "Industrial Air Blower & ID Blower Manufacturer India | Laxmi Engineering Works",
    seoDescription:
      "Industrial air blower manufacturer in Mumbai — centrifugal air blowers, ID blowers for furnaces and boilers, tube axial fans. IS & AMCA aligned builds. Serving Maharashtra and India-wide supply.",
    seoKeywords:
      "industrial air blower manufacturer Mumbai, ID blower manufacturer India, tube axial fan supplier, centrifugal blower Maharashtra, induced draft blower, industrial ventilation fan manufacturer",
    canonical: "/industrial-blowers",
    heroTitle: "Industrial Blowers & Fans",
    heroTitleAccent: "Air, ID Draft & Axial — India",
    lede:
      "High-performance air movement for combustion draft, ventilation, and process cooling — designed for continuous duty in foundries, furnaces, boilers, and manufacturing plants.",
    paragraphs: [
      "Our blower range includes centrifugal air blowers, induced draft (ID) blowers for flue gas paths, and tube axial fans for high-volume airflow — with MS, SS, and aluminium impeller options and direct or belt drive layouts.",
      "Based in Mumbai, we routinely support customers across India with application-specific selection, fabrication discipline, and after-sales spares readiness.",
    ],
    primaryCta: { label: "Browse air blowers", to: "/products?open=air-blowers" },
    secondaryCtas: [
      { label: "ID blowers", to: "/products?open=id-blower" },
      { label: "Tube axial fans", to: "/products?open=tube-axial-fan" },
    ],
    relatedHubs: [
      { label: "Oil burners", to: "/oil-burners" },
      { label: "Industrial furnaces", to: "/furnaces" },
    ],
  },
  furnaces: {
    path: "/furnaces",
    seoTitle: "Industrial Furnace Manufacturer India | Melting, Pallet & Oil-Fired | Laxmi Engineering Works",
    seoDescription:
      "Industrial furnace manufacturer in India — electric melting furnaces, eco pallet furnaces, oil-fired furnaces for brass, copper, aluminium, zinc, and forging applications. Mumbai engineering, nationwide supply.",
    seoKeywords:
      "industrial furnace manufacturer India, melting furnace manufacturer Mumbai, pallet furnace supplier, oil fired furnace Maharashtra, heat treatment furnace India, brass copper melting furnace",
    canonical: "/furnaces",
    heroTitle: "Industrial Furnace Manufacturer",
    heroTitleAccent: "Melting, Pallet & Oil-Fired",
    lede:
      "Melting, heat treatment, and high-temperature processing equipment — from electric melting systems to oil-fired furnaces and government-promoted pallet furnace technology.",
    paragraphs: [
      "Laxmi Engineering Works supplies furnace solutions matched to metal type, batch size, temperature profile, and fuel strategy, with structured quality documentation from our ISO-driven Mumbai manufacturing base.",
      "Compare melting, pallet, and oil-fired models in the product catalog, or share your process requirements for furnace sizing and refractory strategy guidance.",
    ],
    primaryCta: { label: "Explore furnaces", to: "/products?open=furnace-pallet-furnace" },
    secondaryCtas: [
      { label: "Melting furnace", to: "/products?open=furnace-pallet-furnace&model=Melting%20Furnace" },
      { label: "Oil furnace", to: "/products?open=furnace-pallet-furnace&model=Oil%20Furnace" },
    ],
    relatedHubs: [
      { label: "Oil burners", to: "/oil-burners" },
      { label: "Industrial blowers", to: "/industrial-blowers" },
    ],
  },
};

export function getProductHubConfig(slug: string): ProductHubConfig | undefined {
  return hubs[slug];
}

/** For sitemap / static discovery */
export function listProductHubConfigs(): ProductHubConfig[] {
  return [hubs["oil-burners"], hubs["industrial-blowers"], hubs.furnaces];
}
