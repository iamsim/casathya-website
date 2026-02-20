"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ca-disclaimer-agreed";

export function Disclaimer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Defer so we're definitely on client after hydration
    const id = setTimeout(() => {
      try {
        const agreed = window.localStorage.getItem(STORAGE_KEY);
        setIsOpen(!agreed);
      } catch {
        setIsOpen(true);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [mounted]);

  useEffect(() => {
    if (!isOpen) return;
    const preventClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") e.preventDefault();
    };
    document.addEventListener("keydown", preventClose);
    return () => document.removeEventListener("keydown", preventClose);
  }, [isOpen]);

  const handleAgree = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-content"
      style={{
        pointerEvents: "auto",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
      }}
    >
      <div
        className="mx-4 w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-lg sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="disclaimer-title"
          className="mb-4 text-xl font-bold uppercase tracking-tight text-[var(--navy)]"
        >
          Disclaimer
        </h2>
        <div id="disclaimer-content" className="mb-6 space-y-3 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            As per the provisions of the <strong>The Chartered Accountant Act, 1949</strong>, we
            are not permitted to solicit work and advertise. By clicking on the &quot;I agree&quot;
            below, the user acknowledges the following:
          </p>
          <ol className="list-inside list-[lower-roman] space-y-2 pl-1">
            <li>
              there has been no advertisement, personal communication, solicitation, invitation or
              inducement of any sort whatsoever from us to solicit any work through this website;
            </li>
            <li>the user wishes to gain more information about us for his/her own information and use;</li>
            <li>
              the information about us is provided to the user only on his/her specific request;
            </li>
          </ol>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleAgree}
            className="rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
