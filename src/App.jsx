
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Route, Routes } from 'react-router-dom';
import Card from "./Components/Card";



function App() {
  return (
      <div className="App">
          <Navbar/>
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/dentista/:id" element={Detail}/>
            <Route path="/Favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
