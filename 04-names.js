// local
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'peter';
// console.log(module) //es un objeto que tiene en sus propiedades exports que indica un objeto con las variables que se exportan. en module.exports se construye el objeto con las exportaciones

// este objeto equivale a {john:'john', peter:'peter'}
module.exports = { john, peter };
