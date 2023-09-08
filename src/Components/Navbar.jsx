import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Barra.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to="/" className="site-title">
          DH Odonto
        </Link>
      <div className='nav-bar'>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/favs">Favs</Link>
          </ul>
        <button id='btn'>Change theme</button>
      </div>
      
    </nav>
  )
}

export default Navbar