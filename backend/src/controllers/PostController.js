// Importando o model Post, ou seja, função que cria o banco de dados.
const Post = require('../models/Post');
// Lembrando que PostSchema foi o nome que eu dei pra função que eu criei.
// Toda vez que invoco a variavel PostSchema essa variavel invoca uma função - new mongoose.Schema()-
// Dentro da função new mongoose.Schema tem uma estrutura de banco de dados que está descrito no arquivo Post.js
// No arquivo Post.js eu exportei a variável PostSchema como Post.
// Logo: Post = PostSchema = new mongoose.Schema

// Importando a dependecia sharp -- esta dependecia permite manipular imagens.
// É necessário instalar esta dependecia
const sharp = require('sharp');

// Biblioteca nativa do node
// Essa biblioteca vai auxiliar no caminho da imagem (resized) para a nova pasta (resized)
const path = require('path');

// Biblioteca nativa do node file sistem
// Manipula arquivos
// No caso deste app esta função faz com que a imagem original é deletada apos redimencionar seu tamanho
const fs = require('fs');

module.exports = {
              // Função Find (Listar os posts existentes)

    // constante posts
    // posts = Post.find (ou seja, buscar no meu Post - que é o mesmo que meu data base).
    // Post.find (.find é um método javaScript(Busca))
    async index(req, res) {
        //lista de posts que meu db tem
        const posts = await Post.find().sort('-createdAt');

        // res.json retorna a resposta da requisição em formato json
        return res.json(posts);

    },




            // Função Post (Cadastrar novos posts)

    async store(req, res){
        //cadastrar novos posts na api
        // Estou buscando os dados author, place.... de dentro da minha req.body
        // Lembrando que req.body é o corpo da requisição.
        const { author, place, description, hashtags } = req.body;

        // Como na constante de cima eu peguei o dados de texto
        // na constante de baixo eu pego a imagem.
        const { filename: image } = req.file;

        // Esta const transforma a imagem png, por exemplo, no arquivo jpg.
        const [name] = image.split('.');
        const fileName = name +'.jpg';

        // Redimencionado a imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        //faz com que a imagem fique apenas dentro de resized
        fs.unlinkSync(req.file.path)


        // Criar o post
        // await é para esperar a função finalizar
        // Post.create = Lembrando que Post é a função importada do arquivo post, ou seja,
        // Post = PostSchema = new mongoose.Schema
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        // função do websocket
        // Diz para o frontend que é post
        req.io.emit('post', post);

        return res.json(post);
    }
};
