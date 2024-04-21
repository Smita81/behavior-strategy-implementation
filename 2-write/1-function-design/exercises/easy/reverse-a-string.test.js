// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...

    it('a string with mixed cases and spaces', () => {
      expect(solution('Hello World')).toEqual('dlroW olleH');
    });
    it('a string with special characters', () => {
      expect(solution('!@#$%^&*()')).toEqual(')(*&^%$#@!');
    });
    it('a string with numbers', () => {
      expect(solution('12345')).toEqual('54321');
    });
    it('a long string', () => {
      expect(solution('abcdefghijklmnopqrstuvwxyz')).toEqual('zyxwvutsrqponmlkjihgfedcba');
    });
    it('a string with repeated characters', () => {
      expect(solution('hellohello')).toEqual('olleholleh');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
