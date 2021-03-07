import pkg from "../../package.json";
import { valid, validRange } from "semver";
import { checkArray, checkIfObjectLiteral, checkObject } from "../helpers";

test("Correct name", () => {
  expect(pkg.name).toBe("h4i-recommendations");
});

test("Correct publisher", () => {
  expect(pkg.publisher).toBe("hack4impact");
});

test("Correct display name", () => {
  expect(pkg.displayName).toBe("Hack4Impact's Recommendations");
});

test("Correct description", () => {
  expect(pkg.description).toBe(
    "Hack4Impact's Recommended Extensions and Templates for Quality Project Development"
  );
});

test("Valid version", () => {
  expect(valid(pkg.version)).not.toBeNull();
});

test("Correct main", () => {
  expect(pkg.main).toBe("./dist/extension.js");
});

test("Correct homepage", () => {
  expect(pkg.homepage).toBe(
    "https://marketplace.visualstudio.com/items?itemName=hack4impact.h4i-recommendations"
  );
});

test("Correct icon", () => {
  expect(pkg.icon).toBe("static/hack4impact-icon.png");
});

test("Correct license", () => {
  expect(pkg.license).toBe("MIT");
});

describe("Correct author", () => {
  const author = pkg.author;

  checkObject(
    {
      name: "Hack4Impact",
      url: "https://hack4impact.org/",
    },
    author
  );
});

describe("Correct repository", () => {
  const repo = pkg.repository;

  checkObject(
    {
      type: "git",
      url: "https://github.com/hack4impact/vscode-extension",
    },
    repo
  );
});

test("Correct categories", () => {
  const categories = pkg.categories;

  checkArray(["Extension Packs", "Linters", "Formatters"], categories);
});

describe("Correct bugs", () => {
  const bugs = pkg.bugs;

  checkObject(
    { url: "https://github.com/hack4impact/vscode-extension/issues" },
    bugs
  );
});

describe("Correct engines", () => {
  const engines = pkg.engines;

  expect(Object.keys(engines).length).toEqual(1);

  test("vscode", () => {
    expect(validRange(engines.vscode)).not.toBeNull();
  });
});

test("Correct extension pack", () => {
  const extensions = pkg.extensionPack;

  checkArray(
    [
      "esbenp.prettier-vscode",
      "dbaeumer.vscode-eslint",
      "DavidAnson.vscode-markdownlint",
      "editorconfig.editorconfig",
    ],
    extensions
  );
});

test("Contains scripts", () => {
  const scripts = pkg.scripts;

  checkIfObjectLiteral(scripts);
});

test("Contains dependencies", () => {
  const dependencies = pkg.dependencies;

  checkIfObjectLiteral(dependencies);
});

test("Contains dev dependencies", () => {
  const devDeps = pkg.devDependencies;

  checkIfObjectLiteral(devDeps);
});

test("Contains contributes", () => {
  const contributes = pkg.contributes;

  checkIfObjectLiteral(contributes);
  expect(Array.isArray(contributes.commands)).toBe(true);
  expect(Array.isArray(contributes.keybindings)).toBe(true);
  expect(Array.isArray(contributes.languages)).toBe(true);
  expect(Array.isArray(contributes.grammars)).toBe(true);

  const config = contributes.configuration;

  checkIfObjectLiteral(config);
  expect(config.title).toBe("Hack4Impact's Recommendations");
  checkIfObjectLiteral(config.properties);
});

test("Contains activation events", () => {
  const activationEvents = pkg.activationEvents;

  expect(Array.isArray(activationEvents)).toBe(true);
});

test("Correct keywords", () => {
  const keywords = pkg.keywords;

  checkArray(
    [
      "eslint",
      "templates",
      "vscode",
      "prettier",
      "vscode-extension",
      "editorconfig",
      "markdownlint",
      "linters",
      "formatters",
      "configuration",
      "extension-pack",
      "hack4impact",
    ],
    keywords
  );
});
