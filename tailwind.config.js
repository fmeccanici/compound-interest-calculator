module.exports = {

    content: [
        './resources/**/*.blade.php',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'midnight-blue' : '#2C3E50',
                'wet-asphalt' : '#34495E',
                'amethyst' : '#9B59B6',
                'primary' : '#2C3E50',
                'secondary' : '#9B59B6',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    variants: {
        extend: {
            border: ['focus'],
        }
    },
}
