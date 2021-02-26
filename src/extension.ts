// Externals
import { commands, ExtensionContext } from "vscode";

// Internals
import Commands from "./commands";

export function activate(context: ExtensionContext): void {
  Commands.forEach((Command) => {
    const disposable = commands.registerCommand(Command.cmdName, (...args) =>
      Command.handler(context, ...args)
    );
    context.subscriptions.push(disposable);
  });
}

// this method is called when your extension is deactivated
// export function deactivate() {}
