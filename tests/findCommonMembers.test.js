const findCommonMembers = require("../utils/findCommonMembers");

test("handles common values correctly", () => {
  expect(findCommonMembers([1, 2, 3], [2, 4])).toEqual([2]);
});

test("handles no common values correctly", () => {
  expect(findCommonMembers([1, 2], [3, 4])).toEqual([]);
});

test("handles empty arrays correctly", () => {
  expect(findCommonMembers([], [])).toEqual([]);
});

test("handles duplicate values correctly", () => {
  expect(findCommonMembers([1, 2, 2, 3], [2, 2, 4])).toEqual([2]);
});

test("works when arrays are identical", () => {
  expect(findCommonMembers([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
});

test("works when second array is subset of first", () => {
  expect(findCommonMembers([1, 2, 3, 4], [4, 2])).toEqual([2, 4]);
});

test("works with single-element arrays", () => {
  expect(findCommonMembers([1], [1])).toEqual([1]);
});

test("returns empty array when no overlap with large values", () => {
  expect(findCommonMembers([1000, 2000], [3000, 4000])).toEqual([]);
});

test("handles non-number values safely", () => {
  expect(findCommonMembers(["1", "2"], [1, 2])).toEqual([]);
});

test("returns empty array for invalid inputs", () => {
  expect(findCommonMembers(null, undefined)).toEqual([]);
});

test("does not mutate original arrays", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3];

  findCommonMembers(arr1, arr2);

  expect(arr1).toEqual([1, 2, 3]);
  expect(arr2).toEqual([2, 3]);
});
