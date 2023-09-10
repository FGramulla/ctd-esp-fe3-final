import React from "react";
import "../styles/Cards.css"

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar el name, username y el id */}
        <div key={id} className="card-doc">
          <img src="../img/doctor.jpg" alt=""/>
          <h2>{name}</h2>
          <h3>{username}</h3>
          <h1>{id}</h1>
          <button onClick={addFav} className="favButton">Add fav</button>
        </div>       
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
