import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function DestinationBento() {
  const { open } = useRegisterModal();

  const japan = destinations.find((d) => d.slug === "japan") || destinations[0]!;
  const uk = destinations.find((d) => d.slug === "uk") || destinations[1]!;

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 lg:py-32 text-slate-900 overflow-hidden">
      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading — Editorial Luxury Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-red-100/80 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-900"
            >
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Japan Specialist & Global Education</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Featured Study in Japan & <span className="text-red-600">Career Portfolios</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed"
            >
              Explore Japanese Language Schools, Senmon Gakko, SSW Technical Work Visas, and global partner university admissions with OneTech Education.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:border-red-500 hover:text-red-600 transition-all active:scale-95"
            >
              <span>Explore All Destinations</span>
              <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Bento Card 1: JAPAN (7 Columns — The Flagship) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 p-1.5 sm:p-2 border border-slate-800 shadow-xl text-white flex flex-col justify-between hover:border-red-500/50 hover:shadow-2xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#161F33] to-[#0D1322] p-5 sm:p-8 lg:p-9 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇯🇵</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-3xl font-black text-white">
                        Japan
                      </h3>
                      <span className="rounded-full bg-red-600 text-white px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Official Flagship
                      </span>
                    </div>
                    <span className="text-xs text-rose-300 font-semibold block mt-0.5">
                      Study in JAPAN · Start Your Future Today · 28h Legal Work
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300 border border-white/10">
                  COE Approval: 99%+
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Japan is OneTech Education&apos;s primary specialization. Study in premier Japanese Language Schools across <strong>Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka</strong>. Enjoy <strong>28 hours/week legal part-time work rights (¥1,100–¥1,400/hr)</strong>, high living standards, and direct career progression into Japanese enterprises.
              </p>

              {/* Japan Interactive Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs pt-1">
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Part-Time Work:</span>
                  <span className="font-display font-bold text-red-400 text-sm mt-0.5 block">28 hrs / week</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Language Course:</span>
                  <span className="font-display font-bold text-emerald-400 text-sm mt-0.5 block">N5 / N4 Batches ✓</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Study Gap:</span>
                  <span className="font-display font-bold text-slate-200 text-sm mt-0.5 block">Accepted (Justified)</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Intakes:</span>
                  <span className="font-display font-bold text-amber-300 text-sm mt-0.5 block">Apr, Jul, Oct, Jan</span>
                </div>
              </div>

              {/* Key Partner Schools in Japan */}
              <div className="space-y-2 pt-1 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Top Affiliated Language Schools & Universities in Japan:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {japan.topUnis.slice(0, 4).map((u) => (
                    <span
                      key={u}
                      className="rounded-xl bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200"
                    >
                      ⛩️ {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-2.5">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "japan" }}
                  className="btn-primary text-xs py-3 px-5 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-none"
                >
                  <span>Explore Japan Admission Details</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello OneTech Education! I want to apply for Japanese Language School admissions & N5/N4 course.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Japan Desk</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: SSW & Work Visas (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-white p-1.5 sm:p-2 border border-slate-200 shadow-md flex flex-col justify-between hover:border-red-400 hover:shadow-xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-slate-50 to-white p-5 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">💼</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                      Japan SSW Work Visa
                    </h3>
                    <span className="text-xs text-red-600 font-bold block">
                      Specified Skilled Worker (Tokutei Ginou)
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold">
                  Direct Employment
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Qualify for direct employment in Japan across <strong>Caregiving (Kaigo), Food Service, Hospitality, Agriculture, and Construction</strong>. OneTech provides Japanese N4 language prep, skill assessment test registration, and employer interview matching.
              </p>

              <div className="space-y-2 rounded-2xl bg-slate-100/80 p-3.5 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Requirements:</span>
                  <strong>JLPT N4 / JFT-Basic + Skill Test</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Salary & Benefits:</span>
                  <strong className="text-emerald-700">Standard Japanese Pay Scale</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Training Center:</span>
                  <strong className="text-slate-900 truncate ml-2">Mirpur-10, Gemcon EL Mercado</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Employer Placement:</span>
                  <strong className="text-red-600">Direct Interview Drills</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-2.5">
                <Link
                  to="/services"
                  className="btn-primary w-full text-center text-xs py-3 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-none"
                >
                  <span>SSW Career Roadmap</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello OneTech Education! I want to inquire about Japan SSW (Specified Skilled Worker) work visas.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-center text-xs font-bold text-slate-800 hover:border-red-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp SSW Desk</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: United Kingdom (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇬🇧</span>
                <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold">
                  2-Yr Graduate PSW
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                United Kingdom
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Fast-track 1-Year Masters programs and 3-Year Bachelors. Full guidance on university CAS letters, 2-year Graduate Route PSW, and scholarships of £1,500–£5,000.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Duration:</strong> 1-Year Masters savings</p>
                <p>• <strong>Post-Study:</strong> 2-Year Graduate Route Visa</p>
                <p>• <strong>Work Rights:</strong> 20 hours / week permitted</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "uk" }}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between"
              >
                <span>View UK Universities</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 4: Malaysia (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇲🇾</span>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold">
                  Fast EMGS Visa
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Malaysia Dual Degrees
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Earn British and Australian degrees at 60% lower cost. High visa approval rates through EMGS without embassy interviews, with low monthly living costs.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Tuition:</strong> $3,500 – $6,500 / year</p>
                <p>• <strong>Language:</strong> MOI accepted widely</p>
                <p>• <strong>Processing:</strong> Fast online visa approval</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "malaysia" }}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between"
              >
                <span>View Malaysia Pathways</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 5: Australia, Canada & Finland (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl">🇦🇺 🇨🇦 🇫🇮</span>
                <span className="rounded-full bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 text-[10px] font-bold">
                  Global Network
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Australia, Canada & Finland
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Comprehensive advisory for Australia (Subclass 500), Canada DLI study permits, and Finland&apos;s #1 education system with 30 hrs/week student work rights.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Australia:</strong> Group of Eight & up to 4-Yr PSW</p>
                <p>• <strong>Canada:</strong> Applied Co-op & 3-Yr PGWP</p>
                <p>• <strong>Finland:</strong> 30 hrs/wk work + 2-Yr Post-Study Visa</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/destinations"
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between"
              >
                <span>View All Destinations</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
