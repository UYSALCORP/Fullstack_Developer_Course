/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //* projemize bir plugin dahil etmek istiyorsak config dosyasına eklememiz gerekir
  //   content: [
  //     "./node_modules/flowbite/**/*.js"
  // ]
  theme: {
    extend: {},
  },
  //* projemize bir plugin dahil etmek istiyorsak config dosyasına eklememiz gerekir
  //   plugins: [
  //     require('flowbite/plugin')
  // ]
  darkMode: "selector",
};
