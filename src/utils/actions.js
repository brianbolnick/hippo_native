export const addRecipe = recipeData => ({
  type: "ADD_RECIPE",
  payload: recipeData
});

export const addUserIds = userIds => ({
  type: "ADD_USER_IDS",
  payload: userIds
});
