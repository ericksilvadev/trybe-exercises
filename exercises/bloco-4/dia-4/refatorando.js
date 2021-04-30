//DIA 1
//ex1
function math(a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}

//ex2

function comparacao(a, b) {
    comparacao = a > b;
    if (comparacao === true) {
        console.log(a);
    } else {
        console.log(b);
    };
};

math(3, 5);
comparacao(1, 3);

//ex3

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
let valores = [];

for (let i in carro) {
    valores.push(i + ': ' + carro[i])
}

console.log(valores);