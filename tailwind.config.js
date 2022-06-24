/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            quick: ['Quicksand', 'sans-serif']
        }
    },
}