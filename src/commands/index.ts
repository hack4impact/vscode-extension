import { createCommandName, createCommandTitle } from "./helpers";
import TemplateCreators, { CreateTemplates } from "./template-creators";

export default [...TemplateCreators, new CreateTemplates()].map((command) => {
  command.title = createCommandTitle(command.title);
  command.cmdName = createCommandName(command.cmdName);
  return command;
});
