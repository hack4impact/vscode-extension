import { ConfigCreator } from "./helpers";

const config = {
  "no-inline-html": false,
};

export default new ConfigCreator("MarkdownLint", config, ".markdownlint.json");
