let a = 9;
let b = 95;
let c = 80;

let comparacao1 = a > b;
let comparacao2 = a > c;
let comparacao3 = b > c;

if (comparacao1 == false && comparacao2 == false && comparacao3 == false){
    console.log(c);
} else if (comparacao1 == false && comparacao3 == true){
    console.log(b);
} else {
    console.log(a);
}
