import { beforeEach, expect, it, vi } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { showError } from "./dom";

// Testing Library can make it easier to work with the DOM
// https://testing-library.com/
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it("should add an error paragraph to the id='errors' element", () => {
  showError("test");
  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;
  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;
  expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testErrorMessage = "Test";
  showError(testErrorMessage);
  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;
  expect(errorParagraph.textContent).toBe(testErrorMessage);
});
