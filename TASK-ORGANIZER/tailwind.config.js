/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "222ab": "#222222ab",
        "222": "#222222",
        red: "#F6343469",
        blue: "#3145f669",
        green: "#329D3D68",
        orange: "#FFAA2B69",
        violet: "#F634CC69",
      },
      width: {
        380: "350px",
      },
      borderRadius: {
        '20': '20px',
      },
      scale: {
        '2/3': '2.3',
      },
    },
  },
  plugins: [],
};
