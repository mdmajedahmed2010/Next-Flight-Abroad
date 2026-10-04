import { useState, useEffect } from "react";

const recentActivities = [
  {
    flag: "🇰🇷",
    student: "Tanvir Ahmed (Dhaka)",
    action: "South Korea D-2 Visa Granted (Kyungsung University) ✈️",
    subtext: "50% Scholarship · Next Flight Abroad Khilgaon Head Office",
    time: "3 mins ago",
  },
  {
    flag: "🇬🇷",
    student: "Mohammad Saiful Islam",
    action: "Greece Schengen Visa Approved (100% Risk-Free) 🇪🇺",
    subtext: "No IELTS Pathway · Contract Visa Guarantee",
    time: "14 mins ago",
  },
  {
    flag: "🇬🇧",
    student: "Nobin Siddiky (Dhaka)",
    action: "UK Student Visa Granted with 2-Year PSW 👨‍👩‍👧‍👦",
    subtext: "Anglia Ruskin University, Cambridge · Next Flight Abroad",
    time: "25 mins ago",
  },
  {
    flag: "🏆",
    student: "Shakil Hossain (Dhaka)",
    action: "Achieved IELTS Overall Band 7.5 (L:8.5, R:7.5) 🎯",
    subtext: "Next Flight Language Academy · Khilgaon Dhaka Campus",
    time: "38 mins ago",
  },
  {
    flag: "🇲🇹",
    student: "Nusrat Jahan",
    action: "Malta Schengen Study Visa Issued 🇲🇹",
    subtext: "English-Taught Degree · Next Flight Abroad Admissions",
    time: "52 mins ago",
  },
  {
    flag: "👧",
    student: "Arafat (Age 8)",
    action: "Completed Junior Phonics & Public Speaking 🎉",
    subtext: "Next Flight Kids English Studio · Khilgaon Center",
    time: "1 hour ago",
  },
  {
    flag: "🇺🇸",
    student: "Rafiul Karim",
    action: "US F-1 Visa Approved with $18,000 Merit Award 🇺🇸",
    subtext: "STEM OPT Pathway · Mock Interview Drills",
    time: "2 hours ago",
  },
];

export function LiveActivityToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 2800);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (isDismissed || isPaused) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % recentActivities.length);
        setVisible(true);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed, isPaused]);

  if (isDismissed) return null;

  const current = recentActivities[index];
  if (!current) return null;

  return (
    <aside
      aria-label="Recent student activity notification"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-xs sm:max-w-sm rounded-2xl bg-[#0B1528]/95 backdrop-blur-md border border-white/10 shadow-2xl p-3.5 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xl shadow-xs">
            {current.flag}
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-900" />
          </span>
        </div>

        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[0.65rem] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Verified Success
            </span>
            <span className="text-[0.62rem] text-slate-400 font-medium">{current.time}</span>
          </div>

          <h5 className="text-xs font-bold text-white truncate mt-0.5">{current.student}</h5>
          <p className="text-[0.72rem] font-semibold text-emerald-400 leading-tight">
            {current.action}
          </p>
          <p className="text-[0.66rem] text-slate-400 truncate mt-0.5">{current.subtext}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white text-xs font-bold p-1 rounded-md transition-colors cursor-pointer"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
