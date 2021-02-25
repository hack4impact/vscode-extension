// Externals
import { readFile } from "fs/promises";
import { join } from "path";
import { Uri as VSCodeUri } from "vscode";

// Internals
import { env, Uri, window, workspace } from "../../../__mocks__/vscode";
import TemplateCreators from "../../../src/commands/template-creators";
import SingleTemplate from "../../../src/commands/template-creators/single-template";
import * as helpers from "../../../src/commands/helpers";
import { OUTPUT_FOLDER_PATH } from "../../constants";

for (const Creator of TemplateCreators)
  describe(Creator.name, () => {
    describe("Handler Method", () => {
      const folderSpy = jest.spyOn(helpers, "getSingleFolder");
      const writeTemplateSpy = jest.spyOn(Creator, "writeTemplateFile");
      const successMessageSpy = jest.spyOn(Creator, "showSuccessMessage");

      afterAll(() => {
        writeTemplateSpy.mockRestore();
        successMessageSpy.mockRestore();
      });

      const checkFolderSpy = () => {
        expect(folderSpy).toHaveBeenCalledTimes(1);
        expect(folderSpy).toHaveBeenCalledWith<[]>();
      };

      test("With no folder selected", async () => {
        folderSpy.mockReturnValue(Promise.resolve(undefined));

        await Creator.handler();

        checkFolderSpy();

        expect(writeTemplateSpy).toHaveBeenCalledTimes(0);
        expect(successMessageSpy).toHaveBeenCalledTimes(0);
      });

      test("With folder selected", async () => {
        const folder = {} as VSCodeUri;
        const filePath = "path...";

        folderSpy.mockReturnValue(Promise.resolve(folder));
        writeTemplateSpy.mockReturnValue(Promise.resolve(filePath));
        successMessageSpy.mockReturnValue(Promise.resolve());

        await Creator.handler();

        checkFolderSpy();

        expect(writeTemplateSpy).toHaveBeenCalledTimes(1);
        expect(writeTemplateSpy).toHaveBeenCalledWith(folder);

        expect(successMessageSpy).toHaveBeenCalledTimes(1);
        expect(successMessageSpy).toHaveBeenCalledWith(filePath);
      });
    });

    test("Write Template File Method", async () => {
      const filePath = join(OUTPUT_FOLDER_PATH, Creator.templateFileName);
      const folder = { fsPath: OUTPUT_FOLDER_PATH } as VSCodeUri;

      await Creator.writeTemplateFile(folder);

      const fileContent = await readFile(filePath, "utf-8");

      const parsedContent =
        typeof Creator.template === "string"
          ? fileContent
          : JSON.parse(fileContent);

      expect(parsedContent).toStrictEqual(Creator.template);
    });

    describe("Show Success Message Method", () => {
      const filePath = "path...";

      const checkInfoMessage = () => {
        expect(window.showInformationMessage).toHaveBeenCalledTimes(1);
        expect(window.showInformationMessage).toHaveBeenCalledWith(
          Creator.onSuccess,
          SingleTemplate.VIEW_TEMPLATE,
          SingleTemplate.VIEW_DOCS
        );
      };

      const checkNoTextDocument = () => {
        expect(workspace.openTextDocument).toHaveBeenCalledTimes(0);
        expect(window.showTextDocument).toHaveBeenCalledTimes(0);
      };

      const checkNoUri = () => {
        expect(Uri.parse).toHaveBeenCalledTimes(0);
        expect(env.openExternal).toHaveBeenCalledTimes(0);
      };

      test("With no selection", async () => {
        window.showInformationMessage.mockReturnValue(
          Promise.resolve(undefined)
        );

        await Creator.showSuccessMessage(filePath);

        checkInfoMessage();
        checkNoTextDocument();
        checkNoUri();
      });

      test(`With '${SingleTemplate.VIEW_TEMPLATE}' selected`, async () => {
        window.showInformationMessage.mockReturnValue(
          SingleTemplate.VIEW_TEMPLATE
        );
        const doc = {};
        workspace.openTextDocument.mockReturnValue(Promise.resolve(doc));

        await Creator.showSuccessMessage(filePath);

        checkInfoMessage();

        expect(workspace.openTextDocument).toHaveBeenCalledTimes(1);
        expect(workspace.openTextDocument).toHaveBeenCalledWith(filePath);

        expect(window.showTextDocument).toHaveBeenCalledTimes(1);
        expect(window.showTextDocument).toHaveBeenCalledWith(doc);

        checkNoUri();
      });

      test(`With '${SingleTemplate.VIEW_DOCS}' selected`, async () => {
        window.showInformationMessage.mockReturnValue(SingleTemplate.VIEW_DOCS);
        const uri = {};
        Uri.parse.mockReturnValue(uri);

        await Creator.showSuccessMessage(filePath);

        checkInfoMessage();
        checkNoTextDocument();

        expect(Uri.parse).toHaveBeenCalledTimes(1);
        expect(Uri.parse).toHaveBeenCalledWith(Creator.docsLink);

        expect(env.openExternal).toHaveBeenCalledTimes(1);
        expect(env.openExternal).toHaveBeenCalledWith(uri);
      });
    });
  });
