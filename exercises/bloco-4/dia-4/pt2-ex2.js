function higherValue(numbers){
    let position = 0;
    let maiorNumero = 0;
    for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > maiorNumero) {
            maiorNumero = numbers[index];
            position = index
        }
    }
    return position
}

console.log(higherValue([2, 20, 6, 7, 10, 1]));
