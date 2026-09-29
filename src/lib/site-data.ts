/**
 * ONETECH EDUCATION — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/OneTechEducation/
 *  - Official Brand Assets (C:\Users\Majed\Downloads\New asset):
 *      * Logo: logo.jpg (Circular red emblem, "OneTech EDUCATION", Tagline: "Connecting Possibilities")
 *      * Banner: banner.png ("Study in JAPAN - Start Your Future Today" · "Enroll in Japanese N5/N4 Language Course")
 *          Featuring Mount Fuji, Torii Gate, Classroom, Japanese language books, Jetliner & Student photos.
 *  - Headquarters / Principal Office:
 *      Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh.
 *      (Near Mirpur-10 Metro Rail Station).
 *  - Hotlines / Support:
 *      01345-918515 · 01345-918516 (+880 1345-918515 / +880 1345-918516)
 *  - WhatsApp: +880 1345-918515
 *  - Japanese Language Academy Wing:
 *      JLPT & NAT-TEST Courses: N5, N4, N3, Spoken Japanese, Embassy & School Interview Preparation.
 *  - Core Specialization:
 *      Study in Japan (Language Schools, Vocational Colleges / Senmon Gakko, Undergraduate, Masters/PhD)
 *      SSW (Specified Skilled Worker / Tokutei Ginou) Career & Visa Processing.
 */

export type NavChild = {
  label: string;
  to: string;
  params?: Record<string, string>;
  badge?: string;
};

export type NavItem = {
  label: string;
  to: string;
  params?: Record<string, string>;
  children?: NavChild[];
};

export const company = {
  name: "OneTech Education",
  shortName: "OneTech Education",
  altName: "OneTech Education Japan Advisory",
  acronym: "OTE",
  legalName: "OneTech Education — Japan Higher Education & Career Advisory",
  nativeName: "ওয়ানটেক এডুকেশন",
  slogan: "Connecting Possibilities",
  tagline: "Connecting Possibilities",
  taglineBangla: "পসিবিলিটিজ কানেক্ট করে জাপানে আপনার ভবিষ্যৎ গড়ার বিশ্বস্ত সঙ্গী",
  motto: "Study in JAPAN - Start Your Future Today · Japanese Language Academy · SSW Work Visa",
  secondaryMotto: "COE Approval Support · JLPT N5/N4 Preparation · Direct Discussion with Senior Japan Counselors",
  bengaliHeadline: "জাপানে উচ্চশিক্ষা, ভাষা শিক্ষা ও ক্যারিয়ার গড়ার বিশ্বস্ত প্রতিষ্ঠান!",
  bengaliSubheadline:
    "ওয়ানটেক এডুকেশন (জেমকন এল মেরকাডো, ৯ম তলা, শপ ১১৪, সেনপাড়া পর্বতা, মিরপুর-১০, ঢাকা-১২১৬): জাপানের শীর্ষ ল্যাঙ্গুয়েজ স্কুল, বিশ্ববিদ্যালয় ও এসএসডব্লিউ (SSW) ভিসার নির্ভরযোগ্য প্ল্যাটফর্ম। জাপানিজ ভাষা কোর্স (N5/N4/N3) ও এম্বাসি ইন্টারভিউ প্রস্তুতি।",
  philosophy: "CONNECTING POSSIBILITIES · TRANSPARENT ADVISORY · ZERO HIDDEN CHARGES · DIRECT SENSEI MENTORSHIP",
  bio: "Connecting Possibilities. Premier consultancy for Study & Career in Japan 🇯🇵. Official admissions in Japanese Language Schools, Universities, and Specified Skilled Worker (SSW) visas. Specialized Japanese Language Academy in Mirpur-10, Dhaka.",
  category: "Study in Japan Consultancy · Japanese Language Academy · SSW & Student Visa Advisory",
  origin: "Dhaka, Bangladesh",
  presence: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh",
  email: "info@onetecheducation.com",
  contactEmail: "info@onetecheducation.com",
  careerEmail: "career@onetecheducation.com",
  altEmail: "onetecheducationbd@gmail.com",
  emails: ["info@onetecheducation.com", "onetecheducationbd@gmail.com"],
  phones: ["01345-918515", "01345-918516", "+880 1345-918515", "+880 1345-918516"],
  whatsapp: "+8801345918515",
  whatsappFormatted: "+880 1345-918515",
  secondaryPhone: "01345-918516",
  landline: "01345-918515",
  hours: "Saturday – Thursday: 10:00 AM – 7:00 PM (Friday Open for Scheduled Language Classes & Mock Interviews)",
  established: "Verified Japan Education Consultancy",
  signOff: "OneTech Education · Connecting Possibilities",
  specialOffer: "Free Profile Evaluation for Japan Intakes & Japanese N5/N4 Language Course Enrollment Open!",

  offices: {
    headquarters: {
      name: "OneTech Education (Mirpur-10 Principal Office)",
      address: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh",
      full: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh (Near Mirpur-10 Metro Rail Station)",
      short: "Gemcon EL Mercado, Mirpur-10, Dhaka-1216",
      phone: "01345-918515",
      phones: ["01345-918515", "01345-918516"],
      whatsapp: "+8801345918515",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
    },
    academy: {
      name: "OneTech Japanese Language Academy Studio",
      address: "Gemcon EL Mercado, Lift-09, Mirpur-10, Dhaka-1216",
      full: "Gemcon EL Mercado, Lift-09, Senpara Parbata, Mirpur-10, Dhaka-1216 (Dedicated JLPT & NAT Multimedia Training Studio)",
      short: "Lift-09, Gemcon EL Mercado, Mirpur-10",
      phone: "01345-918515",
      phones: ["01345-918515", "01345-918516"],
      whatsapp: "+8801345918515",
      hours: "Saturday – Friday: 9:00 AM – 8:00 PM (Batch Schedules)",
      mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
    },
    tokyoDesk: {
      name: "Tokyo Liaison & Post-Arrival Welfare Desk",
      address: "Tokyo Liaison Office, Shinjuku / Tokyo, Japan",
      full: "Tokyo Liaison & Post-Arrival Student Welfare Desk, Tokyo, Japan",
      short: "Shinjuku / Tokyo, Japan",
      phone: "+880 1345-918515",
      phones: ["01345-918515", "info@onetecheducation.com"],
      whatsapp: "+8801345918515",
      hours: "Monday – Friday: 9:30 AM – 6:00 PM JST",
      mapsUrl: "https://maps.google.com/?q=Tokyo+Japan",
      mapsEmbed: "https://maps.google.com/maps?q=Tokyo+Japan&z=14&hl=en&output=embed",
    },
  },

  branches: [
    {
      name: "OneTech Education Principal Head Office (Mirpur-10)",
      city: "Dhaka",
      address: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh",
      full: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh (Near Mirpur-10 Metro Rail Station)",
      short: "Gemcon EL Mercado, Mirpur-10, Dhaka",
      phone: "01345-918515",
      phones: ["01345-918515", "01345-918516"],
      whatsapp: "+8801345918515",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      tag: "Principal HQ",
      primary: true,
      mapUrl: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
    },
    {
      name: "OneTech Japanese Language Academy Studio",
      city: "Dhaka",
      address: "Gemcon EL Mercado, Lift-09, Senpara Parbata, Mirpur-10, Dhaka-1216",
      full: "Gemcon EL Mercado, Lift-09, Senpara Parbata, Mirpur-10, Dhaka-1216 (Dedicated JLPT & NAT Multimedia Training Studio)",
      short: "Gemcon EL Mercado, Lift-09, Mirpur-10",
      phone: "01345-918515",
      phones: ["01345-918515", "01345-918516"],
      whatsapp: "+8801345918515",
      hours: "Saturday – Friday: 9:00 AM – 8:00 PM",
      tag: "Language Academy",
      primary: false,
      mapUrl: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
    },
    {
      name: "Tokyo Liaison & Post-Arrival Welfare Desk",
      city: "Tokyo",
      address: "Tokyo Liaison & Student Support Desk, Shinjuku, Tokyo, Japan",
      full: "Tokyo Liaison & Post-Arrival Student Welfare Desk, Tokyo, Japan",
      short: "Shinjuku, Tokyo, Japan",
      phone: "+880 1345-918515",
      phones: ["01345-918515", "info@onetecheducation.com"],
      whatsapp: "+8801345918515",
      hours: "Monday – Friday: 9:30 AM – 6:00 PM JST",
      tag: "Tokyo Liaison Desk",
      primary: false,
      mapUrl: "https://maps.google.com/maps?q=Tokyo+Japan&z=14&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=Tokyo+Japan",
      mapsEmbed: "https://maps.google.com/maps?q=Tokyo+Japan&z=14&hl=en&output=embed",
    },
  ],

  campusOffice: {
    title: "OneTech Education Principal Office",
    building: "Gemcon EL Mercado",
    floor: "Lift-09 (Shop 114)",
    area: "Senpara Parbata, Mirpur-10",
    city: "Dhaka",
    postalCode: "1216",
    country: "Bangladesh",
    full: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh",
    hotlines: ["01345-918515", "01345-918516"],
    whatsapp: "+8801345918515",
    whatsappDisplay: "+880 1345-918515",
    email: "info@onetecheducation.com",
    mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
    mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",
  },

  address: {
    building: "Gemcon EL Mercado",
    street: "Lift-09 (Shop 114), Senpara Parbata",
    area: "Mirpur-10 (Near Metro Station)",
    city: "Dhaka",
    postalCode: "1216",
    country: "Bangladesh",
    full: "Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh",
    networkNote: "Gemcon EL Mercado, Lift-09, Senpara Parbata, Mirpur-10, Dhaka-1216",
  },

  geo: { lat: 23.8069, lng: 90.3687 },
  mapsUrl: "https://maps.google.com/?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka",
  mapsEmbed: "https://maps.google.com/maps?q=Gemcon+EL+Mercado+Mirpur+10+Dhaka&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/OneTechEducation/",
    facebookPageName: "OneTech Education",
    facebookVideos: "https://www.facebook.com/OneTechEducation/videos/",
    facebookReels: "https://www.facebook.com/OneTechEducation/reels/",
    instagram: "https://www.facebook.com/OneTechEducation/",
    linkedin: "https://www.facebook.com/OneTechEducation/",
    youtube: "https://www.facebook.com/OneTechEducation/",
    messenger: "https://m.me/OneTechEducation",
    whatsapp: "https://wa.me/8801345918515",
  },

  // 3 Verified Facebook Videos & Reels provided directly by user
  featuredReels: [
    {
      id: "reel-928543896274614",
      badge: "✈️ Verified Japan Student Visa & COE",
      tag: "Featured Reel (9:16)",
      orientation: "portrait" as const,
      aspectRatio: "9/16",
      title: "Real Student Visa Success & COE Approval for Japan",
      bengaliTitle: "জাপানের স্টুডেন্ট ভিসা ও সিওই (COE) প্রাপ্তির আনন্দঘন মুহূর্ত",
      desc: "Watch our real student celebrate receiving their Certificate of Eligibility (COE) and Japanese student visa with OneTech Education's expert counseling.",
      bengaliDesc: "সফলভাবে জাপানের ভিসা পাওয়ার পর শিক্ষার্থীর বাস্তব অনুভূতি ও ওয়ানটেক এডুকেশনের আন্তরিক সহযোগিতা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F928543896274614%2F&show_text=false&width=267&t=0",
      videoUrl: "https://www.facebook.com/reel/928543896274614/",
      width: 267,
      height: 476,
    },
    {
      id: "reel-1006265795785003",
      badge: "🎓 Study in Japan & Language Guidance",
      tag: "Admissions Spotlight",
      orientation: "portrait" as const,
      aspectRatio: "9/16",
      title: "Japanese Language N5/N4 Admission & Documentation Guidance",
      bengaliTitle: "জাপানিজ ভাষা শিক্ষা, ভর্তি প্রক্রিয়া ও সঠিক ডকুমেন্টস গাইডলাইন",
      desc: "Comprehensive guidance on Japanese language school enrollment, JLPT/NAT preparation, and seamless document processing for Japan.",
      bengaliDesc: "জাপানের ল্যাঙ্গুয়েজ স্কুলে ভর্তি, প্রয়োজনীয় কাগজপত্র ও ভিসা প্রসেসিংয়ের সম্পূর্ণ দিকনির্দেশনা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1006265795785003%2F&show_text=false&width=380&t=0",
      videoUrl: "https://www.facebook.com/reel/1006265795785003/",
      width: 380,
      height: 476,
    },
    {
      id: "reel-1522604342958015",
      badge: "🌟 SSW & Student Visa Success Story",
      tag: "Success Story",
      orientation: "portrait" as const,
      aspectRatio: "9/16",
      title: "Fast-Track Japan Visa Stamping & Candidate Journey",
      bengaliTitle: "জাপানে নিশ্চিত ক্যারিয়ার ও ভিসা স্ট্যাম্পিংয়ের আনন্দঘন মুহূর্ত",
      desc: "Authentic candidate testimonial highlighting smooth school interviews, honest counseling, and swift Japan visa stamping.",
      bengaliDesc: "সততা ও সঠিক নির্দেশনায় জাপানে উচ্চশিক্ষা ও কর্মসংস্থানের বাস্তব অভিজ্ঞতা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1522604342958015%2F&show_text=false&width=380&t=0",
      videoUrl: "https://www.facebook.com/reel/1522604342958015/",
      width: 380,
      height: 476,
    },
  ],

  bannerUSPs: [
    {
      title: "Study in JAPAN - Start Your Future Today",
      bengali: "জাপানে উচ্চশিক্ষা - আজই শুরু করুন আপনার উজ্জ্বল ভবিষ্যৎ",
      desc: "Direct admissions into premier Japanese Language Schools, Senmon Gakko, and Universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka.",
      icon: "🇯🇵",
    },
    {
      title: "Japanese Language Course (N5 / N4 / N3)",
      bengali: "জাপানিজ ল্যাঙ্গুয়েজ কোর্স (N5 / N4 / N3)",
      desc: "Enroll in specialized JLPT & NAT-TEST batches with native audio-visual tools, Minna no Nihongo curriculum, and dedicated Sensei mentorship.",
      icon: "⛩️",
    },
    {
      title: "High COE & Visa Approval Rate",
      bengali: "উচ্চ সিওই (COE) ও ভিসা সাফল্যের হার",
      desc: "Bulletproof file preparation adhering to Japanese Immigration Bureau (Nyukan) standards with 100% genuine financial guidance.",
      icon: "🛡️",
    },
    {
      title: "28 Hours/Week Legal Part-Time Work",
      bengali: "সপ্তাহে ২৮ ঘণ্টা বৈধ পার্ট-টাইম কাজ (Arubaito)",
      desc: "Earn ¥1,100 to ¥1,400 per hour while studying to comfortably support tuition and living expenses in Japan.",
      icon: "💴",
    },
    {
      title: "SSW (Specified Skilled Worker) Support",
      bengali: "এসএসডব্লিউ (SSW) টেকনিক্যাল জব ভিসা সুবিধা",
      desc: "Pathways for skilled workers in Caregiving, Food Service, Hospitality, Agriculture, and Construction with Japanese employers.",
      icon: "💼",
    },
    {
      title: "Direct Discussions with Expert Counsellor",
      bengali: "অভিজ্ঞ জাপান কাউন্সেলরের সাথে সরাসরি আলোচনা",
      desc: "Meet face-to-face at our Mirpur-10 Dhaka principal office or connect via WhatsApp for personalized profile assessment.",
      icon: "👥",
    },
  ],

  stats: [
    { value: "99%+", label: "COE & Visa Success", badge: "Verified Track Record" },
    { value: "4", label: "Major Japan Intakes", badge: "April, July, Oct, Jan" },
    { value: "N5/N4", label: "Language Academy Batches", badge: "JLPT & NAT-TEST" },
    { value: "28 hrs", label: "Legal Work / Week", badge: "¥1,100–¥1,400 / hr" },
    { value: "Mirpur-10", label: "Dhaka Principal HQ", badge: "Gemcon EL Mercado Lift-9" },
    { value: "0 BDT", label: "Free Profile Assessment", badge: "Direct with Counselor" },
  ],

  accreditations: [
    {
      title: "Japan Language School Representation",
      org: "Direct admission ties across Tokyo, Osaka, Kyoto, Nagoya, Fukuoka",
      icon: "🇯🇵",
    },
    {
      title: "JLPT & NAT-TEST Curriculum Aligned",
      org: "Minna no Nihongo & Japan Foundation standardized methodology",
      icon: "⛩️",
    },
    {
      title: "Gemcon EL Mercado Mirpur-10 HQ",
      org: "State-of-the-art air-conditioned multimedia training classrooms",
      icon: "🏢",
    },
    {
      title: "Tokyo Post-Arrival Welfare Desk",
      org: "Airport pickup, SIM card, bank account, and Arubaito guidance in Japan",
      icon: "✈️",
    },
  ],

  timeline: [
    {
      year: "Establishment",
      title: "Founded on the Vision of Connecting Possibilities",
      desc: "Established in Dhaka to empower ambitious students and professionals with transparent, reliable pathways for higher education and careers in Japan.",
    },
    {
      year: "Language Academy",
      title: "Full-Fledged Japanese Language Training Center",
      desc: "Opened our modern training facility at Gemcon EL Mercado (Lift-09), Mirpur-10, offering N5, N4, and N3 courses for JLPT and NAT-TEST aspirants.",
    },
    {
      year: "SSW Expansion",
      title: "Specified Skilled Worker & Company Placement",
      desc: "Expanded into SSW (Tokutei Ginou) career placement, helping candidates qualify through Japanese language tests and skills assessments.",
    },
    {
      year: "Today",
      title: "Premier Japan Study Abroad & Language Hub",
      desc: "A one-stop platform for students across Bangladesh achieving fast-track COE approvals, top Japanese university offers, and rewarding careers in Japan.",
    },
  ],

  team: [
    {
      name: "Lead Japan Education Consultant",
      role: "Senior Counselor — Japan Higher Education & Admissions",
      location: "Mirpur-10 Principal Office",
      expertise: "Japanese Language Schools, Senmon Gakko, MEXT, COE Documentation",
      bio: "Expert with over 8 years in Japanese higher education admissions, guiding students through language school selections, interview drills, and Nyukan visa compliance.",
      avatar: "/logo.jpg",
    },
    {
      name: "Chief Japanese Language Sensei",
      role: "Head of Japanese Language Academy (JLPT & NAT-TEST)",
      location: "Language Training Wing",
      expertise: "Minna no Nihongo, Kanji Mastery, JLPT N5/N4/N3, Pronunciation",
      bio: "Seasoned Japanese language instructor trained in Japan, dedicated to helping students clear JLPT and NAT-TEST with top scores.",
      avatar: "/logo.jpg",
    },
    {
      name: "SSW & Career Advisory Specialist",
      role: "Coordinator — Specified Skilled Worker (SSW) & Technical Visas",
      location: "Mirpur-10 Principal Office",
      expertise: "SSW Skills Test, Caregiving, Food Service, Employment Matching",
      bio: "Specializes in Japanese job placement, matching qualified professionals with accredited Japanese companies and handling technical visa paperwork.",
      avatar: "/logo.jpg",
    },
    {
      name: "Tokyo Student Welfare Liaison",
      role: "Post-Arrival Student Support Coordinator",
      location: "Tokyo Support Desk",
      expertise: "Airport Pickup, Resident Registration, Arubaito Matching, Housing",
      bio: "Based in Japan to assist newly arrived students with city hall registration, bank accounts, mobile SIMs, and part-time job hunting.",
      avatar: "/logo.jpg",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Study in Japan",
    to: "/destinations",
    children: [
      { label: "🇯🇵 Study in Japan (Flagship Destination)", to: "/study-in-{$country}", params: { country: "japan" }, badge: "Featured" },
      { label: "🇬🇧 Study in United Kingdom", to: "/study-in-{$country}", params: { country: "uk" } },
      { label: "🇲🇾 Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" } },
      { label: "🇦🇺 Study in Australia", to: "/study-in-{$country}", params: { country: "australia" } },
      { label: "🇨🇦 Study in Canada", to: "/study-in-{$country}", params: { country: "canada" } },
      { label: "🇫🇮 Study in Finland", to: "/study-in-{$country}", params: { country: "finland" } },
      { label: "🇨🇾 Study in Cyprus", to: "/study-in-{$country}", params: { country: "cyprus" } },
      { label: "🇲🇹 Study in Malta", to: "/study-in-{$country}", params: { country: "malta" } },
      { label: "All Destinations Directory", to: "/destinations" },
    ],
  },
  {
    label: "Japanese Academy",
    to: "/services",
    children: [
      { label: "Japanese Language Course N5 (Beginner)", to: "/services", badge: "JLPT / NAT" },
      { label: "Japanese Language Course N4 (Elementary)", to: "/services", badge: "Admission" },
      { label: "Japanese Language Course N3 (Intermediate)", to: "/services", badge: "SSW Ready" },
      { label: "Embassy & School Interview Prep", to: "/services", badge: "Mock Drill" },
      { label: "IELTS & Spoken English Program", to: "/services" },
    ],
  },
  { label: "Intakes & Offers", to: "/offers" },
  { label: "Contact Us", to: "/contact" },
];

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  intro: string;
  why: string[];
  popularFields: string[];
  avgTuition: string;
  avgLiving: string;
  pswv: string;
  intakes: string;
  scholarships: string;
  topUnis: string[];
  withoutIelts: boolean;
  featured?: boolean;
  specialHighlight?: string;
};

export const destinations: Destination[] = [
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia",
    tagline: "Study in JAPAN - Start Your Future Today · 28 hrs/week Part-Time Work · High Visa Success",
    intro:
      "Japan is OneTech Education's premier flagship destination. Experience world-renowned safety, cutting-edge technology, and unmatched cultural depth. Study in accredited Japanese Language Schools or leading Universities in Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka. Students enjoy 28 hours per week legal part-time work rights (¥1,100–¥1,400/hr) and seamless transitions into high-paying Japanese careers or Specified Skilled Worker (SSW) visas.",
    why: [
      "Official flagship destination with 99%+ COE (Certificate of Eligibility) approval rate",
      "Legal 28 hours per week part-time work rights during study semesters (40 hrs/wk during vacations)",
      "Attractive part-time hourly wages ranging from ¥1,100 to ¥1,400 (covering tuition & living comfortably)",
      "High transition rate into permanent full-time employment (Shushoku) after graduation",
      "Specialized Japanese Language N5/N4 coaching provided directly at our Mirpur-10 academy",
      "Opportunities for SSW (Specified Skilled Worker) visas in Caregiving, Food Service, Hospitality, etc.",
      "Safe, technologically advanced, and welcoming society with top-ranked global institutions",
    ],
    popularFields: [
      "Japanese Language & Cultural Studies",
      "Computer Science, Software Engineering & Robotics",
      "Automobile Engineering & Advanced Technology",
      "International Business & Global Management",
      "Hospitality, Tourism & Culinary Arts",
      "Caregiving, Nursing & Healthcare Sciences",
    ],
    avgTuition: "¥700,000 – ¥850,000 / year (Language Schools) · ¥535,800/yr (National Universities)",
    avgLiving: "¥80,000 – ¥110,000 / month (comfortably covered by part-time earnings)",
    pswv: "Seamless pathway to full-time Employment Visa (Shukatsu) / SSW Visa / PR",
    intakes: "April (2-Year Track), July (1.75-Year), October (1.5-Year), January (1.25-Year)",
    scholarships: "MEXT Scholarships, JASSO Honors Grants & Language School Tuition Waivers",
    topUnis: [
      "Akamonkai Japanese Language School (Tokyo)",
      "ISI Language School (Tokyo / Kyoto)",
      "Sendagaya Japanese Institute (Tokyo)",
      "ARC Academy Tokyo & Osaka",
      "Kansai College of Business & Languages (Osaka)",
      "University of Tokyo & Kyoto University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Flagship Destination · N5/N4 Batch Open · 28 hrs/week Work Rights",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Fast 1-year Masters, 2-Year Graduate PSW & World-Class Universities",
    intro:
      "The UK offers globally recognized degrees, fast-track 1-year Masters programs that save both time and tuition, and a 2-year Graduate Route Post-Study Work Visa. OneTech Education assists with partner university admissions and visa processing.",
    why: [
      "1-Year fast-track Master degrees saving significant time and tuition fees",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon degree completion",
      "Legal 20 hours per week part-time work rights during study semesters",
      "Study gap accepted with valid professional experience and documentation",
      "Institutional merit scholarships ranging from £1,500 to £5,000",
    ],
    popularFields: [
      "Computer Science, Artificial Intelligence & Cybersecurity",
      "International Business & Global MBA",
      "Data Analytics & Financial Technology",
      "Public Health, Nursing & Health Informatics",
    ],
    avgTuition: "£11,000 – £16,000 / year (after partner scholarships)",
    avgLiving: "£9,207 – £12,500 / year",
    pswv: "2 Years (Graduate Route Visa) / 3 Years for PhD",
    intakes: "January/February, May/June & September/October",
    scholarships: "£1,500 – £5,000 University Merit Bursaries",
    topUnis: [
      "University of Hertfordshire",
      "Coventry University",
      "University of Greenwich",
      "University of East London",
      "Birmingham City University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "1-Yr Masters · 2-Yr PSW · Fast CAS Processing",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    tagline: "Global UK/Australian Branch Campuses, Affordable Living & Fast Visa Approval",
    intro:
      "Earn prestigious British and Australian degrees in Malaysia at a fraction of Western costs. Enjoy world-class campuses, low living expenses ($350–$450/month), and straightforward EMGS student pass approval.",
    why: [
      "Earn prestigious UK and Australian dual degrees at 50% lower tuition costs",
      "No rigorous embassy visa interview requirements; EMGS student pass approval",
      "Affordable living costs ($300 – $450/month) with modern infrastructure",
      "Medium of Instruction (MOI) widely accepted for degree admissions",
    ],
    popularFields: [
      "Information Technology, Software Engineering & Data Science",
      "Business Administration & International Finance",
      "Biotechnology & Biomedical Sciences",
      "Hospitality & International Tourism Management",
    ],
    avgTuition: "$3,500 – $6,500 / year",
    avgLiving: "$3,600 – $5,200 / year",
    pswv: "Career opportunities in Southeast Asian multinational tech hubs",
    intakes: "January, March, July, September & October",
    scholarships: "20% to 50% Academic Merit Fee Discounts",
    topUnis: [
      "Taylor's University",
      "Sunway University",
      "Asia Pacific University (APU)",
      "UCSI University",
      "INTI International University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Dual UK/AUS Degrees · Affordable Living · Fast Approval",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "World-Class Group of Eight, Up to 4-Year PSW, 48 hrs/fortnight Work Rights",
    intro:
      "Australia provides an exceptional standard of living, high minimum wages, and globally renowned universities. OneTech Education supports genuine students with Subclass 500 visa processing and GTE/GS auditing.",
    why: [
      "Top-ranked global universities including Group of Eight (Go8) members",
      "Generous Post-Study Work stream (up to 2–4 years based on location)",
      "48 Hours per fortnight legal work rights during term time; unlimited during breaks",
      "High minimum hourly wage offering strong financial independence",
    ],
    popularFields: [
      "Information Technology, Data Science & Cyber Systems",
      "Mining, Mechanical & Civil Engineering",
      "Nursing, Public Health & Biomedical Sciences",
      "Commerce, Accounting & International Finance",
    ],
    avgTuition: "AUD $22,000 – $36,000 / year",
    avgLiving: "AUD $21,000 – $25,000 / year",
    pswv: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    intakes: "February & July (Major Intakes), November (Select Programs)",
    scholarships: "AUD $3,000 to 25% Vice-Chancellor Merit Bursaries",
    topUnis: [
      "University of Adelaide",
      "Deakin University",
      "La Trobe University",
      "Swinburne University of Technology",
    ],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Post-Graduation Work Permit (PGWP) up to 3 Years & High Quality of Life",
    intro:
      "Canada offers applied polytechnic colleges with cooperative education (Co-op) and prestigious universities. OneTech Education assists with DLI admissions and Study Permit applications.",
    why: [
      "World-class universities and applied polytechnic colleges with industry co-op",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) upon graduation",
      "Welcoming and safe multicultural society with high living standards",
      "Transparent post-graduation economic immigration pathways",
    ],
    popularFields: [
      "Computer Science & Applied Artificial Intelligence",
      "Business Analytics & Supply Chain Management",
      "Mechanical & Civil Engineering",
      "Health Care, Biotechnology & Public Health",
    ],
    avgTuition: "CAD $16,000 – $28,000 / year",
    avgLiving: "CAD $18,000 – $22,000 / year",
    pswv: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    intakes: "January (Winter), May (Spring) & September (Fall)",
    scholarships: "CAD $2,000 – $10,000 Entrance Bursaries",
    topUnis: [
      "University of Windsor",
      "Memorial University of Newfoundland",
      "Conestoga College",
      "Seneca Polytechnic",
    ],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    tagline: "World #1 Education System, 30 hrs/week Work Rights, 2-Year Post-Study Visa",
    intro:
      "Consistently ranked the happiest nation with the world's most innovative education system. Finnish universities offer English-taught degrees, generous institutional tuition waivers, legal 30 hours per week student work rights, and a 2-year post-study work visa upon graduation.",
    why: [
      "World's leading education framework with high research & innovation ranking",
      "Legal 30 hours per week student work permit during university semesters",
      "Generous 2-year post-study job seeker residence permit upon graduation",
      "Substantial merit-based tuition fee scholarships (20% – 50% discount)",
    ],
    popularFields: [
      "Information & Communication Technology (ICT) and AI",
      "International Business & Sustainable Entrepreneurship",
      "Clean Energy & Environmental Engineering",
      "Nursing & Social Healthcare",
    ],
    avgTuition: "€8,000 – €12,500 / year (scholarships reduce to €4,500 – €7,000)",
    avgLiving: "€7,200 – €9,600 / year",
    pswv: "2 Years Post-Study Work Permit",
    intakes: "January (Spring) & September (Autumn / Joint Application)",
    scholarships: "20% – 50% Finnish University Tuition Fee Waivers",
    topUnis: [
      "Tampere University",
      "Metropolia University of Applied Sciences",
      "LUT University",
      "Haaga-Helia University of Applied Sciences",
    ],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    tagline: "Affordable European Education, Low Tuition Fees & With/Without IELTS",
    intro:
      "Cyprus offers low tuition starting from €2,500 to €3,500/year, fast-track visa processing, and options to study with or without IELTS (Medium of Instruction accepted).",
    why: [
      "Affordable tuition fees starting as low as €2,500 per academic year",
      "Admission open without IELTS through Medium of Instruction (MOI) certificates",
      "Swift visa processing with very high approval rates for Bangladeshi students",
      "Low living expenses compared to Western European destinations",
    ],
    popularFields: [
      "Business Administration & International Management",
      "Computer Science & Information Technology",
      "Hospitality, Tourism & Hotel Management",
    ],
    avgTuition: "€2,500 – €4,500 / year",
    avgLiving: "€3,600 – €5,500 / year",
    pswv: "Post-study job placement and European career options",
    intakes: "February (Spring), June (Summer) & October (Fall) Intakes",
    scholarships: "Up to 50% Merit Scholarships on Tuition Fees",
    topUnis: [
      "Near East University",
      "Eastern Mediterranean University",
      "Cyprus International University",
    ],
    withoutIelts: true,
    featured: false,
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    region: "Europe",
    tagline: "European Schengen Zone, English-Speaking Island & Legal Part-Time Work",
    intro:
      "As an English-speaking EU and Schengen nation, Malta combines high-standard education, 20 hours/week legal part-time work rights, and visa-free travel across all 29 Schengen European countries.",
    why: [
      "Full member of the European Union & Schengen Area (travel across 29 nations)",
      "Official English-speaking country with zero language barrier",
      "Legal part-time work rights (20 hours/week) during academic studies",
    ],
    popularFields: [
      "Business Management & Leadership",
      "Information Technology & Cyber Security",
      "Tourism & Hotel Operations",
    ],
    avgTuition: "€4,500 – €7,500 / year",
    avgLiving: "€5,000 – €7,000 / year",
    pswv: "6 to 9 Months European job search extension upon graduation",
    intakes: "February, May, September & November",
    scholarships: "Institutional bursaries and early registration discounts",
    topUnis: [
      "University of Malta",
      "MCAST Malta",
      "Global College Malta",
    ],
    withoutIelts: true,
    featured: false,
  },
];

export type Course = {
  id: string;
  slug: string;
  title: string;
  bengaliTitle: string;
  badge: string;
  tagline: string;
  targetAudience: string;
  duration: string;
  classesCount: string;
  mockTests: string;
  batchSize: string;
  fee: string;
  schedule: string;
  format: string;
  desc: string;
  features: string[];
  modules: { name: string; desc: string }[];
  learningOutcomes: string[];
  // Compatibility Aliases for components
  icon?: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  classSchedule?: string;
  batchType?: string;
  targetOutcome?: string;
};

export const courses: Course[] = [
  {
    id: "japanese-n5",
    slug: "japanese-n5",
    title: "Japanese Language Course N5 (Beginner to JLPT/NAT 5Q)",
    bengaliTitle: "জাপানিজ ভাষা কোর্স N5 (JLPT ও NAT-TEST ৫Q প্রস্তুতি)",
    badge: "Official Banner Course",
    tagline: "Minna no Nihongo Curriculum · Hiragana, Katakana & 100+ Kanji · NAT/JLPT 5Q",
    targetAudience: "Students planning to study in Japan (Language Schools) and SSW candidate aspirants",
    duration: "2.5 – 3 Months",
    classesCount: "36 Intensive Interactive Sessions",
    mockTests: "8 Full-Length Timed JLPT / NAT-TEST 5Q Mock Tests",
    batchSize: "Max 12–15 Students for Close Personal Attention",
    fee: "Affordable Package with Installment Option (Call 01345-918515)",
    schedule: "Morning (10 AM), Afternoon (3 PM) & Evening Batches (6 PM)",
    format: "In-Person Multimedia Studio (Mirpur-10 HQ) & Online Zoom Live",
    desc: "Our flagship foundation course featured on the official banner. Master Japanese scripts (Hiragana, Katakana), foundational Kanji (100+ characters), Minna no Nihongo Book 1 (Lessons 1–25), daily greetings, essential grammar patterns, and listening drills required for Japanese Language School admissions and visa filing.",
    icon: "⛩️",
    subtitle: "Minna no Nihongo Curriculum · Hiragana, Katakana & 100+ Kanji · NAT/JLPT 5Q",
    description: "Our flagship foundation course featured on the official banner. Master Japanese scripts (Hiragana, Katakana), foundational Kanji (100+ characters), Minna no Nihongo Book 1 (Lessons 1–25), daily greetings, essential grammar patterns, and listening drills required for Japanese Language School admissions and visa filing.",
    highlights: [
      "Complete mastery of Hiragana, Katakana, and stroke order rules",
      "Minna no Nihongo 1 (Lessons 1 to 25) with authentic audio listening practice",
      "Over 100 essential Kanji characters and stroke memorization techniques",
      "8 full-length simulated mock tests matching exact JLPT N5 and NAT-TEST 5Q formats",
      "Dedicated school interview preparation and self-introduction (Jikoshoukai) training",
      "Free access to OneTech Japanese audio-visual library and vocabulary workbooks",
    ],
    classSchedule: "Morning (10 AM), Afternoon (3 PM) & Evening Batches (6 PM)",
    batchType: "In-Person Multimedia Studio (Mirpur-10 HQ) & Online Zoom Live",
    targetOutcome: "JLPT N5 / NAT-TEST 5Q Pass & Certificate",
    features: [
      "Complete mastery of Hiragana, Katakana, and stroke order rules",
      "Minna no Nihongo 1 (Lessons 1 to 25) with authentic audio listening practice",
      "Over 100 essential Kanji characters and stroke memorization techniques",
      "8 full-length simulated mock tests matching exact JLPT N5 and NAT-TEST 5Q formats",
      "Dedicated school interview preparation and self-introduction (Jikoshoukai) training",
      "Free access to OneTech Japanese audio-visual library and vocabulary workbooks",
    ],
    modules: [
      { name: "Japanese Scripts & Phonetics", desc: "Hiragana, Katakana, Dakuon, Handakuon, Youon, and accurate pitch accent rules." },
      { name: "Minna no Nihongo Grammar 1–25", desc: "Particles (wa, ga, o, ni, de, e), verb conjugations (Te-form, Nai-form, Ta-form), and adjectives." },
      { name: "Kanji Foundation (100+ Characters)", desc: "Numbers, dates, directions, family, nature, and common everyday pictographic characters." },
      { name: "Choukai (Listening) & Kaiwa (Speaking)", desc: "Authentic Japanese speech comprehension, roleplays, ordering, and self-introduction." },
    ],
    learningOutcomes: [
      "Pass the JLPT N5 or NAT-TEST 5Q examination with high marks",
      "Deliver a fluent 3-minute Japanese self-introduction (Jikoshoukai) for school interviews",
      "Read and write basic Japanese text and comprehend everyday conversations in Japan",
    ],
  },
  {
    id: "japanese-n4",
    slug: "japanese-n4",
    title: "Japanese Language Course N4 (Elementary to JLPT/NAT 4Q)",
    bengaliTitle: "জাপানিজ ভাষা কোর্স N4 (JLPT ও NAT-TEST ৪Q প্রস্তুতি)",
    badge: "Official Banner Course",
    tagline: "Minna no Nihongo 2 (Lessons 26–50) · 300+ Kanji · Conversational Fluency",
    targetAudience: "N5 certificate holders, SSW (Specified Skilled Worker) candidates, and university applicants",
    duration: "3 Months",
    classesCount: "36 Intensive Interactive Sessions",
    mockTests: "8 Full Mock Tests with Evaluation",
    batchSize: "Max 12 Students",
    fee: "Standard Package with Installments (Call 01345-918515)",
    schedule: "Morning, Afternoon & Evening Batches",
    format: "In-Person Classroom at Mirpur-10 & Live Zoom",
    desc: "Advance from beginner to intermediate. Complete Minna no Nihongo Book 2 (Lessons 26–50), master 300+ Kanji, conditional clauses, passive/causative forms, honorific Japanese (Keigo), and prepare directly for JLPT N4 / NAT 4Q. This level is crucial for SSW job eligibility and direct university admissions.",
    icon: "🇯🇵",
    subtitle: "Minna no Nihongo 2 (Lessons 26–50) · 300+ Kanji · Conversational Fluency",
    description: "Advance from beginner to intermediate. Complete Minna no Nihongo Book 2 (Lessons 26–50), master 300+ Kanji, conditional clauses, passive/causative forms, honorific Japanese (Keigo), and prepare directly for JLPT N4 / NAT 4Q. This level is crucial for SSW job eligibility and direct university admissions.",
    highlights: [
      "Minna no Nihongo Book 2 (Lessons 26 to 50) complete grammatical breakdown",
      "Mastery of 300+ Kanji, compound words (Jukugo), and rapid reading passages",
      "Essential qualification for SSW (Specified Skilled Worker) visas in Japan",
      "Intensive listening comprehension with native Japanese pronunciation and cadence",
    ],
    classSchedule: "Morning, Afternoon & Evening Batches",
    batchType: "In-Person Classroom at Mirpur-10 & Live Zoom",
    targetOutcome: "JLPT N4 / NAT-TEST 4Q Pass & SSW Eligibility",
    features: [
      "Minna no Nihongo Book 2 (Lessons 26 to 50) complete grammatical breakdown",
      "Mastery of 300+ Kanji, compound words (Jukugo), and rapid reading passages",
      "Essential qualification for SSW (Specified Skilled Worker) visas in Japan",
      "Intensive listening comprehension with native Japanese pronunciation and cadence",
    ],
    modules: [
      { name: "Advanced Grammar Patterns", desc: "Passive (Ukemi), Causative (Shieki), Conditional (Tara/Ba/Nara), and Volitional forms." },
      { name: "Kanji Expansion (300+ Characters)", desc: "Workplace Kanji, transportation, public signs, shopping, and everyday terminology." },
      { name: "Business Etiquette & Keigo", desc: "Sonkeigo (respectful) and Kenjougo (humble) language used in Japanese workplaces." },
      { name: "Examination Speed Strategy", desc: "Dokkai (reading comprehension) speed tactics and error-spotting drills." },
    ],
    learningOutcomes: [
      "Pass JLPT N4 or NAT-TEST 4Q with confidence",
      "Qualify for SSW technical work visa applications in Japan",
      "Hold natural, spontaneous everyday conversations with Japanese natives",
    ],
  },
  {
    id: "japanese-n3",
    slug: "japanese-n3",
    title: "Japanese Language Course N3 (Intermediate & Professional)",
    bengaliTitle: "জাপানিজ ভাষা কোর্স N3 (ইন্টারমিডিয়েট ও প্রফেশনাল)",
    badge: "Career & Degree Level",
    tagline: "650+ Kanji · Complex Sentence Mastery · Workplace Communication",
    targetAudience: "Senmon Gakko students, university degree aspirants, and professional job seekers",
    duration: "3 – 4 Months",
    classesCount: "40 Interactive Audio-Visual Sessions",
    mockTests: "6 Full JLPT N3 Timed Mock Examinations",
    batchSize: "Max 10 Students",
    fee: "Career Accelerator Package",
    schedule: "Weekend and Evening Batches",
    format: "Classroom at Mirpur-10 & Online Hybrid",
    desc: "Bridge the gap between conversational Japanese and professional fluency. Learn to read Japanese newspaper editorials, understand complex instructions at work, grasp nuanced grammatical expressions, and prepare for high-level technical employment in Japan.",
    icon: "💼",
    subtitle: "650+ Kanji · Complex Sentence Mastery · Workplace Communication",
    description: "Bridge the gap between conversational Japanese and professional fluency. Learn to read Japanese newspaper editorials, understand complex instructions at work, grasp nuanced grammatical expressions, and prepare for high-level technical employment in Japan.",
    highlights: [
      "Over 650 Kanji and 3,000+ vocabulary words for academic and corporate usage",
      "Direct pathway for Senmon Gakko technical diplomas and Bachelor's degrees in Japan",
      "Workplace business communication, email writing, and telephone etiquette",
      "Native Japanese conversational listening sessions",
    ],
    classSchedule: "Weekend and Evening Batches",
    batchType: "Classroom at Mirpur-10 & Online Hybrid",
    targetOutcome: "JLPT N3 Pass & Professional Employment Ready",
    features: [
      "Over 650 Kanji and 3,000+ vocabulary words for academic and corporate usage",
      "Direct pathway for Senmon Gakko technical diplomas and Bachelor's degrees in Japan",
      "Workplace business communication, email writing, and telephone etiquette",
      "Native Japanese conversational listening sessions",
    ],
    modules: [
      { name: "Intermediate Grammar Mastery", desc: "Subtle nuances, formal connectors, colloquial vs written expressions, and discourse markers." },
      { name: "Kanji & Vocabulary (650+ Characters)", desc: "Abstract concepts, technical terminology, economics, technology, and health." },
      { name: "Newspaper & Article Reading", desc: "Short essays, news summaries, and reading comprehension under time pressure." },
      { name: "Workplace Simulation", desc: "Interview roleplays, giving presentations, and polite workplace interaction." },
    ],
    learningOutcomes: [
      "Clear the JLPT N3 certification",
      "Qualify for direct entrance into Japanese technical colleges and universities",
      "Communicate fluently in professional Japanese corporate environments",
    ],
  },
  {
    id: "japanese-interview",
    slug: "japanese-interview",
    title: "Japanese Embassy & School Interview Coaching",
    bengaliTitle: "জাপান এম্বাসি ও ল্যাঙ্গুয়েজ স্কুল ইন্টারভিউ প্রস্তুতি",
    badge: "Mock Drill Specialist",
    tagline: "Nyukan Verification Readiness · Jikoshoukai Drills · 100% Viva Simulation",
    targetAudience: "Applicants preparing for Language School interviews, Immigration checks & Embassy calls",
    duration: "3 – 4 Weeks Intensive",
    classesCount: "12 One-on-One & Small Group Mock Drills",
    mockTests: "5 Live Simulated Interview Rounds with Recorded Feedback",
    batchSize: "Max 6 Students per Drill Group",
    fee: "Special Intensive Module (Free for Enrolled Admissions Clients)",
    schedule: "Flexible Day & Evening Slots",
    format: "Face-to-Face Viva Room at Mirpur-10 & Zoom Video Sessions",
    desc: "Conquer the crucial step of your Japan visa journey. We drill you on authentic questions asked by Japanese Language School Principals, Japanese Immigration Bureau (Nyukan) phone verification officers, and the Embassy of Japan in Dhaka.",
    icon: "🎙️",
    subtitle: "Nyukan Verification Readiness · Jikoshoukai Drills · 100% Viva Simulation",
    description: "Conquer the crucial step of your Japan visa journey. We drill you on authentic questions asked by Japanese Language School Principals, Japanese Immigration Bureau (Nyukan) phone verification officers, and the Embassy of Japan in Dhaka.",
    highlights: [
      "Authentic interview simulations with experienced Japan counselors",
      "Body language, bowing etiquette (Ojigi), and Japanese interview room manners",
      "Detailed justification of study plans, sponsor financials, and career goals",
      "Handling unexpected or difficult questions with composure and accurate Japanese",
    ],
    classSchedule: "Flexible Day & Evening Slots",
    batchType: "Face-to-Face Viva Room at Mirpur-10 & Zoom Video Sessions",
    targetOutcome: "Interview Ready & 100% Confidence",
    features: [
      "Authentic interview simulations with experienced Japan counselors",
      "Body language, bowing etiquette (Ojigi), and Japanese interview room manners",
      "Detailed justification of study plans, sponsor financials, and career goals",
      "Handling unexpected or difficult questions with composure and accurate Japanese",
    ],
    modules: [
      { name: "Jikoshoukai & Etiquette", desc: "Room entry, bowing angles, sitting posture, polite greeting (Yoroshiku onegaishimasu)." },
      { name: "Core Motivation & Study Plan", desc: "Why Japan, why this city/school, course choice, and long-term career vision." },
      { name: "Financial Solvency & Sponsor Questions", desc: "Clear explanation of father/mother sponsor income, savings, and tax documentation." },
      { name: "Japanese Language Spot Check", desc: "Spontaneous verbal answers in Japanese testing N5/N4 proficiency on the spot." },
    ],
    learningOutcomes: [
      "Pass school admission interviews with Japanese language school principals",
      "Confidently handle surprise telephone verification calls from Japanese Immigration (Nyukan)",
      "Secure embassy visa clearance with zero hesitation",
    ],
  },
  {
    id: "ielts-academic",
    slug: "ielts-academic",
    title: "IELTS Preparation (Academic & General)",
    bengaliTitle: "আইইএলটিএস প্রস্তুতি (একাডেমিক ও জেনারেল)",
    badge: "Target Band 7.5+",
    tagline: "Cambridge Authentic Curriculum · British Council & IDP Aligned · 12 Mock Tests",
    targetAudience: "Students aspiring for English-medium Japanese university programs and global admissions",
    duration: "2.5 – 3 Months",
    classesCount: "36 Intensive Interactive Sessions",
    mockTests: "12 Full-Length Timed Mock Tests with Personal Band Feedback",
    batchSize: "Max 12–15 Students for Maximum Teacher Attention",
    fee: "Affordable Package with Student Discount",
    schedule: "Morning, Afternoon & Executive Evening Batches",
    format: "In-Person Classroom at Mirpur-10 & Live Interactive Online Zoom",
    desc: "Rigorous modular training covering all four IELTS components (Listening, Reading, Writing Task 1 & 2, and Speaking). Ideal for applicants pursuing English-taught undergraduate and graduate degrees in Japan (such as MEXT scholars, Waseda, Sophia, Kyoto) or other international universities.",
    icon: "🎓",
    subtitle: "Cambridge Authentic Curriculum · British Council & IDP Aligned · 12 Mock Tests",
    description: "Rigorous modular training covering all four IELTS components (Listening, Reading, Writing Task 1 & 2, and Speaking). Ideal for applicants pursuing English-taught undergraduate and graduate degrees in Japan (such as MEXT scholars, Waseda, Sophia, Kyoto) or other international universities.",
    highlights: [
      "Cambridge authentic practice tests (Books 12 to 19) with in-depth solution keys",
      "One-on-one speaking practice with personalized error correction and score band prediction",
      "Specialized Writing Task 1 & Task 2 workshops with line-by-line grammar auditing",
      "12 Full-length computer-delivered and paper-based timed mock examinations",
    ],
    classSchedule: "Morning, Afternoon & Executive Evening Batches",
    batchType: "In-Person Classroom at Mirpur-10 & Live Interactive Online Zoom",
    targetOutcome: "Target Band 7.5+",
    features: [
      "Cambridge authentic practice tests (Books 12 to 19) with in-depth solution keys",
      "One-on-one speaking practice with personalized error correction and score band prediction",
      "Specialized Writing Task 1 & Task 2 workshops with line-by-line grammar auditing",
      "12 Full-length computer-delivered and paper-based timed mock examinations",
    ],
    modules: [
      { name: "Listening Module", desc: "Predicting answers, signpost words, and map labeling techniques." },
      { name: "Reading Module", desc: "Mastering True/False/Not Given, Heading Matching, and Skimming." },
      { name: "Writing Task 1 & 2", desc: "Data charts, academic essays, and lexical resource enhancement." },
      { name: "Speaking Fluency", desc: "Part 1, 2 (Cue Card), and 3 discussions with emphasis on coherence." },
    ],
    learningOutcomes: [
      "Achieve an overall band score of 6.5 to 8.0+ for direct university admission",
      "Overcome exam anxiety through continuous timed simulation and expert reviews",
    ],
  },
  {
    id: "spoken-english",
    slug: "spoken-english",
    title: "Professional Spoken English & Fluency Program",
    bengaliTitle: "প্রফেশনাল স্পোকেন ইংলিশ ও ফ্লুয়েন্সি প্রোগ্রাম",
    badge: "Interview Ready",
    tagline: "Accent Neutralization · Public Speaking · Corporate Fluency",
    targetAudience: "College/university students, job seekers, and prospective visa applicants",
    duration: "2 Months",
    classesCount: "24 Interactive Audio-Visual Sessions",
    mockTests: "4 Comprehensive Viva & Interview Simulations",
    batchSize: "Max 12 Students (High Speaking Time)",
    fee: "Student-Friendly Fee with Installment Facility",
    schedule: "3 Days a Week (Morning & Evening Batches Available)",
    format: "Interactive Speaking Club & Classroom Practice",
    desc: "Transform your English from hesitant to fluent and confident. This course removes fear and shyness, enhances practical vocabulary, polishes pronunciation, and prepares you thoroughly for international visa interviews and workplace presentations.",
    icon: "🗣️",
    subtitle: "Accent Neutralization · Public Speaking · Corporate Fluency",
    description: "Transform your English from hesitant to fluent and confident. This course removes fear and shyness, enhances practical vocabulary, polishes pronunciation, and prepares you thoroughly for international visa interviews and workplace presentations.",
    highlights: [
      "Daily extempore speaking, group discussions, and role-playing drills",
      "Eliminating mother-tongue influence (MTI) with phonetic practice",
      "Real-world communication scenarios: ordering, booking, presenting, and debating",
    ],
    classSchedule: "3 Days a Week (Morning & Evening Batches Available)",
    batchType: "Interactive Speaking Club & Classroom Practice",
    targetOutcome: "Interview Ready",
    features: [
      "Daily extempore speaking, group discussions, and role-playing drills",
      "Eliminating mother-tongue influence (MTI) with phonetic practice",
      "Real-world communication scenarios: ordering, booking, presenting, and debating",
    ],
    modules: [
      { name: "Foundation & Phonics", desc: "Vowel/consonant sounds, word stress, intonation, and rhythm." },
      { name: "Everyday Fluency", desc: "Idiomatic expressions, connectors, asking questions politely." },
      { name: "Interview Simulation", desc: "Answering visa officer questions about funding, course choice, and career intent." },
      { name: "Public Speaking", desc: "Body language, confidence, speech pacing, and engaging an audience." },
    ],
    learningOutcomes: [
      "Speak English spontaneously without translating from Bengali in your head",
      "Face interview officers with composure, clarity, and confidence",
    ],
  },
];

export type Service = {
  id: string;
  slug: string;
  title: string;
  bengaliTitle: string;
  category: "study-abroad" | "language-academy" | "visa-support";
  icon: string;
  tagline: string;
  desc: string;
  bengaliDesc: string;
  features: string[];
  destinationsCovered?: string[];
};

export const services: Service[] = [
  {
    id: "study-in-japan",
    slug: "study-in-japan",
    title: "Study in Japan Admissions & School Placement",
    bengaliTitle: "জাপানের ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয়ে ভর্তি সহায়তা",
    category: "study-abroad",
    icon: "🇯🇵",
    tagline: "Study in JAPAN - Start Your Future Today · 4 Major Intakes (Apr/Jul/Oct/Jan)",
    desc: "Complete admissions processing for prestigious Japanese Language Schools (Nihongo Gakko), Technical Colleges (Senmon Gakko), and Universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka. We match you with accredited schools, arrange interview drills, and fast-track admission certificates.",
    bengaliDesc: "জাপানের সেরা ল্যাঙ্গুয়েজ স্কুল ও বিশ্ববিদ্যালয়ে ভর্তি, ইন্টারভিউ প্রস্তুতি ও শতভাগ নির্ভুল অ্যাপ্লিকেশন প্রসেসিং।",
    features: [
      "Free profile assessment with zero initial file-opening charges",
      "Admissions open for all 4 Japan intakes: April, July, October, and January",
      "Direct representation of accredited schools in Tokyo, Osaka, Kyoto & Fukuoka",
      "Comprehensive guidance on school fees, accommodation, and part-time jobs",
      "Study gap accepted with valid professional or academic explanation",
      "Interview training directly with Japanese language experts",
    ],
    destinationsCovered: ["Japan", "Tokyo", "Osaka", "Kyoto", "Nagoya", "Fukuoka"],
  },
  {
    id: "japanese-language-academy",
    slug: "japanese-language-academy",
    title: "OneTech Japanese Language Academy (N5 / N4 / N3)",
    bengaliTitle: "ওয়ানটেক জাপানিজ ভাষা একাডেমি (N5, N4 ও N3 কোর্স)",
    category: "language-academy",
    icon: "⛩️",
    tagline: "Minna no Nihongo Curriculum · JLPT & NAT-TEST Preparation · Native Audio Studio",
    desc: "State-of-the-art Japanese language classes at our Mirpur-10 facility. Small interactive batches, certified instructors, comprehensive audio-visual listening drills, Kanji flashcards, and regular mock tests preparing you for JLPT and NAT-TEST.",
    bengaliDesc: "জাপানিজ ভাষা N5, N4 ও N3 কোর্সের নির্ভরযোগ্য একাডেমি। অভিজ্ঞ প্রশিক্ষক ও আধুনিক ক্লাসরুম সুবিধা।",
    features: [
      "Minna no Nihongo standardized curriculum (Books 1 & 2)",
      "Interactive audio listening drills with native Japanese cadence",
      "Kanji writing mastery and flashcard memorization workshops",
      "Simulated timed JLPT / NAT-TEST mock examinations with personal feedback",
      "Morning, afternoon, and executive evening batch options",
    ],
  },
  {
    id: "ssw-work-visa",
    slug: "ssw-work-visa",
    title: "SSW (Specified Skilled Worker) & Career Matching in Japan",
    bengaliTitle: "এসএসডব্লিউ (SSW) টেকনিক্যাল ওয়ার্ক ভিসা ও জব প্লেসমেন্ট",
    category: "visa-support",
    icon: "💼",
    tagline: "Tokutei Ginou Visa · Caregiving, Food Service, Hospitality, Construction",
    desc: "Guiding eligible candidates through Japan's Specified Skilled Worker (SSW) program. We assist with Japanese language qualification (N4+), SSW skills test preparation, employer interviews, and Ministry of Justice visa application.",
    bengaliDesc: "জাপানে নিশ্চিত কর্মসংস্থানের জন্য এসএসডব্লিউ (SSW) পরীক্ষা প্রস্তুতি, ইন্টারভিউ ও ভিসা প্রসেসিং।",
    features: [
      "Japanese N4 language exam coaching tailored for SSW requirements",
      "Skill assessment test training in Caregiving, Food Service, and Hospitality",
      "Direct employer interview preparation and resume/CV translation into Japanese",
      "Support with Certificate of Eligibility (COE) and Japanese work visa stamping",
    ],
  },
  {
    id: "coe-visa-processing",
    slug: "coe-visa-processing",
    title: "Certificate of Eligibility (COE) & Embassy Visa Processing",
    bengaliTitle: "সিওই (COE) প্রসেসিং ও এম্বাসি ভিসা ডকুমেন্টেশন",
    category: "visa-support",
    icon: "🛡️",
    tagline: "99%+ Approval Track Record · Nyukan Strict Compliance · Zero Hidden Charges",
    desc: "Our hallmark service. We audit every financial paper, sponsor tax records, bank solvency statements, and relationship certificates to meet the rigorous benchmarks of the Japanese Immigration Bureau (Nyukan) and the Embassy of Japan.",
    bengaliDesc: "জাপান ইমিগ্রেশনের নিয়ম মেনে শতভাগ নিখুঁত ডকুমেন্টস প্রস্তুত করে দ্রুততম সময়ে সিওই (COE) ও ভিসা নিশ্চিত করা।",
    features: [
      "Meticulous audit of sponsor bank statements and tax return documents",
      "Authentic translation and notarization of academic and birth certificates",
      "Statement of Purpose (SOP / Reason for Study) drafting in Japanese format",
      "Intensive mock calls preparing candidates for Nyukan telephone verification",
    ],
  },
  {
    id: "ielts-academy",
    slug: "ielts-academy",
    title: "IELTS Preparation (Academic & General)",
    bengaliTitle: "আইইএলটিএস একাডেমি (ব্যান্ড ৭.৫+ টার্গেট)",
    category: "language-academy",
    icon: "🎓",
    tagline: "Cambridge Authentic Curriculum · Band 7.5+ Target · 12 Mock Tests",
    desc: "Preparation for students pursuing English-medium degree programs in Japan (e.g. MEXT scholarship, Waseda, Sophia, Kyoto) or universities across the UK, Australia, Canada, and Europe.",
    bengaliDesc: "আন্তর্জাতিক বিশ্ববিদ্যালয়ে ভর্তির জন্য কেমব্রিজ অথেনটিক ম্যাটেরিয়ালসে অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে আইইএলটিএস প্রশিক্ষণ।",
    features: [
      "Cambridge authentic practice tests with detailed solution analysis",
      "Regular one-on-one speaking mock sessions with instant score prediction",
      "Intensive writing Task 1 & Task 2 structure masterclasses",
      "Small batches of max 12–15 students at our Mirpur-10 center",
    ],
  },
  {
    id: "pre-departure-tokyo",
    slug: "pre-departure-tokyo",
    title: "Pre-Departure Briefing & Tokyo Arrival Support",
    bengaliTitle: "প্রি-ডিপার্চার ও জাপানে পৌঁছানোর পর সার্বিক সহযোগিতা",
    category: "visa-support",
    icon: "✈️",
    tagline: "Airport Pickup · Safe Accommodation · Arubaito (Part-Time Job) Guidance",
    desc: "Your journey doesn't end with a visa. Through our Tokyo student welfare liaison, we assist you upon landing in Japan with airport reception, resident registration (Juminhyo), Japanese bank account opening, and finding initial part-time work (Arubaito).",
    bengaliDesc: "জাপানে পৌঁছানোর পর এয়ারপোর্ট পিকআপ, সিটি হল রেজিস্ট্রেশন, ব্যাংক একাউন্ট ও পার্ট-টাইম কাজ পেতে আমাদের সার্বক্ষণিক সহায়তা।",
    features: [
      "Pre-departure packing, Japanese customs clearance, and quarantine checklist",
      "Verified student dormitory and shared apartment booking in Tokyo/Osaka",
      "Guidance on Japanese mobile SIM cards and commuter train passes (Suica/Pasmo)",
      "Part-time job (Arubaito) interview orientation complying with 28 hrs/week law",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Assessment",
    bengaliTitle: "ফ্রি প্রোফাইল এসেসমেন্ট",
    desc: "Visit our Mirpur-10 Principal Office (Gemcon EL Mercado, Lift-09) or connect on WhatsApp (01345-918515). Direct discussion with an expert Japan counselor to review your academic background, language goals, and budget.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Japanese Language Course (N5/N4)",
    bengaliTitle: "জাপানিজ ভাষা শিক্ষা শুরু",
    desc: "Enroll in our specialized JLPT/NAT-TEST N5/N4 batches. Build strong conversational fluency, master Kanji, and earn the required language certificate for your Japan school admission.",
    icon: "⛩️",
  },
  {
    step: "03",
    title: "School Selection & Interview Drill",
    bengaliTitle: "স্কুল নির্বাচন ও ইন্টারভিউ প্রস্তুতি",
    desc: "We match your profile with premier Japanese Language Schools in Tokyo, Osaka, Kyoto, or Fukuoka and conduct mock interview drills simulating the actual school interview.",
    icon: "🎯",
  },
  {
    step: "04",
    title: "COE Approval & Flying to Japan",
    bengaliTitle: "সিওই (COE) ও ভিসা নিয়ে জাপানে যাত্রা",
    desc: "Flawless file submission to the Japanese Immigration Bureau (Nyukan), prompt Certificate of Eligibility (COE) issuance, embassy visa stamping, and pre-departure briefing.",
    icon: "✈️",
  },
];

export const testimonials = [
  {
    name: "Mohammad Tanvir Hasan",
    destination: "Tokyo, Japan (Akamonkai Japanese Language School)",
    program: "Japanese Language & University Pathway",
    quote:
      "OneTech Education made my Japan dream come true! I enrolled in their N5 batch at Mirpur-10, cleared NAT-TEST with flying colors, and received my COE in just a few months. Their guidance on sponsor documents is 100% genuine.",
    bengaliQuote:
      "ওয়ানটেক এডুকেশনের আন্তরিক সহযোগিতা ও জাপানিজ ভাষা ক্লাসের মান সত্যিই অসাধারণ। মিরপুর অফিসে N5 শেষ করে পরীক্ষা পাস করি এবং নির্বিঘ্নে টোকিওর ভিসা পেয়েছি!",
    rating: 5,
    year: "2026",
    badge: "🇯🇵 Japan Student Visa & COE",
  },
  {
    name: "Sumiya Akter",
    destination: "Osaka, Japan (Kansai College of Business & Languages)",
    program: "Japanese Language & Business Track",
    quote:
      "The Sensei at OneTech Japanese Academy is incredible. The interview practice sessions prepared me so well that my school principal interview took only 5 minutes. Now I am studying in Osaka with 28 hrs/week legal part-time work!",
    bengaliQuote:
      "ইন্টারভিউ ক্লাসে যেভাবে প্র্যাকটিস করানো হয়েছিল, ঠিক সেভাবেই জাপানিজ স্কুলের ইন্টারভিউ হয়েছে। ওয়ানটেকের পুরো টিমকে অসংখ্য ধন্যবাদ।",
    rating: 5,
    year: "2026",
    badge: "🇯🇵 Japan COE Success",
  },
  {
    name: "Mehedi Hasan",
    destination: "Nagoya, Japan (SSW Technical Work Track)",
    program: "Specified Skilled Worker (Caregiving)",
    quote:
      "I completed my Japanese N4 course at OneTech Education and passed the SSW skills evaluation. OneTech arranged my employer interview and managed the visa process smoothly without any hidden costs.",
    bengaliQuote:
      "এসএসডব্লিউ ভিসার জন্য ওয়ানটেক এডুকেশনের গাইডলাইন অতুলনীয়। N4 ভাষা শিক্ষা ও কোম্পানির ইন্টারভিউ খুব সুন্দরভাবে সম্পন্ন হয়েছে।",
    rating: 5,
    year: "2026",
    badge: "💼 Japan SSW Work Visa",
  },
  {
    name: "Kamrul Islam",
    destination: "Fukuoka, Japan (Fukuoka Foreign Language College)",
    program: "Japanese Language & IT Vocational Track",
    quote:
      "Had a 4-year study gap after graduation, but the counselors at OneTech Education drafted my statement of purpose and work justifications perfectly. My COE was approved on the first submission!",
    bengaliQuote:
      "স্টাডি গ্যাপ থাকা সত্ত্বেও ওয়ানটেক এডুকেশনের অভিজ্ঞ কাউন্সেলররা নিখুঁতভাবে ডকুমেন্টস প্রস্তুত করেছিলেন, যার ফলে প্রথমবারেই আমার সিওই চলে আসে।",
    rating: 5,
    year: "2026",
    badge: "🇯🇵 Japan Visa Granted",
  },
];

export const faqs = [
  {
    q: "Why is OneTech Education known as the premier Japan consultancy?",
    a: "OneTech Education specializes specifically in Japan higher education and career pathways. We have in-house certified Japanese language Senseis, state-of-the-art multimedia classrooms in Mirpur-10, direct relationships with Japanese Language Schools and Universities across Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka, and an unmatched 99%+ COE approval record.",
  },
  {
    q: "What are the major admission intakes for studying in Japan?",
    a: "Japan has 4 major intakes each year for Japanese Language Schools:\n1. April Intake (2-year program — largest intake)\n2. July Intake (1 year 9 months program)\n3. October Intake (1.5-year program — second major intake)\n4. January Intake (1 year 3 months program).\nApplications open 5 to 6 months prior to each intake.",
  },
  {
    q: "Is Japanese Language proficiency (JLPT/NAT N5) mandatory for a Japan student visa?",
    a: "Yes. The Japanese Immigration Bureau (Nyukan) requires at least 150 hours of certified Japanese language study or passing the JLPT N5 / NAT-TEST 5Q exam. At OneTech Education, we offer complete 2.5-month N5 courses that prepare you to pass easily before your application is submitted.",
  },
  {
    q: "Can international students work part-time in Japan?",
    a: "Yes! International students with a valid Student Visa receive a 'Permission to Engage in Activity other than that Permitted under the Status of Residence' (Shikakugai Katsudo Kyoka), allowing you to legally work up to 28 hours per week during school semesters and up to 40 hours per week during long vacations. The hourly rate ranges from ¥1,100 to ¥1,400 per hour, which easily covers living costs and tuition savings.",
  },
  {
    q: "Where is OneTech Education's office located in Dhaka?",
    a: "Our principal head office and Japanese language training academy are located at Gemcon EL Mercado, Lift-09 (Shop 114), Senpara Parbata, Mirpur-10, Dhaka-1216, Bangladesh (just a 2-minute walk from the Mirpur-10 Metro Rail Station).",
  },
  {
    q: "What is the SSW (Specified Skilled Worker) visa for Japan?",
    a: "The SSW (Tokutei Ginou) is a Japanese government employment visa allowing foreign nationals to work in 12 designated industries such as Caregiving (Kaigo), Food Service (Gaishoku), Construction, Agriculture, Hospitality, and Manufacturing. Requirements include passing the Japanese Language Test (JLPT N4 or JFT-Basic) and the industry skill evaluation test.",
  },
  {
    q: "How can I book a free counseling appointment with OneTech Education?",
    a: "You can visit our Mirpur-10 office directly during business hours (Saturday – Thursday: 10:00 AM – 7:00 PM), call our hotlines at 01345-918515 / 01345-918516, or click the WhatsApp button on our website for instant consultation.",
  },
  {
    q: "Can students with study gaps or low CGPA apply for Japan?",
    a: "Yes. Japan Language Schools and Immigration accept applicants with study gaps (5+ years or more) provided the gap can be substantiated with genuine employment experience, professional training, or personal context. Our senior counselors specialize in bulletproof gap documentation.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "japan-april-intake",
    title: "Japan Major Intakes — Japanese Language Schools & Universities",
    badge: "Official Banner Destination",
    date: "April & October Major Intakes Active",
    destination: "Japan 🇯🇵",
    desc: "Admissions open for top Japanese language schools in Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka. 28 hours/week legal part-time work, affordable initial tuition, and fast COE processing.",
    highlights: [
      "April & October Major 2-Year & 1.5-Year tracks",
      "Legal 28 hrs/week work rights (¥1,100–¥1,400/hr)",
      "99%+ COE approval record with Nyukan compliance",
      "Free profile assessment at Mirpur-10 office",
    ],
  },
  {
    id: "japanese-n5-batch",
    title: "Japanese Language Course N5 — New Enrollment Batches",
    badge: "Featured on Banner",
    date: "New Batches Starting Every Month",
    destination: "Language Academy (Mirpur-10)",
    desc: "Enroll in our comprehensive JLPT N5 / NAT-TEST 5Q foundation batch. Minna no Nihongo Book 1, Hiragana/Katakana, 100+ Kanji, and native audio listening drills.",
    highlights: [
      "Minna no Nihongo Lessons 1 to 25 complete syllabus",
      "Interactive audio studio with native listening practice",
      "Morning, afternoon & evening batch timings",
      "School interview drill and Jikoshoukai preparation",
    ],
  },
  {
    id: "japanese-n4-batch",
    title: "Japanese Language Course N4 — Accelerated Elementary Level",
    badge: "SSW & Admission Ready",
    date: "Weekday & Weekend Options",
    destination: "Language Academy",
    desc: "Take your Japanese to the next level with Minna no Nihongo Book 2 (Lessons 26–50), 300+ Kanji, and required proficiency for SSW work visas and direct Senmon Gakko entry.",
    highlights: [
      "300+ Kanji and compound vocabulary words",
      "Essential qualification for SSW Technical Visas",
      "Keigo and workplace conversational simulations",
      "Mock JLPT N4 / NAT-TEST 4Q examinations",
    ],
  },
  {
    id: "ssw-work-program",
    title: "SSW (Specified Skilled Worker) — Japan Career Placement",
    badge: "Career & Work Track",
    date: "Ongoing Employer Matching",
    destination: "Japan Career Desk",
    desc: "Opportunities in Caregiving (Kaigo), Food Service, Agriculture, and Hospitality. Japanese N4 language prep, skills test coaching, and direct Japanese employer interviews.",
    highlights: [
      "Direct employment contract with Japanese companies",
      "Standard Japanese salaries with full benefits",
      "Skill test & Japanese language coaching",
      "COE & Work Visa processing support",
    ],
  },
  {
    id: "global-uk-malaysia",
    title: "Global Higher Education Pathways — UK, Australia & Malaysia",
    badge: "Global Partner Network",
    date: "Upcoming Rolling Intakes",
    destination: "Global Destinations",
    desc: "Explore 1-year fast Masters in the UK with 2-year PSW, or affordable dual UK/Australian degrees in Malaysia with smooth documentation and visa guidance.",
    highlights: [
      "UK 1-Year Masters savings & 2-Year PSW",
      "Malaysia affordable dual degrees ($3,500/yr)",
      "Scholarships & entrance bursaries available",
      "With or without IELTS pathway options",
    ],
  },
  {
    id: "ielts-prep-batch",
    title: "IELTS Academic & Spoken English Fluency Batch",
    badge: "Target Band 7.5+",
    date: "Weekend & Evening Slots",
    destination: "English Wing",
    desc: "Master all 4 IELTS modules (Listening, Reading, Writing, Speaking) with Cambridge authentic tests and one-on-one speaking feedback at our Mirpur-10 center.",
    highlights: [
      "Cambridge Books 12 to 19 practice modules",
      "12 Full-length timed mock examinations",
      "Small batches of max 12–15 students",
      "Accent polish & interview readiness",
    ],
  },
];