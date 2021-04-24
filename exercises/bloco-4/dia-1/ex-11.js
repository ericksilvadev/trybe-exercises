let inss;
let ir;
let salario = 3000;

if (salario <= 1556.94) {
    inss = salario * 0.08;
    salario -= inss;
} else if (salario <= 2594.92) {
    inss = salario * 0.09;
    salario -= inss;
} else if (salario <= 5189.82) {
    inss = salario * 0.11;
    salario -= inss;
} else {
    inss = 570.88;
    salario -= inss;
};

if (salario <= 1903.98) {
    ir = 0;
} else if (salario <= 2826.65) {
    ir = salario * 0.075 - 142.8;
} else if (salario <= 3751.05) {
    ir = salario * 0.15 - 354.8;
} else if (salario <= 4664.68) {
    ir = salario * 0.225 - 636.13;
} else {
    ir = salario * 0.275 - 869.36;
};

console.log(`O salário menos os descontos é de R$${salario - ir}`);