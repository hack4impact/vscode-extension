import { listFiles, PackageManager } from "vsce";
import { checkArray } from "../helpers";

test("Correct files are packaged", async () => {
  const files = await listFiles({ packageManager: PackageManager.Npm });

  checkArray(
    [
      "AUTHORS",
      "CHANGELOG.md",
      "LICENSE.md",
      "package.json",
      "README.md",
      "static/hack4impact-icon.png",
      "static/rotating-icon.gif",
      "dist/extension.js",
      "dist/extension.js.map",
    ],
    files
  );
});
