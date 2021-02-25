import { Uri, window } from "vscode";

export class BaseCommand {
  cmdName: string;
  title: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handler(...args: any[]): Promise<void> {
    // This function is called when ANY command is run
  }
}

export const createCommandTitle = (title: string): string => {
  const prepend = "Hack4Impact: ";
  if (title.indexOf(prepend) !== 0) return `${prepend}${title}`;
  return title;
};

export const createCommandName = (cmdName: string): string => {
  const prepend = "hack4impact.";
  if (cmdName.indexOf(prepend) !== 0) return `${prepend}${cmdName}`;
  return cmdName;
};

export const getSingleFolder = async (): Promise<Uri | undefined> => {
  const folderResult = await window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
  });

  if (folderResult) return folderResult[0];
  return undefined;
};
