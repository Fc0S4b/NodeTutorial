const path = require('path');

console.log(path.sep); //separador de ruta que sería /
//uso de la carpeta content y sus subscarpetas, se pasan como string en el método join de path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath); // ruta del archivo /content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base); //base sería el nombre del archivo que sería test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); //entrega la ruta absoluta, debe tener __dirname para apuntar al directorio actual y luego absolute será equivalente a /Users/fcojs/Desktop/node-express-course-main/...etc
