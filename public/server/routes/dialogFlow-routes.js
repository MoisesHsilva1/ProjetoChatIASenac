const chatbotIA = require('../chatIA/chatIA')
module.exports =  app => {

    app.post('/text_query', async (req, res) => {
        console.log(req)
        const { text, userId } = req.body;
        const resulQuery = await chatbotIA.textQuery(text, userId);
        console;log(resulQuery[0])
        res.send('Teste rotas query')
    })

    /*
    app.post('/event_query', async (req, res) => {
        console.log(req)
        res.send('Teste rotas event')
    })
    */
}