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



# MOBILE

**Preparando Ambiente**

Para esta aplicação foi utilizado o pack JDK SDK e NodeJs

**JDK8**
A versão utilizada do Java foi a JDK (Java Development Kit) 8.

>$ java -version

Caso a versão do seu java não seja a 8 e você já tenha esta versão instalada, basta digitar:

>$ sudo update-alternatives --config java

Caso você não tenha o Java 8 instalado, utilizar os comandos a seguir:

>$ sudo add-apt-repository ppa:openjdk-r/ppa
>$ sudo apt-get update
>$ sudo apt-get install openjdk-8-jdk

**NodeJS**

>$ node -v

Caso não tenho o NodeJs instalado:

>$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
>$ sudo apt install nodejs

**React Native**

>$ sudo npm install -g react-native-cli

ou

>$ yarn global add react-native-cli

**Lib Gráfica 32bits**

>$ sudo apt-get install gcc-multilib lib32z1 lib32stdc++6

**SDK Android**

Ir no site https://developer.android.com/studio/#downloads na opção "Command line tools only" e baixe a SDK referente ao seu sistema operacional. Após feito o Download, extraia o conteúdo do pacote e coloque em uma pasta com o seguinte endereço:

>$ ~/Android/Sdk

Com esse endereço precisamos configurar algumas variáveis de ambiente em nosso sistema, procure pelo primeiro dos seguintes arquivos existentes no seu sistema: ~/.bash_profile, ~/.profile, ~/.zshrc ou ~/.bashrc, e adicione essas três linhas no arquivo (de preferência no início):

>$ export ANDROID_HOME=~/Android/Sdk
>$ export PATH=$PATH:$ANDROID_HOME/tools
>$ export PATH=$PATH:$ANDROID_HOME/platform-tools

OBS: Utilizar o comando abaixo para acessar o arquivo oculto como administrador.

>$ sudo nautilus

Após colocar os códigos no arquivo desejado, você deverá executar o arquivo que está dentro da pasta que você fez Download. Atenção: Olhar o endereço de execução.

>$ ~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"


OBS: Para rodar o react-native, tive que seguir o tutorial da página oficial:

> https://facebook.github.io/react-native/docs/getting-started.html


**Emulador Genymotion** [Não utilizo esta opção]

Para emular o android no Ubuntu é necessário, ante de tudo, instalar uma virtual box.

>$ sudo apt-get install virtualbox

Vá ao site da Genymotion e baixe o arquivo .bin https://www.genymotion.com/fun-zone/

Acesse a pasta do arquivo .bin execute os seguintes comandos:

>$ chmod +x genymotion-2.2.2_x64.bin

>$ ./genymotion-2.2.2_x64.bin

Após instalar o genymotion você deverar acessar, no terminal, a pasta a no qual foi instalado o arquivo, no meu caso foi a pasta que está o arquivo .bin executado. Você deverá entrar na pasta genymotion e executar o seguinte comando.

>$ ./genymotion

Ao abrir o emulador você deverá fazer as seguintes configurações:

1. Preferences > Settings > Account: faça login com sua conta criada no site do Genymotion.

1. Settings > ADB > Use Custom Android SDK Tools: utilize o caminho onde você extraiu os arquivos baixados do site do Android anteriormente (Ex.: /home/jonathan/Android/Sdk).

1. Voltando a tela principal do Genymotion instale a versão do celular que deseja: Utilizei o Galaxy S9

**Conectar emulador ao ADB (Android Debug Bridge)**

Conectar o emulador ao ADB, pelo IP do dispositivo. Para verificar o IP do dispositivo, basta esticar a janela do emulador, o IP estará no título da janela.

No terminal rode o comando:

>$ adb connect IP_DO_SEU_EMULADOR:5555

>$ adb devices

Se aparecer o nome do seu dispositivo na lista, seu emulador foi conectado com sucesso!
Com o emulador aberto, basta rodar react-native run-android na pasta do seu projeto.

>$ react-native run-android


**Emulando pelo Celular** [Utilizo esta opção]
1. No celular:

Habilitar modo de desenvolvedor no dispositivo e ir até o [Menu Sistema] e procurar pela opção [Opções de desenvolvedor]. Ao entrar nesse menu você deve ativá-lo selecionando o primeiro botão que deve estar como Desativado e por último você tem que ativar a Depuração USB, que está um pouco abaixo nessa lista.

2. No computador:

No terminal/prompt execute o comando abaixo, o retorno deve ser algo como: [Lembrando, o cavo USB deve estar conectado]

> adb devices

```
List of devices attached
14ed2fcc device # Dispositivo físico
```

Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para rodar a aplicação.


**Iniciando o projeto**
Após todas as instalações você deve utilizar o comando:

>$ react-native init nomeDiretório

>$ cd nomeDiretório

>$ react-native start

>$ react-native run-android


**Testando a Emulação**[Celular Físico]
O seguinte comando permite ver se o celular está conectado.

>$ lsusb
```
Bus 002 Device 008: ID 04e8:6860 Samsung Electronics Co., Ltd Galaxy (MTP)
```
No caso do meu celular usarei o ID 04e8

Você precisará inserir o ID nas suas regras do udev para começar a usar:

>$ echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules


Use o seguinte comando (Android Debug Bridge) para ver se seu dispositivo está conectado;

>$ adb devices


PS: Eu tive alguns problemas com a instalação e execução do app. Obtive a solução no seguinte link:

> https://stackoverflow.com/questions/32572399/android-failed-to-load-js-bundle


**Retornar ao Projeto**


PS2: Toda vez que for retomar o projedo, deve-se:

1. Abrir o app

2. Iniciar o bundle.

>$ react-native start

3. Após estar com a página Home aberta no cell, deve-se chacoalhar o celular (literalmente). As opções irão aparecer. Clicar em Enable Live Reload


**Dependencias Utilizadas**

Biblioteca para navegação:

>$ yarn add  react-navigation


Biblioteca que agrega gestos de navegação no app:Seguir o três passos.

>$ yarn add react-native-gesture-handler
>$ react-native link react-native-gesture-handler
>$ react-native run-android

Resetar o cache pariodicamente:

>$ react-native start --reset-cache


#
