import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

import * as serviceWorker from './serviceWorker';

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0
  }

  agregar = () => this.setState({
    cantidad: this.state.cantidad + 1
  })

  quitar = () => this.setState({
    cantidad: this.state.cantidad - 1
  })

  limpiar = () => this.setState({
    cantidad: 0
  })

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />     
        <div>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={this.agregar} > + </button>
        <button onClick={this.quitar} > - </button>
        <button onClick={this.limpiar} > Limpiar</button>        
        <hr/>
        <p>$ { this.props.price }</p>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
     
    )
  }
}

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={5.00} />
    <TarjetaFruta name={'Naranja'} price={1.50} />
    <TarjetaFruta name='Kiwi' price={3.30} />
  </div>
)

//ReactDOM.render(<App />, document.getElementById('root'))



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
