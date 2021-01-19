/* Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
i.e. findVowels(“this is a string”) ➞ 4 */

const vowels = ["a", "e", "i", "o", "u"];
const findVowels = (str) => {
  let result = 0;

  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      result++;
    }
  }
  return result;
};

console.log(findVowels("this is a text for testing my code"));

const vow = ["a", "e", "i", "o", "u"];

const findVowels1 = (str) => {
  let result = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vow.includes(str.charAt(i))) {
      result++;
    }
  }
  return result;
};

console.log(findVowels("this is a texIgal Vilenskyt for testing my code"));
