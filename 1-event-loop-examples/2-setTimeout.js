// started operating system process
console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process

// flujo de ejecución javascript:
// first
// third
// second
