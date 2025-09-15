// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Cria o objeto livro
let livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia"
};

// Adiciona a propriedade idadePublicacao
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// Cria a string mostrarDetalhes
const mostrarDetalhes = `Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade da Publicação: ${livro.idadePublicacao} anos`;

// Exibe os detalhes no console
console.log(mostrarDetalhes);
