import pkg from "../package.json";
import { valid, validRange } from "semver";
import { checkArray, checkIfObjectLiteral, checkObject } from "./helpers";

test("Correct name", () => {
  expect(pkg.name).toBe("h4i-extension-pack");
});

test("Correct publisher", () => {
  expect(pkg.publisher).toBe("hack4impact");
});

test("Correct display name", () => {
  expect(pkg.displayName).toBe("Hack4Impact's Recommended Extensions");
});

test("Correct description", () => {
  expect(pkg.description).toBe(
    "Hack4Impact's Recommended Extensions for Quality Project Development"
  );
});

test("Valid version", () => {
  expect(valid(pkg.version)).not.toBeNull();
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
      url: "https://github.com/hack4impact/h4i-extension-pack",
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
    { url: "https://github.com/hack4impact/h4i-extension-pack/issues" },
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
      "eamodio.gitlens",
    ],
    extensions
  );
});

test("Contains scripts", () => {
  const scripts = pkg.scripts;

  checkIfObjectLiteral(scripts);
});

test("Contains dev dependencies", () => {
  const devDeps = pkg.devDependencies;

  checkIfObjectLiteral(devDeps);
});

test("Contains no dependencies", () => {
  //@ts-expect-error Making sure it is not defined
  expect(pkg.dependencies).toBeUndefined();
});
