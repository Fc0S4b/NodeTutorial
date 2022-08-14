// event-driven programming: programación en base a los eventos como "click", "hover", cuando ser carga la página, etc
// get back the class
// extender la clase para personalizar o crear instancia para emitir y manejar eventos
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events'); //es una clase

const customEmitter = new EventEmitter(); // creamos una instancia de la clase

// on and emit methods
// on - listen for an event
// emit - emit an event
// keep track of the order
// additional arguments
// built-in modules utilize it

// el evento se llama response
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

// nada impide crear otra escucha al evento pero importa el orden en que se programan los on y emit
customEmitter.on('response', () => {
  console.log('some other logic here');
});
// emitimos john 34 y el evento al que va dirigido
// segundo y tercer argumento como parámetros que recibirá la callback de on
customEmitter.emit('response', 'john', 34);
