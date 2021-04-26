let n = 8;
let coluna = n-1;
let space = " ";
let asterisco = "*";
var square = "";

if (n > 1){
  for (let index1 = 0; index1 < n; index1 += 1){
    for (let index2 = 0; index2 < n; index2 += 1) {
      if (index2 < coluna){
        square += space;
      } else{
        square += asterisco
      }
    }
  console.log(square);
  coluna -= 1
  square = "";
  }
} else {
  console.log('insira um nuúmero maior que 1');
}
