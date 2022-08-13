module.exports.items = ['item1', 'item2'] //se puede definir directamente en vez de escribir const items = ['item1', 'item2']. Estamos definiendo items como propiedad de exports
const person = {
  name: 'bob',
}
// definimos singlePerson como propiedad de export también
module.exports.singlePerson = person
