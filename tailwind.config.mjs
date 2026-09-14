/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: { extend: { colors: { base:'#01271A', deep:'#01130D', surf:'#0A3524', ambar:'#F89902', dorado:'#F89902', cana:'#7FB069', crema:'#F5EFE6', muted:'#A89C8D', panel:'#ECEDEC', papel:'#FEFDF9' }, fontFamily: { display:['"DM Sans"','sans-serif'], sans:['Inter','sans-serif'] } } },
  plugins: []
};
