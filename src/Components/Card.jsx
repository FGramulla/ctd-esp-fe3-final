import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'



const Card = ({ name, username, id }) => {

  const [doctor, setDoctores] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchDoc = async () => {
    try {
        const response = await axios.get(url);
        setDoctores(response.data);
    } catch (error) {
        console.log("error fetching doctor", error);
    }
  }

  useEffect(() => {
    fetchDoc();
  }, [])


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {doctor.map(doc => (
        <div key={doc.id} className="card-doc">
          
          <img src="../img/doctor.jpg" height={150} alt=""/>
          <p>{doc.name}</p>
          <p>{doc.username}</p>
          <p>{doc.id}</p>
          <button onClick={addFav} className="favButton">Add fav</button>
        </div>
        
        ))}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
