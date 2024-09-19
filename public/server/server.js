const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chat')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const responseSchema = new mongoose.Schema({
    message: String,
    response: String
});

const Response = mongoose.model('Response', responseSchema);

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message ? req.body.message.toLowerCase() : '';

    try {
        const responseDb = await Response.findOne({ message: userMessage });

        if (responseDb) {
            console.log(`Resposta encontrada: ${responseDb.response}`);
            res.json({ response: responseDb.response });
        } else {
            res.json({ response: 'Desculpe, não entendi sua pergunta. Pode reformular?' });
        }
    } catch (error) {
        res.status(500).json({ response: 'Erro interno do servidor.' });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

module.exports = app;
