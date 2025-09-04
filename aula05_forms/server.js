const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

const usuarios = [];

app.post('/usuario', (req, res) => {
  // Para ajudar a debug, imprime o req.body no console
  console.log('Corpo da requisição:', req.body);

  // Caso o req.body esteja undefined, desestruturação falha
  if (!req.body) {
    return res.status(400).json({ error: 'Corpo da requisição vazio ou inválido' });
  }

  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({ error: 'Nome e idade são obrigatórios.' });
  }

  usuarios.push({ nome, idade });

  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', usuario: { nome, idade } });
});

app.get('/usuarios', (req, res) => {
  res.json({ usuarios });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
