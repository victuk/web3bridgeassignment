module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', "./node_modules/tw-elements/dist/js/**/*.js"],
  important: '#root',
  theme: {
    extend: {},
    colors: {
      "green": "#00A035",
      "greenbg": "#08682C",
      "lightgreenbg": "#E2FFEB",
      "white": "#FFFFFF",
      "grey": "#F6F6F6",
      "yellow": "#FFC700",
      "black": "#000000",
      "red": "#e11a1a"
    }
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
