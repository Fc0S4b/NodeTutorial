var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text) //veremos todo el contenido de big.txt en pantalla del navegador pero el tamaño será un problema para enviarse como solicitud a la red
    // ahora aplicamos stream para manejar por parte esa cantidad de flujo
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res); // leer por parte, como una llave que controla el flujo
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
