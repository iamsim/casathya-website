"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion-variants";

export function BlogsView() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--gold)_15%,transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold-muted)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            Insights & updates
          </motion.p>
          <motion.h1
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            Blogs
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            Articles on tax, compliance, and business advisory from our team.
          </motion.p>
        </div>
      </section>

      {/* Blog cards */}
      <section className="px-6 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {posts.map((post) => (
              <motion.article key={post.slug} variants={fadeInUp}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-sm transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--cream)]">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-[var(--gold)]">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="mt-2 font-serif text-xl font-semibold text-[var(--navy)] group-hover:text-[var(--gold)]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
