const board = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBoard = document.getElementById('clear-board');

function createBoard(index) {
  for (let i = 0; i < index; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.id = `line${i + 1}`;
    board.appendChild(pixelLine);
    for (let j = 0; j < index; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
  }
}

colorPalette.onclick = (event) => {
  if (event.target.id !== 'color-palette') {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
};

pixelBoard.onclick = (event) => {
  const selected = document.querySelector('.selected');
  if (event.target.classList.value === 'pixel') {
    const pixel = event.target;
    pixel.style.backgroundColor = `${
      window.getComputedStyle(selected).backgroundColor
    }`;
  }
};

clearBoard.onclick = () => {
  const listOfPixels = document.querySelectorAll('.pixel');
  listOfPixels.forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
};

function deleteBoard() {
  pixelBoard.innerText = '';
}

const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');

generateBoard.onclick = () => {
  let { value } = boardSize;
  if (value !== '') {
    if (value < 5) {
      value = 5;
    } else if (value > 50) {
      value = 50;
    }
    deleteBoard();
    createBoard(value);
  } else {
    alert('Board inválido!');
  }
};

function randomRGB() {
  return `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`;
}

function createPallet() {
  const palette = document.querySelectorAll('.color');
  for (let i = 1; i < palette.length; i += 1) {
    const paletteColor = palette[i];
    paletteColor.style.backgroundColor = randomRGB();
  }
}

createPallet();
createBoard(5);

/* const teste = document.querySelector('#teste');
const input = document.querySelector('#input');
const msg = document.querySelector('#input-vazio');

teste.onclick = () => {
  if (input.value !== '') {
    console.log('ok');
  } else {
    msg.style.display = 'inline-block';
  }
};

input.onkeyup = () => {
  if (input.value === '') {
    msg.style.display = 'inline-block';
  } else {
    msg.style.display = 'none';
  }
}; */

/* const teste2 = document.querySelector('#teste2');
teste2.onclick = () => {
  teste.click();
}; */
