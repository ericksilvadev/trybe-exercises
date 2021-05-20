// const longest = (phrase) => {
//   let split = phrase.split(' ');
//   let result = '';
//   for (index in split) {
//     if(split[index].length > result.length) {
//       result = split[index];
//     }
//   }
//   return result
// };

// const longest = (phrase) => {
//   let split = phrase.split(' ');
//   let longestWord = split.sort((a, b) => b.length - a.length);
//   return longestWord;
// };

const longestWord = (phrase) => phrase.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest);

// function longestWord(str) {
//   var longestWord = str.split(' ').reduce(function(longest, currentWord) {
//     return currentWord.length > longest.length ? currentWord : longest;
//   }, "");
//   return longestWord;
// }

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
