import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function MobileDock() {
  const { open } = useRegisterModal();

  const primaryPhone = company.phones[0];
  const whatsappClean = company.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] bg-[#070B16]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-center">
        {/* 1. Direct Call Hotline */}
        <motion.a
          whileTap={{ scale: 0.94 }}
          href={`tel:${primaryPhone.replace(/[^0-9]/g, "")}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 active:bg-white/10 transition-colors"
        >
          <IconPhone className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">Call Office</span>
        </motion.a>

        {/* 2. Direct WhatsApp Fast-Track */}
        <motion.a
          whileTap={{ scale: 0.94 }}
          href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(
            `Hello ${company.name}! I am on your website and want to consult about Study Abroad (South Korea, Greece, UK, USA) and IELTS / English courses.`,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 active:bg-emerald-900/60 transition-colors"
        >
          <IconWhatsApp className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">WhatsApp</span>
        </motion.a>

        {/* 3. Apply / Free Counseling Modal */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          type="button"
          onClick={() => open()}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white shadow-lg shadow-blue-600/30 active:opacity-90 font-bold cursor-pointer"
        >
          <span className="text-sm leading-none">✈️</span>
          <span className="text-[10px] font-extrabold uppercase tracking-tight">Apply Free</span>
        </motion.button>
      </div>
    </div>
  );
}
