// 1. Importa o Express
const express = require('express')

// 2. Cria uma instância do Express
const app = express();

// 3. Define a porta onde a API irá rodar
const port = 3000;

// Adicionar uma lista para armazenar os dados de forma temporaria
let dados = [];

// 4. Middleware para permitir que o servidor lude com requisições no formato jSON
app.use(express.json());

// 5. Criação da rota GET na raiz ('/') que responde com a mensagem simples
app.get('/', (req, res) => {
    res.send('API funcionando!!');
});

// cria uma segunda rota
app.get('/disciplina', (req, res) => {
    res.send('Desenvolvimento Backend 2025 - Aula 03');
});

// rota post chamada data
app.post('/data', (req, res) => {
    const {nome,idade} = req.body;
    res.send(`Nome: ${nome}, Idade: ${idade}`);
    if(!nome || !idade){
        return res.status(400).json({error:'informe o nome e a idade'})
    }
    const novo = {nome, idade};
    dados.push(novo);
    res.status(201).json({message:'Dados recebidos com sucesso!',data:novo});
});

// Rota get para exibir os dados
app.get('/data', (req, res) => {
    res.json(dados);
});

// 6. Inicia o servidor e define que ele deve rodar na porta especificada (3000)
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

