import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { removeFav } from "./Redux/actions";
import { useDispatch } from "react-redux";
// const URL = "https://rickandmortyapi.com/api/character/";
const URL = "http://localhost:3001/rickandmorty/character";
const URL_API = "key=henrym-duvan321";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const dispacth = useDispatch();

  const onClose = (id) => {
    setCharacters(
      characters.filter((chart) => {
        return chart.id !== +id;
      })
    );
    dispacth(removeFav(id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/personajes" element={<About />}></Route>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
