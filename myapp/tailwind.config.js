/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b89af",
        headingColor: "#63b7d6",
        cartNumBg: "#e80013",
        darkBlue: '#363a48',
        textColor: "#515151",
        cardOverlay: "rgba(256, 256, 256, 0.4)",
        btnOverlay: "rgba(255, 255, 255, 0.8)",
        lightGray: "#a4ccd0",
        containerbg: "rgba(255, 131, 0, 0.04)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
      display: ["group-hover"]
    },
  },
  plugins: [],
}
