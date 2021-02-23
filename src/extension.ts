import { window, commands, ExtensionContext } from "vscode";

export function activate(context: ExtensionContext): void {
  console.log("Congratulations, your extension 'placeholder' is now active!");

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = commands.registerCommand("placeholder.helloWorld", () => {
    // The code you place here will be executed every time your command is executed
    window.showInformationMessage("Hello World from placeholder!");
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
// export function deactivate() {}
