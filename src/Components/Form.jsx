import React, { useState } from "react";
import "../styles/Form.css";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [form, setForm] = useState({
    username: "",
    email: "",
  });
  

  const onChange = (e) => {
    const { value, name} = e.target;
    setForm((estado) => ({
      ...estado,
      [name]: value 
    }));
  }

  const showData = () => {
    console.log("form: " ,form)
  }

const onSubmit = (e) => {
  e.preventDefault();
}

  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
      <label htmlFor="">Username: <input onChange={onChange} type="username" name="username" value={form.username}/></label>
      <label htmlFor="">Email: <input onChange={onChange} type="email" name="email" value={form.email}/></label>
      <button onClick={showData}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
