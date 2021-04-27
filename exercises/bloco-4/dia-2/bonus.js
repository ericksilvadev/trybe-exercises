// ex1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] < numbers [index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    };
  };
};

console.log(numbers)

// ex2

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] > numbers [index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    };
  };
};

console.log(numbers)

// ex3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiply = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    multiply.push(numbers[index] * numbers[index + 1]);
  } else {
    multiply.push(numbers[index] * 2)
  }
};

console.log(multiply);
