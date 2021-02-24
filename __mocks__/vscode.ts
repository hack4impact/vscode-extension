// Internals
import { OUTPUT_FOLDER_PATH } from "../__tests__/constants";

const vscodeWindow = {
  showInformationMessage: jest.fn(),
  showErrorMessage: jest.fn(),
  showWarningMessage: jest.fn(),
  showOpenDialog: jest.fn().mockReturnValue(
    Promise.resolve([
      {
        fsPath: OUTPUT_FOLDER_PATH,
      },
    ])
  ),
};

const workspace = {};

const commands = {};

const vscode = {
  window: vscodeWindow,
  workspace,
  commands,
};

module.exports = vscode;
