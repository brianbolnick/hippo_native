import { combineReducers } from "redux";

const INITIAL_RECIPE_STATE = {
  recipeData: {}
};

const INITIAL_USER_STATE = {
  userId: "",
  familyId: ""
};

const recipeReducer = (state = INITIAL_RECIPE_STATE, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return { ...state, recipeData: action.payload };
    default:
      return state;
  }
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case "ADD_USER_IDS":
      return {
        ...state,
        userId: action.payload.id,
        familyId: action.payload.familyId
      };
    default:
      return state;
  }
};

export default combineReducers({
  recipes: recipeReducer,
  user: userReducer
});
