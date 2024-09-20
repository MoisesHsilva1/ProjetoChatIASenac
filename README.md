# Chatbot de IA para Simulação de Entrevistas
Este projeto é um chatbot de inteligência artificial que simula entrevistas de emprego, ajudando jovens a desenvolver habilidades socioemocionais e a se prepararem para o sucesso em entrevistas reais. O chatbot foi desenvolvido como parte do projeto do ano letivo do Senac Aclimação como trabalho de desenvolvimento para o meu ensino médio técnico.
## Funcionalidades

- Respostas predefinidas baseadas em perguntas comuns de entrevistas.
- Mensagens de erro amigáveis quando o usuário faz perguntas não reconhecidas.
- Integração com MongoDB para armazenar e recuperar perguntas e respostas.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada no desenvolvimento do servidor e do chatbot.
- **Node.js**: Ambiente de execução do JavaScript no lado do servidor.
- **Express**: Framework para construção da API REST.
- **MongoDB**: Banco de dados NoSQL para armazenar as perguntas e respostas.
- **CORS**: Middleware para permitir requisições de diferentes origens.
- **Supertest**: Biblioteca para testes de APIs.
- 
<h2>Status do Projeto</h2>
<p align="left">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=%20DESENVOLVIDO&color=GREEN&style=for-the-badge"/>
</p>

<h2>Demonstração da Aplicação</h2>
https://github.com/user-attachments/assets/25977c4d-9bac-4509-af83-ddb908ed8629


## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-chatbot.git
   cd projeto-chatbot

2. Installe as depencias
    ```bash
    npm install

4. incie o servidor
    ```bash
   node public/server/server.js


6. Acesse o chatBot através do EndPoint
    ```bash
    POST http://localhost:3000/chat


Testes
 ```bash
 npm test
