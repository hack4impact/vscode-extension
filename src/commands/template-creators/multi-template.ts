// Externals
import { ExtensionContext, Uri, window } from "vscode";

// Internals
import BaseCommand from "../base-command";
import { getSingleFolder } from "../helpers";
import allTemplates from "./index";
import SingleTemplate from "./single-template";

class MultiTemplate extends BaseCommand {
  static readonly PLACEHOLDER = "Pick templates to create...";

  constructor() {
    super("templates.create", "Create Template Files");
  }

  async handler(context: ExtensionContext, ...args: any[]): Promise<void> {
    await super.handler(context, ...args);

    const picked = await this.showTemplateQuickPick();

    if (picked && picked.length) {
      const folder = await getSingleFolder();

      if (folder) {
        const templates = picked
          .map((p) => allTemplates.find((t) => t.name === p))
          .filter((t): t is SingleTemplate => t !== undefined);

        const createdFiles = await this.createTemplateFiles(templates, folder);

        await this.showSuccessMessages(templates, createdFiles);
      }
    }
  }

  async showTemplateQuickPick(): Promise<string[] | undefined> {
    return window.showQuickPick(
      allTemplates.map((t) => t.name),
      {
        canPickMany: true,
        placeHolder: MultiTemplate.PLACEHOLDER,
        ignoreFocusOut: true,
      }
    );
  }

  async createTemplateFiles(
    templates: SingleTemplate[],
    folder: Uri
  ): Promise<string[]> {
    return Promise.all(
      templates.map((template) => template.writeTemplateFile(folder))
    );
  }

  async showSuccessMessages(
    templates: SingleTemplate[],
    files: string[]
  ): Promise<void[]> {
    return Promise.all(
      templates.map((template, i) => template.showSuccessMessage(files[i]))
    );
  }
}

export default MultiTemplate;
