//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. 
//Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma 
//de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {

  let sum = 0;//creo la variable sum con un valor cero pero que es donde se acumularán los valores del array

  for (i = 0; i < array.length; i++) {//recorremos el array
    sum += array[i];//suma recoge cada valor de array y lo suma
  }

  return sum;//el retorno ha de ser suma
}

console.log(sumAll(numbers));//ejecutamos la funcion sobre el array numbers y lo mostramos en pantalla