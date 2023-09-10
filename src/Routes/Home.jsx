import React, { useEffect, useState } from 'react'
import "../styles/Cards.css"
import axios from 'axios';
import Card from '../Components/Card';



// import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
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

  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* En cada card deberan mostrar en name - username y el id */}
        {doctor.map(doc => (
          <Card name={doc.name} username={doc.username} id={doc.id} />
        ))}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </div>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </main>
  )
}

export default Home