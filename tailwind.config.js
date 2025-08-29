/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                mangrove: {
                    50: '#f0f8f4',
                    100: '#d9efe5',
                    200: '#b4decb',
                    300: '#86c8ac',
                    400: '#56ad8b',
                    500: '#34916f',
                    600: '#27745a',
                    700: '#215d4a',
                    800: '#1c4a3c',
                    900: '#163c31'
                }
            }
        }
    },
    plugins: []
}