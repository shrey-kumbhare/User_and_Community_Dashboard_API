function findCommonMembers(arr1, arr2) {
  // Validate inputs
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  // Store first array in a Hash Set for O(1) lookups
  const set1 = new Set(arr1); // O(n)
  const common = new Set(); // stores unique common IDs

  // Traverse second array
  for (const id of arr2) {
    // O(m)
    if (set1.has(id)) {
      // O(1)
      common.add(id); // O(1)
    }
  }

  // Time Complexity: O(n + m)
  // Space Complexity: O(n)
  return Array.from(common).sort((a, b) => a - b);
}

module.exports = findCommonMembers;
