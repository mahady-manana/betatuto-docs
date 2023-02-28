/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/templates/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        borderWidth :{
          "10" : "10px"
        },
        borderColor: {
          "info": "#00000"
        },
        listStyleType: {
          "square": "square"
        }
      },
    },
    plugins: [],
  }