/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // ── Light theme design system ────────────────
        primary: "#f8fafc",
        surface: "#ffffff",
        "surface-2": "#f1f5f9",
        accent: {
          DEFAULT: "#4f46e5",
          light: "#6366f1",
          lighter: "#818cf8",
          dark: "#4338ca",
          50: "#eef2ff",
          100: "#e0e7ff",
        },

        // ── Legacy backward compat ────────────────
        "ink-700": "#334155",
        "ink-800": "#0f172a",
        "ink-900": "#020617",
        "paper-100": "#f8fafc",
        "paper-200": "#f1f5f9",
        "brass-300": "#fbbf24",
        "brass-400": "#f59e0b",
        "brass-500": "#d97706",
      },
      boxShadow: {
        glow: "0 0 30px rgba(79,70,229,0.2)",
        "glow-sm": "0 0 15px rgba(79,70,229,0.12)",
        soft: "0 2px 15px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)",
        card: "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 40px rgba(79,70,229,0.1), 0 4px 12px rgba(0,0,0,0.06)",
        nav: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
        stamp: "0 4px 24px rgba(0,0,0,0.08)",
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-slow": "blob 12s infinite",
        "fade-up": "fadeUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
