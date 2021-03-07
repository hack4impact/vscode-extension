import SingleTemplate from "../index";

const template = `# EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs

root = true

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
`;

export default new SingleTemplate({
  name: "EditorConfig",
  templateFileName: ".editorconfig",
  template,
  docsLink: "https://editorconfig.org/",
  isConfig: true,
  keybinding: "d",
});
