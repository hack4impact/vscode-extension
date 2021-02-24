import { env, window, Uri, workspace } from "vscode";
import { join } from "path";
import { promises } from "fs";
import { writeFile as writeJSONFile } from "jsonfile";

const { writeFile } = promises;

export class TemplateCreator {
  static readonly VIEW_FILE = "View File";
  static readonly VIEW_DOCS = "View Docs";

  toolName: string;
  title: string;
  cmdName: string;
  template: string | Record<string, any>;
  templateFileName: string;
  docsLink: string;
  successMessage: string;

  constructor(
    toolName: string,
    template: string | Record<string, any>,
    templateFileName: string,
    docsLink: string,
    isConfig: boolean
  ) {
    this.toolName = toolName;
    this.title = `Create ${toolName}${isConfig ? " Configuration" : ""} File`;
    this.cmdName = `create${toolName}${isConfig ? "Config" : ""}File`;
    this.template = template;
    this.templateFileName = templateFileName;
    this.docsLink = docsLink;
    this.successMessage = `Created ${this.toolName} ${
      isConfig ? "Configuration" : ""
    } File!`;
  }

  async handler(): Promise<void> {
    const folderResult = await window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
    });

    if (folderResult && folderResult.length === 1) {
      const folderUri = folderResult[0];

      const outputPath = join(folderUri.fsPath, this.templateFileName);

      typeof this.template === "string"
        ? await writeFile(outputPath, this.template, "utf-8")
        : await writeJSONFile(outputPath, this.template, {
            EOL: "\n",
            spaces: 2,
          });

      const selected = await window.showInformationMessage(
        this.successMessage,
        TemplateCreator.VIEW_FILE,
        TemplateCreator.VIEW_DOCS
      );

      if (selected === TemplateCreator.VIEW_FILE) {
        const doc = await workspace.openTextDocument(outputPath);
        await window.showTextDocument(doc);
      } else if (selected === TemplateCreator.VIEW_DOCS)
        await env.openExternal(Uri.parse(this.docsLink));
    }
  }
}
