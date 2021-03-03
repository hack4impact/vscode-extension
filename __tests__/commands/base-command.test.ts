// Internals
import BaseCommand from "../../src/commands/base-command";
import {
  createCommandName,
  createCommandTitle,
} from "../../src/commands/helpers";
import { mockExtensionContext } from "../helpers";

const cmdName = "testcommand";
const cmdTitle = "Test Command";

const baseCommand = new BaseCommand(cmdName, cmdTitle);

test("Constructor", () => {
  expect(baseCommand.cmdName).toStrictEqual(createCommandName(cmdName));
  expect(baseCommand.title).toStrictEqual(createCommandTitle(cmdTitle));
});

test("Handler Method", () => {
  expect(baseCommand.handler(mockExtensionContext)).resolves.toBeUndefined();
});
