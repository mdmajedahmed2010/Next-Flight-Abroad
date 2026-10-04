import { useState } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconWhatsApp, IconArrowRight, IconPhone } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function OfficesHub() {
  const { open } = useRegisterModal();
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);

  const branches = company.branches;
  const currentBranch = branches[activeBranchIdx] || branches[0]!;

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3"
          >
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Central Student Counseling & Admission Hub · Khilgaon, Dhaka</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400">Khilgaon Central Office</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Headquarters: 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219 (Beside Ansar Head Office). Walk in for free profile evaluations, direct university applications, and language course registration.
          </motion.p>
        </div>

        {/* Central Office Showcase Card */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-2xl backdrop-blur-2xl max-w-5xl mx-auto">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-slate-900/95 p-4 sm:p-7 lg:p-10 border border-white/10">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
              {/* Left: Office Information, Hotlines & Booking */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-600 text-white px-3 py-0.5 text-xs font-bold">
                      {currentBranch.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{currentBranch.city}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl sm:text-3xl font-black text-white">
                    {company.name} Central Hub
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-blue-300 font-semibold leading-relaxed">
                    📍 {company.address.full}
                  </p>
                </div>

                {/* Office Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Visiting & Counseling Hours
                    </span>
                    <span className="font-bold text-white block">
                      Sat – Thu: 9:30 AM – 7:30 PM
                    </span>
                    <span className="text-[11px] text-emerald-400 block font-medium">
                      WhatsApp 24/7 Online Support
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Lead Advisory Team
                    </span>
                    <span className="font-bold text-white block">
                      Senior Visa Counselors
                    </span>
                    <span className="text-[11px] text-blue-300 block font-medium">
                      In-Person Profile Assessment
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Hotlines & Phone
                    </span>
                    <span className="font-bold text-white block">
                      {company.phones[0]}
                    </span>
                    <span className="text-[11px] text-slate-300 block font-medium">
                      {company.phones[1]} / {company.phones[2]}
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">
                      Guarantee Commitment
                    </span>
                    <span className="font-bold text-rose-300 block">
                      "No Visa, No Payment"
                    </span>
                    <span className="text-[11px] text-slate-300 block font-medium">
                      Contract-backed service model
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={open}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 px-5 py-3 text-xs font-bold text-white shadow-lg hover:from-blue-500 hover:to-rose-500 transition-all cursor-pointer"
                  >
                    <span>Schedule Free Office Appointment</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-xs font-bold text-white hover:bg-white/15 transition-colors"
                  >
                    <IconPhone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Call Hotline</span>
                  </a>

                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 px-4 py-3 text-xs font-bold transition-colors"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right: Interactive Office Visual / Map Box */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 aspect-[4/3] flex flex-col justify-between p-4 shadow-xl">
                <iframe
                  title="Next Flight Abroad Office Location Map"
                  src="https://maps.google.com/maps?q=Khilgaon+Taltola+Ansar+Head+Office+Dhaka&z=16&hl=en&output=embed"
                  className="absolute inset-0 w-full h-full border-0 opacity-80 contrast-125"
                  loading="lazy"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-slate-900/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white border border-white/20">
                    Live GPS Map
                  </span>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-blue-600 text-white px-3 py-1 text-[10px] font-bold shadow hover:bg-blue-500 transition-colors"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>

                <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <div className="text-xs font-bold text-white">Next Flight Abroad Central Hub</div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    338/14 Khilgaon (Beside Ansar Head Office), Dhaka-1219
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
