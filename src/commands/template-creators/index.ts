import ESLint from "./config/eslint";
import Prettier from "./config/prettier";
import EditorConfig from "./config/editorconfig";
import MarkdownLint from "./config/markdownlint";

import gitignore from "./misc/gitignore";

export default [ESLint, Prettier, EditorConfig, MarkdownLint, gitignore];
