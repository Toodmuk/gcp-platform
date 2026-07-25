// ── Shared mock data for the Global Citizen Passport prototype ──────────────

export const HOLDER = {
  name: 'Praew Suksawat',
  nameThai: 'แพรว สุขสวัสดิ์',
  id: 'GCP-TH-2026-000117',
  dob: '04 MAR 2007',
  nationality: 'THAI',
  issued: '14 NOV 2025',
  issuedAt: 'EF Bangkok',
  efset: { score: 64, cefr: 'C1', date: '08 NOV 2025', certId: 'EFSET-2025-8841207' },
  gci: {
    pre: 42,
    post: 61,
    delta: 19,
    level: 'L3 · Proficient',
    skills: [
      { key: 'Adaptability', pre: 44, post: 65 },
      { key: 'Cultural Awareness', pre: 40, post: 58 },
      { key: 'Confident Communication', pre: 42, post: 60 },
    ],
  },
  stamps: [
    {
      stage: 'SPARK',
      title: 'Global Citizen Challenge',
      detail: 'Free EF SET + cultural field task · Triam Udom × AIESEC Chula',
      date: '14 NOV 2025',
      color: 'sky',
      icon: '⚡',
      evidence: 'EF SET C1 certificate · task photo log',
    },
    {
      stage: 'IMMERSE',
      title: 'EF London — 8 weeks',
      detail: 'Language Abroad · GCI scored pre → post by EF staff',
      date: 'MAR – MAY 2026',
      color: 'navy',
      icon: '✈',
      evidence: 'GCI observation rubric · attendance 96%',
    },
    {
      stage: 'APPLY',
      title: '“Bring It Home” micro-project',
      detail: '4-week English club at her old school · public showcase',
      date: '28 JUN 2026',
      color: 'blue',
      icon: '🛠',
      evidence: 'Project portfolio · mentor sign-off · showcase video',
    },
    {
      stage: 'BELONG',
      title: 'EF Global Citizens member',
      detail: 'Mentor-matched · Bangkok Summit 2026 delegate',
      date: 'SINCE JUL 2026',
      color: 'red',
      icon: '♾',
      evidence: 'Membership record · mentor log',
    },
  ],
}

export const VERIFY_URL =
  (typeof window !== 'undefined' && window.location.origin.startsWith('http')
    ? window.location.origin
    : 'https://gcp.ef.com') + '/verify/' + HOLDER.id

// ── Nugget Traveler quiz ────────────────────────────────────────────────────

export const CHARACTERS = {
  sunny: {
    id: 'sunny',
    emoji: '☀️',
    name: 'Sunny Side',
    title: 'The Summer Firefly',
    color: '#F5A623',
    bg: '#FFF4DC',
    tagline: 'First flight, big sparkle. You want the world in one unforgettable summer.',
    traits: ['First-timer energy', 'Loves a squad', 'Parents on speed-dial'],
    profile: { duration: '2–4 weeks', outcome: 'Confidence + first stamp', budget: '฿฿', stage: 'High school' },
    journey: 'EF Summer Camp · Brighton or Nice · 2–4 weeks with a Thai group leader',
    next: 'Take the free EF SET at a Global Citizen Challenge → your first Passport stamp.',
  },
  golden: {
    id: 'golden',
    emoji: '✨',
    name: 'Golden Crispy',
    title: 'The All-In Immerser',
    color: '#E8B84B',
    bg: '#FBF3DD',
    tagline: 'No half-dips. You want to live it, speak it, and come back a different person.',
    traits: ['All-in commitment', 'Craves deep change', 'Future dek nok legend'],
    profile: { duration: '12–24 weeks', outcome: 'Fluency + GCI delta', budget: '฿฿฿', stage: 'Uni / gap year' },
    journey: 'EF Language Abroad · London or Malta · 12–24 week immersion',
    next: 'Your GCI is scored pre → post. The delta is the product.',
  },
  dino: {
    id: 'dino',
    emoji: '🦖',
    name: 'Dino Nugget',
    title: 'The Degree Hunter',
    color: '#3E8E5A',
    bg: '#E7F4EC',
    tagline: 'Extinct? Never. You are hunting a world-class degree and nothing less.',
    traits: ['Long-game planner', 'Rankings spreadsheet', 'GPA warrior'],
    profile: { duration: '6–12 months', outcome: 'University place', budget: '฿฿฿฿', stage: 'Uni prep' },
    journey: 'EF University Pathway · foundation → undergraduate abroad',
    next: 'Your GCI transcript strengthens every application.',
  },
  spicy: {
    id: 'spicy',
    emoji: '🔥',
    name: 'Spicy Wing',
    title: 'The Career Sprinter',
    color: '#D64541',
    bg: '#FDE9E7',
    tagline: 'You are not here to travel. You are here to level up and get hired.',
    traits: ['Outcome-obsessed', 'LinkedIn optimized', 'Deadline-powered'],
    profile: { duration: '4–12 weeks', outcome: 'Career English + network', budget: '฿฿฿', stage: 'Fresh grad' },
    journey: 'EF Language Abroad (intensive) · Singapore or London · career track',
    next: 'Add your verified GCI score straight to LinkedIn — HR checks it in 10 seconds.',
  },
  popcorn: {
    id: 'popcorn',
    emoji: '🍿',
    name: 'Popcorn Bite',
    title: 'The Taste Tester',
    color: '#8E6BB8',
    bg: '#F1EAF9',
    tagline: 'Small bite first. If it slaps, you are coming back for the whole bucket.',
    traits: ['Curious but careful', 'Budget-aware', 'Research-heavy'],
    profile: { duration: '2 weeks', outcome: 'Proof it is worth it', budget: '฿', stage: 'Any' },
    journey: 'EF short course · Malta or Cebu · 2-week starter',
    next: 'Start free: EF SET score becomes page 1 of your Passport — before you pay for anything.',
  },
  honey: {
    id: 'honey',
    emoji: '🍯',
    name: 'Honey Glaze',
    title: 'The Social Butterfly',
    color: '#DE7EA2',
    bg: '#FCEBF2',
    tagline: 'For you the destination is people. 100 new friends from 100 countries.',
    traits: ['Community-first', 'Story-collector', 'Group-chat admin'],
    profile: { duration: '4–8 weeks', outcome: 'A global network', budget: '฿฿', stage: 'Uni' },
    journey: 'EF Language Abroad · Tokyo or Barcelona · campus-life track',
    next: 'BELONG membership: mentors, Bangkok Summit, a community that never expires.',
  },
  tempura: {
    id: 'tempura',
    emoji: '🌊',
    name: 'Tempura',
    title: 'The Earn-&-Learner',
    color: '#2C6BB3',
    bg: '#E6EFF9',
    tagline: 'Light batter, heavy hustle. You will fund the dream while living it.',
    traits: ['Self-funded pride', 'Practical dreamer', 'Works the plan'],
    profile: { duration: '12–52 weeks', outcome: 'Skills that pay back', budget: '฿ (earn abroad)', stage: 'Uni / gap year' },
    journey: 'EF long-stay + work-eligible destinations · consult an EF coordinator',
    next: 'Alumni-funded scholarships open every year — your GCI score is your application.',
  },
}

export const QUESTIONS = [
  {
    q: 'Friday night. Your group chat suddenly plans a trip nobody budgeted for. You…',
    measures: 'Mobility',
    options: [
      { t: 'Already packed. Sleep is for the weak.', w: { golden: 2, honey: 1, sunny: 1 } },
      { t: 'Open a spreadsheet: where, how much, what do we get out of it?', w: { dino: 2, spicy: 1, popcorn: 1 } },
      { t: 'In — if someone finds a promo code.', w: { tempura: 2, popcorn: 1 } },
    ],
  },
  {
    q: 'Honestly, how long could you be away from home (and your mum’s cooking)?',
    measures: 'Duration window',
    options: [
      { t: 'A few weeks — short, sweet, unforgettable.', w: { sunny: 2, popcorn: 1 } },
      { t: 'A full season. I want to actually live there.', w: { golden: 2, honey: 1 } },
      { t: 'A year+. I am building a whole chapter of my life.', w: { dino: 2, tempura: 1 } },
    ],
  },
  {
    q: 'You come back from abroad. The first thing you show people is…',
    measures: 'Outcome type',
    options: [
      { t: 'My new accent. Did you hear that? That was C1.', w: { golden: 2, spicy: 1 } },
      { t: 'A university offer letter with my name on it.', w: { dino: 2 } },
      { t: '400 photos and 40 new best friends.', w: { honey: 2, sunny: 1 } },
    ],
  },
  {
    q: 'Where are you in life right now?',
    measures: 'Life stage',
    options: [
      { t: 'High school — summers are my window.', w: { sunny: 2, dino: 1 } },
      { t: 'University — I can bend a term if it is worth it.', w: { honey: 2, golden: 1, popcorn: 1 } },
      { t: 'Graduating / working — every move must pay back.', w: { spicy: 2, tempura: 1 } },
    ],
  },
  {
    q: 'Money talk. What is the plan?',
    measures: 'Budget exposure',
    options: [
      { t: 'Family backs me — I just have to prove it is worth it.', w: { sunny: 1, dino: 2 } },
      { t: 'I will invest in the full experience. Once. Properly.', w: { golden: 2, spicy: 1 } },
      { t: 'I want to earn while I learn — or start small.', w: { tempura: 2, popcorn: 1 } },
    ],
  },
  {
    q: 'A foreigner asks you for directions in English. You…',
    measures: 'English confidence',
    options: [
      { t: 'Full conversation. We are friends now. They are coming to Songkran.', w: { honey: 2, golden: 1 } },
      { t: 'I manage — with hand gestures as backup dancers.', w: { popcorn: 1, sunny: 1, tempura: 1 } },
      { t: 'I open Google Translate and pray.', w: { sunny: 1, popcorn: 2 } },
    ],
  },
]

// ── Community data ──────────────────────────────────────────────────────────

export const REGIONS = {
  north: {
    name: 'North', hub: 'Chiang Mai', emoji: '⛰', members: 312, color: '#3E8E5A',
    communities: [
      { icon: '🚶', name: 'Café English Walk CNX', members: 84, next: 'Nimman loop · SAT 2 AUG', tag: 'weekly' },
      { icon: '🥾', name: 'Doi Hike & Talk', members: 61, next: 'Doi Suthep sunrise · 10 AUG', tag: 'outdoor' },
      { icon: '💻', name: 'Nomad × Alumni Mixer', members: 122, next: 'Yellow Coworking · 21 AUG', tag: 'career' },
    ],
  },
  northeast: {
    name: 'Northeast (Isan)', hub: 'Khon Kaen', emoji: '🌾', members: 256, color: '#B8860B',
    communities: [
      { icon: '🎤', name: 'Mentor AMA Night KKC', members: 97, next: 'KKU campus · SAT 9 AUG', tag: 'mentors' },
      { icon: '🍜', name: 'Isan Food × Language Swap', members: 74, next: 'Ton Tann market · 17 AUG', tag: 'culture' },
      { icon: '🎶', name: 'Mor Lam & More', members: 38, next: 'open mic · 30 AUG', tag: 'social' },
    ],
  },
  central: {
    name: 'Central & Bangkok', hub: 'Bangkok', emoji: '🏙', members: 2148, color: '#17375E', flagship: true,
    communities: [
      { icon: '🏃', name: 'EF Run Club Bangkok', members: 214, next: 'Benjakitti 5k · SUN 3 AUG', tag: 'weekly' },
      { icon: '☕', name: 'Café English Club Ari', members: 186, next: 'conversation tables · 6 AUG', tag: 'weekly' },
      { icon: '🎲', name: 'Board & Banter', members: 92, next: 'games night in English · 14 AUG', tag: 'social' },
      { icon: '🏛', name: 'Bangkok Summit 2026 crew', members: 340, next: 'volunteer briefing · 20 SEP', tag: 'summit' },
    ],
  },
  east: {
    name: 'East', hub: 'Chonburi · Rayong', emoji: '🌊', members: 174, color: '#2C6BB3',
    communities: [
      { icon: '🏃', name: 'EF Run Club East', members: 78, next: 'Bang Saen beach 5k · SAT 2 AUG', tag: 'weekly' },
      { icon: '🏄', name: 'Surf & Speak Rayong', members: 45, next: 'Mae Ramphueng · 16 AUG', tag: 'outdoor' },
      { icon: '🧹', name: 'Beach Cleanup × AIESEC', members: 66, next: 'Koh Larn · 23 AUG', tag: 'volunteer' },
    ],
  },
  west: {
    name: 'West', hub: 'Kanchanaburi', emoji: '🏞', members: 88, color: '#8E6BB8',
    communities: [
      { icon: '🛶', name: 'River Trek English', members: 41, next: 'Kwai kayak + campfire · 9 AUG', tag: 'outdoor' },
      { icon: '🏡', name: 'Homestay Exchange Weekend', members: 29, next: 'host a traveler · SEP', tag: 'culture' },
    ],
  },
  south: {
    name: 'South', hub: 'Hat Yai · Phuket', emoji: '🏝', members: 198, color: '#D64541',
    communities: [
      { icon: '📚', name: 'Hat Yai Study Club', members: 88, next: 'IELTS vs EF SET clinic · 8 AUG', tag: 'study' },
      { icon: '🏖', name: 'Phuket Beach English', members: 72, next: 'sunset session · 15 AUG', tag: 'weekly' },
      { icon: '🧗', name: 'Krabi Climb & Converse', members: 38, next: 'Railay beginners day · 29 AUG', tag: 'outdoor' },
    ],
  },
}

export const GLOBAL_CHAPTERS = [
  { name: 'London', flag: '🇬🇧', members: 8420 },
  { name: 'Malta', flag: '🇲🇹', members: 5211 },
  { name: 'Tokyo', flag: '🇯🇵', members: 4108 },
  { name: 'Sydney', flag: '🇦🇺', members: 3987 },
  { name: 'Seoul', flag: '🇰🇷', members: 2844 },
  { name: 'Singapore', flag: '🇸🇬', members: 2610 },
]

export const FEED = [
  {
    who: 'P’Mild · Mentor (London ’24)',
    when: '2h',
    text: 'Office hours tonight 8PM: how I used my GCI transcript in a Big-4 interview. Bring questions! 🎓',
    likes: 128,
  },
  {
    who: 'AIESEC in Chulalongkorn',
    when: '6h',
    text: 'Global Citizen Challenge #12 is open — free EF SET + cultural task. First 100 get the physical Passport booklet 🛂',
    likes: 342,
  },
  {
    who: 'Boss · Malta ’25',
    when: '1d',
    text: 'My APPLY showcase is this Saturday at my old school in Khon Kaen. Come judge my students’ debate! 🔥',
    likes: 96,
  },
]
