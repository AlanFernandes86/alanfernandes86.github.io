// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  return text.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Encontra o maior número dentro do array
function findHighest(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  for (let i = 1; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  return highestNumber;
}

// Soma a quantidade de vezes que o número se repete no array
function repeatCount(arrayNumbers, number) {
  let repeat = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === number) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highestNumber = findHighest(arrayNumbers);
  let highestRepeat = repeatCount(arrayNumbers, highestNumber);

  return highestRepeat;
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const cat1Position = Math.abs(mouse - cat1);
  const cat2Position = Math.abs(mouse - cat2);
  if (cat1Position < cat2Position) {
    return 'cat1';
  }
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

console.log(catAndMouse(0, 3, 2));

// Contribuição de Alessandro Achtenberg
// retorna true se o número for divisivel por 3
function isDivisibleBy3(number) {
  let algarismos = number.toString().split('').map(Number);
  let sumDigits = 0;
  for (let algarismo of algarismos) {
    sumDigits += algarismo;
  }
  if (sumDigits % 3 === 0) {
    return true;
  }
  return false;

  /* if (number / 3 === 0) {
    return true;
  }
  return false; */
}

// Contribuição de Alessandro Achtenberg
// retorna true se o número for divisivel por 5
function isDivisibleBy5(number) {
  let algarismos = number.toString().split('').map(Number);
  console.log(algarismos);
  if (algarismos[algarismos.length - 1] === 5 || algarismos[algarismos.length - 1] === 0) {
    return true;
  }
  /* if (number % 5 === 0) {
    return true;
  } */
  return false;
}

// retorna uma string de acordo com os requisitos utilizando as funções isDivisibleBy5 e isDivisibleBy3
function fizzBuzzConverter(number) {
  if (isDivisibleBy3(number) && isDivisibleBy5(number)) {
    return 'fizzBuzz';
  }
  if (isDivisibleBy3(number)) {
    return 'fizz';
  }
  if (isDivisibleBy5(number)) {
    return 'buzz';
  }
  return 'bug!';
}

// http://www.uel.br/projetos/matessencial/basico/fundamental/divisibilidade.html
// https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits
// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let fizzBuzzArray = [];

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    fizzBuzzArray.push(fizzBuzzConverter(arrayNumbers[i]));
  }

  return fizzBuzzArray;
}

let secretKeys = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

// Desafio 9
function encode(text) {
  // seu código aqui
  let textArray = text.split('');
  for (let i = 0; i < textArray.length; i += 1) {
    if (secretKeys[textArray[i]]) {
      textArray.splice(i, 1, secretKeys[textArray[i]]);
    }
  }
  return textArray.join('');
}

// Recebe um caracter e se inserido no objeto 'secretKeys' devolve a sua chave
function getDecodeKey(char) {
  for (let key in secretKeys) {
    if (char === secretKeys[key].toString()) {
      return key;
    }
  }
  return false;
}

function decode(encodedText) {
  // seu código aqui
  let textArray = encodedText.split('');
  for (let i = 0; i < textArray.length; i += 1) {
    if (getDecodeKey(textArray[i])) {
      textArray.splice(i, 1, getDecodeKey(textArray[i]));
    }
  }
  return textArray.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
