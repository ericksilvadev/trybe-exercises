let n = 6;
let asterisco = "*";
let square = "";

if (n > 1){
    for (let index = 0; index < n; index += 1) {
        square += asterisco;
    };
} else {
    console.log("insira um numero maior que 1");
};

for (let index = 0; index < n; index += 1){
    console.log(square);
};