function spinWords(string){
  let splitString = string.split(' ');
  for (index = 0; index < splitString.length; index += 1) {
    if (splitString[index].length > 5) {
      let spin = splitString[index].split('').reverse().join('');
      splitString[index] = spin;
    }
  }
  splitString = splitString.join(' ');
  return splitString
}

console.log(spinWords('Welcome'));