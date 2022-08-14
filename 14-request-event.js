const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// responder a :
// subcribe to it / listen for it / respond to it
// en vez de usar la callback de createServer, usamos on directamente ya que server es una clase que se extiende a los eventsEmitter
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
