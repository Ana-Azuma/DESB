const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(express.json());

// 1. Rota / - Bem vindo
app.get('/', (req, res) => {
    res.json({ message: "Bem vindo a minha API Ricky Morty" });
});

// 2. Rota /personagens - Lista personagens
app.get('/personagens', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar personagens' });
    }
});

// 3. Rota /personagem/:id - Personagem por ID
app.get('/personagem/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Personagem não encontrado' });
    }
});

// 4. Rota /multiplospersonagens - Múltiplos personagens
app.get('/multiplospersonagens', async (req, res) => {
    try {
        // Usar IDs da query string ou IDs padrão [1,2,3]
        const ids = req.query.ids || '1,2,3';
        const response = await axios.get(`https://rickandmortyapi.com/api/character/[${ids}]`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar múltiplos personagens' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});