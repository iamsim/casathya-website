/**
 * Site-wide constants and configuration.
 * Keeps navigation, branding, and copy in one place for maintainability.
 */

export const SITE_CONFIG = {
  name: "Chartered Accountants",
  tagline: "Trusted expertise. Clear guidance.",
  email: "info@casatya.in",
  phone: "+91-9611793679",
} as const;

/** Let's Connect page: office address and map embed (replace mapEmbedUrl with your own from Google Maps → Share → Embed) */
export const CONTACT_CONFIG = {
  officeAddress: {
    line1: "Sahana D M & Associates",
    line2: "Chartered Accountants",
    line3: "No. 2, Flat No. 1, G D Villa, 1st Main, RMS Colony, Sanjaynagar",
    city: "Bangalore",
    pincode: "560094",
  },
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  /** Get your embed URL from Google Maps: search your location → Share → Embed a map */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9327590496728!2d77.57371457500555!3d13.03995201337618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17003811d4ed%3A0xa275631588bc4ba3!2sSahana%20D%20M%20%26%20Associates!5e0!3m2!1sen!2sin!4v1773382707987!5m2!1sen!2sin",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Expertise" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Let's Connect" },
] as const;

export const HERO_CONFIG = {
  headline: "Expert Chartered Accountancy & Advisory",
  subheadline:
    "We provide high-impact taxation and audit services that bridge the gap between complex statutory requirements and seamless business operations. Established in 2018, our firm is built on a foundation of technical excellence, meticulous advocacy, and a commitment to end-to-end accountability",
  primaryCta: "Get in touch",
  secondaryCta: "Our expertise",
} as const;

/** Three expertise verticals for the home page section */
export const EXPERTISE_CONFIG = [
  {
    title: "International Taxation & Global Mobility",
    description:
      "Leveraging a specialised background at Big4, we navigate the complexities of cross-border financial interests.",
    icon: "tax",
  },
  {
    title: "Strategic Domestic Taxation & GST",
    description:
      "We simplify the Indian tax landscape for entrepreneurs and corporate entities through proactive planning.",
    icon: "gst",
  },
  {
    title: "Audit, Assurance & Governance",
    description:
      "With a combined history of leading audits for listed companies, PSUs, and startups, we provide robust financial oversight.",
    icon: "audit",
  },
] as const;

export const WHY_US_CONFIG = [
  {
    title: "12+ Years of Proven Pedigree",
    description:
      "Our leadership brings a blend of Big 4 consulting and over a decade of hands-on management at reputable domestic firms.",
  },
  {
    title: "Litigation-Ready Advocacy",
    description:
      "We don't just file returns; we represent your interests, managing over 100 tax assessments annually and handling appeals at the CIT level.",
  },
  {
    title: "Entrepreneur-First Approach",
    description:
      "We specialise in simplifying complex statutes so you can focus on scaling your business.",
  },
] as const;

export const CTA_CONFIG = {
  headline: "Ready to work with a trusted partner?",
  subtext: "Schedule a consultation or send us an enquiry. We respond within 24 hours.",
  buttonLabel: "Contact us today",
} as const;

/** Our Expertise page: intro and core service verticals */
export const OUR_EXPERTISE_PAGE_CONFIG = {
  introHeading:
    "Our Expertise: A Synergy of Global Standards & Local Mastery",
  introBody:
    "At Sahana D M and Associates, we bridge the gap between \"Big 4\" technical rigor and boutique-style personalised attention. By combining specialised international tax experience with deep-rooted domestic audit leadership, we provide a 360-degree financial framework for our clients.",
  verticals: [
    {
      title: "International Taxation & Global Mobility",
      intro:
        "Leveraging a specialised background at Big4, we navigate the complexities of cross-border financial interests.",
      items: [
        "Expatriate Tax Management: End-to-end advisory for inbound and outbound individuals.",
        "DTAA Optimisation: Strategic advice on Double Taxation Avoidance Agreements to ensure global tax efficiency.",
      ],
    },
    {
      title: "Strategic Domestic Taxation & GST",
      intro:
        "We simplify the Indian tax landscape for entrepreneurs and corporate entities through proactive planning.",
      items: [
        "GST Advisory & Litigation: Expert representation, advance rulings, and business-model-specific GST categorisation.",
        "Tax Optimisation: Designing strategies to legally minimise tax outflows while maximising fiscal health.",
        "Corporate Compliance: Seamless filing of Income Tax, GST, and ROC returns.",
      ],
    },
    {
      title: "Audit, Assurance & Governance",
      intro:
        "With a combined history of leading audits for listed companies, PSUs, and startups, we provide robust financial oversight.",
      items: [
        "Statutory Audits: Expert auditing for NBFCs, Software Development firms, and Venture Capital funds.",
        "Internal Control Systems: Implementing rigorous internal mechanisms to ensure statutory concurrence and operational transparency.",
        "Public Sector Expertise: Proven experience in internal audits for entities like the Uranium Corporation of India Limited.",
      ],
    },
  ],
} as const;

/** Chartered Accountant profiles for the About page */
export const ABOUT_PROFILES = [
  {
    id: "1",
    name: "Sahana D M",
    designation: "Proprietor & Founder",
    qualifications: ["FCA", "B.Com"],
    experience: "12+ Years of Professional Experience",
    expertise: [
      "Domestic Corporate Taxation: End-to-end tax advisory, statutory attestations, and compliance for corporate and non-corporate sectors.",
      "International & Expatriate Taxation: Specialised advisory on DTAA benefits and tax implications for inbound and outbound individuals.",
      "GST Advisory & Litigation: Strategic representation, seeking advance rulings, and business-model-specific GST categorisation.",
      "Audit & Assurance: Handling audits for NBFCs, Software Development firms, Venture Capital, and Public Sector Undertakings.",
    ],
    initials: "SDM",
    sections: [
      {
        title: "Professional Profile",
        content:
          "Since establishing Sahana D M and Associates on June 25, 2018, Sahana has focused on providing high-stakes taxation and audit services to the corporate sector. Her practice covers the full spectrum of the Companies Act, 2013, including audits for NBFCs, venture capital firms, and software developers. She is a specialist in GST Law, providing regular compliance support and making formal representations for litigation and advance rulings.",
      },
      {
        title: "International Taxation Expertise (KPMG)",
        content:
          "Prior to her independent practice, Sahana spent five years with KPMG in the specialised field of Expatriate Taxation. Her role involved managing end-to-end tax implications for inbound and outbound professionals, navigating Double Taxation Avoidance Agreements (DTAA), and ensuring statutory compliance under the Income Tax Act and the labour laws. During this tenure, she managed over 100 tax assessments per year and handled Income Tax appeals at the CIT level.",
      },
      {
        title: "Public Sector & Statutory Experience",
        content:
          "Sahana's technical breadth includes significant assignments in the public and listed sectors. She has handled internal audits for the public companies, inspection audits for government institutions, and submissions, VAT Audit reports for listed companies. Her foundational years included training in bank concurrent audits and preparation for income tax litigations across firms, trusts, and individual businesses.",
      },
    ],
  },
  {
    id: "2",
    name: "Aditya Nalpet",
    designation: "Senior Associate",
    qualifications: ["M.Com", "B.Com"],
    experience: "14+ years of experience",
    expertise: [
      "Strategic Tax Planning: Designing high-impact tax strategies to legally reduce outflows for startups and established enterprises.",
      "Statutory Compliance: Managing end-to-end filing for GST, Income Tax, and ROC returns to ensure zero-error reporting.",
      "Corporate Advisory: Structuring business models for long-term fiscal health and regulatory resilience.",
      "Audit Management: Leading complex tax and audit assignments with a focus on simplifying the Indian tax landscape for entrepreneurs.",
    ],
    initials: "AN",
    bio: "Aditya is a seasoned tax and compliance professional with over 14 years of experience. Before joining our firm, he spent nearly 12 years as a Manager at K S Ramkumar & Co., Chartered Accountants where he spearheaded diverse tax and audit assignments for a wide array of business sectors.\n\nHis core mission is to bridge the gap between complex legislative requirements and practical business growth. Aditya specialises in navigating the intricacies of the Income Tax Act and GST, helping clients maintain seamless compliance while identifying opportunities for fiscal optimisation. Known for his \"entrepreneur-first\" approach, he provides the clarity and strategic foresight necessary for businesses to scale without the burden of tax uncertainty.",
  },
] as const;
