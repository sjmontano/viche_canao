/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: { extend: { colors: { base:'#0F0D0B', surf:'#1A1512', ambar:'#D9A441', cana:'#7FB069', crema:'#F5EFE6', muted:'#A89C8D' }, fontFamily: { display:['Fraunces','serif'], sans:['Inter','sans-serif'] } } },
  plugins: []
};
