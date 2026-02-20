"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Job } from "@/lib/jobs";
import { defaultTransition } from "@/lib/motion-variants";

interface JobDetailViewProps {
  job: Job;
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-[var(--border)] py-4 first:pt-0 last:border-0">
      <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
        {label}
      </dt>
      <dd className="mt-1 text-[var(--foreground)]">{value}</dd>
    </div>
  );
}

export function JobDetailView({ job }: JobDetailViewProps) {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--gold)_15%,transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-medium text-[var(--gold-muted)] hover:text-[var(--cream)]"
          >
            ← Back to Careers
          </Link>
          <motion.h1
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            {job.title}
          </motion.h1>
          <motion.div
            className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--cream)]/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <span>{job.department}</span>
            <span>{job.location}</span>
            <span>{job.experienceLevel} experience</span>
          </motion.div>
          <motion.p
            className="mt-2 text-xs text-[var(--cream)]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            Posted {new Date(job.postedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24 pt-12 md:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-6 shadow-sm md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <dl className="mb-8 grid gap-0 sm:grid-cols-2">
              <DetailRow label="Job title" value={job.title} />
              <DetailRow label="Department" value={job.department} />
              <DetailRow label="Job location" value={job.location} />
              <DetailRow label="Experience level" value={job.experienceLevel} />
            </dl>

            <h2 className="font-serif text-xl font-semibold text-[var(--navy)]">
              Role description
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--foreground)]">
              {job.roleDescription}
            </p>

            {job.keyResponsibilities && job.keyResponsibilities.length > 0 && (
              <>
                <h2 className="mt-10 font-serif text-xl font-semibold text-[var(--navy)]">
                  Key responsibilities
                </h2>
                <ul className="mt-3 space-y-2">
                  {job.keyResponsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[var(--foreground)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {job.qualifications && job.qualifications.length > 0 && (
              <>
                <h2 className="mt-10 font-serif text-xl font-semibold text-[var(--navy)]">
                  Qualifications
                </h2>
                <ul className="mt-3 space-y-2">
                  {job.qualifications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[var(--foreground)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <Link
                href="/careers"
                className="inline-flex items-center text-sm font-medium text-[var(--gold)] hover:underline"
              >
                ← View all open positions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
