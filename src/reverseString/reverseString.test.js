import { describe, expect, expectTypeOf, test } from "vitest";
import { reverseString } from "../reverseString/reverseString.ts";

describe("reverseString tests", () => {
  test("reverses single word", () => {
    expect(reverseString("pot")).toBe("top");
  });

  test("reverses multiple words", () => {
    expect(reverseString("not time pot")).toBe("top emit ton");
  });
});
