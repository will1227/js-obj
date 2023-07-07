const pessoa = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: [' principal e: 54987456321', 'o secundario é: 54912365478'],
};

pessoa.enderecos = [
    {
    rua: 'edmundo sturm',
    numero: 87,
    cidade: 'POA',
    apto: true,
    complemento: 911
}]

function ligando(comercial, residencial){
    console.log(`ligando para ${residencial}`) 
    console.log(`ligando para ${comercial}`) 
}
ligando (...pessoa.telefone)

const envio ={
    denstinatario: pessoa.nome,
    ...pessoa.enderecos
}
console.log(envio)