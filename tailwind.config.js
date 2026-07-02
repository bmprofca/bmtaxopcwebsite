/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // ── New premium design system ──────────────────
        deep: "#0f172a",
        surface: "#1e293b",
        "surface-2": "#334155",
        "surface-3": "#475569",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        emerald: {
          ...require("tailwindcss/colors").emerald,
          DEFAULT: "#10b981",
        },
        gold: "#f59e0b",

        // ── Legacy tokens (backward compat) ───────────
        "ink-700": "#1e293b",
        "ink-800": "#0f172a",
        "ink-900": "#020617",
        "paper-100": "#f8fafc",
        "paper-200": "#f1f5f9",
        "brass-300": "#fbbf24",
        "brass-400": "#f59e0b",
        "brass-500": "#d97706",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(16,185,129,0.05) 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
        "emerald-gradient":
          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.3)",
        "glow-emerald": "0 0 30px rgba(16,185,129,0.3)",
        "glow-sm": "0 0 15px rgba(99,102,241,0.2)",
        stamp: "0 4px 24px rgba(0,0,0,0.4)",
        card: "0 4px 32px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 48px rgba(99,102,241,0.2), 0 4px 32px rgba(0,0,0,0.4)",
        glass: "0 4px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-slow": "blob 12s infinite",
        "fade-up": "fadeUp 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(99,102,241,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(99,102,241,0.5)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
