// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');
sayHi('susan');
// para acceder a john y peter, debes destructurar names
sayHi(names.john);
sayHi(names.peter);

// uso de require para importar módulos de names, función sayHi y data
