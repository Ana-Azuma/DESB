// Criando o objeto livro
let anoAtual = new Date().getFullYear();

let livro = {
    titulo: "Mulan",
    autor: "Disney",
    anoPublicacao: 1998,
    genero: "Animação"
};

// Adicionando a propriedade idadePublicacao
livro["idadePublicacao"] = anoAtual - livro["anoPublicacao"];

// Acessando e imprimindo os detalhes do livro usando colchetes
console.log("Título: " + livro["titulo"]);
console.log("Autor: " + livro["autor"]);
console.log("Ano de Publicação: " + livro["anoPublicacao"]);
console.log("Gênero: " + livro["genero"]);
console.log("Idade de Publicação: " + livro["idadePublicacao"] + " anos");
