import pkg from "../package.json";
import { valid, validRange } from "semver";

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

  expect(Object.keys(author).length).toEqual(2);

  test("name", () => {
    expect(author.name).toBe("Hack4Impact");
  });

  test("url", () => {
    expect(author.url).toBe("https://hack4impact.org/");
  });
});

describe("Correct repository", () => {
  const repo = pkg.repository;

  expect(Object.keys(repo).length).toEqual(2);

  test("type", () => {
    expect(repo.type).toBe("git");
  });

  test("url", () => {
    expect(repo.url).toBe("https://github.com/hack4impact/h4i-extension-pack");
  });
});

test("Correct categories", () => {
  const categories = pkg.categories;

  expect(categories.length).toBe(3);
  expect(categories).toContain("Extension Packs");
  expect(categories).toContain("Linters");
  expect(categories).toContain("Formatters");
});

describe("Correct bugs", () => {
  const bugs = pkg.bugs;

  expect(Object.keys(bugs).length).toEqual(1);

  test("url", () => {
    expect(bugs.url).toEqual(
      "https://github.com/hack4impact/h4i-extension-pack/issues"
    );
  });
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

  expect(extensions.length).toBe(4);
  expect(extensions).toContain("esbenp.prettier-vscode");
  expect(extensions).toContain("dbaeumer.vscode-eslint");
  expect(extensions).toContain("DavidAnson.vscode-markdownlint");
  expect(extensions).toContain("eamodio.gitlens");
});

test("Contains scripts", () => {
  const scripts = pkg.scripts;

  expect(!!scripts && scripts.constructor === Object).toBe(true);
});

test("Contains dev dependencies", () => {
  const devDeps = pkg.devDependencies;

  expect(!!devDeps && devDeps.constructor === Object).toBe(true);
});

test("Contains no dependencies", () => {
  //@ts-expect-error Making sure it is not defined
  expect(pkg.dependencies).toBeUndefined();
});
