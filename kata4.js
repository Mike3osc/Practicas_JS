/*1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

const avengers = [`Hulk`, `Spiderman`, `Black Panther`];
console.log(avengers[0]);
console.log(`------------------------------------`);

/*1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

avengers[0] = `Ironman`;
console.log(avengers[0]);
console.log(`------------------------------------`);

/*1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length);
console.log(`------------------------------------`);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];*/

const rickAndMortyCharacters = [`Rick`, `Beth`, `Jerry`];
rickAndMortyCharacters.splice(3, 0, "Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);
console.log(`------------------------------------`);

/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

const rickAndMortyCharactersNew = [`Rick`, `Beth`, `Jerry`, `Morty`, `Summer`, `Lapiz Lopez`];
rickAndMortyCharactersNew.pop();

console.log(rickAndMortyCharactersNew.shift(), rickAndMortyCharactersNew.pop());
console.log(`------------------------------------`);

/*1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

const rickAndMortyCharactersNew2 = [`Rick`, `Beth`, `Jerry`, `Morty`, `Summer`, `Lapiz Lopez`];
rickAndMortyCharactersNew2.splice(1, 1);

console.log(rickAndMortyCharactersNew2);
console.log(`------------------------------------`);
