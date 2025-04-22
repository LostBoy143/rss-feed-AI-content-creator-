/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        floatRotate: {
          "0%, 100%": {
            transform:
              "translateY(0) rotate(10deg)",
          },
          "50%": {
            transform:
              "translateY(-15px) rotate(20deg)",
          },
        },
      },
      animation: {
        "float-rotate":
          "floatRotate 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
