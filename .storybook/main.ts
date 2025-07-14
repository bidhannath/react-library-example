import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // core: {
  //   builder: "@storybook/builder-vite",
  // },
  docs: {},

  viteFinal: async (config) => {
    config.plugins?.push(
      tsConfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );
    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
