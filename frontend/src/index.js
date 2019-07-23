// Importando o React
// Sem que usar esta sintaxe <App /> estarei usando o React
// Esta sintaxe se chama jsx que é uma mistura de javaScript com XML.
import React from 'react';

// Integração do React com o Browser
// O react tem integração com várias plataformas como exemplo:
// ReactDOM: Integração com Browser
// ReactNative: Integração com Mobile
// ReactVR: Integração com Virtual Realit
import ReactDOM from 'react-dom';

// Impostando a função App do arquivo App.
import App from './App';

// Importando meu arquivo css global.
import './global.css';


// Pega o componente App e coloca ele dentro da div com id root.
ReactDOM.render(<App />, document.getElementById('root'));
