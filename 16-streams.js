// streams son usados para leer o escribir secuencialmente. Útiles cuando se trata de usar streaming data o grandes archivos
// tipos de streams
// writeable: para escribir streams
// readable: para leer streams
// duplex: que hace ambas
// transform: para modificar datos cuando son writeable o readable
// streams se extienden a la clase de emitters. Son built-in
const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
  console.log(result);
});
stream.on('error', (err) => console.log(err));
