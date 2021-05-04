function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1

function getDays() {
  const daysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.getElementById('days');
  for (index = 0; index < daysList.length; index += 1) {
    let day = document.createElement('li');
    day.innerHTML = daysList[index];
    day.classList.add('day');
    days.appendChild(day);
    if (daysList[index] === 24 || daysList[index] === 31) {
      day.classList.add('holiday');
    } else if (daysList[index] === 4 || daysList[index] === 11 || daysList[index] === 18) {
      day.classList.add('friday');
    } else if (daysList[index] === 25) {
      day.classList.add('friday', 'holiday');
    }
  }
}

getDays()

// 2

function holidaysBtn() {
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = 'Feriados';
  let btnContainer = document.getElementsByClassName('buttons-container')[0];
  btnContainer.appendChild(btnHoliday);
}

holidaysBtn();

let btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', function () {
  holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].classList.contains('active-holiday')) {
      holidays[i].classList.remove('active-holiday');
      holidays[i].style.backgroundColor = '#eee';
      holidays[i].style.color = '#777';
    } else {
      holidays[i].classList.add('active-holiday');
      holidays[i].style.backgroundColor = 'tomato';
      holidays[i].style.color = '#eee';
    }  
  }
});

function fridayBtn() {
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerHTML = 'Sexta-feira';
  let btnContainer = document.getElementsByClassName('buttons-container')[0];
  btnContainer.appendChild(btnFriday);
}

fridayBtn();
  
let btnFriday = document.getElementById('btn-friday')

btnFriday.addEventListener('click', function () {
  fridays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].classList.contains('active-friday')) {
      fridays[i].classList.remove('active-friday');
      daysF = [4, 11, 18, 25];
      fridays[i].innerHTML = daysF[i]
    } else {
      fridays[i].classList.add('active-friday');
      fridays[i].innerHTML = 'breja';
    }  
  }
});

// 6

let days = document.getElementById('days');

function zoom(event) {
  event.target.style.fontSize = '25px';
  // event.target.style.backgroundColor = '#666';
  event.target.style.color = 'tomato';
  event.target.style.cursor = 'default';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
  // event.target.style.backgroundColor = '#eee';
  event.target.style.color = '#777';
}
days.addEventListener('mouseover', zoom);
days.addEventListener('mouseout', zoomOut);

// 7

let myTasks = document.querySelector('.my-tasks');

function tasks(task) {
  let taskSpan = document.createElement('span');
  myTasks.appendChild(taskSpan);
  taskSpan.innerHTML = task;
};

tasks('Fazer 57 flexões');

// 8

function colorTask(color) {
  let divTask = document.createElement('div');
  divTask.classList.add('task');
  myTasks.appendChild(divTask);
  divTask.style.backgroundColor = color;
}

colorTask('lightgreen');

// 9 

let divTask1 = document.getElementsByClassName('task')[0];

divTask1.addEventListener('click', function () { 
    if (divTask1.classList.contains('task-selected')){
      divTask1.classList.remove('task-selected');
    } else {
      divTask1.classList.add('task-selected');
    }
});