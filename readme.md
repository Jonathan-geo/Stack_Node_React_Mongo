# BackEnd - NodeJs - Rest

Para esta app no modelo rest, foi utilizado o NodeJs, o Gerenciador de pacotes Yarn e o sistema operacional Ubuntu.

## Install:

1. NodeJs:
    a) Installing Node.js via package manager https://github.com/nodesource/distributions/blob/master/README.md
    b) Install
    
    ```
        # Using Ubuntu
        curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
        sudo apt-get install -y nodejs
    ```
    c) node -v = v10.16.0



1.2 NodeJs: nvm
    a) https://github.com/nvm-sh/nvm
  



2. Node Package Manager
    a) https://www.npmjs.com/
    b) npm -v = 6.9.0



3. Yarn:
    a)  Install

    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update
    sudo apt-get install --no-install-recommends yarn (Caso já tenha instalado o node)
    ```
    b) yarn -v = 1.16.0



## DependenciasYarn
```
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.6.0",
    "multer": "^1.4.1",
    "nodemon": "^1.19.1",
    "sharp": "^0.22.1",
    "socket.io": "^2.2.0"
  }

```


**Express**
O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

```
$ yarn add express
```


**Multer**
Multer: biblioteca que lida com corpos multPartForm-data (images) e já automatiza o processo de upload de arquivos.
cd backend(Pasta que esta meu package.json)
$yarn add multer



**Sharp**
Sharp: Permite manipular imagens size.
$yarn add sharp



**Nodemon**
```
$ yarn add nodemon
```
Com o nodemon, posso criar um script dev no meu arquivo package.json.
```
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^1.19.1"
  }
}
```
Isso permite o reload do servidor.
Agora passo a digitar( $yarn dev )no terminal.



**Mongoose**
Esta bibllioteca permite utilizar o mongoDb em nossa aplicação com base em node. 
```
$yarn add mongoose
```





**cors**
Permite que meu backend seja acessível pelo frontend react, 
mesmo estando em domínios diferentes.

```
$yarn add cors
```

**Socket.io**
Para usar outro protocolo. O protocolo web socket. 

```
$yarn add socket.io
```






## Iniciando o projeto
No terminal executar o Yarn para dar "um start" no projeto. Este comando ira criar um package.json

```
$ yarn init -y
```

**Rodar o projeto**
No terminal digitar:
```
$ node src/index.js

#Com o Nodemon

$yarn dev
```



## MONGO DB online
https://www.mongodb.com/cloud/atlas

a) create cluster 
b) clicar em conect
c) conect you aplication
d) copiar o link de conecção.



# TestarMétodos
insomnia:
https://insomnia.rest/
