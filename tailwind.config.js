module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    theme: {
        extend: {
            inset: {
                '1/2': '50%',
                '2/5': '40%',
                'full': '100%',
            },
            colors: {
                primary: {
                    default: '#27DEBF',
                    100: '#93EFDF',
                    200: '#78EAD7',
                    300: '#5DE6CF',
                    400: '#42E2C7',
                    500: '#27DEBF',
                    600: '#22C2A7',
                    700: '#1DA78F',
                    800: '#188B77',
                    900: '#146F60',
                },
                secondary: {
                    default: '#204341',
                    100: '#90A1A0',
                    200: '#829594',
                    300: '#748A88',
                    400: '#667E7C',
                    500: '#587271',
                    600: '#4A6665',
                    700: '#3C5B59',
                    800: '#2E4F4D',
                    900: '#204341',
                },
                blue: {
                    default: '#2460DA',
                    100: '#F3F9FF',
                    200: '#0099ff',
                    300: '#5B88E3',
                    400: '#3F74DF',
                    500: '#2460DA',
                    600: '#2054BF',
                    700: '#1B48A4',
                    800: '#173C88',
                    900: '#12306D',
                },
                black: {
                    default: '#1e2023'
                },
                smoke: {
                    'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
                    'smoke-darker': 'rgba(0, 0, 0, 0.75)',
                    'smoke-dark': 'rgba(0, 0, 0, 0.6)',
                    'smoke': 'rgba(0, 0, 0, 0.5)',
                    'smoke-light': 'rgba(0, 0, 0, 0.4)',
                    'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
                    'smoke-lightest': 'rgba(0, 0, 0, 0.1)',
                }
            },
            fontFamily: {
                custom: ['Titillium Web'],
            },
        },
    },
    variants: {
        tableLayout: ['responsive'],
        display: ['responsive', 'hover', 'focus']
    },
    plugins: [],
}