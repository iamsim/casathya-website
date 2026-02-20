"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--navy)] text-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp}>
            <p className="font-serif text-lg font-semibold tracking-tight">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-2 text-sm text-[var(--cream)]/80">
              {SITE_CONFIG.tagline}
            </p>
          </motion.div>

          <motion.nav variants={fadeInUp} aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-muted)]">
              Quick links
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--gold-light)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-muted)]">
              Contact
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors hover:text-[var(--gold-light)]"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[var(--gold-light)]"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-[var(--navy-light)] pt-8 text-center text-sm text-[var(--cream)]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
