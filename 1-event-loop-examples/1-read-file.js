const { readFile, writeFile } = require('fs');

console.log('started a first task');
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});
console.log('starting next task');

// flujo de ejecución de javascript:
// started a first task
// starting next task
// hello this is first text file (lectura del archivo first.txt)
// completed first task
