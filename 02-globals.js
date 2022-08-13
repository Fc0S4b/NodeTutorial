// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);

// comando node app.js (opcional node app) para ejecutar código en terminal (app.js porque ahí está el código, pero lo que se usa ahí es el nombre del archivo)
