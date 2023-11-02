import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";
import style from "../Favorites/Favoritos.module.css";
// import "../../App.css";
const Favorites = () => {
  const [aux, setAux] = useState(false);
  const dispacth = useDispatch();

  const handleOrder = (e) => {
    dispacth(orderCards(e.target.value));
    setAux(!aux);
  };
  const hanldeFilter = (e) => {
    dispacth(filterCards(e.target.value));
  };
  const allCharacter = useSelector((state) => state.myFavorites);
  return (
    <div className={style.favorito}>
      <div className={style.select}>
        <select onChange={handleOrder} name="" id="">
          <option value="A">Ascendente</option>
          <option value="D">Decendente</option>
        </select>
        <select onChange={hanldeFilter} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown"> unknown</option>
        </select>
      </div>
      <div className={style.favCard}>
        {allCharacter.length &&
          allCharacter.map(
            ({ id, name, status, species, gender, origin, image, onClose }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                  onClose={onClose}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default Favorites;
