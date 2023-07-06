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

pessoa.enderecos.push({
    rua: 'vicencio artur',
    numero: 515,
    cidade: false,
    apto: false,
    complemento: ''
})

console.log(pessoa.enderecos)

const APTOsim = pessoa.enderecos.filter ((endereco) =>
    endereco.apto === true
   
)

console.log(APTOsim)