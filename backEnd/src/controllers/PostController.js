const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        //lista de posts que meu db tem
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);

    },
    async store(req, res){
        //cadastrar novos posts na api
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = '${name}.jpg';

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        //faz com que a imagem fique apenas dentro de resized
        fs.unlinkSync(req.file.path)

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);
        
        return res.json(post);
    }
};