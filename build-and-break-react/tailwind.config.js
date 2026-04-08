/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grad-start': '#00b4ff',
        'grad-end': '#8b00ff',
        'text-primary': '#e8e8f0',
        'text-muted': '#8888aa',
        'bg-primary': '#0a0a1a',
        'bg-secondary': '#0d0d24',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
}
