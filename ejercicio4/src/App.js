import React from 'react';
import ListaDeProductos from './ListaDeProductos';
import './App.css';

function App() {
  const productos = [
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Teléfono', precio: 800 },
    { nombre: 'Auriculares', precio: 150 },
    { nombre: 'Mouse', precio: 50 },
  ];

  return (
    <div className='container'>
      <h1 className='text-center'>Listado de Productos</h1>
      <ListaDeProductos productos={productos} />
    </div>
  )
}

export default App;