import { describe, expect, it } from "vitest";
import { caesarCipher } from "../caesarCipher/caesarCipher";

describe("caesarCipher tests", () => {
  it("ciphers a string", () => {
    expect(caesarCipher("test", 1)).toBe("uftu");
  });

  it("wraps from z to a", () => {
    expect(caesarCipher("z", 2)).toBe("b");
  });

  it("preserves case", () => {
    expect(caesarCipher("Zy", 2)).toBe("Ba");
  });

  it("ciphers punctuation", () => {
    expect(caesarCipher("!@$", 1)).toBe('" %');
  });

  it("handles negative offsets", () => {
    expect(caesarCipher("Apples to oranges", -5)).toBe("Vkkgzn<oj<jmvibzn");
  });
});
