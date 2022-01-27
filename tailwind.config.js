module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        default: "1366px",
      },
      fontSize: {
        title: "40px;",
      },
      borderRadius: {
        full: "53px",
      },
      width: {
        28: "27%",
        400: "600px",
      },
      height: {
        card: "357px",
        cardfull: "550px",
        60: "60%",
      },
      colors: {
        primary: "#253871",
        secondary: "#B8AEA4",
        darkblue: "#010101",
      },
      translate: {
        4: "-4rem",
      },
      screens: {
        ground: "0px",
      },
    },
  },
  plugins: [],
};
