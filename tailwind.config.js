module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "neff-anime": `url("/assets/images/neff_anime.jpeg")`,
      //   "neff-azan": `url("/assets/images/will_azan.jpeg")`,
      //   "neff-magic": `url("/assets/images/neff_magic.jpeg")`,
      //   "neff-planes": `url("/assets/images/neff_planes.jpeg")`,
      //   "neff-thieves": `url("/assets/images/neff_thieves.jpeg")`,
      // }),
      container: {
        center: true,
        padding: "2em",
        maxWidth: "80rem",
      },
      colors: {
        primary: {
          dark: `hsl(300, 11%, 4%)`,
          light: `hsl(231, 77%, 90%)`,
          white: `hsl(0, 0%, 100%)`,
          red: `hsl(349, 64%, 13%)`,
        },
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "serif"],
        bebas: ["Bebas Neue", "serif"],
      },
    },
  },
  plugins: [],
};
