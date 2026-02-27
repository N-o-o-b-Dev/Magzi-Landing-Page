/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00adee",
                "primary-dark": "#0096ce",
                "light-bg": "#F8F9FA",
                "charcoal": "#1A1A1A",
                "navy-deep": "#050A18",
            },
            fontFamily: {
                display: ["Cairo", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, rgba(0, 173, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 173, 238, 0.05) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
