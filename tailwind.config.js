module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
      fontFamily: {
        Hello: ["Hello", 'Hello', 'Linux Libertine', 'Times New Roman', 'Liberation Serif', 'Nimbus Roman', 'Noto Serif', 'Times', 'serif'] // or any other font-family name. Learn more @ https://codegeex.cn
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
