module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#255d00",
            secondary: "#255d00",
            accent: "#255d00",
            neutral: "#255d00",
            fareast: "#255d00",
            success: "#087f23",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
}
