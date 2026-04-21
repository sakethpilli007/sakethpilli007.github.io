# Rohan Saketh Pilli — Personal Portfolio Site

**Project Plan (v1)** · Last updated 2026-04-21

---

## 0. Source material I actually verified

Before the plan, the concrete facts this is built on (no assumptions):

**Identity (from LinkedIn PDF `Profile.pdf` + CV + GitHub API):**
- Name on LinkedIn: **PR Saketh** · Headline: "CS @ University of Cambridge"
- Email: `prsaketh360@gmail.com`
- LinkedIn: `linkedin.com/in/pr-saketh007` (slug: `pr-saketh007`)
- GitHub: `github.com/sakethpilli007` (GitHub display name: "Saketh P.", location field: "Cambridge, United Kingdom", 7 public repos, account since 2022-08-05)
- LinkedIn "Top Skills" badges: Data Analysis · Computational Biology · Modeling and Simulation
- LinkedIn location: "United States" (old — safe to override with "Cambridge, UK / Fremont, CA" on the site; confirm with you)

**GitHub public repos (from `api.github.com/users/sakethpilli007/repos`, 7 total):**

| # | Repo | Lang | Description (own words) | Use on site? |
|---|------|------|-------------------------|--------------|
| 1 | [lorentz-boost-shader](https://github.com/sakethpilli007/lorentz-boost-shader) | GLSL | GLSL fragment shader visualizing relativistic length contraction via Lorentz-transformed ray tracing. Shadertoy link: https://www.shadertoy.com/view/tcGcRR | **Yes — headline project (Cambridge Graphics Comp 4th)** |
| 2 | [blink-3d](https://github.com/sakethpilli007/blink-3d) | Python (Panda3D) | First-person stealth/horror game — blinks control reality. | **Yes** |
| 3 | [blink-2d](https://github.com/sakethpilli007/blink-2d) | Python (Pygame) | Top-down stealth maze with OpenCV webcam blink detection. | **Yes (paired with blink-3d)** |
| 4 | [github-blogger-agent](https://github.com/sakethpilli007/github-blogger-agent) | Python (Flask + Gemini) | Flask app that generates AI-powered project reports / chat from any GitHub repo. | **Yes** |
| 5 | [personal-job-autofill](https://github.com/sakethpilli007/personal-job-autofill) | JavaScript (Chrome MV3) | 100% local Chrome extension filling job applications; zero network calls. | **Yes** |
| 6 | [data_science_experiments](https://github.com/sakethpilli007/data_science_experiments) | Python | No README yet. | **No — exclude until fleshed out** |
| 7 | [aviato-starthack-zwickroell](https://github.com/sakethpilli007/aviato-starthack-zwickroell) | — | Fork, no description. | **Decision needed — you pick.** Probably skip. |

**Senior project repo (pushed 2026-04-21):**
- **[`sakethpilli007/senior-project`](https://github.com/sakethpilli007/senior-project)** — 436-line evolutionary NN simulation (was 439; 3 ALL-CAPS comments at lines 171, 300, 308 stripped). Contains `main.py`, `README.md`, `requirements.txt`, `LICENSE` (MIT), `.gitignore`. Print statements (`"STARTED:"`, `"SIMULATION INITIALIZED"`) kept — they're prints, not comments.

**Research papers (abstracts only, no PDFs uploaded — per your instruction):**
1. **Elliptic Functions & their Properties** (Pilli & Chaudhri, April 2026) — deep-dive treatment, multi-page page on site.
2. **The Creation, Existence, Detection, and Effects of Gravitational Waves** (Pilli & Chaudhri, March 2026) — short abstract.
3. **Modelling the Effect of Medication on a Viral Illness** (Pilli, May 2023) — short abstract.
4. **Computationally Modeling the effect of Crystallographic Orientation on Surface Roughness of Silicon** (ASDRP, 2024) — short abstract.

All four get a "Read full paper — coming soon" disabled button.

**Experience / service material (from CV + LinkedIn):**
- Hathority intern ×2 (Jun–Aug 2023, Aug–Dec 2024): Boomi Flow, Groovy, Snowflake, ReleaseShield AI (placed 5th international in Boomi AI Hackathon), manuals rework
- ASDRP Lead Researcher (Mar–Sep 2024): team of 4, silicon crystallography w/ Quantum ESPRESSO + Prusa Slicer + XCrysDen
- ASDRP Seed Team (Jan–May 2024): 15-person project on dihedral twin boundaries in copper (OM/AFM/free energy calc)
- BASIS Student Panel (founder, raised $25K)
- Advanced Java Club (founded/ran)
- Tutoring, teacher assisting
- Cambridge Undergrad Academic Rep + Junior Member of the Faculty Board of Computer Science
- Cambridge Graphics Competition — 4th place (Lorentz Transform Visualizer)

**Certs (LinkedIn):** Oracle Java SE 8 Programmer (Associate), Certified Python Associate Programmer, Professional API Design, Oracle Foundations Associate (Java SE 8), plus Boomi Professional (from CV).

**Education (LinkedIn):**
- Cambridge CS, BA (Hons) — 2025 → Jun 2028 · Churchill College · currently ranked 3/41 in Jan 2026 exams
- Stanford Real Analysis — Jun–Aug 2024
- UCLA Summer (Math 170E/170S — Prob & Stats) — 2025
- BASIS Independent Fremont — Aug 2021–Jun 2025, High Honors, CS/Pure Maths/Physics
- Legend College Prep — AP Calc BC + AP Chem

---

## 1. Goals, constraints, and non-goals

### What this site must do
1. Present you as a Cambridge CS undergrad with strong math/physics/CS breadth.
2. Link each listed technical project to its actual GitHub repo.
3. Host research **abstracts only** — no paper PDFs. Elliptic functions gets a deep, math-heavy standalone page; the other three get compact abstracts.
4. Give a **Resume/CV** section with real anti-scraping (CAPTCHA) — one Resume (1-page, the `SAKETHPILLI.pdf`) and one full CV (longer version you'll prepare).
5. Offer **Contact**: LinkedIn button (redirect) + GitHub button (redirect) + Email via a contact form (no mailto: leak).
6. Include a Martial Arts section (you fill it in).
7. Include a **Beyond the Code** section (working name — see §1.3) covering Student Panel, Advanced Java Club, Tutoring, Teacher Assisting, Cambridge academic rep work.
8. Host free on GitHub Pages at `sakethpilli007.github.io` (or a custom domain if you want one).

### Non-goals (explicit)
- No elliptic functions paper listed in the public portfolio section.
- No uploaded research PDFs — abstracts + "coming soon" only.
- No paid hosting assumed (Cloudflare free tier is optional, see §7).
- No email address rendered on the page in plaintext (form only).
- No JS frameworks heavier than needed. Astro ships 0 JS by default.

### Section-name resolution
> **"non-technical" section → "Beyond the Code"**
>
> You said "don't call it non-technical, but I don't know what to call it." My default is **Beyond the Code**. Alternatives: **Service & Leadership**, **Community**, **People & Projects**, **Teaching, Building, Leading**. Pick whichever you prefer in §4.

---

## 2. Tech stack & architecture

### Chosen stack
- **Astro 4.x** (static site generator) — fits content-heavy sites, ships zero JS by default, perfect for MDX research pages (math + prose).
- **Tailwind CSS 3.x** — utility-first, small output with purging.
- **MDX** for the elliptic functions deep-dive page (mixes prose + math + custom components).
- **KaTeX** (via `remark-math` + `rehype-katex`) for math rendering — faster than MathJax, SSR-friendly.
- **TypeScript** for component props (optional but recommended).
- **GitHub Pages** for hosting, via GitHub Actions (`actions/deploy-pages@v4`).
- **Cloudflare Turnstile** (free, privacy-respecting) for the Resume/CV CAPTCHA gate.
- **Cloudflare Workers** + **R2** (free tiers cover this easily) to serve the PDFs with short-lived signed URLs. *(Alternative: client-side obfuscation-only; see §7.2.)*
- **Web3Forms** (free, static-site friendly) for the contact form backend. Alternatives: Formspree, Getform.

### Why Astro instead of plain HTML/CSS/JS
- The research abstracts (especially elliptic functions) are long-form — Markdown beats hand-rolled HTML.
- The "project card" pattern repeats — Astro components (`<ProjectCard .../>`) beat copy-pasted HTML.
- Astro islands let me add small interactive bits (e.g., the resume CAPTCHA widget) without pulling in a full React SPA.
- Zero JS by default means blazing-fast pages.

**Fallback:** If you prefer zero-framework, a plain `index.html` + `styles.css` + a handful of per-section HTML files is viable — the section specs in §3–§8 still apply, just without components. Decide before scaffolding (§10, phase 1).

### Repo layout (two repos, one domain)

```
github.com/sakethpilli007/sakethpilli007.github.io   ← the site itself
github.com/sakethpilli007/senior-project    ← new, created in phase 9
```

Astro source tree inside `sakethpilli007.github.io`:

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   ├── og-cover.png
│   ├── images/
│   │   ├── hero/...             (your headshot — if you want one)
│   │   ├── martial-arts/...     (you fill)
│   │   ├── projects/            (screenshots / GIFs per project)
│   │   └── research/            (figures for elliptic page)
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ResearchLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ResearchCard.astro
│   │   ├── TimelineItem.astro
│   │   ├── ContactForm.astro
│   │   ├── ResumeGate.astro      (Turnstile widget + fetch)
│   │   └── MathBlock.astro        (wrap KaTeX block)
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/             (one .mdx per project, collection)
│   │   │   ├── lorentz-boost-shader.mdx
│   │   │   ├── senior-project.mdx
│   │   │   ├── blink-3d.mdx
│   │   │   ├── blink-2d.mdx
│   │   │   ├── github-blogger-agent.mdx
│   │   │   └── personal-job-autofill.mdx
│   │   ├── research/             (one .mdx per paper)
│   │   │   ├── elliptic-functions.mdx       (LONG, deep-dive — see §6.2)
│   │   │   ├── gravitational-waves.mdx
│   │   │   ├── viral-illness.mdx
│   │   │   └── silicon-crystallography.mdx
│   │   └── beyond-the-code/      (one .mdx per entry)
│   │       ├── student-panel.mdx
│   │       ├── advanced-java-club.mdx
│   │       ├── tutoring.mdx
│   │       ├── teacher-assisting.mdx
│   │       └── cambridge-rep.mdx
│   ├── pages/
│   │   ├── index.astro           (single-page landing: hero → about → portfolio → research → beyond → martial-arts → resume → contact)
│   │   ├── research/
│   │   │   ├── index.astro
│   │   │   ├── elliptic-functions.astro    (rendered from MDX)
│   │   │   ├── gravitational-waves.astro
│   │   │   ├── viral-illness.astro
│   │   │   └── silicon-crystallography.astro
│   │   ├── resume.astro          (Turnstile-gated reveal)
│   │   └── 404.astro
│   └── styles/
│       └── global.css            (@tailwind base/components/utilities + KaTeX import)
└── README.md
```

Main vs. sub-pages: the site is **one long landing page** (with smooth-scroll anchors) **plus** dedicated routes for each research paper (since they're long-form) and `/resume` (since it's gated).

---

## 3. Section-by-section spec

The single-page landing is structured top-to-bottom:
1. **Hero** (name, tagline, primary CTAs) — §3.1
2. **About Me** — §3.2
3. **Portfolio** (technical projects) — §4
4. **Research** (cards linking to each paper page) — §6
5. **Beyond the Code** (service/leadership) — §5
6. **Martial Arts** — §5.6
7. **Resume / CV** — §7
8. **Contact** — §8

Order reasoning: tech portfolio first (most visitors want that), research next (closely related), then the human side (Beyond the Code + Martial Arts), then resume/contact at the bottom as conversion points.

### 3.1 Hero
- Full-viewport section with centered content.
- **Headline:** "PR Saketh" (formal name, used consistently in nav, page titles, meta tags, and Portfolio author lines).
- **Greeting line (first-person):** "Hi — I'm Saketh." (used in About Me, 404 copy, and anywhere the site speaks as "I".)
- **Sub-headline:** "Computer Science at Churchill, Cambridge. Building at the intersection of theory, systems, and math." (editable — this is a placeholder you can rewrite).
- **Three inline badge pills:** `Cambridge CS` · `Formal Methods` · `Mathematical Physics`
- **Primary CTAs** (two buttons): `See my work →` (anchor to Portfolio) · `Download CV` (anchor to Resume).
- **Icon row:** GitHub, LinkedIn, Email (opens contact form, no mailto).
- **Background:** subtle animated gradient OR a still screenshot of the Lorentz shader (since it's already your flagship). I recommend the Lorentz shader still — gives instant visual identity.

### 3.2 About Me
Two-column (stack on mobile):
- Left (2/3 width): 2–3 short paragraphs. Draft:
  > Hi — I'm Saketh. I'm a first-year Computer Science undergraduate at Churchill College, University of Cambridge, currently ranked 3 out of 41 in my cohort's January exams. Before Cambridge I graduated from BASIS Independent Fremont with High Honors in Computer Science, Pure Mathematics, and Physics.
  >
  > My short-term interests lie in formal methods. Longer-term, I'm drawn to quantum information, theoretical computer science, and mathematical education. I've done research in gravitational waves, elliptic functions, and silicon crystallography, and built things ranging from real-time relativistic shaders to evolutionary-neural-network ecosystems to a webcam-blink-controlled stealth game.
  >
  > Outside of CS I practice martial arts, teach, and help run student governance.
- Right (1/3 width): vertical facts list:
  - 📍 Cambridge, UK (term) / Fremont, CA (holidays)
  - 🎓 BA Hons CS, Churchill College — 2025 → 2028
  - 🏆 4th · Cambridge Graphics Competition 2026
  - 🥇 3/41 · Cambridge CS Tripos Jan 2026
  - 📜 5th int'l · Boomi AI Hackathon (ReleaseShield AI)
  - 💰 $25K raised · BASIS Student Panel

Source text from your CV + LinkedIn. **You should rewrite for voice before launch.**

---

## 4. Portfolio section

### 4.1 Layout
Grid of cards — 2-column on desktop, 1-column on mobile. Each card:

```
┌────────────────────────────────────────┐
│ [screenshot / GIF — 16:9]              │
├────────────────────────────────────────┤
│ PROJECT NAME              [Tags]       │
│ One-line pitch.                        │
│ 3–5 line description.                  │
│ ─────────────────────────────────      │
│  [GitHub →]  [Live demo →]  [Writeup →]│
└────────────────────────────────────────┘
```

Card source: each MDX file under `src/content/projects/*.mdx` has frontmatter `{title, pitch, tags, github, demo, image, order}` — `ProjectCard.astro` reads it.

### 4.2 Exact project list (from your real GitHub, in display order)

**1. Lorentz Boost Grid** — `lorentz-boost-shader` *(headline project)*
- Pitch: "A real-time GLSL shader that ray-traces a 3D wireframe grid through a Lorentz transformation, visualizing relativistic length contraction per-pixel."
- Description: "Built for the Cambridge Graphics Competition 2026 (4th place). Analytically solves for the intersection of camera rays with a Lorentz-boosted grid — no mesh, no rasterization, all math. Rapidity oscillates along the X-axis; γ drives both the contraction and an ambient color glow. Runs on Shadertoy."
- Tags: `GLSL` · `Graphics` · `Relativity` · `Shadertoy`
- Links: GitHub → `github.com/sakethpilli007/lorentz-boost-shader` · Live → `shadertoy.com/view/tcGcRR`
- Image: animated GIF of the shader in action (grab from Shadertoy).

**2. Senior Project: Altruism Engine** — `senior-project-altruism` *(new repo — I'll push it)*
- Pitch: "A batched-PyTorch evolutionary neural-network ecosystem studying how altruism emerges under resource scarcity."
- Description: "300 agents across 3 species and 10 predators, each with a 10-hidden-layer feed-forward network (batched with `torch.bmm`), evolve over 3000 generations. Agents see food gradients, neighbor positions, and predator distances, and output cardinal-direction moves. Two modes — altruism (split food proportional to size) and steal (largest-agent winner-takes-all) — let me compare selection pressures. Top 10% breed with mutation rate 0.1."
- Tags: `PyTorch` · `Evolutionary Computation` · `Agent Simulation`
- Links: GitHub → `github.com/sakethpilli007/senior-project` · Writeup → coming soon (if you want to add a blog post later).
- Image: scatter-plot GIF of agent populations over generations.

**3. BLINK 3D** — `blink-3d`
- Pitch: "First-person stealth/horror game where your real blinks control reality."
- Description: "Open your eyes → the world freezes, you turn to stone. Close them → you move freely, enemies hunt you. OpenCV tracks your blinks from the webcam; Panda3D renders the 3D dungeon. Five enemy types, procedural layouts, perk system, three difficulty presets, three mutators."
- Tags: `Python` · `Panda3D` · `OpenCV` · `GameDev`
- Links: GitHub → `blink-3d` · See also `blink-2d`.
- Image: in-game screenshot + a demo GIF of the blink mechanic.

**4. BLINK 2D** — `blink-2d`
- Pitch: "2D prototype of the BLINK mechanic — top-down stealth maze in Pygame."
- Description: "The original version before BLINK 3D. Procedural houses across 3 floors, keyboard fallback for webcam-less play, crafting wheel, AoE petrify pulse, enemy AI with suspicion buildup. Seven-level guided tutorial."
- Tags: `Python` · `Pygame` · `OpenCV` · `GameDev`
- Links: GitHub → `blink-2d`.

**5. GitHub Blogger Agent** — `github-blogger-agent`
- Pitch: "Flask app that generates AI-powered project reports and a repo-aware chat assistant for any GitHub repo."
- Description: "Analyzes up to 90 days of commits, categorizes them, feeds the actual diffs (not just messages) to Gemini 1.5 Flash, and renders a stakeholder-ready report with a commit heatmap and language chart. Also spins up a 'Dev-GPT' chat grounded in README + commit history. Jinja2 + `markdown-it-py` for rendering."
- Tags: `Python` · `Flask` · `Gemini` · `GitHub API`
- Links: GitHub → `github-blogger-agent`.

**6. Personal Job Autofill** — `personal-job-autofill`
- Pitch: "100% local Chrome extension (MV3) that fills job application forms — zero network requests."
- Description: "Multi-profile support, custom keyword→value mappings, a Fill Report tab showing filled/skipped/unmatched fields, Cmd-Shift-F shortcut, and a badge counter that shows detected fields per page. Fires React/Vue-safe `focus`/`input`/`change`/`blur` events so modern form frameworks register the fill."
- Tags: `JavaScript` · `Chrome Extension` · `MV3`
- Links: GitHub → `personal-job-autofill`.

**Explicitly not included:**
- `data_science_experiments` — empty, no README → hide until you flesh it out.
- `aviato-starthack-zwickroell` — fork of hackathon code, no description → hide unless you want to write up your actual contribution there.
- **Research papers are NOT listed under Portfolio.** They live under Research (§6).

### 4.3 Tagging convention
Every card has 2–4 tag pills, color-coded by category:
- Language tags (GLSL, Python, JavaScript): slate
- Domain tags (Graphics, ML, GameDev, Chrome Extension): emerald
- Methodology tags (Relativity, Evolutionary Computation, OpenCV): amber

---

## 5. Beyond the Code section (leadership / service / martial arts)

**Working title:** "Beyond the Code" — you can rename to "Service & Leadership", "Community", "Teaching, Building, Leading", or whatever fits.

### 5.1 Layout
Vertical timeline-ish list. Each entry is a small card, no images required (optional):
```
┌─────────────────────────────────────────────┐
│ ROLE · ORG · DATE RANGE                     │
│ Short paragraph (2–4 sentences).            │
│ Optional: [link] or [bullet highlights].    │
└─────────────────────────────────────────────┘
```

### 5.2 Entries (five sub-cards)

**Student Panel — Founder, BASIS Independent Fremont (2023–2025)**
- "Founded the school's first Student Panel to represent student interests to administration. Raised $25,000 through drives and school-wide events for [beneficiaries / causes — fill]. Coordinated weekly sessions and grew membership to [N — fill]." (Placeholder numbers bracketed so you can finalize.)

**Advanced Java Club — Founder & Lead, BASIS (20XX–2025)**
- "Founded and led the Advanced Java Club — a weekly deep-dive into topics beyond the AP CSA curriculum: concurrency, generics, JVM internals, and algorithm design. [N students attended on average.] Culminating projects included [short list]." (Fill the bracketed bits.)

**Peer Tutoring — BASIS Independent Fremont (20XX–2025)**
- "Tutored peers in Calculus BC, Physics C (Mech + E&M), and CSA Java. Built worked-example packets and ran weekly exam-prep sessions for [N students]." (Fill.)

**Teacher Assistant — BASIS (20XX–2025)**
- "TA for [course names]. Graded problem sets, held weekly office hours, and led review sessions before exams." (Fill.)

**Undergraduate Academic Rep + Junior Member of Faculty Board — Cambridge CS (2025–)**
- "Elected by my cohort to represent undergraduates on the Faculty Board of Computer Science. Responsibilities include course-content feedback to faculty, staff-student committee liaison, and cohort advocacy on assessment and welfare."

### 5.3 About the placeholders
I've **not fabricated numbers or dates I don't know** — every bracketed `[N]` or `[course]` is a slot you fill in before publish. Do not let me guess those.

### 5.4 Optional entries to consider adding (you decide)
- ASDRP Lead Researcher (this is both research and leadership — could be listed in Research instead; I put it in Research in §6).
- Boomi AI Hackathon 5th place (could be a portfolio note OR a Beyond-the-Code award card).

### 5.5 Section CTA
At the bottom: a neutral link "Have a role I'd be a fit for? [Contact me →](#contact)".

### 5.6 Martial Arts sub-section

Separate full-width section below Beyond the Code, because it's tonally different from service/leadership:

```
┌───────────────────────────────────────────────┐
│  MARTIAL ARTS                                 │
│  ────────────────────                         │
│  [Photo left] │ [Your paragraph right]        │
│  [Photo 2]    │ (You fill in style, rank,     │
│  [Photo 3]    │  years, dojo/school, goals.)  │
│  [Photo grid or single hero shot]             │
└───────────────────────────────────────────────┘
```

- Markdown file `src/content/beyond-the-code/martial-arts.mdx` you edit directly.
- Frontmatter: `{style, years, rank, school, highlights[]}`.
- Photos go in `public/images/martial-arts/*`.
- If you want video embeds, use a `<video>` tag pointing at a file in `public/` (no third-party embeds needed).

Explicit: **this is your section to write**, the plan reserves the space, styles, and frontmatter contract.

---

## 6. Research section

### 6.1 Layout
Top-level: 4 cards, same grid as Portfolio. Each card:
- Title · Co-authors · Date · One-line abstract
- Tag pills (Mathematics / Physics / Materials / Biology-Adjacent)
- `Read more →` button → dedicated page
- `Read full paper` button — **disabled**, shows tooltip "Coming soon"

Ordering: Elliptic Functions first (most recent + deepest), then Gravitational Waves, then Silicon, then Viral Illness (oldest).

### 6.2 Elliptic Functions — deep-dive treatment

**Dedicated page:** `/research/elliptic-functions`
**File:** `src/content/research/elliptic-functions.mdx`

This page is **not a summary** — it's an expository article at a reading level between a Cambridge Part IB supervision and an undergraduate textbook chapter, built in sections so a visitor can dip in anywhere. Rough length target: 2,500–4,000 words with math.

**Proposed section structure:**

1. **Why elliptic functions matter**
   Motivation from the arc length of an ellipse, pendulum motion, and the cubic / quartic integrals that give the family its name. End with the question this paper answers: *what is the full algebraic structure of doubly-periodic meromorphic functions?*

2. **The lattice and the torus**
   Define Λ = Zω₁ + Zω₂ ⊂ ℂ with ω₂/ω₁ ∉ ℝ. Explain why double-periodicity forces the domain to factor through the torus ℂ/Λ, and why the torus is compact. Compactness is the key — it's what makes Liouville's theorem bite.

3. **Liouville's theorems for elliptic functions**
   State the three theorems: (i) a holomorphic elliptic function is constant; (ii) the sum of residues in a fundamental period parallelogram is zero; (iii) an elliptic function of order m takes every value exactly m times. Sketch each proof in one paragraph.

4. **The Weierstrass ℘-function — construction**
   Define
   ℘(z; Λ) = 1/z² + Σ_{ω∈Λ\{0}} [1/(z−ω)² − 1/ω²]
   Explain why you need the subtraction for convergence. Show ℘ is even and Λ-periodic.

5. **The ℘ differential equation**
   Derive
   ℘′(z)² = 4℘(z)³ − g₂ ℘(z) − g₃
   where g₂ = 60 Σ 1/ω⁴ and g₃ = 140 Σ 1/ω⁶.
   Interpret this as saying the map z ↦ (℘(z), ℘′(z)) parameterizes the elliptic curve y² = 4x³ − g₂x − g₃.

6. **The representation theorem**
   E(Λ) = ℂ(℘, ℘′). Every elliptic function on Λ is a rational function of ℘ and ℘′.
   One paragraph of proof outline (even + odd decomposition, reduce by poles).

7. **The j-invariant and modular group**
   Define Δ = g₂³ − 27g₃² and j = 1728 g₂³/Δ. State the action of PSL(2, ℤ) on the upper half-plane, and the fact that j: ℍ/PSL(2,ℤ) → ℂ is a bijection — so two lattices define isomorphic elliptic curves iff they have the same j.

8. **Jacobi elliptic functions**
   Define sn, cn, dn via inversion of the incomplete elliptic integral of the first kind, state the addition formulas, the Pythagorean-like identities (sn² + cn² = 1, k² sn² + dn² = 1), and their periods (4K, 2K + 2iK′). Show how they degenerate to sin/cos as k → 0 and sech/tanh as k → 1.

9. **Applications**
   Three worked examples:
   (a) **Large-amplitude pendulum** — exact solution θ(t) = 2 arcsin(k·sn(ωt, k)), not the small-angle approximation.
   (b) **KdV cnoidal waves** — the one-soliton limit of periodic traveling-wave solutions expressed via cn².
   (c) **Arc length of a lemniscate** — the original motivation from Gauss.

10. **Companion Python verification**
   A short code snippet (syntax-highlighted, collapsible) using `mpmath` or `scipy.special` to numerically verify ℘'² = 4℘³ − g₂℘ − g₃ at a handful of points. Keep it under 30 lines. Link to `data_science_experiments` if/when you push the script there.

11. **Further reading & references**
   Short list: Ahlfors, *Complex Analysis*; Silverman, *The Arithmetic of Elliptic Curves*; Lang, *Elliptic Functions*; plus your 27 references from the paper.

**Tech notes for this page:**
- Math via KaTeX (`remark-math` + `rehype-katex`).
- Section anchor sidebar (sticky TOC on desktop, collapsed on mobile).
- All code blocks use Astro's built-in Shiki for syntax highlighting.
- Companion figures (torus diagram, fundamental domain for PSL(2,Z), sn/cn plots) as SVGs in `public/images/research/elliptic/`.

### 6.3 Short abstracts (other three papers)

**Gravitational Waves** — `/research/gravitational-waves`
- Title: "The Creation, Existence, Detection, and Effects of Gravitational Waves"
- Co-authors: Pilli & Dr. Anuj Chaudhri · BASIS Independent Fremont · March 2026
- Abstract (draft, ~180 words):
  > This paper develops the theory of gravitational waves from first principles. We begin with the Einstein field equations and linearize the metric around Minkowski space, obtaining the tensor wave equation □h̄ᵤᵥ = −16πG/c⁴ · Tᵤᵥ. Adopting the transverse-traceless gauge, we reduce the ten independent components of the metric perturbation to the two physical polarization modes h₊ and h×. We derive Einstein's quadrupole formula,
  > P = (G / 5c⁵) ⟨Q⃛ⁱʲ Q⃛ᵢⱼ⟩,
  > as the leading-order expression for gravitational wave luminosity from a slowly-moving source, and apply it to binary-inspiral systems. The second half of the paper covers detection: the geodesic-deviation interpretation of interferometer response, the Michelson configuration at LIGO, and the matched-filtering pipeline used to extract signals from detector noise. We close with a brief survey of modified-gravity theories (Brans-Dicke, f(R), Horndeski) and how their predictions diverge from general relativity in the strong-field and early-universe regimes.
- Tags: `General Relativity` · `Gravitational Waves` · `Differential Geometry`
- `Read full paper → coming soon` (disabled)

**Modelling the Effect of Medication on a Viral Illness** — `/research/viral-illness`
- Co-author: Pilli · May 2023 (independent research project)
- Abstract (draft, ~150 words):
  > This paper builds a numerical model of the interaction between a viral illness and a hypothetical medication, aimed at finding the optimal dosing regime. Using Euler's method in Python, I integrate a coupled system for viral load, medication concentration, and renal clearance, initialized with 10,000 viral particles and a 10¹² death threshold. An Intermediate Value Theorem argument over the simulation's output space yields a therapeutic dosing window of 10.2–10.3 million particles tolerated per iteration, corresponding to an optimal continuous dosing rate of approximately 24.25 µg/hour, given a kidney distillation rate of 2.5%/hour. The paper includes three self-contained Python programs: one simulating the untreated illness, one exploring fixed-dose regimes, and one performing the IVT-based optimal-dose search. Written when I was 16; the structure is exploratory rather than rigorous, and the model deliberately elides pharmacokinetic complexity beyond the first-order clearance term.
- Tags: `Numerical Methods` · `Pharmacokinetics` · `Python`
- `Read full paper → coming soon`

**Silicon Crystallography** — `/research/silicon-crystallography`
- Title: "Computationally Modeling the Effect of Crystallographic Orientation on Surface Roughness of Silicon"
- Co-authors: Pilli (lead) + 3 ASDRP researchers · March–September 2024
- Abstract (draft, ~140 words):
  > This ASDRP project investigates how silicon's surface roughness depends on the crystallographic orientation of the cut, using ab-initio calculations in Quantum ESPRESSO supplemented by 3D visualization in XCrysDen and Prusa Slicer. We construct unit-cell models for the (100), (110), and (111) low-index surfaces, relax them to their minimum-energy configurations under a plane-wave pseudopotential approximation, and compute surface-energy differences and atomic displacement patterns. Parallel to the computational work, we prepare analogous silicon samples in the lab and compare simulated roughness profiles to measured profilometry data. I led a team of four researchers, scoping the project, dividing the theoretical (Hamiltonian construction, pseudopotential selection) and practical (XCrysDen setup, slicing workflow) work streams, and compiling the final report.
- Tags: `DFT` · `Materials Science` · `Quantum ESPRESSO`
- `Read full paper → coming soon`

### 6.4 Research section — design notes
- Each research page uses `ResearchLayout.astro` with a consistent header (title, authors, date, institution) and a "← Back to Research" link.
- The in-depth elliptic page is clearly visually heavier (wider reading column, sidebar TOC) than the three abstract pages.
- No external paper PDFs linked. The "Read full paper" button is a styled-disabled `<button>` with `aria-disabled="true"`, not an `<a>` — this prevents screen-readers from offering a non-existent link.

---

## 7. Resume / CV section (CAPTCHA-gated)

### 7.1 UX flow
1. Visitor clicks `Resume / CV` nav link → scrolls to in-page section OR goes to `/resume`.
2. Section shows two placeholders:
   - **Resume** (1-page condensed) — currently `SAKETHPILLI.pdf` with your January 2026 content.
   - **Full CV** (longer, detailed) — you'll author this; see §7.4 for contents.
3. Each has an `[ Unlock Download ]` button. Clicking it does not download yet.
4. A Cloudflare Turnstile widget appears (invisible or checkbox mode — configurable).
5. On successful Turnstile completion, the button swaps to `[ Download PDF ]`, which hits a Cloudflare Worker endpoint.
6. The Worker verifies the Turnstile token server-side, then issues a short-lived (5-minute) signed R2 URL and returns a 302 redirect.
7. Browser downloads the PDF. URL expires after 5 minutes — no meaningful hot-linking, no unauthenticated scraping.

### 7.2 Implementation tier — LOCKED: Tier A

> **Decision (2026-04-21):** User delegated the choice. Going with **Tier A** — real server-side anti-scraping. Tier B is documented below only as reference / fallback if the Cloudflare dependency becomes a problem.

**Tier A — Real anti-scraping (chosen)**
- **Frontend:** Turnstile widget rendered via the official `<iframe>` script. Sitekey public, stored in `.env`.
- **Backend:** Cloudflare Worker at e.g. `resume.sakethpilli007.workers.dev/download?doc=resume|cv`. Uses `CF_TURNSTILE_SECRET` to verify the token against `https://challenges.cloudflare.com/turnstile/v0/siteverify`. On success, constructs a pre-signed URL for the R2 object and redirects.
- **Storage:** Cloudflare R2 bucket `sakethpilli-documents` holding `resume.pdf` and `cv.pdf`, private.
- Cost: free tier easily covers this (Workers free: 100k requests/day; R2: 10 GB storage, 1M Class A ops/month).

**Tier B — Static-only deterrent (not chosen — reference only)**
- No Worker, no R2. PDFs live in `public/resume.pdf` and `public/cv.pdf` (served by GitHub Pages).
- URL obfuscated in JS; revealed only after the Turnstile widget succeeds (client-side verification only, so trivially bypassable by a motivated scraper — but will stop casual bots).
- Trade-off: **any bot with a headless browser can get the PDFs anyway.** This is a deterrent, not a defense. We're not using this.

### 7.3 Wiring Turnstile + Worker — checklist
- [ ] Cloudflare account created.
- [ ] Domain on Cloudflare (can be the custom domain you point at GitHub Pages, or a `.workers.dev` subdomain).
- [ ] Turnstile site set up; sitekey + secret generated.
- [ ] R2 bucket created, 2 PDFs uploaded, private.
- [ ] Worker deployed with the verify-and-redirect handler (see §7.5 for the handler skeleton).
- [ ] CORS configured on the Worker to allow origin `https://sakethpilli007.github.io`.
- [ ] Frontend `.env`: `PUBLIC_TURNSTILE_SITEKEY=…`.
- [ ] Worker `.env`: `CF_TURNSTILE_SECRET=…`, `R2_BUCKET=sakethpilli-documents`.

### 7.4 What goes in each PDF
**Resume (1 page, already drafted as `SAKETHPILLI.pdf`)** — keep current content, revise once more before upload.

**Full CV (to be drafted)** — a longer version that expands every bullet:
- Education: add supervision topics you've loved, course list by year (Part IA papers with exam marks if you want), external courses (Stanford Real Analysis, UCLA Prob/Stats) with topic coverage.
- Research: full abstracts of each paper inline (not just titles), methods used, supervisors.
- Experience: each Hathority role in detail (2–3 bullets per instead of 1), ASDRP roles in detail, project outcomes.
- Teaching / Service: every Beyond-the-Code entry in full (not just titles).
- Awards & Certifications: all of them, with dates and issuing bodies.
- Talks / Presentations (if any): list.
- Publications / Manuscripts (your four research papers, with authors + date).
- Technical skills: language/tool/domain breakdown (programming languages, specialized tools like Quantum ESPRESSO, math subjects).
- References: "Available on request" (or list 2–3 with permission).
- Target length: 3–5 pages.

### 7.5 Worker handler skeleton (pseudo-code for §10 phase 7)
```js
// Cloudflare Worker (deploy via wrangler)
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method !== "POST") return new Response("Method not allowed", {status: 405});
    const { token, doc } = await req.json();
    if (!["resume", "cv"].includes(doc)) return new Response("Bad doc", {status: 400});
    // Verify Turnstile
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {"content-type": "application/x-www-form-urlencoded"},
      body: `secret=${env.CF_TURNSTILE_SECRET}&response=${token}`,
    }).then(r => r.json());
    if (!verify.success) return new Response("Turnstile failed", {status: 403});
    // Issue short-lived R2 signed URL (5 min)
    const obj = await env.R2_BUCKET.get(`${doc}.pdf`);
    if (!obj) return new Response("Not found", {status: 404});
    return new Response(obj.body, {
      headers: {
        "content-type": "application/pdf",
        "content-disposition": `attachment; filename="${doc}.pdf"`,
        "cache-control": "no-store",
      }
    });
  }
};
```
(Alternative: return a signed URL and have the browser follow it; above streams the PDF directly through the Worker, simpler.)

---

## 8. Contact section

### 8.1 Layout
Three buttons side-by-side on desktop, stacked on mobile:
- **GitHub** → `https://github.com/sakethpilli007` (opens new tab, `rel="noopener"`)
- **LinkedIn** → `https://linkedin.com/in/pr-saketh007` (opens new tab, `rel="noopener"`)
- **Email me** → opens the contact form inline (no mailto, no address shown anywhere in the DOM)

Below the buttons: the contact form itself, always rendered but visually secondary until clicked.

### 8.2 Contact form spec
Fields (all required unless noted):
- **Name** (text, max 100)
- **Email** (email, max 200) — validated with a regex client-side + HTML5 `type="email"`
- **Subject** (text, max 150)
- **Message** (textarea, max 3000)
- **Honeypot** `website` field — CSS-hidden; any submission with a non-empty `website` is silently dropped.
- **Cloudflare Turnstile** widget — same one as §7, different sitekey OK or shared.
- Submit button.

### 8.3 Submission backend
**Web3Forms** (recommended):
- Free tier: unlimited forms, 250 submissions/month.
- POST to `https://api.web3forms.com/submit` with `access_key=YOUR_KEY` + form fields.
- No account for the visitor, no backend hosted by you.
- Confirmation email to `prsaketh360@gmail.com`.
- Optional: email auto-reply to visitor.

**Alternative:** Formspree (free tier: 50/month, which is probably enough for a personal site).

### 8.4 States
- **idle** → empty form, submit enabled once Turnstile + required fields pass.
- **submitting** → spinner, submit disabled.
- **success** → "Thanks, I'll get back to you within a few days." Form clears.
- **error** → "Something went wrong. Try again, or email me directly at …" — in the error case only, reveal the email via `aria-live` announcement (so a real user in a failure state can still reach you without defeating the anti-scraping intent for the happy path).

### 8.5 Honeypot + Turnstile rationale
- Honeypot catches dumb bots that fill every field.
- Turnstile catches smart bots that don't.
- Two layers = very low false-positive rate for humans, very low throughput for scrapers.

---

## 9. Senior Project Altruism — push workflow

### 9.1 What you uploaded
`senior_project_altruism_on.py`, 439 lines, a batched PyTorch evolutionary NN multi-species sim. Three ALL-CAPS comments need stripping per your instruction.

### 9.2 Exact comments to strip
All three are `#` comments, not docstrings or print strings. Print statements like `"STARTED:"` and `"SIMULATION INITIALIZED"` stay — you explicitly distinguished comments from prints.

| Line | Current | Action |
|------|---------|--------|
| 171 | `# NEW: Restrict movement to cardinal directions (up, down, left, right)` | **delete the whole line** |
| 300 | `# ALTRUISM MODE: Split food based on size ratios` | **delete the whole line** |
| 308 | `# STEAL MODE: Only largest agents get food, but if there are multiple largest, no one gets it` | **delete the whole line** |

I will do one more automated pass grepping the file for any comment line matching `#\s*[A-Z ]{5,}` (5+ consecutive uppercase letters in a comment) before pushing, to catch anything the earlier scan missed. Any hits get reviewed with you before deletion — not auto-killed.

### 9.3 Files to add to the new repo
- `main.py` (renamed from `senior_project_altruism_on.py` after stripping)
- `requirements.txt` — just `torch`, `numpy`, `matplotlib`
- `README.md` — I'll draft (sections: Abstract, How it works, Constants, Running, Results) using your `Senior Project Abstract.pdf` as source
- `.gitignore` — standard Python
- `LICENSE` — MIT (or your preference — ask before pushing)
- `results/` — optional, if you have plots to commit

### 9.4 Push checklist
- [ ] Create new empty repo `github.com/sakethpilli007/senior-project` (public).
- [ ] `git init` locally in a clean directory.
- [ ] Copy the stripped `main.py` in.
- [ ] Write `README.md` (see §9.3 content).
- [ ] `git add -A && git commit -m "Initial commit: Senior Project — Altruism Engine"`.
- [ ] `git remote add origin https://github.com/sakethpilli007/senior-project.git`.
- [ ] `git push -u origin main`.
- [ ] Add repo URL to Portfolio card frontmatter.

### 9.5 Authentication note — LOCKED: I push
> **Decision (2026-04-21):** I'll push the repo. At Phase 9 kickoff I'll ask you to generate a **fine-grained PAT, scoped to `repo` + `workflow`, expiring in 7 days, limited to a single repository you pre-create** (`sakethpilli007/senior-project`). You paste it once; I push; you revoke it immediately after. **Do not reuse that PAT anywhere else, and do not let it live longer than 7 days.**

Exact steps when we get there:
1. You create the empty public repo `github.com/sakethpilli007/senior-project` in the UI (nothing inside — no README, no license, no .gitignore).
2. You generate a fine-grained PAT: Settings → Developer settings → Personal access tokens → Fine-grained → "Only select repositories" → pick only `senior-project-altruism` → permissions: `Contents: Read and write`, `Workflows: Read and write` → expires in 7 days.
3. You paste the PAT in chat (I'll treat it as one-shot).
4. I push via `https://<PAT>@github.com/sakethpilli007/senior-project.git`.
5. I confirm push success.
6. **You revoke the PAT immediately** (Settings → Developer settings → tokens → Revoke).

---

## 10. Phased build order (dependencies explicit)

Each phase maps to one of the 10 tasks already in your task list.

**Phase 1 — Scaffold (Task #1)**
- Decide: Astro vs. plain HTML/CSS/JS. (Recommend Astro.)
- `npm create astro@latest` · pick minimal template.
- Install Tailwind via `@astrojs/tailwind`.
- Install `@astrojs/mdx`, `remark-math`, `rehype-katex`.
- Create `BaseLayout.astro`, `Nav.astro`, `Footer.astro` shells.
- Create `.github/workflows/deploy.yml` using `actions/deploy-pages@v4`.
- Push to `sakethpilli007.github.io` repo (must be named exactly that for Pages to serve at the root).
- Confirm live at `https://sakethpilli007.github.io/`.
- **Output:** blank site with nav + footer, deploys on every push to main.

**Phase 2 — Hero + About (Task #2)**
- Write `Hero.astro` + `About.astro`.
- Placeholder text from §3.1–3.2, you revise for voice.
- Add the social/CTA icon row (no Resume gate yet, just placeholder buttons).
- **Depends on:** Phase 1.

**Phase 3 — Portfolio cards (Task #3)**
- Create the content collection `src/content/projects/`.
- Write one MDX per project per §4.2.
- Write `ProjectCard.astro` consuming frontmatter.
- Wire into `/#portfolio`.
- Grab 6 screenshots / GIFs (I can describe what to capture, you capture).
- **Depends on:** Phase 1. Note: Phase 9 pushes the senior-project repo — its card can be built with a placeholder link and filled in after Phase 9.

**Phase 4 — Beyond the Code (Task #4)**
- Content collection `src/content/beyond-the-code/`.
- Five MDX entries per §5.2.
- `TimelineItem.astro` component.
- **Depends on:** Phase 1. You fill bracketed numbers before publish.

**Phase 5 — Martial Arts (Task #5)**
- Single MDX file.
- Layout scaffold, photos, frontmatter.
- **Depends on:** Phase 1. You fill in content + photos.

**Phase 6 — Research (Task #6)**
- Content collection `src/content/research/` with 4 MDX files.
- 3 short (gravitational-waves, viral-illness, silicon).
- 1 long deep-dive (elliptic-functions) per §6.2 — written as proper expository piece with KaTeX math + SVG figures.
- `ResearchLayout.astro` with sidebar TOC for the long one.
- Research section on landing page links to each `/research/*` page.
- **Depends on:** Phase 1 (and KaTeX integration).

**Phase 7 — Resume/CV gate (Task #7)**
- Cloudflare account setup.
- Turnstile site + sitekey.
- R2 bucket + upload PDFs.
- Worker deployed via `wrangler`.
- `ResumeGate.astro` island component (Astro island with `client:load`).
- `/resume` page.
- Full CV PDF authored (you do this part; I can draft the text, you polish).
- **Depends on:** Phase 1. **Requires Cloudflare credentials from you.**

**Phase 8 — Contact form (Task #8)**
- Web3Forms account + access key.
- `ContactForm.astro` + honeypot + Turnstile.
- `/` Contact section anchor.
- Test: submit from a real email, confirm arrival at `prsaketh360@gmail.com`.
- **Depends on:** Phase 1. Can share the Turnstile sitekey with Phase 7.

**Phase 9 — Senior Project push (Task #9)**
- Strip the three ALL-CAPS comments per §9.2.
- Run the extra safety scan per §9.2.
- Draft README per §9.3.
- Create new GitHub repo.
- Push.
- Update the Portfolio card with the final repo URL.
- **Depends on:** nothing about the site — can run in parallel with Phases 2–8.

**Phase 10 — SEO / a11y / perf / launch (Task #10)**
- `<meta>` tags: `description`, `og:title`, `og:description`, `og:image`, `twitter:card`.
- `public/robots.txt` + `public/sitemap.xml` (via `@astrojs/sitemap`).
- Lighthouse pass: target 100/100/100/100.
- axe-core accessibility scan: no critical violations.
- Check all external links open in new tab with `rel="noopener noreferrer"`.
- Image optimization (Astro's built-in `<Image>`).
- Keyboard navigation test.
- Screen reader spot-check (VoiceOver).
- Custom domain setup (optional): purchase `sakethpilli.com` (or similar), add CNAME.
- Launch.
- **Depends on:** Phases 2–9.

### 10.1 Timeline estimate
If you're available for feedback within 24h turnaround on each phase:
- Phase 1: ~1 session
- Phases 2–3: ~2 sessions (content-heavy)
- Phases 4–5: ~1 session (mostly templating; you'll fill content separately)
- Phase 6: ~3 sessions (elliptic deep-dive is the heavy lift)
- Phase 7: ~2 sessions (Cloudflare setup + testing)
- Phase 8: ~1 session
- Phase 9: ~1 session
- Phase 10: ~1 session

Total: ~12 sessions, spread over maybe 2–3 weeks wall-clock.

---

## 11. Decisions — status

**Resolved (2026-04-21):**
1. ~~Astro or plain HTML?~~ → **Still open.** (My recommendation: Astro.)
2. ~~"Beyond the Code" name~~ → **Confirmed: "Beyond the Code".** ✓
3. ~~Resume gate~~ → **Tier A (Cloudflare Worker + R2).** User delegated; locking in the real anti-scraping option since Tier B doesn't meet the stated "don't get scraped" bar. ✓
4. ~~Senior project push~~ → **I push, via a short-lived PAT the user provides at Phase 9.** ✓
5. ~~Public name~~ → **"PR Saketh" for formal site copy (nav, hero headline, meta tags, Portfolio author line).** First-person copy uses **"Saketh"** (e.g., "Hi! My name is Saketh …"). ✓

**Still blocking:**
1. **Astro vs. plain HTML/CSS/JS?** — Phase 1 can't start until this is resolved.

**Non-blocking (decide during the build):**
- Custom domain (e.g., `sakethpilli.com`) vs. `sakethpilli007.github.io`.
- Hero background: Lorentz shader still, or animated gradient.
- Include the `aviato-starthack-zwickroell` repo in Portfolio (current plan: skip).
- Include ASDRP Seed Team (dihedral twin boundaries in copper) as a 5th research item.
- Add a blog later.

---

## 12. Open risks & mitigations

- **Scraper bypasses Turnstile anyway.** Mitigation: Tier A makes this economically unattractive but not impossible. If you get scraped anyway, add rate limiting at the Worker (10 requests per IP per hour via Cloudflare KV counter).
- **You don't have time to finish the elliptic deep-dive.** Mitigation: the page gracefully truncates — the first three sections alone (~500 words, §6.2 items 1–3) are a usable "abstract-plus" that you can ship immediately and flesh out later.
- **GitHub Pages custom-domain SSL takes time to provision.** Mitigation: if using a custom domain, allow 24–48h for the Let's Encrypt cert to propagate after DNS setup.
- **Turnstile widget blocked by uBlock / strict privacy users.** Mitigation: the contact form's error path in §8.4 still reveals the email. Resume gate: add a fallback "email me for the CV" message below the button if Turnstile fails to load.
- **Cloudflare R2 egress cost concerns.** Mitigation: R2 has no egress fees, unlike S3. This was the main reason to pick R2.
- **LinkedIn slug change.** Mitigation: the LinkedIn URL lives in one config file (`src/config.ts`), not sprinkled throughout — change in one place.

---

## 13. Appendix — single config file

To avoid sprinkling personal data through components, everything personal lives in `src/config.ts`:

```ts
export const config = {
  name: {
    full: "Rohan Saketh Pilli",   // or "PR Saketh" — your call
    short: "Saketh",
  },
  tagline: "Computer Science at Churchill, Cambridge. Building at the intersection of theory, systems, and math.",
  email: "prsaketh360@gmail.com",  // never rendered; used only in error states
  links: {
    github: "https://github.com/sakethpilli007",
    linkedin: "https://linkedin.com/in/pr-saketh007",
    shadertoy: "https://www.shadertoy.com/view/tcGcRR",
  },
  cloudflare: {
    turnstileSitekey: import.meta.env.PUBLIC_TURNSTILE_SITEKEY,
    workerEndpoint: "https://resume.sakethpilli007.workers.dev/download",
  },
  web3forms: {
    accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY,
  },
};
```

---

## TL;DR

Astro static site at `sakethpilli007.github.io` with 8 sections (Hero · About · Portfolio · Research · Beyond the Code · Martial Arts · Resume/CV · Contact). Portfolio lists the 5 real GitHub projects (Lorentz shader, BLINK 3D, BLINK 2D, github-blogger-agent, personal-job-autofill) plus the senior-project-altruism repo I push after stripping its three all-caps comments (lines 171, 300, 308). Research has 4 abstract pages — elliptic functions as a deep, math-heavy expository article, the other three as short abstracts with "Read full paper → coming soon". Resume/CV behind Cloudflare Turnstile with a Worker serving PDFs from R2. Contact via Web3Forms with honeypot + Turnstile. Deploy via GitHub Actions. Five decisions needed from you (§11) before phase 1.
