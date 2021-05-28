// ------- forEach

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// emailListInData.forEach(showEmailList);

// ------ find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDiv = (number) => (number % 5 === 0 && number % 3 === 0);

console.log(numbers.find(findDiv));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findName = () => names.find((name) => name.length === 5);

console.log(findName());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// console.log(musicas[0].id);

const findMusic = (id) => musicas.find((musica) => musica.id === id);


console.log(findMusic('31031685'));

console.log(numbers.sort());
