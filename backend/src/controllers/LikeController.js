// Importando o model Post, ou seja, função que cria o banco de dados.
const Post = require('../models/Post');
// Lembrando que PostSchema foi o nome que eu dei pra função que eu criei.
// Toda vez que invoco a variavel PostSchema essa variavel invoca uma função - new mongoose.Schema()-
// Dentro da função new mongoose.Schema tem uma estrutura de banco de dados que está descrito no arquivo Post.js
// No arquivo Post.js eu exportei a variável PostSchema como Post.
// Logo: Post = PostSchema = new mongoose.Schema



module.exports = {
    // função que cria os likes
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();

        // Função do websocket
        // Diz para o frontend que é like
        req.io.emit('like', post);

        return res.json(post);
    }
};
