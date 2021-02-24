// Externals
import { writeFile } from "fs/promises";
import { join } from "path";
import mock from "mock-require";
import { format } from "prettier";

mock("vscode", {}); // Required as vscode doesn't actually export anything (which causes the ts compile to fail)

// Internals
import pkg from "../package.json";
import Commands from "../src/commands";

interface Command {
  command: string;
  title: string;
}

const createPackageJson = async () => {
  const newCommands: Command[] = [];
  const newActivationEvents: string[] = [];

  Commands.forEach((command) => {
    newCommands.push({ command: command.cmdName, title: command.title });
    newActivationEvents.push(`onCommand:${command.cmdName}`);
  });

  pkg.contributes.commands = newCommands;
  pkg.activationEvents = newActivationEvents;

  const newPackageJson = format(JSON.stringify(pkg), {
    parser: "json-stringify",
  });

  await writeFile(
    join(__dirname, "..", "package.json"),
    newPackageJson,
    "utf-8"
  );

  process.env.INSIDE_HUSKY === "true" || console.log(newPackageJson);
};

createPackageJson();
