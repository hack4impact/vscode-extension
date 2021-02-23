import ConfigCreators from "./config-creators";

export default [...ConfigCreators].map((command) => {
  command.title = `Hack4Impact: ${command.title}`;
  command.cmdName = `hack4impact.${command.cmdName}`;
  return command;
});
