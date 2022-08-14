const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

// se verá en el navegador "hello world" pero en consola se verá request event

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});

// listen es asíncrono, se ejecutará cuando se inicia el servidor para decir "server listening on port : 5000", luego se verá cada 5 segundos request event en consola. Eventloop está al tanto de escuchar las solicitudes y cuando aparezcan responda apropiadamente