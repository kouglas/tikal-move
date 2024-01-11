import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tikal-cyan': '#55B0CD',
        "tikal-blues": {
          50: "#EFF8FA",
          100: "#DCEEF5",
          200: "#BCDFEB",
          300: "#99CFE1",
          400: "#79C0D8",
          500: "#55B0CD",
          600: "#3595B5",
          700: "#276E86",
          800: "#1B4B5B",
          900: "#0D242B",
          950: "#071318"
        }
        
      }
    },
  },
  plugins: [],
}
export default config
