module.exports = {
  "*": [() => "pnpm run format"],
  "*.{js,jsx,ts,tsx}": [() => "pnpm run lint:fix"],
}
