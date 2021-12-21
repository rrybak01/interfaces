import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.listaInicial = [];
    this.listaComponentes = [];
    this.valorTextInput = React.createRef();
    this.valorPrioritySelect = React.createRef();
    this.state = {
      listaComponentes: this.listaInicial,
    };
  }

  recorrer() {
    if (this.props.elementos !== undefined) {
      for (let i = 0; i < this.props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={this.props.elementos[i].done}
            texto={this.props.elementos[i].texto}
            prioridad={this.props.elementos[i].prioridad}
          />
        );
      }
    }
  }

  addElement() {
    const newLista = this.state.listaComponentes.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.current.value}
        prioridad={this.valorPrioritySelect.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    this.recorrer();
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>
          {this.state.listaComponentes}
          <li>
            <input
              ref={this.valorTextInput}
              type="text"
              placeholder="Introduce una tarea"
            />
            <br />
            <select ref={this.valorPrioritySelect}>
              <option value="alta">Prioridad Alta</option>
              <option value="media">Prioridad Media</option>
              <option value="baja">Prioridad Baja</option>
            </select>
            <button onClick={this.addElement.bind(this)}>Añadir</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
