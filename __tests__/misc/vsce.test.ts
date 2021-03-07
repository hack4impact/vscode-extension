// Externals
import { join, relative } from "path";
import { listFiles, PackageManager } from "vsce";
import recursive from "recursive-readdir";

// Internals
import { checkArray } from "../helpers";
import { ROOT_FOLDER_PATH } from "../constants";

const getDistFiles = async (): Promise<string[]> => {
  let distFiles: string[];
  try {
    const absoluteDistPaths = await recursive(join(ROOT_FOLDER_PATH, "dist"));
    distFiles = absoluteDistPaths.map((file) =>
      relative(ROOT_FOLDER_PATH, file)
    );
  } catch (e) {
    distFiles = [];
  }

  return distFiles;
};

const getStaticFiles = async (): Promise<string[]> => {
  const absoluteStaticPaths = await recursive(join(ROOT_FOLDER_PATH, "static"));
  return absoluteStaticPaths.map((file) => relative(ROOT_FOLDER_PATH, file));
};

const getLanguageFiles = async (): Promise<string[]> => {
  const absoluteStaticPaths = await recursive(
    join(ROOT_FOLDER_PATH, "languages")
  );
  return absoluteStaticPaths.map((file) => relative(ROOT_FOLDER_PATH, file));
};

test("Correct files are packaged", async () => {
  const [actual, distFiles, staticFiles, languageFiles] = await Promise.all([
    listFiles({ packageManager: PackageManager.Npm }),
    getDistFiles(),
    getStaticFiles(),
    getLanguageFiles(),
  ]);

  const expected = [
    "AUTHORS",
    "CHANGELOG.md",
    "LICENSE.md",
    "package.json",
    "README.md",
    ...distFiles,
    ...staticFiles,
    ...languageFiles,
  ];

  checkArray(expected, actual);
}, 15000);
