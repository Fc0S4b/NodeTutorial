const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  }
  if (req.url === '/about') {
    // blocking code este código bloqueará cualquier solicitud que no sea about, ya que para resolver otras solicitudes, primero deberá resolver este for que tiene como propósito relantizar el flujo de la respuestas a otras solicitudes, por eso es mejor la configuración asíncrona
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  }
  res.end('Error Page');
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});
