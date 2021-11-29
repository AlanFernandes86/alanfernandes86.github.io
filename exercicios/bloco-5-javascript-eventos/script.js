
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const holiday = [24, 25, 31];
const fridayNum = [4, 11, 18, 25];
const ulDays = document.getElementById("days");
const buttonsContainer = document.querySelector('.buttons-container');
const buttonHoliday = document.createElement('button');
const buttonFriday = document.createElement('button');
const tasks = document.querySelector('.my-tasks');
const taskInput = document.getElementById('task-input');
const btnAdd = document.getElementById('btn-add');
const taskList = document.querySelector('.task-list');

init();

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

// Exercício 01
function insertDays() {
  for (let day of dezDaysList) {
    const li = document.createElement("li");
    li.className = "day";
    li.innerText = day;

    if (holiday.find((element) => element === day)) {
      li.className += " holiday";
    }
    if (fridayNum.find((element) => element === day)) {
      li.className += " friday";
    }
    ulDays.appendChild(li);
  }
}

// Exercício 02
function createButtonHoliday(feriado) {
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerText = feriado;
    buttonsContainer.appendChild(buttonHoliday);
}

// Exercício 03
buttonHoliday.onclick = () => {
    let holidays = document.querySelectorAll('.holiday');
    holidays.forEach((holiday) => {
        holiday.classList.toggle('background-holidays');
    })
};

// Exercício 04

function createButtonFriday(sexta) {
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = sexta;
    buttonsContainer.appendChild(buttonFriday);
}

// Exercício 05
buttonFriday.onclick = () => {
    let fridays = document.querySelectorAll('.friday');
    fridays.forEach((friday, index) => {
      if (fridays[index].innerText === 'Sexta-feira') {
        friday.innerText = fridayNum[index];
      } else {
        friday.innerText = 'Sexta-feira';
      }      
    })
}

// Contribuição do Douglas
// Exercício 06
function dayZoom() {

  ulDays.onmouseover = (event) => {
    if (event.target.id !== "days") {
      event.target.style.fontSize = '30px';
    }
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
  // mouseout identifica quando o cursos sai do elemento filho
  ulDays.onmouseout = (event) => {
    if (event.target.id !== "days") {
      event.target.style.fontSize = '20px';
    }
  }

}

// Exercício 07
function createTask(tarefa) {
  let task = document.createElement('span');
  task.innerText = tarefa;
  if (tasks.children.length > 1) tasks.appendChild(document.createElement('br'));
  tasks.appendChild(task);
}

// Exercício 08
function addTaskColor(cor) {
  let legend = document.createElement('div');
  legend.style.backgroundColor = cor;
  legend.classList.add('task');
  tasks.appendChild(legend);
}

// Exercício 09
// https://www.w3schools.com/jsref/prop_element_classlist.asp
tasks.onclick = (event) => {
  console.dir(event.target)
  const task = tasks.children;
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('selected')) {
      task[i].classList.remove('selected');
    }
  }
  if (!event.target.classList.contains('my-tasks') && event.target.localName === 'div'){
    event.target.classList.add('selected');
  }
}

// Exercício 10
// getComputedStyle sempre retorna a cor em rgb!
ulDays.onclick = (event) => {
  const selected = document.querySelector('.selected');
  const selectedColor = window.getComputedStyle(selected).backgroundColor;
  const actualColor = window.getComputedStyle(event.target).color;
  console.log(`${selectedColor} - ${actualColor}`)
  if (
    event.target.id !== "days" 
    && actualColor !== 'rgb(119, 119, 119)'
    && actualColor === selectedColor) {
    event.target.style.color = 'rgb(119, 119, 119)';
    console.log('remove');
  } else if (event.target.id !== "days") {
    console.log('new');
    event.target.style.color = selectedColor;
  }
}

// Exercício bonus
function insertAppointment() {
  const inputValue = taskInput.value;
  if (inputValue !== '') {
    const li = document.createElement('li');
    li.innerText = inputValue;
    taskList.appendChild(li);
  } else {
    alert('Digite seu compromisso!');
  }
}

taskInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    insertAppointment();
  }
});

btnAdd.onclick = (event) => {
  insertAppointment();
}

function init() {
  createDaysOfTheWeek();
  insertDays();
  createButtonHoliday('Feriados');
  createButtonFriday('Sexta-feira');
  dayZoom();
  createTask('Projeto:');
  addTaskColor('green');
  createTask('Soft-Skills:');
  addTaskColor('blue');
}


