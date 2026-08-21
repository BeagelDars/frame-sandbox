/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        canvas: {
          50: '#fbfbfb',
          100: '#f5f5f7',
          200: '#e5e5ea',
          300: '#d1d1d6',
          400: '#a1a1a6',
          500: '#636366',
          600: '#48484a',
          700: '#3a3a3c',
          800: '#2c2c2e',
          900: '#1c1c1e',
        }
      }
    },
  },
  plugins: [],
}
