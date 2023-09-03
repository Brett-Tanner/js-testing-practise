import { describe, expect, it } from "vitest";
import { add, divide, multiply, subtract } from "../calculator/calculator";

describe("calculator tests", () => {
  it("adds two numbers", () => {
    expect(add(60, 9)).toBe(69);
  });

  it("divides two numbers", () => {
    expect(divide(138, 2)).toBe(69);
  });

  it("multiplies two numbers", () => {
    expect(multiply(23, 3)).toBe(69);
  });

  it("subtracts two numbers", () => {
    expect(subtract(70, 1)).toBe(69);
  });
});
