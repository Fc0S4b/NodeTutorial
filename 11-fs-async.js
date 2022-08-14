const { readFile, writeFile } = require('fs'); // los métodos ya no llevan el nombre Sync

console.log('start');
// necesitamos pasar una callback con fs async, una vez que ejecutamos todo el código, se ejecutará luego la callback.
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // volvemos a definir una callback
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // otra callback, esto ya sería una callback-hell
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');

// ejecución asíncrona
// start
// starting next task
// done with this task
