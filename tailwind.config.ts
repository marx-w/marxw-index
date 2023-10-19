import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-iansui)','var(--font-genyomin)'],
        mono: ['var(--font-firacode)'],
        handwrite: ['var(--font-chenyuluoyan)','var(--font-iansui)'],
        title: ['var(--font-genyomin)'],
      }
    }
  },
  daisyui: {
    themes: [
      {
        bookwormNerd: {
          "primary": "#FAC213",
          "secondary": "#F68989",
          "accent": "#3514FA",
          "neutral": "#33312D",
          "base-100": "#FFFDF7",
          "info": "#046582",
          "success": "#86C8BC",
          "warning": "#FFC26F",
          "error": "#e75c5a",
        },
        bookwormNeon: {
          "primary": "#19A7CE",
          "secondary": "#E97777",
          "accent": "#76E897",
          "neutral": "#E1E4FA",
          "base-100": "#393053",
          "info": "#E5BEEC",
          "success": "#86C8BC",
          "warning": "#FFC26F",
          "error": "#e75c5a",
        },
      }
    ],
    darkTheme: 'bookwormNeon',
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}
export default config
