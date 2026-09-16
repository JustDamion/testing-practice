import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
} from "./script.js";
import { test, expect, describe } from "@jest/globals";

describe("capitalize function works", () => {
  const STRINGS = [
    { input: "test", expected: "Test" },
    { input: "elephant", expected: "Elephant" },
    { input: "the Eiffel Tower", expected: "The Eiffel Tower" },
  ];

  test("capitalizes first letter of string", () => {
    for (let string of STRINGS) {
      expect(capitalize(string.input)).toMatch(string.expected);
    }
  });
});

describe("reverseString function works", () => {
  const STRINGS = [
    { input: "test", expected: "tset" },
    { input: "Elephant", expected: "tnahpelE" },
    { input: "the Eiffel Tower", expected: "rewoT leffiE eht" },
  ];

  test("reverses string", () => {
    for (let string of STRINGS) {
      expect(reverseString(string.input)).toMatch(string.expected);
    }
  });
});

describe("calculator object works", () => {
  describe("add function should work", () => {
    test("should have add function", () => {
      expect(calculator.add()).toBeDefined;
    });

    test("should add 2 and 2 to equal 4", () => {
      expect(calculator.add(2, 2)).toBe(4);
    });

    test("should add 120 and 50 to equal 170", () => {
      expect(calculator.add(120, 50)).toBe(170);
    });
  });

  describe("subtract function should work", () => {
    test("should have subtract function", () => {
      expect(calculator.subtract()).toBeDefined;
    });

    test("should subtract 24 from 100 to equal 76", () => {
      expect(calculator.subtract(100, 24)).toBe(76);
    });

    test("should subtract 509 from 0 to equal -509", () => {
      expect(calculator.subtract(0, 509)).toBe(-509);
    });
  });

  describe("divide function should work", () => {
    test("should have divide function", () => {
      expect(calculator.divide()).toBeDefined;
    });

    test("should divide 10 by 2 to equal 5", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("should divide 800 by 400 to equal 2", () => {
      expect(calculator.divide(800, 400)).toBe(2);
    });
  });

  describe("multiply function should work", () => {
    test("should have multiply function", () => {
      expect(calculator.multiply()).toBeDefined;
    });

    test("should multiply 500 by 2 to equal 1000", () => {
      expect(calculator.multiply(500, 2)).toBe(1000);
    });

    test("should multiply 847 by 0 to equal 0", () => {
      expect(calculator.multiply(847, 0)).toBe(0);
    });
  });
});

describe("caesarCipher function works", () => {
  test("should wrap if at end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
  });

  test("should keep case during conversion", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
  });

  test("should work with spaces and punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
  });
});

describe("analyzeArray function works", () => {
  test("should return object with required properties", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  describe("average property is correct", () => {
    test("average property should exist", () => {
      expect(analyzeArray([0])).toHaveProperty("average");
    });

    test("should calculate average property correctly", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    });

    test("should calculate average of array with one element correctly", () => {
      expect(analyzeArray([1]).average).toBe(1);
    });
  });

  describe("min property is correct", () => {
    test("min property should exist", () => {
      expect(analyzeArray([0])).toHaveProperty("min");
    });

    test("should calculate min property correctly", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    });

    test("should calculate min property correctly with different order", () => {
      expect(analyzeArray([8, 3, 4, 1, 2, 6]).min).toBe(1);
    });
  });

  describe("max property is correct", () => {
    test("max property should exist", () => {
      expect(analyzeArray([0])).toHaveProperty("max");
    });

    test("should calculate max property correctly", () => {
      expect(analyzeArray([8, 3, 4, 1, 2, 6]).max).toBe(8);
    });

    test("should calculate max property correctly with different order", () => {
      expect(analyzeArray([3, 4, 1, 2, 8, 6]).max).toBe(8);
    });
  });

  describe("length property is correct", () => {
    test("length property should exist", () => {
      expect(analyzeArray([0])).toHaveProperty("length");
    });

    test("should calculate length property correctly", () => {
      expect(analyzeArray([8, 3, 4, 1, 2, 6]).length).toBe(6);
    });

    test("should calculate length of array with one element", () => {
      expect(analyzeArray([1]).length).toBe(1);
    });
  });
});
