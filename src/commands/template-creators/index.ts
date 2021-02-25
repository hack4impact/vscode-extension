// Externals
import { Uri, window } from "vscode";

// Internals
import ESLint from "./config/eslint";
import Prettier from "./config/prettier";
import EditorConfig from "./config/editorconfig";
import MarkdownLint from "./config/markdownlint";

import GitIgnore from "./misc/gitignore";
import Changelog from "./misc/changelog";
import License from "./misc/license";

import { BaseCommand, getSingleFolder } from "../helpers";
import { TemplateCreator } from "./helpers";

const allTemplates = [
  ESLint,
  Prettier,
  EditorConfig,
  MarkdownLint,
  GitIgnore,
  Changelog,
  License,
];

export class CreateTemplates extends BaseCommand {
  constructor() {
    super();
    this.cmdName = "template.create";
    this.title = "Create Template Files";
  }

  async handler(...args: any[]): Promise<void> {
    await super.handler(...args);

    const picked = await this.showTemplateQuickPick();

    if (picked) {
      const folder = await getSingleFolder();

      if (folder) {
        const templates = picked
          .map((p) => allTemplates.find((t) => t.name === p))
          .filter((t): t is TemplateCreator => t !== undefined);

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
        placeHolder: "Pick templates to create...",
        ignoreFocusOut: true,
      }
    );
  }

  async createTemplateFiles(
    templates: TemplateCreator[],
    folder: Uri
  ): Promise<string[]> {
    return Promise.all(
      templates.map((template) => template.writeTemplateFile(folder))
    );
  }

  async showSuccessMessages(
    templates: TemplateCreator[],
    files: string[]
  ): Promise<void[]> {
    return Promise.all(
      templates.map((template, i) => template.showSuccessMessage(files[i]))
    );
  }
}

export default allTemplates;
