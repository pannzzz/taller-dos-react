import React from "react";

const Producto = ({ nombre, precio }) => {
    return (
        <div className="card" style={{width: '18rem', margin: "20px" }}>
            <div className="card-body">
                <h2 className="card-title text-center">{nombre}</h2>
                <h3 className='card-subtitle mb-2 text-body-secondary text-center'>Precio: ${precio}</h3>

            </div>
        </div>
    );
};

export default Producto;