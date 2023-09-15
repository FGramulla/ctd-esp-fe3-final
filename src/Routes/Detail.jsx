import "../styles/Detail.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDocStates } from '../Context/Context';


const Detail = () => {
  const {state, dispatch} = useDocStates()
  const params = useParams();
  const {id,name,email,phone,website} = state.dentista;

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTA', payload: res.data}))
}, [])


  return (
    <>
    <div className='detail'>
      <div>
        <h1>Detail Dentist ID: {id} </h1>
        <h2>Nombre: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Telefono: {phone}</h2>
        <h2>Website: {website}</h2>
      </div>
        <img src="/img/doctor.jpg" alt="" className="card-image"/>
    </div>
    </>
  )
}

export default Detail