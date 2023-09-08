/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
   extend: {
     colors: {
       'light-blue': '#176B87',
       'dark-blue': '#053B50',
       'myGray': '#E8EEEF',
       'InspectLightYelow': '#FFF4CF',
       'InspectDarkYelow': '#FFB200',
       'MaintananceLightGreen': '#D4E2D4',
       'MaintananceDarkGreen': '#96BD96',


     },
   },
 },
 plugins: [],
}

