import { TemplateCreator } from "../helpers";
import { Options } from "prettier";

const template: Options = {
  singleQuote: false,
  endOfLine: "lf",
  semi: true,
  arrowParens: "always",
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  requirePragma: false,
  trailingComma: "es5",
};

export default new TemplateCreator({
  name: "Prettier",
  templateFileName: ".prettierrc.json",
  template,
  docsLink: "https://prettier.io/docs/en/configuration.html",
  isConfig: true,
});
