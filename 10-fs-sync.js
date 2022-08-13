const { readFileSync, writeFileSync } = require('fs'); //destructurando los métodos que necesitamos
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8'); //utf8 para decodificar first.txt
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt', //node creará el archivo si no existe
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } //parámetro que hace que el contenido se abra, mostrando el resultado en un nuevo valor
);
console.log('done with this task');
console.log('starting the next one');
