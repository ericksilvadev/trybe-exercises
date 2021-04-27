function higherValue(numbers){
    let position = 0;
    let menorNumero = 200;
    for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < menorNumero) {
            menorNumero = numbers[index];
            position = index
        }
    }
    return position
}

console.log(higherValue([2, 4, 6, 7, 10, 0, -3]));
