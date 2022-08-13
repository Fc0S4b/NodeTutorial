// existen módulos hechos de forma previa y que se importan desde la biblioteca de node, visita los docs de node para ver más módulos. En este tutorial se verán módulos de operating system (os), fileSystem (fs), de ruta path y http
// ya que es un módulo built-in, no se necesita instalar nada
const os = require('os');

// info about current user //accediendo a propiedades de os, busca más propiedades en las sugerencias al escribir os.
const user = os.userInfo();
console.log(user); // objeto con propiedades de uid, gid, username, homedir, shell

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), //memoria total
  freeMem: os.freemem(), //memoria libre
};
console.log(currentOS);
