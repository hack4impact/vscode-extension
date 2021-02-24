import TemplateCreators from "./template-creators";

export default [...TemplateCreators].map((command) => {
  command.title = `Hack4Impact: ${command.title}`;
  command.cmdName = `hack4impact.${command.cmdName}`;
  return command;
});
