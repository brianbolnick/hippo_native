export const addRecipe = recipeData => ({
  type: "ADD_RECIPE",
  payload: recipeData
});

export const updateRecipeRating = rating => ({
  type: "UPDATE_RECIPE_RATING",
  payload: rating
});

export const addUserIds = userIds => ({
  type: "ADD_USER_IDS",
  payload: userIds
});
