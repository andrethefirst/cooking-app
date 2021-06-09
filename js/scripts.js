function gallonToQuart(number1) {
  return number1 * 4;
}

function quartToPint(number1) {
  return number1 * 2;
}

function pintToCup(number1) {
  return number1 * 2;
}

function quartToGallon(number1) {
  return number1 / 4;
}

function pintToQuart(number1) {
  return number1 / 2;
}

function cupToPint(number1) {
  return number1 / 2;
}
function gallonToPint(number1) {
  return number1 * 8;
}
function gallonToCup(number1) {
  return number1 * 16;
}

function pintToGallon(number1) {
  return number1 / 8;
}

function cupToGallon(number1) {
  return number1 / 16;
}

function quartToCup(number1) {
  return number1 * 4;
}

function cupToQuart(number1) {
  return number1 / 4;
}

const number1 = parseInt(prompt("Enter a number you want to convert:"));

const result = gallonToQuart(number1);

alert(result);