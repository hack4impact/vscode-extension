import { TemplateCreator } from "../helpers";

const template = {
  "no-inline-html": false,
};

export default new TemplateCreator({
  name: "MarkdownLint",
  templateFileName: ".markdownlint.json",
  template,
  docsLink: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",
  isConfig: true,
});
