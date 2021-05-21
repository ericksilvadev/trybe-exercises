// const fatorial = (n) => {
//   let result = n;
//   for (let index = n - 1; index > 0; index -= 1) {
//     result *= index;
//   }
//   return result;
// };

// console.log(fatorial(4));

const fatorial = (n) => n === 0 ? 1 : (n * fatorial(n - 1));

console.log(fatorial(3));
