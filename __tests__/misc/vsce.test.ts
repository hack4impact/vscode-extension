// Externals
import { existsSync } from "fs";
import { join } from "path";
import { listFiles, PackageManager } from "vsce";

// Internals
import { checkArray } from "../helpers";

test("Correct files are packaged", async () => {
  const files = await listFiles({ packageManager: PackageManager.Npm });
  const distPath = join(__dirname, "..", "..", "dist");

  const expected = [
    "AUTHORS",
    "CHANGELOG.md",
    "LICENSE.md",
    "package.json",
    "README.md",
    "static/hack4impact-icon.png",
    "static/rotating-icon.gif",
  ];

  if (existsSync(distPath))
    expected.push("dist/extension.js", "dist/extension.js.map");

  checkArray(expected, files);
});
