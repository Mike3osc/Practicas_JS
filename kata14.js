//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
//Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {

  let total = 0;

  for (let i = 0; i < counterWords.length; i++) {
    if (param == counterWords[i]) {
      total += 1;
    }
  }
  console.log(total);
}

repeatCounter('enjoy');