/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir todas las extensiones y carpetas relevantes
  ],
  theme: {

    extend: {
      colors: {
        mucdBlue: "#084C85",
        mucdBlueLight: "#8AAED9",
        mucdGreen: "#30B998",
        mucdGreenLight: "#7AD6C0",
        text: "#2F394C",
        textlight: "#4D5566",
        gray100: "#E1E3E5",
        white: "#FFFFFF",
        hilandored: "#E74F3D",
        hilandoblue: "#1C355E",
        hilandogreen: "#69B1BE",
        hilandoyellow: "#FFBB4E",
        hilandocream: "#F5F2E4",
        nueveOnceBlue: "#073286",
        verdeSimo1: "#80B71E",
        verdeSimo2: "#007077",
        verdeSimo3: "#005257",
        enfoqueBlue: "#1A1C34",
        enfoqueredBase: "#DD4445",
        enfoquepalePink: "#E2CFCF",
        enfoquelightBlue: "#6E80B7",
        enfoqueYellow: "#EE9F43",
      }, 

      fontFamily: {
        barlow: ['Barlow Condensed', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        manrope: ["Manrope", 'serif'],
        notosans: ["Noto Sans", 'serif'],
        epilogue: ["Epilogue", 'serif'],
      },

      aspectRatio: {
        "16/9": "16 / 9",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
