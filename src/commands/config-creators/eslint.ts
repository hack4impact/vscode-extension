import { ConfigCreator } from "./helpers";

const config = {
  plugins: ["@hack4impact-uiuc"],
  extends: ["plugin:@hack4impact-uiuc/base", "plugin:@hack4impact-uiuc/react"],
  env: {
    browser: true,
  },
  rules: {},
};

export default new ConfigCreator("ESLint", config);
