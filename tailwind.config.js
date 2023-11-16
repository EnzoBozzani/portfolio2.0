/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                green: '#01e85d',
                gray: '#ffffff5e',
                white: '#fff',
                dark: '#1b1b1b',
                gradient1: '#000000',
                gradient2: '#434343',
            },
        },
    },
    plugins: [],
};
