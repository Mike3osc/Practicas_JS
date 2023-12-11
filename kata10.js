//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (sum / numbers.length);
}

console.log(average(numbers));




