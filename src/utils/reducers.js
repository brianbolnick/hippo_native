import { combineReducers } from "redux";

const INITIAL_STATE = {
  recipeData: {}
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return { ...state, recipeData: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  recipes: recipeReducer
});
