let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1){
        impares += 1
    }
}

if (impares == 0){
    console.log("Nenhum valor encontrado");
} else {
    console.log(`${impares} numeros ímpares encontrados`);
}