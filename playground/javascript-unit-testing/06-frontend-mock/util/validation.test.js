import { it, describe, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw an error if text is empty", () => {
    const text = "";
    const errorMessage = "error";
    const resultFn = () => validateNotEmpty(text, errorMessage);
    expect(resultFn).toThrow(errorMessage);
  });

  it("should throw an error if text is a whitespace", () => {
    const text = " ";
    const errorMessage = "error";
    const resultFn = () => validateNotEmpty(text, errorMessage);
    expect(resultFn).toThrow(errorMessage);
  });

  it("should not throw an error if text is a string", () => {
    const text = "this is a text";
    const errorMessage = "error";
    const resultFn = () => validateNotEmpty(text, errorMessage);
    expect(resultFn).not.toThrow(errorMessage);
  });
});
