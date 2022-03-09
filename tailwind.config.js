module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(193, 38%, 86%)',
        green: 'hsl(150, 100%, 66%)',
        'gray-blue': 'hsl(217, 19%, 38%)',
        'darkgray-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      screens: {
        sm: '375px',
        lg: '1440px',
      },
    },
  },
  plugins: [],
};
