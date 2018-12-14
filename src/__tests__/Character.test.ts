import Character from "../Character";

describe("Character", () => {
  test("does stuff", () => {
    expect(new Character("a", "name")).toBeDefined();
  });
});
