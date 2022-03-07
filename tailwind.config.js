module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        default: "1366px",
      },
      fontFamily: {
        nexa: "Nexa",
        minion: "minion-variable-concept",
      },
      fontSize: {
        title: "72px;",
      },
      borderRadius: {
        full: "53px",
      },
      height: {
        card: "357px",
        cardfull: "550px",
        60: "60%",
      },
      colors: {
        primary: "#29376D",
        secondary: "#E5E5E5",
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
