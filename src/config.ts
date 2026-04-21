// Single source of truth for site-wide personal data.
// Imported by any component that needs a name, link, or key.

export const config = {
  name: {
    // Formal name, nav, page titles, meta tags, author lines.
    formal: 'PR Saketh',
    // First-person, "Hi, I'm Saketh", greeting copy.
    first: 'Saketh',
  },
  tagline:
    "Cambridge CS undergrad. Shaders, 300-critter ecosystems, the occasional overlong math paper.",
  summary:
    "First-year CS at Churchill College, Cambridge. Currently interested in formal languages " +
    "and methods. Long term interests are quantum information, theoretical CS, and " +
    "mathematics education.",
  location: 'Cambridge, UK in term · Austin, TX when not',
  email: 'prsaketh360@gmail.com', // never rendered plaintext, used only as fallback in error states
  links: {
    github: 'https://github.com/sakethpilli007',
    linkedin: 'https://linkedin.com/in/pr-saketh007',
    shadertoy: 'https://www.shadertoy.com/view/tcGcRR',
  },
  stats: [
    {
      label: 'Degree',
      detail: 'Churchill College, University of Cambridge · BA (Hons) Computer Science · 2025 → 2028',
    },
    {
      label: 'High School',
      detail: 'BASIS Independent Fremont · Graduated with High Honors · 2021 → 2025',
    },
  ],
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Research', href: '/research' },
    { label: 'Beyond the Code', href: '/beyond-the-code' },
    { label: 'Martial Arts', href: '/martial-arts' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

// ─── Portfolio data ────────────────────────────────────────────────────────
export type Project = {
  slug: string;
  title: string;
  pitch: string;
  description: string;
  tags: { text: string; kind: 'lang' | 'domain' | 'method' }[];
  // Some projects have no public repo (school-owned, un-open-sourced, or
  // written up as a paper instead). `github` is therefore optional, and
  // `paper` lets us attach a PDF write-up as the primary artifact.
  github?: string;
  paper?: { label: string; url: string };
  live?: { label: string; url: string };
  featured?: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    slug: 'lorentz-boost-shader',
    title: 'Lorentz Boost Grid',
    pitch:
      'A real-time GLSL shader. You slide a boost, special relativity does the rest, and the world bends.',
    description:
      "4th place at the Cambridge Graphics Competition 2026 (beaten by three frankly excellent people). " +
      "No mesh, no rasterisation. Each pixel computes exactly where its ray would hit a Lorentz-boosted grid, " +
      "and returns the right colour. Rapidity oscillates along the X-axis, γ drives both length contraction " +
      "and an ambient colour glow. One GLSL file. Runs on Shadertoy.",
    tags: [
      { text: 'GLSL', kind: 'lang' },
      { text: 'Graphics', kind: 'domain' },
      { text: 'Relativity', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/lorentz-boost-shader',
    live: { label: 'Run on Shadertoy', url: 'https://www.shadertoy.com/view/tcGcRR' },
    featured: true,
    order: 1,
  },
  {
    slug: 'starthack-zwick-roell',
    title: 'StartHack × Zwick Roell',
    pitch:
      'A weekend hackathon at St. Gallen: 48 hours, a materials-testing brief, one working prototype by Sunday night.',
    description:
      "Team entry for the sponsor challenge at St. Gallen. The brief was about data workflows for industrial " +
      "materials-testing rigs; we shipped a rapid-iteration prototype over the hackathon weekend. Coffee " +
      "consumption: high. Sleep: negotiable. Public GitHub repo by Sunday night.",
    tags: [
      { text: 'Hackathon', kind: 'domain' },
      { text: 'Team build', kind: 'method' },
      { text: 'Industrial', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/aviato-starthack-zwickroell',
    featured: true,
    order: 2,
  },
  {
    slug: 'senior-project',
    title: 'Altruism Engine',
    pitch:
      '300 neural-network critters evolving over 3000 generations to answer one question: share food, or hoard it?',
    description:
      "My high-school senior project. 300 agents across 3 species + 10 predators, each running a 10-hidden-layer " +
      "feedforward net batched through torch.bmm so the whole ecosystem steps forward in a single GPU call. " +
      "Two modes let me compare selection pressures directly: altruism (food split proportionally) vs. steal " +
      "(largest agent takes everything). Top 10% breed, mutation rate 0.1, 3000 generations of watching tiny " +
      "fish either get along or very much not.",
    tags: [
      { text: 'Python', kind: 'lang' },
      { text: 'PyTorch', kind: 'domain' },
      { text: 'Evolutionary Computation', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/senior-project',
    paper: { label: 'Poster (PDF)', url: '/assets/papers/senior-project-poster.pdf' },
    order: 3,
  },
  {
    slug: 'blink-3d',
    title: 'BLINK 3D',
    pitch:
      "First-person horror where your actual blinks control reality. Eyes open, you freeze. Close them, you move, but so do the things in the dark.",
    description:
      "Open your eyes and the world stops; you turn to stone. Close them and you move freely, but so does " +
      "whatever is hunting you. OpenCV reads real-time blinks from your webcam, Panda3D renders the 3D dungeon, " +
      "five enemy types each have distinct chase patterns, layouts are procedurally generated, and there are " +
      "three difficulty presets plus three run mutators for when the base game isn't making you anxious enough. " +
      "Built for a game jam. Made me flinch at my own eyelids for a week.",
    tags: [
      { text: 'Python', kind: 'lang' },
      { text: 'Panda3D', kind: 'domain' },
      { text: 'OpenCV', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/blink-3d',
    featured: true,
    order: 4,
  },
  {
    slug: 'blink-2d',
    title: 'BLINK 2D',
    pitch:
      'The 2D prototype before BLINK 3D got ambitious. Pygame, top-down, same "eyes open = paused" mechanic.',
    description:
      "The top-down proof of concept before the 3D version took over my life. Procedurally generated houses " +
      "across three floors, keyboard fallback if you'd rather not point a camera at yourself, crafting wheel, " +
      "an AoE petrify pulse for when you're cornered, enemies with a suspicion meter, and a seven-level " +
      "guided tutorial so new players don't immediately rage-quit.",
    tags: [
      { text: 'Python', kind: 'lang' },
      { text: 'Pygame', kind: 'domain' },
      { text: 'Game Dev', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/blink-2d',
    order: 5,
  },
  {
    slug: 'github-blogger-agent',
    title: 'GitHub Blogger Agent',
    pitch:
      "Paste a GitHub repo; get a report a manager could actually skim. Or chat with the repo like it's a slightly overworked senior dev.",
    description:
      "Pulls up to 90 days of commits, categorises them by what they actually did (not just what the commit " +
      "message claimed), feeds the real diffs to Gemini 1.5 Flash, and renders a stakeholder-ready report with a " +
      "commit heatmap, language chart, prose summary. There's also a 'Dev-GPT' chat mode grounded in the README " +
      "and commit history, which turns out to be suspiciously good at answering 'why does this file exist?'. " +
      "Flask + Jinja2 + markdown-it-py on the rendering side.",
    tags: [
      { text: 'Python', kind: 'lang' },
      { text: 'Flask', kind: 'domain' },
      { text: 'Gemini', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/github-blogger-agent',
    order: 6,
  },
  {
    slug: 'viral-illness-model',
    title: 'Viral Illness Dose-Response Model',
    pitch:
      "Numerical model of a viral infection under medication. Euler's method + an IVT argument hand off the therapeutic dosing window in closed form.",
    description:
      "Discretised ODE model of viral particle count vs. drug concentration, integrated with forward Euler on a 1-hour time step. An IVT argument over the simulation output pins the therapeutic dosing window to 10.2–10.3 million particles, which maps to ~24.25 µg/hour given 2.5%/hour kidney clearance. Three self-contained Python programs, one per model variant. One of the first projects where 'write the model, run it, read off the answer' clicked for me.",
    tags: [
      { text: 'Python', kind: 'lang' },
      { text: 'Numerical Methods', kind: 'domain' },
      { text: 'Pharmacokinetics', kind: 'method' },
    ],
    paper: { label: 'Paper (PDF)', url: '/assets/papers/viral-illness-model.pdf' },
    order: 8,
  },
  {
    slug: 'personal-job-autofill',
    title: 'Personal Job Autofill',
    pitch:
      "A Chrome extension that fills job applications for me. Nothing leaves the browser. No servers, no analytics, no vibes-based data collection.",
    description:
      "Manifest V3, fully local. Multi-profile support (different personas for different roles), custom " +
      "keyword→value mapping when field labels are weird, a Fill Report tab showing what got filled / skipped / " +
      "couldn't match, a Cmd-Shift-F shortcut, and a toolbar badge with a per-page field count. Fires " +
      "React/Vue-safe focus/input/change/blur events so modern form frameworks actually register the fill. " +
      "Every byte of data lives in chrome.storage.local.",
    tags: [
      { text: 'JavaScript', kind: 'lang' },
      { text: 'Chrome Extension', kind: 'domain' },
      { text: 'MV3', kind: 'method' },
    ],
    github: 'https://github.com/sakethpilli007/personal-job-autofill',
    order: 7,
  },
];

// ─── Research data ─────────────────────────────────────────────────────────
// NOTE: these abstracts stay academic on purpose, they're credibility markers
// for admissions / research-leaning recruiters. Voice only touches up the
// marketing bits elsewhere.
export type Paper = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  abstract: string;
  tags: string[];
  depth: 'deep' | 'abstract';
  fullPaperAvailable: boolean;
  ipProtected?: boolean;
};

export const papers: Paper[] = [
  {
    slug: 'elliptic-functions',
    title: 'Elliptic Functions and their Properties',
    authors: 'S. Pilli · Dr. A. Chaudhri',
    venue: 'Churchill College, Cambridge · BASIS Independent Fremont',
    date: 'April 2026',
    abstract:
      "Develops the theory of doubly-periodic meromorphic functions from first principles. Beginning with compactness of the torus ℂ/Λ, we derive Liouville's theorems, construct the Weierstrass ℘-function and its differential equation, prove the representation theorem E(Λ) = ℂ(℘, ℘'), introduce the j-invariant and the modular group, and close with the Jacobi sn/cn/dn family and three worked applications: the exact large-amplitude pendulum, KdV cnoidal waves, and the lemniscatic arc length that started it all.",
    tags: ['Complex Analysis', 'Elliptic Curves', 'Modular Forms'],
    depth: 'deep',
    fullPaperAvailable: false,
  },
  {
    slug: 'gravitational-waves',
    title: 'The Creation, Existence, Detection, and Effects of Gravitational Waves',
    authors: 'S. Pilli · Dr. A. Chaudhri',
    venue: 'BASIS Independent Fremont',
    date: 'March 2026',
    abstract:
      "Develops gravitational-wave theory from first principles. Starting with the Einstein field equations, linearizes the metric, reduces to the transverse-traceless gauge, and derives the quadrupole luminosity formula. The second half covers detection: geodesic-deviation response of LIGO's Michelson interferometer, matched-filtering signal extraction, and how modified-gravity theories (Brans–Dicke, f(R), Horndeski) diverge from GR in the strong-field regime.",
    tags: ['General Relativity', 'Gravitational Waves', 'Differential Geometry'],
    depth: 'abstract',
    fullPaperAvailable: false,
  },
  {
    slug: 'silicon-crystallography',
    title: 'Computationally Modeling the Effect of Crystallographic Orientation on Surface Roughness of Silicon',
    authors: 'S. Pilli (lead) · ASDRP team of 4',
    venue: 'Aspiring Scholars Directed Research Program',
    date: 'March–September 2024',
    abstract:
      "DFT study of how silicon surface roughness depends on crystal cut orientation, using Quantum ESPRESSO for plane-wave pseudopotential calculations and XCrysDen + Prusa Slicer for 3D visualization. Unit-cell models for (100), (110), and (111) surfaces are relaxed to minimum-energy configurations, and simulated profiles are compared against lab profilometry. I led a 4-researcher team end-to-end, from Hamiltonian setup to final report.",
    tags: ['DFT', 'Materials Science', 'Quantum ESPRESSO'],
    depth: 'abstract',
    fullPaperAvailable: false,
    ipProtected: true,
  },
];

// ─── Beyond the Code ───────────────────────────────────────────────────────
export type Role = {
  role: string;
  org: string;
  date: string;
  description: string;
  highlights?: string[];
};

export const roles: Role[] = [
  {
    role: 'Undergraduate Academic Rep · Junior Member, Faculty Board of CS',
    org: 'University of Cambridge',
    date: '2025 – present',
    description:
      "Elected by my cohort to sit on Cambridge's CS Faculty Board, the body that actually decides what we " +
      "get taught and how we get examined. In practice: I collect the 'why on earth are we doing this' " +
      "feedback from ~140 first-years, translate it into something faculty can act on, and advocate " +
      "constructively on assessment, welfare, and outreach.",
  },
  {
    role: 'Founder · Student Panel',
    org: 'BASIS Independent Fremont',
    date: '2022 – 2025',
    description:
      "Set up the school's first Student Panel. Effectively, 'what if students had a sanctioned line to the " +
      "administration.' Ran it for three years: weekly meetings, school-wide events, and a run of " +
      "fundraisers that hit $25K for local and international causes.",
  },
  {
    role: 'Founder & Lead · Advanced Java Club',
    org: 'BASIS Independent Fremont',
    date: '2024 – 2025',
    description:
      "A weekly 'what the AP CSA curriculum skips' club I founded and led: concurrency, generics, JVM " +
      "internals, actual algorithm design. Small room, high ceiling. End-of-term projects were the real " +
      "deliverable.",
  },
  {
    role: 'Teaching Assistant',
    org: 'BASIS Independent Fremont',
    date: '2023 – 2025',
    description:
      "TA for Precalculus, Multivariable / Vector Calculus, and AP Computer Science. Graded problem sets, " +
      "ran office hours, and wrote the kind of pre-exam review sessions I wish I'd had myself.",
  },
  {
    role: 'Founder · Peer Tutoring Initiative',
    org: 'BASIS Independent Fremont',
    date: '2022 – 2025',
    description:
      "A student-run tutoring programme covering Math (AP Calc BC, Multivariable / Vector Calculus), Physics " +
      "(AP Physics C), and Computer Science. Wrote worked-example packets, ran weekly exam-prep, kept the " +
      "dollar cost to students at zero. while pain cost at maximum",
  },
];
