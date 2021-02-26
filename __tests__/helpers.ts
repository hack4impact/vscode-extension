import { ExtensionContext } from "vscode";

export const checkArray = <T = unknown>(expected: T[], actual: T[]): void => {
  expect(actual.length).toEqual(expected.length);

  expected.forEach((e) => {
    expect(actual).toContain(e);
  });
};

export const checkObject = <T = unknown>(
  expected: Record<string, T>,
  actual: Record<string, T>
): void => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  expect(actualKeys.length).toEqual(expectedKeys.length);

  expectedKeys.forEach((key) => {
    test(key, () => {
      expect(actual[key]).toEqual(expected[key]);
    });
  });
};

export const checkIfObjectLiteral = (obj: Record<string, unknown>): void => {
  expect(!!obj && obj.constructor === Object).toBe(true);
};

export const mockExtensionContext = {} as ExtensionContext;
