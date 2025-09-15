// Criando o objeto livro
let anoAtual = new Date().getFullYear();

let livro = {
    titulo: "Jogos Vorazes",
    autor: "Suzanne Collins",
    anoPublicacao: 2008,
    genero: "Distopia",
    idadePublicacao: anoAtual - 2008,
    avaliacao: 5 // Inicialmente o livro possui uma avaliação
};

// Excluindo a propriedade avaliacao
delete livro.avaliacao;

// Exibindo os detalhes do livro no console
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano de Publicação: " + livro.anoPublicacao);
console.log("Gênero: " + livro.genero);
console.log("Idade de Publicação: " + livro.idadePublicacao + " anos");

// Verificando se a propriedade avaliacao foi removida
if (!livro.hasOwnProperty("avaliacao")) {
    console.log("Propriedade 'avaliacao' removida com sucesso!");
} else {
    console.log("Propriedade 'avaliacao' ainda existe.");
}
