import { mkdir, rm } from "fs/promises";
import { join } from "path";

export default async (): Promise<void> => {
  const outputPath = join(__dirname, "..", "__output__");

  await rm(outputPath, { force: true, recursive: true });

  await mkdir(outputPath);
};
