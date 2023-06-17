/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    colors: {

      'text': '#080410',
      'background': '#ede7f9',
      'primary-button': '#2d165a',
      'secondary-button': '#ffffff',
      'accent': '#371c6e',

      'dark-text': '#e3f1fd',
      'dark-background': '#010b13',
      'dark-primary-button': '#0c159d',
      'dark-secondary-button': '#000000',
      'dark-accent': '#1d053e',

    },
    extend: {},
  },
  plugins: [],
}
