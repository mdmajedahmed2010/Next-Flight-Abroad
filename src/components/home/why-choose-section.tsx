import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      iconBg: "bg-emerald-500/20 text-emerald-400",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-emerald-400",
      tag: "CONTRACT GUARANTEE",
      title: "'No Visa, No Payment'",
      desc: "Formal legal contract guarantee: consultancy service charges are payable strictly after your visa is issued and verified.",
    },
    {
      icon: "🇰🇷",
      iconBg: "bg-blue-500/20 text-blue-400",
      value: 98,
      suffix: "%",
      label: "",
      metricColor: "text-blue-400",
      tag: "SOUTH KOREA ROUTE",
      title: "Kyungsung University, Busan",
      desc: "Direct Korean language (D-4-1) & degree (D-2) admissions with 30% to 100% scholarships in South Korea.",
    },
    {
      icon: "🏛️",
      iconBg: "bg-indigo-500/20 text-indigo-400",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-indigo-400",
      tag: "EUROPEAN SCHENGEN",
      title: "Greece 100% Risk-Free",
      desc: "NO IELTS required, full tuition payable strictly after visa grant, and unrestricted travel across 29 Schengen countries.",
    },
    {
      icon: "🗣️",
      iconBg: "bg-amber-500/20 text-amber-400",
      value: 7,
      suffix: ".5+",
      label: "",
      metricColor: "text-amber-400",
      tag: "LANGUAGE ACADEMY",
      title: "IELTS & Kids English",
      desc: "Certified Band 7.5+ IELTS instructors, Spoken English Fluency, and Junior Phonics Studio (ages 5–14) at our Khilgaon campus & online.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A1020] border-b border-white/10 text-white">
      <div className="section-shell">
        <MotionHeading
          tag={`— WHY ${company.name.toUpperCase()} —`}
          title="Why Choose"
          highlight={`${company.name}?`}
          description="Dedicated guidance for Study Abroad (South Korea, Greece, UK, USA) and Language Academy with our 'No Visa, No Payment' contract guarantee."
          tagColor="text-blue-400"
          highlightColor="text-blue-400"
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white/[0.06] hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs border border-white/10 ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                <div className="mb-1.5">
                  <span className={`text-3xl sm:text-4xl font-black font-display ${f.metricColor}`}>
                    <CountUp target={f.value} suffix={f.suffix} />
                  </span>
                </div>

                <span className="inline-block rounded-full bg-white/10 border border-white/10 px-3 py-0.5 text-[0.65rem] font-black uppercase tracking-wider text-slate-300 mb-3">
                  {f.tag}
                </span>

                <h3 className="font-display text-base font-extrabold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                  {f.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
