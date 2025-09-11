// cria um  objeto 
let carro ={
    nome:'Jeep',
    cor:'Vermelho',
    ano:2022,
    velocidade:function(){
        return this.nome +' 150 Km/h'
    }
}

console.log(carro)
console.log(carro.velocidade())

// cria uma classe
class carro1 {
    nome= 'Jeep';
    ano = 2024;
    cor ='Azul';
}
// instancio o objeto Jeep a partir da classe carro
Jeep = new carro1()  // crio um objeto chamado Jeep
console.log(Jeep)