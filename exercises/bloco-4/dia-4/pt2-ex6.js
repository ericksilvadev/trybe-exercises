function sum(n) {
    let stringSoma = 0 + ' + ';
    let soma = 0;
    for (let index = 1; index <= n; index += 1){
        if (index < n) {
        stringSoma += index + ' + '
        } else {
            stringSoma += index + ' = '
        }
        soma += index;
    }
    return stringSoma + soma
}

console.log(sum(1000000));
