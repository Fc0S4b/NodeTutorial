// Sobre npm
// se instala automáticamente al instalar npm
// existen muchas librerías que simplifica la programación a ciertas funcionalidades
// se puede entender como módulos, paquetes o dependencias
// cualquiera puede publicar librerías en npm, debes usarlas con precaución (ve la reputación de la librería)
// npmjs.com para buscar paquetes

// npm - global command, comes with noe
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stories important info about project/package)
// 3 formas de crear un package.json:
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// debe tener nombre único si lo deseas publicar
// las dependencias se guardan en node_modules que está en root
// un paquete puede instalar otros paquetes de los cuales depende para ejecutarse

// modo de uso de un paquete, ejemplo lodash:
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems); //[1,2,3,4]

// share code on github
// crea un .gitignore para no subir los node_modules
// en .gitignore escribe /node_modules, este archivo debe estar en root
// al bajar o clonar el proyecto desde github, solo debes ejecutar npm install para instalar las dependencias
