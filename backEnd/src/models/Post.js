
//Mongoose biblioteca de comunicação com o mongoDB
const mongoose = require('mongoose'); //Importando como mongoose a biblioteca mongoose

// Esquema/Schema/Esqueleto do meu banco de dados.
// mongoose.Schema: função que cria meu banco de dados.
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});
//OBS: timestamps gera um registro de data: created at updated at.


// Logo abaixo esta o código de esportação do meu PostSchema
// Neste caso eu exportei o PostSchema com o nome de Post(Observar a letra maiúscula)
module.exports = mongoose.model('Post', PostSchema);
