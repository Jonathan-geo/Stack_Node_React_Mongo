//Express biblioteca básica de comunicação web
const express = require('express');

// Biblioteca que lida com corpos MultPart Form Data.
// O multer automatiza o processo de upload de arquivos.
const multer = require('multer');

// Importando a função do meu arquivo upload
const uploadConfig = require('./config/upload');

// Importando as funções do meu arquivo PostController
const PostController = require('./controllers/PostController');

// Importando as funções do meu arquivo LikeController
const LikeController = require('./controllers/LikeController');





// Criando uma variável que irá chamar a função Router da biblioteca express.
const routes = new express.Router();

// Criando uma variavel para usar a biblioteca multer.
// Lembrabrando que uploadConfig é a função do meu arquivo uplad.
const upload = multer(uploadConfig);

// Rota do tipo get.
// Esta rota pega as informações do arquivo PostController.js localizado na pasta controllers.
// acessando a rota /posts e o arquivo PostController, poderei acessar de modo assincrono o função index.
routes.get('/posts', PostController.index);

// Esta rota recebe /posts como endereço e faz uma busca pela função store no meu arquivo PostController.
// upload.single('image') - aqui estou usando a biblioteca multer atravéz da variavel upload
// o image é pra dizer qual é o campo (linha) do meu DataBase que esta usando um arquivo multPartForm
routes.post('/posts', upload.single('image'), PostController.store);
// routes.post('/posts', PostController.store); Isso era antes. Quando eu só queria postar informações.


// Rota do tipo post - posta like
// Nesta rota eu chamo o arquivo LikeController com o método store.
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
