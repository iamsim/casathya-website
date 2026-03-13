"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--cream)]/95 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[var(--navy)] transition-colors hover:text-[var(--gold)]"
        >
          <Image
            src="/ca-india-logo.svg"
            alt="Chartered Accountant logo"
            width={40}
            height={40}
            priority
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain shadow-lg"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight sm:text-lg">
              Sahana D M &amp; Associates
            </span>
            <span className="hidden text-xs text-[var(--muted)] sm:block">
              {SITE_CONFIG.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link, i) => (
            <motion.span
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-[var(--navy)] transition-colors hover:text-[var(--gold)]"
              >
                {link.label}
              </Link>
            </motion.span>
          ))}
        </nav>

        <motion.button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.98 }}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-[var(--navy)] transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[var(--navy)] transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[var(--navy)] transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="border-t border-[var(--border)] bg-[var(--cream)] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Mobile menu"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-[var(--navy)] hover:bg-[var(--gold-muted)] hover:text-[var(--gold)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
