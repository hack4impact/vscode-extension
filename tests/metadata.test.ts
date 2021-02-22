import pkg from "../package.json";

test("Contains name", () => {
  expect(pkg.name).toBe("h4i-extension-pack");
});
