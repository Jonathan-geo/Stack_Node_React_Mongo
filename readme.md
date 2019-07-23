# Stack - NodeJs - React - MongoDB

Para esta app no modelo rest, foi utilizado o NodeJs, o Gerenciador de pacotes Yarn e o sistema operacional Ubuntu.


# Back-End


## Instalação

1. NodeJs: Versão LTS

    a) Installing Node.js via package manager https://github.com/nodesource/distributions/blob/master/README.md

    b) Install:

    ```bash
        # Using Ubuntu
        curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
        sudo apt-get install -y nodejs
    ```
    c) node -v = v10.16.0



2. NVM: Node Version Manager

    Gerenciador de versões Node.

    a) https://github.com/nvm-sh/nvm




3. NPM: Node Package Manager

    Gerenciador de pacotes/dependecias Node.

    a) https://www.npmjs.com/

    b) npm -v = 6.9.0



4. Yarn:

    Gerenciador de pacotes/dependencias Node.

    a)  Install:

    ```bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update
    sudo apt-get install --no-install-recommends yarn (Caso já tenha instalado o node)
    ```
    b) yarn -v = 1.16.0


## Iniciando o projeto

**Iniciando o Yarn**

No terminal, dentro da pasta backEnd, executar o Yarn para dar "um start" no projeto. Este comando irá criar um package.json (arquivo fundamental do javaScript)

```
$ yarn init -y
```

**Istalando o Express**

```
$ yarn add express
```
Este comando ira instalar as dependencias do Express. Você poderá observar no arquivo package.json que o nome express estará lá. Você poderá observar também que um arquivo yarn.lock foi criado, juntamnete com a pasta node_modules. O yarn.lock é um arquivo de cache e o node_modules é onde estará as funcionalidades das bibliotecas instaladas.


**Rodar o projeto**
No terminal digitar:
```
$ node src/index.js

#Com o Nodemon, basta digitar:

$yarn dev
```



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

```
$cd backend   #Pasta que esta meu package.json
$yarn add multer
```



**Sharp**

Sharp: Permite manipular imagens size.

```
$yarn add sharp
```


**Nodemon**

Reload de servidor.

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

Esta bibllioteca permite utilizar o mongoDb em nossa aplicação com base em node. Caso queira utilizar o sql, ver a dependencia **Sequelize** https://blog.rocketseat.com.br/nodejs-express-sequelize/

```
$yarn add mongoose
```


**cors**

Permite que meu backend seja acessível pelo frontend react, mesmo estando em domínios diferentes.

```
$yarn add cors
```

**Socket.io**

Para usar outro protocolo. O protocolo web socket.
Também é fundamental para fazer o reload automático da página (Para isso usar a lib socket.io-client no front)

```
$yarn add socket.io
```



## MONGO DB online
https://www.mongodb.com/cloud/atlas

a) create cluster
b) clicar em conect
c) conect you aplication
d) copiar o link de conecção.



## TestarMétodos
insomnia:
https://insomnia.rest/

**Post**

Requisição do tipo Post
  Tipo Multipart Form




# Front-End

**Instalando o Create React**

Versão antiga
> npm install -g create-react-app

Desinstalar versão antiga
> npm uninstall -g create-react-app


Versão mais recente

> yarn global add create-react-app

> npx create-react-app frontEnd




**Iniciando o React**

O comando a seguir faz a inicialização das dependencias necessárias para a inicialização do front-end com React.
Neste comando, o frontEnd no final é utilizado para criar uma pasta onde sera alocado a minha pasta node_modules e todos os arquivos de configuração do react.

Com Yarn
```
$ yarn create react-app frontEnd  //Este foi o comando que usei nesta aplicação.
```

Com NPX
```
$ npx create-react-app frontEnd
```

Com npm

```
$ npm create-react-app frontEnd
```

**React Start**

```
$yarn start
```



**Gerenciador de Rotas**

Dependencia utilizada para gerenciar as rotas.

```
$yarn add react-router-dom
```


**Axios**

Esta lib irá buscar as informações do backEnd para o frontEnd.
A biblioteca nativa do fatch que permite fazer requisições http (ajax).
Mas para esta app iremos usar a Axios para fazer estas requisi.
A axios permite, dentre várias coisas, configurar base URL, que irá servir para todas as requisições.

```
$yarn add axios
```

**Socket.io-client**

Utilizada para fazer o reload automático da página. 

```
$yarn add socket.io-client
```



#
