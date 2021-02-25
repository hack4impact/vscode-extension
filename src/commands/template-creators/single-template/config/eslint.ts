import SingleTemplate from "../index";

const template = {
  plugins: ["@hack4impact-uiuc"],
  extends: ["plugin:@hack4impact-uiuc/base", "plugin:@hack4impact-uiuc/react"],
  env: {
    browser: true,
  },
  rules: {},
};

export default new SingleTemplate({
  name: "ESLint",
  templateFileName: ".eslintrc.json",
  template,
  docsLink: "https://eslint.org/docs/user-guide/configuring/",
  isConfig: true,
});
