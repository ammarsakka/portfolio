/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },
            screens: {
                mobile: "900px",
            },
        },
    },
    plugins: [],
};
