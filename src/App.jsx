import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

import { MenuItems } from './data/MenuItems';

export function App() {
  return (
    <Router>
      {/*<Header />
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />*/}

      <Header />
      {MenuItems.map(function (item) {
        return (
          <li>
            <Route to={item.path}>{item.title}</Route>
          </li>
        );
      })}
    </Router>
  );
}
