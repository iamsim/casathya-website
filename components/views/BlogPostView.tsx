"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost, ContentBlock } from "@/lib/blog-posts";
import { defaultTransition } from "@/lib/motion-variants";

interface BlogPostViewProps {
  post: BlogPost;
}

function ContentBlockRender({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mt-4 leading-relaxed text-[var(--foreground)]">
          {block.text}
        </p>
      );
    case "heading":
      const Tag = block.level === 2 ? "h2" : "h3";
      return (
        <Tag
          className={
            block.level === 2
              ? "mt-10 font-serif text-2xl font-semibold text-[var(--navy)]"
              : "mt-6 font-serif text-xl font-semibold text-[var(--navy)]"
          }
        >
          {block.text}
        </Tag>
      );
    case "image":
      return (
        <figure className="my-8 overflow-hidden rounded-xl">
          <div className="relative aspect-video w-full bg-[var(--cream)]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          {block.alt ? (
            <figcaption className="mt-2 text-center text-sm text-[var(--muted)]">
              {block.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    case "video":
      return (
        <div className="my-8 aspect-video w-full overflow-hidden rounded-xl bg-[var(--navy)]">
          <iframe
            src={block.embedUrl}
            title={block.title ?? "Video"}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    default:
      return null;
  }
}

export function BlogPostView({ post }: BlogPostViewProps) {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero with featured image */}
      <section className="relative overflow-hidden bg-[var(--navy)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--gold)_15%,transparent_50%)] opacity-20" />
        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-12 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-[var(--gold-muted)] hover:text-[var(--cream)]"
          >
            ← Back to blogs
          </Link>
          <motion.p
            className="mt-4 text-sm text-[var(--gold-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={defaultTransition}
          >
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.author ? ` · ${post.author}` : ""}
          </motion.p>
          <motion.h1
            className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* Featured image */}
      <section className="relative -mt-4 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            <Image
              src={post.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24 pt-12 lg:px-8">
        <article className="mx-auto max-w-3xl">
          {post.content.map((block, index) => (
            <ContentBlockRender key={index} block={block} />
          ))}
        </article>
      </section>
    </main>
  );
}
