module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7557D3",
        text: {
          500: "#211f26",
          400: "#2B3C4E",
          300: "#4F4F4F",
          200: "#7D7D7D",
          100: "#B1B1B1",
        },
        border: { 300: "#2B3C4E", 200: "#BDBDBD", 100: "#EBEBEB" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
