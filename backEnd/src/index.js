// Importando as bibliotecas.

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Instanciando a função express da biblioteca 
const app = express();

//Fazer nossa app utilizar o http e o webssocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://semana:semana@cluster0-5ueib.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

//Criando um middleware para deixar o websockt em todas os arquivos.js
app.use((req, res, next)=> {
    req.io = io;

    next();
})

//Permite que o react acessa nossa app
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname,'..','uploads', 'resized')));

app.use(require('./routes'));

server.listen(3355);