/**
 * Site-wide constants and configuration.
 * Keeps navigation, branding, and copy in one place for maintainability.
 */

export const SITE_CONFIG = {
  name: "Chartered Accountants",
  tagline: "Trusted expertise. Clear guidance.",
  email: "contact@ca-firm.com",
  phone: "+91 98765 43210",
} as const;

/** Contact page: office location and map embed (replace mapEmbedUrl with your own from Google Maps → Share → Embed) */
export const CONTACT_CONFIG = {
  officeAddress: {
    line1: "123, Business Park",
    line2: "Bandra Kurla Complex, Bandra (East)",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400 051",
  },
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  /** Get your embed URL from Google Maps: search your location → Share → Embed a map */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.71489939354!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da8edce430d829b!2sBandra%20Kurla%20Complex%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1633024800!5m2!1sen!2sin",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const HERO_CONFIG = {
  headline: "Expert Chartered Accountancy & Advisory",
  subheadline:
    "We deliver clarity in numbers and strategy - audit, tax, compliance, and advisory tailored for businesses and individuals.",
  primaryCta: "Get in touch",
  secondaryCta: "Our services",
} as const;

export const SERVICES_CONFIG = [
  {
    title: "Audit & Assurance",
    description:
      "Independent audits and assurance services that build stakeholder confidence and meet regulatory requirements.",
    icon: "audit",
  },
  {
    title: "Tax Planning & Compliance",
    description:
      "Strategic tax planning and timely compliance to optimise your position and keep you on the right side of the law.",
    icon: "tax",
  },
  {
    title: "Advisory & Consulting",
    description:
      "Business advisory, due diligence, and restructuring support to help you make informed decisions.",
    icon: "advisory",
  },
] as const;

export const WHY_US_CONFIG = [
  {
    title: "Decades of experience",
    description: "Our team brings deep industry knowledge and a track record of reliable outcomes.",
  },
  {
    title: "Client-first approach",
    description: "We listen first, then advise—solutions tailored to your goals and circumstances.",
  },
  {
    title: "Integrity & confidentiality",
    description: "Your data and interests are protected with the highest professional standards.",
  },
] as const;

export const CTA_CONFIG = {
  headline: "Ready to work with a trusted partner?",
  subtext: "Schedule a consultation or send us an enquiry. We respond within 24 hours.",
  buttonLabel: "Contact us today",
} as const;

/** Indian CA services for the Our Services page */
export const OUR_SERVICES_PAGE_CONFIG = [
  {
    title: "Statutory & Internal Audit",
    description:
      "Statutory audits under the Companies Act 2013, tax audits under the Income Tax Act, and internal audits to strengthen controls and governance.",
    icon: "audit",
  },
  {
    title: "Income Tax Planning & Compliance",
    description:
      "Tax planning, return filing, assessments, and representation before the Income Tax Department. We help individuals and businesses optimise their tax position.",
    icon: "tax",
  },
  {
    title: "GST Registration, Returns & Compliance",
    description:
      "GST registration, monthly/quarterly returns (GSTR-1, GSTR-3B, annual returns), refunds, and advisory on GST rates and input tax credit.",
    icon: "gst",
  },
  {
    title: "ROC Compliance & Company Law",
    description:
      "Annual filings (AOC-4, MGT-7), director KYC, board reports, and compliance with the Companies Act and rules prescribed by the Ministry of Corporate Affairs.",
    icon: "roc",
  },
  {
    title: "Company Incorporation & Secretarial",
    description:
      "Incorporation of private limited, OPC, LLP; drafting of MOA/AOA; board meetings; and secretarial compliance under the Companies Act and SEBI regulations.",
    icon: "incorporation",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Maintenance of books of account, bank reconciliation, ledger management, and preparation of trial balance and financial statements as per Indian GAAP.",
    icon: "bookkeeping",
  },
  {
    title: "Financial Reporting (Ind AS)",
    description:
      "Preparation and presentation of financial statements under Indian Accounting Standards (Ind AS) and compliance with applicable reporting frameworks.",
    icon: "reporting",
  },
  {
    title: "Insolvency & Bankruptcy (IBC)",
    description:
      "Advisory and support for corporate insolvency resolution process (CIRP), liquidation, and compliance under the Insolvency and Bankruptcy Code, 2016.",
    icon: "insolvency",
  },
  {
    title: "Due Diligence & Valuation",
    description:
      "Financial due diligence for M&A, business valuation, and fairness opinions to support transactions and strategic decisions.",
    icon: "due-diligence",
  },
  {
    title: "Transfer Pricing",
    description:
      "Transfer pricing documentation (master file, local file), benchmarking, and representation before the tax authorities on international transaction matters.",
    icon: "transfer-pricing",
  },
] as const;

/** Chartered Accountant profiles for the About page */
export const ABOUT_PROFILES = [
  {
    id: "1",
    name: "Rajesh Kumar",
    designation: "Partner",
    qualifications: ["FCA", "B.Com (Hons)", "DISA (ICAI)"],
    experience: "18+ years",
    expertise: [
      "Statutory & Tax Audit",
      "GST & Indirect Tax",
      "Company Law & ROC",
    ],
    bio: "Rajesh leads our audit and assurance practice and has advised listed companies, banks, and public sector undertakings. He specialises in Ind AS implementation and regulatory compliance under the Companies Act and has been a speaker at ICAI seminars.",
    initials: "RK",
  },
  {
    id: "2",
    name: "Priya Sharma",
    designation: "Partner",
    qualifications: ["FCA", "CS", "LLB"],
    experience: "15+ years",
    expertise: [
      "Tax Planning & Litigation",
      "Transfer Pricing",
      "M&A Due Diligence",
    ],
    bio: "Priya heads our tax and advisory practice. She has extensive experience in direct tax, transfer pricing, and corporate restructuring. She represents clients before the Income Tax Appellate Tribunal and has advised on several cross-border transactions.",
    initials: "PS",
  },
] as const;
