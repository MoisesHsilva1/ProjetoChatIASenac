const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());


app.post('/chat', (req, res) => {
    const userMessage = req.body.message ? req.body.message.toLowerCase() : '';
    console.log('Mensagem recebida:', userMessage); 

    let response = '';

    if (userMessage.includes('iniciar')) {
        response = 'Seja Bem-vindo! A entrevistandoIA meu objetivo aqui é te ajudar a desenvolver algumas habilidades socioemocionais. Vamos começar?';
    } else if (userMessage.includes('vamos') || userMessage.includes('começar')) {
        response = 'Ótimo! Primeiro preciso que você escolha um dos meus 3 níveis: 1 - fase inicial, 2 - fase intermediária e 3 - fase avançada.';
    } else {
        response = 'Desculpe, não entendi sua pergunta. Pode reformular?';
    }

    res.json({ reply: response });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
