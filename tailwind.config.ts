import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b52ff",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#3b52ff",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        },
        azure: {
          DEFAULT: "#61d0ff",
          100: "#003146",
          200: "#00638d",
          300: "#0094d3",
          400: "#1bbaff",
          500: "#61d0ff",
          600: "#81d9ff",
          700: "#a0e3ff",
          800: "#c0ecff",
          900: "#dff6ff"
        },
        green: {
          DEFAULT: "#00e6a7",
          100: "#033c24",
          200: "#067949",
          300: "#09b56d",
          400: "#0bf292",
          500: "#00e6a7",
          600: "#6bf8bd",
          700: "#90face",
          800: "#b5fcde",
          900: "#dafdef"
        },
        black: {
          DEFAULT: "#101620",
          100: "#030406",
          200: "#06080c",
          300: "#090d12",
          400: "#0c1118",
          500: "#101620",
          600: "#2e3f5c",
          700: "#4e6a9a",
          800: "#849ac1",
          900: "#c1cde0"
        },
        silver: {
          DEFAULT: "#e6edf3",
          100: "#1f3140",
          200: "#3e6180",
          300: "#6791b6",
          400: "#a7bfd5",
          500: "#e6edf3",
          600: "#ecf1f6",
          700: "#f1f5f8",
          800: "#f5f8fa",
          900: "#fafcfd"
        }
      },
      typography: (theme: (arg0: string) => unknown) => ({
        default: {
          css: {
            color: theme("colors.gray.900"),
            "h1,h2": {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight")
            },
            h3: {
              fontWeight: "600"
            }
          }
        },
        dark: {
          css: {
            color: theme("colors.silver.500")
          }
        }
      })
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
};

export default config;
