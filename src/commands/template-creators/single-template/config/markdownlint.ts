import SingleTemplate from "../index";

const template = {
  "no-inline-html": false,
};

export default new SingleTemplate({
  name: "MarkdownLint",
  templateFileName: ".markdownlint.json",
  template,
  docsLink: "https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",
  isConfig: true,
  keybinding: "m",
});
