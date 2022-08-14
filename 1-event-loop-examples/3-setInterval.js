setInterval(() => {
  console.log('hello world');
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

// I will run first
// hello world
// hello world
// hello world
// ...hello world cada 2 segundos, no termina como setTimeout al menos que uses ctrl + c
