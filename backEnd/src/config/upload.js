// Biblioteca que lida com corpos MultPart Form Data.
// O multer automatiza o processo de upload de arquivos.
const multer = require('multer');

// Biblioteca nativa do node que lida com caminhos derecionamento de arquivos.
// Ela formata caminhos de forma correta em Windows e Unix
const path = require('path');




// Este arquivo tem a finalidade de salvar a imagem postada pela função post no meu PC na pasta uploads.


// multer.diskStorage salva o arquivo no meu storage
// path.resolve (caminho /destino para salvar o arquivo que é envido pela minha requisição post)
// file.originalname faz com que o nome da imagem permanece original
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
};
