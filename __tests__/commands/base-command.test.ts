// Internals
import BaseCommand from "../../src/commands/base-command";
import { mockExtensionContext } from "../helpers";

const cmdName = "testcommand";
const cmdTitle = "Test Command";

const baseCommand = new BaseCommand(cmdName, cmdTitle);

test("Constructor", () => {
  expect(baseCommand.cmdName).toStrictEqual(cmdName);
  expect(baseCommand.title).toStrictEqual(cmdTitle);
});

test("Handler Method", () => {
  expect(baseCommand.handler(mockExtensionContext)).resolves.toBeUndefined();
});
