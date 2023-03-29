/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      spacing: {
        05: "4px",
        1: "8px",
        15: "12px",
        2: "16px",
        25: "20px",
        3: "24px",
        35: "28px",
        4: "32px",
        45: "36px",
        5: "40px",
        55: "44px",
        6: "48px",
        65: "52px",
        7: "56px",
        75: "60px",
        8: "64px",
        85: "68px",
        9: "72px",
        95: "76px",
        10: "80px",
      },
    },
  },
};
