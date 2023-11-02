import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTERS } from "./type";

const initialState = {
  characters: [],
  myFavorites: [],
  allCharacters: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    // case "CLOSE_CHARACTER":
    //   return {
    //     ...state,
    //     characters: state.allCharacters.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? [...state.allCharacters].sort((a, b) => a.id - b.id)
            : [...state.allCharacters].sort((a, b) => b.id - a.id),
      };

    // case "ORDER_FILTER":
    //   return {
    //     ...state,
    //     myFavorites:
    //       action.payload === "A"
    //         ? [...state.myFavorites].sort((a, b) => a.id - b.id)
    //         : [...state.myFavorites].sort((a, b) => b.id - a.id),
    //   };

    // case "GET_FAVORITES":
    //   return {
    //     ...state,
    //     myFavorites: action.payload,
    //   };

    default:
      return { ...state };
  }
};

export default reducer;
