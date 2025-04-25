// Tests for isPalindrome function

const { isPalindrome } = require("../utils");

describe("isPalindrome", () => {
  test("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test("returns true for palindrome with mixed case letters", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("throws error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar1")).toThrow(
      "Input must contain only alphabetic characters"
    );
    expect(() => isPalindrome("race car")).toThrow(
      "Input must contain only alphabetic characters"
    );
  });

  test("throws error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string");
  });
});
