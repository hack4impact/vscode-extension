import { listFiles, PackageManager } from "vsce";
import { checkArray } from "./helpers";

test("Correct files to be published", async () => {
  const files = await listFiles({ packageManager: PackageManager.Npm });

  checkArray(
    [
      "AUTHORS",
      "CHANGELOG.md",
      "LICENSE.md",
      "package.json",
      "README.md",
      "static/hack4impact-icon.png",
    ],
    files
  );
});
