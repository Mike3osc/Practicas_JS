const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 === 10) {
  console.log(`number1 es estrictamente igual a 10`);
  console.log(`--------------------------------------`);
}

if (number2 / number1 == 2) {
  console.log(`number2 dividido entre number 1 es igual a 2`);
  console.log(`--------------------------------------`);
}

if (number1 !== number2) {
  console.log(`number1 es estrictamente distinto a number2`);
  console.log(`--------------------------------------`);
}

if (number3 != number1) {
  console.log(`number3 es distinto que number1`);
  console.log(`--------------------------------------`);
}

if (number3 * 5 == number1) {
  console.log(`number3 por 5 es igual a number1`);
  console.log(`--------------------------------------`);
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(`number3 por 5 es igual a number1 y number1 por 2 es igual a number2`);
  console.log(`--------------------------------------`);
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(`number2 entre 2 es igual a number1 o number1 entre 5 es igual a number2`)
  console.log(`--------------------------------------`);
}


