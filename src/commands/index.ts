import { createCommandName, createCommandTitle } from "./helpers";
import TemplateCreators from "./template-creators";

export default [...TemplateCreators].map((command) => {
  command.title = createCommandTitle(command.title);
  command.cmdName = createCommandName(command.cmdName);
  return command;
});
