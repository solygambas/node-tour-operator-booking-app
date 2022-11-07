import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        // path.join(process.cwd(), 'data', filename);
        return args[args.length - 1]; // filename (last argument)
      },
    },
  };
});

it("should execute the writeFile method with filename and data", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  writeData(testData, testFileName);
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  writeData(testData, testFileName);
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined(); // work with custom fs implementation in __mocks__
});
