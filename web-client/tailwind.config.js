module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // Ensure these match with .storybook/preview.js

        fontFamily: {
            'sans-serif': ['brandon-grotesque', 'sans-serif'],
        },
        extend: {
            colors: {
                darkblue: '#023564',
                denimblue: '#045FB4',
            },
            spacing: {
                128: '32rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
    darkmode: 'class',
};
