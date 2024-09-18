import React from "react";
import Producto from "./Producto";
import './App.css';

const ListaDeProductos = ({ productos }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {productos.map((producto, index) => (
                <Producto
                key={index}
                nombre={producto.nombre}
                precio={producto.precio}
                />
            ))}
        </div>
    );
};

export default ListaDeProductos;