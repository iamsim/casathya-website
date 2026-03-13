"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OUR_EXPERTISE_PAGE_CONFIG } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
} from "@/lib/motion-variants";

export function ServicesView() {
  const { introHeading, introBody, verticals } = OUR_EXPERTISE_PAGE_CONFIG;

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--gold)_15%,transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold-muted)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            What we offer
          </motion.p>
          <motion.h1
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            Our expertise
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            A synergy of global standards and local mastery.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-12 pt-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-serif text-2xl font-semibold text-[var(--navy)] sm:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={defaultTransition}
          >
            {introHeading}
          </motion.h2>
          <motion.p
            className="mt-6 text-[var(--muted)] leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            {introBody}
          </motion.p>
        </div>
      </section>

      {/* Core Service Verticals */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={defaultTransition}
          >
            Core Service Verticals
          </motion.h2>
          <motion.div
            className="mt-12 space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {verticals.map((vertical, index) => (
              <motion.article
                key={vertical.title}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-8 shadow-sm md:p-10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--gold-muted)] font-serif text-lg font-semibold text-[var(--gold)]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[var(--navy)] sm:text-2xl">
                      {vertical.title}
                    </h3>
                    <p className="mt-3 text-[var(--muted)] leading-relaxed">
                      {vertical.intro}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 border-t border-[var(--border)] pt-6">
                  {vertical.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[var(--foreground)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-[var(--border)] bg-[var(--white)] px-6 py-12 md:px-8">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 rounded-2xl bg-[var(--navy)] px-8 py-10 text-center md:flex-row md:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--cream)]">
              Need a custom solution?
            </p>
            <p className="mt-1 text-sm text-[var(--cream)]/80">
              We tailor our expertise to your business needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--gold-light)]"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
