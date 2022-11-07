import { it, expect, beforeAll, describe } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message and data", () => {
    let testStatus = "404";
    let testMessage = "message";
    let testData = { key: "test" };
    const testError = new HttpError(testStatus, testMessage, testData);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined as data if no data is provided", () => {
    let testStatus = "404";
    let testMessage = "message";
    const testError = new HttpError(testStatus, testMessage);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided error message", () => {
    const errorMessage = "message";
    const error = new ValidationError(errorMessage);
    expect(error.message).toBe(errorMessage);
  });
});
