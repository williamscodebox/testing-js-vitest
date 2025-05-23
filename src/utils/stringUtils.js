export const toUpperCase = (str) => str.toUpperCase();
export const toLowerCase = (str) => str.toLowerCase();

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const reverse = (str) => str.split("").reverse().join("");

// Create a test to check the below isPalindrome
// // A palindrome is a word, phrase, number, or other sequence of characters that reads the same
// // forward and backward (ignoring spaces, punctuation, and capitalization

export const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
