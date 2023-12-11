/*Buscar la palabra más larga Completa la función que tomando un array de strings 
como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud 
deberá devolver el primero.*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {//creamos una funcion para encontrar la palabra mas larga y aginamos como parametro el array
  let longestWord = array[0];//creamos una nueva variable que será la palabra más larga dentro del array avengers empezando por la pos 0

  for (i = 0; i < array.length; i++) {//creamos un bucle para recorrer el array y ver la longitud del mismo
    let currentWord = array[i];//creamos una variable que sea la palabra actual por la que va cada vuelta del bucle

    if (currentWord.length > longestWord.length) {//comparamos los resultados para ver si currentWord es mayor que longestWord
      longestWord = currentWord;//en caso de que currentWord sea mayor que longestWord, reemplazamos longestWord por currentWord
    }

  }
  return longestWord;//pedimos que nos retorne el valor de longestWord
}

console.log(findLongestWord(avengers));//lo mostramos por pantalla


