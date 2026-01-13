// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '22ch' }, // adjust according to your text
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 3s steps(22) forwards',
        'typing-second': 'typing 2s steps(22) forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
