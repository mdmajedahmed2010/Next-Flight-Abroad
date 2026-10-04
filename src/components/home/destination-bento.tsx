import { Link } from "@tanstack/react-router";
import { company, destinationsData } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles, IconCheck } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function DestinationBento() {
  const { open } = useRegisterModal();

  const southKorea = destinationsData.find((d) => d.slug === "south-korea") || destinationsData[0]!;
  const greece = destinationsData.find((d) => d.slug === "greece") || destinationsData[1]!;
  const malta = destinationsData.find((d) => d.slug === "malta") || destinationsData[2]!;
  const uk = destinationsData.find((d) => d.slug === "uk") || destinationsData[3]!;
  const usa = destinationsData.find((d) => d.slug === "usa") || destinationsData[4]!;

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400"
            >
              <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Verified Destination Matrix · Zero Advance Risk</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Featured Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400">Study Destinations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed"
            >
              Explore top-tier higher education with our signature "No Visa, No Payment" contract guarantee. From high-scholarship admissions in South Korea to risk-free European Schengen pathways in Greece and Malta.
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
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:border-blue-400 hover:bg-white/10 transition-all active:scale-95"
            >
              <span>Explore All 8 Destinations</span>
              <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-blue-400" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Bento Card 1: SOUTH KOREA (7 Columns - Flagship) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-1.5 sm:p-2 border border-blue-500/30 shadow-2xl text-white flex flex-col justify-between hover:border-blue-400 transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#0B1528] to-[#070B16] p-5 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇰🇷</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white">
                        Study in South Korea
                      </h3>
                      <span className="rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        Flagship Partner
                      </span>
                    </div>
                    <span className="text-xs text-blue-300 font-semibold block mt-0.5">
                      Kyungsung University, Busan & Top Seoul Institutes · 30%–100% Scholarships
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30">
                  D-4-1 & D-2 Visas 🎓
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Official partnerships with leading Korean universities. Apply for Bachelor's, Master's, and Korean Language Programs (KLP) with zero IELTS requirement for D-4-1 language pathways. Generous tuition waivers, legal part-time work rights, and high visa approval rates for upcoming December and March intakes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Scholarships:</span>
                  <strong className="text-blue-300 font-bold text-xs">30% to 100% Waivers</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Next Intakes:</span>
                  <strong className="text-rose-300 font-bold text-xs">Dec 2026 & Mar 2027</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">IELTS Rule:</span>
                  <strong className="text-emerald-300 font-bold text-xs">No IELTS for KLP</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Post-Study Visa:</span>
                  <strong className="text-white font-bold text-xs">D-10 Job Search (2 Yrs)</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-3">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "south-korea" }}
                  className="text-xs py-3 px-6 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white cursor-pointer"
                >
                  <span>Explore South Korea Admissions</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I am interested in studying in South Korea at Kyungsung University Busan.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: GREECE (5 Columns - 100% Risk Free) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-1.5 sm:p-2 border border-indigo-500/30 shadow-2xl text-white flex flex-col justify-between hover:border-indigo-400 transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#0B1528] to-[#070B16] p-5 sm:p-8 space-y-5 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">🇬🇷</span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                        Study in Greece
                      </h3>
                      <span className="text-xs text-rose-300 font-semibold block">
                        European Schengen Mobility
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-0.5 text-[9px] font-black uppercase">
                    100% Risk Free
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {greece.headline}. Pay university tuition fees strictly AFTER visa confirmation! Zero advance tuition risk, zero IELTS requirement, and full Schengen mobility across 29 European countries.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400">Tuition Payment:</span>
                    <strong className="text-emerald-300 font-bold">Strictly After Visa Approval</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400">IELTS Requirement:</span>
                    <strong className="text-blue-300 font-bold">No IELTS Required</strong>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400">Schengen Freedom:</span>
                    <strong className="text-white font-bold">29 European Countries</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "greece" }}
                  className="flex-1 text-xs py-3 px-4 font-bold rounded-xl flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <span>Apply for Greece</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: MALTA (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-slate-900 border border-white/10 p-5 sm:p-6 text-white flex flex-col justify-between hover:border-blue-400/40 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇲🇹</span>
                  <h4 className="font-display text-lg font-bold text-white">Study in Malta</h4>
                </div>
                <span className="text-[10px] font-bold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-full border border-blue-400/30">
                  English Island
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Official English-speaking Schengen member state. Study gap accepted with genuine work experience, affordable European tuition, and 20 hrs/week legal student employment.
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-400">
                <div>• Average Tuition: <span className="text-white font-bold">€5,000 – €8,500/yr</span></div>
                <div>• Work Rights: <span className="text-emerald-300 font-bold">20 hrs/week legal</span></div>
              </div>
            </div>

            <Link
              to="/study-in-{$country}"
              params={{ country: "malta" }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              <span>Explore Malta details</span>
              <span>→</span>
            </Link>
          </motion.div>

          {/* Bento Card 4: UNITED KINGDOM (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-slate-900 border border-white/10 p-5 sm:p-6 text-white flex flex-col justify-between hover:border-blue-400/40 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <h4 className="font-display text-lg font-bold text-white">Study in the UK</h4>
                </div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  2-Yr PSW
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                World-ranked university degrees with 2-year Graduate Route Post-Study Work, up to £5,000 merit scholarships, rapid CAS issuance, and internal interview preparation.
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-400">
                <div>• Scholarships: <span className="text-white font-bold">Up to £5,000 Merit</span></div>
                <div>• Visa Route: <span className="text-emerald-300 font-bold">Graduate Route PSW</span></div>
              </div>
            </div>

            <Link
              to="/study-in-{$country}"
              params={{ country: "uk" }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              <span>Explore UK admissions</span>
              <span>→</span>
            </Link>
          </motion.div>

          {/* Bento Card 5: UNITED STATES (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-slate-900 border border-white/10 p-5 sm:p-6 text-white flex flex-col justify-between hover:border-blue-400/40 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span>
                  <h4 className="font-display text-lg font-bold text-white">Study in the USA</h4>
                </div>
                <span className="text-[10px] font-bold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-400/30">
                  3-Yr STEM OPT
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Global innovation capital with up to 3 years STEM OPT work authorization, graduate assistantships, and intensive 1-on-1 F-1 visa interview mock sessions at our Khilgaon office.
              </p>
              <div className="pt-2 text-xs space-y-1 text-slate-400">
                <div>• Work Rights: <span className="text-white font-bold">36 Months STEM OPT</span></div>
                <div>• Interview Prep: <span className="text-blue-300 font-bold">1-on-1 Mock Included</span></div>
              </div>
            </div>

            <Link
              to="/study-in-{$country}"
              params={{ country: "usa" }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              <span>Explore USA programs</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
