import { expect, expectTypeOf, test } from "vitest";
import { capitalize } from "../capitalize/capitalize";
import { describe } from "vitest";

describe("capitalize tests", () => {
  test("capitalizes the passed string", () => {
    expect(capitalize("test")).toBe("Test");
  });

  test("capitalize return type", () => {
    expectTypeOf(capitalize("test")).toBeString();
  });
});
