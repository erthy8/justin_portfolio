/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  safelist: [
    'text-blue-400',
    'bg-sky-200',
    'text-sky-800',
    'text-[#566af6]',
    'text-emerald-400',
    'text-emerald-800',
    'bg-emerald-200',
    'bg-green-200',
    'text-green-800',
    'bg-red-200',
    'text-red-800',
    'bg-yellow-200',
    'text-yellow-800',
    'bg-violet-200',
    'text-violet-800',
    'bg-orange-200',
    'text-orange-800',
    'bg-lime-200',
    'text-lime-800',
    'text-lime-300',
    'bg-pink-200',
    'text-pink-800',
    'bg-blue-200',
    'text-blue-800',
    "bg-cyan-200",
    "text-cyan-800"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#161A30',
        'purple': '#31304D',
        'dark-purple': '#0c0914',
        'light-purple': '#1c213b',
        'stone': '#B6BBC4',
        'ivory': '#F0ECE5'
      },
      fontFamily: {
        sans: ['Ppobjectsans', 'Graphik', 'sans-serif'],
        serif: ['Georgia', 'Merriweather', 'serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'neumorphic-inset': 'inset 6px 6px 20px rgba(0, 0, 0, .8), inset -6px -6px 15px rgba(75, 75, 75, .8)',
      },
    },
  },
}
