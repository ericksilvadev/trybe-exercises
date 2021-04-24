let n = 10;
let space = n;
let asterisco = "*";
let square = "";

if (n > 1){
    for (index = n-1; index > -1; index -= 1){
        square += asterisco + index;
        console.log(square);
    }
};