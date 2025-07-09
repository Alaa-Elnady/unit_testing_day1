const { capitalizeTextFirstChar, createArray } = require("../index");

describe("Test capitalizeTextFirstChar Function", () => {
  it("should return a string when a string is provided", () => {
    expect(typeof capitalizeTextFirstChar("hello world")).toBe("string");
  });

  it("should capitalize the first character of each word", () => {
    expect(capitalizeTextFirstChar("i'm ahmed ali")).toBe("I'm Ahmed Ali");
  });

  it("should throw a TypeError when parameter is not a string", () => {
    expect(() => capitalizeTextFirstChar(12)).toThrowError(
      TypeError,
      "parameter should be string"
    );
  });
});

describe("Test createArray Function", () => {
  it("should return an array", () => {
    expect(Array.isArray(createArray(3))).toBe(true);
  });

  it("should return array of length 2 containing 1 when passed 2", () => {
    const result = createArray(2);
    expect(result.length).toBe(2);
    expect(result).toContain(1);
  });

  it("should return array of length 3 not containing 3 when passed 3", () => {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result).not.toContain(3);
  });
});
