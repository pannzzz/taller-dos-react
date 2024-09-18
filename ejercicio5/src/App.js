import React from "react";
import DetalleProducto from "./DetalleProducto";

function App() {
  const producto = {
    nombre: 'celular',
    precio: 3000000,
    descripcion: 'Smartphone de ultima generacion',
  };

  return (
    <div className="App">
      <h1 className="text-center">Detalles del producto</h1>
      <DetalleProducto
      nombre={producto.nombre}
      precio={producto.precio}
      descripcion={producto.descripcion}
      />
    </div>
  );
}

export default App;