"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EXPERTISE_CONFIG } from "@/lib/constants";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/motion-variants";

export function ServicesSection() {
  return (
    <section className="bg-[var(--white)] py-20 md:py-28" id="expertise">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            What we offer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--navy)] sm:text-4xl">
            Our expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            A synergy of global standards and local mastery in tax, audit, and
            governance.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EXPERTISE_CONFIG.map((service) => (
            <Link key={service.title} href="/services">
              <motion.article
                variants={fadeInUp}
                className="group rounded-xl border border-[var(--border)] bg-[var(--cream)] p-8 shadow-sm transition-shadow hover:shadow-md"
                whileHover={scaleOnHover}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--gold-muted)] text-[var(--gold)]">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[var(--navy)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
