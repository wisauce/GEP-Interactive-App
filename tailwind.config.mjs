/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-one': 'fadeIn 1s ease-ininfinite',
        'fade-in-two': 'fadeIn 2s ease-in infinite',
        'fade-in-three': 'fadeIn 3s ease-in infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        'asal-usil': ['Asal Usil', 'sans-serif'],
        'shoplifter': ['Shoplifter', 'sans-serif'],
        'blue-curve': ['Blue Curve', 'sans-serif'],
      },
      colors: {
        ludic: {
          blue: '#392585',
          pink: '#ff64c',
          yellow: '#fef6ad',
        }
      },
      backgroundColor: {
        'hero': '#9bdcff',
      },
    },
  },
  plugins: [],
};
