import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import style from "../Card/Card.module.css";
function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const dispatch = useDispatch();
  const myFavorite = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavorite.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorite]);
  const handleFavorite = () => {
    isFav
      ? dispatch(removeFav(id))
      : dispatch(
          addFav({ id, name, status, species, gender, origin, image, onClose })
        );
    setIsFav(!isFav);
  };

  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.circle}></div>

        <div className={style.img}>
          <img src={image} alt={name} />

          <div className={style.favoritos}>
            {
              <button className={style.favorite} onClick={handleFavorite}>
                {isFav ? "❤️" : "🤍"}
              </button>
            }
            <button
              className={style.button}
              onClick={() => {
                onClose(id);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div className={style.descripcion}>
        <NavLink className={style.name} to={`/detail/${id}`}>
          <h2>{name} </h2>
        </NavLink>
        <h2 className={style.species}>{species} </h2>
      </div>
    </div>
  );
}

export default Card;
