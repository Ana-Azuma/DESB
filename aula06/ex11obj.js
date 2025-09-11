// Cria um objeto vazio e adiciona atributos

carro ={}
carro.modelo = "Jaguar"
carro.ano = 2025
carro.combustivel ="Hibrido"
carro.portas =5
// função anonima
carro.acelera= function(){
    return 'O carro está acelerando'
}

console.log(carro)
console.log(carro.acelera())