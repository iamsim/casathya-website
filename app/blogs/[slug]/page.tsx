import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-posts";
import { BlogPostView } from "@/components/views";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Blogs | Chartered Accountants`,
    description: post.excerpt,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostView post={post} />;
}
