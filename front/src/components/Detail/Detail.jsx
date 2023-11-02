import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../Detail/Detail.module.css";
// const URL = "https://rickandmortyapi.com/api/character/";
const URL = "http://localhost:3001/rickandmorty/character/";
const URL_API = "key=henrym-duvan321";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL}${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div className={style.dtailContainer}>
      <div className={style.container}>
        {" "}
        <h1>{character.name && character.name}</h1>
        <h3>{character.status && character.status}</h3>
        <h3>{character.species && character.species}</h3>
        <h3>{character.gender && character.gender}</h3>
        <h3>{character.origin?.name && character.origin?.name}</h3>
      </div>
      <div className={style.container2}>
        {" "}
        <img
          className={style.imagen}
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
};
export default Detail;
