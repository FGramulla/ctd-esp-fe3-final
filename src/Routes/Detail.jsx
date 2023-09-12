import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Detail = () => {
  const [dentista, setDentista] = useState({});
  const params = useParams();
  console.log(params)

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url)
    .then(res => setDentista(res.data))
  }, [])


  return (
    <>
      <h1>{dentista.name}</h1>
        <h3>{dentista.email}</h3>
        <h4>{dentista.phone}</h4>
        <h5>{dentista.website}</h5>
    </>
  )
}

export default Detail