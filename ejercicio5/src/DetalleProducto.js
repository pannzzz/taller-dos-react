import React from "react";
import './DetalleProducto.css';

const DetalleProducto = ({ nombre, precio, descripcion }) => {
    return (
        <div className="detalle-producto">
            <h2 className="nombre-producto"> {nombre}</h2>
            <p className="precio-producto">Precio: ${precio}</p>
            <p className="descripcion-producto">{descripcion}</p>

        </div>
    );
};

export default DetalleProducto;