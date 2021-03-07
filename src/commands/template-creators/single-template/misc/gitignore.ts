import SingleTemplate from "../index";

const template = `# See https://help.github.com/articles/ignoring-files/ for more information on ignoring files.

# dependencies
node_modules/

# testing
coverage/

# production
dist/
out/
build/

# private/secret files
.env

# misc
.DS_Store
`;

export default new SingleTemplate({
  name: "GitIgnore",
  templateFileName: ".gitignore",
  template,
  docsLink: "https://git-scm.com/docs/gitignore",
  isConfig: false,
  keybinding: "g",
});
