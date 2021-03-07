import SingleTemplate from "../index";

const template = `# Lines starting with '#' are comments.
# Each line is a file pattern followed by one or more owners.

# More details are here: https://help.github.com/articles/about-codeowners/

# The '*' pattern is global owners.

# Order is important. The last matching pattern has the most precedence.
`;

export default new SingleTemplate({
  name: "CodeOwners",
  templateFileName: "CODEOWNERS",
  template,
  docsLink:
    "https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners",
  isConfig: false,
  keybinding: "o",
});
