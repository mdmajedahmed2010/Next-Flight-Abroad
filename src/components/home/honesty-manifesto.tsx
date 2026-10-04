import { company, manifesto } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function HonestyManifesto() {
  const { open } = useRegisterModal();

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Background Radiance with Framer Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[130px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-4 py-1 text-xs font-bold text-blue-300 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The NextFlight BD Standard of Integrity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Why Thousands Trust <span className="text-blue-400">{company.name}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed font-bangla"
          >
            বিশ্বস্ত ভিসা প্রসেসিং, আইইএলটিএস ও স্পোকেন ইংলিশ ট্রেইনিং এবং ইউরোপ ও মধ্যপ্রাচ্যের অনুমোদিত ওয়ার্ক পারমিটের নির্ভরযোগ্য প্রতিষ্ঠান। প্রধান কার্যালয়: রাজ্জাক প্লাজা, মগবাজার, ঢাকা।
          </motion.p>
        </div>

        {/* 6 Pillars Grid with Double-Bezel Architecture & Framer Motion Stagger */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {manifesto.map((p, idx) => (
            <motion.div
              key={p.id || p.title || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-lg hover:border-blue-400/50 hover:shadow-2xl transition-all"
            >
              <div className="rounded-[1.35rem] bg-[#0A1020] p-5 sm:p-7 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-white/[0.05] border border-white/10">
                      {p.icon || "✓"}
                    </span>
                    <span className="font-display font-black text-xl sm:text-2xl text-blue-500/40 group-hover:text-blue-400 transition-colors">
                      {p.id || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-bangla text-xs font-semibold text-amber-300">
                    {p.bengali}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NextFlight BD Official Commitment</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Reassurance Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-transparent p-6 sm:p-8 border border-blue-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              আপনার বিশ্বস্ত ভ্রমণের ও ক্যারিয়ারের সাথী
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium font-bangla">
              সরাসরি আমাদের ঢাকা অফিসে (মগবাজার) এসে পাসপোর্ট ও পেপারস সহ ফ্রি ফাইল মূল্যায়ন ও ক্যারিয়ার গাইডলাইন নিন।
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 shrink-0 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={open}
              className="btn-primary text-xs py-3 px-6 font-bold rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-none"
            >
              <span>Book Free Consultation</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}! I want to book a study abroad and visa counseling session.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10 hover:border-blue-400 transition-colors"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct Desk</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

