/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                indigo: {
                    50: '#f5f7ff',
                    100: '#ebf0fe',
                    200: '#cedbff',
                    300: '#a3bcff',
                    400: '#6d94ff',
                    500: '#406aff',
                    600: '#2547ff',
                    700: '#1c36cc',
                    800: '#1a2e99',
                    900: '#142273',
                    950: '#0f1d47',
                },
                emerald: {
                    400: '#34d399',
                },
                // MASCOT THEME
                'mascot-yellow': '#FFD700',
                'mascot-orange': '#FF8C00',
                'mascot-blue': '#007BFF',
                'mascot-purple': '#9B51E0',
                'mascot-pink': '#FF006E',
                'mascot-green': '#00C853',
            },
            fontFamily: {
                sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'], // Check if Nunito is available or needs import
            },
            boxShadow: {
                'pop': '4px 4px 0px 0px rgba(0,0,0,1)',
                'pop-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
                'pop-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'bounce-slow': 'bounce 3s infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                glow: {
                    'from': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #bc13fe, 0 0 40px #bc13fe' },
                    'to': { textShadow: '0 0 20px #fff, 0 0 30px #ff006e, 0 0 40px #ff006e, 0 0 50px #ff006e' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            }
        },
    },
    plugins: [],
}
