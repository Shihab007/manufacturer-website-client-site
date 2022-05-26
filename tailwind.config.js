module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5442c9",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "btn-color":"#42c9ac",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
