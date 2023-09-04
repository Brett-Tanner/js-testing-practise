import { describe, expect, test } from "vitest";
import { analyzeArray } from "../analyzeArray/analyzeArray";

describe("analyzeArray tests", () => {
  test("returns an object with avg, min, max & length keys", () => {
    const returnValue = analyzeArray([8, 9, 10, 111, 0]);

    expect(returnValue).toHaveProperty("avg");
    expect(returnValue).toHaveProperty("min");
    expect(returnValue).toHaveProperty("max");
    expect(returnValue).toHaveProperty("length");
  });

  test("correct for positive numbers", () => {
    const returnValue = analyzeArray([8, 11, 10, 111, 0]);

    expect(returnValue.avg).toBe(28);
    expect(returnValue.min).toBe(0);
    expect(returnValue.max).toBe(111);
    expect(returnValue.length).toBe(5);
  });

  test("correct for negative numbers", () => {
    const returnValue = analyzeArray([-8, -11, -10, -111, 0]);

    expect(returnValue.avg).toBe(-28);
    expect(returnValue.min).toBe(-111);
    expect(returnValue.max).toBe(0);
    expect(returnValue.length).toBe(5);
  });

  test("correct for mixed numbers", () => {
    const returnValue = analyzeArray([8, -8, 111, -111, 4, -4, 0]);

    expect(returnValue.avg).toBe(0);
    expect(returnValue.min).toBe(-111);
    expect(returnValue.max).toBe(111);
    expect(returnValue.length).toBe(7);
  });
});
