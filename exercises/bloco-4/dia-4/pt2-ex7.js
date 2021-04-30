function verificaPalavra (word, ending) {
    let splitWord = word.split('');
    let splitEnding = ending.split('');
    var compare = word[word.length-1]
    for (let index = splitWord.length-2; index > splitEnding.length; index -= 1) {
        if (compare.length < splitEnding.length){
            compare += splitWord[index];
        } else {
            if (compare == splitEnding.reverse().join('')) {
                return true;
            } else {
                return false;
            }
        }
    }
}
console.log(verificaPalavra('proparoxitona', 'aona'));