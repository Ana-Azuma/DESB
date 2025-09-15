// Criando o objeto livro
let anoAtual = new Date().getFullYear();

let livro = {
    titulo: "Star Wars",
    autor: "George Lucas",
    anoPublicacao: 1977,
    genero: "Ficção Científica",
    idadePublicacao: anoAtual - 1977
};

// Alterando o gênero do livro
livro.genero = "Aventura";

// Imprimindo o objeto atualizado
console.log(livro);
