npx create-next-app@latest frontend
cd frontend
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

