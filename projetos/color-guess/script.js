const rgbColor = document.getElementById('rgb-color');
const ballContainer = document.getElementById('ball-container');
const answer = document.getElementById('answer');
const buttonReset = document.getElementById('reset-game');
const score = document.getElementById('score');

function gerarCor() {
  function randomColor() {
    return (Math.random() * 255).toFixed(0);
  }
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function opcoesDeCores() {
  const posicaoCorreta = Math.floor(Math.random() * 5);
  console.log(posicaoCorreta);

  for (let i = 0; i < 6; i += 1) {
    const cor = gerarCor();
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = cor;
    ballContainer.appendChild(ball);
    console.log(cor);
    if (i === posicaoCorreta) {
      rgbColor.innerText = cor;
      console.log('Cor no if:', cor);
      console.log('inner:', rgbColor.innerText);
    }
  }
}

ballContainer.onclick = (event) => {
  if (event.target.id !== 'ball-container') {
    const ballColor = event.target.style.backgroundColor;
    console.log('ballcolor:', ballColor);
    if (rgbColor.innerText === ballColor) {
      answer.innerText = 'Acertou!';
      const pontos = parseInt(score.innerText, 10) + 3;
      score.innerText = pontos;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
};

buttonReset.onclick = () => {
  ballContainer.innerHTML = '';
  opcoesDeCores();
  answer.innerText = 'Escolha uma cor';
};

opcoesDeCores();

/* function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
} */
