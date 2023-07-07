const pessoa = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: [' principal e: 54987456321', 'o secundario é: 54912365478'],
};

// pessoa.enderecos = [
//     {
//     rua: 'edmundo sturm',
//     numero: 87,
//     cidade: 'POA',
//     apto: true,
//     complemento: 911
// }]

for (let chave in pessoa){
    let tipo = typeof pessoa [chave]
    if (tipo !== 'object' && tipo !== 'function'){
        console.log (`a chave ${chave}, tem o valor ${pessoa[chave]}`)
    } 
    
}

const chaveC = Object.keys(pessoa)

console.log (chaveC)

if (!chaveC.includes('enderecos')) {
    console.error ('ERRO. sem endereço de envio')
}else{
    console.log('endereco confirmado')
}