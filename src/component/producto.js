import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Eliminar un producto del carrito
    const eleminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        
        //Colocar los productos en el state
        agregarProducto(productos)
    }

    

    return ( 
        <>
        <p> {nombre}</p>
        <p> ${precio}</p>
       
        {productos
        ?
            (
                <button 
                type="button"
                onClick={ () => seleccionarProducto(id) }
                > Comprar</button>
            )
        :
            (
                <button 
                type="button"
                onClick={ () => eleminarProducto(id)}
                > Eliminar</button>
            )
        }
        </>
     );
}
 
export default Producto;