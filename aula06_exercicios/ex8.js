// livro.js

// Criando o objeto livro
let anoAtual = new Date().getFullYear();

let livro = {
    titulo: "Maze Runner",
    autor: "James Dashner",
    anoPublicacao: 2009,
    genero: "Ficção Científica",
    idadePublicacao: anoAtual - 2009,
    avaliacao: null  // Inicializada como null
};

// Função para adicionar avaliação
function adicionarAvaliacao(nota) {
    if (livro.avaliacao === null) {
        livro.avaliacao = nota;
        console.log("Avaliação adicionada com sucesso!");
    } else {
        console.log("O livro já possui uma avaliação: " + livro.avaliacao);
    }
}

// Tentativa de adicionar uma avaliação
adicionarAvaliacao(5);

// Tentativa de adicionar outra avaliação
adicionarAvaliacao(4);

// Exibindo o objeto livro completo
console.log(livro);
