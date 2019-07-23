import React from 'react';

// Quando utilizamos o react-router-dom precisamos utilizar a "tag"
// <BrowserRouter>  </BrowserRouter> para que as rotas tenha efeito.
import {BrowserRouter} from 'react-router-dom';

// Importando o component Header
import Header from './components/Header';


// Importando as rotas para serem chamadas pelo app.
import Routes from './routes';




// Este App é um componente.
// Componente é basicamnete um arquivo javaScript que tem como função retornar um conteúdo jsx.
// Os componentes podem ser escrito no formato de função ou de classe.
// Um componente pode ser isolado. Ele pode ser estrutural HTML, de estilização CSS  e de lógica JS.
// <Routes /> é a chamada do component que está nas minhas rotas.
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
// Colocando o <BrowserRouter> nesta página, já fará efeitos nas página rotas.

export default App;
