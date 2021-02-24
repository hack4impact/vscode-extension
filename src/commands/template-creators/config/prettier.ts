import { TemplateCreator } from "../helpers";
import { Options } from "prettier";

const config: Options = {
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

export default new TemplateCreator(
  "Prettier",
  config,
  ".prettierrc.json",
  "https://prettier.io/docs/en/configuration.html",
  true
);