const pessoa = {
    nome: 'joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: [' principal e: 54987456321', 'o secundario é: 54912365478'],
    saldo: 200,
    efetua : function (valor){
        if (valor > this.saldo) {
        console.log('saldo insuficiente');
    } else{
        (this.saldo -= valor)
        console.log(`compra efetuada, seu novo saldo e ${this.saldo}`)
    }
       
    }}

pessoa.efetua(25)