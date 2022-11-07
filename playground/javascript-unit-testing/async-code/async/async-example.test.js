import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value (callback)", (done) => {
  const testUserEmail = "test@test.com";
  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate a token value (promise)", () => {
  const testUserEmail = "test@test.com";
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value (async/await)", async () => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
