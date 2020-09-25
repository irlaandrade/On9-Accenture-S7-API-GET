const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json');

app.use(express.json());

// Read All
app.get('/mulheres', (req, res) => {
    res.json(mulheres);
});

// Read Single
app.get('/mulheres/:id', (req, res) => {
    const id = req.params.id;
    const mulherEscolhida = mulheres.find(mulher => mulher.id == id);
    res.json(mulherEscolhida);
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});