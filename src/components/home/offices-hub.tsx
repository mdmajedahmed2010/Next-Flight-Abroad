import { useState } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconWhatsApp, IconArrowRight } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function OfficesHub() {
  const { open } = useRegisterModal();
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);

  const branches = company.branches;
  const currentBranch = branches[activeBranchIdx] || branches[0]!;

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 lg:py-32 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-900 mb-3"
          >
            <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Dual Global Presence · Chittagong &amp; Birmingham</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
          >
            Visit Our <span className="text-blue-600">Official Counseling Centers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Connect directly with British Council Certified counselors at CJKS Shopping Complex, Kazir Dewri, Chittagong or our on-shore liaison office in Birmingham, UK. 100% Free Processing &amp; No Service Charge.
          </motion.p>
        </div>

        {/* Branch Selector Cards with Framer Motion layoutId */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8">
          {branches.map((b, idx) => {
            const active = activeBranchIdx === idx;
            return (
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                key={b.name}
                type="button"
                onClick={() => setActiveBranchIdx(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  active
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl"
                    : "bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeOfficeIndicator"
                    className="absolute inset-0 bg-slate-900 rounded-2xl sm:rounded-3xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold ${
                        active
                          ? "bg-amber-400 text-slate-950 font-black"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {b.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold">{b.city}</span>
                  </div>
                  <h3
                    className={`font-display text-sm sm:text-base font-bold leading-snug line-clamp-1 ${
                      active ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {b.name}
                  </h3>
                </div>

                <div
                  className={`mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t text-[10px] sm:text-[11px] font-medium flex items-center justify-between ${
                    active ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-500"
                  }`}
                >
                  <span className="truncate">{b.short}</span>
                  <span>{active ? "● Active View" : "Click to view details →"}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Branch Interactive Stage — Double-Bezel Architecture with AnimatePresence */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-slate-200/60 to-slate-100/40 p-1.5 sm:p-3 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-white p-4 sm:p-7 lg:p-10 shadow-sm border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBranch.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center"
              >
                {/* Left: Office Information, Hotlines & Booking */}
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-600 text-white px-3 py-0.5 text-xs font-bold">
                        {currentBranch.tag}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{currentBranch.city}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl sm:text-3xl font-black text-slate-900">
                      {currentBranch.name}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      📍 {currentBranch.full || currentBranch.address}
                    </p>
                  </div>

                  {/* Branch Facts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                    <div className="rounded-2xl bg-slate-50 p-3.5 sm:p-4 border border-slate-200/80">
                      <span className="text-slate-500 block text-[11px] font-medium">Visiting & Counseling Hours:</span>
                      <strong className="text-slate-900 block mt-1">{currentBranch.hours}</strong>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3.5 sm:p-4 border border-slate-200/80">
                      <span className="text-slate-500 block text-[11px] font-medium">Direct Hotline:</span>
                      <a
                        href={`tel:${currentBranch.phone.replace(/[^0-9]/g, "")}`}
                        className="font-bold text-blue-600 block mt-1 hover:underline text-sm"
                      >
                        {currentBranch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Consultation Commitment */}
                  <div className="rounded-2xl bg-blue-50/50 border border-blue-200/80 p-3.5 sm:p-4 text-xs text-slate-700 space-y-1">
                    <span className="text-blue-900 font-bold block text-xs">
                      Free Profile Assessment &amp; No File Opening Charge:
                    </span>
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      Bring your academic transcripts, certificates, and passport. Our British Council certified counselors will evaluate your direct admission eligibility, scholarship potential (up to £5,000 / 100%), and Dependent Visa pathways with zero service fees.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-1 flex flex-col xs:flex-row gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={open}
                      className="btn-primary text-xs py-3 px-5 font-bold rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white border-none"
                    >
                      <span>Book Free Consultation</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Hello Abroad Blueprint! I would like to visit the ${currentBranch.name}.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Direct Desk</span>
                    </motion.a>
                  </div>
                </div>

                {/* Right: Architectural Branch Preview Card */}
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Coordinates
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Official Center
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3">
                      <span className="text-base shrink-0">🏛️</span>
                      <div>
                        <strong className="block text-slate-900 text-xs">{currentBranch.name}</strong>
                        <span className="text-slate-600 text-[11px] leading-relaxed block mt-0.5">
                          {currentBranch.full || currentBranch.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base shrink-0">📞</span>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Hotlines:</span>
                        <span className="font-bold text-slate-800 text-xs">
                          {currentBranch.city === "Chittagong"
                            ? "+880 1961-532479 · +880 1643-829960"
                            : "+44 7587 358080"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base shrink-0">🕒</span>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Visiting Schedule:</span>
                        <span className="font-bold text-slate-800 text-xs">{currentBranch.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base shrink-0">🎓</span>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Accreditation &amp; Policy:</span>
                        <span className="font-bold text-slate-800 text-xs">British Council Certified · No Service Charge</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <a
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between"
                    >
                      <span>Open in Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

