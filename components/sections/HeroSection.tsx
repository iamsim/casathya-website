"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_CONFIG } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--cream)] pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--gold-muted)_0%,transparent_50%)] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chartered Accountants & Advisors
          </motion.p>
          <motion.h1
            className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--navy)] sm:text-5xl md:text-6xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {HERO_CONFIG.headline}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {HERO_CONFIG.subheadline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            >
              {HERO_CONFIG.primaryCta}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-[var(--navy)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-[var(--cream)]"
            >
              {HERO_CONFIG.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
