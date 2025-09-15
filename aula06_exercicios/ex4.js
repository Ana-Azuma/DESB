// Cria um array vazio que representa a fila da clínica
let clinica = [];

// Simula a chegada de três animais
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibe a lista de animais na fila
console.log("Fila inicial da clínica:", clinica);

// Remove os animais um por vez (como se fossem atendidos)
console.log("Atendido:", clinica.shift());
console.log("Atendido:", clinica.shift());
console.log("Atendido:", clinica.shift());

// Exibe o estado final da fila (deve estar vazia)
console.log("Fila final da clínica:", clinica);
