/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './src/**/*.{html,js,jsx}', // for files inside src
    './public/index.html',// for plain HTML files
  ],
  theme: {
    extend: {
       fontFamily: {
        'share': ['Share Tech', 'sans-serif'],
        'share-mono': ["Share Tech Mono", 'monospace']
      },
    },
  },
  plugins: [],
}

