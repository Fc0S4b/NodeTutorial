// existen módulos hechos de forma previa y que se importan desde la biblioteca de node, visita los docs de node para ver más módulos. En este tutorial se verán módulos de operating system (os), fileSystem (fs), de ruta path y http
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
