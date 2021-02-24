import ESLint from "./config/eslint";
import Prettier from "./config/prettier";
import EditorConfig from "./config/editorconfig";
import MarkdownLint from "./config/markdownlint";

import GitIgnore from "./misc/gitignore";
import Changelog from "./misc/changelog";

export default [
  ESLint,
  Prettier,
  EditorConfig,
  MarkdownLint,
  GitIgnore,
  Changelog,
];
