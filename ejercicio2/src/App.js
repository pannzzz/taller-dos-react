import React from "react";
import Producto from "./Producto";

function App() {
  return (
    <div>
      <h1 className="card-title text-center"> Listado de Productos</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
      <Producto nombre="Portatil" precio={1869000} />
          </div>
          <div className="col-md-4">
          <Producto nombre="Televisor" precio={2000000} />
            </div>
            <div className="col-md-4">
            <Producto nombre="Iphone" precio={1400000} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;