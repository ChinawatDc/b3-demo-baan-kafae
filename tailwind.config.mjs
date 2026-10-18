/** Design tokens from DESIGNER mockup-A-v1.html :root (direction A · ริมน้ำยามเช้า).
 *  *-ink variants were added by WEB DEV so small text passes WCAG AA (4.5:1). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,md}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6EE',
        sand: '#E9DCC6',
        paper: '#FFF8EC',
        green: { DEFAULT: '#5E8C7E', ink: '#3F6659', soft: '#7FA597' },
        caramel: { DEFAULT: '#C9773E', ink: '#A35A26' },
        ink: '#2B2A26',
        line: '#06C755',
        ph: { DEFAULT: '#D6C4A5', ink: '#5A4A33' },
        rule: '#CDBFA8',
      },
      fontFamily: {
        head: ['Pridi', 'serif'],
        en: ['Fraunces', 'serif'],
        body: ['Sarabun', 'system-ui', 'sans-serif'],
      },
      borderRadius: { arch: '200px 200px 12px 12px' },
      maxWidth: { wrap: '1120px' },
      letterSpacing: { eyebrow: '.22em' },
    },
  },
  plugins: [],
};
