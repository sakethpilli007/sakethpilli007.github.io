/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  // NOTE: dark-mode class retained so we can still opt in to dark surfaces
  //       per page (e.g., the resume pause-menu overlay, GAME OVER screen).
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // "display" — the Bangers/action-comic hand-lettered face.
        display: ['Bangers', 'Impact', 'Arial Black', 'sans-serif'],
        // "ui" — Rubik Mono One, used for arcade/UI chrome.
        ui: ['Rubik Mono One', 'ui-monospace', 'monospace'],
        // "heavy" — Archivo Black for sub-heads.
        heavy: ['Archivo Black', 'Impact', 'sans-serif'],
        // "sans" (default body) — Comic Neue for readable comic vibe.
        sans: ['Comic Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Legacy mono alias kept so old files compile until rewritten.
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Main comic palette — off-white paper, ink black, pow red, zap yellow.
        paper: {
          50:  '#fffefa',
          100: '#fffaec',
          200: '#fff5d6',
          300: '#ffefbd',
          DEFAULT: '#fff9e8',
        },
        ink: {
          // Pure comic ink — barely-tinted near-black, plus a couple of grays
          // for interior type. Palette kept small on purpose.
          50:  '#f5f4ef',
          100: '#e6e3d8',
          200: '#b5b2a6',
          300: '#7f7d72',
          400: '#4a4944',
          500: '#2d2c29',
          600: '#1a1917',
          700: '#111110',
          800: '#0b0b0a',
          900: '#050504',
          950: '#000000',
        },
        pow: {
          // The action-red: borders, exclamation color, CTA fill.
          50:  '#ffecec',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7575',
          400: '#ff3b3b',
          500: '#e53935',
          600: '#c62828',
          700: '#a41e1a',
          800: '#7d1412',
          900: '#550c0a',
        },
        zap: {
          // The action-yellow: highlight fills, selected state, coins.
          50:  '#fffbea',
          100: '#fff4c2',
          200: '#ffe884',
          300: '#ffdd4a',
          400: '#ffd21f',
          500: '#f4b400',
          600: '#c98e00',
          700: '#8a6100',
          800: '#5a3f00',
          900: '#332300',
        },
        rarity: {
          // Portfolio item rarities — tinted monochromes on the comic palette.
          common:    '#7f7d72', // grey ink
          uncommon:  '#f4b400', // zap
          rare:      '#e53935', // pow
          epic:      '#0a0a0a', // ink
          legendary: '#ffd21f', // zap hi (paired with red striping)
        },
        // Keep `accent` alias pointing at pow so older class names still parse
        // while the per-page rewrites are in progress. Will be removed in
        // Phase C.
        accent: {
          50:  '#ffecec',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7575',
          400: '#ff3b3b',
          500: '#e53935',
          600: '#c62828',
          700: '#a41e1a',
          800: '#7d1412',
          900: '#550c0a',
        },
      },
      boxShadow: {
        // Hard offset shadow — no blur, pure black slab.
        comic: '6px 6px 0 0 #000',
        'comic-lg': '10px 10px 0 0 #000',
        'comic-sm': '3px 3px 0 0 #000',
        'comic-red': '6px 6px 0 0 #c62828',
        'comic-yellow': '6px 6px 0 0 #f4b400',
        'comic-inset': 'inset 0 0 0 3px #000',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
      rotate: {
        '0.5': '0.5deg',
        '0.5-': '-0.5deg',
        '1.5': '1.5deg',
        '2.5': '2.5deg',
      },
      backgroundImage: {
        // Tight halftone dot grid — intentionally used sparingly, not as a
        // full-page wash, so it doesn't read as AI ambient-glow.
        halftone: "radial-gradient(circle, #000 1.4px, transparent 1.6px)",
        // Diagonal red/yellow caution stripe — used on legendary rarity and
        // "under construction" blocks.
        'caution': "repeating-linear-gradient(135deg, #ffd21f 0 12px, #e53935 12px 24px)",
        // Comic panel paper-noise: a very faint jittered pattern.
        'paper-grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='%23fff9e8'/><circle cx='3' cy='5' r='0.5' fill='%23000' opacity='0.08'/><circle cx='18' cy='12' r='0.4' fill='%23000' opacity='0.06'/><circle cx='31' cy='7' r='0.45' fill='%23000' opacity='0.07'/><circle cx='9' cy='23' r='0.5' fill='%23000' opacity='0.05'/><circle cx='25' cy='29' r='0.4' fill='%23000' opacity='0.08'/><circle cx='35' cy='34' r='0.5' fill='%23000' opacity='0.06'/></svg>\")",
      },
      backgroundSize: {
        halftone: '8px 8px',
        'halftone-lg': '14px 14px',
      },
      keyframes: {
        'pow-in': {
          '0%':   { transform: 'scale(0.2) rotate(-20deg)', opacity: '0' },
          '30%':  { transform: 'scale(1.15) rotate(8deg)',  opacity: '1' },
          '60%':  { transform: 'scale(0.95) rotate(-4deg)', opacity: '1' },
          '100%': { transform: 'scale(1.05) rotate(6deg)',  opacity: '0' },
        },
        blink: {
          '0%, 49%':   { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-0.6deg)' },
          '50%':      { transform: 'rotate(0.6deg)'  },
        },
        'scanlines-roll': {
          '0%':   { backgroundPositionY: '0' },
          '100%': { backgroundPositionY: '6px' },
        },
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pow-in': 'pow-in 450ms cubic-bezier(.4,1.6,.6,1) forwards',
        blink: 'blink 1s steps(1) infinite',
        wobble: 'wobble 3.2s ease-in-out infinite',
        scanlines: 'scanlines-roll 200ms linear infinite',
        marquee: 'marquee-scroll 22s linear infinite',
      },
    },
  },
  plugins: [],
};
