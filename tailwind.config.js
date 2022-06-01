module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      lightblue: "#e6f0ff",
      darkblue: "#0f1b4c",
      blue: "#0689ff",
      black: "#000336",
      grey: "#5a6473",
      white: "#ffffff",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 800,
    },
    lineHeight: {
      title: "160%",
      text: "180%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
