"use client";

import { motion } from "framer-motion";
import { WHY_US_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function WhyUsSection() {
  return (
    <section className="bg-[var(--navy)] py-20 text-[var(--cream)] md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-muted)]">
            Why choose us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Choose Us?
          </h2>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-10 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {WHY_US_CONFIG.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeInUp}
              className="relative rounded-xl border border-[var(--navy-light)] bg-[var(--navy-light)]/50 p-8 backdrop-blur-sm"
            >
              
              <h3 className="relative font-serif text-xl font-semibold">
                {item.title}
              </h3>
              <p className="relative mt-3 text-[var(--cream)]/80 leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
