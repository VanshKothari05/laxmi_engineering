/** Production site origin — keep in sync with index.html canonical and public/sitemap.xml */
export const SITE_URL = "https://laxmieng.com";

export const COMPANY = {
  legalName: "Laxmi Engineering Works",
  shortName: "Laxmi Engineering Works",
  email: "info@laxmieng.com",
  phonePrimary: "+91-98332-41824",
  phoneAlt: "+91-88790-95770",
  foundingYear: "1974",
  streetAddress: "Unit No. 09, Bhola Bhagwan Industrial Estate, IB Patel Road, Goregaon East",
  addressLocality: "Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "400063",
  addressCountry: "IN",
  /** Full single-line for NAP consistency */
  fullAddress:
    "Unit No. 09, Bhola Bhagwan Industrial Estate, IB Patel Road, Goregaon East, Mumbai 400063, Maharashtra, India",
  mapUrl: "https://maps.app.goo.gl/RKDVtP2vtr8BcWNL9",
  geo: { lat: "19.1634", lng: "72.8491" },
} as const;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/105469550",
  "https://www.youtube.com/channel/UC1TFxFn87k-qsHiDOp0j8Sw",
  "https://www.instagram.com/_laxmi_engineering_works_",
  "https://www.facebook.com/share/1CJ5NP1idM",
  "https://www.laxmieng.com",
] as const;
