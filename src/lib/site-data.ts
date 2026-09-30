/**
 * MILESTONE BEANIBAZAR (MICU) — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/milestonebeanibazar/
 *  - Official Brand Assets (C:\Users\Majed\Downloads\New asset):
 *      * Logo: loogo.jpg (Circular emblem with gold rim, "IELTS", "IELTS LIFE SKILLS", "SPOKEN ENGLISH",
 *              stylized 'm' logo, "milestone", "GET READY FOR THE WORLD", "MICU", "OFFICIAL PAGE")
 *      * Landmark Photo: 735636706_3906890809619123_1525631474750360421_n.jpg
 *              (Massive student graduation ceremony in Beanibazar with giant 3D golden "MILESTONE" sculpture,
 *               100+ graduates holding certificates, CEO Saleh Ahmed Shaheen & faculty)
 *  - Official Facebook Video Embeds:
 *      * Video 1 (1629193922113777): IELTS Mock Test Lab & Classroom Session
 *      * Video 2 (3539953832826801): Spoken English & Fluency Session (Reels)
 *      * Video 3 (1088602820426148): Student Achievement & Cash Prize Award Ceremony
 *  - Headquarters / Main Campus:
 *      Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet, Bangladesh.
 *  - Alternate / Annex Campus:
 *      Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet, Bangladesh.
 *  - Hotlines / Support:
 *      01781-545490 · 01706-452949 (+880 1781-545490 / +880 1706-452949)
 *  - WhatsApp: +880 1781-545490
 *  - Official Email: siddikurr806@gmail.com / info@milestonebeanibazar.com
 *  - Leadership:
 *      * CEO & Senior Instructor: Saleh Ahmed Shaheen
 *      * Chief Instructor (IELTS & Writing Specialist): Ahbabur Rahman Tahmid
 *  - Core Specialization:
 *      * IELTS Preparation (Academic & General Training)
 *      * Computer-Delivered (CD) IELTS Mock Test Lab
 *      * IELTS Life Skills (A1 & B1)
 *      * Cash Prize Incentives for High Band Scorers (Band 7.0, 7.5, 8.0)
 *      * Spoken English & Speakers' Mania Fluency Club
 *      * Kids English & Kids Spoken English Programs
 *      * Study Abroad & Visa Advisory (UK, Canada, USA, Australia, Europe)
 *      * IDP Education Authorized Test Registration & Resource Support
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
  name: "Milestone Beanibazar",
  shortName: "Milestone",
  altName: "Milestone IELTS & Spoken English / MICU",
  acronym: "MICU",
  legalName: "Milestone International Consultancy & University Admissions (MICU) Beanibazar",
  nativeName: "মাইলস্টোন বিয়ানীবাজার",
  slogan: "GET READY FOR THE WORLD",
  tagline: "GET READY FOR THE WORLD",
  taglineBangla: "বিশ্বজয়ের প্রস্তুতি হোক বিয়ানীবাজারের সেরা বিদ্যাপীঠে",
  motto: "IELTS · Spoken English · Kids English · Study Abroad (UK, Canada, USA, Australia, Europe)",
  secondaryMotto: "Computer-Delivered IELTS Lab · Cash Prizes for Band 7+ · IDP Authorized Support",
  bengaliHeadline: "আইইএলটিএস, স্পোকেন ইংলিশ ও বিদেশে উচ্চশিক্ষার বিশ্বস্ত প্রতিষ্ঠান!",
  bengaliSubheadline:
    "মাইলস্টোন বিয়ানীবাজার (আজির মার্কেট, ২য় তলা, ১নং গলি, ইনার কলেজ রোড, বিয়ানীবাজার, সিলেট): কম্পিউটার-ডেলিভার্ড আইইএলটিএস ল্যাব, স্পোকেন ক্লাব ও ইউকে, কানাডা, আমেরিকা, অস্ট্রেলিয়া এবং ইউরোপে বিশ্বমানের স্টাডি অ্যাব্রড কনসালটেন্সি।",
  philosophy: "ACADEMIC HONESTY · RESULT-DRIVEN MENTORSHIP · TRANSPARENT VISA COUNSELING · CELEBRATING REAL ACHIEVEMENTS",
  bio: "GET READY FOR THE WORLD. Leading IELTS Preparation, Spoken English Fluency & Study Abroad Advisory in Beanibazar, Sylhet. Equipped with advanced Computer-Delivered (CD) IELTS Labs, dedicated Reading & Writing clinics, and an active IDP Education partnership.",
  category: "IELTS Preparation Academy · Spoken English Studio · Kids English · Study Abroad Advisory",
  origin: "Beanibazar, Sylhet, Bangladesh",
  presence: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet",
  address: {
    line1: "Azir Market (2nd Floor), 1 No. Goli",
    line2: "Inner College Road",
    city: "Beanibazar",
    district: "Sylhet",
    postalCode: "3170",
    country: "Bangladesh",
    full: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet",
    annex: "Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet",
  },
  social: {
    facebook: "https://www.facebook.com/milestonebeanibazar/",
  },
  mapsUrl: "https://maps.google.com/?q=Azir+Market+College+Road+Beanibazar+Sylhet",
  geo: {
    lat: 24.8268,
    lng: 92.1645,
  },
  email: "siddikurr806@gmail.com",
  contactEmail: "siddikurr806@gmail.com",
  careerEmail: "info@milestonebeanibazar.com",
  altEmail: "info@milestonebeanibazar.com",
  emails: ["siddikurr806@gmail.com", "info@milestonebeanibazar.com"],
  phones: ["01781-545490", "01706-452949", "+880 1781-545490", "+880 1706-452949"],
  whatsapp: "+8801781545490",
  whatsappFormatted: "+880 1781-545490",
  secondaryPhone: "01706-452949",
  landline: "01781-545490",
  hours: "Saturday – Thursday: 9:00 AM – 7:30 PM (Friday Open for Mock Tests & English Club)",
  established: "Premier IELTS & Study Abroad Hub in Beanibazar",
  signOff: "Milestone Beanibazar · Get Ready for the World",
  specialOffer: "Free IELTS Diagnostic Mock Test & Cash Rewards for Band 7.0+ Scorers! New Batches Enrolling Now.",

  leadership: [
    {
      name: "Saleh Ahmed Shaheen",
      role: "CEO & Senior Instructor",
      title: "Chief Executive Officer & Academic Mentor",
      bio: "Visionary educational leader spearheading Milestone's mission in Beanibazar. Renowned for strategic guidance, inspiring youth mentorship, and student achievement celebrations.",
      credentials: "CEO, Milestone Beanibazar · Senior Language & IELTS Instructor",
      image: "/assets/milestone-celebration.jpg",
    },
    {
      name: "Ahbabur Rahman Tahmid",
      role: "Chief Instructor",
      title: "Chief Instructor & IELTS Writing Specialist",
      bio: "Highly acclaimed IELTS specialist celebrated by hundreds of successful band 7+ achievers. Master of IELTS Task 1 & Task 2 Writing frameworks and analytical reading techniques.",
      credentials: "Chief Instructor, Milestone Beanibazar · IELTS Master Trainer",
      image: "/assets/milestone-celebration.jpg",
    },
  ],

  offices: {
    headquarters: {
      name: "Milestone Beanibazar Main Campus (Azir Market)",
      address: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet, Bangladesh",
      full: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar-3170, Sylhet, Bangladesh",
      short: "Azir Market, Inner College Road, Beanibazar",
      phone: "01781-545490",
      phones: ["01781-545490", "01706-452949"],
      whatsapp: "+8801781545490",
      hours: "Saturday – Thursday: 9:00 AM – 7:30 PM (Friday for Mocks)",
      mapsUrl: "https://maps.google.com/?q=Azir+Market+College+Road+Beanibazar+Sylhet",
      mapsEmbed: "https://maps.google.com/maps?q=College+Road+Beanibazar+Sylhet&z=16&hl=en&output=embed",
    },
    annex: {
      name: "Milestone Annex / Somobay Market Studio",
      address: "Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet, Bangladesh",
      full: "Somobay Market (2nd Floor), College Road, Beanibazar-3170, Sylhet, Bangladesh",
      short: "Somobay Market, College Road, Beanibazar",
      phone: "01706-452949",
      phones: ["01781-545490", "01706-452949"],
      whatsapp: "+8801781545490",
      hours: "Saturday – Thursday: 10:00 AM – 6:30 PM",
      mapsUrl: "https://maps.google.com/?q=College+Road+Beanibazar+Sylhet",
      mapsEmbed: "https://maps.google.com/maps?q=College+Road+Beanibazar+Sylhet&z=16&hl=en&output=embed",
    },
  },

  branches: [
    {
      name: "Milestone Beanibazar Main Campus",
      city: "Beanibazar, Sylhet",
      address: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet",
      full: "Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar-3170, Sylhet, Bangladesh",
      short: "Azir Market, College Road",
      phone: "01781-545490",
      phones: ["01781-545490", "01706-452949"],
      whatsapp: "+8801781545490",
      hours: "Saturday – Thursday: 9:00 AM – 7:30 PM",
      role: "Central Operations, Computer-Delivered Mock Lab, IELTS & Spoken Batches, Study Abroad Counseling",
      leadPerson: "Saleh Ahmed Shaheen (CEO) & Ahbabur Rahman Tahmid (Chief Instructor)",
      isPrimary: true,
    },
    {
      name: "Milestone Somobay Market Annex",
      city: "Beanibazar, Sylhet",
      address: "Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet",
      full: "Somobay Market (2nd Floor), College Road, Beanibazar, Sylhet",
      short: "Somobay Market, College Road",
      phone: "01706-452949",
      phones: ["01781-545490", "01706-452949"],
      whatsapp: "+8801781545490",
      hours: "Saturday – Thursday: 10:00 AM – 6:30 PM",
      role: "Spoken English Club, Student Counseling & Enrollment Desk",
      leadPerson: "Student Admission & Counseling Desk",
      isPrimary: false,
    },
  ],

  social: {
    facebook: "https://www.facebook.com/milestonebeanibazar/",
    facebookPage: "https://www.facebook.com/milestonebeanibazar/",
    messenger: "https://m.me/milestonebeanibazar",
    whatsapp: "https://wa.me/8801781545490?text=Hello%20Milestone%20Beanibazar,%20I%20would%20like%20to%20know%20about%20your%20courses%20and%20study%20abroad%20services.",
    youtube: "https://www.youtube.com/@milestonebeanibazar",
    instagram: "https://www.instagram.com/milestonebeanibazar",
    facebookVideos: "https://www.facebook.com/milestonebeanibazar/videos",
  },
  featuredReels: [] as any[],
};

/**
 * Verified Facebook Embed Videos provided directly by user
 */
export const embeddedVideos = [
  {
    id: "1629193922113777",
    title: "Housefull Computer-Delivered IELTS Mock Test & Classroom Session",
    type: "video",
    url: "https://www.facebook.com/milestonebeanibazar/videos/1629193922113777/",
    iframeSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmilestonebeanibazar%2Fvideos%2F1629193922113777%2F&show_text=false&width=267&t=0",
    aspect: "9:16",
    badge: "IELTS Mock Lab",
    description: "Real computer-delivered mock test session in progress at Milestone Beanibazar. Students testing in authentic exam conditions under instructor guidance.",
  },
  {
    id: "3539953832826801",
    title: "Speakers' Mania & Spoken English Fluency Club Showcase",
    type: "reel",
    url: "https://www.facebook.com/reel/3539953832826801/",
    iframeSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3539953832826801%2F&show_text=false&width=267&t=0",
    aspect: "9:16",
    badge: "Spoken Fluency",
    description: "Milestone students practicing spontaneous English speeches and dialogue presentations to overcome nervousness and build effortless English fluency.",
  },
  {
    id: "1088602820426148",
    title: "Student Band 7+ Achievement & Cash Prize Award Ceremony",
    type: "video",
    url: "https://www.facebook.com/milestonebeanibazar/videos/1088602820426148/",
    iframeSrc: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmilestonebeanibazar%2Fvideos%2F1088602820426148%2F&show_text=false&width=560&t=0",
    aspect: "16:9",
    badge: "Award Ceremony",
    description: "Grand prize money and certificate distribution ceremony by CEO Saleh Ahmed Shaheen and Chief Instructor Ahbabur Rahman Tahmid honoring high-scoring IELTS achievers.",
  },
];

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Courses & Academy",
    to: "/services",
    children: [
      {
        label: "IELTS Academic Preparation",
        to: "/services",
        badge: "Most Popular",
      },
      {
        label: "IELTS General Training",
        to: "/services",
      },
      {
        label: "Computer-Delivered (CD) IELTS Lab",
        to: "/services",
        badge: "IDP Aligned",
      },
      {
        label: "Spoken English & Fluency Program",
        to: "/services",
        badge: "Speakers Mania",
      },
      {
        label: "Kids English & Young Learners",
        to: "/services",
        badge: "Specialized",
      },
      {
        label: "IELTS Life Skills (A1 & B1)",
        to: "/services",
      },
      {
        label: "Reading & Writing Masterclass",
        to: "/services",
      },
    ],
  },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      {
        label: "Study in United Kingdom (UK)",
        to: "/study-in-$country",
        params: { country: "uk" },
        badge: "Top Choice",
      },
      {
        label: "Study in Canada",
        to: "/study-in-$country",
        params: { country: "canada" },
        badge: "PR Pathways",
      },
      {
        label: "Study in USA",
        to: "/study-in-$country",
        params: { country: "usa" },
        badge: "High Scholarships",
      },
      {
        label: "Study in Australia",
        to: "/study-in-$country",
        params: { country: "australia" },
        badge: "Post-Study Work",
      },
      {
        label: "Study in Europe (Cyprus & Schengen)",
        to: "/study-in-$country",
        params: { country: "europe" },
        badge: "Affordable",
      },
    ],
  },
  {
    label: "Batches & Offers",
    to: "/offers",
  },
  {
    label: "About Milestone",
    to: "/about",
  },
  {
    label: "Contact & Branches",
    to: "/contact",
  },
];

export const academyCourses = [
  {
    id: "ielts-academic",
    title: "IELTS Academic Complete Masterclass",
    slug: "ielts-academic",
    category: "IELTS Preparation",
    badge: "Flagship Program",
    targetScore: "Band 7.0 – 8.5",
    duration: "3 Months (36 Sessions + Unlimited Mock Tests)",
    classFormat: "In-Person Classroom + Computer Lab Mock Practice",
    level: "Intermediate to Advanced",
    summary:
      "Comprehensive, rigorous preparation covering all 4 modules (Listening, Reading, Writing, Speaking) designed specifically for university admissions in the UK, Canada, USA, Australia, and Europe.",
    keyFeatures: [
      "Specialized Writing Clinics led by Chief Instructor Ahbabur Rahman Tahmid",
      "Full access to Beanibazar's premier Computer-Delivered (CD) IELTS Mock Test Lab",
      "Cambridge 11–19 Official Past Exam paper solutions and trend analysis",
      "One-on-one speaking interviews with recorded acoustic feedback",
      "Cash Prize Incentive: Financial rewards for students achieving Band 7.0 and above",
      "Official IDP Education test registration desk directly at Milestone",
    ],
    audience: "HSC, Degree, Honours, and Masters graduates aiming for global university admissions.",
    intakeStatus: "New Batches Starting Every 1st & 15th of the Month (Morning, Afternoon & Evening)",
    feeRange: "Flexible Monthly & Full-Course Installment Plans Available",
  },
  {
    id: "ielts-cd-mock-lab",
    title: "Computer-Delivered (CD) IELTS Mock Test & Practice",
    slug: "cd-ielts-lab",
    category: "IELTS Preparation",
    badge: "Official Lab Experience",
    targetScore: "Test Day Simulation",
    duration: "1 Month Crash / Individual Mock Packages (5, 10, 15 Mocks)",
    classFormat: "Dedicated High-Speed PC Terminals with Noise-Cancelling Headphones",
    level: "All IELTS Candidates",
    summary:
      "Simulate the actual IDP / British Council computer-delivered test environment right here in Beanibazar. Instant computerized scoring for Listening and Reading, with detailed teacher evaluation for Writing and Speaking.",
    keyFeatures: [
      "Authentic screen interface identical to the official test software",
      "High-speed typing practice and on-screen highlighting shortcuts",
      "Immediate automated diagnostic report pointing out weaker question types",
      "In-depth one-on-one essay review by senior instructors within 24 hours",
      "Housefull weekend mock test sessions with prize money for highest scorers",
    ],
    audience: "Students registered or planning to take the Computer-Delivered IELTS exam.",
    intakeStatus: "Daily Lab Slots Available (Booking Required 24 Hours in Advance)",
    feeRange: "Per Mock or Bundled Mock Packages",
  },
  {
    id: "spoken-english",
    title: "Spoken English & Fluency Development Program",
    slug: "spoken-english",
    category: "English Communication",
    badge: "Speakers' Mania",
    targetScore: "Natural Fluency & Confidence",
    duration: "2.5 Months (30 Interactive Sessions)",
    classFormat: "Interactive Conversation Workshops & Stage Presentations",
    level: "Beginner to Upper-Intermediate",
    summary:
      "Break the barrier of hesitation, fear, and shyness. Our proprietary immersion method turns passive English knowledge into active, spontaneous speech suitable for interviews, IELTS speaking, and corporate life.",
    keyFeatures: [
      "Weekly 'Speakers' Mania' stage speech and spontaneous debate contests",
      "British & American phonetic training, intonation, and rhythm correction",
      "Daily situational role-plays (airports, universities, interviews, social settings)",
      "Grammar without dry rules: intuitive sentence-building exercises",
      "Vocabulary booster sessions focusing on natural collocations and idioms",
    ],
    audience: "College students, job seekers, visa interviewees, and anyone eager to speak English without hesitation.",
    intakeStatus: "Morning & Evening Batches Open Now",
    feeRange: "Affordable Community Fee Structure",
  },
  {
    id: "kids-english",
    title: "Milestone Junior: Kids English & Phonics Studio",
    slug: "kids-english",
    category: "Young Learners",
    badge: "Ages 6 to 14",
    targetScore: "Accent, Phonics & Early Fluency",
    duration: "3 Months Foundation (Weekend & After-School Batches)",
    classFormat: "Activity-Based Visual & Auditory Learning",
    level: "Primary & Junior High Students",
    summary:
      "Cultivating fearless communication, impeccable pronunciation, and a lifelong love for the English language from an early age through interactive storytelling, audio-visual phonics, and playful speech games.",
    keyFeatures: [
      "International synthetic phonics for authentic pronunciation and spelling accuracy",
      "Interactive story-reading and dramatic dialogue acting",
      "Creative writing drills: diary entries, descriptive paragraphs, and picture stories",
      "Confidence-boosting show-and-tell stage presentations",
      "Safe, caring, and stimulating classroom environment in Beanibazar",
    ],
    audience: "School children from Class 1 to Class 8 looking to excel in English communication.",
    intakeStatus: "Friday & Saturday Weekend Batches Available",
    feeRange: "Special Family & Sibling Discounts",
  },
  {
    id: "ielts-life-skills",
    title: "IELTS Life Skills (A1 & B1) for UK Visa & Immigration",
    slug: "ielts-life-skills",
    category: "Visa Specific",
    badge: "UKVI Approved Format",
    targetScore: "Pass Guaranteed Guidance",
    duration: "1 Month Fast-Track Intensive",
    classFormat: "Pair Practice & Examiner-Style Interview Simulation",
    level: "Basic to Pre-Intermediate",
    summary:
      "Designed specifically for applicants requiring IELTS Life Skills A1 for UK Spouse / Partner visas or B1 for Settlement / Citizenship. Focuses solely on speaking and listening face-to-face tasks.",
    keyFeatures: [
      "Exact UKVI exam topic drills: personal info, hobbies, daily routines, travel, work",
      "Paired conversational interaction mirroring the official test structure",
      "Auditory question-answering training with native British accent audios",
      "High pass rate with personalized coaching for homemakers and adult learners",
    ],
    audience: "Candidates applying for UK spouse, family settlement, or indefinite leave to remain.",
    intakeStatus: "Flexible Timing & Women-Friendly Afternoon Batches",
    feeRange: "Crash Course Package",
  },
];

export const destinationsData = [
  {
    id: "uk",
    country: "United Kingdom",
    name: "United Kingdom",
    region: "Europe",
    slug: "uk",
    flag: "🇬🇧",
    heroImage: "/assets/milestone-celebration.jpg",
    headline: "Study in the UK — Premier Universities & 2-Year Post-Study Work Visa (PSW)",
    tagline: "Fast CAS Issuance · High Visa Success · Spouse Allowed in Select Programs",
    pswv: "2 Years PSW",
    popularCourses: ["Business & Management", "Computer Science & IT", "Public Health & Nursing", "Data Analytics", "Law"],
    popularFields: ["Business & Management", "Computer Science & IT", "Public Health & Nursing", "Data Analytics", "Law"],
    averageTuition: "£11,000 – £17,500 / year",
    avgTuition: "£11,000 – £17,500 / yr",
    livingCost: "£9,207 – £12,006 / year (Outside / Inside London)",
    avgLiving: "£9,207 – £12,006 / yr",
    ieltsRequirement: "IELTS Academic 6.0 – 6.5 (5.5 in each band); Foundation courses from 5.0",
    intakes: ["September / October (Major)", "January / February (Secondary)", "May (Selected)"],
    workRights: "20 hrs/week during term, 40 hrs/week during holidays + 2 Years PSW",
    scholarships: "Up to £5,000 Merit Grants",
    withoutIelts: true,
    description:
      "The UK remains the top destination for Beanibazar and Sylhet students. Milestone provides direct university representation, swift offer letter turnaround, CAS support, and foolproof visa file compilation.",
    intro:
      "The premier choice for Sylhet students. Milestone secures direct CAS with 1-Year Master's and 2-Year Graduate Route PSW, with MOI waiver options.",
    keyBenefits: [
      "1-Year Master's degrees save both tuition and living expenses",
      "2-Year Graduate Route (PSW) work permit upon degree completion",
      "Generous merit scholarships up to £3,000 – £5,000 available",
      "Spouse visa allowed for research and postgraduate doctoral programs",
    ],
  },
  {
    id: "canada",
    country: "Canada",
    name: "Canada",
    region: "North America",
    slug: "canada",
    flag: "🇨🇦",
    heroImage: "/assets/milestone-celebration.jpg",
    headline: "Study in Canada — Top Designated Learning Institutions (DLI) & PR Pathways",
    tagline: "SDS & Non-SDS Streams · Up to 3 Years PGWP · High Standard of Living",
    pswv: "Up to 3 Years PGWP",
    popularCourses: ["Information Technology", "Business & Supply Chain", "Healthcare & Nursing", "Engineering", "Hospitality"],
    popularFields: ["Information Technology", "Business & Supply Chain", "Healthcare & Nursing", "Engineering", "Hospitality"],
    averageTuition: "CAD $14,000 – $24,000 / year",
    avgTuition: "CAD $14,000 – $24,000 / yr",
    livingCost: "CAD $20,635 / year (GIC Requirement)",
    avgLiving: "CAD $20,635 / yr (GIC)",
    ieltsRequirement: "IELTS Academic 6.0 overall (no band less than 6.0 for SDS stream)",
    intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
    workRights: "20–24 hrs/week part-time + Up to 3 Years Post-Graduation Work Permit (PGWP)",
    scholarships: "Entrance & Academic Awards",
    withoutIelts: false,
    description:
      "Canada provides exceptional long-term career growth and permanent residency pathways for ambitious students. Milestone's counselors guide you through DLI selection, GIC processing, and PAL documentation.",
    intro:
      "World-class colleges and universities offering up to 3 years PGWP and long-term PR pathways through Express Entry & PNP.",
    keyBenefits: [
      "Globally recognized degrees and diplomas from public institutions",
      "Post-Graduation Work Permit (PGWP) lasting up to 3 years",
      "Express Entry and Provincial Nominee Programs (PNP) favoring Canadian graduates",
      "High minimum wage allowing students to support living expenses",
    ],
  },
  {
    id: "usa",
    country: "United States of America",
    name: "United States",
    region: "North America",
    slug: "usa",
    flag: "🇺🇸",
    heroImage: "/assets/milestone-celebration.jpg",
    headline: "Study in the USA — World-Class Universities & 3-Year STEM OPT Work Rights",
    tagline: "High Scholarship Potential · F-1 Visa Mock Interviews · Spring & Fall Intakes",
    pswv: "12–36 Mos OPT",
    popularCourses: ["STEM Programs", "Computer Science & AI", "Business Administration (MBA)", "Biotechnology", "Finance"],
    popularFields: ["STEM Programs", "Computer Science & AI", "Business Administration (MBA)", "Biotechnology", "Finance"],
    averageTuition: "$14,000 – $28,000 / year (After Scholarships)",
    avgTuition: "$14,000 – $28,000 / yr",
    livingCost: "$10,000 – $15,000 / year",
    avgLiving: "$10,000 – $15,000 / yr",
    ieltsRequirement: "IELTS 6.0 – 7.0 (Duolingo / TOEFL also accepted by many institutions)",
    intakes: ["Fall (August/September)", "Spring (January)", "Summer (Selected)"],
    workRights: "20 hrs/week on-campus + 12–36 Months OPT (Optional Practical Training)",
    scholarships: "Up to 50%+ Tuition Grants",
    withoutIelts: true,
    description:
      "America provides unmatched research facilities, prestigious degrees, and vast scholarship opportunities. Milestone conducts specialized F-1 visa interview training to help students answer with confidence.",
    intro:
      "Prestigious degrees, vast research funds, 3-Year STEM OPT, and intensive one-on-one F-1 visa credibility interview preparation.",
    keyBenefits: [
      "Up to 3-Year STEM OPT extension allowing lucrative employment in the US",
      "Significant merit-based scholarships and assistantships available",
      "World's largest job market for technology, engineering, and business graduates",
      "Credit transfer and university exchange opportunities",
    ],
  },
  {
    id: "australia",
    country: "Australia",
    name: "Australia",
    region: "Oceania",
    slug: "australia",
    flag: "🇦🇺",
    heroImage: "/assets/milestone-celebration.jpg",
    headline: "Study in Australia — World Top 100 Universities & High Minimum Wage",
    tagline: "CRICOS Approved · Genuine Student (GS) Support · Extended Post-Study Work",
    pswv: "2 to 4 Years PSW",
    popularCourses: ["Accounting & Finance", "Information Technology", "Nursing & Public Health", "Civil Engineering", "Cybersecurity"],
    popularFields: ["Accounting & Finance", "Information Technology", "Nursing & Public Health", "Civil Engineering", "Cybersecurity"],
    averageTuition: "AUD $18,000 – $32,000 / year",
    avgTuition: "AUD $18,000 – $32,000 / yr",
    livingCost: "AUD $29,710 / year",
    avgLiving: "AUD $29,710 / yr",
    ieltsRequirement: "IELTS Academic 6.0 – 6.5 (Minimum 6.0 in each band)",
    intakes: ["Semester 1 (February)", "Semester 2 (July)", "Selected November Intakes"],
    workRights: "48 hrs per fortnight during semester + 2 to 4 Years Post-Study Work Rights",
    scholarships: "Up to 25% Merit Awards",
    withoutIelts: false,
    description:
      "Australia is famed for its high quality of life, multicultural environment, and post-study opportunities in regional areas. Milestone assists in meeting the Genuine Student (GS) criteria and GTE documentation.",
    intro:
      "Top Group of Eight universities, exceptional minimum wage, post-study work rights up to 4+ years, and spouse work rights.",
    keyBenefits: [
      "High minimum wage rate enabling students to comfortably manage expenses",
      "Additional post-study work years for studying in regional campuses",
      "Transparent skill assessment pathways for high-demand occupations",
      "World-leading universities recognized across the globe",
    ],
  },
  {
    id: "europe",
    country: "Europe (Cyprus, Malta & Schengen)",
    name: "Europe",
    region: "Europe",
    slug: "europe",
    flag: "🇪🇺",
    heroImage: "/assets/milestone-celebration.jpg",
    headline: "Study in Europe — Affordable Tuition & Pathway to the Schengen Zone",
    tagline: "Cyprus, Malta, Sweden, Finland & Germany · Flexible Admission Criteria",
    pswv: "Part-time & Schengen",
    popularCourses: ["Hotel & Tourism Management", "Business Studies", "IT & Software", "Automotive", "Culinary Arts"],
    popularFields: ["Hotel & Tourism Management", "Business Studies", "IT & Software", "Automotive", "Culinary Arts"],
    averageTuition: "€3,500 – €8,500 / year",
    avgTuition: "€3,500 – €8,500 / yr",
    livingCost: "€4,000 – €7,000 / year",
    avgLiving: "€4,000 – €7,000 / yr",
    ieltsRequirement: "IELTS 5.5 – 6.0 (Select institutions offer English proficiency test on arrival or medium of instruction waivers)",
    intakes: ["February / March", "June / July", "September / October"],
    workRights: "Part-time work permitted under country-specific national laws",
    scholarships: "Erasmus+ & Tuition Rebates",
    withoutIelts: true,
    description:
      "For students seeking an affordable international degree with minimal financial barrier, European destinations like Cyprus and Malta offer outstanding educational value and European lifestyle exposure.",
    intro:
      "Budget-friendly degrees in Cyprus, Malta, Sweden, and Finland with minimal financial barriers and European lifestyle exposure.",
    keyBenefits: [
      "Significantly lower tuition fees compared to traditional English-speaking countries",
      "High visa success rates for genuine academic applicants",
      "European transfer credits and pathway to Schengen member states",
      "English-medium curriculum across certified colleges and universities",
    ],
  },
];

export const verifiedStats = [
  {
    label: "Successful Students",
    value: "1,500+",
    bengali: "১,৫০০+ সফল শিক্ষার্থী",
    desc: "Trained across IELTS, Spoken English & Study Abroad programs in Beanibazar",
  },
  {
    label: "IELTS High Achievers (Band 7.0–8.5)",
    value: "350+",
    bengali: "৩৫০+ শিক্ষার্থী ৭+ ব্যান্ড স্কোর",
    desc: "Rewarded with official certificates and cash prize money by Milestone",
  },
  {
    label: "Partner Institutions",
    value: "120+",
    bengali: "১২০+ সহযোগী বিশ্ববিদ্যালয়",
    desc: "Leading institutions across UK, Canada, USA, Australia, and Europe",
  },
  {
    label: "Computer-Delivered Lab Seats",
    value: "30+",
    bengali: "৩০+ অত্যাধুনিক কম্পিউটার ল্যাব",
    desc: "Dedicated terminals mirroring official IDP / British Council test setups",
  },
  {
    label: "Student Visa Approvals",
    value: "98%",
    bengali: "৯৮% ভিসা সফলতার হার",
    desc: "Carefully vetted documentation with zero file rejection guarantees",
  },
  {
    label: "Years in Beanibazar",
    value: "7+",
    bengali: "৭+ বছরের অবিচল নির্ভরতা",
    desc: "The undisputed educational landmark on College Road, Beanibazar",
  },
];

export const honestyManifesto = [
  {
    id: "01",
    title: "Zero False Promises & 100% Genuine Guidance",
    bengali: "কোনো ভুয়া প্রতিজ্ঞা নয়, ১০০% সত্য তথ্য",
    desc: "We will never promise a visa or band score without assessing your genuine profile. We tell you the hard truth about your admission chances and work tirelessly to make them reality.",
  },
  {
    id: "02",
    title: "Official IDP Alignment & Authentic Cambridge Materials",
    bengali: "আইডিপি অনুমোদন ও ক্যামব্রিজ অথেনটিক ম্যাটেরিয়াল",
    desc: "No unauthorized photocopies of obsolete notes. We train with official Cambridge IELTS books 11 to 19 and provide direct IDP test registration desks.",
  },
  {
    id: "03",
    title: "Cash Rewards & Open Recognition for High Achievers",
    bengali: "মেধা ও সফলতার স্বীকৃতিতে নগদ প্রাইজমানি",
    desc: "We invest back into our students. Achieving Band 7.0, 7.5, or 8.0 earns you official cash rewards, public stage ceremonies, and lifetime alumni privileges.",
  },
  {
    id: "04",
    title: "Dedicated Computer-Delivered Mock Lab in Beanibazar",
    bengali: "বিয়ানীবাজারে সর্বাধুনিক কম্পিউটার মক ল্যাব",
    desc: "You don't need to travel to Sylhet city just to practice on computer-delivered test software. Our lab operates daily right on Inner College Road.",
  },
  {
    id: "05",
    title: "Chief Instructor Mentorship by Ahbabur Rahman Tahmid",
    bengali: "আইইএলটিএস বিশেষজ্ঞ কর্তৃক নিবিড় ক্লাস",
    desc: "Direct classroom teaching by renowned specialists who have produced hundreds of Band 7.5+ scores, not temporary tutors or inexperienced substitutes.",
  },
  {
    id: "06",
    title: "Transparent Fee Structure with Zero Hidden Charges",
    bengali: "স্বচ্ছ ফি ও সম্পূর্ণ লুকানো খরচহীন নীতিমালা",
    desc: "Everything from course admission to study abroad application fees is stated clearly on day one. No surprises, no hidden file charges.",
  },
];

export const studentTestimonials = [
  {
    id: "test-1",
    name: "Mahfuzur Rahman",
    location: "Beanibazar, Sylhet",
    achievement: "IELTS Band 7.5 (Writing 7.5 · Reading 8.0)",
    destination: "University of Hertfordshire, UK (MSc Data Science)",
    quote:
      "Milestone Beanibazar is a game changer for students in our area. Tahmid Sir's writing clinics demystified Task 2 completely. Achieving 7.5 and receiving cash prize money on stage from Saleh Shaheen Sir gave me the confidence to secure my UK visa effortlessly!",
    avatar: "/assets/milestone-celebration.jpg",
  },
  {
    id: "test-2",
    name: "Tanzina Akter",
    location: "Beanibazar, Sylhet",
    achievement: "IELTS Band 7.0 · Spoken English Graduate",
    destination: "Conestoga College, Canada (Post-Grad Diploma)",
    quote:
      "I was terrified of speaking English in public. The 'Speakers' Mania' sessions at Milestone completely broke my hesitation. The Computer-Delivered mock tests made the actual exam feel like just another practice day. Truly grateful to the entire Milestone family!",
    avatar: "/assets/milestone-celebration.jpg",
  },
  {
    id: "test-3",
    name: "Sayed Ahmed Chowdhury",
    location: "Beanibazar, Sylhet",
    achievement: "IELTS Band 8.0 (Listening 8.5 · Reading 8.5)",
    destination: "Deakin University, Australia (Bachelor of Business)",
    quote:
      "People thought I'd have to move to Dhaka or Sylhet Zindabazar for quality IELTS coaching. Milestone proved that the best facility and highest standard of teaching is right here in Beanibazar. 8.0 overall on my very first attempt!",
    avatar: "/assets/milestone-celebration.jpg",
  },
  {
    id: "test-4",
    name: "Nusrat Jahan Chowdhury",
    location: "Beanibazar, Sylhet",
    achievement: "IELTS Life Skills A1 Pass (First Attempt)",
    destination: "UK Spouse Settlement Visa",
    quote:
      "The dedicated attention and women-friendly environment at Milestone made preparing for Life Skills so comfortable. The instructors took multiple mock interviews until I was completely confident.",
    avatar: "/assets/milestone-celebration.jpg",
  },
];

export const faqsData = [
  {
    id: "faq-location",
    q: "Where is Milestone Beanibazar located and how can I visit?",
    question: "Where is Milestone Beanibazar located and how can I visit?",
    bengali: "মাইলস্টোন বিয়ানীবাজার কোথায় অবস্থিত এবং কীভাবে যোগাযোগ করব?",
    a: "Our main campus is located at Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet. We also have an annex branch at Somobay Market (2nd Floor), College Road. You can visit anytime between Saturday to Thursday (9:00 AM – 7:30 PM) or call our hotlines directly at 01781-545490 or 01706-452949.",
    answer:
      "Our main campus is located at Azir Market (2nd Floor), 1 No. Goli, Inner College Road, Beanibazar, Sylhet. We also have an annex branch at Somobay Market (2nd Floor), College Road. You can visit anytime between Saturday to Thursday (9:00 AM – 7:30 PM) or call our hotlines directly at 01781-545490 or 01706-452949.",
  },
  {
    id: "faq-ielts-advantages",
    q: "What are the advantages of taking IELTS training at Milestone Beanibazar?",
    question: "What are the advantages of taking IELTS training at Milestone Beanibazar?",
    bengali: "মাইলস্টোনে আইইএলটিএস কোর্সের বিশেষ সুবিধাসমূহ কী কী?",
    a: "Milestone provides: 1) Beanibazar's only fully equipped Computer-Delivered (CD) IELTS mock test lab, 2) Intensive writing and reading clinics by Chief Instructor Ahbabur Rahman Tahmid, 3) Authentic Cambridge 11-19 test materials, 4) Direct IDP registration desk, 5) Unlimited free mock tests, and 6) Exciting cash prizes for students achieving Band 7.0 and above.",
    answer:
      "Milestone provides: 1) Beanibazar's only fully equipped Computer-Delivered (CD) IELTS mock test lab, 2) Intensive writing and reading clinics by Chief Instructor Ahbabur Rahman Tahmid, 3) Authentic Cambridge 11-19 test materials, 4) Direct IDP registration desk, 5) Unlimited free mock tests, and 6) Exciting cash prizes for students achieving Band 7.0 and above.",
  },
  {
    id: "faq-cd-mock-lab",
    q: "Can I take Computer-Delivered (CD) IELTS mock tests without enrolling in a full course?",
    question: "Can I take Computer-Delivered (CD) IELTS mock tests without enrolling in a full course?",
    bengali: "কোর্স ছাড়া শুধু কম্পিউটার ডেলিভার্ড মক টেস্ট দেওয়া সম্ভব?",
    a: "Yes! We offer flexible mock test packages (single mock, 5 mocks, or 10 mocks bundle) for all candidates in Beanibazar. You will receive an authentic exam experience on our dedicated computers, followed by section score reports and detailed writing evaluation.",
    answer:
      "Yes! We offer flexible mock test packages (single mock, 5 mocks, or 10 mocks bundle) for all candidates in Beanibazar. You will receive an authentic exam experience on our dedicated computers, followed by section score reports and detailed writing evaluation.",
  },
  {
    id: "faq-spoken-fluency",
    q: "How does the Spoken English course help people with severe hesitation?",
    question: "How does the Spoken English course help people with severe hesitation?",
    bengali: "স্পোকেন ইংলিশ কোর্সটি জড়তা কাটাতে কীভাবে সাহায্য করে?",
    a: "Our course eliminates dry grammar rules and focuses on active conversation. Through our weekly 'Speakers' Mania' debates, situational role-plays, phonetics correction, and stage speaking sessions, students naturally overcome nervousness within the first 3 weeks.",
    answer:
      "Our course eliminates dry grammar rules and focuses on active conversation. Through our weekly 'Speakers' Mania' debates, situational role-plays, phonetics correction, and stage speaking sessions, students naturally overcome nervousness within the first 3 weeks.",
  },
  {
    id: "faq-kids-english",
    q: "Do you offer programs for children and school students?",
    question: "Do you offer programs for children and school students?",
    bengali: "বাচ্চাদের জন্য কোনো বিশেষ কোর্স আছে কি?",
    a: "Yes! Our 'Milestone Junior' Kids English and Phonics studio is specifically crafted for students from Class 1 to Class 8. We utilize interactive visual storytelling, phonics songs, and speech games to build effortless pronunciation and stage confidence from childhood.",
    answer:
      "Yes! Our 'Milestone Junior' Kids English and Phonics studio is specifically crafted for students from Class 1 to Class 8. We utilize interactive visual storytelling, phonics songs, and speech games to build effortless pronunciation and stage confidence from childhood.",
  },
  {
    id: "faq-countries-processed",
    q: "Which countries do you process study abroad visas for?",
    question: "Which countries do you process study abroad visas for?",
    bengali: "কোন কোন দেশে স্টাডি ভিসার প্রসেসিং করা হয়?",
    a: "We process admissions and visas for the United Kingdom (UK), Canada, United States of America (USA), Australia, and European countries including Cyprus, Malta, Sweden, and Finland. We provide end-to-end guidance from university application to visa interview preparation.",
    answer:
      "We process admissions and visas for the United Kingdom (UK), Canada, United States of America (USA), Australia, and European countries including Cyprus, Malta, Sweden, and Finland. We provide end-to-end guidance from university application to visa interview preparation.",
  },
  {
    id: "faq-cash-reward",
    q: "Is there any financial reward or prize money for achieving high band scores?",
    question: "Is there any financial reward or prize money for achieving high band scores?",
    bengali: "ভালো ব্যান্ড স্কোরে প্রাইজমানি বা পুরস্কারের ব্যবস্থা আছে কি?",
    a: "Yes! Milestone proudly celebrates academic brilliance. Students scoring Band 7.0, 7.5, or 8.0 receive official cash prize rewards, honorary certificates, and stage recognition during our grand student award ceremonies.",
    answer:
      "Yes! Milestone proudly celebrates academic brilliance. Students scoring Band 7.0, 7.5, or 8.0 receive official cash prize rewards, honorary certificates, and stage recognition during our grand student award ceremonies.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "ielts-masterclass",
    badge: "New Batch Enrolling",
    date: "Morning & Evening Slots",
    title: "IELTS Academic & General Masterclass Batch",
    desc: "Intensive 3-month comprehensive preparation led directly by Chief Instructor Ahbabur Rahman Tahmid. Includes Cambridge 11-19 authentic materials, free mock tests, and Band 7+ target methodology.",
    highlights: [
      "Daily practice with official Cambridge test modules",
      "Specialized Writing Task 1 & Task 2 breakdown clinics",
      "Unlimited free Computer-Delivered (CD) mock tests in our lab",
      "Band 7.0+ achievers receive instant cash prize rewards",
    ],
  },
  {
    id: "cd-mock-lab-booking",
    badge: "Beanibazar's 1st Lab",
    date: "Daily Booking: 10 AM – 6 PM",
    title: "Computer-Delivered (CD) IELTS Mock Test Lab Slots",
    desc: "Simulate the authentic computer-delivered IELTS exam on high-spec workstations with noise-canceling headsets, timer countdowns, and instant score analysis at Azir Market Campus.",
    highlights: [
      "Exact replica of official IDP computer-delivered test software",
      "Complete 4-module simulation (Listening, Reading, Writing, Speaking)",
      "Instant computerized Listening & Reading scores with diagnostic report",
      "Detailed examiner feedback on Writing Task 1 & Task 2 within 24 hours",
    ],
  },
  {
    id: "band-7-cash-prize",
    badge: "Official Incentive Campaign",
    date: "Open All Year Round",
    title: "Milestone Band 7.0+ High-Achiever Cash Prize Rewards",
    desc: "Achieve an overall band score of 7.0, 7.5, 8.0 or above in your official IELTS exam as a registered Milestone student, and receive cash awards and stage ceremony honoring in Beanibazar.",
    highlights: [
      "Official cash reward money handed on stage by CEO Saleh Ahmed Shaheen",
      "Special commemorative crest and achievement certificate",
      "Free priority university application and visa processing support",
      "Honored on Milestone Beanibazar official Facebook and alumni wall",
    ],
  },
  {
    id: "uk-intake-fast-track",
    badge: "Flagship Admission",
    date: "September & January Intakes",
    title: "UK University Admissions & Fast-Track Visa Processing",
    desc: "Apply to prestigious universities across England, Scotland, Wales, and Northern Ireland with direct CAS issuance, scholarship guidance, and zero file opening charges.",
    highlights: [
      "Direct admissions with IELTS or MOI English waiver options",
      "1-Year Master's degrees with 2-Year Graduate Route PSW",
      "Complete guidance on financial proofs, TB test, and CAS issuance",
      "Credibility interview preparation with senior Sylhet visa consultants",
    ],
  },
  {
    id: "speakers-mania-spoken",
    badge: "Public Speaking & Fluency",
    date: "Weekly Friday English Club",
    title: "Spoken English & 'Speakers' Mania' Fluency Workshop",
    desc: "Designed specifically to eradicate speaking nervousness, tongue-tied hesitation, and Bengali-accented English through stage speaking, debate sessions, and practical real-life dialogue.",
    highlights: [
      "Weekly 'Speakers' Mania' mic presentations and debate rounds",
      "Intensive British & American phonetics and correct pronunciation",
      "Situational English for travel, workplace, and embassy interviews",
      "Free lifetime membership to Milestone Friday English Club",
    ],
  },
  {
    id: "milestone-junior",
    badge: "Kids Special Academy",
    date: "Weekend & After-School Batches",
    title: "Milestone Junior: Kids English & Phonics Studio",
    desc: "Interactive, joyful English foundation classes for school children (Class 1 to 8). Fosters natural English fluency, phonics sound mastery, and confident stage presence early in life.",
    highlights: [
      "Interactive digital storytelling and phonics sound games",
      "Vocabulary building, storytelling, and stage reciting",
      "Gentle, nurturing classroom atmosphere with child-friendly mentors",
      "Term-end certificate and parent-teacher progress evaluations",
    ],
  },
];

export const services = [
  {
    id: "study-abroad-admissions",
    icon: "🎓",
    badge: "Zero File Opening Charge",
    title: "Global University Admissions (UK, Canada, USA, Australia, Europe)",
    desc: "বিয়ানীবাজার থেকে সরাসরি বিশ্বের শীর্ষ ১০০+ বিশ্ববিদ্যালয়ে নিশ্চিত ভর্তি। কোর্স ও স্কলারশিপ সিলেকশন থেকে অফার লেটার এবং সিএএস (CAS) প্রাপ্তি পর্যন্ত সম্পূর্ণ সহযোগিতা।",
    features: [
      "Free academic profile evaluation by senior consultants",
      "Course and university shortlisting matched with your budget",
      "Direct university partner portal submission for fast-track offer letters",
      "Scholarship essay and Statement of Purpose (SOP) drafting guidance",
    ],
  },
  {
    id: "cd-ielts-mock-lab",
    icon: "💻",
    badge: "Beanibazar's 1st CD Lab",
    title: "Computer-Delivered (CD) IELTS Mock Test Lab",
    desc: "বিয়ানীবাজারে সর্বপ্রথম ৩০+ সিটের কম্পিউটার ডেলিভার্ড আইইএলটিএস ল্যাব। হুবহু অফিসিয়াল আইডিবি সফটওয়্যারে মক টেস্ট দিন এবং দ্রুত ফলাফল পেয়ে দুর্বলতা কাটান।",
    features: [
      "Dedicated high-spec PC terminals with noise-canceling headphones",
      "Real-time timer and computerized listening & reading scoring",
      "Writing task 1 & 2 typed evaluation with grammatical breakdown",
      "Flexible slot booking throughout the week for self-practice",
    ],
  },
  {
    id: "ielts-coaching-academy",
    icon: "📘",
    badge: "Cash Reward on Band 7+",
    title: "IELTS Preparation (Academic, General & Life Skills)",
    desc: "চিফ ইন্সট্রাক্টর আহবাবুর রহমান তাহমিদ স্যারের স্পেশাল রাইটিং ও রিডিং টেকনিক। ক্যামব্রিজ ১১-১৯ ম্যাটেরিয়াল ও আনলিমিটেড মক টেস্ট সুবিধা।",
    features: [
      "Classroom instruction by verified Band 8+ master trainers",
      "Extensive Task 1 & Task 2 writing correction and vocabulary clinics",
      "IDP Education authorized test date booking at our center",
      "Official cash rewards and recognition for Band 7.0+ scorers",
    ],
  },
  {
    id: "spoken-english-fluency",
    icon: "🗣️",
    badge: "Speakers' Mania",
    title: "Spoken English & Fluency Studio",
    desc: "ইংলিশে কথা বলার জড়তা দূর করার জন্য বিয়ানীবাজারের সেরা স্পোকেন ক্লাব। স্টেজ প্রেজেন্টেশন, বিতর্ক এবং শুক্রবারের স্পিকার্স ম্যানিয়া সেশন।",
    features: [
      "Zero grammar rote memorization — 100% active communication",
      "Microphone practice and stage speaking to eliminate stage fright",
      "Pronunciation, intonation, and daily vocabulary mastery",
      "Free access to weekly Friday Milestone English Club debate sessions",
    ],
  },
  {
    id: "visa-processing-guidance",
    icon: "✈️",
    badge: "98% Visa Success Rate",
    title: "Student Visa Filing & Embassy Interview Preparation",
    desc: "ইউকে, কানাডা, আমেরিকা, অস্ট্রেলিয়া ও ইউরোপের নিখুঁত ভিসা ফাইল প্রসেসিং। ব্যাংক স্টেটমেন্ট গাইডেন্স এবং কনস্যুলার মক ইন্টারভিউ প্রস্তুতি।",
    features: [
      "Thorough financial document audit and sponsor verification",
      "Embassy visa application form filling and biometrics appointment",
      "Intensive one-on-one credibility visa mock interviews",
      "Pre-departure briefing, student accommodation & airport pickup support",
    ],
  },
  {
    id: "milestone-junior-kids",
    icon: "🌟",
    badge: "Milestone Junior",
    title: "Kids English & Phonics Foundation",
    desc: "ক্লাস ১ থেকে ৮-এর শিক্ষার্থীদের জন্য চমৎকার ইংরেজি শিক্ষার আয়োজন। সঠিক উচ্চারণ, রিডিং স্কিল এবং শৈশব থেকেই আত্মবিশ্বাস তৈরির বিশেষ একাডেমি।",
    features: [
      "Interactive British phonics sound system and listening games",
      "Storytelling and public speech building from early school age",
      "Small batch sizes ensuring individual child attention",
      "Regular parent feedback sessions and progress assessments",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "📋",
    title: "Free Profile Assessment",
    bengaliTitle: "ফ্রি প্রোফাইল যাচাই ও ক্যারিয়ার কাউন্সেলিং",
    desc: "Visit our Azir Market or Somobay Market campuses in Beanibazar with your academic certificates. Our senior counselors evaluate your background, budget, and destination goals with zero file opening charges.",
  },
  {
    step: "02",
    icon: "🎯",
    title: "IELTS Prep & CD Mock Lab",
    bengaliTitle: "আইইএলটিএস কোর্স ও কম্পিউটার মক ল্যাব",
    desc: "Enroll in our intensive IELTS or Spoken English batch. Master test strategies with Chief Instructor Ahbabur Rahman Tahmid, practice in Beanibazar's first CD Mock Lab, and target Band 7.0+ for cash rewards.",
  },
  {
    step: "03",
    icon: "🏛️",
    title: "University Admission & CAS / Offer",
    bengaliTitle: "বিশ্ববিদ্যালয়ে আবেদন ও নিশ্চিত অফার লেটার",
    desc: "We submit your applications directly through our university partner portals across the UK, Canada, USA, Australia, or Europe. Receive official offer letters, scholarship decisions, and CAS / I-20 / LOA efficiently.",
  },
  {
    step: "04",
    icon: "✈️",
    title: "Visa Filing & Pre-Departure Flight",
    bengaliTitle: "ভিসা প্রসেসিং, ইন্টারভিউ মক ও ফ্লাইটের প্রস্তুতি",
    desc: "Our visa specialists prepare your financial documentation and conduct rigorous one-on-one visa mock interviews. Once your visa is granted, we arrange pre-departure briefings, accommodation, and airport pickup.",
  },
];

company.featuredReels = embeddedVideos;

export const navItems = navigationItems;
export const courses = academyCourses;
export const destinations = destinationsData;
export const testimonials = studentTestimonials;
export const stats = verifiedStats;
export const faqs = faqsData;
export const manifesto = honestyManifesto;
export const featuredReels = embeddedVideos;