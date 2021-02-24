import { TemplateCreator } from "../helpers";

const config = `# See https://help.github.com/articles/ignoring-files/ for more information on ignoring files.

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

export default new TemplateCreator(
  "GitIgnore",
  config,
  ".gitignore",
  "https://git-scm.com/docs/gitignore",
  false
);
