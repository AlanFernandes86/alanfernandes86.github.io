const buttonCriarTarefa = document.getElementById('criar-tarefa');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonRemover = document.getElementById('remover-finalizados');
const buttonSalvar = document.getElementById('salvar-tarefas');
const buttonMoverCima = document.getElementById('mover-cima');
const buttonMoverBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');
const lista = document.getElementById('lista-tarefas');
const inputTexto = document.getElementById('texto-tarefa');

function onLoad() {
  if (localStorage !== undefined) {
    if (localStorage.tarefas !== undefined && localStorage.tarefas !== '') {
      lista.innerHTML = localStorage.tarefas;
    }
  } else {
    alert('Local Storage não localizado!');
  }
}

buttonCriarTarefa.onclick = () => {
  const item = document.createElement('li');
  item.innerText = inputTexto.value;
  lista.appendChild(item);
  inputTexto.value = '';
};

function removeSelected(selected) {
  if (selected !== null) selected.classList.remove('selected');
}

lista.onclick = (event) => {
  if (event.target.id !== lista.id) {
    const selected = document.querySelector('.selected');
    const { target } = event;
    if (!target.classList.contains('selected')) {
      removeSelected(selected);
      target.classList.add('selected');
    }
  }
};

lista.ondblclick = (event) => {
  const { target } = event;
  if (target.id !== lista.id) {
    target.classList.toggle('completed');
  }
};

buttonApagaTudo.onclick = () => {
  lista.innerText = '';
};

// https://www.w3schools.com/jsref/met_element_remove.asp
buttonRemover.onclick = () => {
  const tarefasCompletas = document.querySelectorAll('.completed');
  tarefasCompletas.forEach((element) => {
    element.remove();
  });
};

buttonSalvar.onclick = () => {
  document.querySelector('.selected').classList.remove('selected');
  localStorage.tarefas = lista.innerHTML;
};

// https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/
buttonMoverCima.onclick = () => {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.previousElementSibling !== null) {
    lista.insertBefore(selected, selected.previousElementSibling);
  }
};

// https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/
buttonMoverBaixo.onclick = () => {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.nextElementSibling !== null) {
    lista.insertBefore(selected.nextElementSibling, selected);
  }
};

buttonRemoverSelecionado.onclick = () => {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.remove();
  }
};

onLoad();
