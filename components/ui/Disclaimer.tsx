"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ca-disclaimer-agreed-at";
const LEGACY_KEY = "ca-disclaimer-agreed";

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
        const storage = window.localStorage;
        const now = Date.now();
        const stored = storage.getItem(STORAGE_KEY);
        const legacy = storage.getItem(LEGACY_KEY);

        let agreedAt: number | null = null;

        if (stored) {
          const parsed = Number(stored);
          if (!Number.isNaN(parsed)) {
            agreedAt = parsed;
          }
        } else if (legacy) {
          // Migrate legacy boolean flag to a timestamp so behaviour stays consistent
          agreedAt = now;
          storage.removeItem(LEGACY_KEY);
          storage.setItem(STORAGE_KEY, String(now));
        }

        // If never agreed, show immediately
        if (!agreedAt) {
          setIsOpen(true);
          return;
        }

        const FIFTEEN_MINUTES = 15 * 60 * 1000;
        const shouldShow = now - agreedAt >= FIFTEEN_MINUTES;
        setIsOpen(shouldShow);
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
      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
        window.localStorage.removeItem(LEGACY_KEY);
      } catch {
        // Ignore storage errors; modal will reappear next visit
      }
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
        <div
          id="disclaimer-content"
          className="mb-6 max-h-[60vh] overflow-y-auto space-y-3 text-sm leading-relaxed text-[var(--foreground)] pr-1"
        >
          <p>
            Your access to this website constitutes your agreement to be bound by all terms and
            conditions listed herein below. If you do not agree to this, you may not access or
            otherwise use the website.
          </p>
          <p>
            The material displayed on this website may be downloaded for non-commercial, personal
            use only. Distribution, modification, transmission, use or reuse of the content and
            various facilities available on this website without written permission is not
            permissible.
          </p>
          <p>
            The firm reserves the right, for any reason, in its sole discretion, to terminate,
            change or suspend any aspect of this website, including, but not limited to, content
            or features.
          </p>
          <p>
            All reasonable efforts shall be made to ensure that the information contained on this
            website is updated, accurate and complete. However, no representations or warranties
            are made (express or implied) as to the reliability, accuracy or completeness of such
            information.
          </p>
          <p>
            The site provides links to websites or resources operated by others over which we do
            not have any control. We do not undertake any responsibility for the availability of
            such external resources. We shall not be liable for any content, advertising, products,
            services or other materials on or available from such sites or resources. The
            inclusion of hyperlinks to such sites does not imply any endorsement of the material
            on such websites or any association with their operators. We shall not be responsible
            or liable, directly or indirectly, for any damage or loss caused or alleged to be
            caused by or in connection with use of or reliance on any such content or service
            available on or through any such site or resource. The site, including all content,
            functions, and information made available on or accessed through the site, is provided
            on an &quot;as is available&quot; basis without representations or warranties of any
            kind whatsoever, express or implied, including without limitation, non-infringement,
            merchantability or fitness for a particular purpose. The firm does not warrant that
            the site or the functions, features or content contained therein will be timely,
            secure, uninterrupted or error free, or that defects will be corrected. No advice or
            information, whether oral or written, obtained by you from us or through this website
            shall create any warranty not expressly made herein.
          </p>
          <p>
            In no event shall the firm be liable for any special, incidental or consequential
            damages that are directly or indirectly related to the use of, or the inability to use
            this website or the content, materials and functions related thereto, including
            without limitation, loss of revenue or anticipated profits or lost business or lost
            sales.
          </p>
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
