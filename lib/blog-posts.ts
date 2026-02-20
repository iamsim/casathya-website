/**
 * Blog post data and content block types.
 * Content blocks support paragraphs, headings, images, and video embeds.
 */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "video"; embedUrl: string; title?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  author?: string;
  content: ContentBlock[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-gst-compliance-for-small-businesses",
    title: "Understanding GST Compliance for Small Businesses",
    excerpt:
      "A practical guide to GST registration, returns, and common pitfalls for small businesses in India.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    publishedAt: "2024-01-15",
    author: "Rajesh Kumar",
    content: [
      {
        type: "paragraph",
        text: "Goods and Services Tax (GST) has simplified indirect taxation in India, but compliance can still be challenging for small businesses. This post outlines the key requirements and how to stay on top of them.",
      },
      {
        type: "heading",
        level: 2,
        text: "Who needs to register?",
      },
      {
        type: "paragraph",
        text: "Businesses with an aggregate turnover exceeding ₹40 lakh (₹20 lakh in special category states) in a financial year must register under GST. Voluntary registration is also possible and often beneficial for claiming input tax credit.",
      },
      {
        type: "heading",
        level: 2,
        text: "Filing returns on time",
      },
      {
        type: "paragraph",
        text: "Monthly or quarterly returns (GSTR-1, GSTR-3B) must be filed by the due dates to avoid interest and late fees. Setting up reminders and using a reliable accounting tool can help.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        alt: "Business documents and calculator",
      },
      {
        type: "paragraph",
        text: "If you need help with GST registration or returns, reach out to our team for a consultation.",
      },
    ],
  },
  {
    slug: "five-tips-for-better-financial-reporting",
    title: "Five Tips for Better Financial Reporting",
    excerpt:
      "Improve clarity and credibility of your financial statements with these straightforward practices.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    publishedAt: "2024-02-01",
    author: "Priya Sharma",
    content: [
      {
        type: "paragraph",
        text: "Clear financial reporting builds trust with stakeholders and helps you make better decisions. Here are five practices we recommend.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Keep a consistent reporting calendar",
      },
      {
        type: "paragraph",
        text: "Close your books on the same dates each period and publish reports on a predictable schedule. Consistency reduces errors and sets clear expectations.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Reconcile before you report",
      },
      {
        type: "paragraph",
        text: "Reconcile bank accounts, receivables, and payables before finalising numbers. Unreconciled items often hide inaccuracies.",
      },
      {
        type: "video",
        embedUrl: "https://www.youtube.com/embed/RGOj5yH7evk",
        title: "Financial reporting overview",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Use notes to explain assumptions",
      },
      {
        type: "paragraph",
        text: "Accounting policies and key assumptions should be disclosed in notes. This improves transparency and helps readers interpret the numbers correctly.",
      },
      {
        type: "paragraph",
        text: "For more tailored advice on financial reporting and Ind AS, get in touch with our advisory team.",
      },
    ],
  },
  {
    slug: "company-incorporation-checklist",
    title: "Company Incorporation Checklist: What You Need",
    excerpt:
      "Documents, steps, and timelines for incorporating a private limited company in India.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    publishedAt: "2024-02-20",
    author: "Rajesh Kumar",
    content: [
      {
        type: "paragraph",
        text: "Incorporating a private limited company involves several steps and documents. Use this checklist to prepare and avoid delays.",
      },
      {
        type: "heading",
        level: 2,
        text: "Documents required",
      },
      {
        type: "paragraph",
        text: "You will need identity and address proof for all directors and shareholders, proof of registered office address, and no-objection certificates where the property is rented. Digital signatures (DSC) and director identification (DIN) are also mandatory.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        alt: "Office and documents",
      },
      {
        type: "heading",
        level: 2,
        text: "Timeline and fees",
      },
      {
        type: "paragraph",
        text: "Under the SPICe+ route, incorporation can be completed in a few days if documents are in order. Government fees depend on authorised capital. We can guide you through the process and handle filings on your behalf.",
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
