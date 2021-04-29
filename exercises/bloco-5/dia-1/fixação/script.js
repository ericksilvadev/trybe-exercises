let header = document.getElementById("header-container");
header.style.backgroundColor = 'rgb(76,164,109)';

let body = document.getElementById("container");
body.style.backgroundColor = '#f1f1f1';

let leftSection = document.querySelector(".emergency-tasks");
leftSection.style.backgroundColor = 'tomato'
document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'purple'
document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'purple'

let rightSection = document.querySelector(".no-emergency-tasks");
rightSection.style.backgroundColor = 'yellow'
document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor = 'black'
document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor = 'black'

let footer = document.getElementsByTagName('footer')[0]
footer.style.backgroundColor = 'darkgreen'