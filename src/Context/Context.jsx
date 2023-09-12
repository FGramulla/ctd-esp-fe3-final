import axios from "axios";
import { useContext, createContext, useState, useEffect} from "react";

const DoctorStates = createContext();

const localFavs = JSON.parse(localStorage.getItem('favs'));
const initialFavState = localFavs ? localFavs : [];

const Context = ({ children }) => {

const [dentistas, setDentistas] = useState([]);
const [favs, setFavs] = useState(initialFavState);
const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
    .then(res => setDentistas(res.data))
}, []);

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(favs))
},[favs]);

  return(
    <DoctorStates.Provider value={{dentistas, favs, setFavs}}>
        {children}
    </DoctorStates.Provider> 
  )
}

export default Context

export const useDocStates = () => useContext(DoctorStates)