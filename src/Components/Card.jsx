import "../styles/Cards.css"
import { useDocStates } from "../Context/Context";
import { Link } from "react-router-dom";


const Card = ({ dentista }) => {

  const {fav, setFavs} = useDocStates()

  return (
    <div className="card">
        <div className="card-doc">
          <Link to={'/detail/' + dentista.id}>
            <img src="../img/doctor.jpg" alt=""/>
            <h2>name: {dentista.name}</h2>
            <h3>{dentista.username}</h3>
            <h1>{dentista.id}</h1>
          </Link>
          <button onClick={() => setFavs((prevFavs) => [...prevFavs, dentista])} className="favButton">⭐</button>
        </div>  
    </div>
  );
};

export default Card;
