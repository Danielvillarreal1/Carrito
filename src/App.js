import React, {useState} from 'react';
import Footer from './component/footer';
import Header from './component/header';
import Producto from './component/producto';
import Carrito from './component/carrito';

function App() {

  //crear listado de producto
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa VueJS', precio: 40},
    {id: 3, nombre: 'Camisa Node.Js', precio: 30},
    {id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  //State para un carrito de compra
const [carrito, agregarProducto] = useState([]);

   //obtener la fecha
   const fecha = new Date().getFullYear();

  return (
    <>
     <Header
     titulo='Tienda Virtual'
     />
      
          <h1>Lista de Productos</h1>
          {productos.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          ))}
   
      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
 
     <Footer 
     fecha={fecha}
     />
    </>
  );
}

export default App;
