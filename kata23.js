//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
//Pelicula pequeña, menos de 100 minutos, 
//pelicula mediana, mas de 100 minutos y menos de 200 
//y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const short = [];
const medium = [];
const long = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    short.push(movie);
  } else if (movie.durationInMinutes < 200) {
    medium.push(movie);
  } else {
    long.push(movie);
  }
}

console.log("Estas peliculas duran menos de 100 minutos:", short);
console.log("Estas peliculas duran mas de 100 minutos pero menos de 200 minutos:", medium);
console.log("Estas peliculas duranmas de 200 minutos:", long);