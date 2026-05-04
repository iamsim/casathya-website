"use client";

import { motion } from "framer-motion";
import { ABOUT_PROFILES } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion-variants";

export function AboutView() {
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
            Who we are
          </motion.p>
          <motion.h1
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            About us
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            Our partners bring decades of combined experience in audit, tax, and
            advisory to serve businesses and individuals across India.
          </motion.p>
        </div>
      </section>

      {/* Profiles */}
      <section className="px-6 pb-24 pt-16 md:px-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid gap-12 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {ABOUT_PROFILES.map((profile) => (
              <motion.article
                key={profile.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-sm transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-lg"
              >
                <div className="p-8 md:p-10">
                  {/* Avatar */}
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--gold-muted)] font-serif text-2xl font-semibold text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--cream)]">
                    {profile.initials}
                  </div>

                  {/* Name & designation */}
                  <h2 className="font-serif text-2xl font-semibold text-[var(--navy)]">
                    {profile.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[var(--gold)]">
                    {profile.designation}
                  </p>

                  {/* Qualifications */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded-md border border-[var(--border)] bg-[var(--cream)] px-2.5 py-1 text-xs font-medium text-[var(--navy)]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {profile.experience}
                  </p>

                  {/* Expertise */}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                    Areas of expertise
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                    {profile.expertise.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bio or sections */}
                  <div className="mt-5 border-t border-[var(--border)] pt-5 space-y-5">
                    {"sections" in profile && profile.sections ? (
                      profile.sections.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-sm font-semibold text-[var(--navy)]">
                            {section.title}
                          </h3>
                          <div className="mt-2 space-y-2 text-[var(--muted)] leading-relaxed">
                            {section.content.split(/\n\n+/).map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : "bio" in profile && typeof profile.bio === "string" ? (
                      <div className="space-y-2 text-[var(--muted)] leading-relaxed">
                        {profile.bio.split(/\n\n+/).map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
