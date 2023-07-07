const dados = require("./cliente.json")

// console.log (dados)
// console.log(typeof dados)

const clienteS = JSON.stringify(dados);

// console.log (clienteS)
// console.log (typeof clienteS)

const clienteO = JSON.parse(clienteS)
console.log (clienteO)