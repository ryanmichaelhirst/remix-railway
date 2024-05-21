/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // MUST BE LAST
  ],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx", "cn", "twMerge"],
}