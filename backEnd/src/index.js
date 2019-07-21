// Importando as bibliotecas.
//Express biblioteca básica de comunicação web
const express = require('express');  //Importando como express a biblioteca express

//Mongoose biblioteca de comunicação com o mongoDB
const mongoose = require('mongoose'); //Importando como mongoose a biblioteca mongoose

// Biblioteca que trata de caminhos (pastas etc)
const path = require('path'); //Importando como path a biblioteca path

// Biblioteca que faz a comunicação do frontend e backEnd mesmo em domínios diferentes.
const cors = require('cors'); //Importando como cors a biblioteca cors




// Instanciando a função express da biblioteca com a constante app
// A função express cria um servidor para poder ser acessado
const app = express();

// Biblioteca padrão do node
// Fazer nossa app utilizar o http
const server = require('http').Server(app);

// Biblioteca padrão do node
// Fazer nossa app utilizar o websocket
// o io permite a app receber e enviar requisições.
const io = require('socket.io')(server);


//Estabelecendo a comunicação com o mongoDb
//OBS: Colocar o usuário e senha de acesso ao banco de dados.
//Usar a opação Database Access no site do mongoDB para ver as configurações de acesso(Senha e Usuário)
//Nesta caso, para fins de estudo criei um usuário chamado semana e uma senha chamada semana.
// Ainda no site, na aba (Network Access /  ADD IP ADDRESS) devemos criar um acesso (Whitelist Entry)
//Setar o acesso como ALLOW ACCESS FROM ANYWHERE.
mongoose.connect('mongodb+srv://semana:semana@cluster0-5ueib.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

//Criando um middleware para deixar o websockt em todas os arquivos.js
//middleware é uma função que sempre recebe rec e res e, retorna algo.
//Podemos dizer que middleware é um interceptador de chamada de requisições
// esta função permite o uso do websocket io.
app.use((req, res, next)=> {
    req.io = io;
    // esta variavel garante que tudo seja executado.
    next();
})

//Permite que o react acessa nossa app mesmo estando em domínios diferentes.
app.use(cors());

// Uma rota para receber as imagens em forma de link.
// Se eu ir em localhost:3355/files poderei acessar a imagem.
// Com isso posso usar a imagem no frontend.
app.use('/files', express.static(path.resolve(__dirname,'..','uploads', 'resized')));


// Com este comando meu app passa a usar o arquivo routes.js
// No arquivo routes utilizei um module.exports = routes; para usar as rotas aqui.
app.use(require('./routes'));

//A porta padrão do navegador é 80
//Neste caso setei a porta 3355 como padrão desta aplicação.
//localhost:3355
server.listen(3355);
