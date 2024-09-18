import  React from 'react';

const Producto = ({ nombre, precio }) => {
    return (
        <div className='card' style={{width: '18rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>{nombre}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Precio: ${precio}</h6>
                <p className='card-text'>Un excelente producto con todas las funcionalidades que necesitas.</p>
            </div>
        </div> 
    )
}

export default Producto;