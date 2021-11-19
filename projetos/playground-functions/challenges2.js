function changePositions(arrayTech, i, j) {
  if (arrayTech[i] < arrayTech[j]) {
    let position = arrayTech[i];
    arrayTech[i] = arrayTech[j];
    arrayTech[j] = position;
  }
}

function bubbleSort(arrayTech) {
  for (let i = 1; i < arrayTech.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      changePositions(arrayTech, i, j);
    }
  }
  return arrayTech;
}

// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let output = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let arrayOrderly = bubbleSort(arrayTech);
  for (let tech of arrayOrderly) {
    let temp = {
      tech,
      name,
    };
    output.push(temp);
  }
  return output;
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

function validateNumber(number, arrayPhoneNumber) {
  return number < 0 || number > 9 || repeatCount(arrayPhoneNumber, number) >= 3;
}

function formatPhoneNumber(phoneNumber) {
  let ddd = phoneNumber.slice(0, 2);
  let primeiraParte = phoneNumber.slice(2, 7);
  let segundaParte = phoneNumber.slice(7, 11);

  return `(${ddd}) ${primeiraParte}-${segundaParte}`;
}

// https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript
// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  // seu código aqui
  let notPossibleMessage = 'não é possível gerar um número de telefone com esses valores';
  let phoneNumber = '';
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayPhoneNumber.length; i += 1) {
    if (validateNumber(arrayPhoneNumber[i], arrayPhoneNumber)) {
      return notPossibleMessage;
    }
    phoneNumber += arrayPhoneNumber[i];
  }

  return formatPhoneNumber(phoneNumber);
}

function ladoMaiorQueDiferenca(a, b, c) {
  return a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b);
}

function ladoMenorQueSoma(a, b, c) {
  return a < (b + c) && b < (a + c) && c < (a + b);
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  let check1 = ladoMenorQueSoma(a, b, c);
  let check2 = ladoMaiorQueDiferenca(a, b, c);

  console.log(check1);
  console.log(check2);
  return check1 && check2;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let reg = /\d+/g;
  let numbers = drinks.match(reg).map(Number);
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return (sum === 1) ? `${sum} copo de água` : `${sum} copos de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
