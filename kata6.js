//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let index = 0; index <= 10; index++) {
  console.log(index);
}
console.log(`--------------------------------------------------`)

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
} console.log(`--------------------------------------------------`)

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

for (let j = 1; j <= 10; j++) {
  if (j <= 9) {
    console.log(`Intentando dormir 🐑`)
  } else {
    console.log(`Dormido!`)
  }
}
console.log(`--------------------------------------------------`)