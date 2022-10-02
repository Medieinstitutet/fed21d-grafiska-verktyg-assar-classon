const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1b191a",
        "light-text": "#fffff3",
        "light-bg": "#C3C2BD",
        "footer-bg": "#95948F",
      },
      boxShadow: {
        product: "4px 5px 31px 3px rgba(79, 72, 61, 0.41)",
        "cookie-consent": "0px 5px 19px 8px rgba(103, 94, 94, 0.25)",
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", ...fontFamily.sans],
      serif: ["Playfair Display", ...fontFamily.serif],
    },
    fontSize: {
      "header-nav-link": [
        "20px",
        {
          lineHeight: "1",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],

      "hero-title": [
        "26px",
        {
          lineHeight: "26px",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],
      "paragraph-section-title": [
        "55px",
        {
          lineHeight: "73px",
          letterSpacing: "0em",
          fontWeight: "500",
        },
      ],
      "paragraph-section-body": [
        "24px",
        {
          lineHeight: "40px",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],

      "product-types-section-title": [
        "53px",
        {
          lineHeight: "90px",
          letterSpacing: "0em",
          fontWeight: "400",
        },
      ],

      "button-base": [
        "24px",
        {
          lineHeight: "1",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],
      "button-small": [
        "22px",
        {
          lineHeight: "1",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],

      "quote-section-quote": [
        "55px",
        {
          lineHeight: "73px",
          letterSpacing: "0em",
          fontWeight: "400",
        },
      ],
      "quote-section-author": [
        "32px",
        {
          lineHeight: "1",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],

      "product-section-title": [
        "53px",
        {
          lineHeight: "70px",
          letterSpacing: "0em",
          fontWeight: "500",
        },
      ],
      "product-section-product": [
        "27px",
        {
          lineHeight: "36px",
          letterSpacing: "0em",
          fontWeight: "400",
        },
      ],

      "footer-address": [
        "25px",
        {
          lineHeight: "30px",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],

      "cookie-consent": [
        "26px",
        {
          lineHeight: "1",
          letterSpacing: "0em",
          fontWeight: "300",
        },
      ],
    },
  },
  plugins: [],
}
