import { beforeEach, describe, expect, it, vi } from "vitest";
import { extractPostData, savePost } from "./posts";

const testTitle = "Test title";
const testContent = "Test content";
let testFormData;

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve({ ...testFormData, created: new Date() });
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal("fetch", testFetch);

beforeEach(() => {
  testFormData = {
    title: testTitle,
    content: testContent,
    get(identifier) {
      return this[identifier];
    },
  };
});

describe("extractPostData()", () => {
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);
    expect(data).toEqual({ title: testTitle, content: testContent });
  });
});

describe("savePost()", () => {
  it("should add a date to the provided form data", async () => {
    const data = await savePost(testFormData);
    expect(data.created).toBeDefined();
  });
});
