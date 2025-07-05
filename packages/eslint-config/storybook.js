import storybook from "eslint-plugin-storybook"
import { config as baseConfig } from "./base.js"

/**
 * A custom ESLint configuration for Storybook projects.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const storybookConfig = [
  {
    ignores: ["!.storybook", "storybook-static/*"],
  },
  ...baseConfig,
  ...storybook.configs["flat/recommended"],
]
