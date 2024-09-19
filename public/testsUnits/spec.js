const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../public/server/server.js');


beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/chat_test', {
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('POST /chat', () => {
    it('should respond with a welcome message', async () => {
        const res = await request(app)
            .post('/chat')
            .send({ message: 'iniciar' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.response).toBe('Sou uma IA que simula entrevistas para ajudar você a desenvolver habilidades socioemocionais. Pratique suas respostas e ganhe confiança para se preparar para o sucesso!');
    });

    it('should respond with an error message for unknown input', async () => {
        const res = await request(app)
            .post('/chat')
            .send({ message: 'comando desconhecido' });

        expect(res.statusCode).toEqual(200);
        expect(res.body.response).toBe('Desculpe, não entendi sua pergunta. Pode reformular?');
    });
});