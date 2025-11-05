/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'text-blue-500', 
    'bg-gray-100', 
    'text-gray-700', 
    'bg-blue-600',
    'hover:bg-blue-700'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
