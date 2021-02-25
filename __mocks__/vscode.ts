export const window = {
  showInformationMessage: jest.fn(),
  showErrorMessage: jest.fn(),
  showWarningMessage: jest.fn(),
  showOpenDialog: jest.fn(),
  showTextDocument: jest.fn(),
  showQuickPick: jest.fn(),
};

export const workspace = {
  openTextDocument: jest.fn(),
};

export const commands = {};

export const env = {
  openExternal: jest.fn(),
};

export const Uri = {
  parse: jest.fn(),
};

const vscode = {
  window,
  workspace,
  commands,
  env,
  Uri,
};

export default vscode;
