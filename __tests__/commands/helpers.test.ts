import {
  createCommandName,
  createCommandTitle,
  getSingleFolder,
} from "../../src/commands/helpers";
import { window } from "../../__mocks__/vscode";

describe("Create Command Name", () => {
  test("With prepend", () => {
    const cmdName = "test.command";

    const actual = createCommandName(cmdName);
    const expected = `hack4impact.${cmdName}`;

    expect(actual).toStrictEqual(expected);
  });

  test("Without prepend", () => {
    const cmdName = "hack4impact.test.command";

    const actual = createCommandName(cmdName);

    expect(actual).toStrictEqual(cmdName);
  });
});

describe("Create Command Title", () => {
  test("With prepend", () => {
    const cmdName = "Command";

    const actual = createCommandTitle(cmdName);
    const expected = `Hack4Impact: ${cmdName}`;

    expect(actual).toStrictEqual(expected);
  });

  test("Without prepend", () => {
    const cmdName = "Hack4Impact: Command";

    const actual = createCommandTitle(cmdName);

    expect(actual).toStrictEqual(cmdName);
  });
});

describe("Get Single Folder", () => {
  test("With no folder selected", async () => {
    window.showOpenDialog.mockReturnValue(Promise.resolve(undefined));

    const actual = await getSingleFolder();

    expect(actual).toBeUndefined();
  });

  test("With folders selected", async () => {
    const first = { fsPath: "path..." };
    const second = { fsPath: "path2..." };

    window.showOpenDialog.mockReturnValue(Promise.resolve([first, second]));

    const actual = await getSingleFolder();

    expect(actual).toStrictEqual(first);
  });
});
