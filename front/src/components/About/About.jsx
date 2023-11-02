import style from "../About/About.module.css";
import { get_characters } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const About = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_characters());
  }, [dispatch]);
  console.log(characters);
  return (
    <div className={style.characters}>
      {characters?.map((char) => {
        return (
          <div key={char.id} className={style.character}>
            <img src={char.image} className={style.imagen} alt="" />

            <div className={style.info}>
              <h3>{char.name}</h3>
              <h2>{char.gender}</h2>
              <h2>{char.status}</h2>
              <h2>{char.origin.name}</h2>
              <h2>{char.species}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default About;
