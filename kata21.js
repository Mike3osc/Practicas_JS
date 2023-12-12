//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que
//sean menor de edad precedidos del texto "Usuarios menores de edad:"
//y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const minor = [];
const adult = [];

for (const user of users) {
  if (user.years < 18) {
    minor.push(user.name);
  } else {
    adult.push(user.name);
  }
}

console.log("Usuarios menores de edad:", minor);
console.log("usuarios mayores de edad:", adult);



