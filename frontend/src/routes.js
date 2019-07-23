// Importando o react para utilizar a marcação jsx <.....>
import React from 'react';

// Biblioteca que gerencia as rotas no react.
import { Switch, Route } from 'react-router-dom';

// Importando a componente Feed
import Feed from './pages/Feed';

// Importando a componente New
import New from './pages/New';

// Função que ira gerenciar as minhas rotas.
// O jsx <Switch> garante que apenas uma rota sera usada de cada vez.
// O dom procura se a url que o usuário digitou esta contido dentro das rotas especificadas.
function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;
