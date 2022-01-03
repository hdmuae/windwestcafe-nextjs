module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        card: "28rem",
      },
      maxWidth: {
        default: "1366px",
      },
      fontFamily: {
        berlin: "berlin-sans-fb",
        nexa: "nexa",
      },
      colors: {
        primary: "#362B1A",
        secondary: "#B8AEA4",
        lightbrown: "#EEECE8",
        darkbrown: "#89724B",
        contact: "#DBD8D2",
      },
    },
  },
  plugins: [],
};
