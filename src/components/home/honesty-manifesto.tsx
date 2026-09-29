import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Zero Hidden Processing Fees",
    bengali: "কোনো গোপন বা অপ্রত্যাশিত চার্জ নেই",
    desc: "Every statutory Japanese language school fee, immigration submission charge, and translation cost is declared transparently in writing before you begin.",
    icon: "💎",
  },
  {
    number: "02",
    title: "Strict Nyukan Immigration Compliance",
    bengali: "জাপান ইমিগ্রেশনের শতভাগ সঠিক নিয়ম অনুসরণ",
    desc: "We never sell false guarantees. Sovereign visa approvals are granted by the Japanese Immigration Bureau (Nyukan); our commitment is meticulous, bulletproof file preparation that maximizes success.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Dedicated Mirpur-10 Language Academy",
    bengali: "একই ছাদের নিচে প্রফেশনাল জাপানিজ ভাষা শিক্ষা",
    desc: "In-house Japanese N5, N4, and N3 training led by experienced Senseis with Minna no Nihongo curriculum, interactive audio facilities, and JLPT/NAT mock exams.",
    icon: "⛩️",
  },
  {
    number: "04",
    title: "Study Gap (Up to 5–10 Years) Accepted",
    bengali: "দীর্ঘ স্টাডি গ্যাপের বাস্তবসম্মত ও বৈধ সমাধান",
    desc: "Legitimate employment affidavits, professional career histories, and portfolio evidence to legally explain academic gaps for Japanese Language School applicants.",
    icon: "⏳",
  },
  {
    number: "05",
    title: "SSW & Technical Career Pathways",
    bengali: "এসএসডব্লিউ ওয়ার্ক ভিসায় নিশ্চিত ক্যারিয়ারের সুযোগ",
    desc: "Direct guidance on Specified Skilled Worker (Tokutei Ginou) exams in Caregiving, Food Service, Hospitality, Agriculture, and employer matching in Japan.",
    icon: "💼",
  },
  {
    number: "06",
    title: "Tokyo Student Welfare & Arrival Liaison",
    bengali: "জাপানে পৌঁছানোর পর সার্বক্ষণিক লোকাল সাপোর্ট",
    desc: "Our Tokyo liaison coordinator assists students with airport reception, resident registration (Juminhyo), Japanese bank accounts, and finding legal part-time jobs (Arubaito).",
    icon: "✈️",
  },
];

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
        className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[150px]"
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
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-rose-600/10 blur-[130px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1 text-xs font-bold text-red-300 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-red-400" />
            <span>The OneTech Education Standard</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Why Ambitious Students Trust <span className="text-red-500">OneTech Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Built on transparency, certified language coaching, and authentic representation of premier Japanese institutions.
          </motion.p>
        </div>

        {/* 6 Pillars Grid with Double-Bezel Architecture & Framer Motion Stagger */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-lg hover:border-red-500/50 hover:shadow-2xl transition-all"
            >
              <div className="rounded-[1.35rem] bg-[#0A1020] p-5 sm:p-7 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-white/[0.05] border border-white/10">
                      {p.icon}
                    </span>
                    <span className="font-display font-black text-xl sm:text-2xl text-red-500/40 group-hover:text-red-400 transition-colors">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-bangla text-xs font-semibold text-rose-300">
                    {p.bengali}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-red-400 transition-colors">
                  <IconCheck className="w-3.5 h-3.5 text-red-500" />
                  <span>Verified OneTech Commitment</span>
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
          className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-red-600/15 via-rose-600/10 to-transparent p-6 sm:p-8 border border-red-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Ready to Begin Your Japan Journey?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Schedule a free profile assessment with our senior Japan counselors at Gemcon EL Mercado (Lift-09), Mirpur-10.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 shrink-0 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={open}
              className="btn-primary text-xs py-3 px-6 font-bold rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-none"
            >
              <span>Book Free Consultation</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello OneTech Education! I want to book a free counseling appointment.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10 hover:border-red-500 transition-colors"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Counselor</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
