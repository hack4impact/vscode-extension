// Externals
import { env, window, Uri, workspace } from "vscode";
import { join } from "path";
import { promises } from "fs";
import { writeFile as writeJSONFile } from "jsonfile";

// Internals
import { BaseCommand } from "../helpers";

const { writeFile } = promises;

interface TemplateCreatorParams {
  name: string;
  template: string | Record<string, any>;
  templateFileName: string;
  docsLink: string;
  isConfig: boolean;
}

export class TemplateCreator extends BaseCommand {
  static readonly VIEW_FILE = "View Template";
  static readonly VIEW_DOCS = "View Docs";

  // Provided instance vars
  name: string;
  templateFileName: string;
  template: string | Record<string, any>;
  docsLink: string;
  isConfig: boolean;

  // Constructed instance vars
  onSuccess: string;

  constructor(params: TemplateCreatorParams) {
    super();
    const { name, templateFileName, template, docsLink, isConfig } = params;

    this.name = name;
    this.templateFileName = templateFileName;
    this.template = template;
    this.docsLink = docsLink;
    this.isConfig = isConfig;

    this.title = `Create ${name}${isConfig ? " Configuration" : ""} Template`;
    this.cmdName = `template.create.${name}${isConfig ? "Config" : ""}`;
    this.onSuccess = `Created ${name}${
      isConfig ? " Configuration" : ""
    } Template!`;
  }

  async handler(...args: any[]): Promise<void> {
    await super.handler(...args);
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
        this.onSuccess,
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
