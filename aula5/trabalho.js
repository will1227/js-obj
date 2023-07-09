const dados = require("./clientes.json")

function encontra(lista, tipo, procura){
    return lista.find((item) => item[tipo] === procura)
}
const encontrar = encontra(dados, "nome", "Greer")
console.log(encontrar)