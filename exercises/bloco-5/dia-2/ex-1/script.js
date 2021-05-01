let body = document.getElementsByTagName('body');

//1

let title = document.createElement('h1');
document.body.appendChild(title);
title.innerHTML = 'Exercício 5.2 - JavaScript DOM';

//2

let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

//3

let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

//4

let paragraph = document.createElement('p');
centerContent.appendChild(paragraph);
paragraph.innerHTML = 'alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa alguma coisa';

//5

let leftContent = document.createElement('div');
leftContent.className = 'left-content'
mainContent.appendChild(leftContent);

//6

let rightContent = document.createElement('div');
rightContent.className = 'right-content'
mainContent.appendChild(rightContent);

//7

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
leftContent.appendChild(img);

//8

let list = document.createElement('ul');
for (index = 1; index < 11; index += 1) {
    let listItem = document.createElement('li');
    listItem.innerHTML = index;
    list.appendChild(listItem);
}
rightContent.appendChild(list);

//9



// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.