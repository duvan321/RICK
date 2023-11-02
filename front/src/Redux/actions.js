import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTERS } from "./type";
import axios from "axios";

export const get_characters = () => {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/characters/"
      );
      const character = response.data;
      dispatch({
        type: GET_CHARACTERS,
        payload: character,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};
export const addFav = (character) => {
  try {
    return async (dispatch) => {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      if (data.length < 0) throw Error("No hay favoritos");
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.log("error.message");
  }
};

export const posLogin = (formData) => {
  return async function () {
    try {
      await axios.post("http://localhost:3001/rickandmorty/login/", formData);

      alert("te as registrado exitosamente:", formData);
    } catch (error) {
      console.error("Error al crear el conductor:", error);
    }
  };
};
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
