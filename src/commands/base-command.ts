// Externals
import { ExtensionContext } from "vscode";

export default class BaseCommand {
  cmdName: string;
  title: string;

  constructor(cmdName: string, title: string) {
    this.cmdName = cmdName;
    this.title = title;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handler(context: ExtensionContext, ...args: any[]): Promise<void> {
    // This function is called when ANY command is run
  }
}
