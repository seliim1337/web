/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        online: "#3ba55d",
        idle: "#faa81a",
        dnd: "#ed4245",
        offline: "#747f8d",
        link: 'hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%)',
        normal: 'hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%)',
        //banner: '#77373a',
        transparent: 'hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.48)'
      }
    }
  },
  plugins: [],
}
