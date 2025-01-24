import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "var(--primaryBackground)",
        secondaryBackground: "var(--secondaryBackground)",
        tertiaryBackground: "var(--tertiaryBackground)",
        foreground: "var(--foreground)",
        linearBackground: "var(--linearBackground)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        tertiaryText: "var(--tertiaryText)",
      },
    },
  },
  plugins: [],
} satisfies Config;
