/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'sdu-red': {
          DEFAULT: '#9B0D14',
          dark: '#7A0A10',
          light: '#C41019',
          lightest: '#E8121D',
          darker: '#5A080C',
        },
        'mask': "rgb(128, 128, 128)"
      },
      //可以进行一些自定义的扩展，还可以使用一些预设的类
    },
  },
  plugins: [],
}

