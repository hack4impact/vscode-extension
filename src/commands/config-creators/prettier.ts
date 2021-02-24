import { ConfigCreator } from "./helpers";
import { Options } from "prettier";

const config: Options = {
  singleQuote: false,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  arrowParens: "always",
};

export default new ConfigCreator("Prettier", config, ".prettierrc.json");
