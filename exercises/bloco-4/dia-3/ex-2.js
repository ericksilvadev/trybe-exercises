let n = 10;
let asterisco = "*";
let square = "";

if (n > 1){
    for (let index = 0; index < n; index += 1) {
        square += asterisco;
        console.log(square);
    };
} else {
    console.log("insira um numero maior que 1");
};
