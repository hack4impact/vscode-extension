import { env, window, Uri, workspace } from "vscode";
import { join } from "path";
import { promises } from "fs";

const { writeFile } = promises;

export class ConfigCreator {
  static readonly VIEW_FILE = "View File";
  static readonly VIEW_DOCS = "View Docs";

  toolName: string;
  title: string;
  cmdName: string;
  config: string;
  configFileName: string;
  docsLink: string;

  constructor(
    toolName: string,
    config: string | Record<string, any>,
    configFileName: string,
    docsLink: string
  ) {
    this.toolName = toolName;
    this.title = `Create ${toolName} Configuration File`;
    this.cmdName = `create${toolName}ConfigFile`;
    this.config =
      typeof config === "string"
        ? config
        : JSON.stringify(config, undefined, 2);
    this.configFileName = configFileName;
    this.docsLink = docsLink;
  }

  async handler(): Promise<void> {
    const folderResult = await window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
    });

    if (folderResult && folderResult.length === 1) {
      const folderUri = folderResult[0];

      const outputPath = join(folderUri.fsPath, this.configFileName);

      await writeFile(outputPath, this.config, "utf-8");

      const selected = await window.showInformationMessage(
        `Created ${this.toolName} Configuration File!`,
        ConfigCreator.VIEW_FILE,
        ConfigCreator.VIEW_DOCS
      );

      if (selected === ConfigCreator.VIEW_FILE) {
        const doc = await workspace.openTextDocument(outputPath);
        await window.showTextDocument(doc);
      } else if (selected === ConfigCreator.VIEW_DOCS)
        await env.openExternal(Uri.parse(this.docsLink));
    }
  }
}
