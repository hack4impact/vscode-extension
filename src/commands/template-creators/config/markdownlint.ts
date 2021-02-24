import { TemplateCreator } from "../helpers";

const config = {
  "no-inline-html": false,
};

export default new TemplateCreator(
  "MarkdownLint",
  config,
  ".markdownlint.json",
  "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",
  true
);
