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
