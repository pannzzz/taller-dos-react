import React, { Component } from "react";

class Contadorzzz extends Component {
  constructor(props) {
      super(props);
      this.state = {
        contador: 0,
      };
    }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

    render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>Decrementar</button>
        <button onClick={() => this.setState({ contador: 0 })}>Reiniciar</button>
        

      </div>
    );
  }
}
export default Contadorzzz;