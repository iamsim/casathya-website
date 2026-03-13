"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONFIG } from "@/lib/constants";
import { fadeInUp, defaultTransition } from "@/lib/motion-variants";

export function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const address = CONTACT_CONFIG.officeAddress;
  const addressLines = [
    address.line1,
    address.line2,
    "line3" in address && address.line3 ? address.line3 : null,
    `${address.city} ${address.pincode}`,
  ].filter(Boolean) as string[];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your API call or form service (e.g. Formspree, custom endpoint)
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setDescription("");
    }, 800);
  }

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
            Get in touch
          </motion.p>
          <motion.h1
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--cream)]/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            Whether you are an entrepreneur seeking to optimise your tax
            structure or a corporate entity looking for seamless statutory
            compliance, we are here to help.
          </motion.p>
        </div>
      </section>

      {/* Map + Contact info + Form */}
      <section className="px-6 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Map + contact details */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--white)] shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={defaultTransition}
              >
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={CONTACT_CONFIG.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office location"
                    className="h-full w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...defaultTransition, delay: 0.1 }}
              >
                <h2 className="font-serif text-lg font-semibold text-[var(--navy)]">
                  Office Address
                </h2>
                <address className="mt-3 text-sm text-[var(--muted)] not-italic leading-relaxed">
                  {addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
                <div className="mt-5 space-y-3 border-t border-[var(--border)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                    Contact
                  </p>
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.replace(/\s/g, "")}`}
                    className="block text-[var(--navy)] hover:text-[var(--gold)]"
                  >
                    {CONTACT_CONFIG.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="block text-[var(--navy)] hover:text-[var(--gold)]"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...defaultTransition, delay: 0.15 }}
            >
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--white)] p-8 shadow-sm md:p-10">
                <h2 className="font-serif text-2xl font-semibold text-[var(--navy)]">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Have a query? Fill in the form below and we’ll get back to you.
                </p>

                {status === "success" ? (
                  <motion.div
                    className="mt-8 rounded-xl bg-[var(--gold-muted)] p-6 text-[var(--navy)]"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={defaultTransition}
                  >
                    <p className="font-medium">Thank you for your message.</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      We’ll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[var(--navy)]"
                      >
                        Name <span className="text-[var(--gold)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 block w-full rounded-lg border border-[var(--border)] bg-[var(--cream)] px-4 py-3 text-[var(--navy)] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                        placeholder="Your name"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[var(--navy)]"
                      >
                        Email <span className="text-[var(--gold)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 block w-full rounded-lg border border-[var(--border)] bg-[var(--cream)] px-4 py-3 text-[var(--navy)] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                        placeholder="you@example.com"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-description"
                        className="block text-sm font-medium text-[var(--navy)]"
                      >
                        Your message <span className="text-[var(--gold)]">*</span>
                      </label>
                      <textarea
                        id="contact-description"
                        required
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-2 block w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--cream)] px-4 py-3 text-[var(--navy)] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                        placeholder="How can we help?"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 disabled:opacity-70 sm:w-auto sm:min-w-[160px]"
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
