let n = 6;
let asterisco = "*";
let square = "*";

if (n > 1){
    for (let index = 1; index < n; index += 1) {
        square += asterisco;
    };
};

for (let index = 0; index < n; index += 1){
    console.log(square);
}