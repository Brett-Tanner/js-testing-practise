import { describe, expect, test } from "vitest";
import { capitalize } from "../capitalize/capitalize";

describe("capitalize tests", () => {
  test("capitalizes the passed string", () => {
    expect(capitalize("test")).toBe("Test");
  });
});
