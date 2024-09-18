/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     maxWidth:{
      container:"1140px",
     },
     backgroundColor:{
      hbg:"#282828",
     },
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
     
    },
    
    backgroundImage: {
      'banner': "url('./assets/images1.png')",
      
    }
    },
  },
  plugins: [],
}