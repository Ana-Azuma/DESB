// exemplo objeto em java script
// Criando objeto pessoa
let pessoa={
nome: 'Daniel',
idade:30,
profissao:'Professor Universitário',
saudacao: function(){
    console.log(`Olá ! Seja bem vindo ${this.nome}`)
}
}

console.log(pessoa)
console.log(pessoa.profissao) // acesso um atributo do objeto
pessoa.saudacao() // acessando um metodo 