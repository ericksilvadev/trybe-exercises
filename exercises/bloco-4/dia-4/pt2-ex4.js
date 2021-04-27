function longestNameFinder(names){
    let longestName = '';
    for (index = 0; index < names.length; index += 1) {
        if (names[index].length > longestName.length) {
            longestName = names[index];
        }
    }
    return longestName;
}

console.log(longestNameFinder(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));