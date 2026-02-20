"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllJobs } from "@/lib/jobs";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion-variants";

export function CareersView() {
  const jobs = getAllJobs();

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
            Join our team
          </motion.p>
          <motion.h1
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            Explore open positions at our firm. We are always looking for talented professionals to grow with us.
          </motion.p>
        </div>
      </section>

      {/* Job listings */}
      <section className="px-6 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          {jobs.length === 0 ? (
            <p className="text-center text-[var(--muted)]">No open positions at the moment. Please check back later.</p>
          ) : (
            <motion.ul
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {jobs.map((job) => (
                <motion.li key={job.slug} variants={fadeInUp}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-lg md:p-8"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h2 className="font-serif text-xl font-semibold text-[var(--navy)] group-hover:text-[var(--gold)]">
                          {job.title}
                        </h2>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {job.department}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.experienceLevel} experience</span>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm font-medium text-[var(--gold)]">
                        View details →
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </section>
    </main>
  );
}
