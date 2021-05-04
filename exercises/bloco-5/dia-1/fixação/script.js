let header = document.getElementById("header-container");
header.style.backgroundColor = 'rgb(76,164,109)';

let body = document.getElementById("container");
body.style.backgroundColor = '#f1f1f1';

let leftSection = document.querySelector(".emergency-tasks");
leftSection.style.backgroundColor = 'tomato';

let tasks = document.getElementsByTagName('h3');
for (index = 0; index < 2; index += 1) {
  tasks[index].style.backgroundColor = 'purple';
}

let rightSection = document.querySelector(".no-emergency-tasks");
rightSection.style.backgroundColor = 'yellow';

for (index = 2; index < 4; index += 1) {
  tasks[index].style.backgroundColor = 'black';
}

let footer = document.getElementsByTagName('footer')[0];
footer.style.backgroundColor = 'darkgreen';