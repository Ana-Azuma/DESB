// Exemplo objeto com lista de objetos

dadoP={
    nome: 'Daniel',
    idade:30,
    endereco:[{
        rua:'Av Brasil',
        numero:77
    },
    {
        rua: 'Cicero Canuto',
        numero: 200
    }

]
}

console.log(dadoP)
console.log(dadoP.endereco[1].rua)
console.log(dadoP.endereco[1].numero)
console.log(dadoP.endereco[0].rua)
console.log(dadoP.endereco[0].numero)