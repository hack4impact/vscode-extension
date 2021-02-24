// Externals
import { readFile } from "fs/promises";
import { join } from "path";

// Internals
import ConfigCreators from "../../src/commands/config-creators";
import { OUTPUT_FOLDER_PATH } from "../constants";

for (const Creator of ConfigCreators)
  test(Creator.title, async () => {
    await Creator.handler();

    const fileContent = await readFile(
      join(OUTPUT_FOLDER_PATH, Creator.configFileName),
      "utf-8"
    );

    expect(fileContent).toStrictEqual(Creator.config);
  });
