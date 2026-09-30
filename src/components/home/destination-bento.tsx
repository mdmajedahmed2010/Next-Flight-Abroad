import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function DestinationBento() {
  const { open } = useRegisterModal();

  const uk = destinations.find((d: any) => d.slug === "uk") || destinations[0]!;
  const canada = destinations.find((d: any) => d.slug === "canada") || destinations[1]!;

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 lg:py-32 text-slate-900 overflow-hidden">
      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-100/80 border border-cyan-200 px-3.5 py-1 text-xs font-bold text-cyan-900"
            >
              <IconSparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Global Higher Education Advisory</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Featured Global Study <span className="text-[#0098da]">Destinations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed"
            >
              From Beanibazar to the world's leading lecture halls. Milestone guides your admissions into the UK, Canada, USA, Australia, and Europe with zero false promises.
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
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:border-[#0098da] hover:text-[#0098da] transition-all active:scale-95"
            >
              <span>Explore All Destinations</span>
              <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Bento Card 1: UNITED KINGDOM (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 p-1.5 sm:p-2 border border-slate-800 shadow-xl text-white flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#161F33] to-[#0D1322] p-5 sm:p-8 lg:p-9 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇬🇧</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-3xl font-black text-white">
                        United Kingdom
                      </h3>
                      <span className="rounded-full bg-cyan-600 text-white px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Top Choice in Sylhet
                      </span>
                    </div>
                    <span className="text-xs text-cyan-300 font-semibold block mt-0.5">
                      1-Year Master's · 2-Year Graduate Route PSW · Fast CAS
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300 border border-white/10">
                  Visa Rate: 98%+
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                The United Kingdom is the premier destination for Beanibazar and Sylhet students. Benefit from fast-track offer letters, generous merit scholarships (£1,500–£5,000), 20 hours/week part-time work rights, and the prestigious 2-year Graduate Route Post-Study Work (PSW) visa.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Avg. Tuition:</span>
                  <strong className="text-cyan-300 font-bold text-xs">£11,000–£17,000</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">IELTS Req:</span>
                  <strong className="text-amber-300 font-bold text-xs">Band 6.0 – 6.5</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Post-Study:</span>
                  <strong className="text-slate-100 font-bold text-xs">2 Years PSW</strong>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Major Intakes:</span>
                  <strong className="text-emerald-300 font-bold text-xs">Sept / Jan</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-3">
                <button
                  type="button"
                  onClick={open}
                  className="btn-primary text-xs py-3 px-6 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-none cursor-pointer"
                >
                  <span>Apply for UK University Offer</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Milestone Beanibazar! I want to apply for UK university admissions and IELTS prep.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp UK Desk</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: CANADA (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 group relative rounded-[2rem] sm:rounded-[2.5rem] bg-white p-1.5 sm:p-2 border border-slate-200 shadow-md flex flex-col justify-between hover:border-cyan-400 hover:shadow-xl transition-all"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-slate-50 to-white p-5 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🇨🇦</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                      Canada
                    </h3>
                    <span className="text-xs text-[#0098da] font-bold block">
                      DLI Institutions · Up to 3-Year PGWP · PR Pathways
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold">
                  PR Friendly
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Pursue world-class applied diplomas, bachelor's degrees, and post-graduate certificates across Ontario, British Columbia, and Alberta. Full support for SDS visa filing, GIC creation, and Provincial Attestation Letters (PAL).
              </p>

              <div className="space-y-2 rounded-2xl bg-slate-100/80 p-3.5 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Tuition Range:</span>
                  <strong>CAD $14,000 – $22,000 / year</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">IELTS Standard:</span>
                  <strong className="text-emerald-700">Band 6.0 Overall (SDS Stream)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Work Rights:</span>
                  <strong className="text-slate-900">20–24 hrs/wk + Up to 3-Yr PGWP</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Immigration:</span>
                  <strong className="text-cyan-700">Express Entry & PNP Bonus Points</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-2.5">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "canada" }}
                  className="btn-primary w-full text-center text-xs py-3 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-none"
                >
                  <span>Explore Canada Universities</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Milestone Beanibazar! I want to inquire about studying in Canada.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-center text-xs font-bold text-slate-800 hover:border-cyan-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Canada</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: USA (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇺🇸</span>
                <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold">
                  3-Yr STEM OPT
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                United States (USA)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High scholarship potential, top global research faculty, and 36-month STEM OPT work authorization. Milestone conducts comprehensive F-1 visa interview simulations.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Scholarships:</strong> Up to $10,000 – $20,000/yr</p>
                <p>• <strong>Work Rights:</strong> 12–36 Months OPT</p>
                <p>• <strong>Intakes:</strong> Spring & Fall</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "usa" }}
                className="text-xs font-bold text-[#0098da] hover:text-[#0284c7] flex items-center justify-between"
              >
                <span>View USA Pathways</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 4: Australia (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇦🇺</span>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold">
                  High Minimum Wage
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Australia
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                World Top 100 institutions, 48 hours/fortnight student work rights, and up to 4 years post-study work in regional study centers like Adelaide and Perth.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Min Wage:</strong> AUD $24.10 / hr (World High)</p>
                <p>• <strong>Work:</strong> 48 hrs/fortnight legal</p>
                <p>• <strong>PSW:</strong> 2 to 4 Years extended</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "australia" }}
                className="text-xs font-bold text-[#0098da] hover:text-[#0284c7] flex items-center justify-between"
              >
                <span>View Australia Universities</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 5: Europe / Cyprus / Malta (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 rounded-[2rem] bg-white p-5 sm:p-7 border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl">🇪🇺 🇨🇾 🇲🇹</span>
                <span className="rounded-full bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 text-[10px] font-bold">
                  Affordable Tuition
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Europe (Cyprus & Malta)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Budget-friendly European higher education with low tuition costs (€3,500–€7,000/year), high visa issuance, and pathways to the broader European Schengen zone.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Tuition:</strong> €3,500 – €7,000 / year</p>
                <p>• <strong>Visa Rate:</strong> Very high for genuine students</p>
                <p>• <strong>Intakes:</strong> Feb, June & October</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "europe" }}
                className="text-xs font-bold text-[#0098da] hover:text-[#0284c7] flex items-center justify-between"
              >
                <span>View Europe Details</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
