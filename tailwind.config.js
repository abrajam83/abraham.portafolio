/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir todas las extensiones y carpetas relevantes
  ],
  theme: {

    extend: {

       screens: {
        '1595': '1595px', 
        'lg1140': '1140px',
      },

      transformOrigin: {
        'right': '100%', // Define el origen de la transformación en el borde derecho
      },
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
        verdeSimo4: "#02969C",
        enfoqueBlue: "#1A1C34",
        enfoqueredBase: "#DD4445",
        enfoquepalePink: "#E2CFCF",
        enfoquelightBlue: "#6E80B7",
        enfoquepaleBlue: "#B3C5E5",
        enfoqueYellow: "#EE9F43",
        iberoBlue:"#276685",
        iberoLightBlue:"#779FB3",
        iberoLightGray: "#D5D1CF",
        esmaFondo: "#e7e7e7",
        gray150: "#fcfaf7" ,
        gray200: "#f8f5ef" ,
        gray300: "#f3f0e8" ,
        gray400: "#eeebe2" ,
        gray500: "#e9e5dc" ,
        gray600: "#c5c1b8" ,
        gray700: "#a09c94" ,
        gray800: "#7b7870" ,
        gray900: "#56534d" ,
        gray950: "#302e2b" ,
      }, 

      fontFamily: {
        barlow: ['Barlow Condensed', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        manrope: ["Manrope", 'serif'],
        notosans: ["Noto Sans", 'serif'],
        epilogue: ["Epilogue", 'serif'],
        passion: ["Passion One", 'serif'],
        playfair: ["Playfair Display", 'serif'],
        anton: ["Anton", 'sans-serif'],
        maison: ["Maison", 'sans-serif'],
        maisonMono: ["MaisonMono", 'sans-serif']
      },

      aspectRatio: {
        "16/9": "16 / 9",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
