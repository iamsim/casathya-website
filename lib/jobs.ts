/**
 * Open positions / careers data for the CA firm.
 */

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  experienceLevel: string;
  roleDescription: string;
  keyResponsibilities?: string[];
  qualifications?: string[];
  postedAt: string;
}

const JOBS: Job[] = [
  {
    slug: "senior-accountant-audit",
    title: "Senior Accountant – Audit & Assurance",
    department: "Audit & Assurance",
    location: "Mumbai",
    experienceLevel: "3–6 years",
    postedAt: "2025-02-01",
    roleDescription:
      "We are looking for a Senior Accountant to support our audit and assurance practice. You will work on statutory audits, tax audits, and internal audits for a variety of clients including listed companies, SMEs, and not-for-profits. You will lead fieldwork, review junior work, and engage directly with clients under the supervision of managers and partners.",
    keyResponsibilities: [
      "Lead and execute statutory and tax audit assignments.",
      "Supervise and review work of articled assistants and junior team members.",
      "Prepare audit documentation and reports in line with applicable standards.",
      "Interact with clients for information and clarifications.",
      "Support in planning and risk assessment for audit engagements.",
    ],
    qualifications: [
      "CA (Chartered Accountant) qualified or CA Final (Group II cleared).",
      "Strong knowledge of Indian GAAP, Ind AS, and auditing standards.",
      "Proficiency in MS Office and audit tools.",
    ],
  },
  {
    slug: "tax-associate",
    title: "Tax Associate – Direct Tax",
    department: "Tax",
    location: "Mumbai",
    experienceLevel: "1–4 years",
    postedAt: "2025-02-10",
    roleDescription:
      "The Tax team is expanding. We need a Tax Associate to assist in income tax planning, return filing, assessments, and litigation support. You will work on individual and corporate tax matters and will have the opportunity to learn transfer pricing and international tax with time.",
    keyResponsibilities: [
      "Prepare and review income tax returns for individuals and companies.",
      "Assist in tax planning and advisory assignments.",
      "Draft replies to notices and support in assessment proceedings.",
      "Maintain engagement files and track compliance deadlines.",
    ],
    qualifications: [
      "CA Intermediate/Final or CA qualified. B.Com with prior tax experience may be considered.",
      "Familiarity with Income Tax Act and related rules.",
      "Good communication and drafting skills.",
    ],
  },
  {
    slug: "gst-executive",
    title: "GST Executive",
    department: "Indirect Tax",
    location: "Mumbai",
    experienceLevel: "1–3 years",
    postedAt: "2025-02-05",
    roleDescription:
      "We are hiring a GST Executive to handle GST registration, returns (GSTR-1, GSTR-3B, annual return), refunds, and compliance for our clients. You will work in a team that supports businesses across sectors and will get exposure to audits and departmental proceedings.",
    keyResponsibilities: [
      "Manage GST registration, amendments, and cancellations.",
      "Prepare and file GSTR-1, GSTR-3B, and annual returns.",
      "Assist in GST refund applications and follow-ups.",
      "Support in GST audits and departmental notices.",
    ],
    qualifications: [
      "CA Intermediate or B.Com with GST certification. Prior GST compliance experience preferred.",
      "Hands-on experience on GST portal and Excel.",
    ],
  },
  {
    slug: "articled-assistant",
    title: "Articled Assistant",
    department: "Audit & Assurance",
    location: "Mumbai",
    experienceLevel: "0–1 year (CA Intermediate)",
    postedAt: "2025-01-28",
    roleDescription:
      "We invite applications for Articled Assistant positions. You will be assigned to audit, tax, or compliance teams and will get structured training and exposure to statutory audit, tax audits, and company law compliance. This is an excellent opportunity to complete your practical training in a professional CA firm.",
    keyResponsibilities: [
      "Assist in audit procedures, vouching, and verification.",
      "Prepare working papers and schedules.",
      "Support in tax return preparation and ROC filings as assigned.",
      "Maintain professional ethics and timely submission of work.",
    ],
    qualifications: [
      "CA Intermediate (both groups cleared) and registered for articles.",
      "Willingness to learn and work in a team.",
    ],
  },
  {
    slug: "company-secretary-executive",
    title: "Company Secretary (Executive level)",
    department: "Secretarial & Compliance",
    location: "Mumbai",
    experienceLevel: "2–5 years",
    postedAt: "2025-02-12",
    roleDescription:
      "We need a Company Secretary at executive level to handle secretarial compliance, board meetings, annual filings (MGT-7, AOC-4), director KYC, and company law matters. You will work with multiple entities and support the partners on ROC and MCA-related assignments.",
    keyResponsibilities: [
      "Draft notices, agendas, and minutes for board and general meetings.",
      "Ensure timely filing of MGT-7, AOC-4, and other ROC forms.",
      "Manage director KYC and other MCA compliances.",
      "Advise on company law and secretarial standards.",
    ],
    qualifications: [
      "ACS (Associate Company Secretary). CS professional with relevant experience may be considered.",
      "Sound knowledge of the Companies Act, 2013 and MCA portal.",
    ],
  },
];

export function getAllJobs(): Job[] {
  return [...JOBS].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return JOBS.map((job) => job.slug);
}
