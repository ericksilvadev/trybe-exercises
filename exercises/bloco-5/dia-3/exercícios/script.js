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
  const daysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let days = document.getElementById('days');
  for (index = 0; index < daysList.length; index += 1) {
    let day = document.createElement('li');
    day.innerHTML = daysList[index];
    day.classList.add('day')
    days.appendChild(day);
    if (daysList[index] === 24 || daysList[index] === 31) {
      day.classList.add('holiday')
    } else if (daysList[index] === 4 || daysList[index] === 11 || daysList[index] === 18) {
      day.classList.add('friday')
    } else if (daysList[index] === 25) {
      day.classList.add('friday', 'holiday')
    }
  }
  console.log(days);
}

getDays()

// 2

function holidaysBtn() {
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday'
  btnHoliday.innerHTML = 'Feriados'
  let btnContainer = document.getElementsByClassName('buttons-container')[0];
  btnContainer.appendChild(btnHoliday);
  console.log(btnContainer);
}

holidaysBtn();

// 3

let btnHoliday = document.getElementById('btn-holiday')

btnHoliday.addEventListener('click', function () {
  holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].classList.contains('active')) {
      holidays[i].classList.remove('active')
      holidays[i].style.backgroundColor = '#eee';
      holidays[i].style.color = '#777';
    } else {
      holidays[i].classList.add('active')
      holidays[i].style.backgroundColor = '#2fc18c';
      holidays[i].style.color = '#eee';
    }  
  }
});

// 4

