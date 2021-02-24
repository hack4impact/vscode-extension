// Externals
import { readFile } from "fs/promises";
import { join } from "path";
import { env, Uri, window, workspace } from "../../__mocks__/vscode";

// Internals
import TemplateCreators from "../../src/commands/template-creators";
import { TemplateCreator } from "../../src/commands/template-creators/helpers";
import { OUTPUT_FOLDER_PATH } from "../constants";

for (const Creator of TemplateCreators)
  describe(Creator.name, () => {
    test("Without folder selected", async () => {
      const OUTPUT_PATH = join(OUTPUT_FOLDER_PATH, Creator.templateFileName);

      window.showOpenDialog.mockReturnValue(Promise.resolve(undefined));
      await Creator.handler();

      expect(window.showOpenDialog).toHaveBeenCalledTimes(1);
      expect(window.showOpenDialog).toHaveBeenCalledWith({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
      });

      expect(window.showInformationMessage).toHaveBeenCalledTimes(0);
      expect(workspace.openTextDocument).toHaveBeenCalledTimes(0);
      expect(window.showTextDocument).toHaveBeenCalledTimes(0);
      expect(Uri.parse).toHaveBeenCalledTimes(0);
      expect(env.openExternal).toHaveBeenCalledTimes(0);

      expect(readFile(OUTPUT_PATH, "utf-8")).rejects.toThrow();
    });

    test("With folder selected", async () => {
      const OUTPUT_PATH = join(OUTPUT_FOLDER_PATH, Creator.templateFileName);

      window.showOpenDialog.mockReturnValue(
        Promise.resolve([
          {
            fsPath: OUTPUT_FOLDER_PATH,
          },
        ])
      );
      await Creator.handler();

      expect(window.showOpenDialog).toHaveBeenCalledTimes(1);
      expect(window.showOpenDialog).toHaveBeenCalledWith({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
      });

      expect(window.showInformationMessage).toHaveBeenCalledTimes(1);
      expect(window.showInformationMessage).toHaveBeenCalledWith(
        Creator.onSuccess,
        TemplateCreator.VIEW_FILE,
        TemplateCreator.VIEW_DOCS
      );

      const fileContent = await readFile(OUTPUT_PATH, "utf-8");

      const parsedContent =
        typeof Creator.template === "string"
          ? fileContent
          : JSON.parse(fileContent);

      expect(parsedContent).toStrictEqual(Creator.template);
    });

    test(TemplateCreator.VIEW_FILE, async () => {
      const OUTPUT_PATH = join(OUTPUT_FOLDER_PATH, Creator.templateFileName);
      const MOCK_DOC = "Mock Doc";

      window.showInformationMessage.mockReturnValue(
        Promise.resolve(TemplateCreator.VIEW_FILE)
      );
      workspace.openTextDocument.mockReturnValue(MOCK_DOC);

      await Creator.handler();

      expect(workspace.openTextDocument).toHaveBeenCalledTimes(1);
      expect(workspace.openTextDocument).toHaveBeenCalledWith(OUTPUT_PATH);

      expect(window.showTextDocument).toHaveBeenCalledTimes(1);
      expect(window.showTextDocument).toHaveBeenCalledWith(MOCK_DOC);
    });

    test(TemplateCreator.VIEW_DOCS, async () => {
      const MOCK_URI = "Mock URI";

      window.showInformationMessage.mockReturnValue(
        Promise.resolve(TemplateCreator.VIEW_DOCS)
      );
      Uri.parse.mockReturnValue(MOCK_URI);

      await Creator.handler();

      expect(Uri.parse).toHaveBeenCalledTimes(1);
      expect(Uri.parse).toHaveBeenCalledWith(Creator.docsLink);

      expect(env.openExternal).toHaveBeenCalledTimes(1);
      expect(env.openExternal).toHaveBeenCalledWith(MOCK_URI);
    });
  });
