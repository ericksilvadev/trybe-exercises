const checkNumber = (bet, random) => bet === random;

const lotery = (num, callback) => {
  const random = parseInt(Math.random() * 5);
  if (callback(num, random)) {
    console.log(num, random);
    return 'Parabéns você ganhou';
  }
  console.log(num, random);
  return 'Tente novamente';
};

console.log(lotery(4, checkNumber));