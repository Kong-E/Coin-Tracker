/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
