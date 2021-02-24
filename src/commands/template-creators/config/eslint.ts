import { TemplateCreator } from "../helpers";

const config = {
  plugins: ["@hack4impact-uiuc"],
  extends: ["plugin:@hack4impact-uiuc/base", "plugin:@hack4impact-uiuc/react"],
  env: {
    browser: true,
  },
  rules: {},
};

export default new TemplateCreator(
  "ESLint",
  config,
  ".eslintrc.json",
  "https://eslint.org/docs/user-guide/configuring/",
  true
);
