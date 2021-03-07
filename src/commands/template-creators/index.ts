// Internals
import ESLint from "./single-template/config/eslint";
import Prettier from "./single-template/config/prettier";
import EditorConfig from "./single-template/config/editorconfig";
import MarkdownLint from "./single-template/config/markdownlint";

import GitIgnore from "./single-template/misc/gitignore";
import Changelog from "./single-template/misc/changelog";
import License from "./single-template/misc/license";
import CodeOwners from "./single-template/misc/codeowners";

const allTemplates = [
  ESLint,
  Prettier,
  MarkdownLint,
  EditorConfig,
  GitIgnore,
  Changelog,
  License,
  CodeOwners,
];

export default allTemplates;
export { default as MultiTemplate } from "./multi-template";
