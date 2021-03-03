// Externals
import { ExtensionContext } from "vscode";
import { createCommandName, createCommandTitle } from "./helpers";

export default class BaseCommand {
  cmdName: string;
  title: string;

  constructor(cmdName: string, title: string) {
    this.cmdName = createCommandName(cmdName);
    this.title = createCommandTitle(title);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handler(context: ExtensionContext, ...args: any[]): Promise<void> {
    // This function is called when ANY command is run
  }
}
