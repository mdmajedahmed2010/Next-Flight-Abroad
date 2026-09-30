import { useState } from "react";
import { company } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello ${company.name}! I would like to consult about IELTS course preparation and Study Abroad admissions.`,
  )}`;

  const messengerUrl = company.social.messenger;

  return (
    <div className="fixed bottom-20 right-3.5 md:bottom-6 md:right-6 z-40 flex flex-col items-center gap-3 select-none">
      {/* Floating Speed-Dial Action Buttons with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Action 1: Facebook Messenger */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                Facebook (@milestonebeanibazar)
              </span>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                href={messengerUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on Facebook Messenger"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg border-2 border-white transition-colors hover:bg-[#0073E6]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.454 5.512 3.737 7.202V22l3.39-1.86c.91.252 1.874.388 2.873.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.443l-2.584-2.756-5.045 2.756 5.549-5.89 2.651 2.756 4.978-2.756-5.549 5.89z" />
                </svg>
              </motion.a>
            </div>

            {/* Action 2: Direct Phone Call Hotlines */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                Campus Hotlines (Beanibazar)
              </span>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setShowCallMenu(!showCallMenu)}
                aria-label="Direct Phone Hotlines"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0b0f19] text-sky-400 shadow-lg border-2 border-white transition-colors hover:bg-slate-800 cursor-pointer font-bold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.button>

              {/* Quick Hotline Selection Sub-menu */}
              <AnimatePresence>
                {showCallMenu && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    className="absolute right-full mr-3 bottom-0 w-64 sm:w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                  >
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      {company.name} হটলাইন:
                    </p>
                    <div className="space-y-1.5">
                      <a
                        href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                        className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-sky-500 hover:text-sky-600 transition-colors"
                      >
                        📞 {company.phones[0]} (Azir Market Main Campus)
                      </a>
                      <a
                        href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                        className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-sky-500 hover:text-sky-600 transition-colors"
                      >
                        📞 {company.phones[1]} (Somobay Market Annex Desk)
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action 3: Direct WhatsApp Chat */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                WhatsApp Chat ({company.whatsappFormatted})
              </span>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Direct WhatsApp Chat"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg border-2 border-white transition-colors hover:bg-[#20ba59]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.19 8.19 0 01-5.82 2.41c-1.45 0-2.88-.39-4.14-1.12l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.41c0-4.54 3.7-8.24 8.25-8.24z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Toggle FAB with Framer Motion */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowCallMenu(false);
        }}
        aria-label="Quick Communication Center"
        className="group relative flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-2xl transition-all duration-300 hover:shadow-sky-500/40 cursor-pointer border-2 border-white ring-2 ring-sky-500/20"
      >
        <span className="relative flex h-full w-full items-center justify-center">
          {isOpen ? (
            <span className="text-xl sm:text-2xl font-bold leading-none">✕</span>
          ) : (
            <span className="text-xl sm:text-2xl font-bold leading-none">💬</span>
          )}
        </span>
      </motion.button>
    </div>
  );
}
