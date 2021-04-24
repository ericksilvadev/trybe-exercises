let valorCusto = 500
let imposto = 0.2
let valorVenda = 1000
let valorCustoTotal = valorCusto + valorCusto * imposto

if (valorCusto < 0 || valorCustoTotal < 0 || valorVenda < 0){
    console.log("Valor inválido");
} else {
    let lucro = valorVenda - valorCustoTotal;
    console.log(`O lucro foi de ${lucro} reais`);
}