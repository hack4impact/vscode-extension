import { window } from "vscode";
import { join } from "path";
import { promises } from "fs";

const { writeFile } = promises;

export class ConfigCreator {
  title: string;
  cmdName: string;
  config: string;
  configFileName: string;

  constructor(
    title: string,
    config: string | Record<string, any>,
    configFileName: string
  ) {
    this.title = `Create ${title} Configuration File`;
    this.cmdName = `create${title}ConfigFile`;
    this.config =
      typeof config === "string"
        ? config
        : JSON.stringify(config, undefined, 2);
    this.configFileName = configFileName;
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
    }
  }
}
