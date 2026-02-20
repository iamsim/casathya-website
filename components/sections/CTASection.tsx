"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTA_CONFIG } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion-variants";

export function CTASection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="rounded-2xl border border-[var(--border)] bg-[var(--navy)] px-8 py-16 text-center text-[var(--cream)] shadow-xl md:px-16 md:py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {CTA_CONFIG.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--cream)]/80">
            {CTA_CONFIG.subtext}
          </p>
          <motion.div
            className="mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--gold)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--gold-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            >
              {CTA_CONFIG.buttonLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
