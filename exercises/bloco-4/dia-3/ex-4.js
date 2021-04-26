let n = 13;
let colunaSpace = Math.floor(n/2);
let linha = 1;
let space = " ";
let asterisco = "*";
let piramide = "";

if (n > 1 && n % 2 === 1){
  for (index1 = 0; index1 < n; index1 += 1){
    if (linha > n){
      break
    }
    if (linha <= n){
      for (index2 = 0; index2 < n; index2 += 1){
        if (colunaSpace > 0){
          piramide += space.repeat(colunaSpace);
          piramide += asterisco.repeat(linha)
          break
        } else {
          piramide += asterisco.repeat(linha);
          break
        }
      }
    }
    console.log(piramide);
    piramide = '';
    linha += 2;
    colunaSpace -= 1;
  } 
} else {
  console.log('insira um número ímpar e maior que 1');
}