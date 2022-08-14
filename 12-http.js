const http = require('http');
// createServer recibe req que es el método http y res es lo que mandamos de vuelta
const server = http.createServer((req, res) => {
  // res.write('mensaje que se ve en el puerto 5000') //write es otro método
  // cnsole.log(req) //objeto gigante, interesa ver req.url para manejar estados dependiendo del url. res.end para ver la respuesta.
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //  BLOCKING CODE!! este código bloqueará cualquier solicitud que no sea about, ya que para resolver otras solicitudes, primero deberá resolver este for que tiene como propósito relantizar el flujo de la respuestas a otras solicitudes, por eso es mejor la configuración asíncrona 
  // for (let i = 0; i<1000; i++){
  // for(let j=0; j < 1000; j++){
  //  console.log(`${i} ${j}`)
  // }
  // }
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  // evaluamos cada estado de req.url para responder de acuerdo a esa url
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000); //se configura el puerto escucha
