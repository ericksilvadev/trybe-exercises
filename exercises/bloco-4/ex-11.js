let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato')

console.log(menu);

//-----------------

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

groceryList.push('Macarrão')

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//------------------

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}