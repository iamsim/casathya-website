"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OUR_SERVICES_PAGE_CONFIG } from "@/lib/constants";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
} from "@/lib/motion-variants";

export function ServicesView() {
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
            Our services
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            End-to-end chartered accountancy and compliance services for
            businesses and individuals across India.
          </motion.p>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="relative -mt-2 px-6 pb-24 md:px-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {OUR_SERVICES_PAGE_CONFIG.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/30 hover:shadow-lg hover:shadow-[var(--gold)]/5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[var(--gold-muted)]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--gold-muted)] text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--cream)]">
                    <ServiceIcon type={service.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-serif text-xl font-semibold text-[var(--navy)]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
              We tailor our services to your business needs.
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
