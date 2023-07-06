const cliente = {
    nome: 'andre',
    idade: 17, 
    cpf: '005.658.874-65',
    email: 'andre@gmail.com'

}

// console.log(`o nome do cliente e ${cliente['nome']}, tem ${cliente['idade']}, anos e seu cpf é ${cliente[cpf].substring(0, 3)}`)

const chave = ['nome', 'idade', 'cpf', 'email']

chave.forEach((chave) => {
    console.log(`a chave e ${chave}, tem valor ${cliente[chave]}`)
})