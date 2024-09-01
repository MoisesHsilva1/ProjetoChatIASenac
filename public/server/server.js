const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/public/server', (req, res) => {
    res.send('Hello World');
});

require('./routes/dialogFlow-routes')(app);

app.listen(port, () => {
    console.log('Server running');    
});