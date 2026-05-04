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
  introHeading: "Our Expertise",
  introBody:
    "At Sahana D M & Associates, we bridge the gap between complex statutory requirements and seamless business operations. Our team combines specialised international tax experience from KPMG with deep-rooted domestic audit leadership from over a decade at reputable firms — giving clients access to Big 4 thinking with the personalised attention of a boutique practice.",
  verticals: [
    {
      title: "International Taxation & Global Mobility",
      intro:
        "Drawing on five years of specialised practice at KPMG, we navigate the full complexity of cross-border financial interests — from expatriate tax management to treaty-based planning for multinational structures.",
      items: [
        "Expatriate Taxation",
        "DTAA Optimisation",
        "Inbound & Outbound Advisory",
        "Income Tax Act Compliance",
        "End-to-end expatriate management for inbound and outbound professionals",
        "DTAA structuring to eliminate double-taxation exposure",
        "Statutory compliance under Income Tax Act and Indian labour laws",
        "CIT-level appeals and tax assessments managed annually",
      ],
    },
    {
      title: "Strategic Domestic Taxation & Tax Planning",
      intro:
        "We simplify India's evolving direct tax landscape for entrepreneurs and corporate entities through proactive planning, rigorous compliance, and litigation-ready advocacy — so your business can grow without tax uncertainty as a burden.",
      items: [
        "Income Tax Advisory",
        "Tax Optimisation",
        "Scrutiny Assessments",
        "Litigation Support",
        "High-impact tax strategies to legally reduce outflows for startups and enterprises",
        "Scrutiny and departmental proceedings management end-to-end",
        "Income Tax return filing with zero-error, on-time reporting",
        "Advance tax planning and fiscal optimisation opportunities",
        "Appeals representation at CIT level across diverse client profiles",
        "Litigation preparation across firms, trusts, and individuals",
      ],
    },
    {
      title: "GST Advisory & Litigation",
      intro:
        "From business-model-specific GST categorisation to formal advance rulings and departmental representation, we provide a complete GST solution — compliance, strategy, and advocacy under one roof.",
      items: [
        "GST Registration & Compliance",
        "Advance Rulings",
        "Departmental Representation",
        "Reconciliation",
        "Business-model-specific GST categorisation for regulatory clarity",
        "End-to-end GST return filing and reconciliation management",
        "Formal representations in litigation and advance ruling proceedings",
        "Strategic advisory to optimise GST positions across supply chains",
        "ROC and statutory filings with zero-error compliance",
        "Compliance health checks and input tax credit optimisation",
      ],
    },
    {
      title: "Audit, Assurance & Governance",
      intro:
        "With a combined history of leading audits for listed companies, PSUs, NBFCs, and venture capital firms, we deliver robust financial oversight that gives stakeholders genuine confidence in the numbers.",
      items: [
        "Statutory Audits",
        "Internal Audits",
        "NBFC & VC Audits",
        "Public Sector",
        "Statutory audits for NBFCs, software firms, and venture capital funds",
        "Internal audits for public companies and government institutions",
        "PSU audit experience including Uranium Corporation of India Limited",
        "VAT and inspection audit submissions for listed companies",
        "Internal control systems for operational transparency",
        "Bank concurrent audits and regulatory compliance reviews",
      ],
    },
    {
      title: "Corporate Advisory & Business Structuring",
      intro:
        "Beyond compliance, we serve as a strategic partner — structuring your business for long-term fiscal health, regulatory resilience, and scalable growth. Our entrepreneur-first approach ensures that complexity never slows you down.",
      items: [
        "Business Structuring",
        "Companies Act, 2013",
        "Startup Advisory",
        "Corporate Compliance",
        "Business model structuring for fiscal health and regulatory resilience",
        "Companies Act, 2013 compliance across the full statutory spectrum",
        "Startup-focused advisory from incorporation through scaling",
        "Corporate secretarial filings and ROC return management",
        "Strategic foresight for businesses navigating regulatory change",
        "Entrepreneur-first approach - simplifying statutes so you can scale",
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
    designation: "Senior Associate - M.com, B.Com",
    qualifications: ["M.Com", "B.Com"],
    experience: "14+ Years of Professional Experience",
    expertise: [
      "Strategic Tax Planning: Designing high-impact tax strategies to legally reduce outflows for startups and established enterprises.",
      "Statutory Compliance: Managing end-to-end filing for GST, Income Tax, and ROC returns to ensure zero-error reporting.",
      "Corporate Advisory: Structuring business models for long-term fiscal health and regulatory resilience.",
      "Audit Management: Leading complex tax and audit assignments with a focus on simplifying the Indian tax landscape for entrepreneurs.",
    ],
    initials: "AN",
    sections: [
      {
        title: "Professional Profile",
        content:
          "Aditya Nalpet is a seasoned tax and compliance professional whose career spans over 14 years across diverse industries and client profiles. He joined Sahana D M & Associates bringing with him a wealth of hands-on expertise in statutory compliance, direct taxation, and corporate advisory. His core philosophy is bridging the gap between complex legislative requirements and practical business growth — ensuring that regulatory obligations never become a bottleneck to scaling.",
      },
      {
        title: "Domestic Taxation & Compliance Expertise (K S Ramkumar & Co.)",
        content:
          "Prior to joining the firm, Aditya spent nearly 12 years as a Manager at K S Ramkumar & Co., Chartered Accountants, one of Bengaluru's reputable domestic CA firms. During this tenure, he led a wide array of tax and audit assignments spanning startups, SMEs, and established enterprises across sectors including manufacturing, trading, and services. He developed deep proficiency in end-to-end Income Tax compliance — from return filing and advance tax planning to managing scrutiny assessments and departmental proceedings. His consistent exposure to high-volume, multi-sector work sharpened his ability to deliver precise, zero-error reporting under demanding timelines.",
      },
      {
        title: "GST, Corporate Advisory & Audit Management",
        content:
          "Aditya's expertise extends well beyond compliance into proactive fiscal strategy. He specialises in designing high-impact tax structures that legally optimise outflows for both early-stage startups and mature enterprises. On the GST front, he manages end-to-end filing, reconciliations, and advisory on business-model-specific applicability. His audit management experience includes leading complex tax and statutory audit assignments, with a particular focus on demystifying the Indian tax landscape for entrepreneurs. Known for his methodical, entrepreneur-first approach, Aditya provides the strategic foresight businesses need to grow with confidence and regulatory resilience.",
      },
    ],
  },
] as const;
