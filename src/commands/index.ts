import { createCommandName, createCommandTitle } from "./helpers";
import TemplateCreators, { MultiTemplate } from "./template-creators";

export default [new MultiTemplate(), ...TemplateCreators].map((command) => {
  command.title = createCommandTitle(command.title);
  command.cmdName = createCommandName(command.cmdName);
  return command;
});
