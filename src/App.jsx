import React from 'react';

import Lista from './components/Lista';
import ListaClase from './components/ListaClase';
import Title from './Title';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Estudiar React.js' }];

  return (
    <div>
      <Title />
      
      <ListaClase titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <ListaClase
        titulo="Lista de la compra"
        icono="✌"
        elementos={elementos2}
      />
      <ListaClase titulo="Todos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
