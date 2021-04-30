// let word = 'desenvolvimento';
// let splitString = word.split('');
// let reverseString = splitString.reverse();
// let joinString = splitString.join("")

// function palindromo(){
//     let compare1 = word.toLocaleLowerCase()
//     let compare2 = joinString.toLocaleLowerCase()
//     if (compare1 === compare2) {
//         return true
//     } else {
//         return false
//     };
// };


// console.log(word, joinString, palindromo());

function palindromo(word) {
    let reverseString = word.split('').reverse().join('');
    if (reverseString === word) {
        return true;
    } else {
        return false;
    };
};

console.log(palindromo('qualquer'));