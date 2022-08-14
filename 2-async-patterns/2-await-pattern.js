const { readFile, writeFile } = require('fs').promises; // si usas opción nativa de node entonces no agregas .promises y solo usarías readFile o writeFile, pero si no accedes a este método desde require, desbes configurar la opción nativa y usar readFilePromise o writeFilePromise
// const util = require('util') //opción nativa de node
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// refactor to async
const start = async () => {
  // si tenemos una función async, manejamos los estados con trycatch
  try {
    // con opción nativa de node sería:
    // const first = await readFilePromise('./content/first.txt', 'utf8')
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' } //a de append
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// setup promise
// creamos una función para leer cualquier ruta de archivo:
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText será una promise, por lo que tiene métodos de then y catch
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
