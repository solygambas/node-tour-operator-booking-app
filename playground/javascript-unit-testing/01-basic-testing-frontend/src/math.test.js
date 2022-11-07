import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // arrange
  const numbers = [1, 2];

  // act
  const result = add(numbers);

  // assert
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2"];
  const result = add(inputs);
  const expectedResult = inputs.reduce(
    (prevValue, currentValue) => +prevValue + +currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an enmpty array is provided", () => {
  const inputs = [];
  const result = add(inputs);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => add();
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => add(num1, num2);
  expect(resultFn).toThrow(/is not iterable/);
});
