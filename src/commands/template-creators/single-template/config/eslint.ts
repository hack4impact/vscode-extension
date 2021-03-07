import SingleTemplate from "../index";

const template = {
  plugins: ["@hack4impact-uiuc"],
  extends: ["plugin:@hack4impact-uiuc/base", "plugin:@hack4impact-uiuc/react"],
  env: {
    browser: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};

export default new SingleTemplate({
  name: "ESLint",
  templateFileName: ".eslintrc.json",
  template,
  docsLink: "https://eslint.org/docs/user-guide/configuring/",
  isConfig: true,
  keybinding: "e",
});
