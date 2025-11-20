
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-gradient-b-1": "var(--collection-1-gradient-b-1)",
        "collection-1-gradient-b-2": "var(--collection-1-gradient-b-2)",
        "collection-1-gradient-c-1": "var(--collection-1-gradient-c-1)",
        "collection-1-gradient-c-1-duplicate":
          "var(--collection-1-gradient-c-1-duplicate)",
        "collection-1-gradient-c-2": "var(--collection-1-gradient-c-2)",
        "collection-1-gray2": "var(--collection-1-gray2)",
        "collection-1-gray2-duplicate": "var(--collection-1-gray2-duplicate)",
        "collection-1-gray3": "var(--collection-1-gray3)",
        "collection-1-white": "var(--collection-1-white)",
      },
    },
  },
  plugins: [],
};
