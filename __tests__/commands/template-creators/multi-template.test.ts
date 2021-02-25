// Externals
import { Uri } from "vscode";

// Internals
import { window } from "../../../__mocks__/vscode";
import TemplateCreators, {
  MultiTemplate,
} from "../../../src/commands/template-creators";
import * as helpers from "../../../src/commands/helpers";

describe("Handler Method", () => {
  const multiTemplate = new MultiTemplate();
  const quickPickSpy = jest.spyOn(multiTemplate, "showTemplateQuickPick");
  const folderSpy = jest.spyOn(helpers, "getSingleFolder");
  const createFilesSpy = jest.spyOn(multiTemplate, "createTemplateFiles");
  const successMessageSpy = jest.spyOn(multiTemplate, "showSuccessMessages");

  const checkQuickPickSpy = () => {
    expect(quickPickSpy).toHaveBeenCalledTimes(1);
    expect(quickPickSpy).toHaveBeenCalledWith<[]>();
  };

  const checkFolderSpy = () => {
    expect(folderSpy).toHaveBeenCalledTimes(1);
    expect(folderSpy).toHaveBeenCalledWith<[]>();
  };

  test("With no templates selected", async () => {
    quickPickSpy.mockReturnValue(Promise.resolve(undefined));

    await multiTemplate.handler();

    checkQuickPickSpy();

    expect(folderSpy).toHaveBeenCalledTimes(0);
    expect(createFilesSpy).toHaveBeenCalledTimes(0);
    expect(successMessageSpy).toHaveBeenCalledTimes(0);
  });

  test("With no folder selected", async () => {
    const templates = [TemplateCreators[0]];
    const picked = [templates[0].name];

    quickPickSpy.mockReturnValue(Promise.resolve(picked));
    folderSpy.mockReturnValue(Promise.resolve(undefined));

    await multiTemplate.handler();

    checkQuickPickSpy();
    checkFolderSpy();

    expect(createFilesSpy).toHaveBeenCalledTimes(0);
    expect(successMessageSpy).toHaveBeenCalledTimes(0);
  });

  test("With folders selected", async () => {
    const templates = [TemplateCreators[0]];
    const picked = [templates[0].name];

    const folder = {} as Uri;
    const createdFiles = ["path..."];

    quickPickSpy.mockReturnValue(Promise.resolve(picked));
    folderSpy.mockReturnValue(Promise.resolve(folder));
    createFilesSpy.mockReturnValue(Promise.resolve(createdFiles));
    successMessageSpy.mockReturnValue(Promise.resolve([]));

    await multiTemplate.handler();

    checkQuickPickSpy();
    checkFolderSpy();

    expect(createFilesSpy).toHaveBeenCalledTimes(1);
    expect(createFilesSpy).toHaveBeenCalledWith(templates, folder);

    expect(successMessageSpy).toHaveBeenCalledTimes(1);
    expect(successMessageSpy).toHaveBeenCalledWith(templates, createdFiles);
  });
});

describe("Show Template Quick Pick Method", () => {
  const multiTemplate = new MultiTemplate();
  const pickItems = TemplateCreators.map((t) => t.name);
  const pickOptions = {
    canPickMany: true,
    placeHolder: MultiTemplate.PLACEHOLDER,
    ignoreFocusOut: true,
  };

  afterEach(() => {
    expect(window.showQuickPick).toHaveBeenCalledTimes(1);
    expect(window.showQuickPick).toHaveBeenCalledWith(pickItems, pickOptions);
  });

  test("With no values selected", async () => {
    window.showQuickPick.mockReturnValue(Promise.resolve(undefined));

    const actual = await multiTemplate.showTemplateQuickPick();

    expect(actual).toBeUndefined();
  });

  test("With values selected", async () => {
    const selected = ["1", "2", "..."];
    window.showQuickPick.mockReturnValue(Promise.resolve(selected));

    const actual = await multiTemplate.showTemplateQuickPick();

    expect(actual).toStrictEqual(selected);
  });
});

test("Create Template Files Method", async () => {
  const multiTemplate = new MultiTemplate();

  const templates = [TemplateCreators[0]];
  const filePaths = ["path..."];

  const folder = {} as Uri;
  const createFileSpy = jest
    .spyOn(templates[0], "writeTemplateFile")
    .mockReturnValue(Promise.resolve(filePaths[0]));

  const actual = await multiTemplate.createTemplateFiles(templates, folder);

  expect(createFileSpy).toHaveBeenCalledTimes(1);
  expect(createFileSpy).toHaveBeenCalledWith(folder);

  expect(actual).toStrictEqual(filePaths);
});

test("Show Success Message Method", async () => {
  const multiTemplate = new MultiTemplate();

  const templates = [TemplateCreators[0]];
  const filePaths = ["path..."];

  const successMessageSpy = jest
    .spyOn(templates[0], "showSuccessMessage")
    .mockReturnValue(Promise.resolve());

  await multiTemplate.showSuccessMessages(templates, filePaths);

  expect(successMessageSpy).toHaveBeenCalledTimes(1);
  expect(successMessageSpy).toHaveBeenCalledWith(filePaths[0]);
});
