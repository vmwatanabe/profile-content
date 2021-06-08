import { getFileName } from "./root.helpers";

describe("content helpers", () => {
  it("gets correct index", () => {
    expect(getFileName("/")).toBe("1");
  });
});
