import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobBySlug, getAllJobSlugs } from "@/lib/jobs";
import { JobDetailView } from "@/components/views";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Position not found" };
  return {
    title: `${job.title} | Careers | Chartered Accountants`,
    description: job.roleDescription.slice(0, 160),
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return <JobDetailView job={job} />;
}
