import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

import { MenuItems } from './data/MenuItems';

function createMenuLinks() {
  const listRoutes = [];
  for (let i = 0; i < MenuItems.length; i++) {
    listRoutes.push(
      <li>
        <Route
          path={MenuItems[i].path}
          exact
          component={MenuItems[i].component}
        />
      </li>
    );
  }
  return listRoutes;
}

export function App() {
  return (
    <Router>
      {/*<Header />
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />*/}

      <Header />
      {MenuItems.map(function createRoute(item) {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
