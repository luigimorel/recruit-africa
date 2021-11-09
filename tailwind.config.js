module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/MiroHero.png')",
        employer: "url('/src/assets/EmployerHero.png')",
        overlay:
          "linear-gradient(89.4deg, #18181b 9.52%, rgba(24, 24, 27, 0) 89.41%)",
        candidate: "url('/src/assets/accounts/CandidateSignUp.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
