/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      primary:"Orbitron",
      secondary:"Rajdhani",
      tertiary:"Aldrich"

    },
    container:{
      padding:{
        DEFAULT:"15px"
      },

    },
    screens: {
      
      
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '960px',
      'xl':'1200px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        primary:"#0a0a0a",
        accent:"#B809C3"

      },
      borderWidth: {
        '5': '10px',
      },
      width: {
        '400': '380px'},
      height:{
        '400':'380px'
      } , 
      backgroundImage:{
        
        site:"url('./assets/bg.jpg')",
        about:"url('./assets/about.png')",
        services:"url('./assets/services.png')",

      },
      screens: {
      
        'mobile': '300px'
      },
    },
  },
  plugins: [],
}

