/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        "222ab": "#222222ab",
        "222": "#222222",
        red: "#F63434",
        blue: "#3145f6",
        green: "#329D3D",
        orange: "#FFAA2B",
        violet: "#F634CC",
        navbar:"#f19c4d",
        black40:"#41414166",
        red100 :"#A70E0E"
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
